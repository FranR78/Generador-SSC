---
id: ssc.sin-clasificar.comprobacion-de-presiones-de-trabajo-y-diagnostico-hidraulico
modulo: ssc
unidad: clima
nt: 502
tipo: proceso
subtipo: diagnostico
titulo: "Comprobación De Presiones De Trabajo Y Diagnóstico Hidráulico"
menu: "Comprobación De Presiones De Trabajo Y"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el procedimiento de evaluación de las presiones de alta y baja en el circuito frigorífico, tanto en reposo como en funcionamiento, para diagnosticar averías hidráulicas y anomalías en la carga de refrigerante. Se aplica en el mantenimiento y reparación de sistemas de aire acondicionado con compresor fijo o variable.

## Fundamento

El estado termodinámico del fluido refrigerante en el circuito depende de la temperatura ambiental y de la capacidad de compresión. En un sistema con compresor variable, la centralita regula la carrera para mantener las presiones estables; en un sistema con compresor fijo, las presiones varían proporcionalmente con el régimen del motor y la temperatura exterior.

## Condiciones previas

- Válvulas de la estación de carga completamente cerradas.  
- Motor arrancado y mantenido de forma estable a 1.500 rpm.  
- Climatizador conectado con la turbina de aire fresco a máxima velocidad.

## Equipo y material

- Estación de carga o puente de manómetros (líneas de alta y baja presión).  
- Termómetro ambiental.

## Desarrollo

1. Conectar los latiguillos de "ALTA" y "BAJA" a las tomas de servicio del vehículo.  
2. Arrancar el motor a 1.500 rpm y conectar el aire acondicionado al máximo.  
3. Leer los manómetros y verificar si las presiones corresponden al tipo de compresor instalado:  
   - **Compresor variable:** La presión de ALTA se mantiene constante entre 8 y 10 bar (pudiendo subir a 12 bar con temperatura exterior muy alta) y la de BAJA constante a 2 bar.  
   - **Compresor fijo:** La presión de ALTA oscila entre 10 y 20 bar y la de BAJA entre 0,5 y 2,5 bar.  
4. Evaluar las desviaciones hidráulicas según las lecturas obtenidas:  
   - *Presiones ALTA y BAJA normales pero aire no enfría:* Exceso de aceite, presencia de aire/humedad en el circuito o válvula de expansión bloqueada cerrada.  
   - *Tubería de baja presión más fría que la carcasa del evaporador:* Válvula de expansión demasiado abierta.  
   - *Presiones de ALTA y BAJA elevadas que bajan al enfriar el condensador con agua:* Exceso de refrigerante, condensador sucio o avería en el electroventilador.  
   - *Presiones de ALTA y BAJA se igualan rápidamente al parar el motor o fluctúan en marcha:* Partículas bajo la válvula de descarga o fallo interno en las láminas del compresor.  
   - *Presiones de ALTA y BAJA no varían al conectar:* Falta grave de refrigerante en el sistema.  
   - *Tubería de baja más fría que el evaporador:* Obstrucción en el tramo de baja presión.  
   - *Formación de hielo en el filtro deshidratador o línea de líquido:* Obstrucción física en la tubería o filtro bloqueado.

## Valores de referencia

| Parámetro / Condición | Presión de BAJA | Presión de ALTA | Temp. Aireadores / Estado |
|---|---|---|---|
| **Compresor Variable (Servicio normal)** | **1,8 a 2,2 bar** (o 2 bar const.) | **8 a 12 bar** | Normal |
| **Compresor Variable (Carga normal 550 g)** | **1,4 bar** (a 1.500 rpm) | **12 bar** (a 1.500 rpm) | **1,7 ºC** (Reposo: 5 bar a 2,4 ºC amb.) |
| **Compresor Variable (Carga baja 300 g)** | **1,8 bar** (a 1.500 rpm) | **9 a 10 bar** (a 1.500 rpm) | **2,4 ºC** (Reposo: 4,5 bar) |
| **Compresor Variable (Carga excesiva 1.000 g)** | **1,6 bar** (a 1.500 rpm) | **10,5 bar** (a 1.500 rpm) | **1,1 ºC** (Reposo: 5 bar) |
| **Compresor Fijo R134a (Carga normal)** | **1,5 a 2,5 bar** (a 1.500 rpm) | **13,5 a 15 bar** (a 1.500 rpm) | Normal |
| **Compresor Fijo R134a (Carga baja)** | **0,5 a 1 bar** (a 1.500 rpm) | **6,5 a 9 bar** (a 1.500 rpm) | Alta temp. aireadores |
| **Compresor Fijo R134a (Carga excesiva)** | **2,5 a 3,5 bar** (a 1.500 rpm) | **19 a 24 bar** (a 1.500 rpm) | Alta temp. aireadores |
| **Variación según Temp. Exterior (15 ºC)** | **1,2 a 1,5 bar** | **8 a 10 bar** | Presión reposo: **3,9 bar** |
| **Variación según Temp. Exterior (20 ºC)** | **1,5 a 1,8 bar** | **9 a 12 bar** | Presión reposo: **4,7 bar** |
| **Variación según Temp. Exterior (26 ºC / 25 ºC)** | **1,8 a 2 bar** | **12 a 14,5 bar** | Presión reposo: **5,5 bar** |
| **Variación según Temp. Exterior (32 ºC / 30 ºC)** | **2,1 a 2,3 bar** | **14,5 a 18 bar** | Presión reposo: **6,6 bar** |
| **Variación según Temp. Exterior (37 ºC / 35 ºC)** | **2,3 a 2,5 bar** | **18 a 20 bar** | Presión reposo: **7,5 bar** (40ºC: 8,8 bar; 45ºC: 9,8 bar) |

## Interpretación y errores frecuentes

- **Descenso de baja presión a menos de 0,5 bar al acelerar en compresores fijos:** Indica falta acusada de refrigerante y existe riesgo inminente de congelación del evaporador.  
- **Interpretar presiones sin medir la temperatura ambiente:** Las presiones de trabajo no son fijas; dependen directamente de la temperatura exterior.

## Verificación final

Las presiones de alta y baja se estabilizan dentro de los márgenes tabulados correspondientes a la temperatura exterior y al tipo de compresor instalado.
