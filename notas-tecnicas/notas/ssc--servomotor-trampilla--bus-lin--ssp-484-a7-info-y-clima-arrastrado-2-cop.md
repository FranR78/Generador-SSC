---
id: ssc.servomotor-trampilla.bus-lin.ssp-484-a7-info-y-clima-arrastrado-2-cop
modulo: ssc
unidad: clima
nt: 328
tipo: elemento
clase: componente
titulo: "Servomotor de trampilla con bus LIN"
codigo: "J255"
menu: "Servomotor de trampilla con bu J255"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: bus-lin
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: unidad-control-climatizador
marca: "Audi"
fuentes: "SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, págs. 52-53"
relacionados: ["unidad-control-climatizador", "autodiagnostico-climatizador"]
palabras: ["servomotor", "bus LIN", "conector de 4 pines", "direccionamiento automático", "terminal 30"]
---

## Misión

Accionar y posicionar las trampillas individuales del sistema de climatización mediante la recepción de órdenes e información de adaptación a través del bus LIN. (pág. 53).

## Tipos y características

Servomotores conectados en serie a la unidad de control Climatronic J255 o a la unidad de control e indicación del climatizador trasero E265 mediante el bus LIN. Incorporan un conector de 4 pines:
- Pin A1: terminal 31 (masa).
- Pin A2: LIN in (entrada de la línea de datos bus LIN).
- Pin A3: LIN out (salida de la línea de datos bus LIN).
- Pin A4: terminal 30 (alimentación de positivo permanente). (págs. 52-53).

## Principio de funcionamiento

Se adaptan y activan mediante la conexión en serie a la línea de datos bus LIN. Cada servomotor recibe la asignación de su trampilla correspondiente mediante una codificación de dirección obtenida durante el proceso de direccionamiento automático (auto-addressing). La señal de datos entra por el pin A2 (LIN in) y se transmite hacia el siguiente servomotor de la serie por el pin A3 (LIN out). (págs. 52-53).

## Valores de trabajo

Alimentación eléctrica por terminal 30 (positivo permanente) y terminal 31 (masa). (pág. 53).

## Anomalías frecuentes

Interrupción de la línea del bus LIN en el servomotor, o intercambio accidental de conectores o de posiciones físicas entre servomotores durante trabajos de reparación. (pág. 53).

## Comportamiento en avería

- Si la línea del bus LIN se interrumpe en un servomotor, se indican como averiados ese servomotor y todos los servomotores conectados en serie a continuación (aguas abajo / downstream).
- Si se intercambian los conectores de dos o más servomotores, mantendrán sus funciones anteriores hasta el siguiente ciclo de direccionamiento automático; tras dicho ciclo, se les asignarán trampillas incorrectas al no coincidir el orden de los conectores en el mazo de cables.
- Si se intercambia la ubicación física de dos servomotores, no funcionarán correctamente con la asignación de dirección antigua en la nueva posición.
- Ante cualquier fallo se registra un código de avería (DTC) en la memoria de averías. (pág. 53).

## Cómo comprobarlo

Leer y consultar la memoria de averías (DTC) utilizando la herramienta de diagnóstico (VAS Scan Tool). (pág. 53).

## Mantenimiento

Respetar el orden correcto de los conectores en el mazo de cables y ejecutar el ciclo de direccionamiento automático tras sustituir o permutar servomotores. (pág. 53).

## Imágenes requeridas

- Esquema de conexión en serie del conector de 4 pines (A1 terminal 31, A2 LIN in, A3 LIN out, A4 terminal 30) entre servomotores — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, pág. 53
