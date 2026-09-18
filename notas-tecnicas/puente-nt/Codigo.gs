/**
 * Puente Drive → GitHub para las capturas de las notas técnicas.
 *
 * El alumnado deja sus fotos en una carpeta de Drive. Este script las sube a
 * nt/imagenes/ del repositorio, que es donde el generador las busca. Drive y
 * GitHub no se hablan solos: esto es ese puente.
 *
 * Se ejecuta con un activador de tiempo (ver crearActivador), no a mano.
 *
 * Configuración, en Configuración del proyecto → Propiedades del script:
 *   GITHUB_TOKEN       token de acceso personal con permiso de escritura de
 *                      contenido SOLO sobre este repositorio
 *   CARPETA_CAPTURAS   ID de la carpeta de Drive (lo que va detrás de
 *                      /folders/ en la URL)
 *
 * El token NO se escribe aquí dentro: el código del proyecto viaja con las
 * copias, las propiedades del script no.
 */

const REPO = 'FranR78/Generador-SSC';
const RAMA = 'main';
const DESTINO = 'notas-tecnicas/imagenes/';

// NT21_02.jpg → hueco 2 de la nota 21. El generador empareja por este nombre.
const NOMBRE_VALIDO = /^NT\d+[_-]\d+(\s*[_-].*)?\.(jpe?g|png|webp|gif)$/i;


function puenteNT_subirCapturas() {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('GITHUB_TOKEN');
  const carpetaId = props.getProperty('CARPETA_CAPTURAS');

  if (!token || !carpetaId) {
    throw new Error(
      'Falta configurar GITHUB_TOKEN o CARPETA_CAPTURAS en las propiedades del script.');
  }

  const carpeta = DriveApp.getFolderById(carpetaId);
  const subidas = obtenerSubcarpeta(carpeta, 'Subidas');
  const rechazadas = obtenerSubcarpeta(carpeta, 'Nombre incorrecto');

  const archivos = carpeta.getFiles();
  let subidos = 0, rechazados = 0;

  while (archivos.hasNext()) {
    const archivo = archivos.next();
    const nombre = archivo.getName();

    if (!NOMBRE_VALIDO.test(nombre)) {
      // No se borra nada: se aparta para que el alumno lo vea y lo renombre.
      archivo.moveTo(rechazadas);
      rechazados++;
      continue;
    }

    try {
      subirAGitHub(token, nombre, archivo.getBlob().getBytes());
      archivo.moveTo(subidas);
      subidos++;
    } catch (e) {
      // Se queda en la carpeta y se reintenta en la siguiente pasada.
      console.error('No se pudo subir ' + nombre + ': ' + e.message);
    }
  }

  console.log(subidos + ' capturas subidas, ' + rechazados + ' con el nombre mal.');
}


function subirAGitHub(token, nombre, bytes) {
  // La carpeta lleva espacio y tilde, así que hay que codificar el destino
  // igual que el nombre del archivo: sin esto la URL sale rota.
  const url = 'https://api.github.com/repos/' + REPO + '/contents/' +
              rutaCodificada(DESTINO + nombre);
  const cabeceras = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
  };

  // Si el archivo ya está, GitHub exige el sha del que se reemplaza.
  let sha = null;
  const previo = UrlFetchApp.fetch(url + '?ref=' + RAMA, {
    headers: cabeceras, muteHttpExceptions: true,
  });
  if (previo.getResponseCode() === 200) {
    sha = JSON.parse(previo.getContentText()).sha;
  }

  const cuerpo = {
    message: 'Capturas: ' + nombre,
    content: Utilities.base64Encode(bytes),
    branch: RAMA,
  };
  if (sha) cuerpo.sha = sha;

  const r = UrlFetchApp.fetch(url, {
    method: 'put',
    headers: cabeceras,
    contentType: 'application/json',
    payload: JSON.stringify(cuerpo),
    muteHttpExceptions: true,
  });

  if (r.getResponseCode() >= 300) {
    throw new Error('GitHub respondió ' + r.getResponseCode() + ': ' + r.getContentText());
  }
}


/** Codifica cada tramo de la ruta por separado, dejando las barras intactas. */
function rutaCodificada(ruta) {
  return ruta.split('/').map(encodeURIComponent).join('/');
}


function obtenerSubcarpeta(padre, nombre) {
  const existentes = padre.getFoldersByName(nombre);
  return existentes.hasNext() ? existentes.next() : padre.createFolder(nombre);
}


/** Se ejecuta UNA vez, a mano, para dejar los dos automatismos en marcha. */
function crearActivador() {
  // Las capturas, cada 15 minutos: el alumnado las sube durante la clase y
  // conviene que aparezcan pronto.
  crearUno_('puenteNT_subirCapturas', 15);
  // Los documentos ya procesados no corren ninguna prisa: con una vez al día
  // sobra, y así no se gasta cuota de ejecución para nada.
  crearUno_('puenteNT_archivarProcesados', 60 * 24);

  console.log('Activadores creados: capturas cada 15 min, archivado una vez al día.');
}


function crearUno_(funcion, minutos) {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === funcion)
    .forEach(t => ScriptApp.deleteTrigger(t));

  const disparador = ScriptApp.newTrigger(funcion).timeBased();
  if (minutos >= 60 * 24) {
    disparador.everyDays(1).atHour(6).create();
  } else {
    disparador.everyMinutes(minutos).create();
  }
}


/**
 * Aparta de la carpeta de fuentes los PDF que ya has procesado.
 *
 * Tú renombras el documento en Drive añadiéndole la marca (por defecto PRO) y
 * esto lo mueve a "Procesados" en la siguiente pasada. Lo que queda en la
 * carpeta es, por definición, lo que falta por procesar: la lista de pendientes
 * se mantiene sola.
 *
 * OJO: esto NO quita nada del cuaderno de NotebookLM. Mover o renombrar en
 * Drive no toca las fuentes del cuaderno, que son una copia hecha al
 * importarlas. Quitarlas de ahí sigue siendo cosa tuya, a mano.
 *
 * Configuración añadida a las propiedades del script:
 *   CARPETA_FUENTES   ID de la carpeta de Drive con los PDF sin procesar
 *   MARCA_PROCESADO   opcional; por defecto 'PRO'
 */
function puenteNT_archivarProcesados() {
  const props = PropertiesService.getScriptProperties();
  const carpetaId = props.getProperty('CARPETA_FUENTES');
  if (!carpetaId) {
    throw new Error('Falta CARPETA_FUENTES en las propiedades del script.');
  }

  const marca = (props.getProperty('MARCA_PROCESADO') || 'PRO').toUpperCase();
  // La marca tiene que ir suelta, no dentro de otra palabra: si no, un
  // "PROCEDIMIENTO" o un "PROTECCIÓN" en el nombre se daría por procesado.
  const patron = new RegExp(
    '(?:^|[^A-ZÁÉÍÓÚÜÑ])' + marca + '(?:[^A-ZÁÉÍÓÚÜÑ]|$)');

  const raiz = DriveApp.getFolderById(carpetaId);
  const movidos = archivarEnCarpeta_(raiz, patron);

  console.log(movidos + ' documentos apartados. Lo que queda en las carpetas está sin procesar.');
}


/**
 * Recorre una carpeta temática y sus subcarpetas. Los PDF marcados van a un
 * "Procesados" propio de la misma carpeta donde estaban, así se conserva la
 * división por temáticas. No entra en las carpetas "Procesados" para no
 * remover lo ya apartado, y solo crea el "Procesados" si hay algo que mover.
 */
function archivarEnCarpeta_(carpeta, patron) {
  let movidos = 0;
  let procesados = null;

  const archivos = carpeta.getFiles();
  while (archivos.hasNext()) {
    const archivo = archivos.next();
    if (!patron.test(archivo.getName().toUpperCase())) continue;

    if (!procesados) procesados = obtenerSubcarpeta(carpeta, 'Procesados');
    archivo.moveTo(procesados);   // mover no cambia el ID: el cuaderno no se rompe
    console.log('archivado: ' + carpeta.getName() + '/' + archivo.getName());
    movidos++;
  }

  const subcarpetas = carpeta.getFolders();
  while (subcarpetas.hasNext()) {
    const sub = subcarpetas.next();
    if (sub.getName() === 'Procesados') continue;
    movidos += archivarEnCarpeta_(sub, patron);
  }

  return movidos;
}


/**
 * Comprueba que el puente está bien configurado, antes de dejarlo suelto.
 *
 * Se ejecuta a mano desde el editor, mira el registro y ya está. No sube ni
 * mueve nada, y no escribe el token en ningún sitio: solo dice si sirve.
 */
function puenteNT_comprobar() {
  const props = PropertiesService.getScriptProperties();
  const lineas = [];
  let fallos = 0;

  function bien(texto) { lineas.push('  OK    ' + texto); }
  function mal(texto)  { lineas.push('  FALLA ' + texto); fallos++; }

  // --- Las carpetas de Drive ---
  [['CARPETA_CAPTURAS', 'capturas del alumnado'],
   ['CARPETA_FUENTES', 'PDF sin procesar']].forEach(function (par) {
    const id = props.getProperty(par[0]);
    if (!id) return mal(par[0] + ' sin poner (' + par[1] + ')');
    try {
      bien(par[0] + ' → "' + DriveApp.getFolderById(id).getName() + '"');
    } catch (e) {
      mal(par[0] + ': ese ID no abre ninguna carpeta. ¿Copiaste lo que va detrás de /folders/?');
    }
  });

  // --- El token ---
  const token = props.getProperty('GITHUB_TOKEN');
  if (!token) {
    mal('GITHUB_TOKEN sin poner');
  } else {
    const cabeceras = {Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json'};

    const repo = UrlFetchApp.fetch('https://api.github.com/repos/' + REPO,
                                   {headers: cabeceras, muteHttpExceptions: true});
    const codigo = repo.getResponseCode();

    if (codigo === 401) {
      mal('el token no vale: caducado, mal copiado o revocado');
    } else if (codigo === 404) {
      mal('el token no ve ' + REPO + '. Al crearlo hay que darle acceso a ESE repositorio');
    } else if (codigo !== 200) {
      mal('GitHub responde ' + codigo + ' al pedir el repositorio');
    } else {
      bien('el token ve ' + REPO);
      if (JSON.parse(repo.getContentText()).permissions.push) {
        bien('tiene permiso de escritura (Contents: Read and write)');
      } else {
        mal('solo puede leer. Hace falta Contents: Read and write para subir las capturas');
      }
    }

    // La carpeta de destino: 404 aquí es normal si aún está vacía.
    const destino = UrlFetchApp.fetch(
      'https://api.github.com/repos/' + REPO + '/contents/' +
      rutaCodificada(DESTINO) + '?ref=' + RAMA,
      {headers: cabeceras, muteHttpExceptions: true});
    if (destino.getResponseCode() === 200) {
      bien('la carpeta de destino existe: ' + DESTINO);
    } else {
      lineas.push('  AVISO ' + DESTINO + ' todavía no existe en el repositorio; ' +
                  'se creará con la primera captura');
    }
  }

  // --- Los activadores ---
  const activos = ScriptApp.getProjectTriggers().map(function (t) { return t.getHandlerFunction(); });
  ['puenteNT_subirCapturas', 'puenteNT_archivarProcesados'].forEach(function (f) {
    if (activos.indexOf(f) >= 0) bien('activador puesto: ' + f);
    else mal('falta el activador de ' + f + ' — ejecuta crearActivador una vez');
  });

  console.log(lineas.join('\n'));
  console.log(fallos === 0
    ? '\nTodo listo. El puente puede funcionar solo.'
    : '\n' + fallos + ' cosa(s) que arreglar antes de fiarte del puente.');
}
