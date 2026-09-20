---
id: ssc.clima.ciclo-frigorifico-de-compresion-de-vapor
modulo: ssc
unidad: clima
nt: 120
tipo: proceso
subtipo: fundamento
titulo: "Ciclo Frigorífico De Compresión De Vapor"
menu: "Ciclo Frigorífico De Compresión De Vap"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el ciclo cerrado de refrigeración por compresión, definiendo las zonas de alta y baja presión, así como los fenómenos de subenfriamiento y recalentamiento. Se aplica a todos los sistemas de aire acondicionado automotriz [26, 28, 29, 33].

## Fundamento

El sistema funciona como una bomba de calor que transporta energía térmica desde el interior hacia el exterior. El compresor divide el circuito en dos zonas: el lado de alta presión (desde la descarga del compresor hasta la entrada de la válvula de expansión) y el lado de baja presión (desde la salida de la válvula de expansión hasta la aspiración del compresor) [26, 29, 33]. Para garantizar un rendimiento óptimo, el líquido a la salida del condensador sufre un subenfriamiento (punto C') asegurando que no entren burbujas de gas a la válvula, y el gas a la salida del evaporador sufre un recalentamiento (punto A') asegurando que no llegue líquido al compresor [28].

## Condiciones previas

- Circuito cargado con la masa nominal de R134a y aceite [34, 35].  
- Motor térmico en marcha a régimen estabilizado (1.500 - 1.800 rpm) y temperatura exterior de 30 ºC [12, 36].

## Equipo y material

Batería de manómetros HP y LP, termómetros de contacto [6, 12].

## Desarrollo

1. **Tramo A-B (Compresión):** El compresor (1) aspira gas a baja presión (Sección A: aprox. 1.5 bar) y lo comprime elevando su presión y temperatura hacia el condensador (Sección B: aprox. 14 bar) [26, 28, 33].  
2. **Tramo B-C (Condensación):** El gas a alta presión cede calor en el condensador (2) al aire exterior y se licúa. Sufre un subenfriamiento C' antes de salir hacia la válvula [26, 28].  
3. **Tramo C-D (Expansión):** La válvula de expansión (3) dosifica el líquido desde la línea de alta (Sección C: aprox. 14 bar) reduciendo bruscamente la presión hacia la línea de baja (Sección D: aprox. 1.5 bar) [26, 28, 33].  
4. **Tramo D-A (Evaporación):** El refrigerante a baja presión y temperatura se evapora en el evaporador (4) absorbiendo el calor del aire del habitáculo, alcanzando un recalentamiento A' antes de retornar al compresor [26, 28, 33].

## Valores de referencia

| Tramo / Sección | Presión típica | Estado del refrigerante | Condiciones de validez |
|---|---|---|---|
| **Sección A (Aspiración compresor)** | Aprox. 1.5 bar | Vapor / Gas recalentado (Baja presión) | Motor a 1500-1800 rpm, 30 ºC exterior [12, 28, 33] |
| **Sección B (Descarga compresor)** | Aprox. 14 bar | Vapor / Gas caliente (Alta presión) | Motor a 1500-1800 rpm, 30 ºC exterior [12, 28, 33] |
| **Sección C (Salida condensador)** | Aprox. 14 bar | Líquido subenfriado (Alta presión) | Motor a 1500-1800 rpm, 30 ºC exterior [12, 28, 33] |
| **Sección D (Salida válvula expansión)** | Aprox. 1.5 bar | Mezcla Líquido / Vapor frío (Baja presión) | Motor a 1500-1800 rpm, 30 ºC exterior [12, 28, 33] |

## Interpretación y errores frecuentes

- Ausencia de subenfriamiento C': indica falta de refrigerante en el circuito o condensación deficiente [28, 37, 38].  
- Ausencia de recalentamiento A': provoca la llegada de refrigerante líquido al compresor, desencadenando el golpe de ariete y la destrucción mecánica de las válvulas [28, 39, 40].

## Verificación final

Comprobación de las presiones de trabajo en los manómetros de baja (1.8 a 2.1 bar) y alta (6 a 13 bar en variables / 10 a 20 bar en fijos) con soplado constante de aire frío por los difusores del habitáculo [36, 41].

## Imágenes requeridas

- Esquema del circuito frigorífico básico mostrando compresor (1), condensador (2), válvula de expansión (3), evaporador (4) y gráfica p-h con subenfriamiento C' y recalentamiento A' — Fuente: AA AUTOMOCION 1 Enero 2010 HELLA.pptx, diapositivas 54 a 59 [26, 28, 33]
