---
id: ssc.sin-clasificar.autodiagnostico-y-funciones-de-control-del-climatronic
modulo: ssc
unidad: sin-clasificar
nt: 165
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnóstico Y Funciones De Control Del Climatronic"
menu: "Autodiagnóstico Y Funciones De Control"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Sistematizar la secuencia de diagnóstico electrónico, consulta y borrado de averías, lectura de bloques de medición y test de actuadores en la Unidad de Control del Climatronic -J255-. Se aplica en la localización de fallos en el sistema de climatización.

## Fundamento

La UCE -J255- dispone de una memoria no volátil que registra fallos de sensores, actuadores y líneas de comunicación, diferenciando entre averías estáticas y esporádicas (/SP). La comunicación con el equipo de diagnosis se realiza en transmisión rápida de datos vía conector de 16 polos. La UCE cuenta además con "Protección de componentes" (seguro antirrobo) que limita sus funciones si se instala en otro vehículo sin autorizar.

## Condiciones previas

- Tensión de batería del vehículo correcta (> 12,2 V).  
- Fusibles del sistema de climatización en buen estado.  
- Encendido conectado ("borne 15 ON") para activar la interfaz de diagnosis -J533-.

## Equipo y material

- Equipo de diagnosis homologado (VAS 5051 / VAS 5052).  
- Cable de diagnóstico de 16 polos (-VAS 5051/5A-).

## Desarrollo

1. Conectar el equipo de diagnosis al puerto de 16 polos del vehículo con el encendido desconectado.  
2. Conectar el encendido y seleccionar la función "Autodiagnosis del vehículo", dirección "08 - Electrónica de climatización/calefacción".  
3. Seleccionar la función "02 - Consultar la memoria de averías" para analizar los códigos DTC memorizados y las condiciones de entorno (kilometraje, fecha, temperatura, tensión).  
4. Ejecutar la función "03 - Diagnosis de actuadores" para activar secuencialmente servomotores, válvula del compresor -N280-, ventiladores del radiador -V7/V177-, luneta térmica -Z1- y test de segmentos de pantalla (solo realizable a velocidad < 5 km/h).  
5. Acceder a "08 - Leer bloque de valores de medición" para verificar parámetros de sensores térmicos, presiones e intensidades de corriente en tiempo real.  
6. Subsanar las averías detectadas, realizar el "04 - Ajuste básico" y seleccionar "05 - Borrar la memoria de averías".

## Valores de referencia

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Velocidad máxima para test de actuadores** | < 5 km/h | Vehículo en prueba de taller |
| **Código de dirección de diagnosis** | Dirección 08 | Comunicación con UCE -J255- |
| **Tensión mínima de alimentación** | > 12,2 V | Medido en Borne 30 de J255 |

## Interpretación y errores frecuentes

- Desconectar el encendido entre la consulta de averías y el borrado; la UCE impide el borrado si se corta la comunicación mostrando el mensaje "Memoria de averías aún sin consultar".  
- Montar un panel de mandos -J255- procedente de otro vehículo sin anular la protección de componentes; la UCE desactiva las funciones de confort dejando únicamente activas las de desempañado de seguridad.

## Verificación final

Confirmación del mensaje "Memoria de averías borrada" en la pantalla del equipo de diagnosis y verificación de la ausencia de parpadeo en las teclas del panel.

## Seguridad y normativa

Fijación del equipo de diagnosis con el cinturón de seguridad en el asiento trasero durante pruebas dinámicas de conducción con dos técnicos.

## Imágenes requeridas

- Conexión del equipo de diagnosis VAS 5051/5A al conector de diagnóstico de 16 polos del vehículo — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 9
