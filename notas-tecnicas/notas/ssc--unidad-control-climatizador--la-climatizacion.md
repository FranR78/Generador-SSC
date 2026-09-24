---
id: ssc.unidad-control-climatizador.la-climatizacion
modulo: ssc
unidad: clima
nt: 290
tipo: elemento
clase: componente
titulo: "Unidad Electrónica de Gestión del Aire Acondicionado (UEGAA)"
menu: "Unidad Electrónica de Gestión del Aire"
grupo: "Control de climatización"
clave: unidad-control-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 109-110"
relacionados: ["autodiagnostico-climatizador", "regulacion-automatica"]
palabras: ["UEGAA", "centralita de climatización", "CAN-Bus", "autodiagnóstico", "memoria de defectos"]
---

## Misión

Procesar las informaciones de los sensores, calcular los parámetros térmicos teóricos y gobernar los actuadores para mantener automáticamente la temperatura seleccionada. (págs. 109-110).

## Tipos y características

Unidad de control digital con microprocesador integrada en el propio cuadro de mandos del salpicadero o montada como módulo independiente. Comunicada por red CAN-Bus con la UCE del motor y cuadro de instrumentos. (págs. 109-110).

## Principio de funcionamiento

Recibe las señales de las sondas (temperatura exterior, interior, evap, fotosensor, etc.), las compara con los valores de consigna elegidos por el usuario y los mapas teóricos programados. A través de etapas de potencia de salida, gobierna los servomotores de las trampillas, el regulador de la turbina y la conexión del compresor. Almacena en su memoria no volátil cualquier avería eléctrica detectada. (págs. 109-110).

## Valores de trabajo

Alimentación por borne 15 y borne. (pág. 110).

## Anomalías frecuentes

Fallo de la memoria de defectos, avería en las etapas de potencia de excitación de motores o pérdida de comunicación CAN-Bus. (págs. 110, 163).

## Comportamiento en avería

Iluminación de testigo de avería, destello del display al conectar el contacto o paso del climatizador a modo de emergencia con valores fijos. (págs. 110, 163).

## Cómo comprobarlo

Conectar equipo de diagnosis al conector T16 del vehículo bajo la dirección "08 - Electrónica de climatización" para lectura y borrado de averías y lectura de bloques de medición. (pág. 163).

## Mantenimiento

Efectuar el procedimiento de ajuste básico de servomotores tras su sustitución o tras cortar la alimentación de la batería. (págs. 120, 163).
