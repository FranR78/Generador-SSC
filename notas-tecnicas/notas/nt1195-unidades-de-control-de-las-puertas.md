---
id: ssc.sin-clasificar.unidades-de-control-de-las-puertas
modulo: ssc
unidad: sin-clasificar
nt: 1195
titulo: "Unidades De Control De Las Puertas"
codigo: "J386 (Conductor) / J387 (Acompañante) / J388 (Trasera Izquierda) / J389 (Trasera Derecha)"
ubicacion: "Montadas en el panel interior de cada una de las puertas"
aplicacion: "Control local de elevalunas, cierres, retrovisores e iluminación ambiental"
menu: "Unidades De Control De Las Pue J386 (Conductor) / J387 (Acompañante) / J388 (Trasera Izquierda) / J389 (Trasera Derecha)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Gestionar los actuadores locales de cada puerta e informar a la UCE de la red de a bordo J519 del estado de los conmutadores a través del LIN-Bus puertas.

## Principio de funcionamiento

Módulos electrónicos esclavos. Leen la posición de los conmutadores locales y alimentan los motores de elevalunas, cierres y retrovisores una vez recibida la autorización de la UCE maestra J519.

## Características

Existen 2 versiones de equipamiento:
* **Versión "Min":** Gestionan luces de localización de mandos y elevalunas estándar.
* **Versión "Max":** Suman las funciones de bloqueo de elevalunas traseros, plegado eléctrico de retrovisores e iluminación ambiental de puertas.

## Valores de trabajo

Tensión de servicio de 12 V; comunicación por bus de datos LIN.

## Anomalías frecuentes

Corte de cables o cortocircuitos en el mazo pasacables articulado de la puerta.

## Comportamiento en avería

Si se interrumpe la línea LIN-Bus, la unidad de control de la puerta entra en *Función de emergencia*, permitiendo accionar el elevalunas únicamente desde el pulsador de su propia puerta.

## Cómo comprobarlo

Verificar la llegada de +12 V y masa al conector de la puerta y comprobar la señal del LIN-Bus con un osciloscopio o máquina de diagnosis.
