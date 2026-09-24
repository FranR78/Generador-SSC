---
id: ssc.esquema-electrico-climatizador.clima-ibiza-99
modulo: ssc
unidad: clima
nt: 212
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Esquema eléctrico del sistema de climatización del Ibiza 99"
menu: "Esquema eléctrico del sistema de clima"
grupo: "Control de climatización"
clave: esquema-electrico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "Clima Ibiza 99.pdf, págs. 1"
relacionados: ["unidad-control-climatizador", "unidad-control-aire-acondicionado"]
palabras: ["esquema eléctrico", "código de colores", "leyenda de componentes", "Ibiza 99"]
---

## Objeto

Representar la interconexión eléctrica, la distribución de señales y las líneas de alimentación entre los componentes, sensores, actuadores y unidades de control del sistema de climatización del SEAT Ibiza '99. (pág. 1).

## Fundamento

El circuito eléctrico utiliza una codificación normalizada de colores para identificar el tipo de señal o alimentación de cada conductor y se apoya en una leyenda identificativa de componentes para el seguimiento y diagnóstico de averías. (pág. 1).

## Desarrollo

1. Código de colores del cableado:
- Señal de entrada.
- Señal de salida.
- Alimentación de positivo.
- Masa.
- Señal bidireccional.
- Línea Bus. (pág. 1).

2. Unidades de control e interconexiones:
- J255: Unidad de control del autoclima.
- J293: Unidad de control del aire acondicionado.
- J285: Cuadro de instrumentos.
- Jxxx: Unidad de control motor (según motorización).
- R: Radiocasete. (pág. 1).

3. Sensores y transmisores del sistema:
- G17: Transmisor de temperatura exterior.
- G56: Transmisor de temperatura interior.
- G65: Transmisor de presión electrónico.
- G92: Potenciómetro del motor de la trampilla de temperatura.
- G191: Transmisor de temperatura en los difusores centrales.
- G192: Transmisor de temperatura de la zona de los pies. (pág. 1).

4. Interruptores, conmutadores y elementos de mando:
- E20: Regulador de iluminación.
- E87: Unidad de manejo e indicación.
- F18: Conmutador térmico de los ventiladores.
- F38: Interruptor térmico.
- F129: Conmutador de presión para aire acondicionado. (pág. 1).

5. Actuadores y motores eléctricos:
- J126: Regulador de régimen de la turbina.
- N25: Acoplamiento magnético.
- V2: Motor de la turbina de aire.
- V7: Ventilador del líquido refrigerante (con conmutador F129 o transmisor de presión G65).
- V35: Ventilador del líquido refrigerante.
- V42: Motor para la turbina del transmisor de temperatura interior G56.
- V68: Motor para la trampilla de temperatura.
- V113: Motor para la trampilla de recirculación. (pág. 1).

6. Protecciones, alimentaciones y conector de diagnosis:
- S26: Alimentación (15).
- S30: Alimentación (X).
- S180: Alimentación unidad J293.
- T16: Conector de diagnóstico. (pág. 1).

## Valores de referencia

- S26: Línea de alimentación por positivo de encendido (borne 15).
- S30: Línea de alimentación por positivo bajo contacto desconectado durante el arranque (borne X).
- T16: Conector de diagnóstico de 16 pines. (pág. 1).

## Imágenes requeridas

- Esquema eléctrico general de climatización con leyenda de componentes y código de colores — Fuente: Clima Ibiza.pdf, pág. 1
