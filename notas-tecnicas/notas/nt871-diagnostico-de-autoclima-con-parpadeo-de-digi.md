---
id: ssc.sin-clasificar.diagnostico-de-autoclima-con-parpadeo-de-digitos-y-analisis-de-bloques-de-medicion
modulo: ssc
unidad: sin-clasificar
nt: 871
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Autoclima Con Parpadeo De Dígitos Y Análisis De Bloques De Medición"
menu: "Diagnóstico De Autoclima Con Parpadeo "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Detalla el procedimiento de diagnosis cuando el cliente indica que el Autoclima no enfría y los dígitos AC parpadean constantemente, analizando los grupos de la función "08" (bloques de valores de medición). Aplica a SEAT Ibiza/Córdoba '99.

## Fundamento

El parpadeo de los dígitos AC al encender indica que la UCE ha detectado un código de avería en sus sensores o actuadores. La función "08" del lector muestra en tiempo real los valores procesados por la UCE en los grupos 001 al 006, permitiendo identificar la señal anómala.

## Condiciones previas

Contacto del vehículo encendido (+15) y equipo de diagnosis VAG 1551 conectado al puerto T16.

## Equipo y material

Lector de averías / equipo de diagnosis y manual de valores de referencia.

## Desarrollo

* **Componentes del Autoclima que pueden causar la avería (sin utilizar el lector):**
  - Transmisor de temperatura exterior G17.
  - Sonda de temperatura del habitáculo G56 / turbina V42.
  - Transmisores de temperatura de entrada G191 / G192.
  - Motor de la trampilla de temperatura V68 / potenciómetro G92.
  - Conmutador de presión F129 / Transmisor G65.
* **Consulta de la función "08" (Bloques de valores de medición):**
  - *Grupo:* Campo 1 (Salida compresor 0/1), Campo 2 (Estado F129 0/1), Campo 3 (Estado V113 0/1), Campo 4 (Velocidad km/h).
  - *Grupo:* Campo 1 (V68 real V), Campo 2 (V68 calculada V), Campo 3 (Tope sup. V), Campo 4 (Tope inf. V).
  - *Grupo:* Estado de pulsadores de turbina, AC y AUTO (0/1).
  - *Grupo:* Estado de pulsadores de recirculación, temp. y posición de distribución (0-100%).
  - *Grupo:* Campo 1 (Tensión solicitada V2 V), Campo 2 (Tensión real V2 V), Campo 3 (Tensión alimentación V).
  - *Grupo:* Campo 1 (Temp. ext. G17 ºC), Campo 2 (Temp. G191 ºC), Campo 3 (Temp. G192 ºC), Campo 4 (Temp. G56 ºC).
* **Pasos si la avería no es detectada en los bloques:**
  1. Interrogar la memoria de averías (función 02) por si existe un fallo grabado intermitente (/SP).
  2. Ejecutar el diagnóstico de actuadores (función 03) para forzar la marcha del acoplamiento N25 y la turbina V2.
  3. Realizar la comprobación de la presión de gas en el circuito frigorífico con el puente de manómetros.
  4. Borrar la memoria de averías (función 05) tras reparar el componente dañado.

## Valores de referencia

| N.º de Grupo | Campo 1 | Campo 2 | Campo 3 | Campo 4 |
| :--- | :--- | :--- | :--- | :--- |
| **001** | Estado compresor (0/1) | Estado F129 (0 fuera/1 rango) | Estado V113 (0 ext/1 recir) | Velocidad vehículo (km/h) |
| **002** | V68 posición real (V) | V68 posición calculada (V) | V68 tope superior (V) | V68 tope inferior (V) |
| **003** | Pulsador + turbina (0/1) | Pulsador - turbina (0/1) | Pulsador AC (0/1) | Pulsador AUTO (0/1) |
| **004** | Pulsador recirculación (0/1) | Pulsador - temp. (0/1) | Pulsador + temp. (0/1) | Posición distribución (0-100%) |
| **005** | Tensión solicitada V2 (V) | Tensión real V2 (V) | Tensión alimentación (V) | Libre |
| **006** | Temp. exterior G17 (ºC) | Temp. difusor central G191 (ºC) | Temp. reposapiés G192 (ºC) | Temp. habitáculo G56 (ºC) |

## Interpretación y errores frecuentes

* Si en el Grupo 006 la temperatura exterior G17 indica "---" o un valor incoherente (ej. -40 ºC), la UCE deshabilita la marcha del compresor para evitar congelación y hace parpadear los dígitos.
* Si en el Grupo 001 el campo 2 indica "0", la presión en el circuito está fuera del rango de trabajo (< 2 bar o > 32 bar).

## Verificación final

Verificar que los dígitos del display dejan de parpadear al encender el Autoclima y que la temperatura del aire en difusores desciende progresivamente.
