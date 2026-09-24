```yaml
tipo: procedimiento
titulo: Ajuste a cero y comprobación previa del puente de manómetros
entidad: lectura-manometros
area: climatizacion
sistema: equipos-taller
fuente: "Manometros.pdf"
paginas: "1, 17-18"
relacionados: [estacion-carga, comprobacion-presiones-y-rendimiento-climatizador]
palabras: [puente de manómetros, ajuste a cero, tornillo de cero, relojes de presión, verificación previa]
```

## Objeto y alcance
Verificación del estado mecánico y calibración previa a cero de las agujas de los manómetros de alta y baja presión sin conectar al circuito hidráulico (págs. 1, 17-18).

## Condiciones previas
Mangueras de conexión totalmente desconectadas del vehículo y puente de manómetros libre de presión y de agente frigorífico en su interior (págs. 17-18).

## Equipo y material
- Puente de manómetros de alta y baja presión para R134a (págs. 1, 17-18).
- Destornillador plano fino para tornillos de ajuste a cero (pág. 18).

## Pasos
1. Observar la posición de las agujas en los relojes de alta y baja presión con el equipo libre de fluido refrigerante (págs. 17-18).
2. Verificar que ambas agujas marcan exactamente en la posición "0 bar" de la escala graduada (pág. 18).
3. Si alguna aguja no coincide con el cero, girar el tornillo de ajuste de cero del reloj correspondiente hasta alinear perfectamente la aguja con la marca de 0 bar (pág. 18).

📷 IMAGEN: Puente de manómetros de alta y baja presión indicando la ubicación de los tornillos de ajuste de cero en la carátula — Fuente: Manometros.pdf, págs. 17-18

## Valores de referencia
- Presión de lectura con manómetros libres: 0 bar (págs. 17-18).

## Verificación final
Confirmar que ambas agujas permanecen estables en 0 bar antes de acoplar los latiguillos a las tomas de servicio del automóvil (págs. 17-18).

## Seguridad y normativa
No forzar los tornillos de ajuste si la aguja presenta deformación mecánica o descalibración interna severa (pág. 18).

```yaml
tipo: diagnostico
titulo: Diagnóstico del estado de la carga de refrigerante con motor parado
entidad: diagnostico-carga-vehiculo-parado
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "14-15, 18-19, 40, 48-49"
relacionados: [lectura-manometros, condensador, carga-refrigerante]
palabras: [motor parado, presión en reposo, temperatura condensador, presencia de aire, falta de carga, exceso de carga]
```

## Síntoma
Dudas sobre el estado de la carga o presencia de incondensables en el circuito hidráulico comprobado con el motor del vehículo detenido (págs. 18-19, 40, 48-49).

## Causas posibles
- Carga correcta de fluido refrigerante (págs. 14, 19, 42, 49).
- Falta de líquido refrigerante por fuga o carga incompleta (págs. 14, 18-19, 42, 49).
- Exceso de carga de líquido refrigerante (págs. 15, 18-19, 43, 49).
- Presencia de aire incondensable en el interior del circuito frigorífico por vacío deficiente (págs. 15, 18-19, 43, 49).

## Cómo separar las causas
- Conectar el puente de manómetros a las tomas de alta y baja presión con el motor parado (págs. 18, 48).
- Medir la temperatura en el cuerpo del condensador mediante un termómetro de contacto (págs. 18, 48).
- Consultar en la tabla la presión teórica de saturación que le corresponde a la temperatura medida en el condensador (págs. 18, 48).
- Si la presión medida en los manómetros es mayor que la teórica de la tabla: existe presencia de aire incondensable en el circuito (págs. 18, 48).
- Si la presión medida es menor que la de la tabla: falta líquido refrigerante en el circuito (págs. 18, 48).
- Verificar que la temperatura del condensador se sitúe idealmente 20 ºC por encima de la temperatura ambiente (págs. 19, 49).

📷 IMAGEN: Manómetros marcando presiones igualadas en reposo y tabla de diagnóstico a vehículo parado — Fuente: Manometros.pdf, págs. 18-19, 40

## Valores de referencia
- Temperatura del condensador ideal: 20 ºC por encima de la temperatura ambiente (ejemplo: 50 ºC para 30 ºC ambiente) (págs. 19, 49).
- Valores tipo a vehículo parado (30 ºC ambiente):
  - Carga correcta: 6,5 bar en manómetros con condensador a 25 ºC (o 24-26 ºC) (págs. 14, 19, 42, 49).
  - Falta de líquido: 6,5 bar con condensador a 30 ºC (igual a temperatura ambiente) (págs. 14, 19, 42, 49).
  - Exceso de carga / Asociación de gases: 7,5 bar con condensador a 30 ºC o frío (págs. 15, 19, 43, 49).

## Verificación tras la reparación
Realizar la evacuación por vacío si hay aire, o reajustar la masa de gas al valor de etiqueta y confirmar que la presión igualada en reposo coincide con la temperatura ambiente (págs. 18-19, 48-49).

```yaml
tipo: diagnostico
titulo: Diagnóstico por falta de fluido refrigerante mediante lectura de manómetros
entidad: falta-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "2-3, 10, 13, 21, 24, 35, 42, 46-47"
relacionados: [lectura-manometros, compresor, valvula-expansion]
palabras: [falta de refrigerante, presiones bajas, prueba de adición, 50 a 100 gramos, válvula de alta cerrada]
```

## Síntoma
Rendimiento frigorífico insuficiente o nulo en los aireadores del habitáculo con el compresor en funcionamiento (págs. 2-3, 10, 13, 21).

## Causas posibles
- Carga insuficiente o fuga de fluido refrigerante en el circuito (págs. 2-3, 10, 13, 21, 46-47).
- Válvula de alta del compresor semicerrada o defectuosa (pág. 2).

## Cómo separar las causas
- Conectar los manómetros y hacer funcionar el motor a 1.500 - 1.800 r.p.m. con 30 ºC de temperatura exterior (págs. 1-3).
- Observar si las presiones se sitúan por debajo de los márgenes nominales (Baja < 1 bar y Alta < 14 bar) (págs. 2, 4).
- Para diferenciar la falta de gas de una válvula de alta del compresor semicerrada: añadir al circuito una pequeña dosis de entre 50 y 100 gramos de fluido refrigerante (pág. 2).
- Si tras introducir los 50-100 g los manómetros no reaccionan positivamente subiendo de presión: la avería se debe a una válvula de alta del compresor semicerrada (pág. 2).
- Si las presiones aumentan hacia valores normales: confirma la falta de refrigerante por fuga o carga incompleta (págs. 2, 10, 35).

📷 IMAGEN: Manómetros indicando presiones anormalmente bajas (Baja < 1 bar, Alta < 14 bar) por falta de carga de refrigerante — Fuente: Manometros.pdf, págs. 2-3

## Valores de referencia
- Presiones nominales correctas a 30 ºC ambiente (1.500 - 1.800 r.p.m.):
  - Compresor variable: Baja = 1,8 a 2,1 bar; Alta = 9 a 13 bar (págs. 1, 23).
  - Compresor fijo: Baja = 0,8 a 2,2 bar; Alta = 10 a 20 bar (págs. 2, 23).
- Presiones con falta de refrigerante a 1.000 r.p.m. y 30 ºC:
  - Baja: entre 0,5 y 0,8 bar (o < 1 bar) (págs. 2, 4).
  - Alta: entre 6 y 8 bar (o < 14 bar) (págs. 2, 4).
- Presiones a 2.500 r.p.m. con falta de gas: Alta muy baja y Baja muy baja (págs. 3, 13, 21).

## Verificación tras la reparación
Localizar y reparar la fuga, efectuar un vacío profundo y cargar la masa exacta prescrita en etiqueta, verificando que la Baja se estabiliza entre 1,8 y 2,1 bar a 30 ºC (págs. 1, 2, 46-47).

```yaml
tipo: diagnostico
titulo: Diagnóstico por exceso de fluido refrigerante mediante lectura de manómetros
entidad: exceso-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "3-4, 11, 14, 21, 36, 42, 45-46"
relacionados: [lectura-manometros, electroventilador-condensador, compresor]
palabras: [exceso de carga, presiones elevadas, 1100 gramos, electroventilador continuo, sobrecarga]
```

## Síntoma
Compresor absorbiendo excesiva potencia del motor, rendimiento de refrigeración deficiente y electroventilador de condensación funcionando de forma ininterrumpida a máxima velocidad (págs. 3-4, 36).

## Causas posibles
- Sobrecarga o exceso de masa de fluido refrigerante introducida en el circuito durante la recarga (ejemplo: 1.100 g en un circuito diseñado para 800 g) (págs. 36, 45-46).

## Cómo separar las causas
- Conectar los manómetros y verificar las presiones con el motor a 1.000 r.p.m. o 1.500 r.p.m. y 30 ºC ambiente (págs. 3-4, 36).
- Observar que tanto la presión de Baja como la de Alta se encuentran excesivamente elevadas a pesar de que el electroventilador trabaja de forma continua sin detenerse (págs. 36, 45-46).
- Descartar suciedad en el condensador regándolo con agua fría: si la Alta no cede de forma duradera y la Baja permanece muy alta, confirma la sobrecarga de líquido (págs. 36, 38, 45).

📷 IMAGEN: Manómetros mostrando presiones muy elevadas (Baja > 2 bar, Alta > 17 bar) por exceso de refrigerante en el circuito — Fuente: Manometros.pdf, págs. 3-4, 36

## Valores de referencia
- Presiones con exceso de refrigerante a 1.000 r.p.m. / 1.500 r.p.m. (30 ºC ambiente):
  - Presión de Baja: > 2 bar (entre 2,5 y 2,7 bar) (págs. 3, 36).
  - Presión de Alta: > 17 bar (entre 16 y 18 bar a 1.000 r.p.m. / hasta 22-25 bar a 2.000 r.p.m.) (págs. 3-4, 21, 36).
- Capacidad de referencia de ejemplo: 1.100 g introducidos sobre una capacidad nominal de 800 g (pág. 36).

## Verificación tras la reparación
Recuperar la totalidad del refrigerante mediante una estación de recarga y volver a cargar el circuito con la masa exacta especificada por el fabricante (págs. 36, 45-46).

```yaml
tipo: diagnostico
titulo: Diagnóstico por bulbo de la válvula de expansión suelto
entidad: diagnostico-valvula-expansion
variante: bulbo-suelto
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "4-5, 24-25, 45"
forma_parte_de: valvula-expansion
relacionados: [valvula-expansion, filtro-deshidratador, lectura-manometros]
palabras: [bulbo suelto, válvula de expansión, mala fijación, enfriamiento bulbo, sustitución filtro]
```

## Síntoma
Presión de baja más alta de lo normal y enfriamiento irregular o insuficiente en el habitáculo (págs. 4, 24, 45).

## Causas posibles
- Desprendimiento o falta de fijación mecánica del bulbo sensor exterior sobre la tubería de salida del evaporador (págs. 5, 25, 45).
- Avería interna de la memoria térmica en válvulas de expansión monobloc (págs. 5, 25).

## Cómo separar las causas
- Conectar los manómetros y verificar las presiones con el motor a 1.500 - 1.800 r.p.m. y 30 ºC exterior (págs. 4, 24).
- Observar si la presión de Baja está elevada (3 a 3,8 bar) y la de Alta permanece dentro de valores normales (12 a 14 bar) (págs. 4, 24).
- Inspeccionar visualmente la válvula de expansión: si es de bulbo exterior, comprobar si el bulbo está suelto y colocarlo en su posición original con su abrazadera de sujeción (págs. 5, 25).
- Si se trata de una válvula monobloc: aplicar espray enfriador o refrigerante líquido directamente sobre el cabezal térmico superior (págs. 5, 25).
- Si al enfriar el cabezal la presión de Baja no reacciona descendiendo hacia 0 bar, la válvula de expansión está averiada y debe sustituirse junto con el filtro deshidratador (págs. 5, 25).

📷 IMAGEN: Lectura de manómetros (Baja 3 - 3,8 bar, Alta 12 - 14 bar) correspondiente a un bulbo de la válvula de expansión suelto — Fuente: Manometros.pdf, págs. 4, 24

## Valores de referencia
- Presión de Baja con bulbo suelto: entre 3 y 3,8 bar (págs. 4, 24).
- Presión de Alta con bulbo suelto: entre 12 y 14 bar (págs. 4, 24).
- Régimen de prueba del motor: 1.500 a 1.800 r.p.m. a 30 ºC ambiente (págs. 4-5, 24-25).

## Verificación tras la reparación
Fijar el bulbo o sustituir la válvula de expansión y el filtro deshidratador, verificando que la presión de Baja retorna al rango normal de 1,8 a 2,1 bar (págs. 1, 5, 25).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvula de expansión demasiado abierta
entidad: diagnostico-valvula-expansion
variante: demasiado-abierta
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "20, 26-27"
forma_parte_de: valvula-expansion
relacionados: [valvula-expansion, compresor, filtro-deshidratador, lectura-manometros]
palabras: [válvula demasiado abierta, espray enfriador, golpe de líquido, válvulas compresor, prueba de cierre]
```

## Síntoma
Presión de baja muy elevada, falta de rendimiento frigorífico y riesgo de retorno de refrigerante líquido hacia el compresor (págs. 20, 26-27).

## Causas posibles
- Bloqueo o avería mecánica interna de la válvula de expansión que la mantiene excesivamente abierta (págs. 20, 26).

## Cómo separar las causas
- Conectar los manómetros y mantener el motor a 1.500 - 1.800 r.p.m. con 30 ºC ambiente (pág. 26).
- Observar que la presión de Baja se encuentra anormalmente alta (entre 3,5 y 4,5 bar, o > 2 bar a ralentí) mientras la Alta permanece normal (10 a 14 bar) (págs. 20, 26).
- Rociar espray enfriador o refrigerante líquido sobre el bulbo o cabezal de la válvula de expansión (pág. 26).
- Si la válvula no reacciona cerrando la sección de paso, sustituir la válvula de expansión y el filtro deshidratador (págs. 26-27).
- Comprobación de posibles daños en las válvulas del compresor por golpe de líquido:
  1. Una vez instaladas la nueva válvula y el filtro, rociar nuevamente espray enfriador sobre el bulbo de la nueva válvula (pág. 26).
  2. Observar que el manómetro de Baja cae rápidamente hacia 0 bar (pág. 26).
  3. Parar inmediatamente el compresor en ese instante (pág. 26).
  4. Verificar la aguja de Baja: si se mantiene abajo sin subir bruscamente, las válvulas del compresor están en perfecto estado (págs. 26-27).

📷 IMAGEN: Manómetros registrando Alta entre 10 y 14 bar y Baja entre 3,5 y 4,5 bar por válvula de expansión demasiado abierta — Fuente: Manometros.pdf, pág. 26

## Valores de referencia
- Presión de Baja con válvula muy abierta: entre 3,5 y 4,5 bar (o > 2 bar a ralentí) (págs. 20, 26).
- Presión de Alta: entre 10 y 14 bar (págs. 20, 26).
- Umbral de control en prueba de estanqueidad: aguja de Baja estabilizada en 0 bar tras parar el compresor (pág. 26).

## Verificación tras la reparación
Sustituir la válvula de expansión y el filtro deshidratador, asegurando la comprobación posterior de las válvulas del compresor para descartar deformaciones por golpe de líquido (págs. 26-27).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvula de expansión cerrada o bloqueada
entidad: diagnostico-valvula-expansion
variante: cerrada-obturada
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "6, 15-16, 27-28, 44, 46-47"
forma_parte_de: valvula-expansion
relacionados: [valvula-expansion, filtro-deshidratador, compresor, lectura-manometros]
palabras: [válvula cerrada, obturada, bulbo roto, zona de vacío, falta de lubricante compresor]
```

## Síntoma
Ausencia total de frío en los difusores y aguja de baja presión cayendo a cero o entrando en la zona de vacío (págs. 6, 27, 46-47).

## Causas posibles
- Válvula de expansión bloqueada en posición de cierre u obturada por suciedad (págs. 6, 27, 46-47).
- Rotura del bulbo térmico capilar con pérdida de su carga de gas interna (págs. 6, 27).

## Cómo separar las causas
- Conectar los manómetros y hacer funcionar el motor a 1.500 - 1.800 r.p.m. a 30 ºC ambiente (págs. 6, 27).
- Observar que la presión de Alta se mantiene en valores normales o ligeramente bajos (12 a 15 bar) mientras la Baja cae a 0 bar (págs. 6, 27).
- Acelerar el motor: si la aguja de Baja se desplaza internamente por la zona de vacío (presión negativa), se confirma que la válvula de expansión está cerrada o su bulbo roto (págs. 6, 27).
- Comprobar que no se trate de una gota de hielo en la válvula: parar el equipo y volverlo a arrancar; si es hielo, el frío retorna momentáneamente hasta congelarse de nuevo (págs. 28-29).

📷 IMAGEN: Manómetros con presión de Baja a 0 bar (zona de vacío) y Alta entre 12 y 15 bar por válvula de expansión cerrada — Fuente: Manometros.pdf, págs. 6, 27

## Valores de referencia
- Presión de Baja con válvula cerrada: 0 bar o valores de depresión/vacío al acelerar (págs. 6, 27).
- Presión de Alta: entre 12 y 15 bar (págs. 6, 27).

## Verificación tras la reparación
Sustituir la válvula de expansión y el filtro deshidratador (págs. 27-28). Comprobar imperativamente el nivel de aceite dentro del compresor, ya que al estar la válvula antigua obturada se interrumpe el retorno de aceite provocando el gripado del compresor por falta de lubricación (pág. 28).

```yaml
tipo: diagnostico
titulo: Diagnóstico por congelación del evaporador o válvula de regulación bloqueada
entidad: diagnostico-evaporador
variante: congelacion
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "15-16, 31-32, 43-44, 46-47"
forma_parte_de: evaporador
relacionados: [evaporador, compresor, sensor-evaporador, filtro-deshidratador]
palabras: [evaporador congelado, hielo, falta de caudal aire, válvula cilindrada bloqueada, termostato]
```

## Síntoma
Disminución progresiva del caudal de aire impulsado por las rejillas de ventilación hasta desaparecer casi por completo durante trayectos largos, recuperándose tras parar el equipo un tiempo (págs. 31, 43, 47).

## Causas posibles
- En compresor de cilindrada variable: válvula de regulación de cilindrada bloqueada en posición de máximo rendimiento (pág. 31).
- En compresor cíclico/fijo: sonda termostática del evaporador o termostato fuera de servicio, impidiendo la desconexión del compresor (págs. 31, 43, 47).
- Matriz exterior del evaporador sucia o colmatada de polvo (págs. 44, 47).

## Cómo separar las causas
- Conectar los manómetros con el motor a 1.500 - 1.800 r.p.m. y 30 ºC de temperatura exterior (pág. 31).
- Observar que la presión de Baja desciende progresivamente hasta quedar rozando los 0 bar (casi a 0 bar / 0,8 bar) y la Alta se mantiene entre 7 y 10 bar (pág. 31).
- Verificar el caudal de aire en las rejillas: la formación de un bloque de hielo sobre las aletas del evaporador tapona el paso físico del aire (págs. 31, 44).
- Si al apagar el A/C y ponerlo en marcha tras derretirse el hielo funciona bien temporalmente: confirma fallo de desconexión del termostato o válvula de cilindrada agarrotada (pág. 31).

📷 IMAGEN: Lectura de manómetros (Baja casi 0 bar, Alta 7 - 10 bar) indicativa de congelación del evaporador — Fuente: Manometros.pdf, pág. 31

## Valores de referencia
- Presión de Baja con evaporador congelado: casi 0 bar (sobre los 0,8 bar) (pág. 31).
- Presión de Alta: entre 7 y 10 bar (pág. 31).

## Verificación tras la reparación
En compresores variables, sustituir el compresor y el filtro deshidratador (pág. 31). En compresores fijos, reemplazar el termostato/sonda NTC del evaporador o limpiar el módulo evaporador (págs. 31, 43-44).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvula de baja del compresor comunicada
entidad: diagnostico-compresor
variante: baja-comunicada
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "7, 30, 46"
forma_parte_de: compresor
relacionados: [compresor, valvula-expansion, lectura-manometros]
palabras: [válvula de baja comunicada, comunicación de presiones, cilindro, prueba de cierre, parada compresor]
```

## Síntoma
Compresión defectuosa del compresor, imposibilidad de generar salto térmico adecuado y presión de baja excesivamente alta con presión de alta baja (págs. 7, 30, 46).

## Causas posibles
- Comunicación interna por fallo de estanqueidad en las válvulas de la culata de un cilindro del compresor entre la zona de baja y de alta presión (págs. 7, 30).

## Cómo separar las causas
- Conectar los manómetros con el motor a 1.500 - 1.800 r.p.m. y 30 ºC ambiente (págs. 7, 30).
- Observar que la presión de Alta se mantiene reducida (10 a 12 bar) y la de Baja permanece alta (2,2 a 2,5 bar) (págs. 7, 30).
- Método de confirmación de comunicación de presiones:
  1. Rociar espray enfriador o refrigerante líquido sobre el bulbo de la válvula de expansión para forzar su cierre (págs. 7, 30).
  2. Observar el manómetro de Baja hasta que la aguja descienda y alcance exactamente los 0 bar (págs. 7, 30).
  3. Parar el compresor en ese instante preciso (págs. 7, 30).
  4. Observar la aguja de Baja: si al detener el compresor la aguja se desplaza con cierta rapidez hacia arriba (en sentido positivo hacia presiones altas), se confirma con absoluta seguridad que la válvula de baja está comunicada (págs. 7, 30).

📷 IMAGEN: Manómetros (Baja 2,2 - 2,5 bar, Alta 10 - 12 bar) y esquema del ensayo de parada para verificar la comunicación de la válvula de baja — Fuente: Manometros.pdf, págs. 7, 30

## Valores de referencia
- Presión de Baja con válvula comunicada: entre 2,2 y 2,5 bar (págs. 7, 30).
- Presión de Alta con válvula comunicada: entre 10 y 12 bar (págs. 7, 30).
- Comportamiento de confirmación: retorno rápido de la aguja de Baja hacia positivo tras parar el compresor con la expansión forzada a 0 bar (págs. 7, 30).

## Verificación tras la reparación
Reparar la culata/placa de válvulas o sustituir el compresor defectuoso, verificando que la Baja desciende a valores normales de trabajo (págs. 7, 30, 46).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvulas de baja del compresor tapadas o gota de hielo
entidad: diagnostico-compresor
variante: baja-tapada-hielo
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "28-29"
forma_parte_de: compresor
relacionados: [compresor, valvula-expansion, filtro-deshidratador, lectura-manometros]
palabras: [válvula de baja tapada, gota de hielo, refrigerante líquido en compresor, filtro saturado, humedad]
```

## Síntoma
Presión de baja cayendo a 0 bar con presión de alta baja o moderada, perdiendo completamente la capacidad de enfriamiento (págs. 28-29).

## Causas posibles
- Válvulas de baja del compresor tapadas/cerradas por deformación derivada de la llegada de refrigerante en estado líquido (golpe de ariete) (pág. 28).
- Formación de una gota de hielo que tapona intermitentemente el orificio de la válvula de expansión por humedad en el circuito (págs. 28-29).

## Cómo separar las causas
- Conectar los manómetros a 30 ºC ambiente:
  - Si las válvulas de baja del compresor están tapadas: Alta entre 4 y 6 bar, Baja sobre 0 bar (pág. 28).
  - Si es una gota de hielo en la expansión: Alta entre 7 y 12 bar, Baja sobre 0 bar (pág. 29).
- Criterio de diferenciación de ambos incidentes:
  1. Parar el equipo frigorífico unos minutos y volverlo a poner en marcha (págs. 28-29).
  2. Si se trata de una gota de hielo en la válvula de expansión: al volver a arrancar el sistema funciona correctamente de inmediato, hasta que la humedad vuelve a pasar por la válvula congelándose de nuevo (págs. 28-29).
  3. Si se trata de las válvulas de baja del compresor tapadas: la anomalía persiste continuamente desde el mismo instante del arranque (pág. 28).

📷 IMAGEN: Lecturas de manómetros comparativas entre válvulas de baja tapadas (Alta 4-6 bar, Baja 0 bar) y gota de hielo (Alta 7-12 bar, Baja 0 bar) — Fuente: Manometros.pdf, págs. 28-29

## Valores de referencia
- Presiones por válvulas de baja tapadas: Alta = 4 a 6 bar; Baja = sobre 0 bar (pág. 28).
- Presiones por gota de hielo en expansión: Alta = 7 a 12 bar; Baja = sobre 0 bar (pág. 29).

## Verificación tras la reparación
Si la causa es por válvulas de baja tapadas, sustituir el compresor y el filtro deshidratador (pág. 28). Si es por gota de hielo, sustituir el filtro deshidratador saturado y realizar un vacío prolongado antes de recargar (págs. 28-29).

```yaml
tipo: diagnostico
titulo: Diagnóstico por electroventilador girando en sentido contrario
entidad: diagnostico-electroventilador
variante: giro-invertido
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "11, 37-38"
forma_parte_de: electroventilador-condensador
relacionados: [electroventilador-condensador, condensador, lectura-manometros]
palabras: [electroventilador, giro contrario, cableado invertido, alta presión 22 bar, ventilador ininterrumpido]
```

## Síntoma
Presión de alta extremadamente elevada, flujo de aire expulsado hacia el frontal en lugar de ser aspirado hacia el motor y ventilador funcionando continuamente sin parar (págs. 11, 37-38).

## Causas posibles
- Conexión eléctrica invertida de los cables de alimentación del motor del electroventilador tras una intervención de taller (págs. 11, 37).

## Cómo separar las causas
- Conectar los manómetros y mantener el motor a 1.500 - 1.800 r.p.m. con 30 ºC de temperatura exterior (págs. 11, 37).
- Observar que tanto la presión de Baja (2,3 a 2,5 bar) como la de Alta (22 bar) se encuentran muy altas (págs. 11, 37).
- Verificar visualmente y con una hoja de papel la dirección del flujo de aire en el frontal del condensador: si el aire es soplado hacia el exterior del vehículo en vez de ser aspirado hacia el vano motor, confirma que el ventilador gira al revés por polaridad invertida (págs. 11, 37).

📷 IMAGEN: Manómetros registrando 22 bar en Alta y 2,3 - 2,5 bar en Baja por polaridad invertida en el electroventilador — Fuente: Manometros.pdf, págs. 11, 37

## Valores de referencia
- Presión de Alta con giro invertido: 22 bar (págs. 11, 37).
- Presión de Baja con giro invertido: entre 2,3 y 2,5 bar (págs. 11, 37).
- Régimen de prueba: 1.500 a 1.800 r.p.m. a 30 ºC ambiente (págs. 11, 37).

## Verificación tras la reparación
Invertir los terminales en el conector del electroventilador para restablecer el sentido de giro correcto y verificar que la presión de Alta desciende a los valores normales de condensación (págs. 11, 37).

```yaml
tipo: diagnostico
titulo: Diagnóstico por electroventilador parado o condensador sucio
entidad: diagnostico-condensador
variante: falta-condensacion
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "20, 38, 45"
forma_parte_de: condensador
relacionados: [electroventilador-condensador, condensador, presostato, lectura-manometros]
palabras: [electroventilador parado, condensador sucio, prueba del agua, sobrepresión 25 bar, presostato máxima]
```

## Síntoma
Disparo continuo del presostato de máxima presión, detención periódica del compresor y pérdida brusca de frío con el vehículo detenido a ralentí (págs. 38, 45).

## Causas posibles
- Electroventilador de refrigeración fuera de servicio por avería eléctrica, fusible o relé (págs. 38, 45).
- Malla del condensador colmatada exteriormente por suciedad (hojas, barro, insectos) u obstrucción interna (págs. 38, 45).

## Cómo separar las causas
- Conectar los manómetros a 1.500 - 1.800 r.p.m. y 30 ºC ambiente (pág. 38).
- Observar que la presión de Alta asciende drásticamente hasta alcanzar unos 25 bar (o > 17 bar a ralentí) mientras la Baja se sitúa entre 2,3 y 2,8 bar (págs. 20, 38).
- Inspeccionar el electroventilador: si no gira al subir la presión, comprobar el circuito eléctrico (págs. 38, 45).
- Si el electroventilador gira sin parar a máxima velocidad pero la Alta continúa en 25 bar: efectuar la prueba de regado del condensador (pág. 38).
- Prueba de diagnóstico de condensador sucio: mojar / regar la parte superior del condensador con un chorro de agua fría desde una manguera (pág. 38).
- Si al regar con agua la aguja del manómetro de Alta inicia un rápido descenso mientras se mantenga el flujo de agua, se confirma que el condensador está sucio u obstruido (pág. 38).

📷 IMAGEN: Manómetros (Alta 25 bar, Baja 2,3 - 2,8 bar) y esquema de la prueba de aplicación de agua sobre el condensador — Fuente: Manometros.pdf, pág. 38

## Valores de referencia
- Presión de Alta con fallo de condensación: 25 bar (o > 17 bar) (págs. 20, 38).
- Presión de Baja: entre 2,3 y 2,8 bar (pág. 38).

## Verificación tras la reparación
Reparar el circuito del electroventilador o limpiar profundamente el panel de aletas del condensador con agua a presión perpendicular, comprobando que la Alta no sobrepasa los 14-16 bar (págs. 38, 45).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvula de escape del compresor defectuosa
entidad: diagnostico-compresor
variante: valvula-escape-defectuosa
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "12, 20, 41"
forma_parte_de: compresor
relacionados: [compresor, lectura-manometros]
palabras: [válvula de escape, aguja oscilante, alta oscilante, lámina de impulsión, compresión inestable]
```

## Síntoma
Oscilación continua de la aguja del manómetro de alta presión durante el funcionamiento del compresor a ralentí o régimen constante (págs. 12, 20, 41).

## Causas posibles
- Defecto, rotura o falta de estanqueidad en la lámina de la válvula de escape/impulsión de la placa de válvulas del compresor (págs. 12, 41).

## Cómo separar las causas
- Conectar el puente de manómetros y arrancar el motor a ralentí (1.000 r.p.m.) con 30 ºC ambiente (págs. 12, 41).
- Observar la aguja del manómetro de Baja: se mantiene estable en valor normal (2 bar) (págs. 12, 41).
- Observar la aguja del manómetro de Alta: presenta una vibración o movimiento oscilante continuo sin fijarse en una lectura estable (alrededor de 12 bar) (págs. 12, 41).
- Confirmar que la oscilación no procede del electroventilador conmutando de velocidad; si los electroventiladores están estables y solo oscila la Alta, confirma el fallo en la válvula de escape de la placa del compresor (págs. 12, 41).

📷 IMAGEN: Manómetro de Alta con aguja en movimiento oscilante y manómetro de Baja estable a 2 bar por válvula de escape defectuosa — Fuente: Manometros.pdf, págs. 12, 41

## Valores de referencia
- Presión de Baja: 2 bar (estable) (págs. 12, 41).
- Presión de Alta: oscilante alrededor de 12 bar (págs. 12, 41).
- Régimen de prueba: ralentí (1.000 r.p.m.) a 30 ºC de temperatura exterior (págs. 12, 41).

## Verificación tras la reparación
Sustituir la placa de válvulas de la culata o el compresor completo, comprobando que la aguja de Alta permanece firme y sin oscilaciones (págs. 12, 41).

```yaml
tipo: diagnostico
titulo: Diagnóstico por válvula de admisión del compresor defectuosa
entidad: diagnostico-compresor
variante: valvula-admision-defectuosa
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "12, 20, 41, 46"
forma_parte_de: compresor
relacionados: [compresor, lectura-manometros]
palabras: [válvula de admisión, aguja oscilante, baja oscilante, lámina de aspiración, aspiración inestable]
```

## Síntoma
Oscilación de la aguja del manómetro de baja presión mientras el compresor trabaja a ralentí o régimen constante (págs. 12, 20, 41).

## Causas posibles
- Defecto, deformación o falta de estanqueidad en la lámina de la válvula de admisión/aspiración de la culata del compresor (págs. 12, 41, 46).

## Cómo separar las causas
- Conectar el puente de manómetros y mantener el motor a ralentí (1.000 r.p.m.) a 30 ºC ambiente (págs. 12, 41).
- Observar la aguja del manómetro de Alta: se mantiene fija en un valor normal (12 bar) (págs. 12, 41).
- Observar la aguja del manómetro de Baja: muestra oscilaciones y pulsaciones continuas de presión (págs. 12, 41).
- En determinados modelos de compresores pueden apreciarse ligeras oscilaciones normales en la aguja de Baja debido a golpes de ariete; si la oscilación es amplia e inestable, confirma la avería de la válvula de admisión (págs. 31, 41).

📷 IMAGEN: Manómetro de Baja oscilando e indicación de manómetro de Alta fijo a 12 bar por válvula de admisión defectuosa — Fuente: Manometros.pdf, págs. 12, 41

## Valores de referencia
- Presión de Alta: 12 bar (fija) (págs. 12, 41).
- Presión de Baja: oscilante (págs. 12, 41).
- Régimen de prueba: ralentí (1.000 r.p.m.) a 30 ºC exterior (págs. 12, 41).

## Verificación tras la reparación
Reparar la placa de válvulas o cambiar el compresor, verificando que la aguja de Baja recupera la estabilidad sin vibraciones (págs. 12, 41, 46).

```yaml
tipo: diagnostico
titulo: Diagnóstico por inversión de tubos de aspiración y descarga en el compresor
entidad: diagnostico-compresor
variante: tubos-invertidos
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "39"
forma_parte_de: compresor
relacionados: [compresor, tuberias-y-racores, lectura-manometros]
palabras: [tubos invertidos, Rotalock, aspiración y descarga, acoplamientos repetidos, compresor variable]
```

## Síntoma
Acoplamientos y desacoplamientos continuos y muy frecuentes del compresor a intervalos de pocos segundos y presiones totalmente alteradas (pág. 39).

## Causas posibles
- Manguitos o tubos rígidos de aspiración (baja) y descarga (alta) montados de forma invertida en las conexiones de la culata del compresor (tipo Rotalock) (pág. 39).

## Cómo separar las causas
- Conectar los manómetros y verificar presiones a 1.500 - 1.800 r.p.m. y 30 ºC ambiente (pág. 39).
- Observar que la presión de Baja sube anormalmente a 4,5 - 4,8 bar mientras la Alta se queda reducida en 7 - 8 bar (pág. 39).
- Evaluar el comportamiento del compresor:
  - En compresor de cilindrada fija o cíclico: el compresor se conecta muy pocas veces y cuando lo hace dura activo solo unos pocos segundos (pág. 39).
  - En compresor de cilindrada variable: se activa y desactiva con una frecuencia muy elevada (pág. 39).
  - Si en un compresor variable se aprecian además repetidas y pequeñas variaciones de presión en Baja sin desacoplar, puede ser motivado por fallo interno de la válvula de regulación de cilindrada (pág. 39).

📷 IMAGEN: Manómetros registrando Baja a 4,5 - 4,8 bar y Alta a 7 - 8 bar por inversión de tubos de entrada y salida — Fuente: Manometros.pdf, pág. 39

## Valores de referencia
- Presión de Baja con tubos invertidos: entre 4,5 y 4,8 bar (pág. 39).
- Presión de Alta con tubos invertidos: entre 7 y 8 bar (pág. 39).

## Verificación tras la reparación
Desmontar y conectar correctamente los racores de aspiración y descarga en sus tomas respectivas de la culata del compresor, comprobando el restablecimiento de los ciclos normales (pág. 39).

```yaml
tipo: diagnostico
titulo: Diagnóstico por manómetros sin conectar o tomas de servicio no acopladas
entidad: lectura-manometros
variante: sin-conexion
area: climatizacion
sistema: circuito-frigorifico
fuente: "Manometros.pdf"
paginas: "32-33"
relacionados: [lectura-manometros, presostato]
palabras: [manómetros sin conectar, obús no desplazado, juntas pegadas, rosca hundida, circuito vacío]
```

## Síntoma
Las agujas de los manómetros de alta y baja presión se quedan inmóviles marcando 0 bar tanto con el motor parado como con el motor en marcha (págs. 32-33).

## Causas posibles
- Falta de accionamiento o "pinchado" de los obuses de las válvulas de servicio del vehículo (pág. 32).
- Mangueras de conexión de acoplamiento rápido invertidas entre sí (caso de instalaciones antiguas de R-12) (pág. 32).
- Obuses mecánicamente muy hundidos por exceso de mecanización en la rosca del alojamiento de la toma de servicio (pág. 32).
- Juntas tóricas de los tapones de plástico pegadas en las tomas que impiden que el empujador del conector alcance el obús (pág. 32).
- Circuito de climatización totalmente vacío de refrigerante por fuga masiva (en este caso el compresor no arrancará por seguridad del presostato) (pág. 32).

## Cómo separar las causas
- Verificar si el compresor arranca al conectar el A/C: si el compresor no se pone en marcha, comprobar la presión con un conmutador de prueba para confirmar si el circuito está vacío de gas (pág. 32).
- Si el compresor sí arranca pero los manómetros marcan 0 bar: desenroscar los acopladores rápidos y revisar el interior de las tomas de servicio (pág. 32).
- Comprobar si hay restos de juntas tóricas de los tapones enganchadas en la boca de la toma de servicio impidiendo el paso del empujador (pág. 32).
- Inspeccionar si la aguja central del obús está demasiado profunda por exceso de mecanizado de la rosca (pág. 32).

📷 IMAGEN: Manómetros marcando 0 bar en ambas carátulas por falta de accionamiento de los obuses o vaciado total — Fuente: Manometros.pdf, págs. 32-33

## Valores de referencia
- Lectura de manómetros en fallo de conexión o vaciado total: 0 bar en Alta y 0 bar en Baja (págs. 32-33).

## Verificación tras la reparación
Retirar juntas pegadas, reajustar los empujadores de los conectores rápidos o recargar el circuito si estaba vacío, comprobando que las agujas registran la presión estática del sistema (págs. 32-33).

COBERTURA: documento «Manometros.pdf», páginas 1 a 50 de 50. completo