/* ===========================================================================
   motor.js — Motor de simulación

   Regla de oro: el caso NO guarda respuestas. Guarda una avería inyectada en
   el circuito, y el motor CALCULA lo que marca el instrumento en cada punto.
   Por eso medir mal da una lectura falsa, y no un mensaje de "incorrecto".
   =========================================================================== */

/* Resistencia interna del driver de la UCE. Es la que se cuela en paralelo
   cuando alguien mide ohmios con el conector puesto: la lectura baja y parece
   buena, pero no es la bobina. */
var R_UCE = 2200;

function banda(r) { return (r && typeof r === 'object' && r.min !== undefined) ? r : null; }
function valorDe(r) { var b = banda(r); return b ? (b.min + b.max) / 2 : r; }

/* --- Grafo con la avería aplicada --------------------------------------- */
function tramosCon(averiaId, conectorPuesto) {
  var av = AVERIAS[averiaId] || AVERIAS.ninguna;
  var ef = av.efecto || {};
  var out = [];
  TRAMOS.forEach(function (t) {
    var r = valorDe(t.r);
    if (ef.tramo === t.de + '|' + t.a) r = ef.r;
    if (t.porConector === 'T4t' && !conectorPuesto) r = Infinity;  // conector fuera: tramo abierto
    out.push({ de: t.de, a: t.a, r: r, componente: t.componente, base: t });
  });
  return out;
}

/* --- Resistencia entre dos puntos (camino más corto por el grafo) -------- */
function resistenciaEntre(a, b, tramos) {
  var mejor = Infinity;
  (function dfs(n, visit, acc) {
    if (acc === Infinity) return;
    if (n === b) { mejor = Math.min(mejor, acc); return; }
    tramos.forEach(function (t) {
      var sig = t.de === n ? t.a : (t.a === n ? t.de : null);
      if (!sig || visit.indexOf(sig) >= 0) return;
      dfs(sig, visit.concat([sig]), acc + t.r);
    });
  })(a, [a], 0);
  return mejor;
}

/* --- La medida ----------------------------------------------------------
   estado  = { contacto:'off'|'on'|'motor', conector:true|false }
   inst    = { funcion:'ohm'|'vdc', bornaRoja:'VΩ'|'mA'|'20A' }
   ------------------------------------------------------------------------ */
function medir(puntoA, puntoB, inst, estado, averiaId) {
  var errores = [];
  var tramos = tramosCon(averiaId, estado.conector);

  /* Borna equivocada: esto en el taller funde el fusible del polímetro */
  if (inst.bornaRoja !== 'VΩ') {
    return {
      lectura: '---', unidad: '', veredicto: 'imposible',
      nota: 'Punta roja en la borna de ' + inst.bornaRoja + '. Para medir ' +
            (inst.funcion === 'ohm' ? 'resistencia' : 'tensión') +
            ' va en VΩ. Así has puesto el polímetro en serie: en el taller habrías fundido su fusible.'
    };
  }

  if (inst.funcion === 'ohm') {
    /* Condición de validez nº1: sin tensión en el circuito */
    if (estado.contacto !== 'off') {
      return {
        lectura: 'OL', unidad: 'Ω', veredicto: 'imposible',
        nota: 'Ohmios con el contacto dado. Con tensión presente la lectura no vale: ' +
              'el polímetro mide inyectando su propia corriente. Quita el contacto.'
      };
    }
    var r = resistenciaEntre(puntoA, puntoB, tramos);

    /* Condición de validez nº2: el conector tiene que estar fuera */
    if (estado.conector) {
      var paralelo = (r === Infinity) ? R_UCE : (r * R_UCE) / (r + R_UCE);
      errores.push('conector_puesto');
      return {
        lectura: paralelo.toFixed(1), unidad: 'Ω', veredicto: 'invalida',
        nota: 'Has medido con el conector puesto: lo que lee el polímetro es la bobina ' +
              'EN PARALELO con la electrónica de la UCE. El número parece razonable, pero no es la bobina.',
        errores: errores
      };
    }
    if (r === Infinity) {
      return { lectura: 'OL', unidad: 'Ω', veredicto: 'medida',
               nota: 'Circuito abierto entre esos dos puntos.' };
    }
    return { lectura: r.toFixed(1), unidad: 'Ω', veredicto: 'medida' };
  }

  /* --- Tensión ---------------------------------------------------------- */
  if (estado.contacto === 'off') {
    return { lectura: '0.00', unidad: 'V', veredicto: 'medida',
             nota: 'Sin contacto no hay tensión: no es una avería, es que el circuito está muerto.' };
  }
  if (!estado.conector) {
    return { lectura: '0.00', unidad: 'V', veredicto: 'invalida',
             nota: 'Con el conector desconectado no circula corriente; medir tensión aquí no dice nada. ' +
                   'Para tensión, el conector va puesto.' };
  }
  var av = AVERIAS[averiaId] || AVERIAS.ninguna;
  var sinMando = !!(av.efecto && av.efecto.sinMando);
  var abierto = resistenciaEntre('N280:2', 'N280:1', tramos) === Infinity ||
                resistenciaEntre('T4t/3', 'N280:2', tramos) === Infinity;
  var v = sinMando ? 0 : valorDe(ALIMENTACION);
  if (abierto && !sinMando) v = valorDe(ALIMENTACION);   // sin consumo, la tensión se mantiene
  return { lectura: v.toFixed(2), unidad: 'V', veredicto: 'medida' };
}

/* --- Veredicto de lo que ANOTA el alumno, por décadas --------------------
   No exige precisión: exige orden de magnitud. Es lo que distingue
   "no sé medir" de "he medido y el componente está mal".
   ------------------------------------------------------------------------ */
function juzgar(anotado, prescrito) {
  var b = banda(prescrito);
  if (!b) return { clase: 'medida', et: 'Anotada' };
  var x = parseFloat(String(anotado).replace(',', '.'));
  if (!isFinite(x)) return { clase: 'medida', et: 'Anotada' };

  if (x >= b.min && x <= b.max) return { clase: 'ok', et: 'Dentro de rango' };

  var centro = (b.min + b.max) / 2;
  var decadas = Math.abs(Math.log10(Math.max(Math.abs(x), 1e-9) / centro));

  /* Tres décadas justas = confundir ohmios con kiloohmios. Error de escala,
     no de criterio: sabe qué mide, pero no ha leído bien el instrumento. */
  if (Math.abs(decadas - 3) <= 0.4) return { clase: 'escala', et: 'Escala o unidad equivocada',
    nota: 'Ese número encaja si cambias Ω por kΩ. Mira la escala del polímetro.' };

  /* Dos décadas o más: no está midiendo lo que cree. */
  if (decadas >= 2) return { clase: 'concepto', et: 'Orden de magnitud equivocado',
    nota: 'Te separan ' + decadas.toFixed(1) + ' décadas del valor esperado. Eso no es ese componente.' };

  /* Mismo orden, fuera de banda: la medida está bien hecha y el componente mal. */
  return { clase: 'fuera', et: 'Fuera de especificación',
    nota: 'El orden es correcto, así que la medida está bien hecha: el que está mal es el componente. Esto puede ser el hallazgo.' };
}
