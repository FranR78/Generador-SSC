---
id: ssc.sin-clasificar.bloqueo-y-desbloqueo-electronico-de-la-columna-de-direccion
modulo: ssc
unidad: sin-clasificar
nt: 615
tipo: proceso
subtipo: fundamento
titulo: "Bloqueo Y Desbloqueo Electrónico De La Columna De Dirección"
menu: "Bloqueo Y Desbloqueo Electrónico De La"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la lógica de control, la electromecánica interna y los sistemas de seguridad antimanipulación del bloqueo eléctrico de la dirección. Aplica al mantenimiento del conjunto de la columna de dirección.

## Fundamento

Conversión de movimiento rotativo a desplazamiento lineal del perno mediante reductor de tornillo sin fin. Verificación de posiciones mediante sensores Hall e intercambio de claves con el inmovilizador por CAN-Bus.

## Desarrollo

* **Mecanismo de Bloqueo:** Al parar el motor y abrir la puerta del conductor, la UCE alimenta el motor eléctrico, girando el tornillo sin fin para introducir el perno en la columna de dirección.
* **Mecanismo de Desbloqueo:**
  - Caso A (Acceso con llave por puerta): Al entrar y cerrar la puerta, la UCE de red de a bordo consulta las antenas interiores. Si hay llave autorizada, el inmovilizador ordena el desbloqueo a la UCE de la columna, invirtiendo la polaridad del motor para subir el perno.
  - Caso B (Acceso sin llave / puertas abiertas): El desbloqueo se ejecuta al accionar el pulsador de arranque en la consola central tras validar la llave interior.
* **Control de Posición:** Sensores Hall integrados en la placa leen las posiciones finales del perno (bloqueado / desbloqueado).
* **Protección Antimanipulación:** La UCE se aloja en una jaula de metal retenida por un perno fijador. Este perno solo puede presionarse hacia dentro para desmontar la UCE si la columna está mecánicamente DESBLOQUEADA. Si la columna está bloqueada, es imposible desmontarla de la jaula.

## Valores de referencia

| Parámetro / Condición | Especificación Técnica |
| :--- | :--- |
| Condición obligatoria de desmontaje | Columna de dirección en posición DESBLOQUEADA |

## Interpretación y errores frecuentes

* Forzar el desmontaje con la columna bloqueada: Provoca la rotura inservible del actuador al no poder presionar el perno fijador antimanipulación.

## Verificación final

Comprobar en el equipo de diagnosis que las señales de los sensores Hall indican "desbloqueado" al conectar el contacto y "bloqueado" al apagar el motor y abrir la puerta.

## Imágenes requeridas

- Actuador con motor de bloqueo y perno fijador antimanipulación — Fuente: 5. Confort.pdf, pág. 106
