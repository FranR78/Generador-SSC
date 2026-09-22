---
id: ssc.sin-clasificar.distribucion-y-regulacion-de-temperatura-en-la-zona-trasera
modulo: ssc
unidad: sin-clasificar
nt: 1190
tipo: proceso
subtipo: fundamento
titulo: "Distribución Y Regulación De Temperatura En La Zona Trasera"
menu: "Distribución Y Regulación De Temperatu"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la cinemática de distribución de aire y el control de mezcla térmica en la.ª zona (plazas traseras) mediante el servomotor de distribución V237, el servomotor de temperatura V137 y la sonda G174.

## Fundamento

El SEAT Tarraco no utiliza una segunda unidad climática independiente para las plazas traseras. La distribución de aire se deriva desde la unidad climática principal mediante cables Bowden hacia la consola central, mientras que la mezcla de temperatura de la zona trasera la realiza el servomotor V137 mediante palancas laterales diferenciadas para aire frío y aire caliente.

## Condiciones previas

Sistema Climatronic encendido con el modo trizona activado.

## Desarrollo

* **Lógica de Distribución del Aire Trasero (Servomotor V237):**
  - *Selección de salida por difusores del tablero:* El servomotor V237 desplaza el sistema de palancas abriendo los difusores del tablero y cerrando los reposapiés delanteros; simultáneamente, la tracción de los cables Bowden **abre la trampilla trasera de la consola central** y cierra las trampillas del reposapiés trasero.
  - *Selección de salida por reposapiés:* V237 invierte el movimiento, cerrando la consola trasera y abriendo el caudal hacia las zonas reposapiés traseras mediante los cables Bowden.
* **Lógica de Regulación de Temperatura Trasera (Servomotor V137):**
  - El servomotor V137 opera sobre dos sistemas de palancas independientes ubicados a ambos lados de la unidad climática: el sistema del lado izquierdo acciona la trampilla de aire frío y el del lado derecho la trampilla de aire caliente para el canal trasero.
  - La UCE J255 monitoriza en tiempo real la temperatura efectiva de la.ª zona mediante el sensor NTC de temperatura del difusor trasero G174, instalado en la tobera trasera de la consola central.

## Valores de referencia

| Mando / Componente | Acción Mecánica | Difusor Trasero Gobernado |
| :--- | :--- | :--- |
| **Servomotor V237** | Tracción de cables Bowden (Posición Tablero) | Abre salida consola trasera / Cierra reposapiés trasero |
| **Servomotor V237** | Tracción de cables Bowden (Posición Pies) | Cierra salida consola trasera / Abre reposapiés trasero |
| **Servomotor V137** | Palanca izquierda / Palanca derecha | Ajusta paso de aire frío / aire caliente a la.ª zona |
| **Sensor G174** | Medición NTC en tobera trasera | Informa a la UCE J255 de la temperatura de la.ª zona |

## Interpretación y errores frecuentes

* Diagnosticar un fallo eléctrico en V137 cuando la zona trasera no enfría; se debe comprobar previamente que la palanca mecánica del lado izquierdo de la unidad climática no se ha desenganchado de la bieleta de mando.

## Verificación final

Medir la temperatura del aire saliente por la tobera de la consola trasera con un termómetro digital de varilla mientras se modifica la consigna en la unidad E265 de "LOW" a "HIGH".

## Imágenes requeridas

- Esquema del flujo de distribución de aire hacia la consola y reposapiés traseros — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 63
- Sistema de palancas para la mezcla de aire frío y caliente gobernado por el servomotor V137 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 64
