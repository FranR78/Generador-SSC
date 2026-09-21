---
id: ssc.sin-clasificar.gestion-termica-de-baterias-en-vehiculos-hibridos
modulo: ssc
unidad: clima
nt: 265
tipo: proceso
subtipo: fundamento
titulo: "Gestión Térmica De Baterías En Vehículos Híbridos"
menu: "Gestión Térmica De Baterías En Vehícul"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar las opciones tecnológicas para el acondicionamiento térmico de las baterías de alta tensión (Níquel-Metal e Iones de Litio) en vehículos híbridos y eléctricos. Se aplica en el mantenimiento y diagnóstico de sistemas de propulsión alternativa.

## Fundamento

Las baterías de alta tensión deben funcionar en una horquilla térmica estricta. Por encima de +40 ºC la vida útil disminuye drásticamente; por debajo de -10 ºC la efectividad y la potencia decaen bruscamente. Las diferencias de temperatura entre células individuales no deben superar los 5 a 10 K. Se emplean tres opciones de refrigeración para garantizar una vida útil calculada de 8 a 10 años.

## Desarrollo

* **Opción 1 — Refrigeración por aire del habitáculo:**  
  - Aspira aire ya climatizado del habitáculo (< 40 ºC) y lo hace circular por las células de la batería. Presenta baja eficacia y riesgo de acumular polvo que genera corrientes de fuga.  
* **Opción 2 — Placa evaporadora integrada en el circuito de A/C:**  
  - Conecta una placa evaporadora colocada en la batería directamente al circuito de aire acondicionado del vehículo mediante una válvula de expansión propia. Mantiene la batería por debajo de 40 ºC de forma muy eficaz.  
* **Opción 3 — Circuito secundario de líquido (Agua/Glicol):**  
  - Circuito independiente alimentado por bomba que mantiene la batería entre 15 ºC y 30 ºC. En frío, un calefactor eléctrico calienta el líquido; en caliente, el líquido se enfría en un radiador especial (Chiller) intercambiando calor con el gas refrigerante del A/C.

## Valores de referencia

| Parámetro Térmico de la Batería | Valor numérico especificado | Consecuencia técnica |
|---|---|---|
| **Temperatura crítica superior** | **+40 ºC** | Degrada rápidamente las células y reduce su vida útil |
| **Temperatura crítica inferior** | **-10 ºC** | Reduce drásticamente la potencia y la capacidad de carga |
| **Diferencia máxima entre células** | **5 a 10 K (ºC)** | Desequilibrio térmico entre células |
| **Margen ideal en circuito secundario** | **+15 ºC a +30 ºC** | Mantención por circuito de agua/glicol (Opción 3) |
| **Vida útil calculada de la batería** | **8 a 10 años** | Objetivo de diseño de los fabricantes |

## Interpretación y errores frecuentes

- Sustituir la placa evaporadora sola en la Opción: las placas vienen integradas dentro de la batería y requieren sustituir la batería completa si sufren fugas.

## Verificación final

Confirmar en el equipo de diagnosis que la temperatura de los módulos de la batería se mantiene dentro del rango de 15 a 30 ºC.

## Seguridad y normativa

Formación obligatoria de 2 días ("Electricistas especializados para sistemas de alto voltaje") para intervenir en estos sistemas.
