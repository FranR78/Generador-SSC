```yaml
tipo: componente
titulo: Compresor
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Sanden
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "35-67"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, condensador, valvula-expansion]
palabras: [aspiracion, compresion, cilindrada, R134a]
```

## Misión
Hacer circular el fluido refrigerante R134a de forma continuada por el interior del circuito. Aspira el refrigerante en estado de vapor a baja presión y baja temperatura procedente del evaporador y lo comprime, aumentando su presión y temperatura para enviarlo hacia el condensador. (pág. 28, 35)

## Tipos y características
Existen dos grandes familias: de cilindrada fija y de cilindrada variable.
- Cilindrada fija: compresores alternativos de pistones axiales (pistones de doble efecto o carrera simple), de paletas rotativas y de espiral o scroll.
- Cilindrada variable: de regulación mecánica interna (mediante válvula de regulación interna sensible a presiones AP, BP y cárter) o de regulación electrónica externa (mediante válvula electromagnética pilotada por la UCE con señal PWM).
Cuerpo fabricado en aluminio. Requiere lubricante sintético de tipo PAG o PAO específico para R134a. (pág. 35, 51, 67, 189)

## Principio de funcionamiento
En los modelos de cilindrada fija, el giro del eje mueve los pistones o paletas para aspirar vapor por las válvulas de admisión y comprimirlo hacia las válvulas de escape.
En los modelos de cilindrada variable por disco oscilante, la inclinación del plato porta-pistones varía automáticamente entre 0 % y 100 % de rendimiento según la diferencia de presión entre la cámara de alta presión (AP), la de baja presión (BP) y la del cárter (PC).
En los modelos sin embrague electromagnético, el compresor gira de forma continua mientras el motor está en marcha.
📷 IMAGEN: Sección transversal y componentes de un compresor de cilindrada variable Sanden — Fuente: AA AUTOMOCION MD FR.pdf, pág. 51

## Valores de trabajo
A 1500-1800 rpm con temperatura exterior de 30 ºC:
- Cilindrada fija: Baja presión de 1,4 a 2,2 bar y Alta presión de 10 a 20 bar.
- Cilindrada variable: Baja presión regulada entre 1,8 y 2,1 bar con Alta presión entre 6 y 13 bar. (pág. 165, 166)

## Anomalías frecuentes
Gripado interno por falta de aceite lubricante o degradación del mismo por humedad o acidez. Fugas de refrigerante por el retén o junta rotativa del eje. Presencia de limaduras metálicas en el circuito por desgaste de pistones. Deformación o rotura de las válvulas de láminas por golpe de líquido. (pág. 66, 67, 99, 100)

## Comportamiento en avería
Si el compresor se bloquea en un sistema sin embrague, se deforma o rompe la pieza de goma con grafito de la polea de arrastre, dejando que la polea gire libre para no romper la correa de accesorios del motor. Si las válvulas internas se comunican o la válvula de regulación se obstruye, las presiones de alta y baja se igualan (baja entre 4,5 y 6 bar e igual a la alta), anulando el efecto frigorífico. (pág. 52, 175, 188)

## Cómo comprobarlo
Conectar la estación de carga de manómetros en las tomas de servicio de alta y baja presión. Con el motor a 1500-1800 rpm y aire acondicionado conectado, rociar spray enfriador en el bulbo de la válvula de expansión para forzar su cierre; si la baja presión cae a valores de vacío (0 bar o inferior) y al parar el motor la aguja sube rápidamente, indica que las válvulas del compresor están comunicadas. (pág. 171, 175)

## Mantenimiento
Verificar la viscosidad y la cantidad de aceite especificada por el fabricante antes de su montaje. Al sustituir un compresor defectuoso, es obligatorio efectuar un lavado completo del circuito y reemplazar el filtro deshidratador. (pág. 66, 67)

---

```yaml
tipo: componente
titulo: Embrague electromagnético
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "72-74"
forma_parte_de: compresor
relacionados: [compresor, presostato, termostato]
palabras: [bobina, polea, disco frontal, holgura]
```

## Misión
Transmitir el movimiento de rotación desde la polea accionada por la correa del motor del vehículo hacia el eje del compresor, permitiendo acoplar y desacoplar mecánicamente el compresor a voluntad o por seguridad. (pág. 72)

## Tipos y características
Consta de tres elementos principales: bobina magnética fija con bobinado eléctrico protegido por resina, polea metálica sobre rodamiento de bolas con guardapolvo, y disco frontal metálico acoplado al eje del compresor con silentblocks de goma y muelles planos de recuperación. Alimentación eléctrica de 12 V o 24 V de corriente continua. (pág. 72, 73, 98)

## Principio de funcionamiento
Cuando no circula corriente por la bobina, los muelles planos mantienen una holgura entre el disco frontal y la polea, haciendo que la polea gire loca sin arrastrar el eje del compresor.
Al aplicar corriente eléctrica a la bobina, se genera un campo magnético que atrae el disco frontal contra la cara de fricción de la polea, transmitiendo el giro al eje del compresor.
📷 IMAGEN: Detalle de la holgura entre el disco frontal y la polea (0,0 mm conectado y 0,3 a 0,6 mm desconectado) — Fuente: AA AUTOMOCION MD FR.pdf, pág. 74

## Valores de trabajo
Holgura o distancia de entrehierro entre el disco frontal y la polea: entre 0,3 mm y 0,6 mm cuando está desconectado, y 0,0 mm cuando está conectado. Tensión de alimentación: 12 V ó 24 V. (pág. 73, 74, 98)

## Anomalías frecuentes
Desgaste del material de fricción por patinado continuado. Holgura incorrecta entre disco y polea por pérdida o desgaste de arandelas de reglado. Bobina magnética derivada o cortada por exceso de temperatura. Rodamiento de la polea ruidoso o gripado. (pág. 72, 73, 188)

## Comportamiento en avería
Si la bobina no recibe corriente o se interrumpe su circuito, el embrague no se acopla y el compresor no gira, permaneciendo el sistema sin producción de frío. Si el embrague patina por falta de presión de contacto o holgura excesiva, las presiones no alcanzan los valores de trabajo. (pág. 72, 188)

## Cómo comprobarlo
Con un juego de galgas de espesores, medir la holgura entre la cara del disco frontal y la polea con el motor parado (debe estar entre 0,3 y 0,6 mm). Con un multímetro en escala de voltios, comprobar la presencia de tensión de batería (12 V/24 V) en el conector de la bobina al activar el mando de aire acondicionado. Con un ohmímetro, verificar la continuidad de la bobina. (pág. 73, 74, 98)

## Mantenimiento
Ajustar la holgura entre el disco frontal y la polea mediante la adición o retiro de arandelas de calibración en el eje. (pág. 73)

---

```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "93-96"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, electroventilador-condensador, filtro-deshidratador]
palabras: [condensacion, cambio de estado, alta presion, aluminio]
```

## Misión
Transformar el fluido refrigerante R134a de estado gaseoso a alta presión y alta temperatura (procedente del compresor) a estado líquido subenfriado, cediendo su calor al aire exterior que lo atraviesa. (pág. 28, 93)

## Tipos y características
Intercambiador térmico fabricado íntegramente en aluminio. Ubicado en la parte frontal del vehículo delante del radiador de refrigeración del motor.
Construcción en tres tecnologías: de tubos y aletas, de serpentín (tubo plano continuo con aletas onduladas) y de flujo paralelo (múltiples tubos horizontales en paralelo conectados a colectores laterales).
El racor de entrada siempre tiene mayor diámetro que el racor de salida debido a la diferencia de volumen del vapor frente al líquido. (pág. 35, 93, 95)

## Principio de funcionamiento
El vapor sobrecalentado entra por la parte superior a alta presión y alta temperatura. Al circular por los tubos, cede calor latente al flujo de aire forzado por la marcha o por el electroventilador, enfriándose hasta alcanzar la temperatura de condensación donde se licúa completamente antes de salir por la parte inferior. (pág. 28, 95)
📷 IMAGEN: Construcción y tipos de condensadores de aire acondicionado — Fuente: AA AUTOMOCION MD FR.pdf, pág. 94

## Valores de trabajo
Sometido a la Alta Presión del circuito. Con temperatura exterior de 30 ºC y motor a 1500-1800 rpm, trabaja con presiones de alta entre 8 y 20 bar según la carga y el tipo de compresor. (pág. 166)

## Anomalías frecuentes
Obstrucción externa por acumulación de insectos, barro o suciedad entre las aletas de aireación. Aletas dobladas por impactos de piedras. Fugas de refrigerante en los tubos o racores de unión. Obstrucción interna por residuos de aceite degradado o limaduras tras fallo de compresor. (pág. 66, 67, 95)

## Comportamiento en avería
Si se obstruye exteriormente o se reduce el flujo de aire, disminuye el intercambio térmico y la presión de alta sube de forma peligrosa (por encima de 25 bar), provocando el corte del compresor por el presostato de máxima. (pág. 131, 187)

## Cómo comprobarlo
Inspección visual de la limpieza del panal y alineación de aletas. Con manómetros en la toma de alta, comprobar si la presión sube excesivamente al estar el vehículo parado. (pág. 95, 187)

## Mantenimiento
Limpiar periódicamente con aire a presión o agua sin golpear las aletas de aluminio. En caso de sustitución por fallo del compresor, realizar lavado interno o sustituir si es de flujo paralelo. (pág. 67, 95)

---

```yaml
tipo: componente
titulo: Electroventilador del condensador
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "97-98"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, presostato, conmutador-mando-electroventilador]
palabras: [caudal de aire, aspiracion, empuje, presostato]
```

## Misión
Proporcionar un flujo forzado de aire a través del condensador cuando el vehículo se encuentra parado o circula a baja velocidad, garantizando la evacuación de calor del refrigerante. (pág. 95, 98)

## Tipos y características
Accionado por motor eléctrico de 12 V ó 24 V de corriente continua. Equipado con hélice axial, carcasa canalizadora para guiar el aire y rejilla de protección contra accidentes.
Puede instalarse por delante del condensador en posición de "empuje" (impulsando aire exterior hacia el condensador) o por detrás en posición de "aspiración" (absorbiendo aire a través del condensador hacia el motor). (pág. 97, 98)

## Principio de funcionamiento
Su marcha es controlada por la unidad de control o por el presostato de tres funciones (o termocontacto). Se conecta automáticamente al superar un umbral de alta presión en el circuito para enfriar el condensador y se desconecta cuando la presión desciende.
📷 IMAGEN: Posibilidades de montaje del electroventilador (empujando y en aspiración) — Fuente: AA AUTOMOCION MD FR.pdf, pág. 97

## Valores de trabajo
Tensión de alimentación: 12 V ó 24 V.
Presiones de activación por presostato de 3 funciones: conexión entre 14 y 17 bar; desconexión entre 11 y 14 bar. (pág. 98, 133)

## Anomalías frecuentes
Motor eléctrico quemado o derivado a masa. Fusible de protección fundido o relé de mando agarrotado. Giro en sentido contrario por inversión del cableado de alimentación durante el montaje. (pág. 141, 185)

## Comportamiento en avería
Si no funciona, la alta presión del circuito sube rápidamente hasta alcanzar 25-27 bar, provocando la desconexión del compresor por el presostato de máxima. Si gira en sentido contrario, contrapone el flujo de aire al de la marcha, manteniendo la alta presión en torno a 22-25 bar sin llegar a enfriar bien. (pág. 131, 185, 187)

## Cómo comprobarlo
Comprobar presencia de alimentación eléctrica de 12 V / 24 V en el conector del motor al activar el aire acondicionado o puentear los contactos del presostato/relé. Verificar visualmente que el sentido de flujo del aire vaya desde el exterior del vehículo hacia el compartimento motor. (pág. 97, 98, 141, 185)

## Mantenimiento
Comprobar el estado de las aspas y la rejilla de protección. (pág. 98)

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "99-101"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, valvula-expansion, mirilla]
palabras: [desecante, matriz molecular, humedad, deposito pulmon]
```

## Misión
Actuar como depósito pulmón para almacenar el exceso de refrigerante líquido según las variaciones de carga. Filtrar impurezas sólidas y deshumidificar el fluido R134a absorbiendo la humedad disuelta en el circuito. (pág. 99)

## Tipos y características
Recipiente cilíndrico de aluminio montado en el tramo de Alta Presión entre el condensador y la válvula de expansión.
En sistemas con tubo de expansión OT, se instala un vaso de expansión / acumulador en el tramo de Baja Presión entre el evaporador y el compresor para evitar el paso de líquido al compresor.
Contiene discos de contención, filtros de malla fina y una sustancia deshumidificadora (matriz molecular, silicagel o alúmina activa). Debe montarse en posición vertical con inclinación máxima de 30º. (pág. 99, 100)

## Principio de funcionamiento
El R134a líquido entra por el racor superior, atraviesa la bolsa de material desecante por gravedad y capilaridad, atrapando el agua retenida en el fluido, y pasa por las mallas de filtrado antes de salir por el tubo central hacia la válvula de expansión.
📷 IMAGEN: Sección interna de un filtro deshidratador de alta presión — Fuente: AA AUTOMOCION MD FR.pdf, pág. 100

## Valores de trabajo
En condiciones normales de funcionamiento, la temperatura del cuerpo del filtro deshidratador debe ser uniforme y caliente al tacto (a la temperatura del líquido de alta presión). (pág. 187)

## Anomalías frecuentes
Saturación de humedad del material deshumidificador. Obstrucción interna de las mallas filtrantes por partículas de desgaste del compresor o descomposición del desecante. (pág. 99, 174, 187)

## Comportamiento en avería
Si el filtro se obstruye o satura, provoca un estrechamiento en el circuito de alta: la presión de alta sube excesivamente (21 a 27 bar) y el cuerpo del filtro se enfría o se escarcha exteriormente por la caída repentina de presión. Si la toma de servicio está tras el filtro, la presión de baja indica valores anormalmente bajos o de vacío. (pág. 187)

## Cómo comprobarlo
Tocar la tubería de entrada y salida del filtro con la mano durante el funcionamiento del sistema: si se aprecia una diferencia de temperatura notable o si el filtro está frío/helado, está obstruido internamente. Medir presiones con los manómetros. (pág. 187)

## Mantenimiento
Es obligatorio reemplazar el filtro deshidratador cada vez que se abra el circuito frigorífico o al cambiar el compresor. Se debe instalar retirando los tapones de sellado justo antes de la conexión para evitar que absorba la humedad ambiente. (pág. 66, 67)

---

```yaml
tipo: componente
titulo: Mirilla de control
entidad: mirilla
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "101-102"
forma_parte_de: circuito-frigorifico
relacionados: [filtro-deshidratador, valvula-expansion]
palabras: [visor de flujo, burbujas, inspección óptica, R134a]
```

## Misión
Permitir la inspección visual directa del estado físico y la pureza del flujo de refrigerante R134a en estado líquido antes de ingresar a la válvula de expansión. (pág. 100, 102)

## Tipos y características
Visor óptico transparente de cristal montado en el bloque superior del filtro deshidratador o en la tubería rígida de alta presión. Elemento pasivo de diagnóstico. (pág. 100, 102)

## Principio de funcionamiento
Muestra el paso del refrigerante R134a líquido. Un flujo transparente indica que el refrigerante se encuentra 100 % en estado líquido sin bolsas de vapor.
📷 IMAGEN: Lectura de estados del refrigerante en la mirilla de control — Fuente: AA AUTOMOCION MD FR.pdf, pág. 102

## Valores de trabajo
Ubicado en la tubería de Alta Presión. (pág. 100)

## Anomalías frecuentes
Cristal del visor sucio o empañado por residuos internos.

## Comportamiento en avería
El visor no causa averías, pero permite identificar defectos del circuito:
- Presencia continua de burbujas: Carga insuficiente de refrigerante R134a o presencia de aire.
- Espuma o rayas permanentes: Exceso de aceite en el circuito o refrigerante no condensado.
- Fluido turbio u oscuro: Descomposición del aceite lubricante, acidez o presencia de limaduras metálicas.
- Visor totalmente transparente: Carga correcta o bien circuito completamente vacío sin presión. (pág. 99, 102, 182)

## Cómo comprobarlo
Observar el visor con el motor a 1500-1800 rpm y aire acondicionado a máxima potencia. Si se observan burbujas de forma continuada tras varios minutos de funcionamiento, falta carga de refrigerante. (pág. 165, 182)

## Mantenimiento
Limpieza del cristal exterior para permitir una visualización clara. (pág. 102)

---

```yaml
tipo: componente
titulo: Válvula de expansión termostática
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "103-116"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, filtro-deshidratador]
palabras: [dosificación, modulación, bulbo termostático, estrangulamiento]
```

## Misión
Provocar la caída brusca de presión y temperatura del refrigerante R134a líquido, pulverizándolo a la entrada del evaporador. Regula y dosifica el caudal de refrigerante enviado al evaporador en función de la temperatura de salida de este. (pág. 104)

## Tipos y características
Dos grandes configuraciones:
1. Válvula de expansión termostática modulante: variantes monobloc en "H" (de paso interno) o con bulbo sensible exterior fijado al tubo de salida del evaporador.
2. Tubo de expansión calibrado (Orificio Calibrado / Orifice Tube - OT): estrangulamiento fijo de tubo capilar con mallas filtrantes de entrada y salida, identificado por códigos de color (ej. rojo para Ford, azul/blanco para Audi/VW/GM). (pág. 104, 114, 116, 117)

## Principio de funcionamiento
Desarrolla dos funciones simultáneas:
- Dosificadora: el orificio calibrado interno reduce bruscamente la sección de paso, haciendo que el líquido a alta presión cambie a mezcla de líquido pulverizado/vapor a baja presión (30 % peso vapor / 70 % peso líquido).
- Modulante: el bulbo sensible detecta la temperatura del vapor a la salida del evaporador. Si la temperatura sube, la presión del gas dentro del bulbo vence al muelle interno y abre la aguja para aumentar el caudal; si baja, se cierra para evitar que llegue líquido al compresor.
📷 IMAGEN: Sección interna de una válvula de expansión monobloc en H y tubo OT — Fuente: AA AUTOMOCION MD FR.pdf, pág. 110, 115

## Valores de trabajo
Límite entre la zona de Alta Presión y Baja Presión.
Mantiene el recalentamiento en la salida del evaporador. Con temperatura exterior de 30 ºC, la presión de baja a la salida debe situarse entre 1,8 y 2,2 bar. (pág. 104, 165)

## Anomalías frecuentes
Obstrucción del orificio o filtro de entrada por suciedad o limaduras. Agravamiento por formación de una gota de hielo interna producida por humedad en el circuito. Rotura o pérdida de carga del gas del bulbo sensible. Aguja atascada en posición abierta o cerrada. (pág. 99, 116, 171, 172, 174)

## Comportamiento en avería
- Si la válvula queda obturada o cerrada: La presión de baja cae a 0 bar o vacío (-1 bar) y el evaporador no enfría.
- Si la válvula queda demasiado abierta: La presión de baja sube excesivamente (3,5 a 4,5 bar), el evaporador no enfría bien y hay riesgo de golpe de líquido al compresor.
- Si hay gota de hielo: El aire acondicionado deja de enfriar intermitentemente; al parar el sistema el hielo se funde y vuelve a enfriar temporalmente al arrancar. (pág. 171, 172, 174)

## Cómo comprobarlo
Con manómetros conectados, rociar spray enfriador directo sobre el bulbo sensible de la válvula: la presión de baja debe descender progresivamente hasta valores de vacío. Al retirar el frío, la presión debe retornar a su valor normal. Si no reacciona, la válvula está defectuosa y debe sustituirse junto con el filtro deshidratador. (pág. 171, 172, 175)

## Mantenimiento
Al reemplazar la válvula de expansión, es obligatorio sustituir también el filtro deshidratador y comprobar la presencia de aceite en el compresor. (pág. 172)

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "117-126"
forma_parte_de: circuito-frigorifico
relacionados: [valvula-expansion, compresor, filtro-habitaculo]
palabras: [ebullición, condensación de agua, humedad, bacterias, desinfección]
```

## Misión
Absorber el calor del aire del habitáculo haciendo hervir el refrigerante R134a que circula por su interior a baja presión y temperatura. Enfría y deshumidifica el aire enviado hacia el interior del vehículo. (pág. 117)

## Tipos y características
Intercambiador de calor de aluminio integrado en el mueble climatizador bajo el salpicadero o en el compartimento motor.
Construcción en batería de tubos y aletas o de placas paralelas.
Incluye carcasa envolvente, canal de recogida de agua condensada y tubo de descarga al exterior equipado con válvula de descarga antirretorno. (pág. 118, 120, 121)

## Principio de funcionamiento
El R134a entra pulverizado a baja presión y temperatura (~0 ºC). Al pasar el aire del habitáculo impulsado por la turbina entre sus aletas, el refrigerante absorbe su calor y hierve, pasando a estado de vapor.
La humedad contenida en el aire caliente se condensa sobre las aletas frías del evaporador, goteando hacia la bandeja de recogida y saliendo al exterior por el tubo de drenaje.
📷 IMAGEN: Estructura del evaporador y su carcasa con canal de condensados — Fuente: AA AUTOMOCION MD FR.pdf, pág. 118, 121

## Valores de trabajo
Ubicado en la zona de Baja Presión. La temperatura de ebullición del R134a en su interior es de aproximadamente 0 ºC a 2 bar de presión. (pág. 117, 165)

## Anomalías frecuentes
Proliferación de bacterias, hongos y microorganismos en la humedad residual de sus aletas, generando malos olores. Obstrucción exterior por polvo y suciedad si el filtro de habitáculo está dañado. Obstrucción del tubo o válvula de drenaje de condensados. Pérdida del revestimiento protector de aluminio que vuelve poroso el material. Congelación de la superficie exterior por fallo del termostato. (pág. 124, 125, 126, 164)

## Comportamiento en avería
Si se obstruye el drenaje, el agua condensada rebosa al suelo del habitáculo. Si se congela la superficie, se bloquea el paso de aire hacia los difusores y deja de salir aire frío. Si proliferan gérmenes, entra un olor muy desagradable al activar la ventilación. (pág. 124, 164, 177)

## Cómo comprobarlo
Verificar el flujo libre de agua condensada bajo el vehículo con el sistema en marcha. Inspeccionar si sale aire por los difusores. Si persisten los malos olores tras una desinfección antiseptica por ultrasonidos (ej. sistema EVIDIS), se debe desmontar y cambiar el evaporador por porosidad del recubrimiento. (pág. 125, 126)

## Mantenimiento
Verificar y limpiar el orificio de evacuación de condensados en cada revisión. Efectuar tratamientos antisepticos de desinfección mediante nebulización ultrasónica. (pág. 125, 126)

---

```yaml
tipo: componente
titulo: Filtro de habitáculo
entidad: filtro-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "127-128"
forma_parte_de: distribucion-aire
relacionados: [evaporador, ventilador-habitaculo]
palabras: [polen, polvo, carbón activo, caudal de aire]
```

## Misión
Retener las partículas de polvo, polen, esporas y suciedad del aire exterior o recirculado antes de que penetren en el habitáculo, protegiendo la salud de los ocupantes y evitando que la suciedad colmate el evaporador. (pág. 127, 128)

## Tipos y características
Elemento filtrante de papel/fibra sintética plisada intercambiable. Dos tipos principales: filtro simple antipolen (malla física) y filtro combinado con capa de carbón activo (para adsorción de gases nocivos y olores). Ubicado en la entrada de aire del climatizador. (pág. 127, 128)

## Principio de funcionamiento
Tamizado mecánico del aire aspirado por el ventilador de la calefacción/climatización a través de la red de microfibras plisadas. (pág. 128)

## Valores de trabajo
[No aplica] (pág. 128)

## Anomalías frecuentes
Saturación y obstrucción total por acumulación de suciedad, hojas y polen. Aparición de humedad acumulada en el elemento filtrante. (pág. 128)

## Comportamiento en avería
Si está obstruido, reduce drásticamente el caudal de aire impulsado por los difusores del salpicadero, fuerza el motor del ventilador produciendo sobrecalentamiento en su reostato de velocidades y genera desempañado deficiente del parabrisas. (pág. 128)

## Cómo comprobarlo
Extracción e inspección visual directa del estado de saturación del elemento filtrante. (pág. 126, 128)

## Mantenimiento
Revisar cada 10 000 km y sustituir obligatoriamente cada 12 000 a 15 000 km o una vez al año. En ambientes de mucho polvo u obras, reducir los plazos de sustitución. (pág. 128)

---

```yaml
tipo: componente
titulo: Presostato de mínima
entidad: presostato
variante: minima
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "129-130"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, embrague-compresor, termostato]
palabras: [válvula binaria, protección, falta de gas, corte por baja]
```

## Misión
Proteger el compresor interrumpiendo la alimentación del embrague electromagnético cuando la presión del refrigerante desciende por debajo de un umbral mínimo de seguridad (evitando que gire sin lubricante en caso de fuga de R134a). (pág. 129, 130)

## Tipos y características
Denominado también parte de la Válvula Binaria. Ubicado en el circuito de Alta Presión, sobre el bloque superior del filtro deshidratador o en la tubería rígida de alta. Dispone de 2 terminales eléctricos conectados en serie entre el termostato y la bobina del embrague electromagnético. (pág. 129, 130, 132)

## Principio de funcionamiento
Mecanismo de cilindro o membrana interna sometido a la presión del refrigerante contra un muelle de oposición. Si la presión en la línea es superior al valor de tarado del muelle, la membrana desplaza los contactos y cierra el circuito eléctrico; si la presión cae por falta de gas, el muelle abre los contactos y desconecta el compresor.
📷 IMAGEN: Ubicación y circuito eléctrico del presostato de mínima — Fuente: AA AUTOMOCION MD FR.pdf, pág. 130

## Valores de trabajo
Presión de contraste/corte por baja presión: abre contactos si la presión cae por debajo de 1,5 a 3 bar (cierra contactos por encima de 2 a 3 bar). (pág. 130, 133)

## Anomalías frecuentes
Sulfatación de los contactos eléctricos. Fugas de refrigerante por la rosca de fijación.

## Comportamiento en avería
Si el presostato queda averiado con sus contactos abiertos, el compresor no recibe corriente y no arranca aunque el circuito esté lleno de gas. Si se queda atascado en cerrado sin gas en el circuito, el compresor girará sin aceite hasta griparse. (pág. 66, 188)

## Cómo comprobarlo
Comprobar continuidad eléctrica entre sus dos terminales con un ohmímetro (debe dar 0 ohm si hay más de 3 bar de presión en el circuito). Conectar manómetros para verificar que la presión real supera los 2-3 bar. (pág. 130, 165)

## Mantenimiento
Reemplazo en caso de fallo eléctrico o fuga por su junta torica de sellado. (pág. 130)

---

```yaml
tipo: componente
titulo: Presostato de máxima
entidad: presostato
variante: maxima
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "131-132"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, embrague-compresor, electroventilador-condensador]
palabras: [sobrepresión, protección, corte por alta, válvula binaria]
```

## Misión
Proteger las tuberías, el compresor y los demás componentes del circuito contra presiones excesivas y peligrosas, interrumpiendo la alimentación del embrague electromagnético. (pág. 131)

## Tipos y características
Forma parte de la denominada Válvula Binaria. Ubicado en el lado de Alta Presión, habitualmente en la parte opuesta del presostato de mínima sobre el filtro deshidratador. Dispone de 2 terminales eléctricos en serie con el cableado del compresor. (pág. 131, 132)

## Principio de funcionamiento
Mecanismo de contactos normalmente cerrados. La presión del refrigerante actúa sobre una membrana interna en sentido opuesto a un muelle de tarado de alta presión. Si la presión de alta supera el valor de contraste, la membrana vence la fuerza del muelle y abre los contactos eléctricos, desconectando inmediatamente el compresor. (pág. 131)

## Valores de trabajo
Presión de contraste/corte por alta presión: abre el circuito a presiones comprendidas entre 25 bar y 27 bar. (pág. 133)

## Anomalías frecuentes
Contactos eléctricos fogueados o pegados. Descalibración del muelle interno.

## Comportamiento en avería
Si el presostato se avería quedando abierto, el compresor no engancha nunca. Si se atascara en cerrado y ocurriera una sobrepresión por fallo del ventilador, el compresor no desconectaría, pudiendo reventar una manguera o deformarse el condensador. (pág. 131, 188)

## Cómo comprobarlo
Medir continuidad entre sus dos terminales con multímetro en ohmímetro (debe dar 0 ohm en condiciones normales por debajo de 25 bar). Si marca circuito abierto a presión normal, el presostato está dañado. (pág. 131, 133)

## Mantenimiento
Sustitución en caso de fallo de corte o fuga. (pág. 131)

---

```yaml
tipo: componente
titulo: Presostato de 3 funciones
entidad: presostato
variante: trinaria
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "132-134"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, electroventilador-condensador, relé]
palabras: [válvula trinaria, tres funciones, corte por baja, corte por alta, control ventilador]
```

## Misión
Agrupar en un solo cuerpo tres funciones de seguridad y control: protección por mínima presión, protección por máxima presión y gestión automática de la puesta en marcha/paro del electroventilador del condensador. (pág. 133)

## Tipos y características
Denominado comúnmente Válvula Trinara. Instalado en la tubería o filtro deshidratador en el tramo de Alta Presión. Dispone de 4 terminales eléctricos: un par para el circuito de seguridad del compresor (en serie con el termostato y embrague) y otro par para excitar el relé del electroventilador. (pág. 132, 133)

## Principio de funcionamiento
Posee dos pares de contactos independientes accionados por membranas de presión:
- Primer par (seguridad): abre los contactos si la presión baja de 2-3 bar (mínima) o si supera los 25-27 bar (máxima).
- Segundo par (ventilador): cierra los contactos cuando la presión de alta sube entre 14 y 17 bar, alimentando el relé del electroventilador para enfriar el condensador. Cuando la presión desciende a 11-14 bar, vuelve a abrir los contactos desactivando el ventilador para ahorrar energía.
📷 IMAGEN: Esquema eléctrico y de funcionamiento de la Válvula Trinaria — Fuente: AA AUTOMOCION MD FR.pdf, pág. 133, 134

## Valores de trabajo
- Presostato de mínima: corte entre 2 y 3 bar.
- Presostato de máxima: corte entre 25 y 27 bar.
- Control de electroventilador: conexión entre 14 y 17 bar; desconexión entre 11 y 14 bar. (pág. 133)

## Anomalías frecuentes
Avería en los contactos de mando del electroventilador (el ventilador no arranca al subir la presión). Fogueado de contactos o fallo de estanqueidad. (pág. 132, 187)

## Comportamiento en avería
Si falla la etapa de control del ventilador, la alta presión sube sin control hasta llegar a 25-27 bar donde el compresor corta discontinuamente por máxima. Si falla el par de contactos de seguridad, el compresor no se activa en absoluto. (pág. 133, 187, 188)

## Cómo comprobarlo
Conectar manómetros e inspeccionar con multímetro los dos pares de terminales:
- Par de seguridad: debe dar continuidad (0 ohm) entre 3 y 25 bar.
- Par del ventilador: debe dar continuidad cuando el manómetro de alta supere los 14-17 bar. (pág. 133)

## Mantenimiento
Reemplazo directo de la unidad en caso de descalibración o fallo de contactos. (pág. 132)

---

```yaml
tipo: componente
titulo: Transmisor de presión de alta
entidad: transmisor-presion
area: climatizacion
sistema: circuito-frigorifico
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "134-137"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, compresor]
palabras: [PWM, cristal de silicio, modulada en anchura de impulsos, 50 Hz]
```

## Misión
Vigilar y medir continuamente la presión del fluido refrigerante en todo el ciclo de trabajo. Transforma la presión física en una señal digital PWM para que las UCEs de climatización y motor gestionen el ralentí, los escalones del electroventilador y la seguridad del compresor. (pág. 134, 135, 136)

## Tipos y características
Sensor electrónico piezoresistivo de nueva generación que sustituye a los presostatos mecánicos de contactos. Incorporado en la tubería rígida de Alta Presión. Alimentado con tensión continua por la UCE y equipado con un cristal de silicio y un microprocesador integrado. (pág. 134, 135, 136)

## Principio de funcionamiento
La presión del refrigerante se aplica contra un cristal de silicio, deformándolo mecánicamente y modificando su resistencia eléctrica. El microprocesador interno evalúa esta variación de resistencia y genera una señal de onda cuadrada modulada en anchura de impulsos (PWM) a una frecuencia fija de 50 Hz (período de 20 ms = 100 %).
📷 IMAGEN: Estructura interna del transmisor y oscilograma de la señal PWM de 50 Hz — Fuente: AA AUTOMOCION MD FR.pdf, pág. 136, 137

## Valores de trabajo
Frecuencia fija de señal: 50 Hz (duración de período B = 20 ms).
- A presión baja de 1,4 bar (0,14 MPa): anchura del impulso A = 2,6 ms (13 % del período).
- A presión de 37 bar (3,7 MPa): anchura del impulso A = 18 ms (90 % del período). (pág. 137)

## Anomalías frecuentes
Cable de señal cortado o derivado a masa. Fallo del microprocesador interno o fisura en el cristal de silicio. (pág. 136)

## Comportamiento en avería
Si la UCE no recibe señal (ej. cable cortado), la unidad de control desconecta inmediatamente el compresor por seguridad. En la memoria de autodiagnóstico de la UCE del motor queda registrada la avería (por ej. en el grupo VAG: *00819 Transmisor de Alta presión: Señal muy baja*). (pág. 136)

## Cómo comprobarlo
Conectar un osciloscopio digital en el cable de señal del sensor. Verificar la presencia de una onda cuadrada de 50 Hz con período de 20 ms, comprobando que la anchura del impulso positivo varía proporcionalmente al subir o bajar la presión en la estación de manómetros (2,6 ms a 1,4 bar). (pág. 137, 138)

## Mantenimiento
Verificar la limpieza del conector eléctrico de 3 pines y reemplazar el sensor si la señal PWM permanece fija o ausente. (pág. 136)

---

```yaml
tipo: componente
titulo: Conmutador de aviso de temperatura del líquido refrigerante
entidad: presostato
variante: temperatura-refrigerante-motor
area: motor
sistema: refrigeracion-motor
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "138-139"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [compresor, unidad-control-climatizador]
palabras: [sobrecalentamiento motor, desconexión de seguridad, 119 ºC, 112 ºC]
```

## Misión
Proteger el motor del vehículo contra sobrecalentamientos severos al someterlo a cargas muy intensas (ej. subida de puertos de montaña), desacoplando temporalmente la carga adicional que representa el compresor de aire acondicionado. (pág. 138)

## Tipos y características
Sensor/conmutador térmico de contactos montado en el circuito de refrigeración del motor. Conectado en serie con el circuito de mando del embrague del compresor. (pág. 138, 141)

## Principio de funcionamiento
Elemento bimetálico en contacto con el líquido refrigerante del motor. En condiciones normales de temperatura mantiene sus contactos cerrados. Si la temperatura del líquido refrigerante del motor alcanza un nivel crítico, los contactos se abren e interrumpen la corriente del compresor. (pág. 138)

## Valores de trabajo
- Umbral de desconexión del compresor: aproximadamente a 119 ºC.
- Umbral de reconexión del compresor: al descender a 112 ºC. (pág. 138)

## Anomalías frecuentes
Contactos oxidados o mecánicamente atascados en posición abierta.

## Comportamiento en avería
Si se avería quedando abierto, el compresor de aire acondicionado se desconecta permanentemente aunque el motor esté a temperatura normal. (pág. 138)

## Cómo comprobarlo
Medir continuidad eléctrica entre sus terminales con multímetro (debe dar 0 ohm a temperaturas de refrigerante del motor inferiores a 119 ºC). (pág. 138)

## Mantenimiento
Sustitución del conmutador y verificación del nivel de anticongelante del motor. (pág. 138)

---

```yaml
tipo: componente
titulo: Interruptor termostático
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "139-141"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, embrague-compresor]
palabras: [termostato, tubo capilar, congelación, sonda NTC]
```

## Misión
Detectar la temperatura del evaporador para conectar y desconectar el embrague electromagnético del compresor de forma cíclica, regulando la potencia frigorífica y evitando la congelación del evaporador. (pág. 138, 139)

## Tipos y características
Dos tecnologías principales:
1. Termostato mecánico de tubo capilar: provisto de un tubo capilar de cobre insertado entre las aletas del evaporador que contiene un gas sensible, fuelle/membrana y muelle de tarado ajustable.
2. Termostato electrónico: utiliza una sonda NTC sensible a la temperatura conectada a un módulo electrónico que conmuta la alimentación del compresor. (pág. 139, 142)

## Principio de funcionamiento
En el mecánico, la variación de volumen del gas del capilar por efecto de la temperatura hace comprimir o expandir el fuelle (fuerza Fp) contra la fuerza del muelle de regulación (Fm), accionando una palanca que abre o cierra los contactos eléctricos.
Desconecta el compresor cuando la temperatura desciende a valores próximos a la congelación y lo vuelve a conectar cuando la temperatura sube.
📷 IMAGEN: Esquema del funcionamiento del termostato de tubo capilar y sonda NTC — Fuente: AA AUTOMOCION MD FR.pdf, pág. 139, 142

## Valores de trabajo
- Temperatura de desconexión del compresor: aproximadamente a -1,5 ºC (o +1 ºC en electrónicos).
- Temperatura de reconexión del compresor: aproximadamente a +3 ºC superior a la de desconexión. (pág. 139, 142)

## Anomalías frecuentes
Fuga de gas del tubo capilar o rotura del mismo. Sonda NTC suelta o desplazada de las aletas del evaporador. Contactos eléctricos fogueados. (pág. 139)

## Comportamiento en avería
- Si queda averiado en cerrado: El compresor no desconecta nunca y el evaporador se congela completamente, bloqueando la salida de aire frío.
- Si queda abierto o sin gas en el capilar: El compresor no arranca. (pág. 139, 164)

## Cómo comprobarlo
Con manómetros conectados y aire acondicionado a máximo rendimiento, verificar si el compresor conecta y desconecta cíclicamente a las presiones de baja equivalentes a las temperaturas de corte (-1,5 ºC / +3 ºC). Con un ohmímetro, verificar la continuidad entre sus bornes según la temperatura del capilar. (pág. 139, 151)

## Mantenimiento
Asegurar que el bulbo/capilar esté correctamente insertado entre las aletas de la batería evaporadora sin doblarlo. (pág. 139)

---

```yaml
tipo: componente
titulo: Conmutador de mando del electroventilador del evaporador
entidad: servomotor-trampilla
variante: conmutador-ventilador-reostato
area: climatizacion
sistema: distribucion-aire
fuente: "AA AUTOMOCION MD FR.pdf"
paginas: "145-146"
forma_parte_de: distribucion-aire
relacionados: [ventilador-habitaculo, embrague-compresor]
palabras: [reostato, velocidades, selector rotativo, caudal de aire]
```

## Misión
Permitir al usuario seleccionar de forma manual y gradual la velocidad de rotación del electroventilador del evaporador para modificar el caudal de aire enviado al habitáculo. (pág. 146)

## Tipos y características
Selector rotativo de contactos eléctricos situado en el cuadro de mandos del salpicadero. Se combina con un reostato (grupo de resistencias en serie) para ofrecer de 3 a 4 velocidades de aireación. Dispone habitualmente de 5 contactos principales: B (alimentación batería), C (alimentación al termostato), L (baja velocidad), M (velocidad media) y H (alta velocidad). (pág. 138, 143, 146)

## Principio de funcionamiento
Al girar el mando a las posiciones L o M, la corriente eléctrica atraviesa las espirales del reostato, reduciendo la tensión aplicada al motor eléctrico del ventilador y reduciendo sus revoluciones.
En la velocidad máxima (H), el conmutador alimenta directamente el motor sin pasar por las resistencias. El contacto C asegura la alimentación del circuito de A/C sólo cuando el ventilador está activado en alguna velocidad.
📷 IMAGEN: Esquema del conmutador de mando y reostato de velocidades del ventilador — Fuente: AA AUTOMOCION MD FR.pdf, pág. 146

## Valores de trabajo
Alimentación de tensión: 12 V de corriente continua desde la batería. (pág. 146)

## Anomalías frecuentes
Espirales del reostato cortadas o quemadas por exceso de consumo del motor. Contactos internos del selector fogueados por uso. (pág. 146)

## Comportamiento en avería
Si se quema el reostato, el ventilador deja de funcionar en las velocidades 1, 2 y 3 (L, M), funcionando únicamente en la velocidad máxima 4 (H). Si no hace buen contacto en el terminal C, el compresor no arrancará en ninguna posición. (pág. 143, 146)

## Cómo comprobarlo
Con un multímetro en escala de voltios, comprobar la llegada de 12 V al terminal B. Medir tensión en las salidas L, M, H según la posición del selector. Verificar con ohmímetro la continuidad entre los extremos y tomas intermedias del reostato. (pág. 146)

## Mantenimiento
Sustitución del reostato o del grupo de mandos en caso de fallo de contactos. (pág. 146)

---

COBERTURA: documento «AA AUTOMOCION MD FR.pdf», páginas 1 a 191 de 191. [completo]