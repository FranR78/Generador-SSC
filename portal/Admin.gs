/**
 * Admin.gs — Panel del profe (prefijo admin_ para lo privado).
 * Solo el/los correos en ADMIN_EMAILS (Propiedades del script) pueden usarlo;
 * por defecto, el correo del creador del proyecto. Todas las funciones públicas
 * revalidan admin en el servidor (no basta con ocultar el botón).
 */
var ADMIN_EMAILS_PROP = 'ADMIN_EMAILS';
var ADMIN_DEFAULT = 'frostov381@g.educaand.es';

function admin_emails_() {
  var v = PropertiesService.getScriptProperties().getProperty(ADMIN_EMAILS_PROP) || ADMIN_DEFAULT;
  return v.split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(String);
}

/** ¿El usuario actual es admin? (lo usa el front para mostrar la pestaña) */
function esAdmin() {
  var yo = String(usuarioActual()).toLowerCase();
  return admin_emails_().indexOf(yo) >= 0;
}

function admin_check_() {
  if (!esAdmin()) throw new Error('Solo el profesorado puede hacer esto.');
}

// ---------- Métricas de alumnado ----------
function adminResumen() {
  admin_check_();
  var sh = db_sheet_('Actividad'), h = db_headers_(sh), vals = sh.getDataRange().getValues();
  var filas = [];
  for (var i = 1; i < vals.length; i++) {
    var u = vals[i][h.usuario - 1];
    if (!u) continue;
    var uc = vals[i][h.ultima_conexion - 1];
    filas.push({
      usuario: u,
      consultas: +vals[i][h.consultas - 1] || 0,
      aportaciones: +vals[i][h.aportaciones - 1] || 0,
      valoraciones: +vals[i][h.valoraciones - 1] || 0,
      conexiones: +vals[i][h.conexiones - 1] || 0,
      minutos: Math.round((+vals[i][h.tiempo_seg - 1] || 0) / 60),
      ultima_conexion: uc instanceof Date ? Utilities.formatDate(uc, Session.getScriptTimeZone(), 'dd/MM HH:mm') : ''
    });
  }
  filas.sort(function (a, b) { return (b.consultas + b.aportaciones + b.valoraciones) - (a.consultas + a.aportaciones + a.valoraciones); });
  return filas;
}

/** Reinicia los contadores de un alumno (nueva "tanda"). */
function adminResetUsuario(usuario) {
  admin_check_();
  var sh = db_sheet_('Actividad'), h = db_headers_(sh), vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][h.usuario - 1] === usuario) {
      ['consultas', 'aportaciones', 'valoraciones'].forEach(function (c) { sh.getRange(i + 1, h[c]).setValue(0); });
      sh.getRange(i + 1, h.actualizado).setValue(db_now_());
      return true;
    }
  }
  throw new Error('Usuario no encontrado.');
}

// ---------- Tareas (altas, cierres, caducidad) ----------
function adminTareas() {
  admin_check_();
  var sh = db_sheet_('Tareas'), h = db_headers_(sh), vals = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    var caduca = vals[i][h.fecha_caduca - 1];
    out.push({
      tarea_id: vals[i][h.tarea_id - 1],
      enunciado: vals[i][h.enunciado - 1],
      seccion: vals[i][h.seccion - 1],
      estado: vals[i][h.estado - 1],
      fecha_caduca: caduca instanceof Date ? Utilities.formatDate(caduca, Session.getScriptTimeZone(), 'dd/MM/yyyy') : ''
    });
  }
  return out;
}

function adminCrearTarea(enunciado, seccion, diasCaduca) {
  admin_check_();
  enunciado = (enunciado || '').trim();
  if (enunciado.length < 8) throw new Error('Enunciado demasiado corto.');
  var caduca = '';
  var d = parseInt(diasCaduca, 10);
  if (d > 0) { caduca = new Date(); caduca.setDate(caduca.getDate() + d); }
  db_sheet_('Tareas').appendRow([Utilities.getUuid().slice(0, 8), enunciado, (seccion || '').trim(), usuarioActual(), db_now_(), 'abierta', caduca]);
  return true;
}

function admin_setEstadoTarea_(tareaId, estado) {
  var sh = db_sheet_('Tareas'), h = db_headers_(sh), vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][h.tarea_id - 1] === tareaId) { sh.getRange(i + 1, h.estado).setValue(estado); return true; }
  }
  throw new Error('Tarea no encontrada.');
}

function adminCerrarTarea(tareaId) { admin_check_(); return admin_setEstadoTarea_(tareaId, 'cerrada'); }
function adminAbrirTarea(tareaId) { admin_check_(); return admin_setEstadoTarea_(tareaId, 'abierta'); }

function adminCaducarTarea(tareaId) {
  admin_check_();
  var sh = db_sheet_('Tareas'), h = db_headers_(sh), vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][h.tarea_id - 1] === tareaId) { sh.getRange(i + 1, h.fecha_caduca).setValue(db_now_()); return true; }
  }
  throw new Error('Tarea no encontrada.');
}

// ---------- Prompt de la IA ----------
function adminGetPrompt() { admin_check_(); return ia_prompt_(); }

function adminSetPrompt(texto) {
  admin_check_();
  texto = (texto || '').trim();
  if (texto.length < 20) throw new Error('El prompt es demasiado corto.');
  PropertiesService.getScriptProperties().setProperty(IA_PROMPT_PROP, texto);
  return true;
}

function adminResetPrompt() { admin_check_(); PropertiesService.getScriptProperties().deleteProperty(IA_PROMPT_PROP); return ia_prompt_(); }
