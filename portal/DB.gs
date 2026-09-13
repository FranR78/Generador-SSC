/**
 * DB.gs — Base de datos en una Hoja de cálculo compartida (prefijo db_).
 * La Hoja es del profe y se comparte con el alumnado como EDITOR (cada alumno
 * ejecuta el webapp como él mismo y necesita escribir sus aportaciones/votos).
 * ID en Propiedades del script: DB_SHEET_ID.
 *
 * Setup (una vez, el profe, desde el editor): ejecutar db_setup() y compartir la
 * Hoja resultante con el dominio como editor.
 */
var DB_SHEET_PROP = 'DB_SHEET_ID';
var DB_TABS = {
  TAREAS: 'Tareas',
  APORTA: 'Aportaciones',
  VALORA: 'Valoraciones',
  ACT: 'Actividad'
};
var DB_HEADERS = {
  Tareas: ['tarea_id', 'enunciado', 'seccion', 'creada_por', 'timestamp', 'estado'],
  Aportaciones: ['aportacion_id', 'tarea_id', 'usuario', 'texto', 'timestamp'],
  Valoraciones: ['valoracion_id', 'aportacion_id', 'usuario', 'voto', 'timestamp'],
  Actividad: ['usuario', 'consultas', 'aportaciones', 'valoraciones', 'actualizado']
};

function db_setup() {
  var ss = SpreadsheetApp.create('Generador-SSC — BD');
  Object.keys(DB_HEADERS).forEach(function (nombre, i) {
    var sh = i === 0 ? ss.getSheets()[0].setName(nombre) : ss.insertSheet(nombre);
    sh.getRange(1, 1, 1, DB_HEADERS[nombre].length).setValues([DB_HEADERS[nombre]]).setFontWeight('bold');
  });
  // Tareas de ejemplo para arrancar el ciclo.
  var seed = [
    ['Define y explica la misión del compresor del A/A', 'Climatización'],
    ['Explica el ciclo del refrigerante paso a paso', 'Climatización'],
    ['Síntomas de una válvula de expansión obturada', 'Climatización']
  ];
  var t = ss.getSheetByName('Tareas');
  seed.forEach(function (s) {
    t.appendRow([Utilities.getUuid().slice(0, 8), s[0], s[1], 'profe', new Date(), 'abierta']);
  });
  PropertiesService.getScriptProperties().setProperty(DB_SHEET_PROP, ss.getId());
  return ss.getUrl();
}

function db_ss_() {
  var id = PropertiesService.getScriptProperties().getProperty(DB_SHEET_PROP);
  if (!id) throw new Error('Falta configurar DB_SHEET_ID. El profe debe ejecutar db_setup() una vez.');
  return SpreadsheetApp.openById(id);
}

function db_sheet_(nombre) {
  var sh = db_ss_().getSheetByName(nombre);
  if (!sh) throw new Error('Falta la pestaña "' + nombre + '" en la Hoja.');
  return sh;
}

function db_now_() { return new Date(); }

// ---------- Tareas ----------
function tareasAbiertas() {
  var vals = db_sheet_(DB_TABS.TAREAS).getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    if (String(vals[i][5]) === 'abierta') {
      out.push({ tarea_id: vals[i][0], enunciado: vals[i][1], seccion: vals[i][2] });
    }
  }
  return out;
}

function db_enunciado_(tareaId) {
  var vals = db_sheet_(DB_TABS.TAREAS).getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) if (vals[i][0] === tareaId) return vals[i][1];
  return '';
}

// ---------- Aportaciones ----------
function aportar(tareaId, texto) {
  texto = (texto || '').trim();
  if (!tareaId) throw new Error('Elige una tarea.');
  if (texto.length < 15) throw new Error('La aportación es demasiado corta.');
  var usuario = usuarioActual();
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    db_sheet_(DB_TABS.APORTA).appendRow([Utilities.getUuid().slice(0, 8), tareaId, usuario, texto, db_now_()]);
    db_inc_(usuario, 'aportaciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

/** Aportaciones de OTROS que este usuario aún no ha valorado (máx. 15). */
function aportacionesParaValorar() {
  var usuario = usuarioActual();
  var aport = db_sheet_(DB_TABS.APORTA).getDataRange().getValues();
  var vals = db_sheet_(DB_TABS.VALORA).getDataRange().getValues();
  var yaValoradas = {};
  for (var i = 1; i < vals.length; i++) if (vals[i][2] === usuario) yaValoradas[vals[i][1]] = true;

  var out = [];
  for (var j = 1; j < aport.length; j++) {
    var id = aport[j][0], autor = aport[j][2];
    if (autor === usuario || yaValoradas[id]) continue;
    out.push({ aportacion_id: id, tarea_id: aport[j][1], enunciado: db_enunciado_(aport[j][1]), texto: aport[j][3] });
    if (out.length >= 15) break;
  }
  return out;
}

// ---------- Valoraciones ----------
function valorar(aportacionId, voto) {
  voto = parseInt(voto, 10);
  if (!aportacionId) throw new Error('Falta la aportación.');
  if (!(voto >= 1 && voto <= 5)) throw new Error('Voto de 1 a 5.');
  var usuario = usuarioActual();
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var vals = db_sheet_(DB_TABS.VALORA).getDataRange().getValues();
    for (var i = 1; i < vals.length; i++) {
      if (vals[i][1] === aportacionId && vals[i][2] === usuario) throw new Error('Ya valoraste esta respuesta.');
    }
    db_sheet_(DB_TABS.VALORA).appendRow([Utilities.getUuid().slice(0, 8), aportacionId, usuario, voto, db_now_()]);
    db_inc_(usuario, 'valoraciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

// ---------- Actividad (contadores por usuario) ----------
function db_actividadFila_(usuario) {
  var sh = db_sheet_(DB_TABS.ACT);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === usuario) return { fila: i + 1, consultas: +vals[i][1] || 0, aportaciones: +vals[i][2] || 0, valoraciones: +vals[i][3] || 0 };
  }
  sh.appendRow([usuario, 0, 0, 0, db_now_()]);
  return { fila: sh.getLastRow(), consultas: 0, aportaciones: 0, valoraciones: 0 };
}

function db_estadoUsuario_(usuario) {
  var f = db_actividadFila_(usuario);
  return { consultas: f.consultas, aportaciones: f.aportaciones, valoraciones: f.valoraciones };
}

function db_inc_(usuario, campo, n) {
  var col = { consultas: 2, aportaciones: 3, valoraciones: 4 }[campo];
  var f = db_actividadFila_(usuario);
  var sh = db_sheet_(DB_TABS.ACT);
  var actual = +sh.getRange(f.fila, col).getValue() || 0;
  sh.getRange(f.fila, col).setValue(actual + n);
  sh.getRange(f.fila, 5).setValue(db_now_());
}

function db_incConsulta_(usuario) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try { db_inc_(usuario, 'consultas', 1); } finally { lock.releaseLock(); }
}
