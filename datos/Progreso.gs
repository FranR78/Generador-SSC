/**
 * Progreso.gs — Qué lleva hecho cada alumno.
 *
 * Existe para que al entrar sepa por dónde iba, en vez de aterrizar en medio
 * de 129 notas sin saber qué ha visto. Y para frenar el simulador: entre dos
 * intentos del MISMO caso tienen que pasar horas, para que no lo repitan a lo
 * bruto hasta acertar de memoria.
 *
 * Todo esto corre como el profe: el alumno no puede escribir su propio
 * progreso ni saltarse la espera.
 */

// ------------------------------------------------------------- lecturas ---

/** Marca una nota como leída. Suma una visita; no falsea la primera vez. */
function marcarLeido_(usuario, nt) {
  nt = parseInt(nt, 10);
  if (!nt) throw new Error('Falta el número de nota.');
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sh = hoja_(TABS.LECT);
    var vals = sh.getDataRange().getValues();
    var ahora = new Date();
    for (var i = 1; i < vals.length; i++) {
      if (vals[i][0] === usuario && Number(vals[i][1]) === nt) {
        sh.getRange(i + 1, 3).setValue((Number(vals[i][2]) || 0) + 1);
        sh.getRange(i + 1, 5).setValue(ahora);
        return { nt: nt, veces: (Number(vals[i][2]) || 0) + 1 };
      }
    }
    sh.appendRow([usuario, nt, 1, ahora, ahora]);
    return { nt: nt, veces: 1 };
  } finally {
    lock.releaseLock();
  }
}

/** Números de nota que este alumno ya ha abierto. */
function leidasDe_(usuario) {
  var vals = hoja_(TABS.LECT).getDataRange().getValues();
  var out = {};
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === usuario) out[Number(vals[i][1])] = Number(vals[i][2]) || 1;
  }
  return out;
}

// ------------------------------------------------------------- intentos ---

function horasEntreIntentos_() {
  var vals = hoja_(TABS.AJUSTES).getDataRange().getValues();
  for (var i = 1; i < vals.length; i++) {
    if (String(vals[i][0]) === 'HORAS_ENTRE_INTENTOS') {
      var n = parseFloat(String(vals[i][1]).replace(',', '.'));
      if (isFinite(n) && n >= 0) return n;
    }
  }
  return HORAS_ENTRE_INTENTOS;
}

function intentosDe_(usuario) {
  var vals = hoja_(TABS.INT).getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    if (vals[i][0] === usuario) {
      out.push({ caso: String(vals[i][1]), cuando: vals[i][2],
                 fundamentado: String(vals[i][3]).toUpperCase().indexOf('S') === 0,
                 acertado: String(vals[i][4]).toUpperCase().indexOf('S') === 0 });
    }
  }
  return out;
}

/**
 * ¿Puede abrir este caso ahora mismo?
 * Un caso ya resuelto CON FUNDAMENTO no se bloquea: repetirlo no es hacer
 * trampa, es repasar. Lo que se frena es reintentar el que aún no domina.
 */
function puedoIntentar_(usuario, casoId) {
  casoId = String(casoId || '');
  var horas = horasEntreIntentos_();
  if (!horas) return { puede: true };

  var mios = intentosDe_(usuario).filter(function (x) { return x.caso === casoId; });
  if (!mios.length) return { puede: true };
  if (mios.some(function (x) { return x.fundamentado; })) {
    return { puede: true, repaso: true };
  }

  var ultimo = mios.map(function (x) { return new Date(x.cuando).getTime(); })
                   .sort(function (a, b) { return b - a; })[0];
  var pasadas = (Date.now() - ultimo) / 3600000;
  if (pasadas >= horas) return { puede: true };

  var faltan = horas - pasadas;
  return {
    puede: false,
    horasRestantes: Math.round(faltan * 10) / 10,
    mensaje: 'Ya lo intentaste hace poco. Vuelve en ' +
      (faltan < 1 ? Math.ceil(faltan * 60) + ' minutos' : Math.ceil(faltan) + ' horas') +
      '. Mientras tanto, repasa las notas del tema: por eso están ahí.'
  };
}

/** Guarda el resultado de un intento. Lo llama el portal al emitir diagnóstico. */
function registrarIntento_(usuario, args) {
  var casoId = String((args && args.casoId) || '');
  if (!casoId) throw new Error('Falta el caso.');
  hoja_(TABS.INT).appendRow([
    usuario, casoId, new Date(),
    args.fundamentado ? 'sí' : 'no',
    args.acertado ? 'sí' : 'no',
    parseInt(args.segundos, 10) || 0
  ]);
  return { guardado: true };
}

// -------------------------------------------------------------- resumen ---

/**
 * Lo que ve el alumno al entrar: por dónde va y qué tiene a mano.
 * No es una nota: es una guía. Por eso devuelve lo siguiente que puede hacer,
 * no solo cuánto lleva.
 */
function progreso_(usuario) {
  var leidas = leidasDe_(usuario);
  var nLeidas = Object.keys(leidas).length;

  var casos = listarCasos();
  var mios = intentosDe_(usuario);
  var resueltos = {};
  mios.forEach(function (x) { if (x.fundamentado) resueltos[x.caso] = true; });

  var pendientes = casos.filter(function (c) { return !resueltos[c.id]; });
  var siguiente = null;
  for (var i = 0; i < pendientes.length; i++) {
    var p = puedoIntentar_(usuario, pendientes[i].id);
    if (p.puede) { siguiente = { tipo: 'caso', id: pendientes[i].id, titulo: pendientes[i].titulo }; break; }
  }

  return {
    usuario: usuario,
    leidas: nLeidas,
    notasLeidas: Object.keys(leidas).map(Number),
    casosTotales: casos.length,
    casosResueltos: Object.keys(resueltos).length,
    intentos: mios.length,
    siguiente: siguiente,
    horasEntreIntentos: horasEntreIntentos_()
  };
}
