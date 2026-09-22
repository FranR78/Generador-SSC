---
id: ssc.sin-clasificar.logica-y-secuencia-de-conmutacion-de-electroventiladores-gmv-de-refrigeracion
modulo: ssc
unidad: sin-clasificar
nt: 661
tipo: proceso
subtipo: procedimiento
titulo: "Lógica Y Secuencia De Conmutación De Electroventiladores (Gmv) De Refrigeración"
menu: "Lógica Y Secuencia De Conmutación De E"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe los circuitos de alimentación, relés y presostatos que gestionan las velocidades (1.ª, 2.ª, 3.ª) de los electroventiladores de refrigeración y el encendido del testigo de sobretemperatura del refrigerante. Aplica al diagnóstico de refrigeración y climatización.

## Fundamento

Conmutación de la alimentación de los motores de los electroventiladores (asociación en serie para bajas revoluciones y asociación en paralelo para altas revoluciones) mediante la caja de relés comandada por el presostato de A/C (411) y el termostato de radiador (248).

## Condiciones previas

Contacto encendido (+12 V APC) y tensión de batería estable (+12 V AVC).

## Equipo y material

Polímetro, lámpara de pruebas de 12 V y esquema eléctrico del fabricante.

## Desarrollo

1. **1.ª Velocidad (Baja):** Se activa al conectar el A/C o cuando el termostato del radiador 248 cierra su primer contacto. La corriente circula a través de las resistencias en serie o asociando los dos electroventiladores (262 y 188) en serie, haciendo girar la turbina de forma silenciosa.
2. **2.ª Velocidad (Media):** Se activa al aumentar la presión del gas refrigerante a 19 bar en el presostato 411 o por el segundo escalón del termostato. Los relés 234 conmutan para aplicar mayor tensión a los motores.
3. **3.ª Velocidad (Alta):** Se activa en situaciones de extrema demanda térmica o sobrepresión. Los relés 234 acoplan ambos electroventiladores directamente a +12 V en paralelo, proporcionando el máximo caudal de aire sobre el condensador y radiador.
4. **Encendido del Testigo de Sobretemperatura:** Si la temperatura del refrigerante supera el límite de seguridad, el termostato 248 cierra el circuito enviando masa directa a la lámpara de temperatura 247 en el cuadro de instrumentos y desactivando el relé del compresor 171 para reducir la carga térmica del motor.

## Valores de referencia

| Condición de Activación | Umbral Técnico |
| :--- | :--- |
| Presión de conmutación de velocidad por presostato 411 | 19 bar en el circuito de alta presión |
| Tensión en los electroventiladores en velocidad máxima | 12 V directo en configuración paralelo |

## Interpretación y errores frecuentes

* Si falla la.ª velocidad pero funcionan las superiores, revisar la resistencia en serie o los contactos del relé de velocidad lenta.
* Si el testigo de sobretemperatura se enciende y el compresor se desconecta, verificar la presencia de aire en el circuito de refrigeración del motor o el fallo de los relés de los electroventiladores.

## Verificación final

Verificar el salto progresivo de las tres velocidades puenteando secuencialmente las patillas del termostato del radiador 248 con el motor en marcha.

## Seguridad y normativa

Peligro de atrapamiento. Mantener las manos alejadas de las pálpulas de los electroventiladores durante la prueba; pueden arrancar automáticamente.

## Imágenes requeridas

- Trazo de corriente en.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 47
- Trazo de corriente en.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 48
- Trazo de corriente en.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 49
- Trazo de corriente en la fase de encendido de la lámpara de sobretemperatura — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 50
