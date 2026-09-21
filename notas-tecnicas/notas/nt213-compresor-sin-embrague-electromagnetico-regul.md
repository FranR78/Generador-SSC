---
id: ssc.sin-clasificar.compresor-sin-embrague-electromagnetico-regulacion-externa
modulo: ssc
unidad: sin-clasificar
nt: 213
titulo: "Compresor Sin Embrague Electromagnético (Regulación Externa)"
codigo: "Denso (6SEU / 7SEU), Sanden (PXE 13 / PXE 16), Delphi (CVC7)"
ubicacion: "Vano motor, accionado de forma continua por la correa de accesorios Poly-V"
aplicacion: "Vehículos modernos de diversas marcas (Audi, Seat, VW, BMW, Opel, Citroën)"
menu: "Compresor Sin Embrague Electro Denso (6SEU / 7SEU), Sanden (PXE 13 / PXE 16), Delphi (CVC7)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Comprimir el gas refrigerante regulando su cilindrada de forma continua según la demanda térmica, sin desacoplar la polea de tracción.

## Principio de funcionamiento

Carece de embrague electromagnético; la polea gira ininterrumpidamente. Una válvula de regulación electrónica accionada por señal modulada por ancho de pulsos (PWM) altera la presión en el cárter del compresor, modificando el ángulo del plato oscilante y la carrera de los pistones entre el 2% y el 100%. Incorpora en la polea un fusible mecánico / disco de arrastre con elementos de goma que se cizalla en caso de agarrotamiento para proteger la correa.

## Características

Compresor de cilindrada variable mediante electroválvula de regulación PWM interna. Polea de tracción con fusible de sobrecarga de goma incorporado.

## Valores de trabajo

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Corriente de mando a la válvula** | 0,0 A (0% / Econ / OFF) a 0,65 A (75-100% PWM / LO / Máx. potencia) | Medido por bloque de valores / multímetro |
| **Señal PWM de control** | Ajuste osciloscopio: 5 V/div y 0.5 ms/div (Señal rectangular a ~13,5 V) | Conector de la válvula reguladora |
| **Tarado válvula de seguridad mecánica** | 35 a 45 bar | Disparo por sobrepresión extrema |

## Anomalías frecuentes

Cizallamiento del fusible de sobrecarga de la polea por rozamiento interno del compresor; bloqueo de la válvula de regulación por suciedad o virutas en el aceite.

## Comportamiento en avería

El aire acondicionado no enfría. Si salta el fusible de la polea, la polea exterior gira impulsada por la correa pero el eje central del compresor permanece totalmente parado.

## Cómo comprobarlo

Verificar si el eje central gira solidario con la polea; conectar un osciloscopio a la válvula reguladora y verificar el cambio del ciclo de trabajo de la señal rectangular PWM al pasar de "Econ" a "LO" (de 0% a ~75%); comprobar la resistencia de la electroválvula.

## Imágenes requeridas

- Detalle de la polea de transmisión con elemento de goma y disco de arrastre — Fuente: Climatizacion basicos.pdf, pág. 30
