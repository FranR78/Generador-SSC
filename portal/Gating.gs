/**
 * Gating.gs — Regla de participación (prefijo gate_).
 *
 * LIBRES = 0 significa SIN LÍMITE: queremos que pregunten cuanto quieran, que
 * preguntar es trabajar. El freno del sistema no está aquí, está en el
 * simulador, donde entre intento e intento tienen que pasar horas.
 *
 * Con LIBRES > 0 vuelve la regla por bloques: cada alumno consulta hasta un
 * umbral y, para desbloquear el siguiente, RESPONDE tareas y VALORA respuestas.
 *
 * bloques = 1 + min( floor(aportaciones/REQ_APORTA), floor(valoraciones/REQ_VALORA) )
 * consultas_permitidas = bloques * LIBRES
 * (monótono: nunca resta consultas ya ganadas; sin condiciones de carrera)
 *
 * Los umbrales viven en la Hoja (pestaña Ajustes) y se editan desde el panel del
 * profesorado, no en Propiedades del script.
 */
function gate_config_() {
  return db_config_().gate || { LIBRES: 3, REQ_APORTA: 1, REQ_VALORA: 2 };
}

function gate_estado(usuario) {
  usuario = usuario || usuarioActual();
  var c = gate_config_();
  var a = db_estadoUsuario_(usuario);
  var sinLimite = !(c.LIBRES > 0);
  var k = Math.min(Math.floor(a.aportaciones / c.REQ_APORTA), Math.floor(a.valoraciones / c.REQ_VALORA));
  var permitidas = sinLimite ? Infinity : (1 + k) * c.LIBRES;
  var bloqueado = !sinLimite && a.consultas >= permitidas;
  var faltaAporta = Math.max(0, (k + 1) * c.REQ_APORTA - a.aportaciones);
  var faltaValora = Math.max(0, (k + 1) * c.REQ_VALORA - a.valoraciones);
  return {
    usuario: usuario,
    consultas: a.consultas,
    sinLimite: sinLimite,
    permitidas: sinLimite ? null : permitidas,
    restantes: sinLimite ? null : Math.max(0, permitidas - a.consultas),
    aportaciones: a.aportaciones, valoraciones: a.valoraciones,
    bloqueado: bloqueado, faltaAporta: faltaAporta, faltaValora: faltaValora
  };
}

function gate_mensajeBloqueo_(est) {
  return 'Has usado tus ' + est.permitidas + ' consultas. Para seguir, ve a «Manual»: ' +
    'responde ' + est.faltaAporta + ' tarea(s) y valora ' + est.faltaValora + ' respuesta(s) de otros.';
}

/** Estado combinado para la interfaz (Consultar y Manual lo muestran). */
function miEstado() {
  var est = gate_estado();
  est.mensaje = est.bloqueado ? gate_mensajeBloqueo_(est) : '';
  return est;
}
