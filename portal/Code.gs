/**
 * Generador-SSC — Portal de aprendizaje (Electromecánica de Vehículos).
 * Router + acceso a la colección de PDF en Drive.
 *
 * Config en Propiedades del script (Configuración del proyecto):
 *   ROOT_FOLDER_ID -> ID de la carpeta de Drive con la colección de PDF.
 * La API key de IA es PERSONAL de cada usuario (UserProperties): ver IA.gs.
 * El webapp se ejecuta COMO EL USUARIO QUE ACCEDE (appsscript.json), para que
 * cada alumno use su propia clave y su propio estado.
 */
var ROOT_FOLDER_PROP = 'ROOT_FOLDER_ID';
// Carpeta de PDF por defecto (los 181 de climatización). Se puede sobreescribir
// definiendo ROOT_FOLDER_ID en Propiedades del script.
var ROOT_FOLDER_DEFAULT = '1cuQ8dpDkQg7lSFOBeP6Lf30gRP-7jHvv';
var MAX_PDFS_PER_QUERY = 5;
var MAX_PDF_BYTES = 15 * 1024 * 1024;

function doGet() {
  return HtmlService.createTemplateFromFile('Portal')
    .evaluate()
    .setTitle('Portal de aprendizaje · Electromecánica')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Inserta el contenido de otro archivo HTML dentro de Portal.html. */
function include(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

/** Correo del centro del usuario que accede (identidad y autoría). */
function usuarioActual() {
  return Session.getActiveUser().getEmail() || '';
}

function getRootFolder_() {
  var id = PropertiesService.getScriptProperties().getProperty(ROOT_FOLDER_PROP) || ROOT_FOLDER_DEFAULT;
  if (!id) throw new Error('Falta configurar ROOT_FOLDER_ID en Propiedades del script.');
  return DriveApp.getFolderById(id);
}

/** Árbol de carpetas/PDF para que el alumno filtre. */
function listarEstructura() {
  return recorrerCarpeta_(getRootFolder_());
}

function recorrerCarpeta_(folder) {
  var node = { id: folder.getId(), name: folder.getName(), children: [], files: [] };
  var subs = folder.getFolders();
  while (subs.hasNext()) node.children.push(recorrerCarpeta_(subs.next()));
  var files = folder.getFilesByType(MimeType.PDF);
  while (files.hasNext()) {
    var f = files.next();
    node.files.push({ id: f.getId(), name: f.getName(), size: f.getSize() });
  }
  return node;
}
