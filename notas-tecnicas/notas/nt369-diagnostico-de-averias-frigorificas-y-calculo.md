---
id: ssc.sin-clasificar.diagnostico-de-averias-frigorificas-y-calculo-de-parametros
modulo: ssc
unidad: clima
nt: 369
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Averías Frigoríficas Y Cálculo De Parámetros"
menu: "Diagnóstico De Averías Frigoríficas Y "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Aislar averías mecánicas y frigoríficas evaluando las presiones de manómetro, el subenfriamiento, el sobrecalentamiento y el fenómeno de pre-expansión.

## Fundamento

Las lecturas de la alta y baja presión reflejan el rendimiento del compresor, condensador y válvula de expansión. El cálculo del subenfriamiento indica la eficacia de condensación, y el sobrecalentamiento determina el llenado del evaporador.

## Condiciones previas

Motor en marcha a régimen constante con el aire acondicionado conectado a máxima potencia.

## Equipo y material

Puente de manómetros de HP y BP, y termómetro digital de contacto.

## Desarrollo y diagnóstico

- **Valores normales en manómetros:**  
  - *Alta Presión (HP):* 16 a 22 bar.  
  - *Baja Presión (BP):* 1 a 3 bar.  
- **Cálculo de parámetros de control:**  
  - *Subenfriamiento:* Temp. de condensación (leída en la escala del manómetro HP) - Temp. medida con termómetro a la salida del condensador. Valor óptimo: **5 ºC a 7 ºC**.  
  - *Sobrecalentamiento:* Temp. medida con termómetro a la salida del evaporador - Temp. de evaporación (leída en la escala del manómetro BP). Valor óptimo: **2 ºC a 10 ºC**.  
  - *Pre-expansión en filtro deshidratante:* Medir temp. a la entrada y salida del filtro. En buen estado, las temperaturas son casi iguales. Si la diferencia es **> 6 ºC**, el filtro está colmatado y debe sustituirse.  
- **Cuadro de averías comunes:**  
  - *El compresor no gira:* Correa auxiliar rota, embrague roto, fallo de alimentación (fusibles/relés), presostato roto o compresor gripado.  
  - *No enfría con compresor activo:* Exceso de gas, compresor con poco poder de succión, válvula de expansión rota, carga incorrecta o turbina de ventilación parada.  
  - *Baja presión insuficiente:* Válvula de expansión rota, evaporador congelado (fallo de sonda de temp.), compresor defectuoso.  
  - *Alta presión excesiva:* Mala refrigeración del condensador (fallo de motoventiladores), exceso de gas o condensador sucio/obstruido.  
  - *Alta presión insuficiente:* Carga insuficiente de gas, filtro deshidratante obstruido o válvula de expansión rota.

## Valores de referencia

| Parámetro de diagnóstico | Margen nominal correcto | Diagnóstico por desviación |
|---|---|---|
| **Alta Presión (HP) en manómetro** | **16 a 22 bar** | < 16 bar: Subcarga / > 22 bar: Sobrecarga o mala condensación |
| **Baja Presión (BP) en manómetro** | **1 a 3 bar** | < 1 bar: Evaporador congelado / > 3 bar: Compresor sin succión |
| **Subenfriamiento del condensador** | **5 ºC a 7 ºC** | Fuera de rango indica problema de condensación/carga |
| **Sobrecalentamiento del evaporador** | **2 ºC a 10 ºC** | Fuera de rango indica mal llenado del evaporador |
| **Salto térmico en filtro deshidratante** | **< 6 ºC de diferencia** | **> 6 ºC:** Filtro colmatado por pre-expansión |

## Interpretación y errores frecuentes

- Cambiar la válvula de expansión sin medir la pre-expansión del filtro deshidratante: si el salto térmico en el filtro es > 6 ºC, la caída de presión se produce en el filtro y no en la válvula.

## Verificación final

Confirmar la estabilización de las presiones en los márgenes de 16-22 bar (HP) y 1-3 bar (BP) tras la reparación.

## Seguridad y normativa

Uso obligatorio de gafas de protección durante la conexión y desconexión de los latiguillos de manómetro.

## Imágenes requeridas

- Manómetros de lectura de alta y baja presión para R134a — Fuente: LA CLIMATIZACIÓN.pdf, pág. 158
