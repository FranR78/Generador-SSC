---
id: ssc.diagnostico-porton-electrico.5-confort
modulo: ssc
unidad: clima
nt: 380
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Diagnosis EOBD del portón eléctrico"
menu: "Diagnosis EOBD del portón eléctrico"
grupo: "Cierre y aperturas"
clave: diagnostico-porton-electrico
area: confort-y-seguridad
sistema: "NUEVO-cierre-y-aperturas"
marca: "Seat"
fuentes: "5. Confort.pdf, págs. 112-113"
relacionados: ["porton-maletero-electrico"]
palabras: ["6d electronica porton", "ajuste basico", "diagnosis actuadores", "bloque valores"]
---

## Síntoma

El portón eléctrico no abre o no cierra completamente, se detiene a mitad de recorrido, realiza rebotamientos injustificados o no memoriza la altura de apertura. (págs. 109, 113)

## Causas posibles

- Pérdida de la memorización de las posiciones límite de fin de carrera.
- Sustitución de la unidad de control del portón o de alguno de los motores laterales.
- Presencia de averías grabadas en la dirección "6D - Electrónica del portón trasero". (págs. 109, 112-113)

## Cómo separar las causas

Conectar la máquina de diagnosis y acceder a la dirección de diagnóstico 6D:
1. Consultar la memoria de averías y comprobar en el Bloque de valores de medición la señal de los sensores Hall y de los interruptores de la cerradura.
2. Ejecutar la función "Ajuste básico": la unidad de control efectúa un ciclo completo de apertura y cierre sin la función antiaprisionamiento activa para memorizar los topes mecánicos.
3. Ejecutar la "Diagnosis de actuadores" para forzar de forma individual: abrir portón, cerrar portón, abrir/cerrar gradualmente o activar el zumbador de aviso. (págs. 112-113)

## Valores de referencia

- Ajuste básico completado correctamente ("Test finalizado").
- Ausencia de códigos de fallo en la dirección 6D. (págs. 112-113)

## Verificación tras la reparación

Realizar tres maniobras completas de apertura y cierre manual/automático y comprobar la reactivación del sistema antiaprisionamiento simulando un obstáculo en el cierre. (págs. 110, 113)
