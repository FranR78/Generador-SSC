---
id: ssc.autodiagnostico-calefaccion-independiente.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 174
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Autodiagnóstico de la calefacción independiente"
codigo: "J364"
menu: "Autodiagnóstico de la calefacc J364"
grupo: "Control de climatización"
clave: autodiagnostico-calefaccion-independiente
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 3-10"
relacionados: ["calefaccion-independiente", "unidad-control-climatizador"]
palabras: ["autodiagnosis", "memoria de averías", "VAS 5051", "J364"]
---

## Objeto

Supervisar el funcionamiento de los componentes y sensores gestionados por la unidad de control para calefacción adicional J364, registrando averías y permitiendo el diagnóstico mediante equipos de diagnosis del taller. (págs. 3-4).

## Fundamento

La unidad de control J364 analiza ininterrumpidamente las señales de los sensores e indica las anomalías memorizándolas en su memoria permanente no dependiente de la alimentación de tensión. Distingue entre averías estáticas y esporádicas. (págs. 4-5).

## Desarrollo

El diagnóstico se realiza conectando el equipo de diagnosis (VAS 5051 o VAS 5052) con el cable VAS 5051/5A al conector de 16 polos del vehículo con el encendido desconectado, accediendo a la dirección "18 - Calefacción adicional/independiente".
La transmisión de datos se realiza por transmisión rápida de datos.
Funciones disponibles en la autodiagnosis:
- 01 / 001: Consultar la versión de la unidad de control.
- 02 / 004: Consultar la memoria de averías.
- 03 / 005: Diagnosis de actuadores.
- 04 / 006: Ajuste básico.
- 05 / 004.10: Borrar la memoria de averías.
- 06 / 022: Finalizar la emisión.
- 07 / 008 / 07: Codificación de la unidad de control.
- 08 / 011: Leer bloque de valores de medición.
- 10 / 012: Adaptación. (págs. 5-8).

## Valores de referencia

Conector de diagnóstico de 16 polos del vehículo.
Velocidad del vehículo no superior a 5 km/h para ejecutar la función de diagnosis de actuadores. (págs. 6, 8).

## Errores de concepto frecuentes

Creer que las averías esporádicas son fallos inexistentes o lecturas erróneas del equipo; corresponden a condiciones de avería reales que desaparecieron temporalmente y se identifiican con la indicación /SP, borrándose automáticamente solo si no vuelven a reproducirse durante un periodo prolongado. (págs. 4-5).
