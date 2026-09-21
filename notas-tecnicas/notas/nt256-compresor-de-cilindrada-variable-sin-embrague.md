---
id: ssc.sin-clasificar.compresor-de-cilindrada-variable-sin-embrague-electromagnetico
modulo: ssc
unidad: clima
nt: 256
titulo: "Compresor De Cilindrada Variable Sin Embrague Electromagnético"
codigo: "Denso (6SEU / 7SEU), Sanden (PXE 13 / PXE 16), Delphi/Harrison (serie CVC7)"
ubicacion: "Montado en el bloque motor y accionado de forma ininterrumpida por la correa de accesorios"
aplicacion: "Turismos modernos de marcas como Audi, BMW, Citroën, Seat, VW y Opel"
menu: "Compresor De Cilindrada Variab Denso (6SEU / 7SEU), Sanden (PXE 13 / PXE 16), Delphi/Harrison (serie CVC7)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Comprimir el gas refrigerante adaptando su potencia y cilindrada de forma continua según las necesidades térmicas, sin necesidad de desacoplar mecánicamente la polea.

## Principio de funcionamiento

Carece de embrague electromagnético; la polea gira de forma continua impulsada por la correa. Una válvula de regulación electrónica montada en el compresor recibe una señal modulada por ancho de pulsos (PWM) desde la UCE de climatización, modificando la inclinación del plato oscilante y la carrera de los pistones entre un porcentaje mínimo de seguridad y el 100 %. La polea incorpora un elemento de goma / disco de arrastre que actúa como fusible de sobrecarga, cizallándose si el compresor se bloquea para proteger la correa.

## Características

Compresor de cilindrada variable por señal digital PWM. Polea de transmisión con fusible de sobrecarga de goma. Válvula de seguridad mecánica por sobrepresión extrema incorporada en la carcasa.

## Valores de trabajo

| Parámetro / Componente | Valor de trabajo especificado | Condiciones de validez |
|---|---|---|
| **Corriente de mando a la válvula** | **0,0 A (Econ/OFF) a 0,65 A (nivel "LO" / máx. potencia)** | Medido en bloque de valores de medición |
| **Corriente media de servicio** | **Aprox. 0,3 A** | En regulación de potencia normal |
| **Ajuste de señal PWM en osciloscopio** | **5 V/div y 0.5 ms/div** (Señal rectangular a ~13,5 V) | Conector del compresor a 12 V de a bordo |
| **Ciclo de trabajo PWM en "LO"** | **Aprox. 75 % de duración de impulso** | Solicitud de mínima temperatura |
| **Tarado de válvula de seguridad** | **35 a 45 bar** | Disparo por sobrepresión para proteger el circuito |

## Anomalías frecuentes

Cizallamiento o rotura del fusible de sobrecarga de la polea por agarrotamiento interno del compresor; fallo de la válvula de regulación PWM por virutas o suciedad en el aceite; disparo de la válvula de seguridad mecánica.

## Comportamiento en avería

El aire acondicionado no enfría. Si salta el fusible de la polea, la polea exterior gira pero el eje central del compresor queda totalmente parado; la película protectora de la válvula de seguridad aparece rota si hubo sobrepresión.

## Cómo comprobarlo

1. Verificar si el eje central del compresor gira al acelerar; si la polea gira pero el eje no, se ha activado el fusible de sobrecarga.  
2. En compresores Sanden PXE, sujetar el eje con una herramienta y girar la polea a la izquierda: si gira a la izquierda, el limitador se ha activado y requiere sustituir el compresor.  
3. Conectar un osciloscopio a la toma de la válvula reguladora y verificar el cambio del ciclo de trabajo de la señal rectangular de 0 % en "Econ" a 75 % en "LO".

## Imágenes requeridas

- Polea de transmisión con elemento de goma y disco de arrastre (fusible de sobrecarga) — Fuente: Climatizacion-conocimientos-basios-para-el-taller_3.pdf, pág. 30
