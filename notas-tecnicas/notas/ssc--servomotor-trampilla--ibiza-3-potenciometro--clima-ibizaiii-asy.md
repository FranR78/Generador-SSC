---
id: ssc.servomotor-trampilla.ibiza-3-potenciometro.clima-ibizaiii-asy
modulo: ssc
unidad: clima
nt: 872
tipo: elemento
clase: componente
titulo: "Servomotores de trampillas con potenciómetro de posición del SEAT Ibiza III"
codigo: "V68 / V70 / V107 / V113"
menu: "Servomotores de trampillas con V68 / V70 / V107 / V113"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: ibiza-3-potenciometro
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
marca: "SEAT"
fuentes: "clima ibizaIII ASY.pdf, págs. 3-4"
relacionados: ["unidad-control-climatizador"]
palabras: ["V68", "V70", "V107", "V113", "G92", "G112", "G135", "G143", "potenciómetro", "5 V", "L46"]
---

## Misión

Ejecutar el movimiento y posicionamiento angular de las trampillas de mezcla de temperatura, distribución central, descongelación del parabrisas y recirculación de aire fresco en la unidad climática del SEAT Ibiza III. (págs. 3-4)

## Tipos y características

Conjuntos actuadores formados por un motor eléctrico de corriente continua (V68, V70, V107, V113) y un potenciómetro interno de realimentación de posición (G92, G112, G135, G143) conectados a la unidad de control J255. (págs. 3-4)

## Principio de funcionamiento

La centralita J255 aplica polaridad y tensión al motor eléctrico correspondiente para desplazar la trampilla. El potenciómetro asociado, alimentado con una tensión estabilizada de 5 V desde la línea L46 del mazo de cables Climatronic y conectado a masa (243), modifica su resistencia interna enviando una señal analógica de tensión de retorno a los pines T20a de la centralita para informar de la posición exacta. (págs. 3-4)

## Valores de trabajo

- Tensión de alimentación de los potenciómetros: 5 V CC (línea de conexión L46). (págs. 3-4)
- Conexión de masa compartida: punto de masa 243 en mazo Climatronic. (págs. 3-4)

## Anomalías frecuentes

Suciedad o desgaste en la pista del potenciómetro interno provocando saltos de tensión de señal o fallo de motor eléctrico por bloqueo mecánico de la compuerta. (págs. 3-4)

## Comportamiento en avería

La unidad de control registra un código de avería en la memoria del autodiagnóstico y limita la regulación del aireado en la zona afectada. (págs. 3-4)

## Cómo comprobarlo

Medir la presencia de 5 V en la línea L46 y verificar con multímetro o equipo de diagnosis la variación lineal de tensión del potenciómetro durante el recorrido de la trampilla. (págs. 3-4)

## Mantenimiento

Realizar el ajuste básico con la herramienta de diagnosis tras la sustitución de cualquier servomotor para autoadaptar sus topes mecánicos inicial y final. (págs. 3-4)

## Imágenes requeridas

- Esquema eléctrico de conexiones de los servomotores V68 y V70 con sus potenciómetros G92 y G112 a la línea L46 de 5 V — Fuente: clima ibizaIII ASY.pdf, pág. 3
