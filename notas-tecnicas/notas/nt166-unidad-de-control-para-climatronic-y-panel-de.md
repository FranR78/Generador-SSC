---
id: ssc.sin-clasificar.unidad-de-control-para-climatronic-y-panel-de-mandos
modulo: ssc
unidad: sin-clasificar
nt: 166
titulo: "Unidad De Control Para Climatronic Y Panel De Mandos"
codigo: "J255"
ubicacion: "Consola central del salpicadero"
aplicacion: "Climatizadores automáticos monozona (versión Basis) y bizona/trizona (versión Komfort) del Audi A5 Coupé 2008"
menu: "Unidad De Control Para Climatr J255"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Recibir la información de los sensores del habitáculo y del exterior, procesar las selecciones térmicas del usuario y gobernar automáticamente los servomotores, el regulador de la turbina y la compresión del circuito frigorífico.

## Principio de funcionamiento

Módulo electrónico microprocesado que integra en su frontal el panel de mandos. Procesa continuamente las lecturas de los sensores térmicos, fotosensor doble, humedad y calidad de aire. Calcula las posiciones teóricas de las trampillas y las transmite mediante un único cable de datos (LIN-Bus) a los servomotores conectados en serie. Transmite la solicitud de corriente para la válvula -N280- a la UCE de red de a bordo -J519- vía CAN-Bus.

## Características

- **Versión Basis:** Pantalla en MMI, regulación monozona, 1 pulsador giratorio de temperatura, gestiona 6 servomotores.  
- **Versión Komfort:** Pantallas digitales integradas en el panel, regulación bizona/trizona independiente, gestiona 10 servomotores.  
- Incorpora en su interior el termosensor del tablero -G56- y la turbina de aspiración -V42-.

## Valores de trabajo

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación (Borne 30)** | 12 V (tensión de batería) | Medido en bloque de valores 042 campo 4 |
| **Salida de alimentación para sensores** | 5,0 V CC | Medido en bloque de valores 032 campo 1 |
| **Salida de alimentación para servomotores** | 12,0 V CC | Medido en bloque de valores 032 campo 2 |
| **Régimen de la turbina V42** | 2.500 a 3.200 rpm (Basis) / 2.800 a 3.500 rpm (Komfort) | Medido en bloque de valores 036 campo 2 |

## Anomalías frecuentes

Acumulación de polvo en la rejilla de aspiración de la sonda -G56-; bloqueo por activación de la protección de componentes al sustituir la unidad; o fallo de comunicación en el bus LIN.

## Comportamiento en avería

Si la protección de componentes se activa, se desactivan las funciones de confort (calefacción de asientos, selección bizona) y se mantiene únicamente el desempañado de seguridad. Si falla la turbina -V42-, la sonda -G56- mide una temperatura superior a la real del habitáculo y enfría en exceso.

## Cómo comprobarlo

Mediante equipo OBD en dirección: consultar memoria de averías, verificar las tensiones de 5 V y 12 V en el bloque 032, verificar las rpm de la turbina -V42- en el bloque 036 y ejecutar el test de actuadores (test de segmentos de pantalla).
