---
id: ssc.clima.regulacion-automatica-y-bizona-de-climatizacion
modulo: ssc
unidad: clima
nt: 45
tipo: proceso
subtipo: fundamento
titulo: "Regulación Automática Y Bizona De Climatización"
menu: "Regulación Automática Y Bizona De Clim"
grupo: Regulación y control
fuentes: "13. Climatización Electrónica.pdf, pág. 98-113"
---

## Objeto y alcance

Explicar el funcionamiento, la arquitectura electrónica y la lógica de regulación de la temperatura, caudal y distribución en climatizadores automáticos monozona y bizona. Se aplica para el análisis funcional y diagnosis de sistemas gestionados por UCE y servomotores.

## Fundamento

El climatizador automático libera al conductor de realizar ajustes manuales. La Unidad de Control Electrónico (UCE) procesa las señales de los sensores térmicos, fotosensores y la red CAN-Bus, calcula los valores teóricos programados y gestiona servomotores con potenciómetros de realimentación y el regulador de la turbina. En sistemas bizona, la UCE regula de forma independiente los servomotores de mezcla izquierdo y derecho, combinando aire frío y caliente según las demandas de cada ocupante.

## Condiciones previas

* Tensión de alimentación de encendido ("borne 15").  
* Selección de la temperatura deseada en el panel de mandos.

## Equipo y material

* UCE del climatizador e interfaz del panel de mandos.  
* Servomotores paso a paso con potenciómetros de posición integrados.  
* Polímetro / Osciloscopio / Equipo de diagnosis OBD con protocolo CAN-Bus.

## Desarrollo

El desarrollo del concepto y la estructura del sistema abarca:

* **Captación de datos:** La UCE recibe señales analógicas de sensores de temperatura (exterior, aire aspirado, habitáculo, difusor central, pies, evaporador) y fotosensores de radiación solar.  
* **Procesamiento y comunicación CAN-Bus:** La UCE intercambia información por el Bus CAN de confort con la UCE del motor, UCE de red de a bordo, Cuadro de instrumentos y ABS.  
* **Estrategia de regulación térmica:**  
* *Ambiente frío:* Dirige la totalidad del aire hacia el radiador de calefacción.  
* *Ambiente caliente:* Hace pasar el aire por el evaporador para enfriarlo, deshidratarlo y depurarlo.  
* *Ambiente intermedio:* Combina en proporciones calculadas el paso por el evaporador y el radiador de calefacción.  
* **Regulación bizona (e independización por zonas):** Servomotores independientes abren o cierran progresivamente las chapaletas de temperatura izquierda y derecha. En vehículos de alta gama existen unidades traseras para regular hasta 4 zonas independientes.  
* **Realimentación de actuadores:** Cada servomotor transmite su posición real a la UCE mediante un potenciómetro interno.

## Valores de referencia

| Parámetro / Componente | Valor de referencia / Lógica | Condiciones de sustitución o validez |
|---|---|---|
| Alimentación de sensores | 5,0 V (tensión continua) | Encendido conectado ("borne 15") |
| Señal fotosensor con luz intensa | Elevación de tensión hasta aprox. 3,0 V | Verificación con osciloscopio y fuente de luz |
| Rango sensores difusores NTC | -10 °C a +85 °C | Medición en difusor central y pies |
| Valor sustitutivo temp. exterior | 10 °C (fijo) | Fallo simultáneo de los dos sensores exteriores |
| Valor sustitutivo temp. interior | 22 °C a 26 °C (fijo) | Ausencia de señal del sensor de temp. interior |
| Valor sustitutivo fotosensor | Radiación intermedia dentro de la escala | Avería del fotosensor o de ambos fotodiodos |

## Interpretación y errores frecuentes

* **Fallo de sensores de difusor:** Si falla uno de los sensores (central o pies), el climatizador bloquea la regulación automática y mantiene fijos los parámetros existentes en el momento de la avería.  
* **Sustitución de parabrisas:** Cambiar un parabrisas atérmico por uno normal altera la lectura del fotosensor de radiación solar, provocando deficiencias en el cálculo térmico.  
* **Avería del sensor de evaporador:** Fuerza a la UCE a regular el compresor exclusivamente por la señal del sensor MAP de alta presión, limitando el rendimiento para prevenir la congelación.  
* **Discrepancia entre fotodiodos:** En fotosensores dobles, si falla un fotodiodo la UCE adopta la señal del fotosensor operativo.

## Verificación final

Comprobación mediante diagnóstico OBD del registro de averías (DTC) en la UCE. Verificación en bloques de valores de medida de las lecturas térmicas y del porcentaje de posición de potenciómetros en los servomotores.

## Seguridad y normativa

Registro automático de averías en la memoria no volátil de la UCE para la diagnosis según estándares OBD.

## Imágenes requeridas

- Esquema de componentes y flujo de aire en un climatizador bizona mostrando servomotores con potenciómetro, chapaletas independientes y sensores de temperatura — Fuente: 13. Climatización Electrónica.pdf, pág. 111
