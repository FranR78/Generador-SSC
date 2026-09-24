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
  ACT: 'Actividad', CONFIG: 'Config', AJUSTES: 'Ajustes',
  LECT: 'Lecturas', INT: 'Intentos'
};

/* LIBRES: 0 = sin límite de consultas a la IA. Preguntar es trabajar, así que
   no se raciona; el freno está en el simulador (HORAS_ENTRE_INTENTOS). */
var GATE_POR_DEFECTO = { LIBRES: 0, REQ_APORTA: 1, REQ_VALORA: 2 };

/* Horas que deben pasar antes de repetir el MISMO caso del simulador. Evita
   que lo repitan a lo bruto hasta acertar de memoria. Se edita en Ajustes. */
var HORAS_ENTRE_INTENTOS = 12;

// Estrellas que reparte cada alumno en una ronda: una de 3, una de 2 y una de 1.
// Pesos distintos obligan a jerarquizar; un 1-5 plano se convierte en "4 a todo".
var PESOS = [3, 2, 1];
var HEADERS = {
  Tareas: ['tarea_id', 'enunciado', 'seccion', 'creada_por', 'timestamp', 'estado',
           'modo', 'abre_el', 'cierra_entrega_el', 'cierra_votacion_el'],
  Aportaciones: ['aportacion_id', 'tarea_id', 'usuario', 'texto', 'timestamp'],
  Valoraciones: ['valoracion_id', 'tarea_id', 'aportacion_id', 'usuario', 'peso', 'timestamp'],
  Actividad: ['usuario', 'consultas', 'aportaciones', 'valoraciones', 'actualizado', 'ultima_conexion',
              'conexiones', 'tiempo_seg'],
  Config: ['tipo', 'id', 'nombre', 'padre', 'visible', 'abre_el'],
  Ajustes: ['clave', 'valor'],
  /* Simulador: las averías son datos, no código. Ver Casos.gs. */
  Vehiculos: ['vehiculo_id', 'marca', 'modelo', 'sistema', 'esquema_ref',
              'tension_min', 'tension_max', 'tension_origen'],
  Puntos:    ['esquema_id', 'punto_id', 'etiqueta', 'descripcion', 'lado'],
  Tramos:    ['esquema_id', 'desde', 'hasta', 'componente',
              'r_min', 'r_max', 'unidad', 'origen', 'seccion', 'color', 'por_conector'],
  Casos:     ['caso_id', 'titulo', 'vehiculo_id', 'esquema_id', 'sintoma',
              'averia', 'objetivo', 'activo'],
  /* Qué ha leído y qué ha intentado cada alumno: es lo que permite decirle al
     entrar qué lleva hecho y qué le falta, en vez de soltarlo en medio. */
  Lecturas:  ['usuario', 'nt', 'veces', 'primera', 'ultima'],
  Intentos:  ['usuario', 'caso_id', 'cuando', 'fundamentado', 'acertado', 'segundos']
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
    case 'tareas': return tareasAbiertas_(usuario);
    case 'rondas': return rondas_(usuario);
    case 'rondaSet': return rondaSet_(usuario, args.tareaId, args.cambios);
    case 'rondaNueva': return rondaNueva_(usuario, args.ronda);
    case 'aportar': return aportar_(usuario, args.tareaId, args.texto);
    case 'paraValorar': return paraValorar_(usuario);
    case 'valorar': return valorar_(usuario, args.aportacionId, args.voto);
    case 'config': return config_(usuario);
    case 'configSync': return configSync_(usuario, args.nodos);
    case 'configSet': return configSet_(usuario, args.cambios);
    case 'gateSet': return gateSet_(usuario, args.umbrales);
    case 'pulso': return pulso_(usuario);
    case 'tocar': return tocar_(usuario);
    case 'casos': return listarCasos();
    case 'caso': return cargarCaso(args.casoId);
    case 'leido': return marcarLeido_(usuario, args.nt);
    case 'progreso': return progreso_(usuario);
    case 'puedoIntentar': return puedoIntentar_(usuario, args.casoId);
    case 'registrarIntento': return registrarIntento_(usuario, args);
    case 'conexion': return conexion_(usuario);
    case 'latido': return latido_(usuario, args.segundos);
    case 'resetUsuario': return resetUsuario_(usuario, args.alumno);
    case 'capturaSubir': return capturaSubir_(usuario, args);
    case 'capturasPorAprobar': return capturasPorAprobar_(usuario);
    case 'capturaResolver': return capturaResolver_(usuario, args);
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
    t.appendRow([Utilities.getUuid().slice(0, 8), s[0], s[1], 'profe', new Date(), 'abierta',
      'misma_pregunta', '', '', '']);
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

/**
 * Estados de una ronda: borrador -> abierta -> votacion -> cerrada.
 * Se avanza por fecha al leer, no con un disparador: así funciona igual en casa
 * que en el aula sin depender de que el trigger se haya disparado.
 */
var ESTADOS = ['borrador', 'abierta', 'votacion', 'cerrada'];

function avanzarPorFecha_() {
  var sh = hoja_(TABS.TAREAS);
  var vals = sh.getDataRange().getValues();
  var hoy = new Date();
  var cambios = [];
  for (var i = 1; i < vals.length; i++) {
    var estado = String(vals[i][5] || 'abierta');
    var abre = vals[i][7], finEntrega = vals[i][8], finVoto = vals[i][9];
    var nuevo = estado;
    if (estado === 'borrador' && abre instanceof Date && abre <= hoy) nuevo = 'abierta';
    if (nuevo === 'abierta' && finEntrega instanceof Date && finEntrega < hoy) nuevo = 'votacion';
    if (nuevo === 'votacion' && finVoto instanceof Date && finVoto < hoy) nuevo = 'cerrada';
    if (nuevo !== estado) cambios.push({ fila: i + 1, estado: nuevo });
  }
  if (!cambios.length) return;
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return;
  try {
    cambios.forEach(function (c) { sh.getRange(c.fila, 6).setValue(c.estado); });
  } finally { lock.releaseLock(); }
}

function filaTarea_(vals, i) {
  return {
    tarea_id: vals[i][0],
    enunciado: vals[i][1],
    seccion: vals[i][2],
    estado: String(vals[i][5] || 'abierta'),
    modo: String(vals[i][6] || 'misma_pregunta'),
    cierra_entrega_el: vals[i][8] instanceof Date ? vals[i][8].toISOString() : '',
    cierra_votacion_el: vals[i][9] instanceof Date ? vals[i][9].toISOString() : ''
  };
}

/** Rondas donde toca escribir. Incluye si el usuario ya entregó la suya. */
function tareasAbiertas_(usuario) {
  avanzarPorFecha_();
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var mias = misAportaciones_(usuario);
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    var t = filaTarea_(vals, i);
    if (t.estado !== 'abierta') continue;
    t.entregada = !!mias[t.tarea_id];
    out.push(t);
  }
  return out;
}

/** Todas las rondas con su estado (el profe las gestiona desde el panel). */
function rondas_(usuario) {
  exigirProfe_(usuario);
  avanzarPorFecha_();
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var aport = hoja_(TABS.APORTA).getDataRange().getValues();
  var cuenta = {};
  for (var j = 1; j < aport.length; j++) cuenta[aport[j][1]] = (cuenta[aport[j][1]] || 0) + 1;

  var out = [];
  for (var i = 1; i < vals.length; i++) {
    var t = filaTarea_(vals, i);
    t.respuestas = cuenta[t.tarea_id] || 0;
    out.push(t);
  }
  return out;
}

function rondaNueva_(usuario, r) {
  exigirProfe_(usuario);
  var enunciado = String((r && r.enunciado) || '').trim();
  if (enunciado.length < 10) throw new Error('Escribe el enunciado de la ronda.');
  var id = Utilities.getUuid().slice(0, 8);
  hoja_(TABS.TAREAS).appendRow([
    id, enunciado, String(r.seccion || ''), usuario, new Date(),
    r.estado === 'borrador' ? 'borrador' : 'abierta',
    r.modo === 'reparto' ? 'reparto' : 'misma_pregunta',
    fecha_(r.abre_el), fecha_(r.cierra_entrega_el), fecha_(r.cierra_votacion_el)
  ]);
  return id;
}

function fecha_(v) {
  if (!v) return '';
  var d = new Date(v);
  return isNaN(d.getTime()) ? '' : d;
}

/** cambios: {estado, cierra_entrega_el, cierra_votacion_el} */
function rondaSet_(usuario, tareaId, cambios) {
  exigirProfe_(usuario);
  var sh = hoja_(TABS.TAREAS);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] !== tareaId) continue;
    if (cambios.estado) {
      if (ESTADOS.indexOf(cambios.estado) === -1) throw new Error('Estado desconocido.');
      sh.getRange(i + 1, 6).setValue(cambios.estado);
    }
    if (cambios.cierra_entrega_el !== undefined) sh.getRange(i + 1, 9).setValue(fecha_(cambios.cierra_entrega_el));
    if (cambios.cierra_votacion_el !== undefined) sh.getRange(i + 1, 10).setValue(fecha_(cambios.cierra_votacion_el));
    return true;
  }
  throw new Error('Esa ronda no existe.');
}

/** Estado de cada ronda, para saber dónde se puede entregar o votar. */
function estadosDeRonda_() {
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var m = {};
  for (var i = 1; i < vals.length; i++) m[vals[i][0]] = String(vals[i][5] || 'abierta');
  return m;
}

/** Mapa tarea_id -> enunciado, leído una sola vez. */
function enunciados_() {
  var vals = hoja_(TABS.TAREAS).getDataRange().getValues();
  var m = {};
  for (var i = 1; i < vals.length; i++) m[vals[i][0]] = vals[i][1];
  return m;
}

// ---------------------------------------------------------- aportaciones ---

function misAportaciones_(usuario) {
  var vals = hoja_(TABS.APORTA).getDataRange().getValues();
  var m = {};
  for (var i = 1; i < vals.length; i++) if (vals[i][2] === usuario) m[vals[i][1]] = vals[i][0];
  return m;
}

function aportar_(usuario, tareaId, texto) {
  texto = String(texto || '').trim();
  if (!tareaId) throw new Error('Elige una tarea.');
  if (texto.length < 15) throw new Error('La aportación es demasiado corta.');
  avanzarPorFecha_();
  if (estadosDeRonda_()[tareaId] !== 'abierta') {
    throw new Error('Esa ronda ya no admite respuestas.');
  }
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    if (misAportaciones_(usuario)[tareaId]) throw new Error('Ya respondiste a esta tarea.');
    hoja_(TABS.APORTA).appendRow(
      [Utilities.getUuid().slice(0, 8), tareaId, usuario, texto, new Date()]);
    inc_(usuario, 'aportaciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

/** Orden estable pero distinto para cada alumno: que no gane siempre la primera. */
function barajar_(items, semilla) {
  var base = 0;
  for (var i = 0; i < semilla.length; i++) base = (base * 31 + semilla.charCodeAt(i)) % 100000007;
  return items.map(function (it) {
    var h = base;
    var s = String(it.aportacion_id);
    for (var j = 0; j < s.length; j++) h = (h * 33 + s.charCodeAt(j)) % 100000007;
    return { orden: h, it: it };
  }).sort(function (a, b) { return a.orden - b.orden; })
    .map(function (x) { return x.it; });
}

/**
 * Respuestas de otros en rondas que están en votación.
 * Portón: solo se ven las de una ronda en la que tú ya has entregado la tuya.
 * Se omite el autor a propósito; la votación es ciega.
 */
function paraValorar_(usuario) {
  avanzarPorFecha_();
  var estados = estadosDeRonda_();
  var mias = misAportaciones_(usuario);
  var titulos = enunciados_();
  var usadas = estrellasUsadas_(usuario);

  var aport = hoja_(TABS.APORTA).getDataRange().getValues();
  var vals = hoja_(TABS.VALORA).getDataRange().getValues();
  var yaValoradas = {};
  for (var i = 1; i < vals.length; i++) if (vals[i][3] === usuario) yaValoradas[vals[i][2]] = true;

  var out = [];
  for (var j = 1; j < aport.length; j++) {
    var tareaId = aport[j][1];
    if (estados[tareaId] !== 'votacion') continue;
    if (!mias[tareaId]) continue;
    var id = aport[j][0];
    if (aport[j][2] === usuario || yaValoradas[id]) continue;
    out.push({
      aportacion_id: id,
      tarea_id: tareaId,
      enunciado: titulos[tareaId] || '',
      texto: aport[j][3],
      pesos_libres: PESOS.filter(function (p) { return (usadas[tareaId] || []).indexOf(p) === -1; })
    });
  }
  return barajar_(out, usuario).slice(0, 20);
}

/** Pesos ya gastados por este usuario en cada ronda. */
function estrellasUsadas_(usuario) {
  var vals = hoja_(TABS.VALORA).getDataRange().getValues();
  var m = {};
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][3] !== usuario) continue;
    var t = vals[i][1];
    if (!m[t]) m[t] = [];
    m[t].push(+vals[i][4] || 0);
  }
  return m;
}

function valorar_(usuario, aportacionId, peso) {
  peso = parseInt(peso, 10);
  if (!aportacionId) throw new Error('Falta la aportación.');
  if (PESOS.indexOf(peso) === -1) throw new Error('Las estrellas valen 3, 2 o 1.');

  var datos = aportacion_(aportacionId);
  if (!datos) throw new Error('Esa aportación no existe.');
  if (datos.usuario === usuario) throw new Error('No puedes valorar tu propia respuesta.');

  avanzarPorFecha_();
  if (estadosDeRonda_()[datos.tarea_id] !== 'votacion') {
    throw new Error('Esa ronda no está en votación.');
  }
  if (!misAportaciones_(usuario)[datos.tarea_id]) {
    throw new Error('Primero responde tú a esa tarea.');
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sh = hoja_(TABS.VALORA);
    var vals = sh.getDataRange().getValues();
    for (var i = 1; i < vals.length; i++) {
      if (vals[i][3] !== usuario) continue;
      if (vals[i][2] === aportacionId) throw new Error('Ya valoraste esta respuesta.');
      if (vals[i][1] === datos.tarea_id && (+vals[i][4] || 0) === peso) {
        throw new Error('Ya diste tu estrella de ' + peso + ' en esta tarea.');
      }
    }
    sh.appendRow([Utilities.getUuid().slice(0, 8), datos.tarea_id, aportacionId, usuario, peso, new Date()]);
    inc_(usuario, 'valoraciones', 1);
  } finally { lock.releaseLock(); }
  return true;
}

function aportacion_(aportacionId) {
  var vals = hoja_(TABS.APORTA).getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === aportacionId) return { tarea_id: vals[i][1], usuario: vals[i][2] };
  }
  return null;
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

/**
 * Reinicia los contadores de un alumno para empezar una tanda nueva.
 * Solo el profe: va por aquí y no por el portal para que un alumno no pueda
 * ponerse los contadores a cero por su cuenta.
 */
function resetUsuario_(usuario, alumno) {
  exigirProfe_(usuario);
  alumno = String(alumno || '').trim();
  if (!alumno) throw new Error('Falta el alumno.');
  var sh = hoja_(TABS.ACT);
  var vals = sh.getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === alumno) {
      sh.getRange(i + 1, 2, 1, 3).setValues([[0, 0, 0]]);
      sh.getRange(i + 1, 5).setValue(new Date());
      return { alumno: alumno, reiniciado: true };
    }
  }
  throw new Error('Ese alumno no aparece todavía en la hoja de actividad.');
}


/**
 * Telemetría de uso: cuántas veces entra y cuánto tiempo está.
 *
 * La columna se busca POR NOMBRE y se crea si falta, porque las Hojas que ya
 * existen se crearon sin estas dos columnas y no se puede dar por hecha su
 * posición.
 */
function colAct_(nombre) {
  var sh = hoja_(TABS.ACT);
  var ancho = Math.max(1, sh.getLastColumn());
  var cab = sh.getRange(1, 1, 1, ancho).getValues()[0].map(String);
  var i = cab.indexOf(nombre);
  if (i >= 0) return i + 1;
  sh.getRange(1, ancho + 1).setValue(nombre).setFontWeight('bold');
  return ancho + 1;
}

function conexion_(usuario) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var f = filaActividad_(usuario);
    var sh = hoja_(TABS.ACT);
    var col = colAct_('conexiones');
    sh.getRange(f.fila, col).setValue((+sh.getRange(f.fila, col).getValue() || 0) + 1);
    sh.getRange(f.fila, 6).setValue(new Date());   // ultima_conexion
    sh.getRange(f.fila, 5).setValue(new Date());   // actualizado
  } finally { lock.releaseLock(); }
  return true;
}

function latido_(usuario, segundos) {
  segundos = parseInt(segundos, 10) || 0;
  if (segundos <= 0 || segundos > 120) segundos = 30;   // tope anti-abuso
  var f = filaActividad_(usuario);
  var sh = hoja_(TABS.ACT);
  var col = colAct_('tiempo_seg');
  sh.getRange(f.fila, col).setValue((+sh.getRange(f.fila, col).getValue() || 0) + segundos);
  sh.getRange(f.fila, 5).setValue(new Date());
  return true;
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
