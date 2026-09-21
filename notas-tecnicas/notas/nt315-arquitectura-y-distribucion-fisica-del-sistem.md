---
id: ssc.sin-clasificar.arquitectura-y-distribucion-fisica-del-sistema-de-climatizacion-automatica
modulo: ssc
unidad: clima
nt: 315
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Distribución Física Del Sistema De Climatización Automática"
menu: "Arquitectura Y Distribución Física Del"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la distribución física en tres entornos (compartimento motor, conjunto de distribución de trampillas e interior del salpicadero) y la interconexión por haces de cables en un sistema de climatización automática.

## Fundamento

El sistema distribuye sus componentes en tres áreas físicas interconectadas para gestionar el circuito frigorífico de alta presión, el intercambio térmico de aire caliente/frío y la interfaz de control de usuario. La interacción continua entre los calculadores y los sensores de los tres entornos permite mantener las condiciones de confort en el habitáculo.

## Desarrollo

- **Entorno 1 — Compartimento motor:** Aloja los elementos de alta presión del circuito de aire acondicionado (condensador, compresor, filtro deshidratante y presostato) y los calculadores electrónicos (ECM y BSI).  
- **Entorno 2 — Conjunto de distribución de trampillas:** Mueble alojado en el interior del salpicadero donde se encuentran el radiador de calefacción, la resistencia PTC, el evaporador, el filtro de habitáculo, el impulsor de aire (GMV) y los micromotores actuadores.  
- **Entorno 3 — Tablero de mandos:** Situado en la consola central del salpicadero; aloja la centralita de climatización y los mandos de interfaz de usuario.  
- **Interconexión:** Dos haces de cables principales conectan la centralita del salpicadero con el conjunto de trampillas y con el compartimento motor.

## Valores de referencia

| Parámetro / Entorno | Componentes alojados | Condiciones de validez |
|---|---|---|
| **Compartimento motor** | **Alta presión (condensador, compresor, filtro, presostato) y calculadores (ECM, BSI)** | Circuito de alta presión e integración electrónica del vano |
| **Distribución de trampillas** | **Evaporador, radiador de calefacción, PTC, GMV, filtro y micromotores** | Salpicadero interior |
| **Tablero de mandos** | **Centralita A/C y panel de control de usuario** | Consola central |

## Interpretación y errores frecuentes

- Diagnosticar componentes de forma aislada sin considerar la comunicación entre la centralita A/C, el calculador ECM y la BSI. Una simple discontinuidad en un haz de cables o en una sonda provoca el mal funcionamiento del modo automático.

## Imágenes requeridas

- Esquema general con la unión de los tres entornos del sistema de climatización — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 5
