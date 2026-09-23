```yaml
tipo: diagnostico
titulo: Lectura de manómetros y presiones de trabajo
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "123, 125"
relacionados: [compresor, valvula-expansion, refrigerante-r134a]
palabras: [manómetros, alta presión, baja presión, compresor fijo, compresor variable]
```

## Síntoma
Verificación del estado operativo del sistema de aire acondicionado mediante el análisis de las presiones de trabajo en los lados de alta y baja presión. (pág. 123)

## Causas posibles
No aplica. (pág. 123)

## Cómo separar las causas
Conectar las mangueras de "ALTA" y "BAJA" al vehículo manteniendo cerradas todas las válvulas de la estación de carga. Arrancar el motor a 1.500 r.p.m. y conectar el aire acondicionado con la turbina de aire fresco a máxima velocidad. Comprobar que las presiones obtenidas se ajustan a los valores prescritos según el tipo de compresor. (pág. 123)

## Valores de referencia
- **Compresor variable**:
  - Alta presión: constante entre 8 y 10 bares (puede llegar a 12 bares con temperatura exterior muy alta). (pág. 123)
  - Baja presión: constante a 2 bares (\\(1,8 \div 2,2 \text{ kg/cm}^2\\)). (pág. 123, 124)
- **Compresor fijo**:
  - Alta presión: variable entre 10 y 20 bares (en R134a a 1.500 r.p.m. con carga normal: \\(13,5 \div 15 \text{ bar}\\); R12: \\(14,5 \div 15 \text{ bar}\\)). (pág. 123, 125)
  - Baja presión: variable entre 0,5 y 2,5 bares (en R134a a 1.500 r.p.m. con carga normal: \\(1,5 \div 2,5 \text{ bar}\\); R12: \\(1,5 \div 2 \text{ bar}\\)). (pág. 123, 125)
- **Presiones aproximadas en reposo según temperatura exterior**:
  - 15 ºC: 3,9 bar. (pág. 125)
  - 20 ºC: 4,7 bar. (pág. 125)
  - 25 ºC: 5,5 bar. (pág. 125)
  - 30 ºC: 6,6 bar. (pág. 125)
  - 35 ºC: 7,5 bar. (pág. 125)
  - 40 ºC: 8,8 bar. (pág. 125)
  - 45 ºC: 9,8 bar. (pág. 125)

## Verificación tras la reparación
Comprobar que las agujas de los manómetros de alta y baja se estabilizan dentro de las márgenes de presión especificadas para la temperatura ambiente existente. (pág. 123, 125)

---

```yaml
tipo: diagnostico
titulo: Rendimiento frigorífico insuficiente («no enfría»)
entidad: no-enfria
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "123-124"
relacionados: [lectura-manometros, evaporador, ventilador-habitaculo]
palabras: [rendimiento frigorífico, temperatura en aireadores, difusores centrales, termómetro]
```

## Síntoma
El aire expulsado por los difusores del habitáculo no alcanza el nivel de enfriamiento adecuado o sale a temperatura ambiente. (pág. 123, 126)

## Causas posibles
- Carga de refrigerante insuficiente o excesiva. (pág. 124, 125)
- Exceso de aceite en el sistema. (pág. 126)
- Contaminación por aire o humedad en el circuito. (pág. 126)
- Válvula de expansión cerrada o desajustada. (pág. 126)
- Condensador obstruido o avería en el electroventilador. (pág. 126)
- Problemas mecánicos o avería interna en el compresor. (pág. 126)

## Cómo separar las causas
Arrancar el motor a 1.500 r.p.m. Conectar el aire acondicionado a máxima velocidad de la turbina con la recirculación activada. Dirigir la salida hacia los difusores centrales y cerrar los laterales. Colocar un termómetro en los difusores centrales y medir la temperatura de salida del aire. (pág. 123)

## Valores de referencia
Prueba de rendimiento (temperatura exterior frente a temperatura en aireadores a 1.500 r.p.m. con recirculación):
- 15 ºC exterior: 2 a 4 ºC en aireadores. (pág. 124)
- 20 ºC exterior: 4 a 6 ºC en aireadores. (pág. 124)
- 26 ºC exterior: 4 a 7 ºC en aireadores. (pág. 124)
- 32 ºC exterior: 5 a 8 ºC en aireadores. (pág. 124)
- 37 ºC exterior: 7 a 10 ºC en aireadores. (pág. 124)

## Verificación tras la reparación
Comprobar que la temperatura medida en los difusores centrales desciende hasta los valores tabulados según la temperatura ambiente exterior. (pág. 124)

---

```yaml
tipo: procedimiento
titulo: Desconexión del equipo de carga
entidad: vacio-y-carga
variante: desconexion-y-purga
area: climatizacion
sistema: equipos-taller
fuente: "15. Diágnostico y averías.pdf"
paginas: "124"
relacionados: [lectura-manometros, refrigerante-r134a]
palabras: [mangueras, purga de refrigerante, calibración de manómetros, estación de carga]
```

## Objeto y alcance
Recuperar el refrigerante de las mangueras del equipo de carga tras una comprobación o intervención, garantizando que los manómetros queden a cero para evitar su descalibración. (pág. 124)

## Condiciones previas
Sistema de aire acondicionado del vehículo en funcionamiento. (pág. 124)

## Equipo y material
Estación de carga o puente de manómetros de alta y baja presión con sus correspondientes mangueras. (pág. 124)

## Pasos
1. Con el aire acondicionado funcionando, desconectar la manguera de "ALTA" del vehículo. (pág. 124)
2. Abrir la válvula de "ALTA" de la estación de carga. (pág. 124)
3. Abrir lentamente la válvula de "BAJA" para que el compresor aspire el refrigerante contenido en los tubos. (pág. 124)
4. Cuando las presiones en ambos manómetros se igualen, cerrar las válvulas de "ALTA" y "BAJA". (pág. 124)
5. Desconectar la manguera de "BAJA" del vehículo. (pág. 124)
6. Recuperar el refrigerante restante de los tubos hasta que las agujas de los manómetros queden a cero. (pág. 124)

## Valores de referencia
Presión final en los manómetros: 0 bar (a cero). (pág. 124)

## Verificación final
Inspeccionar visualmente que ambos manómetros marquen exactamente cero para impedir que la lectura presurizada descalibre los instrumentos con el tiempo. (pág. 124)

## Seguridad y normativa
Es imprescindible purgar las mangueras y recuperar el gas hacia la estación de carga para evitar descargas de refrigerante a la atmósfera. (pág. 124)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías hidráulicas del circuito
entidad: lectura-manometros
variante: averias-hidraulicas
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "124-126"
relacionados: [compresor, valvula-expansion, condensador, filtro-deshidratador]
palabras: [alta presión, baja presión, congelación, obstrucción, falta de carga, exceso de carga]
```

## Síntoma
Comportamiento anómalo en las presiones de trabajo de alta y baja presión acompañado de deficiencias en el enfriamiento o congelación en líneas de fluido. (pág. 124, 125, 126)

## Causas posibles
- **Baja cantidad de refrigerante**:
  - Compresor fijo: BAJA y ALTA muy bajas (BAJA \\(0,5 \div 1 \text{ bar}\\), ALTA \\(6,5 \div 9 \text{ bar}\\) en R134a a 1.500 r.p.m.). Temperatura en aireadores alta. Si al acelerar la BAJA cae de 0,5 bar, existe peligro de congelación. (pág. 125)
  - Compresor variable: BAJA cae a \\(1,4 \div 1,6 \text{ bar}\\), ALTA fluctúa (\\(8 \div 12 \text{ bar}\\)). Presión en reposo algo baja. (pág. 124)
- **Exceso de refrigerante**:
  - Compresor fijo: BAJA y ALTA muy altas (BAJA \\(2,5 \div 3,5 \text{ bar}\\), ALTA \\(19 \div 24 \text{ bar}\\) en R134a). Temperatura en aireadores alta. (pág. 125)
  - Compresor variable: BAJA \\(1,6 \div 1,8 \text{ bar}\\), ALTA \\(10 \div 10,5 \text{ bar}\\). Temperatura en aireadores muy baja, pero el compresor absorbe más potencia y sufre mayor desgaste. (pág. 124, 125)
- **Exceso de aceite / Contaminación por aire o humedad**: Presiones normales en alta y baja, pero el aire en los difusores no enfría suficiente o sale a temperatura ambiente. (pág. 126)
- **Válvula de expansión muy abierta**: Presiones normales, pero la tubería de baja presión está más fría que la carcasa del evaporador. (pág. 126)
- **Válvula de expansión cerrada**: Presiones normales, aire no suficientemente frío. (pág. 126)
- **Condensador obstruido o fallo del electroventilador**: ALTA elevada; la presión de ALTA desciende al enfriar el condensador con agua. (pág. 126)
- **Problema mecánico o fugas internas en compresor**: Presiones de ALTA y BAJA igualadas o no varían al funcionar; se equilibran rápidamente al parar y fluctúan en marcha. (pág. 126)
- **Obstrucción en línea de líquido / Filtro deshidratador bloqueado**: ALTA elevada y BAJA reducida; presencia de hielo en la línea de líquido o en el filtro deshidratador. (pág. 126)
- **Obstrucción en la zona de baja presión**: Los manguitos metálicos de baja están más fríos que el evaporador. (pág. 126)

## Cómo separar las causas
Evaluar de forma conjunta la presión de alta y baja en los manómetros a 1.500 r.p.m. y aplicar pruebas de contraste (enfriar el condensador con agua, tocar la temperatura relativa de los tubos y verificar presencia de hielo en filtros o racores). (pág. 125, 126)

## Valores de referencia
- **Carga normal R134a (compresor fijo a 1.500 r.p.m.)**: BAJA \\(1,5 \div 2,5 \text{ bar}\\), ALTA \\(13,5 \div 15 \text{ bar}\\). (pág. 125)
- **Carga baja R134a (compresor fijo a 1.500 r.p.m.)**: BAJA \\(0,5 \div 1 \text{ bar}\\), ALTA \\(6,5 \div 9 \text{ bar}\\). Umbral crítico de congelación: BAJA < 0,5 bar al acelerar. (pág. 125)
- **Carga excesiva R134a (compresor fijo a 1.500 r.p.m.)**: BAJA \\(2,5 \div 3,5 \text{ bar}\\), ALTA \\(19 \div 24 \text{ bar}\\). (pág. 125)
- **Compresor variable (carga normal 550 g)**: BAJA 1,8 bar, ALTA 9 bar a ralentí; BAJA 1,4 bar, ALTA 12 bar a 1.500 r.p.m. (pág. 124)

## Verificación tras la reparación
Recuperar el fluido, corregir la causa de la anomalía (ajustar carga de gas/aceite, desobstruir condensador, cambiar válvula de expansión o filtro deshidratador), hacer vacío y recargar; confirmar que las presiones vuelven a los márgenes normativos. (pág. 126)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías en el compresor
entidad: compresor
variante: diagnostico-averias
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "126-130"
relacionados: [embrague-compresor, valvula-expansion, filtro-deshidratador]
palabras: [igualación de presiones, virutas, aceite purpurina, aceite negro, aceite rojo, golpe de líquido]
```

## Síntoma
Las presiones de ALTA y BAJA permanecen igualadas estando el compresor en giro, o el compresor presenta ruidos, agarrotamiento y daños en sus componentes internos. (pág. 126, 127, 128)

## Causas posibles
- **Avería del accionamiento exterior**: Patinado del embrague electromagnético o rotura del sistema de seguridad de los compresores sin embrague. (pág. 126)
- **Averías internas del compresor**:
  - Fallo en la válvula o electroválvula de regulación. (pág. 127)
  - Daños en la placa de válvulas de admisión o descarga (partícula atrapada bajo la válvula o rotura de la lámina). (pág. 127, 129)
  - Daños en pistones y bielas (pistonaje marcado por partículas duras, bielas dobladas). (pág. 129, 130)
  - Rótula de pistón soldada o desgastes severos en el plato oscilante por falta de lubricante/refrigerante. (pág. 128)
- **Causas externas provocadoras**:
  - **Falta de lubricante y/o refrigerante de retorno**: Fugas, carga incorrecta, porosidad en mangueras o pinzamiento de tuberías. (pág. 128)
  - **Entrada de refrigerante en estado líquido (golpe de líquido)**: Válvula de expansión bloqueada abierta o realización de la carga por la toma de baja presión. Genera ruidos y quema el embrague. (pág. 128)
  - **Presencia de humedad**: Reacciona formando ácidos que corroen la cabeza de los pistones y deterioran el lubricante. (pág. 128, 130)
  - **Suciedad en el circuito**: Falta de limpieza en reparaciones anteriores o presencia de restos de disolventes. (pág. 128)
  - **Mala manipulación en el montaje**: Forzado del compresor, falta de deslizamiento de casquillos, golpes en polea/placa frontal o grietas en orejetas. (pág. 127)

## Cómo separar las causas
1. Verificar primero que el eje del compresor gira eficazmente y que no falla el accionamiento exterior. (pág. 126)
2. Inspeccionar la entrada de la válvula de expansión, el interior de los tubos y el color/estado del aceite del circuito: (pág. 127, 130)
   - **Aceite rojo**: Producido por restos de humedad en el circuito. (pág. 130)
   - **Aceite negro**: Producido por desgastes graves o gripados térmicos/mecánicos. (pág. 130)
   - **Aceite purpurina (partículas metálicas)**: Producido por golpes o daños internos graves con desprendimiento de virutas. (pág. 127, 130)

## Valores de referencia
- Presiones con el compresor averiado internamente: ALTA e IGUAL a BAJA durante el giro. (pág. 126)
- Separación plato-polea Sanden: \\(0,4 \div 0,8 \text{ mm}\\); otras marcas: \\(0,2 \div 0,5 \text{ mm}\\). (pág. 131)

## Verificación tras la reparación
Sustituir el compresor. Si se detectan partículas, virutas o aceite rojo/negro/purpurina, es **obligatorio** realizar el lavado exhaustivo del circuito antes de montar el compresor nuevo, así como sustituir la válvula de expansión y el filtro deshidratador. (pág. 127, 130, 132)

---

```yaml
tipo: procedimiento
titulo: Sustitución del compresor y lavado del circuito
entidad: lavado-circuito
area: climatizacion
sistema: equipos-taller
fuente: "15. Diágnostico y averías.pdf"
paginas: "127, 130, 131-132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, vacio-y-carga]
palabras: [lavado del circuito, nitrógeno líquido, aceite nuevo, vacío profundo, sustitución de componentes]
```

## Objeto y alcance
Sustituir un compresor averiado garantizando la eliminación completa de virutas, suciedad, humedad y aceite deteriorado en las canalizaciones para evitar la avería repetitiva del compresor nuevo. (pág. 127, 131, 132)

## Condiciones previas
- Diagnóstico de avería del compresor confirmado. (pág. 131)
- Refrigerante del circuito recuperado en la estación de carga. (pág. 131)

## Equipo y material
- Compresor nuevo, válvula de expansión nueva y filtro deshidratador/colector nuevo. (pág. 127, 132)
- Equipo de lavado con aire seco y nitrógeno líquido. (pág. 127)
- Aceite frigorífico nuevo especificado. (pág. 132)
- Estación de vacío y carga. (pág. 132)

## Pasos
1. Recuperar el refrigerante anotando la cantidad de aceite y gas extraídos. (pág. 131)
2. Desmontar la correa de accesorios, desconectar las tuberías y extraer el compresor averiado, taponando los racores para evitar la entrada de suciedad. (pág. 131)
3. Inspeccionar el interior de los manguitos. En caso de detectar suciedad, virutas o aceite rojo, negro o purpurina, efectuar el lavado exhaustivo de tubos, manguitos, condensador y evaporador haciendo pasar aire seco y deshumedecer con nitrógeno líquido en **sentido contrario** al flujo habitual del refrigerante. (pág. 127, 130, 132)
4. Extraer manualmente el aceite del compresor nuevo. (pág. 132)
5. Ajustar la cantidad de aceite a introducir en el cárter del nuevo compresor:
   - Tras lavado completo del circuito: introducir la cantidad total recomendada por el fabricante (normalmente el compresor trae el aceite total necesario). (pág. 132)
   - Sin lavado previo: introducir una cantidad igual a la extraída manualmente del compresor viejo + la extraída en la recuperación + 20 cc adicionales. Añadir suplementos en caso de sustitución de otros componentes: +50 cc por evaporador, +30 cc por condensador, +10 cc por filtro, +10 cc por cada tubo. (pág. 132)
6. Montar el compresor nuevo, la válvula de expansión nueva y el filtro nuevo. (pág. 127, 132)
7. Realizar un vacío profundo al circuito de una duración mínima de 45 minutos. (pág. 128, 132)
8. Comprobar la ausencia de fugas mediante el test de estanqueidad en vacío. (pág. 132)
9. Cargar la cantidad prescrita de refrigerante por el lado de alta presión. (pág. 132)

## Valores de referencia
- Duración del vacío profundo obligatorio: mínimo 45 minutos. (pág. 128, 132)
- Cantidades de aceite suplementario por componente:
  - Evaporador: 50 cc. (pág. 132)
  - Condensador: 30 cc. (pág. 132)
  - Filtro deshidratador: 10 cc. (pág. 132)
  - Tubería: 10 cc. (pág. 132)
  - Margen adicional estándar: 20 cc. (pág. 132)
- Régimen de rodaje inicial: no superar las 1.000 r.p.m. durante los primeros 5 minutos de funcionamiento del compresor nuevo. (pág. 132)

## Verificación final
1. Ajustar la tensión de la correa de accesorios. (pág. 132)
2. Arrancar a ralentí y verificar la ausencia de ruidos extraños. (pág. 132)
3. Conectar el A/A, comprobar el correcto acoplamiento del plato sobre la polea y mantener el motor por debajo de 1.000 r.p.m. los primeros 5 minutos. (pág. 132)
4. Verificar las presiones de funcionamiento en los manómetros y medir la temperatura en aireadores. (pág. 132)

## Seguridad y normativa
La sustitución conjunta del filtro y de la válvula de expansión es requisito obligatorio impostergable para mantener la garantía del fabricante del compresor. (pág. 127, 132)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de ruidos en el compresor
entidad: compresor
variante: ruidos
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "131"
relacionados: [embrague-compresor]
palabras: [ruidos, compresor desembragado, compresor embragado, alineación, golpe de líquido, patinado]
```

## Síntoma
Aparición de ruidos anómalos, roces o chasquidos procedentes del compresor durante el funcionamiento del motor. (pág. 131)

## Causas posibles
- **Con el compresor desembragado (sin conectar A/A)**:
  - Contacto directo de la placa frontal con la polea. (pág. 131)
  - Oscilación del rodamiento del rotor por impacto o golpe externo. (pág. 131)
  - Rozamiento de la polea con algún cuerpo o elemento extraño. (pág. 131)
- **Con el compresor embragado (A/A conectado)**:
  - Cantidad incorrecta de refrigerante en el circuito. (pág. 131)
  - Compresión de refrigerante en estado líquido (golpe de líquido). (pág. 131)
  - Contacto de las tuberías del circuito con la estructura del chasis o la carrocería. (pág. 131)
  - Patinado del embrague por presencia de aceite o grasa en la superficie de acoplamiento. (pág. 131)
  - Partícula atrapada bajo la válvula de descarga. (pág. 131)
  - Daños o desprendimientos mecánicos en el interior del compresor. (pág. 131)

## Cómo separar las causas
1. Determinar si el ruido se manifiesta con el compresor apagado (desembragado) o solo al acoplar el climatizador (embragado). (pág. 131)
2. Si es desembragado: inspeccionar holguras en la polea, alineación y roces externos. (pág. 131)
3. Si es embragado: hacer test de presiones, revisar apoyos de tuberías en carrocería y desengrasar las caras del embrague. (pág. 131)

## Valores de referencia
Distancia de entrehierro polea-plato: Sanden \\(0,4 \div 0,8 \text{ mm}\\); otras marcas \\(0,2 \div 0,5 \text{ mm}\\). (pág. 131)

## Verificación tras la reparación
- En ruidos de origen externo: sustituir embrague o eliminar contactos con el chasis. (pág. 131)
- En ruidos de origen interno: sustituir el compresor. (pág. 131)
- Confirmar la ausencia total de ruidos en ralentí y con carga frigorífica. (pág. 131, 132)

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico de la Unidad de Control del Climatizador
entidad: regulacion-automatica
variante: autodiagnostico
area: climatizacion
sistema: control-climatizacion
fuente: "15. Diágnostico y averías.pdf"
paginas: "133-134"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-interior]
palabras: [memoria de averías, test de actuadores, ajuste básico, bloques de medición, CAN-Bus]
```

## Síntoma
Anomalías de funcionamiento en la gestión electrónica de la climatización automática, parpadeos en la pantalla de mandos o averías en la regulación de trampillas, turbina y compresor. (pág. 133)

## Causas posibles
- Fallo eléctrico/electrónico en sensores específicos de la climatización (memorizados directamente en la UCE de climatización). (pág. 133)
- Fallo en sensores compartidos recibidos por CAN-Bus:
  - UCE Cuadro de instrumentos: memoriza averías del sensor de temperatura exterior y sensor de velocidad. (pág. 133)
  - UCE Red de a bordo: memoriza averías del sensor de marcha atrás, carga del alternador y regulador de iluminación. (pág. 134)
  - UCE Motor: transmite la temperatura del líquido refrigerante. (pág. 134)
- Avería en servomotores de trampillas, regulador del electroventilador/turbina o electroválvula del compresor. (pág. 133, 134)
- Desconfiguración de los topes de servomotores tras intervenciones de taller. (pág. 133)

## Cómo separar las causas
Conectar la máquina de diagnosis y ejecutar las cuatro funciones principales de autodiagnóstico: (pág. 133, 134)
1. **Consultar la memoria de averías**:
   - Averías fugaces/esporádicas: se borran automáticamente si no se repiten. (pág. 133)
   - Averías permanentes: permanecen en memoria hasta ser reparadas y borradas manualmente. (pág. 133)
2. **Diagnóstico de elementos actuadores**:
   - *Test de segmentos*: ilumina todos los dígitos del display. (pág. 133)
   - *Velocidades del electroventilador y turbina*: comprueba su variación de marcha. (pág. 133)
   - *Embrague del compresor*: realiza acoplamientos cíclicos. (pág. 133)
   - *Motores de las trampillas*: activa los servomotores para verificar el direccionamiento del aire y mezcla. (pág. 133)
3. **Ajuste básico**: Activa de extremo a extremo todos los servomotores y memoriza sus posiciones tope (mínima y máxima). (pág. 133)
4. **Lectura de valores de funcionamiento individual**: Permite verificar en tiempo real el porcentaje PWM de la electroválvula del compresor, presiones del sensor MAP, temperaturas leídas por las sondas interior/exterior/evaporador y posición real de las trampillas. (pág. 133, 134)

## Valores de referencia
- Ciclo de borrado de averías esporádicas: \\(30 \div 40\\) arranques sin reincidencia del fallo. (pág. 133)
- Tensión de alimentación leída: valor equivalente a la tensión de batería (~12 V). (pág. 134)
- Posición de servomotores en ajuste básico: coincidencia exacta entre el valor teórico y real. (pág. 133)

## Verificación tras la reparación
Realizar el *Ajuste Básico* de forma obligatoria tras cambiar un servomotor o la Unidad de Control de Climatizador, borrar los códigos de avería y confirmar en *Lectura de valores* que la respuesta de los sensores y actuadores es coherente. (pág. 133, 134)

---

COBERTURA: documento «15. Diágnostico y averías.pdf», páginas 123 a 134 de 134. [completo]