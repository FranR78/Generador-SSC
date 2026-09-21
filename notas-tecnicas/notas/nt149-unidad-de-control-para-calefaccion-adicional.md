---
id: ssc.sin-clasificar.unidad-de-control-para-calefaccion-adicional
modulo: ssc
unidad: sin-clasificar
nt: 149
titulo: "Unidad De Control Para Calefacción Adicional"
codigo: "J364"
ubicacion: "Montada directamente sobre la carcasa del calefactor de la calefacción independiente [29, 30]"
aplicacion: "Gestión electrónica de la calefacción independiente y adicional en modelos Audi A5 Coupé 2008 [29, 31]"
menu: "Unidad De Control Para Calefac J364"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Procesar las señales de los sensores del calefactor y del bus de datos para gobernar los actuadores del sistema (bomba dosificadora, turbina de aire, bujía y bombas de agua) [2, 12, 32].

## Principio de funcionamiento

Módulo microprocesado que ejecuta las secuencias de arranque, regulación de potencia (plena carga/carga parcial), pausa de regulación y desconexión por inercia [32, 33]. Se comunica con el cuadro de instrumentos, la UCE del climatizador -J255- y la interfaz de diagnosis -J533- mediante la red CAN-Bus [8, 34, 35].

## Características

Carcasa estanca fijada al calefactor con conector principal de 14 polos hacia los componentes internos y conectores externos de 2 y 6 polos [36-39]. Existen versiones diferenciadas para motorizaciones de gasolina y diésel no intercambiables [40, 41].

## Valores de trabajo

- Tensión de alimentación: 12 V ("borne 30") [24, 39].  
- Umbral de desconexión por sobretemperatura en placa electrónica: 130 ºC [42].  
- Frecuencia de control de la bomba dosificadora: 0 a 8 Hz [43, 44].

## Anomalías frecuentes

- Bloqueo de funcionamiento tras 3 intentos fallidos de arranque consecutivos [45, 46].  
- Sobrecalentamiento de la placa electrónica por fallo en la circulación de agua [42].  
- Activación de la protección de componentes tras la sustitución del módulo [29, 47].

## Comportamiento en avería

El sistema se desconecta inmediatamente o entra en ciclo de post-marcha [48]. La UCE desactiva el funcionamiento y transmite la prohibición de arranque a la pantalla del MMI y al cuadro de instrumentos [49, 50].

## Cómo comprobarlo

Comprobar alimentación de 12 V en conector de 2 polos [39]. Diagnosticar mediante equipo OBD la identificación de la versión en el grupo de indicación "012", la temperatura interna de la tarjeta en el grupo "023" y el código de bloqueo en el canal de adaptación "42" [14, 23, 42].
