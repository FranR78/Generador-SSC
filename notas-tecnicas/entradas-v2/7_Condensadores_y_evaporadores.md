```yaml
tipo: componente
titulo: Condensador de aire acondicionado
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "7. Condensadores y evaporadores.pdf"
paginas: "64-65"
relacionados: [electroventilador-condensador, compresor, filtro-deshidratador]
palabras: [radiador frontal, licuación, serpentín, flujo paralelo, intercambio térmico]
```

## Misión
Recibir el refrigerante gaseoso y caliente procedente del compresor, enfriarlo ligeramente y licuarlo (pasarlo a estado líquido) cediendo su calor al aire exterior.

## Tipos y características
- **Tipo serpentín:** El fluido refrigerante debe recorrer todo el tubo continuo desde la parte superior hasta la inferior.
- **Tipo flujo paralelo:** El fluido dispone de distintos caminos paralelos para ir desde la entrada a la salida. Presenta un rendimiento superior al aumentar la velocidad de paso del fluido, pero es más propenso a las dilataciones y a fugas microscópicas por las soldaduras del propio aluminio. Requiere el uso de dos ventiladores.
- **Material y ubicación:** Fabricado en aluminio con tubos unidos por aletas para lograr una gran superficie de intercambio térmico. Va montado en la parte frontal del vehículo, delante del radiador de refrigeración del motor, en la zona de alta presión del circuito.

## Principio de funcionamiento
El agente frigorífico gaseoso y caliente impulsado por el compresor entra por la parte superior del condensador. Al circular por los tubos, las aletas de aluminio absorben el calor. La circulación de aire exterior (forzada por el electroventilador al conectar el A/C y complementada por el aire de marcha del vehículo) enfría el agente frigorífico, provocando su condensación y paso a estado líquido.

📷 IMAGEN: Esquema del flujo de fluido y paso de aire atmosférico a través del condensador y radiador con electroventilador — Fuente: 7. Condensadores y evaporadores.pdf, pág. 64

## Valores de trabajo
- **Temperatura del gas a la entrada (parte superior):** Entre 50 ºC y 70 ºC (en estado gaseoso procedente del compresor).
- **Temperatura del líquido a la salida (parte inferior):** En estado líquido y a unos 10 ºC menos que la temperatura de entrada (aproximadamente entre 40 ºC y 60 ºC).
- **Aceite retenido en su interior:** Aproximadamente 30 cc de aceite frigorífico.

## Anomalías frecuentes
- Acumulación de suciedad externa en la superficie frontal (polvo, hojarasca e insectos muertos).
- Fugas microscópicas por las soldaduras del aluminio (especialmente en los modelos de flujo paralelo debido a dilataciones).
- Aletas de aluminio dobladas por impactos o por lavado con agua a presión no perpendicular.

## Comportamiento en avería
- Reducción considerable del rendimiento de condensación y pérdida de capacidad de enfriamiento en el habitáculo.
- Sobrecalentamiento que afecta a la refrigeración del motor térmico al obstruirse el paso del aire exterior.

## Cómo comprobarlo
- Inspeccionar visualmente la superficie frontal y el aleteado buscando suciedad, aletas dobladas o manchas de aceite por fugas.
- Medir con termómetro la temperatura a la entrada (50-70 ºC) y a la salida (10 ºC menor) para verificar la condensación del fluido.

## Mantenimiento
- Limpieza periódica de la superficie frontal con agua a presión, proyectando el chorro de forma estrictamente perpendicular al condensador para no doblar las aletas de aluminio.

---

```yaml
tipo: componente
titulo: Evaporador de aire acondicionado
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "7. Condensadores y evaporadores.pdf"
paginas: "64-65"
relacionados: [valvula-expansion, deposito-colector, ventilador-habitaculo, filtro-habitaculo]
palabras: [radiador interior, ebullición, deshidratación, bacterias, mal olor, drenaje]
```

## Misión
Extraer el calor del aire destinado al habitáculo mediante la evaporación total del agente refrigerante en su interior, enfriando, deshidratando y depurando el aire antes de ser introducido al interior del vehículo.

## Tipos y características
- Intercambiador de calor fabricado en aluminio y dotado de aletas de refrigeración.
- Ubicado en la unidad climática en el interior del habitáculo, situado en la zona de baja presión del circuito frigorífico, colocado antes del radiador de calefacción.

📷 IMAGEN: Módulo climático con evaporador e introducción de aire refrigerado, deshidratado y depurado — Fuente: 7. Condensadores y evaporadores.pdf, pág. 65

## Principio de funcionamiento
El agente frigorífico líquido regulado por la válvula de expansión entra por la parte inferior del evaporador, se distensa y se enfría intensamente, pasando a estado gaseoso y entrando en ebullición. El calor necesario para hervir es extraído del aire forzado que atraviesa las aletas impulsado por la turbina de aire fresco. La humedad del aire se condensa en las aletas frías (al bajar del punto de rocío), generándose agua que se drena al exterior, mientras las partículas en suspensión se adhieren a la humedad, dejando el aire limpio y seco.

## Valores de trabajo
- **Temperatura de ebullición del refrigerante:** Bastante inferior a los 0 ºC (temperatura de congelación del agua).
- **Velocidad de la turbina:** Debe funcionar como mínimo a velocidad lenta (si no funciona, el compresor se desconecta por seguridad contra congelación).
- **Aceite retenido en su interior:** Aproximadamente 50 cc de aceite frigorífico.

## Anomalías frecuentes
- Acumulación excesiva e inundación por aceite frigorífico por exceso de lubricante en el circuito.
- Proliferación de bacterias y hongos por humedad en vehículos sin filtro antipolen, provocando malos olores.
- Congelación del panel de aletas por falta de caudal de aire o por fallo de la turbina.

## Comportamiento en avería
- Caída del rendimiento frigorífico del climatizador por inundación de aceite o por congelación del evaporador.
- Malos olores desagradables en el aire soplado por los difusores.

## Cómo comprobarlo
- Verificar la evacuación constante de agua condensada por el tubo flexible de drenaje del desagüe debajo del evaporador.
- Comprobar la temperatura del aire a la salida de las toberas y descartar presencia de exceso de aceite mediante la prueba de rendimiento a 5.000 r.p.m.

## Mantenimiento
- Sustitución del filtro antipolen al menos una vez al año.
- Aplicación periódica de productos químicos antibacterias para eliminar gérmenes e higienizar el evaporador.

---

```yaml
tipo: procedimiento
titulo: Purga de exceso de aceite en el evaporador
entidad: desaceitado-evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "7. Condensadores y evaporadores.pdf"
paginas: "65"
relacionados: [evaporador, aceite-frigorifico]
palabras: [inundación de aceite, 5000 rpm, recirculación, desaceitado, rendimiento]
```

## Objeto y alcance
Detectar y evacuar el exceso de aceite frigorífico acumulado en el interior del evaporador cuando este se inunda y provoca una pérdida de rendimiento del sistema de climatización.

## Condiciones previas
- Vehículo estacionado con el motor térmico a temperatura de servicio.
- Circuito de aire acondicionado completamente cargado y operativo.

## Equipo y material
- Termómetro de contacto o digital para toberas de ventilación.
- Equipos de protección individual (EPIs de taller).

## Pasos
1. Arrancar el motor térmico del vehículo y acelerarlo hasta mantenerlo a 5.000 r.p.m. de forma continua.
2. Seleccionar en el mando del climatizador la función de aire acondicionado (AC) activada y la temperatura de calefacción al máximo.
3. Ajustar la velocidad del ventilador/turbina al caudal máximo.
4. Conectar la función de recirculación de aire del habitáculo.
5. Mantener el motor funcionando en estas condiciones durante un tiempo exacto de 3 minutos.

## Valores de referencia
- Régimen del motor: 5.000 r.p.m.
- Tiempo de ejecución de la prueba: 3 minutos.
- Configuración del climatizador: AC activado, calefacción al máximo, caudal de aire al máximo y recirculación conectada.

## Verificación final
- Comprobar si aumenta el rendimiento frigorífico del climatizador tras la prueba. Si se constata un aumento de rendimiento, queda confirmado que existía un exceso de aceite retenido en el evaporador, procediendo a extraer el fluido sobrante del circuito con la estación de carga y reponer el nivel exacto según fabricante.

## Seguridad y normativa
- Realizar la prueba con aceleración a 5.000 r.p.m. en una zona bien ventilada o conectada al sistema de extracción de gases de escape del taller.

---

```yaml
tipo: procedimiento
titulo: Sustitución del condensador de aire acondicionado
entidad: sustitucion-condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "7. Condensadores y evaporadores.pdf"
paginas: "66-67"
relacionados: [condensador, electroventilador-condensador, vacio-y-carga]
palabras: [desmontaje, paragolpes, taponar tuberías, 30 cc aceite, vacío 45 minutos]
```

## Objeto y alcance
Desmontar el condensador deteriorado de la parte frontal del vehículo y realizar la instalación del nuevo componente garantizando la estanqueidad y el nivel correcto de aceite frigorífico en el circuito.

## Condiciones previas
- Recuperación previa y obligatoria de todo el agente frigorífico del circuito mediante estación de carga.
- Vaciado del circuito de refrigeración del motor si el modelo concreto lo requiere.

## Equipo y material
- Estación de carga de aire acondicionado y recuperación de refrigerante.
- Juego de llaves de vaso y dinamométrica.
- Tapones protectores para tuberías frigoríficas.
- Juntas tóricas nuevas compatibles con el refrigerante.
- Aceite frigorífico nuevo (30 cc para reponer el condensador).
- Tiras separadoras adhesivas y placas de protección contra impactos (si aplica).

📷 IMAGEN: Despiece del conjunto frontal de refrigeración (condensador, radiador de motor, electroventiladores y canalizadores) — Fuente: 7. Condensadores y evaporadores.pdf, pág. 66

## Pasos
1. Recuperar la totalidad del agente frigorífico del circuito con la estación de reciclaje.
2. Vaciar el líquido refrigerante del motor y desmontar los manguitos de refrigeración si la accesibilidad del modelo lo exige.
3. Desmontar el paragolpes delantero siguiendo las instrucciones del fabricante del vehículo.
4. Desconectar las tuberías de agente frigorífico del condensador e instalar inmediatamente tapones de cierre en los conductos para impedir la entrada de humedad e impurezas.
5. Extraer los tornillos de fijación y retirar el condensador (o extraer el conjunto completo formado por radiador, condensador y electroventiladores para su posterior separación en el banco de trabajo).
6. Verificar que las tiras separadoras adhesivas estén correctamente pegadas en el radiador según las medidas especificadas por el fabricante.
7. Instalar el separador entre el radiador de refrigerante del motor y el condensador si el modelo dispone de él.
8. Montar la placa protectora contra impactos de piedras en la parte inferior del condensador sujetándola con sus presillas.
9. Limpiar minuciosamente el alojamiento de los tubos, instalar juntas tóricas totalmente nuevas y embocar los tubos fijándolos con los tornillos adecuados aplicándoles el par prescrito.
10. Efectuar un proceso de vacío profundo en el circuito con la estación de carga durante un tiempo mínimo de 45 minutos.
11. Realizar la carga del agente frigorífico y añadir 30 cc de aceite frigorífico nuevo (o el total recomendado tras limpieza integral del circuito).

## Valores de referencia
- Volumen de aceite a añadir por sustitución de condensador: 30 cc de aceite frigorífico.
- Tiempo mínimo de vacío profundo antes de la carga: 45 minutos.

## Verificación final
- Comprobar visualmente la estanqueidad de los racores y verificar el correcto encendido del electroventilador y el rendimiento de condensación tras la carga.

## Seguridad y normativa
- Prohibida la liberación de agente frigorífico a la atmósfera; obligatorio el uso de estación de recuperación de gases fluorados.
- Usar gafas y guantes de protección durante el desacoplamiento de las tuberías presurizadas.

---

```yaml
tipo: procedimiento
titulo: Sustitución del evaporador de aire acondicionado
entidad: sustitucion-evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "7. Condensadores y evaporadores.pdf"
paginas: "68-71"
relacionados: [evaporador, valvula-expansion, vacio-y-carga]
palabras: [salpicadero, unidad climática, junta aislante, 50 cc aceite, vacío 45 minutos]
```

## Objeto y alcance
Desmontar el evaporador deteriorado ubicado en el interior del módulo climático bajo el salpicadero y realizar el montaje del nuevo componente, asegurando el sellado térmico de la carcasa y la estanqueidad de las uniones.

## Condiciones previas
- Recuperación completa del fluido refrigerante del circuito con la estación de carga.
- Desmontaje del tablero de instrumentos (salpicadero) según la documentación técnica del vehículo.

## Equipo y material
- Estación de carga de aire acondicionado.
- Herramientas manuales de desmontaje de guarnecidos interiores y salpicadero.
- Tapones obturadores para tuberías.
- Juntas tóricas nuevas compatibles.
- Junta aislante perimetral y aislamiento térmico para tubos de empalme y válvula de expansión.
- Aceite frigorífico nuevo (50 cc para reponer el evaporador).

📷 IMAGEN: Despiece de la carcasa plástica del módulo climático con el evaporador, soportes y juntas aislantes térmicas — Fuente: 7. Condensadores y evaporadores.pdf, pág. 70

## Pasos
1. Recuperar el agente refrigerante del circuito con la estación de carga.
2. Desmontar el tablero de instrumentos del habitáculo para acceder a la unidad climática.
3. Desconectar los tubos de entrada a la válvula de expansión y desmontar la válvula de expansión.
4. Taponar inmediatamente todos los tubos descubiertos para evitar la entrada de suciedad y humedad ambiental.
5. Marcar la posición de los conectores y desconectar todos los componentes eléctricos del climatizador.
6. Extraer la unidad climática completa del interior del habitáculo.
7. Retirar los tornillos, presillas y grapas de fijación para abrir las dos mitades de la carcasa plástica del evaporador.
8. Comprobar el estado del aislamiento del evaporador y de la válvula de expansión, extrayendo el evaporador con cuidado de no dañar los elementos aislantes.
9. Verificar y limpiar la tubería flexible de desagüe del agua de condensación.
10. Limpiar la carcasa y comprobar que la junta aislante perimetral esté bien pegada en todo el contorno del nuevo evaporador antes de alojarlo.
11. Colocar el soporte y el aislamiento térmico sobre los tubos de empalme del evaporador.
12. Unir las dos mitades de la carcasa y verificar el correcto asiento de la junta de aislamiento de los tubos (un mal aislamiento modifica la regulación de la válvula de expansión por irradiación de calor).
13. Instalar juntas tóricas nuevas en los alojamientos de los tubos de refrigerante.
14. Realizar un vacío profundo en el circuito de al menos 45 minutos para eliminar la humedad ambiental introducida durante la apertura del circuito.
15. Efectuar la carga de refrigerante añadiendo 50 cc de aceite frigorífico nuevo (o el total prescrito tras la limpieza del circuito).

## Valores de referencia
- Volumen de aceite a añadir por sustitución de evaporador: 50 cc de aceite frigorífico.
- Tiempo de vacío profundo obligatorio: Mínimo 45 minutos.

## Verificación final
- Comprobar la ausencia de vibraciones y ruidos en la turbina, verificar que la válvula de expansión regula adecuadamente sin alteraciones por radiación de calor y comprobar la salida de agua de condensación por el desagüe.

## Seguridad y normativa
- Usar protección ocular e higiénica. Manipular las carcasas y aislantes térmicos sin forzar los plásticos para evitar holguras que provoquen pérdidas de aire o ruidos parásitos.

---

COBERTURA: documento «7. Condensadores y evaporadores.pdf», páginas 64 a 71 de 71. [completo]