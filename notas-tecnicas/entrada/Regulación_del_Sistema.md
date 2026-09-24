```yaml
tipo: componente
titulo: Termosensor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17
fuente: "Regulación del Sistema.pdf"
paginas: "48-49"
relacionados: [unidad-control-climatizador, sensor-temperatura-aire-aspirado]
palabras: [temperatura exterior, armazón anterior, autodiagnóstico]
```

## Misión
Detectar la temperatura exterior efectiva para que la unidad de control gestione la posición de la chapaleta de temperatura y la velocidad de la turbina de aire. (pág. 48-49)

## Tipos y características
Instalado en el armazón anterior del vehículo. (pág. 48)
📷 IMAGEN: Posición del termosensor de temperatura exterior G17 en el armazón anterior del vehículo — Fuente: Regulación del Sistema.pdf, pág. 48

## Principio de funcionamiento
No documentado en fuentes. (pág. 48)

## Valores de trabajo
No documentado en fuentes. (pág. 48)

## Anomalías frecuentes
No documentado en fuentes. (pág. 48-49)

## Comportamiento en avería
Si se ausenta la señal, la unidad de control emplea el valor medido por el termosensor en el conducto de aspiración de aire fresco G89. Si también se ausentan las señales de este segundo sensor, el sistema mantiene su funcionamiento poniendo en vigor un valor supletorio fijo de +10 ºC, en cuyo caso deja de funcionar el modo operativo de recirculación de aire. (pág. 49)

## Cómo comprobarlo
Es susceptible de autodiagnóstico a través de la memoria de averías de la unidad de control. (pág. 49)

## Mantenimiento
No documentado en fuentes. (pág. 48-49)

---

```yaml
tipo: componente
titulo: Termosensor en el conducto de aspiración de aire fresco
entidad: sensor-temperatura-exterior
variante: conducto-aspiracion
area: climatizacion
sistema: control-climatizacion
codigo: G89
fuente: "Regulación del Sistema.pdf"
paginas: "48-49"
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [entrada de aire, segundo punto de medición, valor más bajo]
```

## Misión
Registrar la temperatura exterior efectiva directamente en el canal de entrada como segundo punto de medición para la gestión de la posición de la chapaleta de temperatura y la velocidad de la turbina de aire. (pág. 48-49)

## Tipos y características
Instalado directamente en el conducto de aspiración de aire fresco. La unidad de control procesa siempre el valor más bajo registrado entre el termosensor G17 y el G89. (pág. 48-49)

## Principio de funcionamiento
No documentado en fuentes. (pág. 48)

## Valores de trabajo
No documentado en fuentes. (pág. 48)

## Anomalías frecuentes
No documentado en fuentes. (pág. 48-49)

## Comportamiento en avería
Si se ausenta la señal, se utiliza el valor de medición del primer termosensor G17 instalado en el armazón delantero. En caso de fallo doble de ambos sensores exteriores, el sistema adopta el valor supletorio de +10 ºC y anula la recirculación de aire. (pág. 49)

## Cómo comprobarlo
Es susceptible de autodiagnóstico a través de la memoria de averías de la unidad de control. (pág. 49)

## Mantenimiento
No documentado en fuentes. (pág. 48-49)

---

```yaml
tipo: componente
titulo: Termosensor del tablero de instrumentos
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fuente: "Regulación del Sistema.pdf"
paginas: "49"
relacionados: [unidad-control-climatizador, turbina-aire-termosensor]
palabras: [temperatura habitáculo, calor radiado, valor supletorio 24 ºC]
```

## Misión
Transmitir a la unidad de control la temperatura efectiva del habitáculo para compararla con el valor teórico seleccionado por el usuario y gestionar las funciones de la chapaleta de temperatura y de la turbina de aire fresco. (pág. 49)

## Tipos y características
Suele estar instalado directamente en la unidad de control. Se sitúa en el caudal de aire de una turbina de aire para termosensor V42. (pág. 49)
📷 IMAGEN: Disposición del termosensor G56 en el caudal de aire de la turbina V42 dentro de la unidad de control — Fuente: Regulación del Sistema.pdf, pág. 49

## Principio de funcionamiento
La turbina V42, gestionada a través del panel de mandos e indicación, aspira aire continuo del habitáculo hacia el sensor para evitar errores de medición producidos por calor radiado. (pág. 49)

## Valores de trabajo
No documentado en fuentes. (pág. 49)

## Anomalías frecuentes
No documentado en fuentes. (pág. 49)

## Comportamiento en avería
Si se ausenta la señal, la unidad de control pone en vigor un valor supletorio fijo de +24 ºC y el sistema sigue en funcionamiento. (pág. 49)

## Cómo comprobarlo
Es susceptible de autodiagnóstico mediante la unidad de control. (pág. 49)

## Mantenimiento
No documentado en fuentes. (pág. 49)

---

```yaml
tipo: componente
titulo: Transmisor de temperatura a la salida del vano reposapiés
entidad: sensor-temperatura-interior
variante: salida-reposapies
area: climatizacion
sistema: control-climatizacion
codigo: G192
fuente: "Regulación del Sistema.pdf"
paginas: "49"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [salida calefactor, vano reposapiés, resistencia eléctrica]
```

## Misión
Medir la temperatura del aire que sale por el calefactor/climatizador e ingresa en el habitáculo, sirviendo para gestionar la distribución del aire (descongelación / vano reposapiés) y controlar el caudal impelido por la turbina de aire fresco. (pág. 49)

## Tipos y características
Componente termorresistivo instalado a la salida del aire hacia la zona de los pies. (pág. 49)

## Principio de funcionamiento
Detecta la temperatura mediante una resistencia eléctrica cuyo valor ohmico aumenta a medida que baja la temperatura del aire impulsado. (pág. 49)

## Valores de trabajo
No documentado en fuentes. (pág. 49)

## Anomalías frecuentes
No documentado en fuentes. (pág. 49)

## Comportamiento en avería
Si se ausenta la señal, la unidad de control calcula un valor supletorio de +80 ºC y el sistema mantiene su funcionamiento. (pág. 49)

## Cómo comprobarlo
Es susceptible de autodiagnóstico a través de la memoria de la unidad de control. (pág. 49)

## Mantenimiento
No documentado en fuentes. (pág. 49)

---

```yaml
tipo: componente
titulo: Fotosensor de radiación solar
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
codigo: G107
fuente: "Regulación del Sistema.pdf"
paginas: "50"
relacionados: [unidad-control-climatizador, chapaleta-temperatura]
palabras: [radiación solar, fotodiodo, elemento óptico, incidencia oblicua]
```

## Misión
Detectar la radiación solar directa a la que están expuestos los ocupantes para corregir la temperatura del habitáculo, gestionando la posición de la chapaleta de temperatura y la velocidad de la turbina de aire. (pág. 50)

## Tipos y características
Ubicado en el tablero de instrumentos. Existen versiones de sensor simple o de dos sensores por separado para los lados izquierdo y derecho del vehículo. Consta de tapa de carcasa, filtro protector UV, elemento óptico y fotodiodo. (pág. 50)
📷 IMAGEN: Componentes internos del fotosensor G107 (filtro, elemento óptico y fotodiodo) — Fuente: Regulación del Sistema.pdf, pág. 50

## Principio de funcionamiento
La luz solar pasa por un filtro que protege contra radiaciones UV e incide a través del elemento óptico en un fotodiodo semiconductor. Si no recibe luz, el fotodiodo solo deja pasar una corriente baja; al aumentar la intensidad de la luz aplicada, aumenta el flujo de corriente eléctrica. La unidad de control detecta este aumento de corriente y corrige la temperatura. El elemento óptico capta mayor radiación cuando los rayos inciden de forma oblicua. En sistemas bizona con dos sensores, refrigera más intensamente el lado expuesto a mayor radiación. (pág. 50)

## Valores de trabajo
No documentado en fuentes. (pág. 50)

## Anomalías frecuentes
No documentado en fuentes. (pág. 50)

## Comportamiento en avería
Si se ausenta la señal, la unidad de control trabaja con un valor supletorio fijo para la radiación solar. (pág. 50)

## Cómo comprobarlo
No documentado en fuentes. (pág. 50)

## Mantenimiento
No documentado en fuentes. (pág. 50)

---

```yaml
tipo: componente
titulo: Servomotor para chapaleta de velocidad y recirculación de aire
entidad: servomotor-trampilla
area: climatizacion
sistema: distribucion-aire
codigo: V71
fuente: "Regulación del Sistema.pdf"
paginas: "47, 52"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, potenciómetro-g113]
palabras: [chapaleta de velocidad, recirculación, disco de accionamiento, pistas guía]
```

## Misión
Accionar la chapaleta de velocidad para reducir la sección de paso de aire fresco a altas velocidades de marcha y accionar la chapaleta de recirculación de aire para permitir o cortar la entrada de aire atmosférico. (pág. 47, 52)

## Tipos y características
Actuador eléctrico instalado directamente a la altura del eje de las chapaletas en el calefactor/climatizador. Lleva integrado el potenciómetro G113. (pág. 47, 52)

## Principio de funcionamiento
Transforma las señales eléctricas de salida de la unidad de control en movimiento mecánico. Un disco de accionamiento con dos pistas guía realiza el reglaje individual de la chapaleta de velocidad y de la chapaleta de recirculación mediante este único servomotor. (pág. 47, 52)
📷 IMAGEN: Servomotor V71 con disco de accionamiento de dos pistas guía para chapaleta de velocidad y recirculación — Fuente: Regulación del Sistema.pdf, pág. 47

## Valores de trabajo
No documentado en fuentes. (pág. 52)

## Anomalías frecuentes
No documentado en fuentes. (pág. 52)

## Comportamiento en avería
No documentado en fuentes. (pág. 52)

## Cómo comprobarlo
El potenciómetro G113 acoplado transmite continuamente a la unidad de control una señal de realimentación para informar de la posición momentánea de la chapaleta. (pág. 52)

## Mantenimiento
No documentado en fuentes. (pág. 52)

---

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
codigo: G238
fuente: "Regulación del Sistema.pdf"
paginas: "62"
relacionados: [unidad-control-climatizador, filtro-habitaculo]
palabras: [recirculación automática, gases de escape, filtro combinado, contaminantes]
```

## Misión
Detectar la presencia de contaminantes en el aire atmosférico para conmutar automáticamente la entrada de aire hacia el modo de recirculación antes de que los malos olores o sustancias nocivas penetren en el habitáculo. (pág. 62)

## Tipos y características
Componente electrónico instalado en la zona de aspiración de aire fresco, situado ante el filtro combinado con carbón activo. (pág. 62)
📷 IMAGEN: Ubicación del sensor de calidad del aire G238 ante el filtro combinado en el canal de aspiración — Fuente: Regulación del Sistema.pdf, pág. 62

## Principio de funcionamiento
Un sensor de gases evalúa la concentración de contaminantes en el aire exterior. Al registrar una alta concentración, envía una señal a la unidad de control para pasar de aire atmosférico a recirculación. Al descender la concentración de contaminantes, permite nuevamente el paso de aire atmosférico. (pág. 62)

## Valores de trabajo
Detecta contaminantes en gases de gasolina: monóxido de carbono (CO), hexano (C6H14), benceno (C6H6) y n-heptano (C7H16). Detecta contaminantes en gases diésel: óxidos nítricos (NOx), dióxido de azufre (SO2), ácido sulfhídrico (H2S) y carbono sulfuro (CS2). (pág. 62)

## Anomalías frecuentes
No documentado en fuentes. (pág. 62)

## Comportamiento en avería
No documentado en fuentes. (pág. 62)

## Cómo comprobarlo
No documentado en fuentes. (pág. 62)

## Mantenimiento
No documentado en fuentes. (pág. 62)

---

COBERTURA: documento «Regulación del Sistema.pdf», páginas 48 a 62 de 135. queda pendiente desde la página 62