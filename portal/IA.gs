/**
 * IA.gs — Clave PERSONAL del usuario (UserProperties) + consulta a Gemini con
 * cascada de modelos por cuota. Nunca ScriptProperties para la key.
 * Lecciones: Documentos/LECCIONESv2.md, Documentos/CONFIGURAR_API_KEYv2.md
 */
var IA_KEY_PROP = 'AI_API_KEY';
var IA_MODEL_OK_PROP = 'AI_MODEL_OK';
var IA_PROMPT_PROP = 'AI_SYSTEM_PROMPT';   // editable por el admin
var IA_PROMPT_DEFAULT = 'Eres un asistente de estudio de Electromecánica de Vehículos. ' +
  'Responde solo con la información de las fuentes adjuntas: PDF o notas técnicas (las que ' +
  'empiezan por NT). Si algo no está en ellas, dilo en vez de inventar. Cita de dónde sale cada ' +
  'dato: el nombre del PDF o el número de la nota. Responde en español, claro y conciso.';

function ia_prompt_() {
  return PropertiesService.getScriptProperties().getProperty(IA_PROMPT_PROP) || IA_PROMPT_DEFAULT;
}
// Fallback si falla el descubrimiento dinámico de modelos. Se prueban en orden.
var IA_FALLBACK = ['gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-flash-latest'];

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

/** Modelos que la CLAVE tiene realmente (con generateContent), flash primero. */
function ia_modelosDisponibles_(key) {
  try {
    var resp = UrlFetchApp.fetch(
      'https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=' + encodeURIComponent(key),
      { muteHttpExceptions: true });
    if (resp.getResponseCode() !== 200) return [];
    var models = (JSON.parse(resp.getContentText()).models) || [];
    var EXCLUIR = /image|imagen|vision|tts|audio|embedding|aqa|learnlm|gemma/;
    var names = models.filter(function (m) {
      return (m.supportedGenerationMethods || []).indexOf('generateContent') >= 0;
    }).map(function (m) { return String(m.name).replace(/^models\//, ''); })
      .filter(function (n) { return !EXCLUIR.test(n); });   // solo modelos de texto
    function score(n) {                       // flash estable primero; alias volátiles al final
      var s = 0;
      if (n.indexOf('flash') >= 0) s -= 4;
      if (/latest|exp|preview|thinking/.test(n)) s += 5;
      if (n.indexOf('lite') >= 0) s += 1;
      return s;
    }
    names.sort(function (a, b) { return score(a) - score(b); });
    return names;
  } catch (e) { return []; }
}

/** Cascada: último que funcionó + los que la clave tiene de verdad (o fallback). */
function ia_modelos_(key) {
  var ok = PropertiesService.getUserProperties().getProperty(IA_MODEL_OK_PROP);
  var base = ia_modelosDisponibles_(key);
  if (!base.length) base = IA_FALLBACK.slice();
  if (ok) base = [ok].concat(base.filter(function (m) { return m !== ok; }));
  return base;
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
  var modelos = ia_modelos_(key);
  var ultimoError = 'Ningún modelo disponible para esta clave. Habilita la Generative Language API en Google Cloud.';
  for (var i = 0; i < modelos.length; i++) {
    var r = ia_call_(modelos[i], payload, key);
    if (r.status === 200) {
      PropertiesService.getUserProperties().setProperty(IA_MODEL_OK_PROP, modelos[i]);
      return { ok: true, modelo: modelos[i] };
    }
    ultimoError = (r.body.error && r.body.error.message) ? r.body.error.message : ('HTTP ' + r.status);
    if (r.status === 404 || r.status === 429) continue;   // no existe / sin cuota: prueba otro
    return { ok: false, error: ultimoError };
  }
  return { ok: false, error: ultimoError };
}

/**
 * Pregunta usando SOLO las fuentes que el alumno ha elegido, con su clave.
 *
 * Las fuentes son de dos clases y se pueden mezclar en la misma pregunta:
 *   fileIds  PDF originales del fabricante (Drive)
 *   nts      notas técnicas ya generadas, por número (NT1, NT2…)
 *
 * Mezclarlas es el caso interesante: "esto que dice la nota, ¿de dónde sale
 * en el manual?". Y preguntar solo sobre notas es baratísimo comparado con
 * adjuntar un PDF escaneado, así que conviene que sea lo normal.
 */
function preguntar(pregunta, fileIds, nts) {
  pregunta = (pregunta || '').trim();
  if (!pregunta) throw new Error('Escribe una pregunta.');
  fileIds = fileIds || [];
  nts = (nts || []).map(Number).filter(function (n) { return n > 0; });

  if (!fileIds.length && !nts.length) throw new Error('Selecciona al menos un PDF o una nota técnica.');
  if (fileIds.length > MAX_PDFS_PER_QUERY) throw new Error('Máximo ' + MAX_PDFS_PER_QUERY + ' PDF por pregunta.');
  if (nts.length > MAX_NOTAS_PER_QUERY) throw new Error('Máximo ' + MAX_NOTAS_PER_QUERY + ' notas por pregunta.');

  var permitidos = idsPermitidos_();
  fileIds.forEach(function (id) {
    if (!permitidos[id]) throw new Error('Ese documento no está disponible ahora mismo.');
  });

  var usuario = usuarioActual();
  var estado = gate_estado(usuario);
  if (estado.bloqueado) throw new Error(gate_mensajeBloqueo_(estado));

  var key = ia_getKey_();
  var parts = [], nombres = [], total = 0;

  // Primero las notas: son texto, van delante y salen gratis.
  if (nts.length) {
    var texto = textoNotasParaIA(nts);
    if (texto) {
      parts.push({ text: 'NOTAS TÉCNICAS SELECCIONADAS\n\n' + texto });
      nts.forEach(function (n) { nombres.push('NT' + n); });
    }
  }

  fileIds.forEach(function (id) {
    var file = DriveApp.getFileById(id);
    if (file.getSize() > MAX_PDF_BYTES) throw new Error('"' + file.getName() + '" pesa >15 MB.');
    // El límite que importa es el del conjunto: la petición entera viaja en una
    // sola llamada y UrlFetchApp la rechaza mucho antes de los 5 × 15 MB.
    total += file.getSize();
    if (total > MAX_TOTAL_BYTES) {
      throw new Error('Los PDF seleccionados suman demasiado. Elige menos o más pequeños.');
    }
    nombres.push(file.getName());
    parts.push({ inlineData: { mimeType: 'application/pdf', data: Utilities.base64Encode(file.getBlob().getBytes()) } });
  });
  parts.push({ text: pregunta });

  var instruccion = ia_prompt_() + ' Fuentes adjuntas: ' + nombres.join(', ') + '.';
  if (nts.length) {
    // El prompt por defecto habla de "los PDF adjuntos". Sin esto, con solo
    // notas seleccionadas el modelo puede responder que no hay ningún PDF.
    instruccion += ' Las fuentes que empiezan por NT son notas técnicas en texto,' +
      ' ya adjuntas más arriba; trátalas igual que un documento y cítalas por su NT.';
  }
  var payload = {
    systemInstruction: { parts: [{ text: instruccion }] },
    contents: [{ role: 'user', parts: parts }]
  };

  var modelos = ia_modelos_(key);
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
    } else if (r.status === 404 || r.status === 429) {
      ultimoError = (r.body.error && r.body.error.message) ? r.body.error.message : ('HTTP ' + r.status);
      continue;
    } else {
      ultimoError = (r.body.error && r.body.error.message) ? r.body.error.message : ('HTTP ' + r.status);
      break;
    }
  }
  throw new Error('Error de IA: ' + ultimoError);
}


// ---------- Prompt de la IA, editable por el profesorado ----------
// Vivia en el panel Admin, que se ha retirado. El prompt sigue en las
// Propiedades del script del portal (no en la Hoja), pero quien puede tocarlo
// lo decide la puerta de datos, para no mantener dos listas de profesores.

function ia_exigirProfe_() {
  if (!soyProfe()) throw new Error('Solo el profesorado puede cambiar el prompt.');
}

function obtenerPrompt() {
  ia_exigirProfe_();
  return ia_prompt_();
}

function guardarPrompt(texto) {
  ia_exigirProfe_();
  texto = String(texto || '').trim();
  if (texto.length < 20) throw new Error('El prompt es demasiado corto.');
  PropertiesService.getScriptProperties().setProperty(IA_PROMPT_PROP, texto);
  return true;
}

function restaurarPrompt() {
  ia_exigirProfe_();
  PropertiesService.getScriptProperties().deleteProperty(IA_PROMPT_PROP);
  return ia_prompt_();
}

