/**
 * Aprobacion.gs — Capturas del alumnado con aprobación del profesor.
 *
 * El alumno sube desde el portal (pestaña «Capturas») la imagen de un hueco
 * concreto (NT23_01). Aquí, que corre COMO EL PROFE, se guarda en la
 * subcarpeta «Por aprobar» de CARPETA_CAPTURAS, fuera del alcance del puente.
 * Solo cuando el profe la aprueba en el Panel pasa a la raíz de la carpeta con
 * su nombre exacto (NT23_01.jpg), y el puente (puenteNT_subirCapturas) la
 * sube a GitHub en su siguiente pasada.
 *
 * Nada se borra: lo rechazado va a «Rechazadas». Solo la miniatura, que es
 * una copia reducida hecha para el Panel, se manda a la papelera al resolver.
 *
 * Por qué con aprobación: pueden salir matrículas, caras o el VIN, y son
 * fotos hechas por menores.
 */

var CAP_POR_APROBAR = 'Por aprobar';
var CAP_RECHAZADAS = 'Rechazadas';
var CAP_NOMBRE = /^NT\d+_\d{2}$/;
var CAP_MAX_B64 = 4 * 1024 * 1024;   // ~3 MB de imagen: el portal ya la reduce

function capCarpeta_() {
  var id = PropertiesService.getScriptProperties().getProperty('CARPETA_CAPTURAS');
  if (!id) throw new Error('Falta CARPETA_CAPTURAS en las propiedades del proyecto Datos.');
  return DriveApp.getFolderById(id);
}

/** Alumno → «Por aprobar». args: {nombre, datos, mini} (base64 JPEG). */
function capturaSubir_(usuario, args) {
  var nombre = String(args.nombre || '');
  if (!CAP_NOMBRE.test(nombre)) throw new Error('Nombre de captura no válido: ' + nombre);
  if (!args.datos || args.datos.length > CAP_MAX_B64) throw new Error('La imagen falta o es demasiado grande.');

  var pend = obtenerSubcarpeta(capCarpeta_(), CAP_POR_APROBAR);
  var sello = Utilities.formatDate(new Date(), 'Europe/Madrid', 'yyyyMMdd-HHmmss');
  var base = nombre + '__' + sello;
  var img = pend.createFile(Utilities.newBlob(
    Utilities.base64Decode(args.datos), 'image/jpeg', base + '.jpg'));
  img.setDescription(usuario);
  if (args.mini) {
    pend.createFile(Utilities.newBlob(
      Utilities.base64Decode(args.mini), 'image/jpeg', 'mini__' + base + '.jpg'));
  }
  return { ok: true, nombre: nombre };
}

/** Profe: lo que espera aprobación, con miniatura para verlo en el Panel. */
function capturasPorAprobar_(usuario) {
  exigirProfe_(usuario);
  var pend = obtenerSubcarpeta(capCarpeta_(), CAP_POR_APROBAR);
  var minis = {}, fotos = [];
  var it = pend.getFiles();
  while (it.hasNext()) {
    var f = it.next();
    var n = f.getName();
    if (n.indexOf('mini__') === 0) minis[n.slice(6)] = f;
    else fotos.push(f);
  }
  return fotos.map(function (f) {
    var mini = minis[f.getName()];
    return {
      id: f.getId(),
      nombre: f.getName().split('__')[0],
      alumno: f.getDescription() || '',
      fecha: Utilities.formatDate(f.getDateCreated(), 'Europe/Madrid', 'dd/MM HH:mm'),
      mini: mini ? Utilities.base64Encode(mini.getBlob().getBytes()) : ''
    };
  });
}

/** Profe: aprobar (→ raíz con su nombre, la sube el puente) o rechazar. */
function capturaResolver_(usuario, args) {
  exigirProfe_(usuario);
  var raiz = capCarpeta_();
  var pend = obtenerSubcarpeta(raiz, CAP_POR_APROBAR);
  var f = DriveApp.getFileById(String(args.id));
  var padres = f.getParents();
  if (!padres.hasNext() || padres.next().getId() !== pend.getId()) {
    throw new Error('Esa captura ya no está pendiente.');
  }
  var base = f.getName().replace(/\.jpg$/i, '');
  var nombre = base.split('__')[0];

  if (args.aprobar) {
    f.setName(nombre + '.jpg');   // el nombre exacto que empareja construir.py
    f.moveTo(raiz);
  } else {
    f.moveTo(obtenerSubcarpeta(raiz, CAP_RECHAZADAS));
  }
  var minis = pend.getFilesByName('mini__' + base + '.jpg');
  while (minis.hasNext()) minis.next().setTrashed(true);
  return { ok: true, nombre: nombre, aprobada: !!args.aprobar };
}
