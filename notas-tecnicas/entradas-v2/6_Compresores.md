```yaml
tipo: fluido
titulo: Aceite frigorífico
entidad: aceite-frigorifico
area: climatizacion
sistema: fluidos-frigorificos
fuente: "6. Compresores.pdf"
paginas: "49, 52"
relacionados: [compresor, refrigerante-r134a, refrigerante-r1234yf]
palabras: [lubricante frigorífico, POE, alto voltaje, lubricación]
```

## Designación y norma
No documentado en fuentes. (pág. 49, 52)

## Propiedades
Es un lubricante especial para máquinas frigoríficas. En compresores eléctricos accionados por motores de alta tensión se utiliza un aceite POE especial no conductor de la electricidad. (pág. 49, 52)

## Dónde se usa y cantidades
Como norma general, el 50% de la cantidad total del aceite se encuentra en el compresor y el resto circula solidariamente con el agente frigorífico (R134a o R1234yf) por los demás componentes del circuito. (pág. 49, 52)

## Compatibilidades y mezclas prohibidas
No documentado en fuentes. (pág. 49, 52)

## Identificación
No documentado en fuentes. (pág. 49, 52)

## Manipulación, almacenamiento y residuos
No documentado en fuentes. (pág. 49, 52)

## Riesgos y normativa
No documentado en fuentes. (pág. 49, 52)

---

```yaml
tipo: componente
titulo: Válvula de sobrepresión del compresor
entidad: valvula-sobrepresion
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "49"
relacionados: [compresor]
palabras: [sobrepresión, protección, descarga de fluido]
```

## Misión
Proteger al compresor y a los demás componentes del sistema de aire acondicionado mediante la liberación de fluido frigorífico al exterior en caso de producirse una presión excesiva en el circuito. (pág. 49)

## Tipos y características
Se instala directamente en el propio cuerpo del compresor. (pág. 49)

## Principio de funcionamiento
Se abre mecánicamente cuando la presión interna del circuito supera el umbral de seguridad, dejando salir fluido refrigerante para evitar la rotura de canalizaciones o componentes. (pág. 49)

## Valores de trabajo
No documentado en fuentes. (pág. 49)

## Anomalías frecuentes
No documentado en fuentes. (pág. 49)

## Comportamiento en avería
No documentado en fuentes. (pág. 49)

## Cómo comprobarlo
No documentado en fuentes. (pág. 49)

## Mantenimiento
No documentado en fuentes. (pág. 49)

---

```yaml
tipo: componente
titulo: Compresor de émbolos
entidad: compresor
variante: embolos
codigo: FK 50
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "49-50"
relacionados: [embrague-compresor, refrigerante-r134a]
palabras: [émbolos, vehículo industrial, autobuses, válvulas de láminas]
```

## Misión
Aumentar la presión del agente frigorífico en estado gaseoso procedentes del evaporador e impulsarlo como gas caliente hacia el condensador, constituyendo el punto de separación entre el lado de alta y el de baja presión. (pág. 49, 50)

## Tipos y características
Utilizado principalmente en vehículo industrial, autobuses, vagones de ferrocarril y furgones isotérmicos para transporte refrigerado. Se comercializa en gamas de 2, 4 o 6 cilindros (ejemplo: modelo FK 50). El accionamiento se efectúa mediante correa en autobuses o mediante motor eléctrico en aplicaciones ferroviarias. Ofrece alto rendimiento, gran robustez y alta fiabilidad, pero genera oscilaciones de presión y resulta más ruidoso. (pág. 50)

## Principio de funcionamiento
Opera mediante un ciclo alternativo similar a un motor de combustión de dos tiempos: admisión de gas al bajar el émbolo y compresión al subir. El control de entrada y salida se realiza mediante válvulas de láminas (lámina de aspiración y lámina de impulsión). Requiere obligatoriamente aspirar el fluido en estado gaseoso; la compresión de líquido destruye mecánicamente la bomba. (pág. 49, 50)

📷 IMAGEN: Sección interior del compresor de émbolos FK 50 y láminas de distribución — Fuente: 6. Compresores.pdf, pág. 50

## Valores de trabajo
Rendimiento comprendido entre el 80% y el 90%. En equipos para autobuses puede llegar a poner en circulación unos 12 kg de fluido refrigerante. (pág. 50)

## Anomalías frecuentes
No documentado en fuentes. (pág. 50)

## Comportamiento en avería
Destrucción mecánica inmediata del compresor en caso de aspiración de refrigerante en estado líquido. (pág. 49)

## Cómo comprobarlo
No documentado en fuentes. (pág. 50)

## Mantenimiento
Uso obligatorio de lubricante especial para máquinas frigoríficas. (pág. 49)

---

```yaml
tipo: componente
titulo: Compresor de paletas
entidad: compresor
variante: paletas
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "51"
relacionados: [embrague-compresor]
palabras: [paletas flotantes, rotor excéntrico, estator, sentido de giro único]
```

## Misión
Comprimir el agente frigorífico aspirado a baja presión y enviarlo a alta presión hacia el condensador mediante la variación de volumen de cámaras formadas por paletas en rotación. (pág. 51)

## Tipos y características
Poco utilizado en turismos actuales debido a su bajo rendimiento a bajas revoluciones. Destaca por su construcción sencilla (hasta un 30% menos de piezas). Mantiene la presión muy constante, no precisa válvula de admisión y tolera mejor los golpes de ariete que los modelos de émbolos. Posee sentido de giro único; si gira al revés no comprime. (pág. 51)

## Principio de funcionamiento
Consta de un rotor con paletas flotantes alojado de forma excéntrica dentro de una carcasa circular u ovalada (estator). La fuerza centrífuga desplaza las paletas hacia fuera contra las paredes de la carcasa durante el giro. En la zona de aspiración, la excentricidad hace crecer las cámaras generando una depresión que absorbe el gas. Al continuar el giro, las cámaras se reducen comprimiendo el gas y expulsándolo por la válvula de impulsión. (pág. 51)

📷 IMAGEN: Vista en despiece y corte transversal del compresor de paletas — Fuente: 6. Compresores.pdf, pág. 51

## Valores de trabajo
Rendimiento global entre el 75% y el 90%. Presenta un buen rendimiento a velocidades medias y altas del motor debido al aumento de la fuerza centrífuga sobre las paletas. (pág. 51)

## Anomalías frecuentes
Fugas de gas comprimido a bajas revoluciones del motor por la tolerancia lateral necesaria para compensar la dilatación térmica. (pág. 51)

## Comportamiento en avería
Si invierte el sentido de giro, el rendimiento es nulo y no genera compresión. (pág. 51)

## Cómo comprobarlo
No documentado en fuentes. (pág. 51)

## Mantenimiento
No documentado en fuentes. (pág. 51)

---

```yaml
tipo: componente
titulo: Compresor en espiral
entidad: compresor
variante: espiral
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "52"
relacionados: [unidad-control-climatizador, aceite-frigorifico]
palabras: [scroll, espiral fija, espiral giratoria, vehículo eléctrico, alta tensión, LIN-BUS]
```

## Misión
Hacer circular el fluido refrigerante (R134a o R1234yf) por el evaporador y el condensador en vehículos híbridos y eléctricos, accionado directamente por un motor eléctrico de alto voltaje. (pág. 52)

## Tipos y características
Denominado también compresor *scroll*. Se instala en vehículos eléctricos e híbridos. Incluye un motor eléctrico alimentado con alta tensión de la batería de tracción mediante un cableado naranja. Puede incorporar una Unidad de Control propia integrada que se comunica vía línea LIN-BUS con la Unidad de Control del climatizador. (pág. 52)

## Principio de funcionamiento
Formado por dos espirales engranadas: una espiral fija y otra espiral giratoria. La espiral giratoria es impulsada por el motor eléctrico a través de una excéntrica, describiendo una trayectoria circular. Este movimiento genera cámaras concéntricas reductoras hacia el centro que comprimen progresivamente el gas frigorífico. (pág. 52)

📷 IMAGEN: Componentes del compresor eléctrico en espiral y conexión de alta tensión — Fuente: 6. Compresores.pdf, pág. 52

## Valores de trabajo
Alimentación por red eléctrica de alta tensión procedente de la batería. Emplea aceite POE no conductor. (pág. 52)

## Anomalías frecuentes
No documentado en fuentes. (pág. 52)

## Comportamiento en avería
No documentado en fuentes. (pág. 52)

## Cómo comprobarlo
Verificar la ausencia de tensión en los conectores de alta tensión antes de realizar intervenciones. (pág. 52)

## Mantenimiento
Manipulación reservada exclusivamente a Técnicos en Alto Voltaje (HVT). (pág. 52)

---

```yaml
tipo: componente
titulo: Compresor de disco oscilante fijo
entidad: compresor
variante: disco-oscilante-fijo
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "54, 55"
relacionados: [embrague-compresor]
palabras: [cilindrada fija, émbolos, disco oscilante, placa de válvulas]
```

## Misión
Comprimir el fluido refrigerante mantención una cilindrada fija constante por cada vuelta de giro de su eje de impulsión. (pág. 54)

## Tipos y características
Compresor de volumen desplazado constante. Según su arquitectura, dispone de entre 3 y 10 émbolos montados concéntricamente alrededor del eje. Su rendimiento frigorífico depende directamente del régimen de giro del motor térmico (entre 800 y 6.000 r.p.m.). La adaptación del rendimiento frigorífico se efectúa conectando y desconectando el compresor mediante un embrague electromagnético. (pág. 54, 55)

## Principio de funcionamiento
El eje de impulsión transmite su rotación a un disco oscilante de inclinación fija, transformando el movimiento rotativo en movimiento lineal alternativo de los émbolos. En la parte posterior se sitúa una placa de válvulas provista de válvulas de láminas automáticas para aspiración e impulsión en cada cilindro. (pág. 54)

📷 IMAGEN: Vista en corte de la estructura de un compresor de disco oscilante fijo — Fuente: 6. Compresores.pdf, pág. 54

## Valores de trabajo
Régimen de giro operativo: entre 800 r.p.m. y 6.000 r.p.m. (pág. 54)

## Anomalías frecuentes
Oscilaciones en el llenado del evaporador debido a variaciones en el régimen del motor térmico o acoplamientos intermitentes del embrague. (pág. 54)

## Comportamiento en avería
No documentado en fuentes. (pág. 54)

## Cómo comprobarlo
No documentado en fuentes. (pág. 54)

## Mantenimiento
No documentado en fuentes. (pág. 54)

---

```yaml
tipo: componente
titulo: Acoplamiento de embrague electromagnético
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "55"
relacionados: [compresor]
palabras: [bobina electromagnética, polea, plato de acoplamiento, galga de espesores, juego de montaje]
```

## Misión
Conectar o desacoplar mecánicamente la transmisión de movimiento entre el motor térmico y el eje de impulsión del compresor a través de la correa poly-v. (pág. 55)

## Tipos y características
Se compone de tres elementos esenciales: polea montada sobre rodamiento de bolas en la carcasa, placa elástica con plato de acoplamiento unida al eje mediante tuerca, y bobina electromagnética fija a la carcasa. El plato se fabrica en acero con un contenido de carbono inferior al 0,6% para evitar su magnetización permanente. (pág. 55)

## Principio de funcionamiento
Con el embrague desactivado, la polea gira loca accionada por el motor. Al aplicar corriente a la bobina, el campo magnético atrae el plato de la placa elástica venciendo la separación de montaje y pegándolo contra la polea en rotación. Esto solidariza el plato con la polea transmitiendo el giro al eje. Al cortar la corriente, los muelles devuelven el plato a su posición de reposo. (pág. 55)

📷 IMAGEN: Posición activada y desactivada del acoplamiento electromagnético — Fuente: 6. Compresores.pdf, pág. 55

## Valores de trabajo
Juego de montaje entre polea y plato elástico:
- Compresores Sanden: de 0,4 mm a 0,8 mm. (pág. 55)
- Compresores Nippondenso: de 0,2 mm a 0,5 mm. (pág. 55)
Composición del acero del plato: menos de un 0,6% de carbono. (pág. 55)

## Anomalías frecuentes
Patinamiento del plato por esfuerzo excesivo debido al agarrotamiento o dureza del compresor. El rozamiento continuo incrementa la temperatura, desgasta los elementos y quema la bobina electromagnética. (pág. 55)

## Comportamiento en avería
El embrague no suele ser el origen de la avería sino la víctima; si el compresor gira duro, el embrague patina y se quema. (pág. 55)

## Cómo comprobarlo
Medir el juego de montaje con una galga de espesores en tres puntos equidistantes entre la polea y el plato de acoplamiento. (pág. 55)

## Mantenimiento
Si el juego no está en tolerancia, corregir intercalando arandelas o juntas de papel en el tope del eje del plato. (pág. 55)

---

```yaml
tipo: componente
titulo: Compresor de disco oscilante autorregulado
entidad: compresor
variante: disco-oscilante-variable-hidraulico
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "56-58"
relacionados: [valvula-reguladora-compresor, embrague-compresor]
palabras: [cilindrada variable, regulación hidráulica, presión de cárter, presión de succión, ángulo de leva]
```

## Misión
Ajustar de forma automática la cilindrada y el caudal impelido según la demanda frigorífica mediante la variación hidráulica de la inclinación del disco oscilante. (pág. 56)

## Tipos y características
Compresor de cilindrada variable por control hidráulico interno (en uso desde 1998). Su embrague permanece acoplado continuamente mientras la climatización está conectada, evitando sacudidas y ruidos. Rango de regulación comprendido entre el 5% (tope inferior) y el 100% (tope superior). La posición nominal de equilibrio de sus muelles ajusta un caudal inicial de aproximadamente el 40%. Mantiene fija la presión de baja entre 1,8 y 2 bares. (pág. 56)

## Principio de funcionamiento
El eje transmite rotación a un cubo que inclina un disco oscilante acoplado a un carril de deslizamiento. La posición del disco oscilante depende del equilibrio entre la presión de baja (Ps) sobre la cabeza de los émbolos más el muelle frontal, frente a la presión de la cámara del cárter (Pc) actuando en la parte inferior de los émbolos más el muelle trasero. Una válvula hidráulica reguladora compara las presiones de alta y baja comunicando la cámara con la admisión o dejando entrar alta presión mediante un taladro estrangulador calibrado: (pág. 56, 57, 58)
- **Alta demanda de frío**: Válvula de expansión muy abierta y baja presión alta. La válvula reguladora abre comunicando la cámara con la succión. Pc disminuye respecto a Ps, la fuerza superior inclina el disco al máximo, aumentando la carrera, el caudal y la potencia absorbida. (pág. 56, 57)
- **Baja demanda de frío**: Válvula de expansión casi cerrada y baja presión débil. La válvula reguladora cierra. La alta presión entra al cárter por el taladro estrangulador aumentando Pc respecto a Ps; el disco se coloca más plano reduciendo la carrera y el caudal. (pág. 56, 58)

📷 IMAGEN: Esquema del flujo de presiones en posición de máximo y mínimo caudal — Fuente: 6. Compresores.pdf, pág. 57, 58

## Valores de trabajo
- Presión de baja (succión) mantenida por regulación: de 1,8 bar a 2 bar. (pág. 56)
- Rango de cilindrada variable: aproximadamente del 5% al 100%. (pág. 56)
- Caudal inicial en posición nominal de muelles: ~40%. (pág. 56)

## Anomalías frecuentes
No documentado en fuentes. (pág. 56)

## Comportamiento en avería
No documentado en fuentes. (pág. 56)

## Cómo comprobarlo
No documentado en fuentes. (pág. 56)

## Mantenimiento
Gracias a mantener fija la presión de baja a 1,8-2 bar, elimina la necesidad de montar termostato en el evaporador para evitar la congelación. (pág. 56)

---

```yaml
tipo: componente
titulo: Compresor de disco oscilante regulado con electroválvula
entidad: compresor
variante: disco-oscilante-variable-electrico
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "54, 59, 61-63"
relacionados: [valvula-reguladora-compresor, unidad-control-climatizador]
palabras: [electroválvula de regulación, PWM, carrera nula, sin embrague, regulación electrónica]
```

## Misión
Regular electrónicamente el caudal y la presión del fluido refrigerante mediante una electroválvula pilotada por la Unidad de Control del Climatizador. (pág. 54, 59)

## Tipos y características
Compresor de cilindrada variable continuo. Gira de forma permanente siempre que el motor térmico esté en marcha. Permite prescindir del acoplamiento magnético (sustituido por un sistema de seguridad o fusible mecánico), reduciendo el consumo eléctrico y las sacudidas de conexión. Existen variantes que conservan el embrague electromagnético. (pág. 54, 59)

## Principio de funcionamiento
El eje transmite el movimiento de la polea poly-v al disco de arrastre mediante piezas de goma o láminas de chapa. La inclinación del plato oscilante se controla variando la presión del cárter mediante la electroválvula gobernada por señales PWM: (pág. 59, 61, 62, 63)
- **Sin demanda de A/A**: Excitación mínima PWM (2%). La electroválvula comunica la salida de alta presión con el cárter. La alta presión en el cárter pone el disco oscilante plano (carrera nula), absorbiendo muy poca energía y sin comprimir fluido. (pág. 61, 63)
- **Máxima demanda de A/A**: Excitación máxima PWM (98%). La electroválvula comunica el cárter con el circuito de baja presión (aspiración), reduciendo la presión interna del cárter. La baja presión empuja la cabeza de los émbolos, inclinando el plato al máximo (carrera máxima y máximo caudal). (pág. 62, 63)

📷 IMAGEN: Excitación PWM de la electroválvula y posición del disco oscilante al 2% y 98% — Fuente: 6. Compresores.pdf, pág. 61, 62, 63

## Valores de trabajo
- Frecuencia fija de control con modulación de ancho de pulsos (PWM). (pág. 63)
- Mínimo rendimiento (carrera nula): excitación del 2% del periodo positivo PWM. (pág. 61, 63)
- Máximo rendimiento (carrera máxima): excitación del 98% del periodo positivo PWM. (pág. 62, 63)

## Anomalías frecuentes
En vehículos con paradas y arranques frecuentes (Stop & Start), el arranque del motor con el compresor fuera de la posición de mínimo rendimiento puede romper el mecanismo de seguridad de la polea por esfuerzo excesivo. (pág. 60)

## Comportamiento en avería
En caso de fallo eléctrico en la electroválvula o la línea de excitación, la válvula se mantiene por muelle en posición de mínimo rendimiento (carrera nula) para prevenir sobrepresiones. (pág. 63)

## Cómo comprobarlo
Comprobar la señal PWM enviada por la Unidad de Control del Climatizador y verificar la ausencia de agarrotamiento en el vástago. (pág. 63)

## Mantenimiento
En determinados modelos no existe recambio individual de la electroválvula, siendo necesario cambiar el compresor completo. (pág. 63)

---

```yaml
tipo: componente
titulo: Fusible mecánico de seguridad del compresor
entidad: fusible-mecanico-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "59, 60"
relacionados: [compresor]
palabras: [disco de arrastre, fusible mecánico, elementos de goma, láminas metálicas, desacoplamiento]
```

## Misión
Desacoplar la transmisión de esfuerzo entre la polea y el eje del compresor en caso de bloqueo mecánico o elevada resistencia al giro, garantizando que la polea quede libre para evitar la rotura de la correa poly-v y la avería de otros órganos auxiliares. (pág. 59, 60)

## Tipos y características
Mecanismo de seguridad instalado en compresores sin acoplamiento magnético. La unión entre la polea accionada por la correa y el disco de arrastre solidario al eje se efectúa mediante elementos de goma o láminas de chapa metálica. (pág. 59, 60)

## Principio de funcionamiento
En funcionamiento normal, los elementos flexibles transmiten el par de giro a la polea. Si el compresor se bloquea:
- En sistemas con disco de arrastre ranurado: las piezas de goma sufren una alta resistencia al giro que deforma de manera controlada el disco de arrastre hacia el exterior a través de sus cortes mecanizados, liberando los tacos de goma y dejando la polea girando libre. (pág. 60)
- En sistemas con láminas metálicas: la sobrecarga cizalla y rompe las láminas de chapa, desacoplando la transmisión. (pág. 60)

📷 IMAGEN: Disco de arrastre deformado con cortes mecanizados y piezas de goma liberadas — Fuente: 6. Compresores.pdf, pág. 60

## Valores de trabajo
No documentado en fuentes. (pág. 60)

## Anomalías frecuentes
Rotura por fatiga en arranques frecuentes si el compresor no ha retornado a la posición de mínimo rendimiento. (pág. 60)

## Comportamiento en avería
Tras el desacoplamiento de seguridad, la polea gira loca sin arrastrar al compresor, quedando anulada la climatización. (pág. 60)

## Cómo comprobarlo
Inspeccionar visualmente si el disco de arrastre presenta deformación exterior o si las láminas metálicas de transmisión están fracturadas. (pág. 60)

## Mantenimiento
Existen recambios reforzados para aplicaciones severas o kits de adaptación que permiten montar un acoplamiento con embrague eléctrico convencional. (pág. 60)

---

```yaml
tipo: componente
titulo: Electroválvula de regulación del compresor
entidad: valvula-reguladora-compresor
codigo: PWM
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "59, 63"
relacionados: [compresor, unidad-control-climatizador]
palabras: [electroválvula, PWM, vástago, núcleo de hierro dulce, presión de cárter]
```

## Misión
Abrir o cerrar los pasos de gas refrigerante de alta y baja presión hacia el cárter del compresor para modificar la presión de cárter y controlar la carrera del plato oscilante. (pág. 59, 63)

## Tipos y características
Ubicada en el cuerpo exterior del compresor. Consta de una bobina eléctrica, un núcleo magnético de hierro dulce y un vástago de cierre movido magnéticamente y posicionado mediante muelle. (pág. 63)

## Principio de funcionamiento
Gobernada por la Unidad de Control del Climatizador mediante corriente de frecuencia fija y proporción de periodo variable (PWM). La señal eléctrica desplaza el núcleo y el vástago:
- Al aumentar la excitación del periodo positivo (hasta el 98%), el vástago cierra la comunicación de la alta presión con el cárter e interconecta la baja presión, reduciendo la presión de cárter y aumentando la carrera. (pág. 63)
- Al disminuir la excitación (hasta el 2%), el muelle desplaza el vástago permitiendo la entrada de alta presión al cárter, aumentando la presión de cárter y reduciendo la carrera. (pág. 63)

📷 IMAGEN: Sección de la electroválvula de regulación indicando la bobina, el núcleo magnético y el vástago — Fuente: 6. Compresores.pdf, pág. 63

## Valores de trabajo
- Frecuencia fija de modulación. (pág. 63)
- Tensión de excitación: 12 V mediante señal cuadrada PWM. (pág. 63)
- Margen de modulación: 2% (mínimo rendimiento / paso de alta abierto) a 98% (máximo rendimiento / paso de alta cerrado). (pág. 63)

## Anomalías frecuentes
Fallo en la bobina electromagnética o bloqueo mecánico del vástago interno. (pág. 63)

## Comportamiento en avería
Si falla la electroválvula o la señal de excitación, el muelle mantiene el vástago en posición de mínimo rendimiento del compresor (2%) para evitar riesgos de sobrepresión en el circuito. (pág. 63)

## Cómo comprobarlo
Medir la resistencia eléctrica de la bobina con polímetro y comprobar el pulso PWM mediante osciloscopio o polímetro con medición de ciclo de trabajo. (pág. 63)

## Mantenimiento
En algunos fabricantes no se suministra la electroválvula como pieza de recambio suelta; en caso de fallo se debe reemplazar el compresor completo. (pág. 63)

---

COBERTURA: documento «6. Compresores.pdf», páginas 49 a 63 de 63. [completo]