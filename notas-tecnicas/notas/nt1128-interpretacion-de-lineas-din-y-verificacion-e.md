---
id: ssc.sin-clasificar.interpretacion-de-lineas-din-y-verificacion-electrica-en-sistemas-de-climatizacion
modulo: ssc
unidad: sin-clasificar
nt: 1128
tipo: proceso
subtipo: procedimiento
titulo: "Interpretación De Líneas Din Y Verificación Eléctrica En Sistemas De Climatización"
menu: "Interpretación De Líneas Din Y Verific"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer el procedimiento de comprobación eléctrica, identificación de bornes estandarizados y resolución de pruebas de autoevaluación en instalaciones de climatización automotriz. Aplica a las actividades prácticas de verificación eléctrica de A/C.

## Fundamento

La verificación de esquemas estandarizados requiere identificar las líneas de alimentación DIN (30, 15, 31), comprender el comportamiento de los interbloqueos de seguridad (presostato trinario, NTC de motor, turbina) y seguir un procedimiento ordenado de diagnóstico mediante puenteado y mediciones.

## Condiciones previas

Esquema eléctrico del vehículo disponible, polímetro calibrado y cable puente con fusible de protección.

## Equipo y material

Polímetro digital, lámpara de pruebas, cable puente de diagnóstico y máquina de diagnosis.

## Desarrollo

1. **Identificación de líneas de alimentación en el esquema (Normas DIN):**
   - Verificar la presencia de +12 V directos de batería en la línea etiquetada con la cifra **30**.
   - Verificar la presencia de +12 V únicamente con la llave en contacto en la línea etiquetada con la cifra **15**.
   - Verificar la continuidad a masa (0 Ω) en la línea etiquetada con la cifra **31**.
2. **Procedimiento de comprobación de la trinaria mediante puenteado:**
   - *Prueba de la línea del compresor (Bornes 1 y 2):* Con el circuito cargado y componentes conectados, al puentear los bornes 1 y 2 de la trinaria, el embrague del compresor debe **conectarse** (demuestra la integridad de la línea hacia la bobina N25).
   - *Prueba de la línea de alta velocidad del electroventilador (Bornes 3 y 4):* Al puentear los bornes 3 y 4 de la trinaria, el electroventilador debe **funcionar inmediatamente a su velocidad máxima (II velocidad)** al alimentar la bobina del relé correspondiente.
3. **Comprobación de interbloqueos de seguridad:**
   - *Sonda NTC de temperatura de motor:* Si la NTC indica exceso de temperatura en el refrigerante, la UCE **desconecta el sistema de aire acondicionado** para evitar sobrecalentamiento del motor.
   - *Turbina de aire fresco:* Si la turbina no funciona o está desconectada, el interbloqueo eléctrico impide el acoplamiento del compresor (**no se conecta el compresor**).
   - *Línea CAN-Bus:* Verificar el correcto **intercambio de información entre las Unidades de Control** (UCE Motor, Cuadro, Red de a bordo y Climatizador).
   - *Señal de marcha atrás:* Confirmar que al insertar la marcha atrás la UCE recibe la señal para **conectar automáticamente la recirculación** de aire y evitar la entrada de gases de escape.

## Valores de referencia

| Comprobación / Prueba | Acción de Diagnóstico | Resultado Correcto Esperado |
| :--- | :--- | :--- |
| **Identificación Borne 30** | Medición de tensión respecto a masa | 12 V continuos (sin necesidad de contacto) |
| **Identificación Borne 15** | Medición de tensión respecto a masa | 12 V solo con contacto activado |
| **Identificación Borne 31** | Medición de resistencia respecto a chasis | 0 Ω (continuidad perfecta a masa) |
| **Puente en bornes 1-2 de Trinaria** | Insertar puente en conector de trinaria | El embrague electromagnético del compresor se conecta |
| **Puente en bornes 3-4 de Trinaria** | Insertar puente en conector de trinaria | El electroventilador arranca en velocidad máxima (II vel.) |

## Interpretación y errores frecuentes

* Invertir los puentes en el conector de la trinaria (puentear 1-4 o 2-3); puede provocar un cortocircuito a masa o fundido de fusibles de la instalación.
* Intentar diagnosticar un fallo de acoplamiento del compresor sin verificar antes el fusible de la turbina de aire fresco; si la turbina no gira, el compresor se inhibe eléctricamente.

## Verificación final

Verificar el encendido de los componentes correspondientes al realizar los puentes de prueba y la ausencia de códigos de avería tras borrar la memoria con la máquina de diagnosis.

## Seguridad y normativa

Utilizar siempre cables puente con fusible aéreo intercalado de 5 A para evitar daños en las UCEs durante las pruebas de simulación.

💡 ¿Necesitas que adaptemos alguno de estos esquemas en ejercicios prácticos de búsqueda de averías en panel de entrenamiento para los alumnos en el taller?
