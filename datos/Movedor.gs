/**
 * Movedor.gs — pasa a "Procesados" los PDF cuya nota ya está confirmada.
 *
 * Plan: docs/AUTOMATIZACION.md (D1=C, D4). Contrato: docs/CONTRATO_NOMBRES.md.
 *
 *   1. Lee de GitHub los informes .json que deja la extensión (uno por lote).
 *   2. Lee la lista de entrada/procesados/*.md (= nota confirmada).
 *   3. Por cada fuente subida y confirmada, busca su PDF y lo MUEVE al destino.
 *
 * Guardas: mover, nunca borrar. Sin nota confirmada, el PDF se queda. Si un
 * nombre casa con dos PDF, no se adivina: se avisa y se deja.
 *
 * Propiedades del script:
 *   GITHUB_TOKEN        el mismo del puente (Contents: Read basta aquí)
 *   CARPETA_FUENTES     origen si el informe no trae origenId (opcional)
 *   DESTINO_PROCESADOS  lo escribe este script: ID de NT-GH-Procesados
 *   INFORMES_HECHOS     lo escribe este script: informes ya cerrados
 */

const DIR_INFORMES = 'notas-tecnicas/informes';
const DIR_CONFIRMADAS = 'notas-tecnicas/entrada/procesados';
const CARPETA_DESTINO_DEFECTO = 'NT-GH-Procesados';


/** Contrato de nombres: IDÉNTICO a sanear() de Extension-NT-GH/defaults.js. */
function sanear(s) {
  return String(s).normalize('NFC').replace(/\.[^.]+$/, '').replace(/[^\p{L}\p{M}\p{N}_-]+/gu, '_');
}


/** Activador (ver crearActivador en Puente.gs). También se puede lanzar a mano. */
function puenteNT_moverConfirmados() {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('GITHUB_TOKEN');
  if (!token) throw new Error('Falta GITHUB_TOKEN en las propiedades del script.');

  const hechos = JSON.parse(props.getProperty('INFORMES_HECHOS') || '[]');
  const informes = listarGitHub_(token, DIR_INFORMES)
    .filter(function (f) { return /\.json$/.test(f.name) && hechos.indexOf(f.name) < 0; });
  if (!informes.length) { console.log('Sin informes nuevos.'); return; }

  // Se sanea también lo del repo: así casan las notas antiguas subidas a mano.
  const confirmadas = {};
  listarGitHub_(token, DIR_CONFIRMADAS).forEach(function (f) {
    if (/\.md$/.test(f.name)) confirmadas[sanear(f.name)] = true;
  });

  const mapas = {};   // origenId → mapa nombre saneado → [archivos]
  let movidos = 0;
  const avisos = [];

  informes.forEach(function (f) {
    const inf = JSON.parse(leerGitHub_(token, f.path));
    const destino = carpetaDestino_(props, inf.destinoId);
    const origenId = inf.origenId || props.getProperty('CARPETA_FUENTES') || '';
    if (origenId && !mapas[origenId]) mapas[origenId] = mapaPdf_(DriveApp.getFolderById(origenId), destino.getId());
    let pendientes = 0;

    inf.fuentes.filter(function (x) { return x.ok; }).forEach(function (x) {
      const name = sanear(x.name || x.title);
      if (!confirmadas[name]) { pendientes++; return; }          // aún sin nota: se queda

      const hits = origenId ? (mapas[origenId][name] || []) : buscarPorTitulo_(x.title, destino.getId());
      if (hits.length === 1) {
        hits[0].moveTo(destino);   // mover no cambia el ID
        console.log('movido: ' + hits[0].getName());
        movidos++;
        if (origenId) delete mapas[origenId][name];
      } else if (hits.length > 1) {
        avisos.push('DUPLICADO (' + hits.length + '): ' + x.title + ' — no se mueve');
        pendientes++;
      } else if (!yaEnDestino_(destino, name)) {
        avisos.push('NO CASA: ' + x.title + ' → ' + name + '.md');
        pendientes++;
      }
    });

    if (!pendientes) hechos.push(f.name);
  });

  props.setProperty('INFORMES_HECHOS', JSON.stringify(hechos.slice(-300)));
  console.log(movidos + ' PDF movidos. ' + informes.length + ' informe(s) revisados.');
  if (avisos.length) console.warn(avisos.join('\n'));
  return { movidos: movidos, avisos: avisos };
}


/** Destino del informe, o buscar-o-crear NT-GH-Procesados UNA vez (guarda su ID). */
function carpetaDestino_(props, destinoId) {
  if (destinoId) return DriveApp.getFolderById(destinoId);
  const guardado = props.getProperty('DESTINO_PROCESADOS');
  if (guardado) {
    try { return DriveApp.getFolderById(guardado); } catch (e) { /* borrada: se rehace */ }
  }
  const raiz = DriveApp.getRootFolder();
  const it = raiz.getFoldersByName(CARPETA_DESTINO_DEFECTO);
  const carpeta = it.hasNext() ? it.next() : raiz.createFolder(CARPETA_DESTINO_DEFECTO);
  props.setProperty('DESTINO_PROCESADOS', carpeta.getId());
  return carpeta;
}


/** nombre saneado → [PDF] de una carpeta y sus subcarpetas (salta Procesados y el destino). */
function mapaPdf_(carpeta, destinoId, mapa) {
  mapa = mapa || {};
  const archivos = carpeta.getFilesByType(MimeType.PDF);
  while (archivos.hasNext()) {
    const a = archivos.next();
    const k = sanear(a.getName());
    (mapa[k] = mapa[k] || []).push(a);
  }
  const subs = carpeta.getFolders();
  while (subs.hasNext()) {
    const s = subs.next();
    if (s.getName() === 'Procesados' || s.getId() === destinoId) continue;
    mapaPdf_(s, destinoId, mapa);
  }
  return mapa;
}


/** Sin origen: busca en todo Drive por título exacto (más lento; riesgo de homónimos). */
function buscarPorTitulo_(titulo, destinoId) {
  const q = 'title = "' + String(titulo).replace(/["\\]/g, '\\$&') + '" and mimeType = "application/pdf" and trashed = false';
  const out = [];
  const it = DriveApp.searchFiles(q);
  while (it.hasNext()) {
    const a = it.next();
    const padres = a.getParents();
    if (padres.hasNext() && padres.next().getId() === destinoId) continue;   // ya movido
    out.push(a);
  }
  return out;
}


function yaEnDestino_(destino, name) {
  const it = destino.getFilesByType(MimeType.PDF);
  while (it.hasNext()) if (sanear(it.next().getName()) === name) return true;
  return false;
}


/** Lista una carpeta del repo (contents API: hasta 1000 entradas). 404 → vacía. */
function listarGitHub_(token, dir) {
  const r = UrlFetchApp.fetch('https://api.github.com/repos/' + REPO + '/contents/' +
    rutaCodificada(dir) + '?ref=' + RAMA, {
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' },
    muteHttpExceptions: true
  });
  if (r.getResponseCode() === 404) return [];
  if (r.getResponseCode() !== 200) throw new Error('GitHub respondió ' + r.getResponseCode() + ' al listar ' + dir);
  return JSON.parse(r.getContentText());
}


function leerGitHub_(token, ruta) {
  const r = UrlFetchApp.fetch('https://api.github.com/repos/' + REPO + '/contents/' +
    rutaCodificada(ruta) + '?ref=' + RAMA, {
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github.raw' },
    muteHttpExceptions: true
  });
  if (r.getResponseCode() !== 200) throw new Error('GitHub respondió ' + r.getResponseCode() + ' al leer ' + ruta);
  return r.getContentText();
}
