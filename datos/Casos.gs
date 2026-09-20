/**
 * Casos.gs — Las averías viven en una Hoja de cálculo, no en el código.
 *
 * El código es el programa; las plantillas son los casos. Para añadir una
 * avería nueva se rellena una fila, no se toca nada de aquí.
 *
 * Primera vez: ejecutar crearHojaDeCasos() una sola vez. Crea la Hoja con sus
 * pestañas y la deja con el caso del León ya relleno, para que sirva de
 * ejemplo de cómo se rellenan los demás.
 */

/* Las pestañas se añaden a HEADERS de Datos.gs, así que hoja_() las crea
   sola la primera vez. Nada de una Hoja aparte: los casos viven donde ya vive
   todo lo demás, y el alumnado nunca los abre directamente. */
var PESTANAS = {
  Vehiculos: ['vehiculo_id', 'marca', 'modelo', 'sistema', 'esquema_ref',
              'tension_min', 'tension_max', 'tension_origen'],
  Puntos:    ['esquema_id', 'punto_id', 'etiqueta', 'descripcion', 'lado'],
  Tramos:    ['esquema_id', 'desde', 'hasta', 'componente',
              'r_min', 'r_max', 'unidad', 'origen', 'seccion', 'color', 'por_conector'],
  Casos:     ['caso_id', 'titulo', 'vehiculo_id', 'esquema_id', 'sintoma',
              'averia', 'objetivo', 'activo']
};

/* Qué puede valer la columna "averia" de la pestaña Casos. */
var TIPOS_AVERIA = {
  ninguna:   'Sin avería (el sistema está bien)',
  abierto:   'Circuito abierto en el tramo que diga "objetivo" (desde|hasta)',
  sin_mando: 'La unidad de control no da señal de mando'
};

// ---------------------------------------------------------------- lectura ---

/** Lee una pestaña como lista de objetos, usando la fila 1 como nombres.
    Las filas con la primera celda vacía se ignoran, para que las que el
    profesorado deje a medias no rompan nada. */
function filas_(nombre) {
  var vals = hoja_(nombre).getDataRange().getValues();
  if (vals.length < 2) return [];
  var cab = vals[0].map(function (c) { return String(c).trim(); });
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    if (String(vals[i][0]).trim() === '') continue;
    var o = {};
    cab.forEach(function (c, j) { o[c] = vals[i][j]; });
    out.push(o);
  }
  return out;
}


function num_(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : null; }
function si_(v)  { return String(v).trim().toUpperCase().indexOf('S') === 0; }

// --------------------------------------------------------------- lectura ---

/** Casos activos, para el menú. */
function listarCasos() {
  var veh = {};
  filas_('Vehiculos').forEach(function (v) { veh[v.vehiculo_id] = v; });
  return filas_('Casos').filter(function (c) { return si_(c.activo); })
    .map(function (c) {
      var v = veh[c.vehiculo_id] || {};
      return {
        id: String(c.caso_id),
        titulo: String(c.titulo),
        vehiculo: [v.marca, v.modelo, v.sistema].filter(String).join(' · '),
        sintoma: String(c.sintoma)
      };
    });
}

/**
 * Todo lo que el entrenador necesita para un caso, ya montado.
 * Devuelve la misma forma que tenían los datos en código, así que el cliente
 * no distingue de dónde vienen.
 */
function cargarCaso(casoId) {
  var caso = filas_('Casos').filter(function (c) { return String(c.caso_id) === String(casoId); })[0];
  if (!caso) throw new Error('No existe el caso "' + casoId + '".');

  var v = filas_('Vehiculos').filter(function (x) { return x.vehiculo_id === caso.vehiculo_id; })[0];
  if (!v) throw new Error('El caso apunta a un vehículo que no está en la pestaña Vehiculos.');

  var nodos = {};
  filas_('Puntos').filter(function (p) { return p.esquema_id === caso.esquema_id; })
    .forEach(function (p) {
      nodos[p.punto_id] = { et: String(p.etiqueta), desc: String(p.descripcion), lado: String(p.lado) };
    });

  var tramos = filas_('Tramos').filter(function (t) { return t.esquema_id === caso.esquema_id; })
    .map(function (t) {
      var rmin = num_(t.r_min), rmax = num_(t.r_max);
      var r = (rmin !== null && rmax !== null && t.componente)
        ? { min: rmin, max: rmax, unidad: String(t.unidad || 'Ω'), origen: String(t.origen || 'Inferido') }
        : (rmin !== null ? rmin : 0.1);
      var o = { de: String(t.desde), a: String(t.hasta), r: r };
      if (t.componente) o.componente = String(t.componente);
      if (t.seccion || t.color) o.cable = { sec: num_(t.seccion), color: String(t.color || '') };
      if (String(t.por_conector).trim()) o.porConector = String(t.por_conector).trim();
      return o;
    });

  if (!tramos.length) throw new Error('El esquema "' + caso.esquema_id + '" no tiene ningún tramo.');

  /* La avería del caso, más la de "sin avería" para que el profe compare. */
  var averias = { ninguna: { et: 'Sin avería', efecto: null } };
  var tipo = String(caso.averia || 'ninguna').trim();
  if (tipo === 'abierto') {
    var obj = String(caso.objetivo || '').trim();
    if (obj.indexOf('|') < 0) throw new Error('Una avería "abierto" necesita objetivo "desde|hasta".');
    averias.caso = { et: 'Circuito abierto en ' + obj.replace('|', ' → '),
                     efecto: { tramo: obj, r: Infinity } };
  } else if (tipo === 'sin_mando') {
    averias.caso = { et: 'La unidad de control no da mando', efecto: { sinMando: true } };
  }

  return {
    caso: { id: String(caso.caso_id), titulo: String(caso.titulo), sintoma: String(caso.sintoma),
            averiaActiva: averias.caso ? 'caso' : 'ninguna' },
    VEHICULO: { marca: String(v.marca), modelo: String(v.modelo),
                sistema: String(v.sistema), esquema: String(v.esquema_ref) },
    NODOS: nodos,
    TRAMOS: tramos,
    AVERIAS: averias,
    ALIMENTACION: { min: num_(v.tension_min), max: num_(v.tension_max),
                    unidad: 'V', origen: String(v.tension_origen || 'Inferido') }
  };
}

// ------------------------------------------------- sembrar el caso de ejemplo ---

/** Deja el caso del León relleno, como ejemplo de cómo se rellenan los demás. */
function sembrarCasoEjemplo_(ss) {
  ss.getSheetByName('Vehiculos').appendRow(
    ['leon1p', 'Seat', 'León 1P', 'Climatronic', '1P1-016020407', 11.5, 14.5, 'Inferido']);

  var P = ss.getSheetByName('Puntos');
  [['J255:T20c/19', 'J255 · T20c/19', 'Salida de mando a N280', 'uce'],
   ['J255:T20c/18', 'J255 · T20c/18', 'Retorno de N280 hacia la UCE', 'uce'],
   ['T4t/3', 'T4t/3', 'Conector 4 vías, cerca del motor de arranque', 'mazo'],
   ['T4t/4', 'T4t/4', 'Conector 4 vías, cerca del motor de arranque', 'mazo'],
   ['N280:2', 'N280 · 2', 'Válvula reguladora del compresor, pin 2', 'componente'],
   ['N280:1', 'N280 · 1', 'Válvula reguladora del compresor, pin 1', 'componente']
  ].forEach(function (f) { P.appendRow(['n280'].concat(f)); });

  var T = ss.getSheetByName('Tramos');
  [['J255:T20c/19', 'T4t/3', '', '', '', '', '', 0.35, 'li', ''],
   ['T4t/3', 'N280:2', '', '', '', '', '', 1.0, 'gn/sw', 'T4t'],
   ['N280:2', 'N280:1', 'N280', 8, 14, 'Ω', 'Inferido', '', '', ''],
   ['N280:1', 'T4t/4', '', '', '', '', '', 1.0, 'br/sw', 'T4t'],
   ['T4t/4', 'J255:T20c/18', '', '', '', '', '', 0.5, 'br', '']
  ].forEach(function (f) { T.appendRow(['n280'].concat(f)); });

  var C = ss.getSheetByName('Casos');
  C.appendRow(['leon-n280-bobina', 'Bobina de la válvula reguladora cortada', 'leon1p', 'n280',
    'El aire no enfría y el compresor no desplaza.', 'abierto', 'N280:2|N280:1', 'sí']);
  C.appendRow(['leon-n280-cable', 'Cable gn/sw cortado entre T4t/3 y N280', 'leon1p', 'n280',
    'El aire no enfría. El compresor gira pero no regula.', 'abierto', 'T4t/3|N280:2', 'sí']);
  C.appendRow(['leon-n280-sano', 'Sistema correcto (para comparar)', 'leon1p', 'n280',
    'El cliente dice que enfría poco, pero el equipo está bien.', 'ninguna', '', 'no']);
}

/** Pestaña de ayuda: qué significa cada columna. */
function ayudaCasos_(ss) {
  var sh = ss.getSheetByName('Cómo se rellena') || ss.insertSheet('Cómo se rellena');
  var t = [
    ['PESTAÑA', 'COLUMNA', 'QUÉ SE PONE'],
    ['Casos', 'caso_id', 'Un nombre corto y único. No se repite.'],
    ['Casos', 'sintoma', 'Lo que cuenta el cliente. Es lo único que ve el alumno al empezar.'],
    ['Casos', 'averia', Object.keys(TIPOS_AVERIA).map(function (k) {
       return k + ' = ' + TIPOS_AVERIA[k]; }).join('  |  ')],
    ['Casos', 'objetivo', 'Solo para "abierto": el tramo cortado, escrito "desde|hasta".'],
    ['Casos', 'activo', 'sí / no. Los que pongas "no" no le salen al alumnado.'],
    ['Tramos', 'componente', 'Déjalo vacío si el tramo es solo cable. Si lleva un componente, su nombre.'],
    ['Tramos', 'r_min / r_max', 'La banda esperada, NO un valor exacto. Solo si hay componente.'],
    ['Tramos', 'origen', 'Medido (lo mediste tú) / OEM (manual del fabricante) / Inferido (rango típico).'],
    ['Tramos', 'por_conector', 'Nombre del conector que, al desenchufarlo, corta este tramo. Vacío si no hay.'],
    ['Puntos', 'punto_id', 'Debe coincidir EXACTAMENTE con lo que pongas en Tramos (desde / hasta).'],
    ['', '', ''],
    ['AVISO', '', 'Un valor marcado Inferido es un rango típico sin contrastar. El alumno lo ve.']
  ];
  sh.getRange(1, 1, t.length, 3).setValues(t);
  sh.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#063f70').setFontColor('#ffffff');
  sh.setColumnWidth(1, 110); sh.setColumnWidth(2, 130); sh.setColumnWidth(3, 620);
  sh.setFrozenRows(1);
}


/**
 * Se ejecuta UNA vez desde el editor, sobre la Hoja que ya usa la puerta.
 * Crea las pestañas del simulador si faltan, deja el caso del León relleno
 * como ejemplo y añade la pestaña de ayuda.
 */
function prepararCasos() {
  var ss = ss_();
  ['Vehiculos', 'Puntos', 'Tramos', 'Casos'].forEach(function (n) { hoja_(n); });
  if (hoja_('Casos').getLastRow() > 1) return 'Ya había casos: ' + ss.getUrl();
  sembrarCasoEjemplo_(ss);
  ayudaCasos_(ss);
  return 'Plantilla lista: ' + ss.getUrl();
}
