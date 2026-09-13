/**
 * IA.gs — Clave PERSONAL del usuario (UserProperties) + consulta a Gemini con
 * cascada de modelos por cuota. Nunca ScriptProperties para la key.
 * Lecciones: Documentos/LECCIONESv2.md, Documentos/CONFIGURAR_API_KEYv2.md
 */
var IA_KEY_PROP = 'AI_API_KEY';
var IA_MODEL_OK_PROP = 'AI_MODEL_OK';
// Cascada por cuota (versiones explícitas, no alias "latest"): se prueban en orden.
var IA_MODELOS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];

function guardarClaveIA(clave) {
  clave = (clave || '').trim();
  if (!clave) throw new Error('Pega una clave.');
  PropertiesService.getUserProperties().setProperty(IA_KEY_PROP, clave);
  return true;
}

function tengoClaveIA() {
  return !!PropertiesService.getUserProperties().getProperty(IA_KEY_PROP);
}

function borrarClaveIA() {
  PropertiesService.getUserProperties().deleteProperty(IA_KEY_PROP);
  return true;
}

function ia_getKey_() {
  var k = PropertiesService.getUserProperties().getProperty(IA_KEY_PROP);
  if (!k) throw new Error('Configura tu API key en "Mi cuenta" antes de preguntar.');
  return k;
}

/** Cascada empezando por el último modelo que funcionó para este usuario. */
function ia_modelos_() {
  var ok = PropertiesService.getUserProperties().getProperty(IA_MODEL_OK_PROP);
  if (ok && IA_MODELOS.indexOf(ok) > 0) {
    return [ok].concat(IA_MODELOS.filter(function (m) { return m !== ok; }));
  }
  return IA_MODELOS.slice();
}

function ia_call_(modelo, payload, key) {
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + modelo +
    ':generateContent?key=' + encodeURIComponent(key);
  var resp = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
  return { status: resp.getResponseCode(), body: JSON.parse(resp.getContentText()) };
}

/** Comprueba la clave con una llamada mínima. Devuelve {ok, modelo|error}. */
function comprobarClaveIA() {
  var key = ia_getKey_();
  var payload = { contents: [{ role: 'user', parts: [{ text: 'ping' }] }] };
  var modelos = ia_modelos_();
  for (var i = 0; i < modelos.length; i++) {
    var r = ia_call_(modelos[i], payload, key);
    if (r.status === 200) {
      PropertiesService.getUserProperties().setProperty(IA_MODEL_OK_PROP, modelos[i]);
      return { ok: true, modelo: modelos[i] };
    }
    if (r.status !== 404) {   // 404 = ese modelo no existe para la clave; sigue probando
      var msg = (r.body.error && r.body.error.message) ? r.body.error.message : ('HTTP ' + r.status);
      return { ok: false, error: msg };
    }
  }
  return { ok: false, error: 'Ningún modelo disponible para esta clave. Habilita la Generative Language API en Google Cloud.' };
}

/** Pregunta usando SOLO los PDF seleccionados y la clave del propio usuario. */
function preguntar(pregunta, fileIds) {
  pregunta = (pregunta || '').trim();
  if (!pregunta) throw new Error('Escribe una pregunta.');
  if (!fileIds || !fileIds.length) throw new Error('Selecciona al menos un PDF.');
  if (fileIds.length > MAX_PDFS_PER_QUERY) throw new Error('Máximo ' + MAX_PDFS_PER_QUERY + ' PDF por pregunta.');

  var usuario = usuarioActual();
  var estado = gate_estado(usuario);
  if (estado.bloqueado) throw new Error(gate_mensajeBloqueo_(estado));

  var key = ia_getKey_();
  var parts = [], nombres = [];
  fileIds.forEach(function (id) {
    var file = DriveApp.getFileById(id);
    if (file.getSize() > MAX_PDF_BYTES) throw new Error('"' + file.getName() + '" pesa >15 MB.');
    nombres.push(file.getName());
    parts.push({ inlineData: { mimeType: 'application/pdf', data: Utilities.base64Encode(file.getBlob().getBytes()) } });
  });
  parts.push({ text: pregunta });

  var payload = {
    systemInstruction: { parts: [{ text:
      'Eres un asistente de estudio de Electromecánica de Vehículos. Responde SOLO con ' +
      'información de los PDF adjuntos (' + nombres.join(', ') + '). Si no está, dilo en vez de ' +
      'inventar. Cita el documento de cada dato. Español, claro y conciso.' }] },
    contents: [{ role: 'user', parts: parts }]
  };

  var modelos = ia_modelos_();
  var ultimoError = 'Sin respuesta.';
  for (var i = 0; i < modelos.length; i++) {
    var r = ia_call_(modelos[i], payload, key);
    if (r.status === 200) {
      var c = r.body.candidates && r.body.candidates[0];
      if (c && c.content && c.content.parts) {
        PropertiesService.getUserProperties().setProperty(IA_MODEL_OK_PROP, modelos[i]);
        var texto = c.content.parts.map(function (p) { return p.text || ''; }).join('\n');
        db_incConsulta_(usuario);
        return { respuesta: texto, fuentes: nombres, modelo: modelos[i], estado: miEstado() };
      }
      ultimoError = 'Respuesta vacía; reformula la pregunta.';
    } else if (r.status === 404) {
      continue;
    } else {
      ultimoError = (r.body.error && r.body.error.message) ? r.body.error.message : ('HTTP ' + r.status);
      break;
    }
  }
  throw new Error('Error de IA: ' + ultimoError);
}
