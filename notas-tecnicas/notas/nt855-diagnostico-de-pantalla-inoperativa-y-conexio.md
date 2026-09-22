---
id: ssc.sin-clasificar.diagnostico-de-pantalla-inoperativa-y-conexion-en-autoclima
modulo: ssc
unidad: sin-clasificar
nt: 855
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Pantalla Inoperativa Y Conexión En Autoclima"
menu: "Diagnóstico De Pantalla Inoperativa Y "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la localización de averías cuando el autoclima no se conecta y el display no muestra ninguna indicación. Aplica a los sistemas autoclima del SEAT Ibiza/Córdoba '99.

## Fundamento

La falta total de indicación en la pantalla y la imposibilidad de conectar el autoclima obedecen a la ausencia de alimentación eléctrica (+30 / +15 / masa), fallo interno en el radiocasete R (que alimenta la pantalla) o avería en la UCE.

## Condiciones previas

Tensión de batería suficiente (12 V).

## Equipo y material

Polímetro, esquemas eléctricos del vehículo y lector de averías.

## Desarrollo

* **Síntomas:** El autoclima no se enciende, los botones no responden y la pantalla del display está completamente apagada.
* **Procedimiento de localización:**
  1. Comprobar los fusibles de alimentación del sistema de climatización y del radiocasete en la caja de fusibles.
  2. Verificar la llegada de tensión (+12 V) y masa (línea 31) en los conectores del radiocasete y de la UCE del autoclima.
  3. Conectar el lector de averías e intentar la comunicación con la dirección 08 (Aire acondicionado) y dirección de Radio.
  4. Si no hay respuesta de la UCE, desmontar el frontal y verificar las conexiones traseras del radiocasete y del panel E87.
  5. Sustituir el componente defectuoso (fusible, cableado, radiocasete o UCE) según los esquemas eléctricos.

## Valores de referencia

| Punto de Comprobación | Valor Numérico | Condición de Validez |
| :--- | :--- | :--- |
| Alimentación positivo línea 30 / 15 | 12 V | Medido con polímetro respecto a masa |
| Conexión de masa línea 31 | 0 Ω (continuidad) | Medido con polímetro a masa del chasis |

## Interpretación y errores frecuentes

* Reemplazar la UCE de climatización sin comprobar antes si el fallo proviene del fusible del radiocasete (que alimenta eléctricamente la pantalla E87).

## Verificación final

Verificar el encendido de los dígitos en el display al conectar el contacto y la respuesta normal del climatizador al pulsar las teclas.
