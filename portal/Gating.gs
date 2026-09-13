/**
 * Gating.gs — Regla de participación (prefijo gate_).
 * Cada alumno consulta libremente hasta un umbral; para desbloquear el siguiente
 * bloque de consultas debe RESPONDER tareas y VALORAR respuestas de otros.
 *
 * bloques = 1 + min( floor(aportaciones/REQ_APORTA), floor(valoraciones/REQ_VALORA) )
 * consultas_permitidas = bloques * LIBRES
 * (monótono: nunca resta consultas ya ganadas; sin condiciones de carrera)
 *
 * Umbrales configurables en Propiedades del script: GATE_LIBRES, GATE_REQ_APORTA,
 * GATE_REQ_VALORA.
 */
function gate_config_() {
  var p = PropertiesService.getScriptProperties();
  return {
    LIBRES: parseInt(p.getProperty('GATE_LIBRES'), 10) || 3,
    REQ_APORTA: parseInt(p.getProperty('GATE_REQ_APORTA'), 10) || 1,
    REQ_VALORA: parseInt(p.getProperty('GATE_REQ_VALORA'), 10) || 2
  };
}

function gate_estado(usuario) {
  usuario = usuario || usuarioActual();
  var c = gate_config_();
  var a = db_estadoUsuario_(usuario);
  var k = Math.min(Math.floor(a.aportaciones / c.REQ_APORTA), Math.floor(a.valoraciones / c.REQ_VALORA));
  var permitidas = (1 + k) * c.LIBRES;
  var bloqueado = a.consultas >= permitidas;
  var faltaAporta = Math.max(0, (k + 1) * c.REQ_APORTA - a.aportaciones);
  var faltaValora = Math.max(0, (k + 1) * c.REQ_VALORA - a.valoraciones);
  return {
    usuario: usuario,
    consultas: a.consultas, permitidas: permitidas, restantes: Math.max(0, permitidas - a.consultas),
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
