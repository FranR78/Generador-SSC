/**
 * DB.gs — Base de datos en una Hoja de cálculo compartida (prefijo db_).
 * La Hoja es del profe y se comparte con el alumnado como EDITOR (cada alumno
 * ejecuta el webapp como él mismo y necesita escribir sus datos).
 * ID en Propiedades del script: DB_SHEET_ID.
 *
 * Setup (una vez, el profe, desde el editor): ejecutar db_setup().
 * El acceso a columnas es POR NOMBRE (fila de cabecera), así el esquema puede
 * crecer sin romper nada; db_ensureSchema_() añade pestañas/columnas que falten.
 */
var DB_SHEET_PROP = 'DB_SHEET_ID';
var DB_SCHEMA = {
  'Tareas':        ['tarea_id', 'enunciado', 'seccion', 'creada_por', 'timestamp', 'estado', 'fecha_caduca'],
  'Aportaciones':  ['aportacion_id', 'tarea_id', 'usuario', 'texto', 'timestamp'],
  'Valoraciones':  ['valoracion_id', 'aportacion_id', 'usuario', 'voto', 'timestamp'],
  'Actividad':     ['usuario', 'consultas', 'aportaciones', 'valoraciones', 'conexiones', 'tiempo_seg', 'ultima_conexion', 'actualizado']
};
var db_schemaOk_ = false;   // caché por ejecución

function db_setup() {
  var id = PropertiesService.getScriptProperties().getProperty(DB_SHEET_PROP);
  var ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create('Generador-SSC — BD');
    PropertiesService.getScriptProperties().setProperty(DB_SHEET_PROP, ss.getId());
  }
  db_ensureSchema_(ss);
  // Semilla de tareas si está vacía.
  var t = ss.getSheetByName('Tareas');
  if (t.getLastRow() < 2) {
    [['Define y explica la misión del compresor del A/A', 'Climatización'],
     ['Explica el ciclo del refrigerante paso a paso', 'Climatización'],
     ['Síntomas de una válvula de expansión obturada', 'Climatización']
    ].forEach(function (s) {
      t.appendRow([Utilities.getUuid().slice(0, 8), s[0], s[1], 'profe', new Date(), 'abierta', '']);
    });
  }
  return ss.getUrl();
}

function db_ss_() {
  var id = PropertiesService.getScriptProperties().getProperty(DB_SHEET_PROP);
  if (!id) throw new Error('Falta configurar DB_SHEET_ID. El profe debe ejecutar db_setup() una vez.');
  var ss = SpreadsheetApp.openById(id);
  if (!db_schemaOk_) { db_ensureSchema_(ss); db_schemaOk_ = true; }
  return ss;
}

function db_ensureSchema_(ss) {
  Object.keys(DB_SCHEMA).forEach(function (nombre) {
    var sh = ss.getSheetByName(nombre) || ss.insertSheet(nombre);
    var req = DB_SCHEMA[nombre];
    var lastCol = Math.max(1, sh.getLastColumn());
    var head = sh.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
    var faltan = req.filter(function (c) { return head.indexOf(c) < 0; });
    if (head.join('') === '' ) {                 // hoja nueva: escribe cabecera entera
      sh.getRange(1, 1, 1, req.length).setValues([req]).setFontWeight('bold');
    } else if (faltan.length) {                  // añade columnas que falten al final
      sh.getRange(1, head.length + 1, 1, faltan.length).setValues([faltan]).setFontWeight('bold');
    }
  });
}

function db_sheet_(nombre) {
  var sh = db_ss_().getSheetByName(nombre);
  if (!sh) throw new Error('Falta la pestaña "' + nombre + '".');
  return sh;
}

function db_headers_(sh) {
  var vals = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var map = {};
  vals.forEach(function (n, i) { map[String(n)] = i + 1; });   // 1-based
  return map;
}

function db_now_() { return new Date(); }

// ---------- Tareas ----------
function tareasAbiertas() {
  var sh = db_sheet_('Tareas'), h = db_headers_(sh);
  var vals = sh.getDataRange().getValues();
  var ahora = db_now_(), out = [];
  for (var i = 1; i < vals.length; i++) {
    var estado = String(vals[i][h.estado - 1]);
    var caduca = vals[i][h.fecha_caduca - 1];
    if (estado !== 'abierta') continue;
    if (caduca instanceof Date && caduca <= ahora) continue;   // caducada
    out.push({ tarea_id: vals[i][h.tarea_id - 1], enunciado: vals[i][h.enunciado - 1], seccion: vals[i][h.seccion - 1] });
  }
  return out;
}

function db_enunciado_(tareaId) {
  var sh = db_sheet_('Tareas'), h = db_headers_(sh);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) if (vals[i][h.tarea_id - 1] === tareaId) return vals[i][h.enunciado - 1];
  return '';
}

// ---------- Aportaciones ----------
function aportar(tareaId, texto) {
  texto = (texto || '').trim();
  if (!tareaId) throw new Error('Elige una tarea.');
  if (texto.length < 15) throw new Error('La aportación es demasiado corta.');
  var usuario = usuarioActual();
  var lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    db_sheet_('Aportaciones').appendRow([Utilities.getUuid().slice(0, 8), tareaId, usuario, texto, db_now_()]);
    db_inc_(usuario, 'aportaciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

/** Aportaciones de OTROS que este usuario aún no ha valorado (máx. 15). */
function aportacionesParaValorar() {
  var usuario = usuarioActual();
  var aSh = db_sheet_('Aportaciones'), aH = db_headers_(aSh), aport = aSh.getDataRange().getValues();
  var vSh = db_sheet_('Valoraciones'), vH = db_headers_(vSh), vals = vSh.getDataRange().getValues();
  var yaValoradas = {};
  for (var i = 1; i < vals.length; i++) if (vals[i][vH.usuario - 1] === usuario) yaValoradas[vals[i][vH.aportacion_id - 1]] = true;
  var out = [];
  for (var j = 1; j < aport.length; j++) {
    var id = aport[j][aH.aportacion_id - 1], autor = aport[j][aH.usuario - 1];
    if (autor === usuario || yaValoradas[id]) continue;
    out.push({ aportacion_id: id, tarea_id: aport[j][aH.tarea_id - 1], enunciado: db_enunciado_(aport[j][aH.tarea_id - 1]), texto: aport[j][aH.texto - 1] });
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
  var lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    var vSh = db_sheet_('Valoraciones'), vH = db_headers_(vSh), vals = vSh.getDataRange().getValues();
    for (var i = 1; i < vals.length; i++) {
      if (vals[i][vH.aportacion_id - 1] === aportacionId && vals[i][vH.usuario - 1] === usuario) throw new Error('Ya valoraste esta respuesta.');
    }
    vSh.appendRow([Utilities.getUuid().slice(0, 8), aportacionId, usuario, voto, db_now_()]);
    db_inc_(usuario, 'valoraciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

// ---------- Actividad (contadores por usuario, acceso por nombre) ----------
function db_actividadFila_(usuario) {
  var sh = db_sheet_('Actividad'), h = db_headers_(sh);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][h.usuario - 1] === usuario) {
      return {
        fila: i + 1, h: h,
        consultas: +vals[i][h.consultas - 1] || 0,
        aportaciones: +vals[i][h.aportaciones - 1] || 0,
        valoraciones: +vals[i][h.valoraciones - 1] || 0,
        conexiones: +vals[i][h.conexiones - 1] || 0,
        tiempo_seg: +vals[i][h.tiempo_seg - 1] || 0
      };
    }
  }
  var fila = sh.getLastRow() + 1;
  var row = new Array(sh.getLastColumn()).fill('');
  row[h.usuario - 1] = usuario;
  ['consultas', 'aportaciones', 'valoraciones', 'conexiones', 'tiempo_seg'].forEach(function (c) { row[h[c] - 1] = 0; });
  sh.getRange(fila, 1, 1, row.length).setValues([row]);
  return { fila: fila, h: h, consultas: 0, aportaciones: 0, valoraciones: 0, conexiones: 0, tiempo_seg: 0 };
}

function db_estadoUsuario_(usuario) {
  var f = db_actividadFila_(usuario);
  return { consultas: f.consultas, aportaciones: f.aportaciones, valoraciones: f.valoraciones, conexiones: f.conexiones, tiempo_seg: f.tiempo_seg };
}

function db_inc_(usuario, campo, n) {
  var f = db_actividadFila_(usuario);
  var sh = db_sheet_('Actividad');
  var actual = +sh.getRange(f.fila, f.h[campo]).getValue() || 0;
  sh.getRange(f.fila, f.h[campo]).setValue(actual + n);
  sh.getRange(f.fila, f.h.actualizado).setValue(db_now_());
}

function db_incConsulta_(usuario) {
  var lock = LockService.getScriptLock(); lock.waitLock(15000);
  try { db_inc_(usuario, 'consultas', 1); } finally { lock.releaseLock(); }
}

/** Conexión: al abrir el portal. Cuenta y marca última conexión. */
function registrarConexion() {
  var usuario = usuarioActual();
  var lock = LockService.getScriptLock(); lock.waitLock(15000);
  try {
    var f = db_actividadFila_(usuario), sh = db_sheet_('Actividad');
    sh.getRange(f.fila, f.h.conexiones).setValue(f.conexiones + 1);
    sh.getRange(f.fila, f.h.ultima_conexion).setValue(db_now_());
    sh.getRange(f.fila, f.h.actualizado).setValue(db_now_());
  } finally { lock.releaseLock(); }
  return true;
}

/** Latido: suma segundos de tiempo conectado (el cliente lo llama periódicamente). */
function registrarLatido(segundos) {
  segundos = parseInt(segundos, 10) || 0;
  if (segundos <= 0 || segundos > 120) segundos = 30;   // tope anti-abuso
  db_inc_(usuarioActual(), 'tiempo_seg', segundos);
  return true;
}
