/**
 * Notas.gs — Las notas técnicas dentro del portal.
 *
 * El corpus (notas.json, ~370 KB) lo deja el puente en Drive; aquí solo se
 * lee. Nunca se manda entero al navegador: el índice pesa poco y el texto se
 * pide nota a nota. Si no, cada entrada al portal serían 370 KB.
 *
 * Propiedad del script: NOTAS_FILE_ID -> id del archivo notas.json en Drive.
 */

var NOTAS_FILE_PROP = 'NOTAS_FILE_ID';
var _notasMemo = null;   // memoria por ejecución, no entre ejecuciones

function notas_() {
  if (_notasMemo) return _notasMemo;
  var id = PropertiesService.getScriptProperties().getProperty(NOTAS_FILE_PROP);
  if (!id) {
    throw new Error('Faltan los apuntes: configura NOTAS_FILE_ID. Los deja el ' +
      'puente al ejecutar puenteNT_traerNotas().');
  }
  var txt;
  try {
    txt = DriveApp.getFileById(id).getBlob().getDataAsString('UTF-8');
  } catch (e) {
    throw new Error('No se puede abrir el archivo de apuntes en Drive.');
  }
  try {
    _notasMemo = JSON.parse(txt);
  } catch (e2) {
    throw new Error('El archivo de apuntes no es JSON válido; vuelve a generarlo.');
  }
  return _notasMemo;
}

/**
 * Índice para la pantalla: lo justo para pintar la lista y buscar.
 * Marca las que el alumno ya ha leído, que es lo que le dice por dónde va.
 */
function listarNotas() {
  var d = notas_();
  var leidas = {};
  try {
    (db_progreso_().notasLeidas || []).forEach(function (n) { leidas[n] = true; });
  } catch (e) { /* sin progreso no se rompe la lectura */ }

  return {
    generado: d.generado,
    total: d.total,
    grupos: d.grupos,
    notas: d.notas.map(function (n) {
      return {
        nt: n.nt, titulo: n.titulo, menu: n.menu, grupo: n.grupo,
        codigo: n.codigo, tipo: n.tipo, subtipo: n.subtipo,
        fuentes: n.fuentes, leida: !!leidas[n.nt]
      };
    })
  };
}

/** Una nota entera. Al abrirla queda registrada como leída. */
function cargarNota(nt) {
  nt = parseInt(nt, 10);
  var n = notas_().notas.filter(function (x) { return x.nt === nt; })[0];
  if (!n) throw new Error('No existe la nota NT' + nt + '.');
  try { db_leido_(nt); } catch (e) { /* que no impida leer */ }
  return n;
}

/**
 * Texto de las notas para dárselo a la IA.
 * Si no se piden notas concretas va el corpus entero: son ~370 KB de texto,
 * muchísimo menos que un solo PDF en base64, así que el alumno puede preguntar
 * contra toda la asignatura de una vez.
 */
function textoNotasParaIA(nts) {
  var d = notas_();
  var elegidas = (nts && nts.length)
    ? d.notas.filter(function (n) { return nts.indexOf(n.nt) >= 0; })
    : d.notas;

  return elegidas.map(function (n) {
    var cab = 'NT' + n.nt + ' — ' + n.titulo + (n.codigo ? ' (' + n.codigo + ')' : '') +
              '\n[grupo: ' + n.grupo + ' · fuente: ' + (n.fuentes || 'sin declarar') + ']';
    var cuerpo = n.apartados.map(function (a) {
      return '## ' + a.titulo + '\n' + a.texto;
    }).join('\n');
    return cab + '\n' + cuerpo;
  }).join('\n\n---\n\n');
}
