```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "3-32"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, filtro-deshidratador, electroventilador-condensador, ciclo-frigorifico]
palabras: [tubular, serpentin, multipaso, flujo paralelo, empujando, aspirando]
```

## Misión
Licuar el agente frigorífico en estado gaseoso procedente del compresor (pág. 3).

## Tipos y características
- **Condensador tubular**:
  - En los antiguos sistemas con R12 los tubos van montados en serie (pág. 6).
  - En los sistemas con R134a, al ser diferente su curva de destilación, los tubos son montados en paralelo (pág. 6, 10).
- **Condensador a serpentín o multipaso** (pág. 13, 14).
- **Condensador de flujo paralelo**: compuesto por tubos planos de extrusión, aletas con deflectores y colectores laterales de tipo simple y doble (pág. 16, 18, 20).
- **Esquemas de aireación / flujo de aire**:
  - Montaje "empujando": el electroventilador se ubica por delante del condensador impulsando el aire fresco del exterior (pág. 24, 26).
  - Montaje "aspirando": el electroventilador se ubica por detrás del condensador / radiador del motor, aspirando el aire a través del panal (pág. 24, 28).

📷 IMAGEN: Detalle sección de condensador de flujo paralelo con colector simple y doble — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 17 (pág. 17).
📷 IMAGEN: Ejemplos de flujo de aire en condensador con electroventilador empujando y aspirando — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 26 y 28 (pág. 26, 28).

## Principio de funcionamiento
Cede el calor acumulado en el agente frigorífico gaseoso (a alta presión y alta temperatura) al aire atmosférico exterior que lo atraviesa, logrando su enfriamiento y condensación total hasta el estado líquido (pág. 3, 32).

## Valores de trabajo
No documentado en fuentes (pág. 32).

## Anomalías frecuentes
No documentado en fuentes (pág. 32).

## Comportamiento en avería
No documentado en fuentes (pág. 32).

## Cómo comprobarlo
No documentado en fuentes (pág. 32).

## Mantenimiento
No documentado en fuentes (pág. 32).

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "33-36, 44, 48-65"
forma_parte_de: ciclo-frigorifico
relacionados: [condensador, valvula-expansion, mirilla, ciclo-frigorifico]
palabras: [desecante, deposito pulmon, barro, colmatacion, 3 horas]
```

## Misión
Deshidratar el circuito reteniendo la humedad mediante un agente desecante, actuar como depósito pulmón para absorber las variaciones de carga y filtrar las impurezas sólidas que circulan por el sistema (pág. 34, 36, 44, 49).

## Tipos y características
- Se instala en la línea de alta presión, entre la salida del condensador y la entrada de la válvula de expansión (pág. 36, 61).
- Consta de un contenedor metálico, bloque de racores de entrada y salida, tubo de toma sumergido, pantallas de sujeción, discos de contención, filtro metálico y cartucho/bolsas de sustancia deshumidificadora (desecante) (pág. 44, 62).

## Principio de funcionamiento
El líquido procedente del condensador entra por la parte superior, atraviesa la malla filtrante y la masa de desecante (que absorbe las moléculas de agua) y desciende al fondo del recipiente, desde donde es aspirado en fase líquida pura por el tubo sumergido hacia la válvula de expansión (pág. 44, 49, 62).

## Valores de trabajo
No documentado en fuentes (pág. 65).

## Anomalías frecuentes
- **Colmatación por "barro"**: formación de residuos viscosos, polvos finos o sólidos pegajosos ácidos derivados de la corrosión interna (pág. 51).
- **Disgregación del desecante**: descomposición del cartucho por vibraciones si no está empaquetado correctamente, esparciendo finas partículas que tupen las mallas metálicas (pág. 52).
- **Saturación por humedad**: incapacidad de retener más agua cuando el circuito ha permanecido abierto o ha utilizado aceite ya saturado (pág. 48, 51).
- **Retención de limaduras**: acumulación de partículas metálicas procedentes del desgaste o gripado del compresor (pág. 50, 52).

## Comportamiento en avería
Taponamiento parcial o total del orificio de la válvula de expansión, caída acusada del rendimiento frigorífico y aceleración de la corrosión por ácidos (pág. 50, 51, 52).

## Cómo comprobarlo
Verificación de salto térmico apreciable entre la tubería de entrada y la de salida (un filtro obstruido se enfria a la salida) o inspección visual a través de la mirilla (pág. 37, 51).

## Mantenimiento
- Sustitución obligatoria si el circuito ha permanecido abierto al aire más de 3 horas, tras un choque o accidente, ante un gripado del compresor o por saturación de humedad (pág. 44, 48, 51, 52).
- Mantener siempre taponados los racores durante intervenciones de taller para evitar la entrada de humedad ambiental (pág. 50).

---

```yaml
tipo: componente
titulo: Depósito colector
entidad: deposito-colector
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "37, 46-47, 57, 66-71"
forma_parte_de: ciclo-frigorifico
relacionados: [estrangulador, evaporador, compresor]
palabras: [baja presion, tubo en U, orificio de retroceso, 1 mm, filtro anti-liquido]
```

## Misión
Acumular refrigerante en estado gaseoso y líquido en instalaciones con tubo de expansión, filtrar y deshidratar el fluido y actuar como separador de líquido para evitar la aspiración de fase líquida por el compresor (pág. 37, 46, 57, 68).

## Tipos y características
- Se instala en el tramo de baja presión situado entre la salida del evaporador y la entrada de aspiración del compresor (pág. 37, 46, 66, 68).
- Dispone de mayor capacidad higroscópica (bolsas de deshumidificador), campana de protección, tubo interior en forma de "U" y un orificio calibrado de retroceso de aceite provisto de filtro de protección en el fondo (pág. 46, 68, 70, 71).

## Principio de funcionamiento
El refrigerante que sale del evaporador penetra en el acumulador. La fase líquida cae por gravedad al fondo, mientras que la fase gaseosa sube a la cúpula superior y entra por el extremo abierto del tubo en "U" hacia el compresor. El aceite depositado en el fondo es reaspirado hacia el compresor de manera dosificada a través del orificio de retroceso de 1 mm (pág. 46, 68, 70, 71).

📷 IMAGEN: Detalle en sección de un vaso de expansión / acumulador en baja presión con tubo en U y orificio de retroceso de aceite — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 70 (pág. 70).

## Valores de trabajo
Diámetro del orificio de retroceso de aceite: 1 mm (pág. 71).

## Anomalías frecuentes
Saturación del desecante por entrada de humedad o colmatación del filtro de protección del orificio de retroceso de aceite (pág. 48, 71).

## Comportamiento en avería
Riesgo de aspiración de refrigerante líquido por el compresor (golpe de líquido) o falta de retorno de aceite al compresor, derivando en gripado mecánico (pág. 46, 57, 71).

## Cómo comprobarlo
Inspección térmica del cuerpo del acumulador y verificación de la ausencia de escarcha en la tubería de aspiración.

## Mantenimiento
Sustitución obligatoria en caso de apertura del circuito por más de 3 horas o tras la reparación de averías mayores en el circuito (pág. 48).

---

```yaml
tipo: componente
titulo: Mirilla
entidad: mirilla
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "37-43, 63-65"
forma_parte_de: filtro-deshidratador
relacionados: [filtro-deshidratador, refrigerante-r12, refrigerante-r134a]
palabras: [visor, burbujas, transparente, manchas de aceite, estriada, aspecto lechoso]
```

## Misión
Permitir la verificación visual directa del estado de carga del refrigerante y la detección de anomalías o contaminantes en el fluido frigorífico (pág. 37, 40).

## Tipos y características
- Visor transparente de cristal montado en la parte superior del filtro deshidratador o en el bloque de racores en instalaciones con R12 (pág. 37, 38, 63, 65).
- En instalaciones con R134a y nuevos aceites sintéticos, el fluido adquiere un aspecto lechoso que vuelve inoperante la mirilla, motivo por el cual está en vías de desaparición (pág. 38).

## Principio de funcionamiento
Ofrece una ventana de observación del paso de refrigerante líquido a la salida del filtro deshidratador durante el funcionamiento del circuito (pág. 37, 40).

## Valores de trabajo
No documentado en fuentes (pág. 43).

## Anomalías frecuentes
- **Mirilla transparente (Estado A)**: indica carga correcta; o bien falta total de refrigerante (compresor no salta); o bien exceso de carga (pág. 40, 41).
- **Presencia de burbujas (Estado B)**: indica cantidad insuficiente de refrigerante; presencia de aire en el circuito; o regulación de compresión al bajar bruscamente las RPM en compresores de cilindrada variable (pág. 40, 42).
- **Manchas de aceite (Estado C)**: indica exceso de lubricante circulando por el equipo o falta de refrigeración (pág. 40, 43).
- **Refrigerador no uniforme / estriada (Estado D)**: indica desprendimiento de la sustancia deshumidificadora del filtro o presencia de limaduras metálicas (pág. 40, 43).

📷 IMAGEN: Detalle de los cuatro estados de lectura en la mirilla (A transparente, B burbujas, C aceite, D estriada) — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 39 y 40 (pág. 39, 40).

## Comportamiento en avería
Muestra patrones visuales alterados que permiten orientar el diagnóstico sobre falta de carga, aire, exceso de aceite o descomposición del desecante (pág. 40-43).

## Cómo comprobarlo
Observación visual del flujo refrigerante a través del cristal con el compresor en marcha a régimen estable (pág. 37, 40-43).

## Mantenimiento
Limpieza periódica del visor exterior para mantener la transparencia del cristal (pág. 43).

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "74-114"
forma_parte_de: ciclo-frigorifico
relacionados: [evaporador, filtro-deshidratador, ciclo-frigorifico]
palabras: [monobloque, en H, termostática, diafragma, 3 fuerzas, 30 grados]
```

## Misión
Regular y dosificar el flujo de refrigerante remitido al evaporador en función de la temperatura y la presión, reduciendo bruscamente la presión para obtener la máxima potencia frigorífica (pág. 79, 81, 83).

## Tipos y características
- **Válvula monobloque, en bloque o en "H"**: integra en un cuerpo rígido los pasos de alta y baja presión. Puede ser de diafragma exterior o de diafragma interno encapsulado gestionado térmicamente (pág. 81, 99, 103).
- **Válvula termostática en "L" o estándar**: cuenta con sensor termostático (bulbo o bobina) externo unido por tubo capilar. Puede incorporar ecualizador/estabilizador interior o ecualizador exterior (pág. 83, 90, 93, 95).

## Principio de funcionamiento
- Regula el paso del refrigerante mediante la acción combinada de 3 fuerzas sobre el diafragma (pág. 100):
  1. Presión del sensor (PFü): fuerza de apertura ejercida por el gas del bulbo al calentarse según la temperatura de salida del evaporador (pág. 100).
  2. Presión del evaporador (PSa): fuerza de cierre ejercida por la baja presión (pág. 100).
  3. Presión del muelle regulador (PFe): fuerza de cierre ejercida por el muelle (pág. 100).
- Estrangula el líquido de alta presión transformándolo en una mezcla difásica a baja presión y baja temperatura (pág. 97, 110).

📷 IMAGEN: Sección y esquema de fuerzas (PFü, PSa, PFe) en una válvula de expansión monobloc con diafragma — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 101 (pág. 101).

## Valores de trabajo
- Entrada a alta presión: 14 bar / kg/cm² a +50 ºC en estado líquido (pág. 97, 110).
- Salida a baja presión hacia evaporador: 1,5 bar / kg/cm² a -6 ºC en mezcla líquido + vapor (pág. 97, 110).
- Salida del evaporador hacia compresor: 1,5 bar / kg/cm² a +10 ºC en estado vapor (pág. 97, 110).
- Inclinación del sensor termostático sobre el tubo de salida: aproximadamente 30º respecto a la horizontal (pág. 112).

## Anomalías frecuentes
- Obstrucción del orificio calibrado por congelación de humedad (hielo), barro o partículas metálicas (pág. 50, 52).
- Perforación del diafragma o pérdida de carga del agente frigorífico en el bulbo sensor.

## Comportamiento en avería
- Bloqueo en posición cerrada: falta de enfriamiento, presión de baja anormalmente baja (vacío) y alta presión elevada.
- Bloqueo en posición abierta: evaporador anegado de líquido, baja presión alta y riesgo de golpe de líquido en el compresor.

## Cómo comprobarlo
Comprobación de presiones con manómetros y verificación de la diferencia de temperatura entre los tubos de entrada y salida del evaporador.

## Mantenimiento
Sustitución de la válvula en caso de agarrotamiento mecánico o presencia de limaduras tras un gripado del compresor (pág. 50, 52).

---

```yaml
tipo: componente
titulo: Estrangulador
entidad: estrangulador
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "85, 115-121"
forma_parte_de: ciclo-frigorifico
relacionados: [deposito-colector, evaporador, ciclo-frigorifico]
palabras: [tubo de expansion, orifice tube, capilar, orificio calibrado, colores, estrangulacion fija]
```

## Misión
Dosificar el caudal de refrigerante enviado al evaporador mediante una estrangulación fija (on-off) y separar las zonas de alta y baja presión en sistemas con acumulador en baja presión (pág. 85, 117, 254).

## Tipos y características
- Tubo plástico provisto de un orificio capilar metálico en su interior, filtro de entrada de malla más gruesa, filtro de salida de malla más fina y junta tórica de estanqueidad (pág. 86, 118, 119).
- **Código de colores según fabricante y diámetro**:
  - Rojo (Ford), Azul (Audi/Ford), Naranja (Ford), Negro (G.M.), Blanco (G.M./Audi), Marrón (Ford), Amarillo (Volvo), Verde (Ford), Violeta (Chrysler) (pág. 119, 120).

## Principio de funcionamiento
Efectúa una caída brusca de presión sin regulación modulante (el sobrecalentamiento no está controlado). El refrigerante líquido a alta presión (14 bar, +50 ºC) se pulveriza al atravesar el orificio capilar, saliendo a baja presión (1,5 bar, -6 ºC) compuesto por un 70% en peso de líquido (4% en volumen) y un 30% en peso de vapor (96% en volumen) (pág. 85, 119).

📷 IMAGEN: Sección de un tubo de expansión / estrangulador con filtro de entrada, tubo capilar y filtro de salida — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 118 (pág. 118).

## Valores de trabajo
- Entrada (Alta presión): 14 bar / kg/cm² a +50 ºC (líquido) (pág. 119).
- Salida (Baja presión): 1,5 bar / kg/cm² a -6 ºC (70% peso líquido / 4% vol.; 30% peso vapor / 96% vol.) (pág. 119).

## Anomalías frecuentes
Obstrucción parcial o total de las mallas filtrantes por partículas metálicas, barros o hielo (pág. 51, 52).

## Comportamiento en avería
Anulación del flujo frigorífico, caída drástica de la presión de baja hacia valores de vacío y falta absoluta de enfriamiento en el habitáculo.

## Cómo comprobarlo
Extracción del tubo con utillaje específico e inspección visual de la limpieza de sus mallas metálicas.

## Mantenimiento
Sustitución del estrangulador en toda intervención por falta de compresión o sustitución del compresor.

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "122-143"
forma_parte_de: ciclo-frigorifico
relacionados: [valvula-expansion, estrangulador, sensor-evaporador, ventilador-habitaculo]
palabras: [tubos y aletas, placas, deshumidificacion, tubo de descarga, condensacion, integrado]
```

## Misión
Evaporar el agente frigorífico en estado líquido absorbiendo el calor del aire del habitáculo, enfriando y deshumidificando el flujo de aire (pág. 123, 129).

## Tipos y características
- **Evaporador de tubos redondos y aletas** (pág. 129, 131).
- **Evaporador de placas**: compuesto por placas alveolares, columnas parcializadoras desviadoras de flujo, colectores de entrada y salida, aletas con deflectores y tubo de descarga de condensados con válvula antirretorno (pág. 133, 135).
- **Montaje e integración**:
  - Monobloque integral (pág. 136).
  - Semi-integrado (pág. 139).
  - Integrado bajo el salpicadero (junto al electroventilador, batería de calefacción, trampilla de mezcla y carcasa envolvente) (pág. 141, 142).

## Principio de funcionamiento
El refrigerante pulverizado a baja presión entra en el evaporador y ebulle al absorber el calor del aire soplado a través de sus aletas. La humedad presente en el aire se condensa sobre la superficie fría del panal y se evacúa al exterior por el tubo de drenaje de condensados (pág. 129, 135).

📷 IMAGEN: Sección de un evaporador de placas con colectores, aletas y tubo de descarga de condensación — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 134 (pág. 134).

## Valores de trabajo
No documentado en fuentes (pág. 143).

## Anomalías frecuentes
- Fugas de refrigerante por picaduras o corrosión en placas y tubos.
- Obstrucción del tubo de descarga de condensación, provocando acumulación de agua en el módulo y malos olores.
- Congelación de la batería por fallo en el termostato o sensor del evaporador (pág. 210).

## Comportamiento en avería
Ausencia de aire frío en los difusores, empañado de los cristales e inundación de agua sobre la moqueta del habitáculo por el drenaje atascado.

## Cómo comprobarlo
Prueba de estanqueidad mediante detector de fugas o nitrógeno, y verificación del libre goteo por el tubo de condensados.

## Mantenimiento
Tratamiento higiénico desinfectante de las aletas para evitar proliferación de hongos/bacterias y verificación del tubo de descarga (pág. 135).

---

```yaml
tipo: componente
titulo: Tuberías y racores
entidad: tuberias-y-racores
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "144-191"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, condensador, evaporador, ciclo-frigorifico]
palabras: [modulos, efecto de evasion, spring-lock, o-ring, lokring, tomas de servicio]
```

## Misión
Conducir el agente frigorífico a través de todos los componentes del circuito cerrado de climatización garantizando la estanqueidad (pág. 144, 146).

## Tipos y características
- **Tuberías flexibles multicapa**: construidas con caucho estanco interior, barrera de nylon (poliamida), doble malla de refuerzo textil y caucho exterior protector para impedir el "efecto de evasión" (fuga por porosidad del caucho) (pág. 148, 149, 172).
- **Módulos de tubería y dimensiones**:
  - **Módulo 6**: Racor 3/8", Ø int. 5/16" (7,9 - 8 mm), Ø ext. 19 mm (3/4"). Tramo: Condensador -> Botella y Botella -> Expansor (pág. 146, 147, 173, 174).
  - **Módulo 8**: Racor 1/2", Ø int. 13/32" (10,3 mm), Ø ext. 23 mm (29/32"). Tramo: Compresor -> Condensador (pág. 146, 147, 173, 176).
  - **Módulo 10**: Racor 5/8", Ø int. 1/2" (12,7 mm), Ø ext. 25,9 mm (1"). Tramo: Evaporador -> Compresor (pág. 146, 147, 173, 178).
  - **Módulo 12**: Racor 3/4", Ø int. 5/8" (15,9 mm) (pág. 173, 180).
- **Tipos de racores**: Cónicos, O'ring, Spring-Lock (Ford), Rotalock (con toma R12) y racores de brida (pág. 151-158).
- **Tomas de servicio**:
  - R12: racor roscado con válvula Schrader / espiga de 3 posiciones (prueba, trabajo y cierre) (pág. 160-165).
  - R134a: racor de enchufe rápido con distinto diámetro entre las tomas de Alta y Baja presión (pág. 167-170).
- **Juntas O'ring**: elastómeros de estanqueidad con cierre por contacto, compresión o aplastamiento (pág. 182, 183).
- **Sistemas de empalme / reparación**: engatillado con casquillo y sistema de unión metálica prensada Lokring (pág. 186-190).

📷 IMAGEN: Sección multicapa de tubería flexible (caucho, malla textil, barrera de nylon) — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 172 (pág. 172).

## Principio de funcionamiento
Canalizan el flujo de refrigerante soportando las variaciones de presión y temperatura del ciclo sin permitir fugas de gas.

## Valores de trabajo
- Tramo Módulo 8 (Compresor a Condensador): Vapor a ~120 ºC, Alta Presión, Ø int. 10,3 mm, Ø ext. 23 mm (pág. 147).
- Tramo Módulo 6 (Condensador a Botella y Botella a Expansor): Líquido a ~70 ºC, Alta Presión, Ø int. 7,9 mm, Ø ext. 19 mm (pág. 147).
- Tramo Módulo 10 (Evaporador a Compresor): Gas a ~10 ºC, Baja Presión, Ø int. 12,7 mm, Ø ext. 25,9 mm (pág. 147).

## Anomalías frecuentes
Fugas de refrigerante por resecamiento de juntas O'ring, rozadura de mangueras flexibles o deformación de racores.

## Comportamiento en avería
Descarga progresiva o rápida de la sustancia frigorífica, causando pérdida del rendimiento y disparo de presostatos de mínima.

## Cómo comprobarlo
Detección de fugas mediante lámpara de luz ultravioleta (trazador UV), agua jabonosa o detector electrónico de gas frigorífico (pág. 50).

## Mantenimiento
- Sustitución sistemática de juntas O'ring en todo desmontaje, humedeciéndolas previamente con aceite de compresor (pág. 184).
- Utilizar utillaje específico para desencajar racores Spring-Lock o para prensar empalmes Lokring (pág. 155, 188).

---

```yaml
tipo: componente
titulo: Presostato
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "192-195, 211-227"
forma_parte_de: control-climatizacion
relacionados: [compresor, electroventilador-condensador, transmisor-presion]
palabras: [presostato de minima, presostato de maxima, trinario, trinary, 2 bar, 28 bar]
```

## Misión
Prevenir daños en los componentes de la instalación de climatización interrumpiendo el funcionamiento del compresor o activando los motoventiladores ante presiones anómalas (pág. 192, 193).

## Tipos y características
- **Presostato de baja presión (mínima)**: interrumpe la alimentación del compresor cuando la presión desciende por debajo de 2 - 2,5 bar (o < 0,2 MPa / 2 bar) para evitar el funcionamiento sin lubricante (pág. 193, 214, 218).
- **Presostato de alta presión (máxima)**: interrumpe el compresor cuando la presión supera los 23 - 28,5 bar (o > 3,2 MPa / 24-32 bar) para evitar sobrepresiones peligrosas (pág. 193, 212, 219).
- **Presostato de GMV**: conecta la velocidad rápida del electroventilador cuando la alta presión alcanza 16 - 19 bar (pág. 193, 215).
- **Presostato de 3 funciones / Trinario (Trinary)**: integra los tres niveles de control en un único interruptor (pág. 195, 221, 226):
  - I Nivel (Mínima): conecta a 2 bar (pág. 226).
  - II Nivel (GMV): conecta a 16-17 bar y desconecta a 14 bar (pág. 226).
  - III Nivel (Máxima): desconecta a 27-28,5 bar y reconecta a 22 bar (pág. 193, 226).

## Principio de funcionamiento
Interruptores eléctricos mecánicos accionados por membranas o pistones sometidos a la presión hidráulica del refrigerante en el circuito (pág. 193, 194, 224).

📷 IMAGEN: Esquema de conexiones eléctricas del presostato trinario con relés, batería, compresor y electroventilador — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 225 y 227 (pág. 225, 227).

## Valores de trabajo
- Umbral de corte por baja presión: < 2,0 - 2,5 bar (0,2 MPa) (pág. 193, 214).
- Umbral de activación de GMV: 16 - 19 bar (1,6 MPa); desconexión a 14 bar (pág. 193, 215, 226).
- Umbral de corte por alta presión: > 23 - 28,5 bar (3,2 MPa); reconexión a 22 bar (pág. 193, 212, 226).

## Anomalías frecuentes
Fogueado o sulfatación de contactos internos, endurecimiento de la membrana accionadora o fugas de refrigerante por la rosca de fijación.

## Comportamiento en avería
Compresor inactivo a pesar de tener carga correcta, desconexiones intempestivas del aire acondicionado o falta de activación de la velocidad rápida del ventilador.

## Cómo comprobarlo
Medición de continuidad con polímetro entre sus bornes comparando los estados de apertura/cierre con las presiones leídas en los manómetros (pág. 226, 227).

## Mantenimiento
Sustitución del presostato defectuoso (suelen montarse sobre obús de retención permitiendo el cambio sin despresurizar el circuito).

---

```yaml
tipo: componente
titulo: Transmisor de presión
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "195, 228-238"
forma_parte_de: control-climatizacion
relacionados: [presostato, unidad-control-climatizador, electroventilador-condensador]
palabras: [piezoelectrico, cristal de silicio, PWM, 50 Hz, 20 ms, ciclo de trabajo]
```

## Misión
Captar de forma continua el valor de presión del refrigerante y transformarlo en una señal eléctrica para las unidades de control del motor y del electroventilador (pág. 195, 229).

## Tipos y características
- Sensor electrónico piezoeléctrico dotado de una resistencia de cristal de silicio y un microprocesador integrado (pág. 195, 231).
- Conector de 3 vías: Positivo de alimentación (+5 V), Negativo/Masa (-) y Salida de señal modulada en anchura de impulsos (PWM) (pág. 231, 232).

## Principio de funcionamiento
La presión del refrigerante deforma el cristal de silicio cambiando su resistencia eléctrica. El microprocesador convierte la tensión de medición en una señal cuadrada de frecuencia fija (50 Hz / período de 20 ms) cuya anchura de impulso (ciclo de trabajo) es directamente proporcional a la presión existente (pág. 231-237):
- A presión baja: anchura del impulso corta (ejemplo: 2,6 ms) (pág. 232, 233).
- A presión alta (creciente): la deformación del cristal aumenta la anchura del impulso (ejemplo: 18 ms) (pág. 235-237).

📷 IMAGEN: Detalle del transmisor de presión con cristal de silicio, microprocesador y forma de la onda PWM — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 231, 233 y 237 (pág. 231, 233, 237).

## Valores de trabajo
- Tensión de alimentación: +5 V (pág. 231).
- Duración del período de la señal PWM: 20 ms (Frecuencia = 50 Hz) (pág. 233, 237).
- Anchura de impulso a baja presión: 2,6 ms (pág. 233).
- Anchura de impulso a alta presión: 18 ms (pág. 237).

## Anomalías frecuentes
Avería del cristal de silicio por picos de presión, fallo del microprocesador o sulfatación en el conector de 3 bornes.

## Comportamiento en avería
La UCE inhabilita el acoplamiento del compresor por seguridad o fuerza el funcionamiento continuo de los electroventiladores a máxima velocidad.

## Cómo comprobarlo
- Medición con osciloscopio en la vía de señal: comprobar la presencia de la señal cuadrada con período fijo de 20 ms (50 Hz) y verificar la variación del ancho de impulso al modificar la presión (pág. 233, 237).
- Lectura del parámetro de presión en el bloque de valores de medición con el equipo de diagnosis (pág. 229).

## Mantenimiento
Sustitución completa del sensor en caso de señal deformada o ausencia de modulación PWM.

---

```yaml
tipo: componente
titulo: Electroventilador del condensador
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "196-204"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, presostato, transmisor-presion]
palabras: [doble motoventilador, serie, paralelo, velocidad lenta, resistencia R]
```

## Misión
Forzar la circulación de un flujo de aire a través del condensador para evacuar el calor del refrigerante y garantizar su condensación (pág. 196, 200).

## Tipos y características
- **Montaje de doble motoventilador**: utiliza dos motores eléctricos comandados por relés (pág. 196-200).
- **Montaje de motoventilador simple**: utiliza un único motor con una resistencia adicional R conectada en serie para la velocidad lenta (pág. 200-204).

## Principio de funcionamiento
- **Doble motoventilador**:
  - *Baja velocidad*: Los dos motores se conectan en **SERIE**. La tensión de la batería se reparte entre ambos (~6 V cada uno), girando a revoluciones reducidas (pág. 198).
  - *Alta velocidad*: Al subir la presión (16-19 bar), los relés conectan los dos motores en **PARALELO**. Cada motor recibe +12 V directos, girando a máximas revoluciones (pág. 200).
- **Motoventilador simple**:
  - *Baja velocidad*: La corriente pasa a través de la **resistencia R en serie** con el motor GMV, reduciendo la tensión y la velocidad (pág. 202).
  - *Alta velocidad*: El relé deriva la corriente directamente al motor GMV sin pasar por la resistencia R (+12 V directos) (pág. 204).

📷 IMAGEN: Esquemas eléctricos de conexión de motoventiladores dobles en serie (baja velocidad) y en paralelo (alta velocidad) — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 198 y 200 (pág. 198, 200).

## Valores de trabajo
Tensión de alimentación: +12 V (pág. 198, 200).

## Anomalías frecuentes
Fallo de la resistencia R en motoventiladores simples, desgaste de escobillas del motor o relés de mando con contactos fogueados.

## Comportamiento en avería
Elevación acusada de la alta presión al detener el vehículo al ralentí, provocando el disparo del presostato de máxima (> 28 bar) y el corte repetido del climatizador (pág. 193).

## Cómo comprobarlo
Alimentación directa con +12 V al conector del motor y comprobación de la continuidad de la resistencia R mediante un óhmetro.

## Mantenimiento
Sustitución de la resistencia adicionales de velocidad lenta o del grupo motoventilador completo en caso de agarrotamiento mecánico.

---

```yaml
tipo: componente
titulo: Sensor de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "210, 238-248"
forma_parte_de: control-climatizacion
relacionados: [evaporador, compresor, unidad-control-climatizador]
palabras: [termostato mecanico, termostato electronico, sonda NTC, congelacion, 0 grados]
```

## Misión
Medir la temperatura en el panal del evaporador para desconectar el compresor cuando la temperatura roza los 0 ºC, evitando la congelación del agua condensada sobre sus aletas (pág. 210, 240).

## Tipos y características
- **Termostato mecánico**: compuesto por carcasa, fuelle, tubo capilar con sensor de fluido, muelle, tornillo de regulación con pomo, palanca e interruptor eléctrico de 2 o 3 contactos (pág. 239-242).
- **Termostato electrónico**: compuesto por una sonda NTC (resistencia con coeficiente de temperatura negativo) insertada entre las aletas, centralita/módulo electrónico de control, potenciómetro/reostato y relé de mando del compresor (pág. 242-247).

## Principio de funcionamiento
- *Mecánico*: Al descender la temperatura del evaporador, el fluido dentro del bulbo capilar se contrae, reduciendo la fuerza de presión (Fp) sobre el fuelle. Cuando la fuerza del muelle (Fm) supera a Fp, la palanca bascula y abre el interruptor, cortando la alimentación del embrague del compresor (pág. 239, 240).
- *Electrónico*: La sonda NTC varía su resistencia en función de la temperatura. El módulo electrónico analiza la señal y, al alcanzar el umbral de congelación (0 ºC - 1 ºC), desactiva la salida del relé del compresor (pág. 246, 247).

📷 IMAGEN: Esquema del termostato mecánico con fuelle, capilar y muelle de regulación, y esquema del termostato electrónico — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 239 y 247 (pág. 239, 247).

## Valores de trabajo
Umbral de corte por prevención de congelación: 0 ºC a +1 ºC en el evaporador (pág. 240, 247).

## Anomalías frecuentes
Descalibración del muelle en termostatos mecánicos o alteración de la curva de resistencia de la sonda NTC por degradación.

## Comportamiento en avería
- Si queda continuamente cerrado: el evaporador se bloquea por formación de hielo, impidiendo el paso del flujo de aire hacia los difusores.
- Si queda abierto: el compresor nunca llega a acoplarse.

## Cómo comprobarlo
Medición de la resistencia eléctrica de la sonda NTC a diferentes temperaturas o comprobación del punto de corte del termostato mecánico sumergiendo la sonda en agua helada.

## Mantenimiento
Sustitución de la sonda NTC o del módulo del termostato si no efectúa el corte a la temperatura de consigna.

---

```yaml
tipo: fundamento
titulo: Tipos de instalaciones de climatización
entidad: tipos-instalaciones-climatizacion
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx"
paginas: "250-256"
relacionados: [ciclo-frigorifico, valvula-expansion, estrangulador, filtro-deshidratador, deposito-colector]
palabras: [sistema ciclico, sistema anegado, alta presion, baja presion, capilar]
```

## Objeto
Clasificación y arquitectura de los circuitos frigoríficos automotrices según la estrategia de expansión del refrigerante y la ubicación del elemento filtro desecante (pág. 250-256).

## Fundamento
El método empleado para reducir la presión del refrigerante determina si el flujo hacia el evaporador es modulante o fijo, condicionando la posición del depósito desecante en la zona de alta o baja presión para proteger al compresor (pág. 250, 252, 254).

## Desarrollo
- **1. Instalaciones con filtro desecante a alta presión (Sistema Cíclico / Regulado)**:
  - La expansión tiene lugar mediante una estrangulación modulante introducida por una **válvula de expansión** (de bloque o en L) (pág. 252).
  - El filtro deshidratador se ubica en el tramo de tubería a alta presión que une el condensador con la válvula de expansión (pág. 252).
  - El caudal alimentado al evaporador se ajusta exactamente a la carga térmica, garantizando que el refrigerante sale en fase gaseosa hacia el compresor (pág. 252).
- **2. Instalaciones con filtro desecante a baja presión (Sistema Anegado / Capilar)**:
  - La expansión se obtiene mediante una estrangulación fija (on-off) formada por un **tubo de expansión / capilar (OT)** montado cerca del evaporador (pág. 254, 256).
  - El evaporador trabaja anegado de refrigerante sin regulación modulante del sobrecalentamiento (pág. 254, 256).
  - El **acumulador / deshidratador** se sitúa obligatoriamente en el conducto de baja presión entre el evaporador y el compresor para separar el líquido no evaporado y evitar el golpe de líquido en el compresor (pág. 254, 256).

📷 IMAGEN: Esquema comparativo de instalación cíclica con válvula de expansión y filtro en alta presión frente a instalación anegada con tubo de expansión y acumulador en baja presión — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, pág. 251 y 255 (pág. 251, 255).

## Valores de referencia
No documentado en fuentes (pág. 256).

## Errores de concepto frecuentes
Confundir la ubicación del filtro desecante, olvidando que en sistemas con válvula de expansión va en alta presión (filtro deshidratador) y en sistemas con tubo de expansión / capilar va en baja presión (acumulador) (pág. 252, 256).

COBERTURA: documento «4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx», páginas 1 a 256 de 256. [completo]