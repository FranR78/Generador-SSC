---
id: ssc.sin-clasificar.comprobacion-de-la-cantidad-de-refrigerante-a-motor-parado
modulo: ssc
unidad: clima
nt: 397
tipo: proceso
subtipo: diagnostico
titulo: "Comprobación De La Cantidad De Refrigerante A Motor Parado"
menu: "Comprobación De La Cantidad De Refrige"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Determinar el estado de la carga de fluido refrigerante y la presencia de aire o gases no condensables en el circuito midiendo presiones a motor parado.

## Fundamento

En reposo (motor detenido), las presiones de alta y baja del circuito se igualan y dependen de la temperatura del refrigerante (relación presión-temperatura de saturación). Como regla general, la presión de reposo se sitúa en función de la temperatura ambiente y de la temperatura del condensador. La temperatura ideal en el condensador se sitúa 20 ºC por encima de la ambiental.

## Condiciones previas

- Motor parado.  
- Presiones de alta y baja igualadas en reposo.

## Equipo y material

- Puente de manómetros.  
- Termómetro de contacto y termómetro ambiental.

## Desarrollo

- Conectar las mangueras del puente de manómetros a las tomas de servicio de alta y baja presión del vehículo.  
- Medir la temperatura ambiente y la temperatura sobre la superficie del condensador.  
- Comprobar en la tabla técnica la presión que debe corresponder a la temperatura leída.  
- Comparar el valor de la tabla con la lectura del manómetro:  
  * **Si la presión es mayor que el valor de tabla:** existe aire o gases no condensables en el circuito (o bien exceso de carga).  
  * **Si la presión es menor que el valor de tabla:** falta líquido refrigerante (fuga o subcarga).

## Valores de referencia

| Estado de la carga / Parámetro | Presión de referencia (Baja / Alta) | Temp. Condensador | Temp. Ambiente | Temp. Motor / Manómetro |
|---|---|---|---|---|
| **Presión de alta mínima en reposo** | **9 bar** | **40 ºC** | **20 ºC** | No documentado en fuentes |
| **Presión de alta mínima en reposo** | **12 bar** | **50 ºC** | **30 ºC** | No documentado en fuentes |
| **Presión de alta mínima en reposo** | **15,5 bar** | **60 ºC** | **40 ºC** | No documentado en fuentes |
| **Carga correcta** | **6,5 bar** | **24 ºC a 26 ºC** | **24 ºC a 26 ºC** | **25 ºC motor / 24-26 ºC manómetro** |
| **Exceso de carga** | **7,5 bar** | **24 ºC a 26 ºC** | **24 ºC a 26 ºC** | **30 ºC motor / 30 ºC manómetro** |
| **Asociación de gases (Aire)** | **7,5 bar** | **24 ºC a 26 ºC** | **24 ºC a 26 ºC** | **24-26 ºC motor / 30 ºC manómetro** |
| **Falta de líquido refrigerante** | **6,5 bar** | **30 ºC** | **30 ºC** | **25 ºC motor / 30 ºC manómetro** |

## Interpretación y errores frecuentes

- Lectura de presión mayor a la de la tabla con motor parado: indica presencia de aire residual atrapado por una evacuación/vacío incompleto.  
- Lectura de presión menor a la de la tabla: indica falta de líquido refrigerante por fugas.

## Verificación final

Coincidencia de la presión del manómetro con el valor de la tabla de saturación correspondiente a la temperatura medida.

## Imágenes requeridas

- Conexión del puente de manómetros para verificación de carga a motor parado — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 2
