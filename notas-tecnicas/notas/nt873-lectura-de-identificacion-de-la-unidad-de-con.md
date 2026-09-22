---
id: ssc.sin-clasificar.lectura-de-identificacion-de-la-unidad-de-control-del-autoclima-en-equipo-de-diagnosis
modulo: ssc
unidad: sin-clasificar
nt: 873
tipo: proceso
subtipo: diagnostico
titulo: "Lectura De Identificación De La Unidad De Control Del Autoclima En Equipo De Diagnosis"
menu: "Lectura De Identificación De La Unidad"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la interpretación de los campos mostrados en la pantalla de identificación de la versión de la unidad de control del autoclima mediante la función "01" del equipo de diagnosis. Aplica al autodiagnóstico del SEAT Ibiza/Córdoba '99.

## Fundamento

Al seleccionar la **Función "01" (Interrogar la versión de la unidad de control)** en la Dirección 08 del equipo de diagnosis (VAG 1551 o equivalente), la UCE transmite sus códigos de identificación de recambio, versión de software, hardware y código del taller.

## Condiciones previas

Equipo de diagnosis conectado al puerto T16 del vehículo y contacto encendido.

## Equipo y material

Lector de averías / equipo de diagnosis (VAG 1551 o equivalente).

## Desarrollo

* **Interpretación de los campos en la pantalla de la función "01":**
  - **Campo A (`6K0959291`):** Número o código de recambio oficial SEAT de la Unidad de Control del Autoclima.
  - **Campo B (`6K-AUTOCLIMA-110`):** Denominación del sistema y versión de programa/software grabado en la UCE. Indica que la centralita física J255 está trabajando con la codificación de programa Autoclima (sin puente de masa en pin 21).
  - **Campo C (`X01`):** Versión de desarrollo del hardware/software de la centralita.
  - **Campo D (`WSC 00000`):** Código del taller (WorkShop Code) que realizó la última codificación o adaptación de la unidad.

## Valores de referencia

| Campo en Pantalla | Código Mostrado | Significado Técnico |
| :--- | :--- | :--- |
| **Campo A** | `6K0959291` | Número de recambio original de la UCE |
| **Campo B** | `6K-AUTOCLIMA-110` | Sistema identificado y versión de software |
| **Campo C** | `X01` | Versión de hardware / software |
| **Campo D** | `WSC 00000` | Código de identificación del taller |

## Interpretación y errores frecuentes

* Si en el Campo B aparece la denominación de Calefacción Motorizada en lugar de Autoclima, significa que el conector posterior tiene colocado por error el puente de masa en el pin 21 del mazo de cables.

## Verificación final

Verificar que el código de recambio y la versión de software mostrados en el lector coinciden con la equipamiento real del vehículo.

## Imágenes requeridas

- Pantalla de identificación de la unidad de control del autoclima en el equipo VAG 1551 — Fuente: ce2.pdf, pág. 12
