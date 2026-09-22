---
id: ssc.sin-clasificar.servomotores-y-potenciometros-de-control-de-trampillas
modulo: ssc
unidad: sin-clasificar
nt: 1126
titulo: "Servomotores Y Potenciómetros De Control De Trampillas"
codigo: "V113/G143 (Recirculación), V158/G220 (Temp. Izquierda), V159/G221 (Temp. Derecha), V107/G135 (Deshielo), V70/G112 (Central), V71/G113 (Retención de aire)"
ubicacion: "Montados sobre la caja climática del sistema de calefacción/climatización bajo el salpicadero"
aplicacion: "Climatronic bizona de SEAT León y vehículos de la plataforma VAG"
menu: "Servomotores Y Potenciómetros  V113/G143 (Recirculación), V158/G220 (Temp. Izquierda), V159/G221 (Temp. Derecha), V107/G135 (Deshielo), V70/G112 (Central), V71/G113 (Retención de aire)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Los servomotores (V113, V158, V159, V107, V70, V71) orientan mecánicamente las trampillas de mezcla, distribución y recirculación de aire. Los potenciómetros integrados (G143, G220, G221, G135, G112, G113) leen e informan continuamente a la UCE J255 sobre la posición real de cada trampilla.

## Principio de funcionamiento

Cada conjunto incorpora un pequeño motor eléctrico de corriente continua (accionado por la UCE Climatronic J255 mediante inversión de polaridad) y una pista potenciómetrica (G) alimentada a 5 V desde la línea de positivo de sensores (L8) y masa de sensores (L7). La tensión leída en el cursor del potenciómetro varía proporcionalmente al ángulo de la trampilla.

## Características

Servomotores eléctricos compactos de 5 o 6 vías de conexión. Comparten la barra de positivo de potenciómetros (L8 / conector T16g/7) y la barra de masa de potenciómetros (L7 / conector T16g/10).

## Valores de trabajo

* Tensión de alimentación de potenciómetros (L8): 5 V constantes suministrados por J255.
* Margen de señal potenciómetrica: Variación continua de tensión entre 0,5 V y 4,5 V entre los topes mecánicos.

## Anomalías frecuentes

Desgaste o suciedad en la pista de carbón del potenciómetro interno, rotura de los dientes de los engranajes de plástico o agarrotamiento mecánico de las trampillas.

## Comportamiento en avería

El climatizador pierde la capacidad de posicionar la trampilla afectada (ej. imposibilidad de ajustar la temperatura del lado izquierdo con V158/G220 o del lado derecho con V159/G221, fallo para desempañar con V107/G135 o bloqueo de la recirculación con V113/G143), registrando un código de avería en la UCE J255.

## Cómo comprobarlo

Realizar el diagnóstico de actuadores para verificar el movimiento de las trampillas, medir la variación de tensión del potenciómetro con polímetro/osciloscopio y ejecutar obligatoriamente el **Ajuste Básico (Función 04)** con la máquina de diagnosis tras cualquier sustitución.

## Imágenes requeridas

- Esquema eléctrico de conexiones de servomotores y potenciómetros con las líneas de positivo L8 y masa L7 — Fuente: Nº10. Esquemas eléctricos.pdf, págs. 4, 5 y 6 (León)
