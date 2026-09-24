```yaml
tipo: diagnostico
titulo: Diagnosis de presiones de trabajo y prueba de rendimiento
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "123"
relacionados: [compresor, carga-refrigerante]
palabras: [presión de alta, presión de baja, prueba de rendimiento, aireadores, difusores]
```

## Síntoma
Insuficiencia de enfriamiento del habitáculo o necesidad de verificación de la eficiencia global del equipo de aire acondicionado. (pág. 123).

## Causas posibles
Desviación en las presiones de trabajo del compresor (fijo o variable) o caudal/temperatura de aire inadecuados en los difusores por anomalías en el circuito. (pág. 123).

## Cómo separar las causas
1. Conectar las mangueras de alta y baja presión del equipo de diagnosis al vehículo manteniendo cerradas todas las válvulas de la estación de carga. (pág. 123).
2. Arrancar el motor a 1.500 rpm y conectar el aire acondicionado con la turbina de aire fresco a máxima velocidad. (pág. 123).
3. Verificar si las presiones de alta y baja se sitúan dentro de los valores prescritos según el tipo de compresor:
   - Compresor variable: alta presión constante entre 8 y 10 bares (puede subir hasta 12 bares con temperaturas exteriores muy elevadas); baja presión constante a 2 bares. (pág. 123).
   - Compresor fijo: alta presión variable entre 10 y 20 bares; baja presión variable entre 0,5 y 2,5 bares. (pág. 123).
4. Efectuar la prueba de rendimiento: mantener el motor a 1.500 rpm con la turbina a máxima velocidad y la recirculación activada. Dirigir la salida de aire hacia los difusores centrales y cerrar las salidas laterales. (pág. 123).
5. Colocar un termómetro en los difusores centrales, medir la temperatura de salida del aire y compararla con la temperatura exterior según la tabla de rendimiento. (pág. 123).

## Valores de referencia
- Presiones de trabajo para compresor variable (a 1.500 rpm, turbina máxima): Alta = 8 a 10 bar (máximo 12 bar con calor extremo) | Baja = 2 bar constante. (pág. 123).
- Presiones de trabajo para compresor fijo (a 1.500 rpm, turbina máxima): Alta = 10 a 20 bar | Baja = 0,5 a 2,5 bar. (pág. 123).
- Tabla de prueba de rendimiento (temperatura exterior frente a temperatura en aireadores centrales a 1.500 rpm con recirculación):
  - 15 ºC exterior: 2 a 4 ºC en aireadores. (pág. 123).
  - 20 ºC exterior: 4 a 6 ºC en aireadores. (pág. 123).
  - 26 ºC exterior: 4 a 7 ºC en aireadores. (pág. 123).
  - 32 ºC exterior: 5 a 8 ºC en aireadores. (pág. 123).
  - 37 ºC exterior: 7 a 10 ºC en aireadores. (pág. 123).

## Verificación tras la reparación
Medir que la temperatura en los aireadores centrales y las presiones de alta y baja se sitúen dentro de los márgenes de las tablas de referencia según la temperatura ambiente exterior. (pág. 123).

---

```yaml
tipo: procedimiento
titulo: Desconexión del equipo de carga y recuperación de refrigerante de mangueras
entidad: recuperacion-refrigerante
area: climatizacion
sistema: equipos-taller
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "123"
relacionados: [carga-refrigerante, vacio-circuito]
palabras: [mangueras de servicio, aspiración de refrigerante, descalibración de manómetros, manómetros a cero]
```

## Objeto y alcance
Recuperar el agente frigorífico residual que permanece en el interior de las mangueras de servicio tras completar la carga, evitando emisiones al exterior y la descalibración de los manómetros de la estación. (pág. 123).

## Condiciones previas
Sistema de aire acondicionado del vehículo en funcionamiento y mangueras de alta y baja presión conectadas a las tomas de servicio. (pág. 123).

## Equipo y material
Estación de carga / puente de manómetros de climatización con válvulas de paso y enchufes rápidos de servicio. (pág. 123).

## Pasos
1. Con el sistema de aire acondicionado funcionando, desconectar la manguera de "ALTA" de la toma del vehículo. (pág. 123).
2. Abrir la válvula de "ALTA" de la estación de carga. (pág. 123).
3. Abrir lentamente la válvula de "BAJA" para que la aspiración del compresor absorba el refrigerante contenido en el interior de los tubos. (pág. 123).
4. Cuando las agujas de las presiones de alta y baja se igualen, cerrar las válvulas de "ALTA" y "BAJA". (pág. 123).
5. Desconectar la manguera de "BAJA" de la toma del vehículo. (pág. 123).
6. Recuperar el refrigerante residual de los tubos en la estación hasta que los manómetros queden exactamente a cero. (pág. 123).

## Valores de referencia
Presión final requerida en las agujas de los manómetros tras la evacuación de mangueras: 0 bar. (pág. 123).

## Verificación final
Comprobar visualmente que las agujas de los relojes de manómetros de alta y baja reposan exactamente en la marca de cero bar. (pág. 123).

## Seguridad y normativa
Es imprescindible dejar los manómetros a cero para evitar que se descalibren y con el tiempo marquen presiones erróneas en el taller. (pág. 123).

---

```yaml
tipo: diagnostico
titulo: Diagnosis de averías hidráulicas según presiones de trabajo
entidad: lectura-manometros
variante: averias hidraulicas
area: climatizacion
sistema: circuito-frigorifico
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "124-126"
relacionados: [compresor, valvula-expansion, condensador, filtro-deshidratador]
palabras: [carga baja, carga excesiva, presiones en reposo, compresor fijo, compresor variable, tabla de averías]
```

## Síntoma
Incapacidad de enfriar, temperatura de aireadores alta, variaciones o fluctuaciones anómalas de las presiones de alta y baja, o sobrecarga/desgaste excesivo del compresor. (págs. 124-126).

## Causas posibles
- Carga baja o insuficiente de refrigerante (fuga). (págs. 124-126).
- Carga excesiva de refrigerante. (págs. 124-126).
- Presencia de aire/humedad o exceso de aceite en el circuito. (pág. 126).
- Obstrucción en la línea de líquido o filtro deshidratador bloqueado. (pág. 126).
- Válvula de expansión defectuosa o trabada (muy abierta o cerrada). (pág. 126).
- Condensador sucio/obstruido o fallo del electroventilador. (pág. 126).
- Avería en las válvulas de descarga, juntas o fallo mecánico interno del compresor. (pág. 126).

## Cómo separar las causas
1. Medir las presiones con el vehículo en reposo y compararlas con la temperatura ambiente. (pág. 125).
2. Conectar manómetros y medir presiones con el motor a 1.500 rpm y el A/C activado. (págs. 124-125).
3. Evaluar el comportamiento en compresores variables eléctricos (tomando como base una carga nominal de 550 g):
   - Carga normal (550 g): Ralentí (Baja 1,8 bar, Alta 9 bar, 2,4 ºC, Reposo 5 bar); A 1.500 rpm (Baja 1,4 bar, Alta 12 bar, 1,7 ºC). (pág. 124).
   - Carga baja (300 g): Ralentí (Baja 1,4-1,6 bar, Alta 8-12 bar, 2,2 ºC, Reposo 4,5 bar); A 1.500 rpm (Baja 1,8 bar, Alta 9-10 bar). Con poco gas, la baja es muy baja y la alta fluctúa. (pág. 124).
   - Carga excesiva (1000 g): Ralentí (Baja 1,8 bar, Alta 10 bar, 1,7 ºC, Reposo 5 bar); A 1.500 rpm (Baja 1,6 bar, Alta 10,5 bar, 1,1 ºC). El compresor absorbe más potencia y sufre más desgaste. (págs. 124-125).
4. Evaluar el comportamiento en compresores fijos a 1.500 rpm (con R134a):
   - Carga normal: Baja 1,5 a 2,5 bar | Alta 13,5 a 15 bar. (pág. 125).
   - Carga baja: Baja 0,5 a 1 bar | Alta 6,5 a 9 bar (si al acelerar la baja cae de 0,5 bar existe riesgo de congelación). (pág. 125).
   - Carga excesiva: Baja 2,5 a 3,5 bar | Alta 19 a 24 bar. (pág. 125).
5. Interpretar los síntomas de la tabla de diagnóstico por presiones:
   - Alta normal y Baja normal con aireadores calientes: exceso de aceite, contaminación por aire/humedad (recuperar, lavar, vacío y cargar cantidad correcta de aceite/gas) o válvula de expansión cerrada. (pág. 126).
   - Alta normal y Baja normal con tubería de baja más fría que el evaporador: válvula de expansión muy abierta. (pág. 126).
   - Alta muy alta y Baja muy alta: exceso de refrigerante, condensador obstruido o fallo del electroventilador. Si al enfriar el condensador con agua la alta desciende, confirma problema de condensación. (pág. 126).
   - Alta y Baja se igualan/equilibran rápidamente al parar o no varían al acelerar: fallo mecánico del compresor, juntas o válvula de descarga. (pág. 126).
   - Alta baja y Baja muy baja: baja cantidad de refrigerante por fuga (reparar fuga, hacer vacío y recargar). (pág. 126).
   - Alta alta y Baja muy baja (con hielo en línea de líquido o filtro deshidratador): obstrucción en la línea de líquido o filtro deshidratador bloqueado (sustituir filtro o manguito). (pág. 126).

## Valores de referencia
- Presiones normales de trabajo de referencia: Compresor fijo (Baja 1 a 2 kg/cm², Alta 10 a 15 kg/cm²); Compresor variable (Baja 1,8 a 2,2 kg/cm², Alta 8 a 12 kg/cm²). (pág. 124).
- Presiones aproximadas en reposo según la temperatura exterior:
  - 15 ºC: 3,9 bar. (pág. 125).
  - 20 ºC: 4,7 bar. (pág. 125).
  - 25 ºC: 5,5 bar. (pág. 125).
  - 30 ºC: 6,6 bar. (pág. 125).
  - 35 ºC: 7,5 bar. (pág. 125).
  - 40 ºC: 8,8 bar. (pág. 125).
  - 45 ºC: 9,8 bar. (pág. 125).
- Variaciones de presión de trabajo según la temperatura exterior (Compresor fijo R134a):
  - 15 ºC: Baja 1,2 - 1,5 bar | Alta 8 - 10 bar. (pág. 125).
  - 20 ºC: Baja 1,5 - 1,8 bar | Alta 9 - 12 bar. (pág. 125).
  - 26 ºC: Baja 1,8 - 2 bar | Alta 12 - 14,5 bar. (pág. 125).
  - 32 ºC: Baja 2,1 - 2,3 bar | Alta 14,5 - 18 bar. (pág. 125).
  - 37 ºC: Baja 2,3 - 2,5 bar | Alta 18 - 20 bar. (pág. 125).

## Verificación tras la reparación
Medir que las presiones de alta y baja se estabilicen dentro de los rangos teóricos de la tabla según la temperatura exterior y comprobar la temperatura en los aireadores. (págs. 123, 125).

---

```yaml
tipo: diagnostico
titulo: Diagnosis de averías internas y daños mecánicos del compresor
entidad: diagnostico-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "126-130"
relacionados: [compresor, valvula-expansion, aceite-frigorifico, filtro-deshidratador]
palabras: [presiones igualadas, placa de válvulas, golpe de líquido, humedad, color del aceite, virutas, purpurina]
```

## Síntoma
Las presiones de alta y baja están igualadas con el compresor girando, ruidos mecánicos internos, calentamiento excesivo o gripado del eje del compresor. (págs. 126, 128-130).

## Causas posibles
- Fallo eléctrico o mecánico en el embrague electromagnético o en el sistema de seguridad de compresores sin embrague. (pág. 126).
- Averías internas: electroválvula de regulación defectuosa, placa de válvulas de admisión o descarga rota/deformada, desgaste de pistones o fugas internas. (págs. 127-129).
- Daños por falta de lubricante y/o refrigerante de retorno: desgaste en el plato oscilante, rótula de pistón soldada/deformada por fugas, baja carga o pinzamiento de tuberías. (págs. 128-129).
- Daños por suciedad o virutas: partícula atrapada bajo la válvula de descarga que impide su cierre, rotura de láminas o bielas dobladas por partículas duras. (págs. 128-129).
- Daños por entrada de refrigerante líquido: válvula de expansión defectuosa (bloqueada abierta) o carga de refrigerante realizada por la toma de baja en fase líquida (provoca ruidos y quema el embrague). (pág. 128).
- Daños por presencia de humedad: formación de ácidos que corroen y atacan la cabeza de los pistones. (págs. 128-130).
- Desuso prolongado: fugas de refrigerante por el retén o por microporos de las mangueras. (págs. 128-129).
- Estado del aceite usado (diagnóstico visual por color y olor):
  - Aceite rojo: presencia de restos de humedad en el circuito. (pág. 130).
  - Aceite negro: desgastes mecánicos intensos, coquización o gripado por temperatura. (pág. 130).
  - Aceite purpurina: presencia de partículas y virutas metálicas por golpes o desgaste de componentes internos. (pág. 130).

## Cómo separar las causas
1. Asegurar primero que el compresor gira efectivamente y que no es una avería del embrague electromagnético ni del sistema de seguridad de la polea. (pág. 126).
2. Si giran el eje y el plato pero las presiones no varían (alta e igual a baja), confirmar la avería mecánica interna y sustituir el compresor completo. (págs. 126-127).
3. Inspeccionar el estado del aceite extraído del compresor averiado para determinar la causa raíz:
   - Aceite rojo -> presencia de humedad. (pág. 130).
   - Aceite negro -> desgaste/gripado térmico. (pág. 130).
   - Aceite purpurina o con virutas -> desintegración de piezas metálicas. (pág. 130).
4. Verificar la entrada de la válvula de expansión y el interior de los tubos: si se detecta suciedad gris, ferricha, partículas o aceite alterado, es obligatorio realizar la limpieza y lavado exhaustivo del circuito antes de montar un compresor nuevo. (págs. 127, 130).

## Valores de referencia
Presiones de alta y baja totalmente igualadas con el compresor girando indican pérdida completa de compresión interna. (pág. 126).

## Verificación tras la reparación
Comprobar que no existan fugas de refrigerante por el retén del eje o por los orificios roscados de fijación de las tuberías, y verificar la ausencia de ruidos. (págs. 127-128, 131).

---

```yaml
tipo: procedimiento
titulo: Procedimiento de montaje y sustitución de un compresor nuevo
entidad: sustitucion-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "130-132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, lavado-circuito, vacio-circuito]
palabras: [compresor nuevo, ajuste de aceite, entrehierro, vacío 45 minutos, rodaje 1000 rpm]
```

## Objeto y alcance
Sustituir de forma segura un compresor averiado por una unidad nueva, asegurando el ajuste preciso de la dosis de aceite, la limpieza del circuito y el vacío profundo para evitar averías repetitivas. (págs. 130-132).

## Condiciones previas
1. Identificación y solución previa de la causa raíz que provocó la avería anterior (fuga, suciedad, falta de aceite). (pág. 130).
2. Lavado completo del circuito con aire seco y deshumedecimiento con nitrógeno líquido (haciendo pasar el flujo en sentido contrario a la circulación del refrigerante) si se detecta aceite rojo, negro, purpurina o presencia de partículas metálicas. (págs. 127, 131).
3. Disponer para su sustitución conjunta e ineludible de: compresor nuevo, válvula de expansión nueva y filtro deshidratador nuevo. (págs. 127, 131).

## Equipo y material
Estación de servicio de climatización, aceite sintético PAG nuevo, manómetros, galgas de espesores para entrehierro, cargador de refrigerante y repuestos (compresor, válvula de expansión y filtro). (págs. 131-132).

## Pasos
1. Recuperar el refrigerante del circuito y anotar la cantidad exacta de aceite y gas extraídos por la máquina. (pág. 131).
2. Desmontar la correa de accesorios, desconectar los tubos de entrada y salida (taponando los racores inmediatamente para evitar la entrada de suciedad) y retirar los tornillos de fijación para extraer el compresor viejo. (pág. 131).
3. Inspeccionar el compresor viejo (recalentamiento, pérdidas, entrehierro) y vaciar su aceite manualmente en un recipiente graduado para medir el volumen recuperado. (págs. 131-132).
4. Extraer todo el aceite de conservación que trae el compresor nuevo. (pág. 132).
5. Calcular e introducir en el cárter del compresor nuevo la dosis exacta de aceite PAG nuevo:
   - Dosis base: volumen de aceite extraído manualmente del compresor viejo + volumen de aceite recuperado por la máquina en la evacuación + 20 cc adicionales. (pág. 132).
   - Adición por sustitución de componentes individuales: Evaporador = 50 cc | Condensador = 30 cc | Filtro = 10 cc | Tubo = 10 cc. (pág. 132).
   - Tras lavado completo del circuito: introducir la cantidad total prescrita por el fabricante (por norma general, la carga completa que trae de fábrica el compresor nuevo para todo el sistema). (pág. 132).
6. Instalar el compresor nuevo, la válvula de expansión nueva y el filtro deshidratador nuevo. (pág. 132).
7. Verificar la distancia de entrehierro entre la polea y el plato de arrastre antes de la puesta en marcha: marca Sanden = 0,4 a 0,8 mm | Otras marcas = 0,2 a 0,5 mm. (pág. 131).
8. Realizar un vacío profundo al circuito con una duración mínima obligatoria de 45 minutos para eliminar totalmente la humedad y ejecutar la prueba de estanqueidad en vacío. (págs. 128, 132).
9. Cargar el circuito con la masa exacta de refrigerante en gramos indicada por el fabricante, realizando la carga exclusivamente por el lado de ALTA PRESIÓN en fase líquida. (pág. 132).
10. Iniciar el rodaje inicial del compresor: arrancar el motor a ralentí y no superar las 1.000 rpm durante los primeros 5 minutos de funcionamiento. (pág. 132).

## Valores de referencia
- Distancia entre polea y plato (entrehierro): Marca Sanden = 0,4 a 0,8 mm | Otras marcas = 0,2 a 0,5 mm. (pág. 131).
- Tiempo de vacío profundo obligatorio tras cambiar compresor: mínimo 45 minutos. (págs. 128, 132).
- Régimen máximo del motor durante los primeros 5 minutos de funcionamiento (rodaje): 1.000 rpm. (pág. 132).
- Adiciones de aceite por cambio de componentes: Evaporador (50 cc), Condensador (30 cc), Filtro (10 cc), Tubería (10 cc). (pág. 132).

## Verificación final
Comprobar la correcta tensión de la correa de accesorios, verificar la ausencia de ruidos anómalos a ralentí, verificar el acoplamiento del plato sobre la polea, controlar las presiones de trabajo en los manómetros y medir la temperatura en los aireadores centrales. (pág. 132).

## Seguridad y normativa
Garantizar la sustitución conjunta e ineludible de la válvula de expansión y del filtro deshidratador junto con el compresor; los fabricantes no aceptan la garantía del compresor si no se demuestra el cambio de ambos elementos. (págs. 127, 131).

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico del sistema de climatización automática
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "ZZ15. Diágnostico y averías.pdf"
paginas: "133-134"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-exterior, fotosensor-solar]
palabras: [memoria de averías, diagnóstico de actuadores, ajuste básico, lectura de bloques, CAN-Bus, borrado de averías]
```

## Síntoma
Anomalías en la regulación electrónica de la temperatura, fallos en la distribución de aire, parpadeos/fallos en el display del climatizador o inactividad de componentes eléctricos. (págs. 133-134).

## Causas posibles
Averías eléctricas o electrónicas en sensores específicos de climatización, sensores compartidos en red CAN-Bus (cuadro de instrumentos, red de a bordo), servomotores de trampillas, turbina de aire o unidad de control del climatizador. (págs. 133-134).

## Cómo separar las causas
Conectar un equipo de diagnosis compatible al terminal de diagnóstico del vehículo y ejecutar las 4 funciones principales de autodiagnóstico:
1. Consultar la memoria de averías:
   - Averías fugaces o esporádicas: se borran automáticamente tras 30 o 40 arranques del sistema sin reproducirse el fallo. (pág. 133).
   - Averías actuales o permanentes: quedan memorizadas en la UCE de climatización y solo se pueden borrar tras reparar el componente desde la función "borrar memoria de averías". (pág. 133).
   - Ubicación de averías de sensores compartidos en red: las averías del sensor de temperatura exterior y velocidad del vehículo se memorizan en la UCE del Cuadro de Instrumentos; las de marcha atrás, alternador y regulador de iluminación se memorizan en la UCE de la Red de a bordo. (págs. 133-134).
2. Diagnóstico de elementos actuadores (Test de actuadores):
   - Test de segmentos: ilumina todos los dígitos del display para comprobar elementos informativos del panel. (pág. 133).
   - Pruebas activas de componentes: excita secuencialmente las velocidades del electroventilador, la turbina de aire fresco en todo su margen, el embrague electromagnético del compresor y los servomotores de las trampillas para verificar variaciones de temperatura y zonas de salida. (pág. 133).
3. Ajuste básico:
   - Activa de principio a fin todos los servomotores de trampillas y memoriza las posiciones de tope mínimo y máximo de cada uno. Es ineludible ejecutarlo tras sustituir algún servomotor o la unidad de control del climatizador. (pág. 133).
4. Lectura de valores de funcionamiento individual (Bloques de medición):
   - Permite verificar en tiempo real: estado del compresor (parado/marcha), rpm del motor, velocidad de marcha, tiempo de parada, valores teórico y real de posicionamiento de servomotores (temperatura, central, deshielo, recirculación), lecturas de temperatura (exterior, entrada de aire, habitáculo, refrigerante motor), porcentaje del fotosensor de radiación solar (al acercar luz intensa), tensión de alimentación de batería, porcentaje de activación de la electroválvula del compresor, señal del sensor MAP de alta presión y señales de desactivación por alternador. (págs. 133-134).

📷 IMAGEN: Esquema general de componentes contemplados en el autodiagnóstico de la UCE de climatización y su comunicación por bus con otras UCEs (Cuadro, Confort, Motor, Ventiladores) — Fuente: ZZ15. Diágnostico y averías.pdf, pág. 134

## Valores de referencia
- Borrado automático de averías esporádicas: tras 30 a 40 ciclos de arranque sin reproducciones del fallo. (pág. 133).
- Tensión de alimentación leída en bloques de medición: valor aproximadamente igual a la tensión de batería (12 V - 14 V). (pág. 134).

## Verificación tras la reparación
Efectuar el borrado de la memoria de averías, realizar el ajuste básico de las trampillas y comprobar en la lectura de valores de funcionamiento individual que los parámetros teóricos y reales de los actuadores coinciden. (págs. 133-134).

COBERTURA: documento «ZZ15. Diágnostico y averías.pdf», páginas 123 a 134 de 134. [completo]