/**
 * Datos.gs — Puerta única a la Hoja de datos. Proyecto SEPARADO del portal.
 *
 * Se despliega como WebApp con executeAs: USER_DEPLOYING (el profe) y acceso al
 * dominio. La Hoja NO se comparte con nadie: solo este proyecto la abre. Así el
 * alumnado no puede editar sus contadores (el gating deja de ser decorativo) ni
 * leer quién ha votado qué.
 *
 * La identidad del llamante NO se toma del cuerpo de la petición: se verifica el
 * identity token que envía el portal. Ver docs/DESPLIEGUE_DATOS.md.
 *
 * Propiedades del script:
 *   DB_SHEET_ID   -> Hoja de datos (la crea db_setup()).
 *   PORTAL_AUD    -> client_id del proyecto Portal (opcional, recomendado).
 *   DOMINIO       -> dominio permitido, p. ej. "g.educaand.es" (opcional).
 */
var DB_SHEET_PROP = 'DB_SHEET_ID';
var PORTAL_AUD_PROP = 'PORTAL_AUD';
var DOMINIO_PROP = 'DOMINIO';

var PROFES_PROP = 'PROFES';

var TABS = {
  TAREAS: 'Tareas', APORTA: 'Aportaciones', VALORA: 'Valoraciones',
  ACT: 'Actividad', CONFIG: 'Config', AJUSTES: 'Ajustes'
};

var GATE_POR_DEFECTO = { LIBRES: 3, REQ_APORTA: 1, REQ_VALORA: 2 };
var HEADERS = {
  Tareas: ['tarea_id', 'enunciado', 'seccion', 'creada_por', 'timestamp', 'estado'],
  Aportaciones: ['aportacion_id', 'tarea_id', 'usuario', 'texto', 'timestamp'],
  Valoraciones: ['valoracion_id', 'aportacion_id', 'usuario', 'voto', 'timestamp'],
  Actividad: ['usuario', 'consultas', 'aportaciones', 'valoraciones', 'actualizado', 'ultima_conexion'],
  Config: ['tipo', 'id', 'nombre', 'padre', 'visible', 'abre_el'],
  Ajustes: ['clave', 'valor']
};

// ---------------------------------------------------------------- entrada ---

function doPost(e) {
  try {
    var req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var usuario = verificarToken_(req.token);
    return json_({ ok: true, res: ejecutar_(req.op, req.args || {}, usuario) });
  } catch (err) {
    return json_({ ok: false, error: String((err && err.message) || err) });
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Devuelve el correo del llamante a partir de su identity token, verificado
 * contra Google. Nunca se confía en un correo enviado en el cuerpo.
 */
function verificarToken_(token) {
  if (!token) throw new Error('Falta el identity token.');
  var cache = CacheService.getScriptCache();
  var clave = 'idt_' + Utilities.base64EncodeWebSafe(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, token));
  var cacheado = cache.get(clave);
  if (cacheado) return cacheado;

  var resp = UrlFetchApp.fetch(
    'https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(token),
    { muteHttpExceptions: true });
  if (resp.getResponseCode() !== 200) throw new Error('Identidad no verificada.');
  var info = JSON.parse(resp.getContentText());

  var email = String(info.email || '').toLowerCase();
  if (!email) throw new Error('El token no trae correo.');
  if (String(info.email_verified) !== 'true' && info.email_verified !== true) {
    throw new Error('Correo no verificado.');
  }
  if (Number(info.exp) * 1000 < Date.now()) throw new Error('Token caducado.');

  var p = PropertiesService.getScriptProperties();
  var aud = p.getProperty(PORTAL_AUD_PROP);
  if (aud && info.aud !== aud) throw new Error('Token de otra aplicación.');
  var dominio = p.getProperty(DOMINIO_PROP);
  if (dominio && email.slice(-(dominio.length + 1)) !== '@' + dominio) {
    throw new Error('Cuenta fuera del dominio.');
  }

  cache.put(clave, email, 300);
  return email;
}

function ejecutar_(op, args, usuario) {
  switch (op) {
    case 'ping': return { usuario: usuario };
    case 'estado': return estadoUsuario_(usuario);
    case 'incConsulta': return incConsulta_(usuario);
    case 'tareas': return tareasAbiertas_();
    case 'aportar': return aportar_(usuario, args.tareaId, args.texto);
    case 'paraValorar': return paraValorar_(usuario);
    case 'valorar': return valorar_(usuario, args.aportacionId, args.voto);
    case 'config': return config_(usuario);
    case 'configSync': return configSync_(usuario, args.nodos);
    case 'configSet': return configSet_(usuario, args.cambios);
    case 'gateSet': return gateSet_(usuario, args.umbrales);
    case 'pulso': return pulso_(usuario);
    case 'tocar': return tocar_(usuario);
    default: throw new Error('Operación desconocida: ' + op);
  }
}

// ------------------------------------------------------------------ hoja ---

function db_setup() {
  var ss = SpreadsheetApp.create('Generador-SSC — BD');
  Object.keys(HEADERS).forEach(function (nombre, i) {
    var sh = i === 0 ? ss.getSheets()[0].setName(nombre) : ss.insertSheet(nombre);
    sh.getRange(1, 1, 1, HEADERS[nombre].length).setValues([HEADERS[nombre]]).setFontWeight('bold');
  });
  var seed = [
    ['Define y explica la misión del compresor del A/A', 'Climatización'],
    ['Explica el ciclo del refrigerante paso a paso', 'Climatización'],
    ['Síntomas de una válvula de expansión obturada', 'Climatización']
  ];
  var t = ss.getSheetByName(TABS.TAREAS);
  seed.forEach(function (s) {
    t.appendRow([Utilities.getUuid().slice(0, 8), s[0], s[1], 'profe', new Date(), 'abierta']);
  });
  PropertiesService.getScriptProperties().setProperty(DB_SHEET_PROP, ss.getId());
  return ss.getUrl();
}

function ss_() {
  var id = PropertiesService.getScriptProperties().getProperty(DB_SHEET_PROP);
  if (!id) throw new Error('Falta DB_SHEET_ID. Ejecuta db_setup() una vez.');
  return SpreadsheetApp.openById(id);
}

function hoja_(nombre) {
  var ss = ss_();
  var sh = ss.getSheetByName(nombre);
  if (sh) return sh;
  // Crea al vuelo las pestañas añadidas después del db_setup inicial.
  if (!HEADERS[nombre]) throw new Error('Falta la pestaña "' + nombre + '".');
  sh = ss.insertSheet(nombre);
  sh.getRange(1, 1, 1, HEADERS[nombre].length).setValues([HEADERS[nombre]]).setFontWeight('bold');
  return sh;
}

// ------------------------------------------------------------ visibilidad ---

function esProfe_(usuario) {
  var lista = PropertiesService.getScriptProperties().getProperty(PROFES_PROP) || '';
  return lista.toLowerCase().split(/[,;\s]+/).indexOf(usuario) !== -1;
}

function exigirProfe_(usuario) {
  if (!esProfe_(usuario)) throw new Error('Solo el profesorado puede hacer esto.');
}

/**
 * Visibilidad de temas (carpetas) y documentos.
 * Sin fila en Config -> visible: al añadir PDF nuevos al Drive no desaparecen
 * del portal hasta que el profe decida ocultarlos.
 */
function config_(usuario) {
  var vals = hoja_(TABS.CONFIG).getDataRange().getValues();
  var hoy = new Date();
  var out = { temas: {}, docs: {}, profe: esProfe_(usuario) };
  for (var i = 1; i < vals.length; i++) {
    var tipo = String(vals[i][0]);
    var id = String(vals[i][1]);
    if (!id) continue;
    var abre = vals[i][5];
    var visible = String(vals[i][4]).toUpperCase() !== 'NO';
    if (visible && abre instanceof Date && abre > hoy) visible = false;
    var destino = tipo === 'tema' ? out.temas : out.docs;
    destino[id] = { visible: visible, nombre: vals[i][2], abre_el: abre || '' };
  }
  out.gate = umbrales_();
  return out;
}

/** Umbrales del gating, en la Hoja para que solo el profe pueda cambiarlos. */
function umbrales_() {
  var vals = hoja_(TABS.AJUSTES).getDataRange().getValues();
  var g = { LIBRES: GATE_POR_DEFECTO.LIBRES, REQ_APORTA: GATE_POR_DEFECTO.REQ_APORTA, REQ_VALORA: GATE_POR_DEFECTO.REQ_VALORA };
  for (var i = 1; i < vals.length; i++) {
    var k = String(vals[i][0]);
    if (g.hasOwnProperty(k)) g[k] = parseInt(vals[i][1], 10) || g[k];
  }
  return g;
}

function gateSet_(usuario, umbrales) {
  exigirProfe_(usuario);
  var sh = hoja_(TABS.AJUSTES);
  var vals = sh.getDataRange().getValues();
  var fila = {};
  for (var i = 1; i < vals.length; i++) fila[String(vals[i][0])] = i + 1;

  Object.keys(GATE_POR_DEFECTO).forEach(function (k) {
    var v = parseInt(umbrales[k], 10);
    if (!(v >= 1)) return;
    if (fila[k]) sh.getRange(fila[k], 2).setValue(v);
    else sh.appendRow([k, v]);
  });
  return umbrales_();
}

/** Foto del grupo para el panel: quién entró, cuánto lleva hecho. */
function pulso_(usuario) {
  exigirProfe_(usuario);
  var vals = hoja_(TABS.ACT).getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    if (!vals[i][0]) continue;
    out.push({
      usuario: vals[i][0],
      consultas: +vals[i][1] || 0,
      aportaciones: +vals[i][2] || 0,
      valoraciones: +vals[i][3] || 0,
      ultima_conexion: vals[i][5] ? new Date(vals[i][5]).toISOString() : ''
    });
  }
  out.sort(function (a, b) { return (b.ultima_conexion || '').localeCompare(a.ultima_conexion || ''); });
  return { alumnos: out, gate: umbrales_() };
}

/** Última conexión. No se mide permanencia: solo cuándo entró por última vez. */
function tocar_(usuario) {
  var f = filaActividad_(usuario);
  hoja_(TABS.ACT).getRange(f.fila, 6).setValue(new Date());
  return true;
}

/** Da de alta en Config lo que aún no está. No cambia lo ya configurado. */
function configSync_(usuario, nodos) {
  exigirProfe_(usuario);
  if (!nodos || !nodos.length) return { nuevos: 0 };
  var sh = hoja_(TABS.CONFIG);
  var vals = sh.getDataRange().getValues();
  var conocidos = {};
  for (var i = 1; i < vals.length; i++) conocidos[String(vals[i][1])] = true;

  var filas = [];
  nodos.forEach(function (n) {
    if (!n || !n.id || conocidos[String(n.id)]) return;
    conocidos[String(n.id)] = true;
    filas.push([n.tipo === 'tema' ? 'tema' : 'doc', n.id, n.nombre || '', n.padre || '', 'SI', '']);
  });
  if (filas.length) sh.getRange(sh.getLastRow() + 1, 1, filas.length, 6).setValues(filas);
  return { nuevos: filas.length };
}

/** cambios: [{id, visible, abre_el}] */
function configSet_(usuario, cambios) {
  exigirProfe_(usuario);
  if (!cambios || !cambios.length) return { cambiados: 0 };
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sh = hoja_(TABS.CONFIG);
    var vals = sh.getDataRange().getValues();
    var filaDe = {};
    for (var i = 1; i < vals.length; i++) filaDe[String(vals[i][1])] = i + 1;

    var n = 0;
    cambios.forEach(function (c) {
      var fila = filaDe[String(c.id)];
      if (!fila) return;
      sh.getRange(fila, 5).setValue(c.visible === false ? 'NO' : 'SI');
      if (c.abre_el !== undefined) sh.getRange(fila, 6).setValue(c.abre_el || '');
      n++;
    });
    return { cambiados: n };
  } finally { lock.releaseLock(); }
}

// --------------------------------------------------------------- tareas ---

function tareasAbiertas_() {
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    if (String(vals[i][5]) === 'abierta') {
      out.push({ tarea_id: vals[i][0], enunciado: vals[i][1], seccion: vals[i][2] });
    }
  }
  return out;
}

/** Mapa tarea_id -> enunciado, leído una sola vez. */
function enunciados_() {
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var m = {};
  for (var i = 1; i < vals.length; i++) m[vals[i][0]] = vals[i][1];
  return m;
}

// ---------------------------------------------------------- aportaciones ---

function aportar_(usuario, tareaId, texto) {
  texto = String(texto || '').trim();
  if (!tareaId) throw new Error('Elige una tarea.');
  if (texto.length < 15) throw new Error('La aportación es demasiado corta.');
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    hoja_(TABS.APORTA).appendRow(
      [Utilities.getUuid().slice(0, 8), tareaId, usuario, texto, new Date()]);
    inc_(usuario, 'aportaciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

/** Aportaciones de OTROS que este usuario aún no ha valorado (máx. 15). */
function paraValorar_(usuario) {
  var aport = hoja_(TABS.APORTA).getDataRange().getValues();
  var vals = hoja_(TABS.VALORA).getDataRange().getValues();
  var yaValoradas = {};
  for (var i = 1; i < vals.length; i++) if (vals[i][2] === usuario) yaValoradas[vals[i][1]] = true;

  var titulos = enunciados_();
  var out = [];
  for (var j = 1; j < aport.length && out.length < 15; j++) {
    var id = aport[j][0];
    if (aport[j][2] === usuario || yaValoradas[id]) continue;
    // Se omite el autor a propósito: la valoración es ciega.
    out.push({
      aportacion_id: id,
      tarea_id: aport[j][1],
      enunciado: titulos[aport[j][1]] || '',
      texto: aport[j][3]
    });
  }
  return out;
}

function valorar_(usuario, aportacionId, voto) {
  voto = parseInt(voto, 10);
  if (!aportacionId) throw new Error('Falta la aportación.');
  if (!(voto >= 1 && voto <= 5)) throw new Error('Voto de 1 a 5.');
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sh = hoja_(TABS.VALORA);
    var vals = sh.getDataRange().getValues();
    for (var i = 1; i < vals.length; i++) {
      if (vals[i][1] === aportacionId && vals[i][2] === usuario) {
        throw new Error('Ya valoraste esta respuesta.');
      }
    }
    var autor = autorDe_(aportacionId);
    if (!autor) throw new Error('Esa aportación no existe.');
    if (autor === usuario) throw new Error('No puedes valorar tu propia respuesta.');
    sh.appendRow([Utilities.getUuid().slice(0, 8), aportacionId, usuario, voto, new Date()]);
    inc_(usuario, 'valoraciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

function autorDe_(aportacionId) {
  var vals = hoja_(TABS.APORTA).getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) if (vals[i][0] === aportacionId) return vals[i][2];
  return '';
}

// ------------------------------------------------------------- actividad ---

function filaActividad_(usuario) {
  var sh = hoja_(TABS.ACT);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === usuario) {
      return {
        fila: i + 1,
        consultas: +vals[i][1] || 0,
        aportaciones: +vals[i][2] || 0,
        valoraciones: +vals[i][3] || 0
      };
    }
  }
  sh.appendRow([usuario, 0, 0, 0, new Date()]);
  return { fila: sh.getLastRow(), consultas: 0, aportaciones: 0, valoraciones: 0 };
}

function estadoUsuario_(usuario) {
  var f = filaActividad_(usuario);
  return { consultas: f.consultas, aportaciones: f.aportaciones, valoraciones: f.valoraciones };
}

function inc_(usuario, campo, n) {
  var col = { consultas: 2, aportaciones: 3, valoraciones: 4 }[campo];
  var f = filaActividad_(usuario);
  var sh = hoja_(TABS.ACT);
  sh.getRange(f.fila, col).setValue((f[campo] || 0) + n);
  sh.getRange(f.fila, 5).setValue(new Date());
}

function incConsulta_(usuario) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try { inc_(usuario, 'consultas', 1); } finally { lock.releaseLock(); }
  return estadoUsuario_(usuario);
}
