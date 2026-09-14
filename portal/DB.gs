/**
 * DB.gs — Cliente de la puerta de datos (prefijo db_).
 *
 * El portal ya NO abre la Hoja: todas las lecturas y escrituras pasan por el
 * proyecto "Datos" (ver datos/Datos.gs), que se ejecuta como el profe y es el
 * único con acceso a la Hoja. Así el alumnado no puede tocar sus contadores ni
 * leer las valoraciones ajenas.
 *
 * Propiedades del script: DATOS_URL -> URL /exec del despliegue de Datos.
 * Puesta en marcha: docs/DESPLIEGUE_DATOS.md
 */
var DATOS_URL_PROP = 'DATOS_URL';

/**
 * Llama a una operación de la puerta de datos.
 * Envía dos tokens del usuario que accede: el de acceso (cabecera, para pasar
 * el control de acceso del webapp) y el de identidad (cuerpo, para que Datos
 * verifique quién llama sin fiarse de lo que se le mande).
 */
function db_call_(op, args) {
  var url = PropertiesService.getScriptProperties().getProperty(DATOS_URL_PROP);
  if (!url) throw new Error('Falta configurar DATOS_URL en Propiedades del script.');

  var idToken = ScriptApp.getIdentityToken();
  if (!idToken) throw new Error('No se pudo obtener tu identidad. Vuelve a autorizar el portal.');

  var opciones = {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
    payload: JSON.stringify({ token: idToken, op: op, args: args || {} }),
    muteHttpExceptions: true,
    followRedirects: false
  };

  var resp = UrlFetchApp.fetch(url, opciones);
  // Los webapp responden con un 302 a googleusercontent; al seguirlo hay que
  // reenviar la cabecera a mano (UrlFetchApp no la arrastra en el redirect).
  var saltos = 0;
  while (resp.getResponseCode() >= 300 && resp.getResponseCode() < 400 && saltos++ < 3) {
    var destino = resp.getAllHeaders()['Location'] || resp.getAllHeaders()['location'];
    if (!destino) break;
    resp = UrlFetchApp.fetch(destino, opciones);
  }

  if (resp.getResponseCode() !== 200) {
    throw new Error('No se pudo contactar con la base de datos (HTTP ' + resp.getResponseCode() + ').');
  }

  var cuerpo;
  try {
    cuerpo = JSON.parse(resp.getContentText());
  } catch (err) {
    throw new Error('Respuesta inesperada de la base de datos.');
  }
  if (!cuerpo.ok) throw new Error(cuerpo.error || 'Error en la base de datos.');
  return cuerpo.res;
}

// ---------------------------------------------------------------- tareas ---

function tareasAbiertas() {
  return db_call_('tareas');
}

// ---------------------------------------------------------- aportaciones ---

function aportar(tareaId, texto) {
  return db_call_('aportar', { tareaId: tareaId, texto: texto });
}

function aportacionesParaValorar() {
  return db_call_('paraValorar');
}

function valorar(aportacionId, voto) {
  return db_call_('valorar', { aportacionId: aportacionId, voto: voto });
}

// ----------------------------------------------------------- visibilidad ---

/** Config de visibilidad, cacheada un minuto (se pide en cada listado). */
function db_config_() {
  var cache = CacheService.getUserCache();
  var guardada = cache.get('cfg');
  if (guardada) return JSON.parse(guardada);
  var cfg = db_call_('config');
  cache.put('cfg', JSON.stringify(cfg), 60);
  return cfg;
}

function db_configSync_(nodos) {
  CacheService.getUserCache().remove('cfg');
  return db_call_('configSync', { nodos: nodos });
}

function db_configSet_(cambios) {
  CacheService.getUserCache().remove('cfg');
  return db_call_('configSet', { cambios: cambios });
}

// ------------------------------------------------------------- actividad ---

function db_estadoUsuario_(usuario) {
  return db_call_('estado');
}

function db_incConsulta_(usuario) {
  return db_call_('incConsulta');
}
