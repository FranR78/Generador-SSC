---
id: ssc.autodiagnostico-climatizador.averias-clima-ibizaiii-asy
modulo: ssc
unidad: clima
nt: 425
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Tabla de averías del aire acondicionado"
codigo: "J301"
menu: "Tabla de averías del aire acon J301"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "averí́as clima ibizaIII ASY.pdf, págs. 1-7"
relacionados: ["unidad-control-climatizador", "transmisor-presion", "servomotor-trampilla", "electroventilador-condensador"]
palabras: ["autodiagnóstico", "vag 1551", "tabla de averías", "j301", "ibiza iii", "asy"]
---

## Síntoma

Registro de códigos de avería en la memoria de la unidad de mandos del aire acondicionado -J301- consultados con el equipo de diagnosis -VAG 1551-. Presencia de averías esporádicas identificadas en la pantalla con el sufijo "/SP". (págs. 1-7)

## Causas posibles

- Código 00538 (Tensión de referencia):
  - Señal demasiado alta: cortocircuito o interrupción en los cables o conectores hacia la unidad -J301-.
  - Señal demasiado baja: motor regulador de la trampilla de temperatura -V68- o motor de la trampilla de aire fresco/recirculación -V154- defectuoso, o unidad de control -J301- defectuosa.
- Código 00576 (Borne 15):
  - Señal excesiva: regulador de tensión del alternador defectuoso, o cables/conectores de -J301- defectuosos.
  - Señal insuficiente: batería agotada, alternador defectuoso, o cables/conectores de -J301- defectuosos.
  - Interrupción/cortocircuito con masa: interrupción o cortocircuito a masa en los cables o conectores de -J301-.
- Código 00705 (Relé para el ventilador del radiador nivel 1 -J279-, integrado en la unidad -J293-):
  - Cortocircuito con positivo o interrupción/cortocircuito a masa en los cables/conectores hacia la unidad de control del ventilador -J293-, o unidad -J293- defectuosa.
- Código 00706 (Relé para el ventilador del radiador nivel 2 -J513-, integrado en la unidad -J293-):
  - Cortocircuito con positivo o interrupción/cortocircuito a masa en los cables/conectores hacia la unidad de control del ventilador -J293-, o unidad -J293- defectuosa.
- Código 00796 (Turbina de aire para termosensor -V42-):
  - Turbina de aire para termosensor -V42- bloqueada, sin tensión /SP, o averiada.
- Código 00819 (Transmisor de alta presión -G65-):
  - Cortocircuito con positivo, interrupción/cortocircuito a masa, o señal demasiado alta: defecto en cables/conectores hacia -G65-, o sensor -G65- defectuoso.
  - Señal demasiado baja: interrupción/cortocircuito a masa en cables hacia -G65- y -J301-, fallo en el circuito de refrigerante (presión excesivamente alta o baja), válvula de regulación del compresor -N280- defectuosa, o unidad -J301- defectuosa.
- Código 00898 (Activación del compresor de aire acondicionado):
  - Cortocircuito a masa, interrupción/cortocircuito a positivo: defecto en cables/conectores a la válvula de regulación -N280-, válvula -N280- defectuosa, o unidad -J301- defectuosa.
- Código 01233 (Válvula de cierre para el refrigerante -N279-):
  - Cortocircuito a positivo, o interrupción/cortocircuito a masa en cables/conectores a -N279-, o válvula -N279- defectuosa.
- Código 01271 (Motor regulador para la trampilla de temperatura -V68-):
  - Cortocircuito a positivo/masa, bloqueado o sin corriente, límite de ajuste excedido o no alcanzado: fallo en cables/conectores hacia -V68-, motor -V68- defectuoso, o trampilla de temperatura atascada.
  - No se ha realizado el ajuste: configuración básica (función 04) no ejecutada o incorrecta.
- Código 01273 (Turbina de aire fresco -V2-):
  - Diferencia de regulación /SP, bloqueada o sin tensión /SP, corto con positivo /SP: cortocircuito o interrupción en cable entre -V2-, unidad de control de la turbina -J126- y/o -E87-, falta de alimentación/masa hacia -J126-, -J126- averiada, o turbina -V2- averiada.
  - Alimentación de tensión muy baja /SP: caída de tensión en la red de a bordo a valores inferiores a 9,5 V, o resistencia de contacto/interrupción en la alimentación de -V2-.
  - Alimentación de tensión muy alta /SP: tensión en la red de a bordo superior a 15 V, o empleo de un cargador de batería inadecuado.
- Código 01296 (Transmisor de temperatura para difusor central -G191-):
  - Interrupción/cortocircuito a polo positivo o cortocircuito a masa: no hay montado ningún -G191-, defecto en cables/conectores, o -G191- defectuoso.
- Código 01297 (Transmisor de temperatura para difusor zona reposapiés -G192-):
  - Interrupción/cortocircuito a polo positivo o cortocircuito a masa: no hay montado ningún -G192-, defecto en cables/conectores, o -G192- defectuoso.
- Código 01299 (Interfaz de diagnóstico para el bus de datos -J533- / Gateway, integrado en -J519-):
  - Sin comunicación o consultar la memoria de fallos: fallo en cables del BUS de datos, unidad -J519- incorrecta o defectuosa, o fallo registrado en el Gateway.
- Código 01314 (Unidad de control del motor):
  - Consultar la memoria de fallos: fallos almacenados en la memoria de averías de la unidad del motor.
- Código 01317 (Unidad de control para el cuadro de instrumentos -J285-):
  - Consultar memoria de averías / señal no plausible: fallos en cables del BUS de datos, o cuadro de instrumentos incorrecto/defectuoso.
- Código 01596 (Motor regulador para la trampilla de aire fresco/recirculación -V154-):
  - Cortocircuito a positivo/masa, bloqueo o sin corriente, límite de ajuste excedido o no alcanzado: defecto en cables/conectores hacia -V154-, trampilla de recirculación atascada, o motor -V154- defectuoso.
  - No se ha realizado el ajuste: configuración básica (función 04) no realizada o incorrecta.
- Código 65535 (Unidad de control defectuosa):
  - Unidad de control para el aire acondicionado -J301- defectuosa. (págs. 1-7)

## Cómo separar las causas

- Comprobaciones previas: antes de sustituir cualquier componente, verificar sus conectores e inspeccionar el cableado según el esquema eléctrico respecto a cortocircuito e interrupción. Antes de cambiar la unidad -J301-, comprobar la alimentación de tensión y masa.
- Avería 00538 (Tensión de referencia baja): consultar los grupos de valores de medición 004 y. Ejecutar la diagnosis de actuadores (función 03). Desenchufar sucesivamente los conectores de los motores reguladores -V68- y -V154-, borrar la memoria de fallos y volver a consultar; el motor que vuelva a registrar el fallo al reconectarlo debe ser sustituido.
- Avería 00819 (-G65-): consultar el grupo de valores de medición. Si la señal es demasiado baja, seguir la localización de averías sin autodiagnóstico para determinar si la causa es el circuito de refrigerante, la válvula -N280- o la unidad -J301-.
- Avería 00898 (Activación de -N280-): consultar el grupo de valores de medición 002 y ejecutar el diagnóstico de actuadores (función 03).
- Averías de motores de trampillas (-V68- y -V154-): consultar el grupo de valores de medición correspondiente (005 para V68; 004 para V154), realizar la diagnosis del actuador (función 03) y comprobar mecánicamente si la trampilla se desplaza sin atrancarse.
- Averías de transmisores de temperatura (-G191- y -G192-): comprobar el grupo 08 ("Leer bloque valores de medición") para verificar el montaje o la señal del sensor.
- Averías de comunicación (-J533-, -J1314-, -J285-): consultar la memoria de fallos de la unidad correspondiente (Gateway en grupo 90, motor en grupo 01, cuadro de instrumentos en grupo 90). (págs. 1-7)

## Valores de referencia

- Umbral de caída de tensión en la red de a bordo (avería 01273): inferior a 9,5 V.
- Umbral de tensión excesiva en la red de a bordo (avería 01273): superior a 15 V.
- Retención de memoria: el contenido de la memoria se conserva hasta su borrado. Las averías en el BUS de datos se borran automáticamente al quedar la señal libre de errores. (págs. 1, 5, 7)

## Verificación tras la reparación

- Tras sustituir componentes, motores reguladores (-V68-, -V154-) o la unidad -J301-, realizar obligatoriamente la configuración básica (función 04).
- Borrar la memoria de fallos y realizar una nueva consulta mediante el equipo de diagnosis para confirmar la ausencia de códigos de avería. (págs. 1, 3, 4, 7)
