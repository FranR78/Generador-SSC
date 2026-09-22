---
id: ssc.sin-clasificar.sistema-de-elevalunas-electricos-y-normalizacion
modulo: ssc
unidad: sin-clasificar
nt: 1196
tipo: proceso
subtipo: procedimiento
titulo: "Sistema De Elevalunas Eléctricos Y Normalización"
menu: "Sistema De Elevalunas Eléctricos Y Nor"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe el procedimiento de calibración de topes (normalización), protección antiaprisionamiento y funciones de confort de los elevalunas eléctricos.

## Fundamento

Las UCEs de puerta calculan la posición del cristal y la fuerza del motor. La normalización es el paso previo obligatorio para memorizar los límites superior e inferior, habilitando la subida automática, el antiaprisionamiento y el confort.

## Condiciones previas

Contacto encendido (+15) y cristal correctamente guiado en sus marcos.

## Desarrollo

1. **Subida y bajada estándar:** La UCE J519 consulta el estado de los pulsadores a las UCEs de puerta y autoriza el movimiento del motor.
2. **Procedimiento de Normalización de topes:**
   * Subir manualmente el cristal manteniendo el pulsador accionado hasta llegar al tope mecánico superior.
   * Liberar el pulsador una vez arriba.
   * Volver a accionar y **mantener presionado el pulsador en posición de subida durante unos segundos**.
   * Efectuar a continuación una bajada automática completa para validar el aprendizaje.
3. **Apertura y cierre de confort:** Permite subir o bajar todos los cristales desde la cerradura, mando a distancia o manilla de acceso sin llave (exige normalización previa).
4. **Antiaprisionamiento:** Invierte la marcha del cristal si detecta un obstáculo durante la subida (exige normalización previa).
5. **Bloqueo de elevalunas traseros:** Se activa desde el mando de la puerta del conductor (el pulsador se ilumina en amarillo); anula los mandos traseros.
6. **Protección térmica:** Las UCEs de puerta calculan la temperatura del motor eléctrico e inmovilizan el elevalunas hasta que se enfría.
7. **Función de emergencia:** En caso de avería en la línea LIN-Bus, el cristal solo puede accionarse desde el pulsador de su propia puerta.

## Valores de referencia

| Función de Elevalunas | Condición / Requisito | Resultado del Procedimiento |
| :--- | :--- | :--- |
| **Normalización de topes** | Subir a tope superior + mantener pulsador en subida unos segundos + bajada automática | Memorización de límites; habilita confort y antiaprisionamiento |
| **Bloqueo traseros** | Pulsador en puerta de conductor activado | Testigo amarillo encendido; pulsadores traseros inhabilitados |

## Interpretación y errores frecuentes

* Intentar reparar el antiaprisionamiento tras desconectar la batería; la causa del fallo es únicamente la pérdida de la normalización de topes.

## Verificación final

Verificar la inversión del sentido de marcha del cristal al colocar un objeto blando en el marco superior durante la subida automática.

## Seguridad y normativa

Función antiaprisionamiento de cumplimiento obligatorio para evitar lesiones por atrapamiento.

## Imágenes requeridas

- Esquema de la red de elevalunas eléctricos y comunicación LIN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 42
