---
id: ssc.nuevo-climatizacion-asientos.409-e-audi-a4-08
modulo: ssc
unidad: clima
nt: 423
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistema de climatización de asientos"
menu: "Sistema de climatización de asientos"
grupo: "Climatizacion asientos"
clave: nuevo-climatizacion-asientos
area: confort-y-seguridad
sistema: "NUEVO-climatizacion-asientos"
marca: "Audi"
fuentes: "409_e         Audi A4 _08.pdf, págs. 68-71"
relacionados: ["unidad-control-climatizador"]
palabras: ["asiento confort climatizado", "ventiladores axiales", "conjunto distanciador", "calefaccion protectora", "15 ºC", "6 intensidades"]
---

## Objeto

Mantener la confortabilidad térmica del ocupante mediante la ventilación y calefacción combinada de la superficie del asiento. (pág. 68)

## Fundamento

El sistema utiliza ventiladores axiales que soplan aire extraído del habitáculo a través de un conjunto distanciador dispuesto entre el tapizado y el acolchado, combinado con mallas calefactoras integradas. (págs. 68-69)

## Desarrollo

El asiento de confort climatizado integra dos ventiladores axiales en la banqueta (aspiran aire del vano reposapiés) y dos ventiladores axiales en el respaldo (aspiran aire de la zona posterior).

La selección se efectúa en la unidad J255 mediante el mando giratorio:
- Giro a la derecha (zona roja): activa la calefacción en 6 intensidades.
- Giro a la izquierda (zona azul): activa la climatización (ventilación) en 6 intensidades.

Para prevenir el subenfriamiento corporal, al activar la ventilación el sistema enciende automáticamente la calefacción de forma independiente de la intensidad seleccionada. 

Si la temperatura del asiento es inferior a 15 ºC, se deja de excitar los motores de los ventiladores y no es posible activar la ventilación por seguridad. En el Audi A4 2008, los rebordes laterales del respaldo no se calefactan cuando se activa la calefacción o ventilación.

Existen tres arquitecturas eléctricas de gestión:
- Variante 1 (Solo calefacción): excitación directa desde la unidad de control de la red de a bordo J519.
- Variante 2 (Calefacción y ventilación sin memoria): J519 gestiona las unidades de ventilación J799 (derecha) y J800 (izquierda) a través del bus LIN.
- Variante 3 (Calefacción y ventilación con memoria en conductor): el lado conductor es gestionado directamente por la unidad J136 (memoria de asiento/columna); el lado acompañante por la J799 vía LIN desde la J519. (págs. 68-71)

## Valores de referencia

- Número de intensidades de reglaje: 6 niveles (calefacción y ventilación).
- Umbral de temperatura para bloqueo de ventiladores: 15 ºC (por debajo de 15 ºC la ventilación se inhabilita). (págs. 69-70)

## Errores de concepto frecuentes

Pensar que la ventilación del asiento echa aire frío inmediatamente al arrancar con el habitáculo muy caliente. Como el sistema aspira el aire del vano reposapiés y de la zona trasera, el aire soplado estará caliente hasta que el climatizador refrigere el aire del habitáculo. (pág. 68)

## Imágenes requeridas

- Estructura del asiento de confort climatizado con conjunto distanciador, ventiladores axiales y malla calefactora — Fuente: 409_e         Audi A4 _08.pdf, pág. 68
- Diagrama de variantes de excitación eléctrica (Variantes 1, 2 y 3) entre J255, J519, J136, J799 y J800 — Fuente: 409_e         Audi A4 _08.pdf, págs. 70-71
