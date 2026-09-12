/**
 * Generador-SSC — Consulta de apuntes en PDF con Gemini.
 * Configuración requerida en Propiedades del script (Configuración del proyecto):
 *   ROOT_FOLDER_ID  -> ID de la carpeta de Drive con la colección de PDF
 *   GEMINI_API_KEY  -> API key de Google AI Studio (cuenta personal)
 */

var ROOT_FOLDER_PROP = 'ROOT_FOLDER_ID';
var GEMINI_KEY_PROP = 'GEMINI_API_KEY';
var GEMINI_MODEL = 'gemini-2.5-flash';
var MAX_PDF_BYTES = 15 * 1024 * 1024;
var MAX_PDFS_PER_QUERY = 5;

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Consulta de apuntes')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getRootFolder_() {
  var id = PropertiesService.getScriptProperties().getProperty(ROOT_FOLDER_PROP);
  if (!id) throw new Error('Falta configurar ROOT_FOLDER_ID en Propiedades del script.');
  return DriveApp.getFolderById(id);
}

/** Devuelve el árbol de carpetas/PDF para que el alumno filtre. */
function listarEstructura() {
  return recorrerCarpeta_(getRootFolder_());
}

function recorrerCarpeta_(folder) {
  var node = { id: folder.getId(), name: folder.getName(), children: [], files: [] };

  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    node.children.push(recorrerCarpeta_(subfolders.next()));
  }

  var files = folder.getFilesByType(MimeType.PDF);
  while (files.hasNext()) {
    var f = files.next();
    node.files.push({ id: f.getId(), name: f.getName(), size: f.getSize() });
  }

  return node;
}

/** Responde una pregunta usando únicamente los PDF seleccionados. */
function preguntar(pregunta, fileIds) {
  pregunta = (pregunta || '').trim();
  if (!pregunta) throw new Error('Escribe una pregunta.');
  if (!fileIds || fileIds.length === 0) throw new Error('Selecciona al menos un PDF.');
  if (fileIds.length > MAX_PDFS_PER_QUERY) {
    throw new Error('Selecciona como máximo ' + MAX_PDFS_PER_QUERY + ' PDF por pregunta.');
  }

  var parts = [];
  var nombres = [];

  fileIds.forEach(function (id) {
    var file = DriveApp.getFileById(id);
    if (file.getSize() > MAX_PDF_BYTES) {
      throw new Error('"' + file.getName() + '" pesa demasiado (>15 MB). Selecciona menos PDF.');
    }
    nombres.push(file.getName());
    parts.push({
      inlineData: {
        mimeType: 'application/pdf',
        data: Utilities.base64Encode(file.getBlob().getBytes())
      }
    });
  });

  parts.push({ text: pregunta });

  var systemInstruction = {
    parts: [{
      text: 'Eres un asistente de estudio para alumnado de Electromecánica de Vehículos. ' +
        'Responde SOLO con información contenida en los PDF adjuntos (' + nombres.join(', ') + '). ' +
        'Si la respuesta no está en los documentos, dilo explícitamente en vez de inventar. ' +
        'Cita el nombre del documento del que sacas cada dato. Responde en español, claro y conciso.'
    }]
  };

  var apiKey = PropertiesService.getScriptProperties().getProperty(GEMINI_KEY_PROP);
  if (!apiKey) throw new Error('Falta configurar GEMINI_API_KEY en Propiedades del script.');

  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL +
    ':generateContent?key=' + apiKey;

  var response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      systemInstruction: systemInstruction,
      contents: [{ role: 'user', parts: parts }]
    }),
    muteHttpExceptions: true
  });

  var status = response.getResponseCode();
  var body = JSON.parse(response.getContentText());

  if (status !== 200) {
    var errMsg = body.error && body.error.message ? body.error.message : 'Error desconocido de Gemini.';
    throw new Error('Error al consultar Gemini (' + status + '): ' + errMsg);
  }

  var candidate = body.candidates && body.candidates[0];
  if (!candidate || !candidate.content || !candidate.content.parts) {
    throw new Error('Gemini no devolvió respuesta. Prueba a reformular la pregunta.');
  }

  var texto = candidate.content.parts.map(function (p) { return p.text || ''; }).join('\n');
  return { respuesta: texto, fuentes: nombres };
}
