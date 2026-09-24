```yaml
tipo: fundamento
titulo: Identificación de refrigerantes y compatibilidad de estaciones de carga
entidad: regulacion-automatica
variante: identificacion-refrigerantes
area: climatizacion
sistema: fluidos-frigorificos
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "116-117"
relacionados: [refrigerante-r134a, refrigerante-r1234yf, aceite-frigorifico]
palabras: [etiqueta identificativa, r134a, r1234yf, r744, co2, maquina especifica]
```

## Objeto
Identificar el tipo de gas refrigerante, la capacidad del circuito y el lubricante prescrito en cada vehículo para seleccionar el equipo de carga compatible. (pág. 116)

## Fundamento
Cada vehículo incorpora una etiqueta identificativa del refrigerante, su masa en gramos, el aceite necesario e instrucciones de seguridad. (pág. 116)

## Desarrollo
En el automóvil se emplean tres tipos de agentes refrigerantes: R134a, R1234yf y R744 (CO2).

Es un requisito imperativo respetar las indicaciones de la etiqueta identificativa. Para cada tipo de gas refrigerante se requiere utilizar una máquina de recuperación, diagnóstico y carga específica. No son compatibles entre sí ni las estaciones de servicio ni los aceites lubricantes de cada sistema. (págs. 116-117)

📷 IMAGEN: Etiquetas identificativas del tipo de fluido, carga en gramos y aceite específico para R134a, R1234yf y R744 (CO2) — Fuente: Nº10. Carga y Diagonostico.pdf, pág. 116

## Valores de referencia
- Tipos de refrigerante en automoción: R134a, R1234yf y R744 (CO2). (págs. 116-117)

## Errores de concepto frecuentes
Considerar que las estaciones de carga o los aceites son universales e intercambiables entre distintos gases. Cada refrigerante exige el uso exclusivo de su máquina y aceite específico. (págs. 116-117)

---

```yaml
tipo: procedimiento
titulo: Carga de refrigerante en la bombona de la estación de servicio
entidad: carga-refrigerante
variante: bombona-estacion
area: climatizacion
sistema: equipos-taller
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "117-118, 120, 122"
relacionados: [carga-refrigerante, recuperacion-refrigerante]
palabras: [bombona de la maquina, 4 a 5 kg, reciclado interno, bombona exterior, visor de humedad]
```

## Objeto y alcance
Introducir y mantener entre 4 y 5 kg de fluido refrigerante en la bombona interna de la estación de carga para garantizar la presión de trabajo durante las intervenciones. (págs. 117-118, 122)

## Condiciones previas
Válvulas cerradas, interruptores desconectados y comprobado el nivel de aceite en el visor de la bomba de vacío. Balanza ajustada a cero. (págs. 117-118)

## Equipo y material
Estación de carga, bombona exterior de suministro de refrigerante y mangueras de conexión. (págs. 117-118)

## Pasos
1. Método por introducción directa:
   - Comprobar que todas las válvulas están cerradas.
   - Conectar la bombona exterior a la válvula de servicio colocándola en posición elevada para extraer líquido.
   - Efectuar el vacío durante 1 minuto en la manguera utilizada.
   - Abrir las válvulas de la bombona exterior y de servicio hasta transferir entre 4 y 5 kg de refrigerante.
   - Cerrar la bombona, dar la vuelta a la misma y abrir la válvula para que el gas empuje el líquido residual de la manguera.
   - Cerrar las válvulas y desconectar.
2. Método por proceso de recuperación (recomendado ante dudas de limpieza):
   - Conectar la manguera de alta a la bombona exterior, abrir válvulas de ALTA y VAC, hacer el vacío de la manguera y cerrar VAC.
   - Conectar el interruptor de recuperación y abrir la válvula de la bombona exterior hasta transferir de 4 a 5 kg.
   - Cerrar la bombona, purgar la manguera mediante la recicladora y cerrar ALTA.
3. Reciclado interno de la estación de carga:
   - Se realiza si el visor marca humedad (color amarillo) o para elevar la presión de la bombona.
   - Conectar la manguera de alta a la válvula de servicio, hacer el vacío de la manguera, activar la recuperación y abrir lentamente manteniendo la presión de entrada por debajo de 5 bar.
   - Detener el proceso cuando por el visor pase líquido verde intenso. (págs. 117-118, 120, 122)

## Valores de referencia
- Masa de refrigerante idónea en la bombona de la estación: de 4 a 5 kg (mínimo siempre > 1 kg; capacidad máxima de bombona: 10 kg).
- Presión máxima de entrada durante el reciclado interno: 5 bar.
- Indicador de presencia de humedad en el visor: color amarillo (color verde intenso indica refrigerante deshidratado). (págs. 117-118, 120, 122)

## Verificación final
Comprobar en el visor que el fluido circula de color verde intenso y que la báscula de la máquina registra entre 4 y 5 kg de refrigerante almacenado. (págs. 118, 120)

## Seguridad y normativa
Evitar superar los 10 kg de masa máxima en la bombona interna de la máquina para no provocar el paro automático de seguridad. (págs. 118, 120)

---

```yaml
tipo: procedimiento
titulo: Recuperación del refrigerante del vehículo
entidad: recuperacion-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "117-120"
relacionados: [carga-refrigerante, aceite-frigorifico, compresor]
palabras: [recuperación, 4500-5000 rpm, 3 minutos, 5 bar, 0.2 bar, 0.8 bar]
```

## Objeto y alcance
Extraer la totalidad del fluido refrigerante del vehículo minimizando el arrastre y pérdida de aceite lubricante del compresor. (págs. 117-120)

## Condiciones previas
Vehículo a temperatura de servicio y estación de carga conectada a la red. (págs. 117-120)

## Equipo y material
Estación de recuperación y reciclaje con mangueras de Alta y Baja presión. (págs. 117-120)

## Pasos
1. Arrancar el motor del vehículo y mantenerlo a temperatura de trabajo con la climatización conectada.
2. Acelerar el motor entre 4.500 y 5.000 rpm durante 3 minutos con la calefacción y el aire acondicionado al máximo, dirigiendo la mayor masa de aceite hacia el compresor.
3. Parar el motor, mantener la turbina de aire fresco a máxima velocidad e iniciar el proceso cuando las presiones del circuito se igualen.
4. Con todas las válvulas cerradas, conectar los acoples de Alta y Baja a las tomas de servicio del vehículo.
5. Seleccionar la función de recuperación (programar 0.00 para extraer la totalidad del gas).
6. Abrir lentamente las válvulas de ALTA y BAJA modulando su apertura para que la presión de entrada en la máquina no supere en ningún caso los 5 bar.
7. La máquina detiene el proceso automáticamente al descender la presión por debajo de 0,2 bar y entra en espera durante 2 minutos. Si en ese intervalo la presión se eleva por encima de 0,8 bar, inicia de forma automática un nuevo ciclo de recuperación. (págs. 117-120)

## Valores de referencia
- Régimen de aceleración previa del motor: 4.500 a 5.000 rpm durante 3 minutos.
- Presión máxima de entrada en manómetros durante el trasvase: 5 bar.
- Presión de desconexión automática del compresor de recuperación: inferior a 0,2 bar.
- Umbral de rearme automático tras 2 minutos de espera: presión superior a 0,8 bar. (págs. 117-120)

## Verificación final
Anotar la masa final de refrigerante recuperado que muestra el display de la máquina. (págs. 118, 120)

## Seguridad y normativa
Mantener la presión de admisión por debajo de 5 bar para evitar la succión involuntaria del aceite del cárter del compresor. (págs. 118, 120)

---

```yaml
tipo: procedimiento
titulo: Descarga e introducción de aceite del circuito
entidad: aceite-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "118, 121"
relacionados: [recuperacion-refrigerante, vacio-circuito, carga-refrigerante]
palabras: [descarga de aceite, separador, 30 segundos, inyección por vacío, adición componentes]
```

## Objeto y alcance
Medir el volumen de aceite extraído durante la fase de recuperación e introducir en el circuito la dosis equivalente de aceite nuevo tras el vacío. (págs. 118, 121)

## Condiciones previas
Proceso de recuperación finalizado y vacío del circuito completado. (págs. 118, 121)

## Equipo y material
Recipiente graduado de la estación de carga, aceite específico para el refrigerante utilizado y aditivo trazador UV (opcional). (págs. 118, 121)

## Pasos
1. Finalizado el ciclo de recuperación, abrir la válvula del decantador/separador de aceite de la máquina durante unos 30 segundos hasta que cese el flujo.
2. Medir y anotar el volumen exacto de aceite evacuado.
3. Llenar el recipiente de inyección de aceite nuevo con una cantidad superior a la requerida (mínimo 30 g más del volumen a cargar).
4. Con el circuito del vehículo bajo vacío, abrir la válvula de BAJA y la válvula del recipiente de aceite para que la depresión aspire la dosis programada.
5. En caso de haber sustituido componentes del circuito, añadir los siguientes suplementos de aceite al volumen recuperado:
   - Evaporador = 50 cc.
   - Condensador = 30 cc.
   - Filtro = 10 cc.
   - Tubos = 10 cc.
6. Cerrar la válvula del recipiente inmediatamente al ingresar la cantidad ajustada. (págs. 118, 121)

## Valores de referencia
- Tiempo de apertura de la válvula de drenaje de aceite: unos 30 segundos.
- Margen mínimo de aceite en el vaso de inyección: 30 g por encima del valor a introducir.
- Dosis de adición por sustitución de componentes: Evaporador = 50 cc, Condensador = 30 cc, Filtro = 10 cc, Tubo = 10 cc. (págs. 118, 121)

## Verificación final
Comprobar que el volumen de aceite nuevo introducido coincide exactamente con la suma del aceite recuperado más los añadidos prescritos por componentes sustituidos. (págs. 118, 121)

## Seguridad y normativa
No prolongar la apertura de la válvula del separador de aceite más de 30 segundos para impedir la entrada de aire en la máquina. No reutilizar en ningún caso el aceite descargado. (págs. 118, 121)

---

```yaml
tipo: procedimiento
titulo: Vacío del circuito de aire acondicionado
entidad: vacio-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "118, 121"
relacionados: [recuperacion-refrigerante, carga-refrigerante]
palabras: [vacío, 30 minutos, estanqueidad, 5 minutos, depresión, humedad]
```

## Objeto y alcance
Evacuar el aire no condensable y evaporar la humedad residual acumulada en el interior de las tuberías del climatizador. (págs. 118, 121)

## Condiciones previas
Refrigerante del vehículo recuperado en su totalidad y mangueras de Alta y Baja conectadas a las tomas de servicio. (págs. 118, 121)

## Equipo y material
Estación de carga con bomba de vacío de doble efecto y manómetros de control. (págs. 118, 121)

## Pasos
1. Con las mangueras de Alta y Baja conectadas al vehículo, abrir las válvulas de ALTA, BAJA y VAC de la estación de carga.
2. Poner en funcionamiento la bomba de vacío durante un intervalo mínimo de 30 minutos (mínimo 45 minutos si el circuito ha permanecido abierto o tras un lavado).
3. Cerrar la válvula VAC y detener la bomba de vacío.
4. Mantener el sistema en reposo durante al menos 5 minutos para realizar el test de estanqueidad. (págs. 118, 121)

## Valores de referencia
- Duración del vacío estándar: mínimo 30 minutos.
- Duración del vacío profundo (tras apertura o lavado): mínimo 45 minutos.
- Tiempo de prueba de estanqueidad en reposo: mínimo 5 minutos (la aguja del vacuómetro debe mantenerse fija en depresión). (págs. 118, 121)

## Verificación final
Comprobar que durante los 5 minutos de estanqueidad no se produce pérdida de depresión en las agujas de los manómetros. (págs. 118, 121)

## Seguridad y normativa
Si la aguja sube hacia la presión atmosférica durante la prueba en reposo, existe una fuga en el circuito que exige reparación antes de introducir el gas refrigerante. (págs. 118, 121)

---

```yaml
tipo: procedimiento
titulo: Carga de fluido refrigerante al vehículo
entidad: carga-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "118-119, 122"
relacionados: [vacio-circuito, aceite-frigorifico]
palabras: [carga refrigerante, alta presión, masa prescrita, apoyo por baja, aspiración lenta]
```

## Objeto y alcance
Introducir la masa exacta en gramos de fluido refrigerante prescrita por el fabricante en el circuito del vehículo. (págs. 118-119, 122)

## Condiciones previas
Vacío del circuito ejecutado con éxito y dosis de aceite nuevo inyectada. Verificar que en la bombona interna de la máquina hay más de 1 kg de gas. (págs. 118-119, 122)

## Equipo y material
Estación de carga automatizada y placa de datos del vehículo. (págs. 118, 122)

## Pasos
1. Programar en el teclado de la máquina la masa exacta de refrigerante indicada en la etiqueta del vehículo (nunca programar 0.00 en la carga).
2. Con las mangueras de Alta y Baja conectadas, abrir exclusivamente la válvula de ALTA e iniciar el proceso para introducir el gas en fase líquida favorecido por la depresión del vacío.
3. Al completar la transferencia, la máquina se detiene automáticamente. Cerrar la válvula de ALTA.
4. Si el fluido no entra por completo en el circuito por equilibrio de presiones:
   - Arrancar el motor del vehículo y conectar la climatización.
   - Abrir muy poco y muy lentamente la válvula de BAJA para que el compresor aspire el volumen restante en estado gaseoso hasta completar la masa especificada.
5. Si el vehículo no dispone de toma de baja, calentar la bombona o ejecutar un reciclado interno en la máquina para elevar la presión de alimentación. (págs. 118-119, 122)

## Valores de referencia
- Masa de refrigerante a cargar: valor numérico exacto indicado en la etiqueta identificativa del fabricante.
- Margen de seguridad en la bombona de la recicladora: debe conservar siempre más de 1 kg tras la carga (óptimo de 4 a 5 kg). (págs. 118-119, 122)

## Verificación final
Confirmar en el display que la báscula de la estación ha transferido la masa completa prescrita al vehículo. (págs. 119, 122)

## Seguridad y normativa
En caso de completar la carga por la toma de Baja con el motor en marcha, la válvula se debe abrir de forma muy lenta y reducida para impedir el paso de refrigerante en estado líquido hacia el compresor, evitando golpes de líquido que destruyen sus componentes internos. (págs. 119, 122)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico del sistema por presiones de trabajo y prueba de rendimiento
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "123-125"
relacionados: [compresor, no-enfria, prueba-rendimiento]
palabras: [presiones de trabajo, compresor variable, compresor fijo, aireadores, 1500 rpm]
```

## Síntoma
Insuficiencia de enfriamiento o anomalías en el rendimiento del equipo de climatización. (págs. 123-125)

## Causas posibles
- Presión de Alta fuera de tolerancias nominales.
- Presión de Baja fuera de tolerancias nominales.
- Desviación motivada por excesos o defectos de carga, o por la influencia de la temperatura ambiente exterior. (págs. 123-125)

## Cómo separar las causas
1. Comprobación de presiones de trabajo:
   - Conectar mangueras de Alta y Baja con las válvulas de la máquina cerradas.
   - Arrancar el motor a 1.500 rpm con la turbina de aire fresco a máxima velocidad y el aire acondicionado activado.
   - Evaluar las presiones según la tecnología del compresor:
     - Compresor variable: Alta constante a 8-10 bar (hasta 12 bar con calor extremo); Baja constante a 2 bar.
     - Compresor fijo: Alta variable de 10 a 20 bar; Baja variable de 0,5 a 2,5 bar.
2. Comprobación de rendimiento del equipo:
   - Mantener el motor a 1.500 rpm, turbina al máximo y conectar la recirculación de aire.
   - Dirigir la salida de aire a los difusores centrales y cerrar los laterales.
   - Colocar un termómetro en la salida central y comparar la temperatura con la tabla de referencia frente a la temperatura ambiente exterior. (págs. 123-125)

## Valores de referencia
- Régimen de prueba del motor: 1.500 rpm.
- Presiones nominales compresor variable: Alta = 8 a 10 bar (máx. 12 bar); Baja = 2 bar.
- Presiones nominales compresor fijo: Alta = 10 a 20 bar; Baja = 0,5 a 2,5 bar.
- Tabla de rendimiento (Temperatura exterior frente a Temperatura en aireadores):
  - 15 ºC exterior: 2 a 4 ºC en aireadores.
  - 20 ºC exterior: 4 a 6 ºC en aireadores.
  - 26 ºC exterior: 4 a 7 ºC en aireadores.
  - 32 ºC exterior: 5 a 8 ºC en aireadores.
  - 37 ºC exterior: 7 a 10 ºC en aireadores.
- Presiones en reposo según temperatura exterior: 15 ºC = 3,9 bar; 20 ºC = 4,7 bar; 25 ºC = 5,5 bar; 30 ºC = 6,6 bar; 35 ºC = 7,5 bar; 40 ºC = 8,8 bar; 45 ºC = 9,8 bar. (págs. 123-125)

## Verificación tras la reparación
Comprobar que las presiones se estabilizan dentro de los rangos nominales y que la temperatura registrada en los difusores centrales cumple la tabla de rendimiento. (págs. 123-125)

---

```yaml
tipo: procedimiento
titulo: Desconexión del equipo de carga y recuperación de mangueras
entidad: carga-refrigerante
variante: desconexion-mangueras
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "123-124"
relacionados: [carga-refrigerante, recuperacion-refrigerante]
palabras: [desconexión mangueras, purga de mangueras, manómetros a cero, calibración]
```

## Objeto y alcance
Recuperar el refrigerante atrapado en el interior de los tubos de servicio tras finalizar la carga, dejando los manómetros calibrados a cero. (págs. 123-124)

## Condiciones previas
Proceso de carga completado y sistema de aire acondicionado del vehículo en pleno funcionamiento. (págs. 123-124)

## Equipo y material
Estación de carga conectada al vehículo. (págs. 123-124)

## Pasos
1. Con el aire acondicionado del vehículo funcionando, desconectar la manguera de ALTA de la toma del vehículo.
2. Abrir la válvula de ALTA en el puente de manómetros de la máquina.
3. Abrir lentamente la válvula de BAJA para que el compresor del vehículo aspire el refrigerante acumulado en el interior de las mangueras de servicio.
4. Cuando las agujas de los manómetros de Alta y Baja se igualen, cerrar ambas válvulas en la máquina.
5. Desconectar la manguera de BAJA de la toma del vehículo.
6. Activar la recuperación en la estación de servicio para evacuar el gas residual de los tubos hasta que las agujas de los manómetros queden exactamente a cero. (págs. 123-124)

## Valores de referencia
- Lectura final en los manómetros de Alta y Baja: 0 bar. (págs. 123-124)

## Verificación final
Verificar que ambos manómetros marcan 0 bar para evitar descalibraciones mecánicas y lecturas erróneas en trabajos futuros. (págs. 123-124)

## Seguridad y normativa
No desconectar la manguera de baja con presión en su interior para evitar proyecciones de fluido a la atmósfera. (págs. 123-124)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías hidráulicas por combinación de presiones
entidad: lectura-manometros
variante: averias-hidraulicas
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "124-126"
relacionados: [compresor, valvula-expansion, electroventilador-condensador, filtro-deshidratador]
palabras: [averías hidráulicas, combinación presiones, falta refrigerante, exceso refrigerante, compresor averiado]
```

## Síntoma
Ausencia de aire frío, enfriamiento insuficiente o comportamiento anómalo de las agujas de los manómetros de Alta y Baja. (págs. 124-126)

## Causas posibles
- Alta normal / Baja normal con aire caliente: exceso de aceite en el sistema, contaminación por aire/humedad, o válvula de expansión cerrada.
- Alta normal / Baja normal con manguito de baja muy frío: válvula de expansión demasiado abierta.
- Alta igual a Baja (presiones igualadas):
  - La presión de alta desciende al enfriar el condensador con agua: exceso de refrigerante, condensador obstruido o avería en el electroventilador.
  - Presiones se equilibran rápidamente al parar el compresor y fluctúan en marcha: partícula bajo la válvula de descarga, o avería en válvulas/juntas.
  - Presiones no varían: problema mecánico del compresor o baja cantidad de refrigerante en el circuito.
- Alta baja / Baja baja:
  - Manguito de baja más frío que el evaporador: obstrucción mecánica en la línea de baja presión.
  - Hielo en la línea de líquido o en el filtro: obstrucción en la línea de líquido o filtro deshidratador bloqueado.
- Compresor fijo (1.500 rpm):
  - Carga baja (R134a: Baja 0,5-1 bar; Alta 6,5-9,5 bar): peligro de congelación si la baja cae a < 0,5 bar al acelerar.
  - Carga excesiva (R134a: Baja 2,5-3,5 bar; Alta 19-24 bar): presiones y temperaturas en aireadores muy elevadas. (págs. 124-126)

## Cómo separar las causas
- Si la Alta baja al rociar agua sobre el condensador: limpiar el condensador o reparar el electroventilador.
- Si las presiones permanecen igualadas y no reaccionan: comprobar si existe fuga o sustituir el compresor por fallo mecánico interno.
- Si hay hielo en el filtro o tubería de líquido: sustituir la tubería obstruida y cambiar el filtro deshidratador. (pág. 126)

## Valores de referencia
- Valores normales compresor fijo (R134a a 1.500 rpm): Baja = 1,5 a 2 bar; Alta = 13,5 a 15 bar.
- Valores normales compresor variable eléctrico: Baja = 1,4 a 1,8 bar; Alta = 9 a 12 bar.
- Umbral de peligro de congelación por baja carga: presión de Baja < 0,5 bar al acelerar. (págs. 124-125)

## Verificación tras la reparación
Recuperar el refrigerante, reparar el componente defectuoso, efectuar el vacío, cargar la cantidad exacta de aceite nuevo y gas prescritos y verificar la estabilización de presiones. (pág. 126)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías del compresor y análisis del aceite
entidad: diagnostico-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "126-131"
relacionados: [compresor, embrague-compresor, aceite-frigorifico, ruidos-compresor]
palabras: [avería compresor, aceite rojo, aceite negro, aceite purpurina, ruidos, embrague, placa de válvulas]
```

## Síntoma
Alta y Baja presión igualadas con el compresor girando, presencia de ruidos extraños, sobrecalentamiento o parada del sistema. (págs. 126-131)

## Causas posibles
- Avería en el embrague electromagnético o en el sistema de seguridad en compresores sin embrague.
- Averías internas: fallo en electroválvula de regulación, rotura o suciedad en placa de válvulas de descarga, bielas dobladas, pistones marcados o ataque ácido por humedad.
- Causas operativas de avería:
  - Falta de lubricante o refrigerante de retorno (fugas, válvula de expansión defectuosa, obstrucción).
  - Suciedad en la instalación o falta de limpieza en reparaciones previas.
  - Golpe de líquido por válvula de expansión abierta o carga de gas por la toma de baja.
  - Falta de uso (fugas por el retén del eje).
  - Tensión de alimentación inadecuada o caídas de tensión por contactos defectuosos.
- Ruidos anómalos:
  - Compresor desembragado: roce de placa frontal con polea, oscilación de rodamiento por golpe o roce con elementos extraños.
  - Compresor embragado: carga de gas incorrecta, golpe de líquido, roce de tubos con el chasis, patinado del embrague por grasa/aceite o partícula en válvula de descarga. (págs. 126-128, 131)

## Cómo separar las causas
1. Verificar si el compresor gira realmente alimentando el embrague directamente a 12 V si no acciona.
2. Medir la distancia de separación entre la polea y el plato frontal (Sanden = 0,4 a 0,8 mm; otras marcas = 0,2 a 0,5 mm).
3. Inspeccionar el estado y color del aceite extraído:
   - Aceite rojo: presencia de humedad que genera ácido y corrosión.
   - Aceite negro: desgastes severos o gripados por falta de lubricación/sobrecalentamiento.
   - Aceite purpurina: presencia de partículas metálicas por golpes o daños mecánicos internos.
4. Desmontar e inspeccionar internamente: bielas dobladas indican golpe de líquido; cabeza de pistones corroída indica ataque ácido; placa de válvulas rota indica partículas duras en la cámara. (págs. 128-131)

## Valores de referencia
- Distancia entre polea y plato frontal: Sanden = 0,4 a 0,8 mm; otras marcas = 0,2 a 0,5 mm.
- Apariencia de aceite en circuito correcto: transparente, sin emulsiones rojas, negras o metálicas. (págs. 130-131)

## Verificación tras la reparación
Si se detecta aceite rojo, negro, purpurina, o partículas en el circuito, es estrictamente obligatorio realizar el lavado completo del circuito con aire seco y nitrógeno líquido, y sustituir sin excepción el compresor, la válvula de expansión y el filtro deshidratador. (págs. 127, 131)

---

```yaml
tipo: procedimiento
titulo: Lavado del circuito de climatización
entidad: lavado-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "127-128, 131-132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, vacio-circuito]
palabras: [lavado circuito, aire seco, nitrógeno líquido, partículas, sustitución obligatoria]
```

## Objeto y alcance
Limpiar minuciosamente el interior de las canalizaciones, condensador y evaporador para eliminar restos de suciedad, partículas metálicas, ferricha o aceite degradado tras el fallo de un compresor. (págs. 127, 131)

## Condiciones previas
Refrigerante del circuito recuperado en su totalidad. Compresor averiado, válvula de expansión y filtro deshidratador desmontados del vehículo. (págs. 127, 131)

## Equipo y material
Instalación de aire seco y botella de nitrógeno líquido. (págs. 127, 131)

## Pasos
1. Desmontar y apartar los componentes no lavables: compresor, válvula de expansión y filtro deshidratador.
2. Hacer pasar aire seco por el interior de cada uno de los tubos, manguitos, condensador y evaporador para arrastrar los residuos sueltos.
3. Inyectar nitrógeno líquido a través de los mismos componentes para deshumedecer y limpiar las superficies internas, haciendo circular el flujo en sentido contrario a la circulación habitual del refrigerante.
4. Montar en el vehículo el compresor nuevo, la válvula de expansión nueva y el filtro deshidratador nuevo. (págs. 127, 131)

## Valores de referencia
- Sentido de aplicación del barrido con nitrógeno: a contracorriente respecto al flujo del gas.
- Componentes de sustitución obligatoria tras el lavado: compresor, válvula de expansión y filtro. (págs. 127, 131)

## Verificación final
Ejecutar un vacío profundo al circuito de al menos 45 minutos de duración para garantizar la eliminación absoluta de humedad tras el proceso de limpieza. (págs. 128, 132)

## Seguridad y normativa
No lavar nunca la válvula de expansión, el filtro deshidratador ni el compresor. (págs. 127, 131)

---

```yaml
tipo: procedimiento
titulo: Montaje y sustitución de un compresor nuevo
entidad: sustitucion-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "127, 131-132"
relacionados: [compresor, aceite-frigorifico, vacio-circuito, rodaje-compresor]
palabras: [sustitución compresor, vaciado de aceite, adición de aceite, rodaje, 1000 rpm]
```

## Objeto y alcance
Instalar un compresor nuevo en el vehículo garantizando el ajuste preciso de la masa de aceite, la estanqueidad y el rodaje inicial de sus componentes mecánicos. (págs. 127, 131-132)

## Condiciones previas
Circuito verificado y lavado previamente si presentaba contaminación o aceite alterado. Válvula de expansión y filtro renovados. (págs. 127, 131-132)

## Equipo y material
Compresor nuevo, aceite frigorífico prescrito, estación de vacío y carga, y llaves de apriete. (págs. 131-132)

## Pasos
1. Extraer manualmente todo el aceite del cárter del compresor nuevo.
2. Reintroducir en el compresor nuevo una cantidad de aceite calculada mediante la suma de: el volumen extraído manualmente del compresor viejo + el volumen recuperado por la máquina + 20 cc adicionales.
   (Si se han cambiado piezas adicionales sin lavar todo el sistema, añadir también: Evaporador = 50 cc; Condensador = 30 cc; Filtro = 10 cc; Tubo = 10 cc. Si se realizó el lavado completo del circuito, cargar la cantidad total recomendada por el fabricante).
3. Instalar en la carrocería el compresor nuevo evitando forzar las orejetas de fijación y verificando el libre deslizamiento de los casquillos.
4. Conectar las tuberías utilizando juntas tóricas nuevas y respetar los pares de apriete para no dañar los orificios roscados.
5. Realizar un vacío profundo al circuito con una duración mínima de 45 minutos y ejecutar el test de estanqueidad.
6. Cargar la masa de refrigerante prescrita exclusivamente por la toma de Alta presión.
7. Comprobar la tensión de la correa de accesorios y arrancar el motor al ralentí, verificando la ausencia de ruidos anómalos.
8. Conectar la climatización, comprobar el acoplamiento del plato y realizar el rodaje inicial del compresor sin superar en ningún caso las 1.000 rpm durante los primeros 5 minutos de funcionamiento. (págs. 127, 131-132)

## Valores de referencia
- Suplemento fijo de aceite en el cálculo de reposición: +20 cc.
- Tiempo mínimo de vacío profundo: 45 minutos.
- Régimen máximo del motor durante el rodaje inicial: 1.000 rpm durante los primeros 5 minutos. (págs. 128, 132)

## Verificación final
Verificar las presiones de funcionamiento en los manómetros y comprobar que la temperatura de salida en los aireadores centrales cumple los valores especificados. (pág. 132)

## Seguridad y normativa
Cargar el refrigerante únicamente por el lado de alta presión con el motor parado para evitar golpes de líquido en el compresor nuevo. (pág. 132)

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico del sistema de climatización automática
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "Nº10. Carga y Diagonostico.pdf"
paginas: "133-134"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-exterior]
palabras: [autodiagnóstico, memoria averías, esporádicas, actuadores, ajuste básico, valores individuales]
```

## Síntoma
Aparición de códigos de fallo en la unidad de control de la climatización, parpadeo de datos en la pantalla o mal funcionamiento de servomotores y electroventiladores. (págs. 133-134)

## Causas posibles
- Averías esporádicas o fugaces: fallos puntuales de señal o caídas de tensión (se borran automáticamente tras 30 o 40 puestas en marcha sin repetirse).
- Averías actuales o permanentes: interrupciones, cortocircuitos o fallos físicos en sensores y actuadores (solo se borran tras su reparación y borrado manual).
- Fallos en sensores compartidos: memorizados en otras unidades de control y transmitidos por CAN-Bus (en Cuadro de Instrumentos: sensor de temperatura exterior y velocidad; en Red de A Bordo: marcha atrás, alternador y regulador de iluminación). (págs. 133-134)

## Cómo separar las causas
Conectar una máquina de diagnosis compatible y acceder a las funciones del autodiagnóstico:
1. Consultar la memoria de averías: identificar si los códigos corresponden a sensores específicos de la UCE de climatización o a sensores compartidos recibidos por CAN-Bus.
2. Diagnóstico de elementos actuadores:
   - Test de segmentos: ilumina todos los dígitos del display para verificar la pantalla.
   - Velocidades del electroventilador: acciona las velocidades o variación continua del ventilador del radiador.
   - Turbina de aire: acciona la turbina de aire fresco en todo su rango de trabajo.
   - Embrague del compresor: conmuta cíclicamente el acoplamiento magnético (se aprecia auditiva y visualmente).
   - Motores de las trampillas: activa los servomotores para comprobar el reparto de flujo y el salto térmico.
3. Ajuste básico: desplaza de principio a fin todos los servomotores y memoriza sus posiciones de mínimo y máximo (obligatorio tras sustituir un servomotor o la UCE del climatizador).
4. Lectura de valores de funcionamiento individual: supervisa parámetros en tiempo real como estado del compresor, revoluciones del motor, posición teórica/real de servomotores (temperatura, central, deshielo, recirculación), lecturas de sondas (exterior, entrada de aire, habitáculo, refrigerante), porcentaje de radiación del fotosensor solar, tensión de alimentación, presión del circuito (sensor MAP) y porcentaje de activación de la electroválvula del compresor. (págs. 133-134)

## Valores de referencia
- Criterio de borrado automático de averías esporádicas: 30 a 40 arranques del sistema sin reproducciones del fallo.
- Tensión de alimentación leída en diagnosis: aproximadamente igual a la tensión de batería. (págs. 133-134)

## Verificación tras la reparación
Ejecutar la función de ajuste básico tras sustituir componentes, borrar la memoria de averías y comprobar en la lectura de valores individuales que las posiciones teóricas y reales de los servomotores coinciden. (págs. 133-134)

---

COBERTURA: documento «Nº10. Carga y Diagonostico.pdf», páginas 116 a 134 de 136. [completo]

💡 *Si necesitas revisar la comprobación de algún componente específico o repasar algún procedimiento de taller en profundidad, dime y lo analizamos paso a paso.*