---
id: ssc.sin-clasificar.autodiagnostico-del-sistema-de-climatizacion
modulo: ssc
unidad: sin-clasificar
nt: 508
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnóstico Del Sistema De Climatización"
menu: "Autodiagnóstico Del Sistema De Climati"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir las funciones de diagnosis electrónica integradas en la unidad de control del climatizador automático para la verificación de sensores, actuadores y memoria de averías mediante un equipo OBD.

## Fundamento

La centralita electrónica del climatizador supervisa continuamente los componentes eléctricos. Registra los fallos propios en su memoria y recibe datos de sensores compartidos (temperatura exterior, velocidad, régimen de motor) transmitidos por bus CAN desde el cuadro de instrumentos, la UCE de motor y la red de a bordo.

## Condiciones previas

- Encendido conectado (15 ON).  
- Equipo de diagnosis compatible conectado al puerto OBD del vehículo.

## Equipo y material

- Equipo / máquina de autodiagnóstico OBD.

## Desarrollo

Seleccionar la dirección del sistema de climatización y ejecutar las funciones disponibles:  
1. **Consultar la memoria de averías:**  
   - *Averías fugaces o esporádicas:* Se borran automáticamente tras 30 o 40 ciclos de arranque si no vuelven a detectarse.  
   - *Averías actuales o permanentes:* Quedan almacenadas en la UCE y solo se pueden borrar manualmente desde el equipo tras reparar el componente.  
2. **Diagnóstico de elementos actuadores:**  
   - *Test de segmentos:* Enciende todos los dígitos y símbolos del display para detectar fallos de pantalla.  
   - *Electroventilador y turbina:* Hace actuar el electroventilador del radiador y la turbina de aire fresco en todo su margen de velocidades.  
   - *Embrague del compresor:* Conecta y desconecta cíclicamente la bobina electromagnética.  
   - *Motores de trampillas:* Activa los servomotores para comprobar el movimiento físico y la variación de temperatura por las salidas.  
3. **Ajuste básico:**  
   - Desplaza los servomotores de extremo a extremo para memorizar las posiciones límite de mínimo y máximo de cada trampilla.  
   - *Ejecución obligatoria:* Al sustituir cualquier servomotor o al reemplazar la unidad de control del climatizador.  
4. **Lectura de valores de funcionamiento individual (Bloque de valores de medición):**  
   - Comprobar estado del compresor (marcha/paro, revoluciones, carga y presión hidráulica del sensor MAP de alta).  
   - Verificar señales del cuadro (rpm de motor, velocidad del vehículo, tiempo transcurrido desde la parada).  
   - Leer posición teórica y real de las trampillas (temperatura, central, deshielo, recirculación).  
   - Verificar lectura de sondas térmicas (exterior, entrada de aire, habitáculo, líquido refrigerante).  
   - Verificar fotosensor solar (debe variar el valor al proyectar luz intensa) y tensión de alimentación (debe ser similar a batería).  
   - Monitorizar el porcentaje de activación de la electroválvula del compresor, velocidades del electroventilador y señal de corte por alternador o subida de ralentí.

## Valores de referencia

| Función / Parámetro | Valor de referencia / Criterio |
|---|---|
| **Borrado automático de averías esporádicas** | Tras **30 a 40 arranques** sin fallo |
| **Tensión de alimentación en bloque de valores** | Aprox. igual a la **tensión de batería** |
| **Ajuste básico** | Memorización de topes mínimo y máximo |

## Interpretación y errores frecuentes

- **Omitir el Ajuste Básico tras cambiar un servomotor o la UCE:** La centralita no reconocerá las posiciones reales de tope, provocando fallos en la mezcla de temperatura y errores de posicionado.  
- **Buscar averías de la sonda exterior en la UCE de Clima:** La avería de la sonda de temperatura exterior se almacena en la UCE del Cuadro de Instrumentos y se retransmite por CAN-Bus.

## Verificación final

Memoria de averías limpia (sin códigos permanentes) y respuesta correcta de actuadores y valores de medición en tiempo real.
