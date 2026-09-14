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
var MAX_PDFS_PER_QUERY = 5;
var MAX_PDF_BYTES = 15 * 1024 * 1024;
// Tope del conjunto: base64 infla ~33% y UrlFetchApp corta bastante antes.
var MAX_TOTAL_BYTES = 18 * 1024 * 1024;

function doGet() {
  try { db_tocar_(); } catch (err) { /* la visita no debe impedir entrar */ }
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
  var id = PropertiesService.getScriptProperties().getProperty(ROOT_FOLDER_PROP);
  if (!id) throw new Error('Falta configurar ROOT_FOLDER_ID en Propiedades del script.');
  return DriveApp.getFolderById(id);
}

/**
 * Árbol de carpetas/PDF ya filtrado por la configuración de visibilidad.
 * El filtro se aplica AQUÍ, en el servidor: si se hiciera en el HTML, bastaría
 * mirar el código de la página para ver la colección entera.
 */
function listarEstructura() {
  var cfg = db_config_();
  var raiz = podar_(recorrerCarpeta_(getRootFolder_()), cfg, true);
  return raiz || { id: '', name: 'Sin temas disponibles', children: [], files: [] };
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

/** Sin fila en Config se considera visible (los PDF nuevos no desaparecen). */
function visible_(mapa, id) {
  var e = mapa[id];
  return !e || e.visible !== false;
}

/**
 * Quita del árbol lo que no está disponible. Ocultar un tema oculta todo lo que
 * cuelga de él. El profesorado ve el árbol completo, marcado.
 */
function podar_(nodo, cfg, esRaiz) {
  if (!esRaiz && !visible_(cfg.temas, nodo.id) && !cfg.profe) return null;

  nodo.oculto = !esRaiz && !visible_(cfg.temas, nodo.id);
  nodo.files = nodo.files.filter(function (f) {
    f.oculto = !visible_(cfg.docs, f.id);
    return cfg.profe || !f.oculto;
  });
  nodo.children = nodo.children
    .map(function (h) { return podar_(h, cfg, false); })
    .filter(function (h) { return h !== null; });

  if (!esRaiz && !cfg.profe && !nodo.files.length && !nodo.children.length) return null;
  return nodo;
}

/** Ids de PDF que el usuario tiene permitido consultar ahora mismo. */
function idsPermitidos_() {
  var permitidos = {};
  (function recorrer(n) {
    n.files.forEach(function (f) { if (!f.oculto) permitidos[f.id] = true; });
    n.children.forEach(recorrer);
  })(listarEstructura());
  return permitidos;
}

/** ¿Quien mira es profesorado? Lo decide la puerta de datos, no el navegador. */
function soyProfe() {
  return !!db_config_().profe;
}

/**
 * Todo lo que pinta el panel del profesorado en una sola llamada: catálogo con
 * su estado de visibilidad, umbrales y actividad del grupo.
 */
function panelProfesor() {
  var cfg = db_config_();
  if (!cfg.profe) throw new Error('Solo el profesorado puede ver el panel.');
  var pulso = db_pulso_();
  var c = cfg.gate;
  pulso.alumnos.forEach(function (a) {
    var k = Math.min(Math.floor(a.aportaciones / c.REQ_APORTA), Math.floor(a.valoraciones / c.REQ_VALORA));
    a.permitidas = (1 + k) * c.LIBRES;
    a.bloqueado = a.consultas >= a.permitidas;
  });
  return { arbol: podar_(recorrerCarpeta_(getRootFolder_()), cfg, true), gate: c, pulso: pulso.alumnos };
}

function listarRondas() {
  return db_rondas_();
}

function crearRonda(ronda) {
  return db_rondaNueva_(ronda);
}

function cambiarRonda(tareaId, cambios) {
  return db_rondaSet_(tareaId, cambios);
}

function guardarVisibilidad(cambios) {
  if (!db_config_().profe) throw new Error('Solo el profesorado puede hacer esto.');
  return db_configSet_(cambios);
}

function guardarUmbrales(umbrales) {
  if (!db_config_().profe) throw new Error('Solo el profesorado puede hacer esto.');
  return db_gateSet_(umbrales);
}

/** Vuelca a Config los temas y documentos que aún no estén dados de alta. */
function sincronizarCatalogo() {
  if (!db_config_().profe) throw new Error('Solo el profesorado puede hacer esto.');
  var nodos = [];
  (function recorrer(n, padre) {
    if (padre) nodos.push({ tipo: 'tema', id: n.id, nombre: n.name, padre: padre });
    n.files.forEach(function (f) { nodos.push({ tipo: 'doc', id: f.id, nombre: f.name, padre: n.id }); });
    n.children.forEach(function (h) { recorrer(h, n.id); });
  })(recorrerCarpeta_(getRootFolder_()), '');
  return db_configSync_(nodos);
}
