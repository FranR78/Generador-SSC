/**
 * NT-GH.gs — SuperSheets: vista y control a mano del movedor (D1=C).
 *
 * Misma lógica que datos/Movedor.gs, pero en una hoja y con botón. Sale de
 * `read new` (escanear carpeta → nombre+ID) y `ssp move` (mover por ID, estado
 * por fila, corte a 4,5 min, reanudable), adaptado a casar por NOMBRE SANEADO
 * (docs/CONTRATO_NOMBRES.md) en vez de por palabra clave.
 *
 * Instalar: pegar en el editor de Apps Script de la hoja (Extensiones → Apps
 * Script), guardar y recargar la hoja. Sale el menú «NT-GH».
 * Propiedades del script: GITHUB_TOKEN (Contents: Read basta).
 * Hoja propia «NT-GH» (no toca Drive2): B1 = origen, B2 = destino.
 */

const NTGH = {
  repo: 'FranR78/Generador-SSC',
  rama: 'main',
  entrada: 'notas-tecnicas/entrada',
  confirmadas: 'notas-tecnicas/entrada/procesados',
  hoja: 'NT-GH',
  destinoDefecto: 'NT-GH-Procesados',
  fila0: 5,   // primera fila de datos
  cab: ['Archivo', 'ID', 'Nombre saneado', 'Subido', 'Confirmada', 'Movido', 'Nota']
};


/** Contrato de nombres: IDÉNTICO a Extension-NT-GH/defaults.js y datos/Movedor.gs. */
function sanear(s) {
  return String(s).normalize('NFC').replace(/\.[^.]+$/, '').replace(/[^\p{L}\p{M}\p{N}_-]+/gu, '_');
}


function onOpen() {
  SpreadsheetApp.getUi().createMenu('NT-GH')
    .addItem('1. Escanear origen', 'ntgh_escanear')
    .addItem('2. Comprobar GitHub', 'ntgh_comprobar')
    .addItem('3. Mover confirmados', 'ntgh_mover')
    .addToUi();
}


function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(NTGH.hoja);
  if (!sh) {
    sh = ss.insertSheet(NTGH.hoja);
    sh.getRange('A1:A2').setValues([['Origen (ID)'], ['Destino (ID, vacío = NT-GH-Procesados)']]);
    sh.getRange(NTGH.fila0 - 1, 1, 1, NTGH.cab.length).setValues([NTGH.cab])
      .setFontWeight('bold').setBackground('#007932').setFontColor('#fff');
    sh.setFrozenRows(NTGH.fila0 - 1);
  }
  return sh;
}


function filas_(sh) {
  const n = sh.getLastRow() - NTGH.fila0 + 1;
  return n > 0 ? sh.getRange(NTGH.fila0, 1, n, NTGH.cab.length).getValues() : [];
}


/** 1. read new adaptado: PDF del origen (y subcarpetas) → archivo · ID · saneado. */
function ntgh_escanear() {
  const sh = hoja_();
  const origenId = String(sh.getRange('B1').getValue()).trim();
  if (!origenId) return SpreadsheetApp.getUi().alert('Pon el ID de la carpeta origen en B1.');
  const destinoId = destino_(sh).getId();

  const out = [];
  (function recorre(carpeta) {
    const fs = carpeta.getFilesByType(MimeType.PDF);
    while (fs.hasNext()) {
      const f = fs.next();
      out.push([f.getName(), f.getId(), sanear(f.getName()), '', '', '', '']);
    }
    const subs = carpeta.getFolders();
    while (subs.hasNext()) {
      const s = subs.next();
      if (s.getName() !== 'Procesados' && s.getId() !== destinoId) recorre(s);
    }
  })(DriveApp.getFolderById(origenId));

  // Duplicados: no se adivina, se marca y no se moverá.
  const veces = {};
  out.forEach(function (r) { veces[r[2]] = (veces[r[2]] || 0) + 1; });
  out.forEach(function (r) { if (veces[r[2]] > 1) r[6] = 'DUPLICADO'; });

  const n = sh.getLastRow() - NTGH.fila0 + 1;
  if (n > 0) sh.getRange(NTGH.fila0, 1, n, NTGH.cab.length).clearContent();
  if (out.length) sh.getRange(NTGH.fila0, 1, out.length, NTGH.cab.length).setValues(out);
  SpreadsheetApp.getUi().alert(out.length + ' PDF en origen. Ahora «2. Comprobar GitHub».');
}


/** 2. Subido = .md en entrada/ o procesados/. Confirmada = .md en procesados/. */
function ntgh_comprobar() {
  const sh = hoja_();
  const token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) return SpreadsheetApp.getUi().alert('Falta GITHUB_TOKEN en las propiedades del script.');

  const set = function (dir) {
    const s = {};
    listar_(token, dir).forEach(function (f) { if (f.type === 'file' && /\.md$/.test(f.name)) s[sanear(f.name)] = true; });
    return s;
  };
  const enEntrada = set(NTGH.entrada), confirmadas = set(NTGH.confirmadas);

  const filas = filas_(sh);
  filas.forEach(function (r) {
    r[3] = (enEntrada[r[2]] || confirmadas[r[2]]) ? 'SÍ' : 'NO';
    r[4] = confirmadas[r[2]] ? 'SÍ' : 'NO';
  });
  if (filas.length) sh.getRange(NTGH.fila0, 4, filas.length, 2)
    .setValues(filas.map(function (r) { return [r[3], r[4]]; }));
  const ok = filas.filter(function (r) { return r[4] === 'SÍ' && !r[5]; }).length;
  SpreadsheetApp.getUi().alert(ok + ' PDF confirmados listos para mover.');
}


/** 3. ssp move adaptado: mueve SOLO confirmados, nunca borra, corta a 4,5 min. */
function ntgh_mover() {
  const sh = hoja_();
  const destino = destino_(sh);
  const limite = Date.now() + 4.5 * 60 * 1000;
  const filas = filas_(sh);
  let movidos = 0, saltados = 0;

  for (let i = 0; i < filas.length; i++) {
    const r = filas[i];
    if (r[4] !== 'SÍ' || r[5] || r[6] === 'DUPLICADO') continue;
    if (Date.now() > limite) {
      return SpreadsheetApp.getUi().alert('Pausa por tiempo. Movidos: ' + movidos + '. Vuelve a ejecutar para seguir.');
    }
    const fila = NTGH.fila0 + i;
    try {
      DriveApp.getFileById(r[1]).moveTo(destino);   // mover no cambia el ID
      sh.getRange(fila, 6).setValue('MOVIDO ' + Utilities.formatDate(new Date(), 'Europe/Madrid', 'dd/MM HH:mm'));
      movidos++;
    } catch (e) {
      sh.getRange(fila, 7).setValue('ERROR: ' + e.message);
      saltados++;
    }
  }
  SpreadsheetApp.getUi().alert('Movidos: ' + movidos + (saltados ? '\nCon error: ' + saltados : ''));
}


/** B2, o buscar-o-crear NT-GH-Procesados en Mi unidad (guarda el ID en B2). */
function destino_(sh) {
  const id = String(sh.getRange('B2').getValue()).trim();
  if (id) return DriveApp.getFolderById(id);
  const raiz = DriveApp.getRootFolder();
  const it = raiz.getFoldersByName(NTGH.destinoDefecto);
  const c = it.hasNext() ? it.next() : raiz.createFolder(NTGH.destinoDefecto);
  sh.getRange('B2').setValue(c.getId());
  return c;
}


function listar_(token, dir) {
  const r = UrlFetchApp.fetch('https://api.github.com/repos/' + NTGH.repo + '/contents/' +
    dir.split('/').map(encodeURIComponent).join('/') + '?ref=' + NTGH.rama, {
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    muteHttpExceptions: true
  });
  if (r.getResponseCode() === 404) return [];
  if (r.getResponseCode() !== 200) throw new Error('GitHub respondió ' + r.getResponseCode() + ' al listar ' + dir);
  return JSON.parse(r.getContentText());
}
