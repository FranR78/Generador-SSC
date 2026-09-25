---
id: ssc.adaptacion-compresor-embrague.3-circuito-frigorigeno-1-al-4
modulo: ssc
unidad: clima
nt: 684
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Sustitución de compresor de regulación externa por compresor con embrague"
menu: "Sustitución de compresor de regulación"
grupo: "Circuito frigorífico"
clave: adaptacion-compresor-embrague
area: climatizacion
sistema: "circuito-frigorifico"
fuentes: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, págs. 246-249"
relacionados: ["compresor", "embrague-compresor", "unidad-control-climatizador"]
palabras: ["reles", "instalacion electrica", "cambio de compresor", "negativo por pulsos"]
---

## Objeto y alcance

Adaptación de la instalación eléctrica para montar un compresor equipado con acoplamiento electromagnético en un vehículo que equipaba originalmente un compresor de cilindrada variable de regulación externa (pág. 246, 248).

## Condiciones previas

- Circuito frigorífico descargado y despresurizado.
- Contacto del vehículo quitado y batería desconectada.
- Identificación de los dos cables de la electroválvula de regulación externa original (un cable con +12 V y otro con masa por pulsos PWM) (pág. 246, 248).

## Equipo y material

- Relé automotriz estándar de 4 bornes (contactos 30, 85, 86, 87) con portarrelé (pág. 246, 248).
- Cableado eléctrico, portafusible aéreo con fusible de protección y conectores aislados.
- Equipo de diagnosis para codificación de UCE (método oficial) (pág. 247).

## Pasos

- **Método Oficial (con modificación de software en UCE)**:
  1. Conectar el cable de +12 V procedente de la antigua válvula reguladora al cable positivo (marrón) del compresor nuevo (pág. 246).
  2. Conectar la línea de +12 V directo de batería (a través de fusible) al terminal 86 del relé (pág. 247).
  3. Conectar una masa (-) directa de batería al terminal 30 del relé (pág. 247).
  4. Conectar el cable de masa por pulsos procedente de la UCE al terminal 85 del relé (pág. 247).
  5. Conectar la salida del terminal 87 del relé al cable de masa (negro/blanco) del nuevo compresor (pág. 247).
  6. Acceder con el equipo de diagnosis a la UCE del vehículo y modificar la configuración de la salida de masa por pulsos a salida de masa continua (pág. 247).

- **Método Alternativo / Extraoficial (sin modificación de software en UCE)**:
  1. Conectar el cable de masa (negro/blanco) del nuevo compresor directamente a una masa (-) de batería (pág. 248).
  2. Conectar una línea de +12 V directo de batería (a través de fusible) al terminal 30 del relé (pág. 248).
  3. Conectar el terminal 86 del relé a masa (-) directa de batería (pág. 248).
  4. Conectar el cable de +12 V procedente de la antigua válvula de regulación al terminal 85 del relé (pág. 249).
  5. Conectar el terminal 87 del relé al cable positivo (marrón) del nuevo compresor (pág. 249).
  6. Aislar y anular el cable de masa por pulsos de la antigua electroválvula (pág. 249).

## Valores de referencia

Tensión de alimentación: +12 V (pág. 246, 248).

## Verificación final

Conectar el climatizador desde el salpicadero y verificar que el relé conmuta permitiendo el acoplamiento magnético del embrague del compresor sin generar fallos en UCE.

## Seguridad y normativa

Instalar siempre un fusible aéreo en la toma de positivo directo de batería para evitar cortocircuitos e incendios en la instalación eléctrica.
