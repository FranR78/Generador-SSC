---
id: ssc.sin-clasificar.diagnosis-eobd-del-porton-trasero-electrico
modulo: ssc
unidad: sin-clasificar
nt: 621
tipo: proceso
subtipo: diagnostico
titulo: "Diagnosis Eobd Del Portón Trasero Eléctrico"
menu: "Diagnosis Eobd Del Portón Trasero Eléc"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe las comprobaciones y ajustes mediante equipo de diagnosis conectado a la dirección **6D - Sistema electrónico de la puerta del maletero**. Aplica a la localización de averías y codificación del portón.

## Fundamento

Comunicación por protocolo EOBD/CAN-Bus con la UCE del portón para memorización de topes en la EEPROM, lectura de sensores y test de componentes.

## Condiciones previas

Equipo de diagnosis conectado al conector OBD2, contacto conectado (borne 15) y zona de recorrido del portón totalmente despejada.

## Equipo y material

Equipo de diagnosis compatible con el grupo VAG (VAS / ODIS / VCDS).

## Desarrollo

1. Conectar la máquina de diagnosis y acceder a la dirección **6D - Sistema electrónico de la puerta del maletero**.
2. **Lectura de Memoria de Averías y Bloques de Medición:**
   - Seleccionar "Leer bloque de valores de medición" para verificar consumos de corriente de los motores, estado de los microinterruptores y señales de los sensores Hall.
3. **Ajuste Básico de la Electrónica del Portón Trasero:**
   - Seleccionar "6D - Ajuste básico".
   - Confirmar la ausencia de obstáculos en el área de movimiento.
   - Iniciar el ajuste: la UCE desplaza el portón a los límites de cierre y de apertura máxima con la función antiaprisionamiento desactivada para guardar los topes de posición.
4. **Diagnosis de Actuadores:**
   - Seleccionar "6D - Diagnosis de actuadores".
   - Ejecutar individualmente: 1-Abrir portón trasero, 2-Cerrar portón trasero, 3-Abrir gradualmente, 4-Cerrar gradualmente, 5-Zumbador de aviso.
5. **Codificación:**
   - Seleccionar "6D - Codificar la Unidad de Control" en caso de sustituir la UCE para configurar opciones como Easy Open o gancho de remolque.

## Valores de referencia

| Función de Diagnosis | Dirección EOBD / Parámetro |
| :--- | :--- |
| Módulo de diagnosis del portón | Dirección 6D (Electrónica del portón trasero) |
| Función antiaprisionamiento en Ajuste Básico | Desactivada totalmente durante la prueba de adaptación |

## Interpretación y errores frecuentes

* Tocar el portón durante el Ajuste Básico: Aborta el aprendizaje de topes y deja el sistema inoperativo en modo automático.
* No despejar el entorno en el Ajuste Básico: Riesgo de daños materiales al estar desactivada la función antiaprisionamiento durante la rutina.

## Verificación final

Verificar que no quedan códigos de avería registrados y que el portón realiza sus recorridos completos y automáticos desde todos los pulsadores.

## Imágenes requeridas

- Capturas del equipo de diagnosis en la dirección 6D — Fuente: 5. Confort.pdf, pág. 113
