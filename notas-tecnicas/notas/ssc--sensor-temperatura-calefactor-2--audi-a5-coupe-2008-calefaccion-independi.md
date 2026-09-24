---
id: ssc.sensor-temperatura-calefactor-2.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 179
tipo: elemento
clase: componente
titulo: "Termosensor 2 para calefactor y calefacción independiente"
codigo: "G587"
menu: "Termosensor 2 para calefactor  G587"
grupo: "Calefacción"
clave: sensor-temperatura-calefactor-2
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Eberspächer"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 67-68, 140"
relacionados: ["sensor-temperatura-calefactor", "unidad-control-calefaccion-adicional"]
palabras: ["G587", "termosensor 2", "vigilancia redundante", "sobretemperatura"]
---

## Misión

Proporcionar una segunda medición redundante de la temperatura del líquido refrigerante en el intercambiador de calor para verificar la plausibilidad del sensor G18 y garantizar la protección térmica redundante del calefactor. (págs. 67, 140).

## Tipos y características

Termosensor NTC montado mediante estribo de sujeción e integrado en el conector de 14 polos de la unidad J364. (págs. 68, 136).

## Principio de funcionamiento

Varía su resistencia eléctrica de forma inversamente proporcional a la temperatura del refrigerante. La UCE J364 compara la señal de G587 con la de G18; si detecta una incoherencia de valores o un gradiente de temperatura excesivo, desactiva el calefactor. (págs. 31, 68).

## Valores de trabajo

- Curva característica NTC de resistencia frente a temperatura (idéntica a G18).
- Límite de interrupción (avería): Resistencia superior a 2 MΩ.
- Límite de cortocircuito (avería): Resistencia inferior a 50 Ω. (pág. 68).

## Anomalías frecuentes

Interrupción del cableado, cortocircuito interno, desviación de la curva de tolerancia. (pág. 68).

## Comportamiento en avería

Muestra "fallo" en el bloque de valores de medición 002 campo. Provoca la desactivación de seguridad del sistema de calefacción independiente para evitar daños por sobrecalentamiento no detectado. (págs. 31, 68).

## Cómo comprobarlo

1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la UCE J364.
2. Medir la resistencia entre la celda 7 (cable blanco) y la celda 8 (cable blanco).
3. Verificar que la resistencia medida se corresponde con la temperatura actual mediante la gráfica de curva NTC.
4. Valorar interrupción si R > 2 MΩ o cortocircuito si R < 50 Ω. (págs. 67-68, 136).

## Mantenimiento

Revisar el estado de los cables blancos y asegurar la correcta fijación del estribo de sujeción al montar. (págs. 136, 140).

## Imágenes requeridas

- Curva de resistencia en kΩ según la temperatura en ºC para el termosensor G587 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 68
