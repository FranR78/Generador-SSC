---
id: ssc.conductores-electricos-cableado.no2-v2-diagnostico-con-polimetro-y-oscil
modulo: ssc
unidad: clima
nt: 138
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Conductores eléctricos y dimensionamiento de cableado"
menu: "Conductores eléctricos y dimensionamie"
grupo: "Herramientas y medida"
clave: conductores-electricos-cableado
area: electricidad-electronica
sistema: "herramientas-y-medida"
fuentes: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, págs. 15-16"
relacionados: ["resistencia-electrica", "intensidad-corriente-electrica", "ley-de-ohm"]
palabras: ["conductores", "cables", "cobre", "sección", "resistividad", "caída de tensión", "densidad de corriente"]
---

## Objeto

Dimensionar la sección y el material de los cables eléctricos para transportar la corriente minimizando las caídas de tensión y previniendo el sobrecalentamiento de la instalación (págs. 15-16).

## Fundamento

Los cables opone una resistencia interna directamente proporcional a su longitud y a la resistividad del material, e inversamente proporcional a su sección (pág. 15).

## Desarrollo

Magnitudes que determinan la resistencia de un cable:
1. Longitud (L): expresada en metros. A mayor longitud, mayor resistencia (pág. 15).
2. Sección (S): expresada en mm². A mayor sección (grosor), menor resistencia al paso de los electrones (pág. 15).
3. Resistividad (ρ): resistencia de un cable de 1 m de largo y 1 mm² de sección a 20 ºC. El cobre se utiliza de forma generalizada por tener baja resistividad (ρ = 0,017 Ω·mm²/m), gran flexibilidad y buena resistencia a las vibraciones (págs. 15-16).

Criterios de cálculo en automoción:
- Fórmula de resistencia del cable: R = (ρ · L) / S (pág. 15).
- Caída de tensión máxima admisible (ΔV): no debe superar el 2,5% de la tensión nominal (en sistemas de 12 V, la caída máxima es de 0,3 V) (pág. 15).
- Densidad de corriente recomendada: no rebasar los 5 A/mm² para prevenir recalentamientos por vibración y temperatura (pág. 16).
- Sección mínima por resistencia mecánica: 0,5 mm² (pág. 16).
- Fórmula para cálculo de sección mínima: S = ρ · (L / ΔV) · I (pág. 16).

## Valores de referencia

- Resistividad del Cobre (Cu): ρ = 0,017 Ω·mm²/m (pág. 15).
- Caída de tensión máxima admisible a 12 V: ΔV ≤ 0,3 V (2,5%) (pág. 15).
- Densidad máxima de corriente en automoción: 5 A/mm² (pág. 16).
- Sección mínima mecánica de cable: 0,5 mm² (pág. 16).

## Errores de concepto frecuentes

- Seleccionar un cable con sección inferior a la calculada, lo que ocasiona un fuerte incremento de temperatura por rozamiento de los electrones que puede quemar el aislante o provocar un incendio (págs. 15-16).
