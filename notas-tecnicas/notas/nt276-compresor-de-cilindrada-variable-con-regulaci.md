---
id: ssc.sin-clasificar.compresor-de-cilindrada-variable-con-regulacion-externa
modulo: ssc
unidad: clima
nt: 276
titulo: "Compresor De Cilindrada Variable Con Regulación Externa"
codigo: "Denso 6 SEU 12"
ubicacion: "Vano motor, accionado de forma ininterrumpida por la correa Poly-V"
aplicacion: "Climatizadores automáticos de regulación electrónica continua sin embrague electromagnético"
menu: "Compresor De Cilindrada Variab Denso 6 SEU 12"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Comprimir el gas refrigerante adaptando continuamente la cilindrada de 0 % a 100 % mediante control electrónico sin necesidad de embrague electromagnético.

## Principio de funcionamiento

Una electroválvula variadora gestionada por la UCE mediante señal PWM modifica la comunicación de presión entre la alta presión, la baja presión y la carcasa del cigüeñal (cárter). Esto altera la fuerza sobre los pistones y la inclinación del disco oscilante. La polea incorpora un fusible de goma con grafito que se cizalla/deforma si el compresor se agarrota, protegiendo la correa de accesorios.

## Características

Compresor de disco oscilante sin embrague electromagnético. Valvula reguladora combinada mecánico-electromagnética. Polea con disco de arrastre "A" y elemento de goma deformable de protección contra sobrecarga.

## Valores de trabajo

| Parámetro de regulación | Valor numérico | Condiciones de validez |
|---|---|---|
| **Frecuencia de la señal PWM** | **400 Hz** | Señal de proporción de período variable |
| **Carrera del empujador de la válvula** | **Pocas décimas de milímetro** | Estado "flotante" a 400 Hz |
| **Margen de regulación de caudal** | **0 % (disco < 2 %) a 100 %** | Regulación continua |

## Anomalías frecuentes

Cizallamiento del fusible de goma de la polea por bloqueo interno del compresor; fallo de la electroválvula de regulación PWM.

## Comportamiento en avería

La polea gira impulsada por la correa pero el eje del compresor no gira (disco de arrastre desacoplado por rotura del fusible de goma).

## Cómo comprobarlo

Comprobar con osciloscopio la señal cuadrada de 400 Hz PWM en el conector de la válvula y verificar si el disco de arrastre central "A" gira solidario con la polea.
