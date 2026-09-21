---
id: ssc.sin-clasificar.diagnostico-por-subenfriamiento-y-recalentamiento
modulo: ssc
unidad: clima
nt: 240
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico Por Subenfriamiento Y Recalentamiento"
menu: "Diagnóstico Por Subenfriamiento Y Reca"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Determinar la carga exacta de refrigerante y el estado de la válvula de expansión calculando los valores de subenfriamiento y recalentamiento. Se aplica a la localización de averías en el circuito frigorífico.

## Fundamento

- **Subenfriamiento (SR):** Diferencia entre la temperatura de condensación (leída en la escala de temperatura del manómetro de Alta Presión) y la temperatura real medida con termómetro de contacto a la salida del condensador.  
  \[SR = T_{condensación (manómetro HP)} - T_{salida condensador (termómetro)}\]  
- **Recalentamiento (RC):** Diferencia entre la temperatura real medida a la salida del evaporador (aspiración del compresor) y la temperatura de evaporación (leída en la escala del manómetro de Baja Presión).  
  \[RC = T_{salida evaporador (termómetro)} - T_{evaporación (manómetro BP)}\]

## Condiciones previas

- Motor en marcha y climatizador funcionando al máximo rendimiento.  
- Temperatura exterior > 16  ºC.

## Equipo y material

- Puente de manómetros (HP y BP).  
- Termómetro digital de contacto de dos sondas.

## Desarrollo y diagnóstico

1. Conectar los manómetros de HP y BP a las tomas de servicio.  
2. Colocar las sondas de contacto a la salida del condensador y a la salida del evaporador.  
3. Calcular SR y RC y comparar con los límites nominales (2  ºC a  10  ºC):  
   - **Falta de fluido refrigerante:** Subenfriamiento DÉBIL (< 2  ºC) + Recalentamiento ALTO (> 10  ºC).  
   - **Exceso de fluido refrigerante:** Subenfriamiento ALTO (> 10  ºC) + Recalentamiento DÉBIL (< 2  ºC).  
   - **Filtro deshidratante saturado / Obstruido:** Subenfriamiento ALTO (> 10  ºC) + Recalentamiento NORMAL (2  a  10  ºC) + Caída de temperatura a lo largo del filtro.  
   - **Compresor averiado (Pérdida de compresión):** BP demasiado alta + HP demasiado baja.  
   - **Aire / Incondensables en el circuito (Mal vacío):** BP alta + HP alta + Subenfriamiento NORMAL.

## Valores de referencia

| Magnitud calculada | Margen de correcto funcionamiento | Diagnóstico por desviación |
|---|---|---|
| **Subenfriamiento (SR)** | **2 ºC a 10 ºC** | < 2  ºC: Falta de gas / > 10  ºC: Exceso de gas |
| **Recalentamiento (RC)** | **2 ºC a 10 ºC** | < 2  ºC: Exceso de gas / > 10  ºC: Falta de gas |
| **Temperatura de aire soplado** | **2 ºC a 10 ºC** | Para temperatura ambiente entre 15 ºC y 25 ºC |

## Interpretación y errores frecuentes

- **Jamás recargar fluido sin haber controlado previamente el subenfriamiento y el recalentamiento.**  
- Confundir la falta de gas con una válvula de expansión adaptable inadaptada (una aguja de diámetro incorrecto provoca poco caudal, alta presión y temperatura de evaporación elevada simulando falta de carga).

## Verificación final

Verificar que tras el ajuste de carga o reparación, tanto el SR como el RC se estabilicen entre 2  ºC y 10  ºC.

## Imágenes requeridas

- Medición de temperaturas y presiones para el cálculo de subenfriamiento y recalentamiento — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 203 y 209
