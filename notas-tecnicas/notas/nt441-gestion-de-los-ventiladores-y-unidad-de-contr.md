---
id: ssc.sin-clasificar.gestion-de-los-ventiladores-y-unidad-de-control-j293
modulo: ssc
unidad: clima
nt: 441
tipo: proceso
subtipo: fundamento
titulo: "Gestión De Los Ventiladores Y Unidad De Control J293"
menu: "Gestión De Los Ventiladores Y Unidad D"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el gobierno de los escalones de velocidad del electroventilador del radiador/condensador mediante la unidad J293.

## Fundamento

El rendimiento del condensador exige un flujo forzado de aire. La unidad de control del ventilador del líquido refrigerante J293 procesa las señales térmicas del termoconmutador F18 y de presión del F129/F118 para activar el Escalón 1 o Escalón 2 de los ventiladores V7 y V35.

## Condiciones previas

Encendido conectado o motor en marcha.

## Equipo y material

Unidad de control J293.

## Desarrollo

- **Funcionamiento combinado de 2 ventiladores:**  
  - Al activar el A/C con presión > 0,2 MPa (2 bar): ambos ventiladores arrancan en **Escalón 1 (velocidad lenta)**.  
  - Si la alta presión supera 1,6 MPa (16 bar) O la temperatura del refrigerante del motor supera 99 ºC: ambos ventiladores conmutan al **Escalón 2 (velocidad rápida)**.  
  - Al bajar la presión de 1,6 MPa y la temperatura de 99 ºC: retornan al **Escalón 1**.  
  - Con A/C desconectado: funciona solo el ventilador del radiador controlado por el termoconmutador F18 (92-97 ºC Escalón 1 ON; 99-105 ºC Escalón 2 ON).

## Valores de referencia

| Condición de mando / Transmisor | Umbral de disparo | Escalón activo |
|---|---|---|
| **F18 Temp. Agua (Escalón 1)** | **92...97 ºC ON / 84...91 ºC OFF** | Escalón 1 |
| **F18 Temp. Agua (Escalón 2)** | **99...105 ºC ON / 91...98 ºC OFF** | Escalón 2 |
| **A/C Conectado y Presión > 0,2 MPa** | **> 2 bar** | Escalón 1 |
| **Presión HP > 1,6 MPa / Temp > 99 ºC** | **> 16 bar / > 99 ºC** | Escalón 2 |

## Interpretación y errores frecuentes

- Si al conectar el climatizador no salta la velocidad lenta (Escalón 1), la alta presión subirá rápidamente provocando el corte de seguridad por sobrepresión.

## Verificación final

Confirmar el giro inmediato de ambos ventiladores en Escalón 1 al pulsar la tecla A/C.

## Imágenes requeridas

- Lógica de conmutación de velocidades de los ventiladores V7 y V35 — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 47
