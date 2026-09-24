```yaml
tipo: fluido
titulo: Refrigerante R134a
entidad: refrigerante-r134a
area: climatizacion
sistema: fluidos-frigorificos
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "1-4"
relacionados: [circuito-frigorifico, unidad-control-climatizador]
palabras: [tetrafluoretano, R134a, agente frigorífico, congelación, sobrepresión]
```

## Designación y norma
Tetrafluoretano (CF3-CH2F o CH2F-CF3). Se conoce bajo las denominaciones comerciales R134a, H-FKW 134a, SUVA 134a y KLEA 134a. (págs. 1-2).

## Propiedades
No documentado en fuentes. (págs. 1-4).

## Dónde se usa y cantidades
Se utiliza como agente frigorífico en los grupos y en el sistema de conducciones del aire acondicionado del vehículo. El tipo de agente y la cantidad de llenado exacta vienen especificados en una placa colocada en el vano motor. (págs. 1, 4).

## Compatibilidades y mezclas prohibidas
No documentado en fuentes. (págs. 1-4).

## Identificación
Se identifica mediante una placa colocada en el vano motor que indica el tipo de agente frigorífico utilizado y la cantidad de llenado. (pág. 4).

## Manipulación, almacenamiento y residuos
Antes de abrir el circuito frigorífico para trabajos de reparación, es obligatorio vaciar el circuito. Se debe evitar el contacto con el agente frigorífico líquido o sus vapores. Si se fugara gas, la mezcla de agente frigorífico y aire no se debe inhalar y se debe extraer mediante un equipo de aspiración de gases de taller adecuado.
Está prohibido realizar trabajos de soldadura (dura o blanda) en componentes de un acondicionador de aire lleno o en zonas del vehículo que provoquen el calentamiento del climatizador. En trabajos de pintado de reparación, la temperatura del objeto no debe superar los 80 ºC en el horno de secado o en la zona de precalentamiento. Si los componentes permanecen abiertos durante un período prolongado, penetra humedad y no se puede volver a cargar el sistema sin sustituir ciertos componentes. (págs. 2-3).

## Riesgos y normativa
El contacto del agente frigorífico líquido o gaseoso con la piel u otras partes del cuerpo provoca congelaciones. En caso de contacto, enjuagar de inmediato y minuciosamente la zona afectada con agua fría durante 15 minutos como mínimo e informar al médico del tipo de refrigerante. El calentamiento del circuito lleno produce una fuerte sobrepresión interna que puede ocasionar el estallido de la instalación. (págs. 1-3).

---

```yaml
tipo: fundamento
titulo: Autodiagnóstico del climatizador
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "4-11"
relacionados: [unidad-control-climatizador]
palabras: [autodiagnosis, memoria de averías, avería estática, avería esporádica, VAS 5051]
```

## Objeto
Monitorizar y supervisar el funcionamiento de los componentes y sensores gestionados por el climatizador, memorizando los fallos para la localización asistida de averías en el taller. (págs. 4-5).

## Fundamento
La unidad de control para Climatronic J255 analiza continuamente las señales e informaciones del sistema. Al detectar un fallo en un sensor o componente vigilado, graba el registro en su memoria de averías junto con el tipo de avería correspondiente. (págs. 4-5).

## Desarrollo
La unidad de control J255 clasifica las averías registradas en dos categorías:
1. Averías estáticas o permanentes: se registran si las condiciones de fallo se mantienen de forma continua durante un tiempo determinado.
2. Averías esporádicas: se registran cuando la condición de fallo desaparece durante un tiempo determinado, añadiéndose la indicación /SP en la pantalla del equipo de diagnosis. Este proceso de evaluación se repite ininterrumpidamente.

Para acceder a la autodiagnosis, se conecta el equipo de diagnosis (VAS 5051 o VAS 5052) al conector de diagnosis de 16 polos del vehículo con el encendido desconectado, accediendo a la dirección "08 - Electrónica de climatización/calefacción".

Las funciones de autodiagnosis disponibles son:
- 01 / 001: Consultar la versión de la unidad de control.
- 02 / 004: Consultar la memoria de averías.
- 03 / 005: Diagnosis de actuadores.
- 04 / 006: Ajuste básico.
- 05 / 004.10: Borrar la memoria de averías.
- 06 / 022: Finalizar la edición.
- 07 / 007: Codificación.
- 08 / 011: Leer el bloque de valores de medición.
- 10 / 012: Adaptación.

Antes de sustituir el panel de mandos e indicación J255, es obligatorio consultar su codificación y adaptación mediante la función "Unidad de control: sustituir" en la localización guiada de averías. (págs. 4-9).

## Valores de referencia
Conector de diagnosis de 16 polos.
Velocidad del vehículo no superior a 5 km/h para ejecutar la diagnosis de actuadores. (págs. 6, 8).

## Errores de concepto frecuentes
Considerar las averías esporádicas como errores de lectura sin valor técnico; reflejan fallos reales cuya condición desapareció temporalmente pero que permanecen memorizados hasta su borrado explícito. (pág. 5).

---

```yaml
tipo: procedimiento
titulo: Diagnosis de actuadores del climatizador
entidad: diagnosis-actuadores-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "12-14"
relacionados: [unidad-control-climatizador, autodiagnostico-climatizador, valvula-reguladora-compresor]
palabras: [diagnosis de actuadores, prueba de componentes, N280, ventilador del radiador, J519]
```

## Objeto y alcance
Verificar de forma secuencial y controlada la excitación eléctrica y la respuesta funcional de los actuadores del climatizador (válvula reguladora del compresor N280, ventiladores del radiador V7/V177, luneta térmica trasera Z1) para descartar fallos de activación o funciones confundidas. (págs. 12-13).

## Condiciones previas
1. Tensión de alimentación de la red de a bordo correcta y batería con suficiente carga.
2. Fusibles del sistema verificados y en buen estado.
3. Velocidad del vehículo inferior o igual a 5 km/h.
4. Para comprobar la válvula reguladora N280: encendido conectado con el motor parado.
5. Para comprobar los ventiladores del radiador (V7/V177) y la luneta térmica trasera (Z1): motor en marcha.
6. Difusores de aire del tablero de instrumentos totalmente abiertos. (págs. 6, 8, 12-13).

## Equipo y material
Sistema de información, medición y diagnóstico de vehículos VAS 5051 o VAS 5052 con cable de diagnóstico VAS 5051/5A. (págs. 8, 9).

## Pasos
1. Conectar el cable de diagnóstico VAS 5051/5A al conector de 16 polos del vehículo con el encendido desconectado.
2. Conectar el encendido o arrancar el motor según el actuador a verificar.
3. Seleccionar la dirección "08 - Electrónica de climatización/calefacción" (unidad J255).
4. Consultar y registrar la memoria de averías.
5. Activar el climatizador desde la unidad J255 y abrir los difusores del tablero de instrumentos.
6. Seleccionar la función "Diagnosis de actuadores" y activar la secuencia de prueba. La solicitud de excitación de la válvula N280 se envía desde la J255 a la unidad de control de la red de a bordo J519, que ejecuta la activación física.
7. Finalizar la prueba y volver a consultar la memoria de averías para comprobar si se han memorizado fallos durante la activación de los componentes. (págs. 8, 12-14).

## Valores de referencia
Velocidad del vehículo durante la prueba: máximo 5 km/h.
Señal de solicitud enviada a la unidad del motor para los ventiladores del radiador V7: de 0% a 100%. (págs. 6, 12).

## Verificación final
Consultar la memoria de averías al concluir el procedimiento. Si la diagnosis se interrumpe, consultar la memoria de averías y el bloque de valores de medición para diagnosticar el estado del sistema. (pág. 14).

## Seguridad y normativa
Si se requieren pruebas dinámicas o mediciones con el vehículo en movimiento, los equipos de diagnosis deben ser operados por un segundo técnico para evitar distracciones durante la conducción. (pág. 7).

---

```yaml
tipo: procedimiento
titulo: Ajuste básico del climatizador
entidad: ajuste-basico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "15-25"
relacionados: [unidad-control-climatizador, autodiagnostico-climatizador]
palabras: [ajuste básico, calibración, topes finales, LIN-Bus, rodaje compresor, grupo 001, grupo 003, grupo 004]
```

## Objeto y alcance
Calibrar y memorizar las posiciones extremas (topes finales) de los servomotores del climatizador, efectuar la asignación automática de direcciones LIN-Bus de los servomotores y realizar la primera puesta en funcionamiento (rodaje) del compresor tras sustituir la unidad de control J255 o componentes del sistema. (págs. 15-24).

## Condiciones previas
1. Batería con tensión suficiente y fusibles del sistema en buen estado.
2. Memoria de averías consultada y sin averías almacenadas (o subsanadas previamente).
3. Para el grupo de indicación 001 (calibración de topes de servomotores): encendido conectado.
4. Para el grupo de indicación 003 (puesta en marcha del compresor): motor en marcha al ralentí como mínimo y difusores del tablero de instrumentos abiertos.
5. En caso de haber sustituido un servomotor o modificado su posición, debe haberse ejecutado con éxito previamente el ajuste básico en el grupo 004 antes de realizar el grupo 001. (págs. 8, 15, 17, 18, 22).

## Equipo y material
Sistema de información, medición y diagnóstico de vehículos VAS 5051 con cable de diagnóstico VAS 5051/5A. (págs. 8, 15).

## Pasos
1. Conectar el cable VAS 5051/5A al conector de diagnóstico de 16 polos con el encendido desconectado.
2. Conectar el encendido o arrancar el motor según el grupo de indicación a calibrar.
3. Entrar en el código de dirección "08 - Electrónica de climatización/calefacción" (unidad J255).
4. Consultar y borrar la memoria de averías.
5. Seleccionar la función "Ajuste básico".
6. Para dirección e identificación de servomotores mediante bus serie LIN-Bus: seleccionar el grupo de indicación "004". Durante este proceso, los servomotores autoadaptan de forma permanente su dirección según su posición física en el cableado en serie.
7. Para calibración de topes de servomotores: seleccionar el grupo de indicación "001". Parpadeará el testigo de la tecla AC (versión Basis) o la pantalla (versión Komfort). Esperar a que todos los servomotores alcancen ambos topes finales y se memoricen los valores.
8. Para primera puesta en funcionamiento del compresor (rodaje) tras sustituir la UCE J255: seleccionar el grupo de indicación "003" con el motor al ralentí y esperar aprox. 5 minutos hasta que la pantalla muestre "Ajuste básico ejecutado" y el testigo de la tecla AC deje de parpadear.

## Valores de referencia
Tiempo de ejecución en grupo 001: aprox. 1 a 2 minutos.
Tiempo de ejecución en grupo 003: aprox. 5 minutos.
Tope inferior memorizado en servomotores: valor 10000.
Tope superior memorizado en servomotores: valor entre 11000 y 20000 según la posición del motor. (págs. 16, 22, 45).

## Verificación final
Confirmar que aparezca la indicación "Ajuste básico ejecutado" en el equipo de diagnosis y que el parpadeo del testigo de la tecla AC o de la pantalla haya cesado. Consultar de nuevo la memoria de averías para verificar que no queden registros de fallo. (págs. 17, 22, 25).

## Seguridad y normativa
Si el proceso en el grupo 003 se interrumpe (por apagar el motor o por valores fuera de tolerancia), se inscribe la avería "Especificación de rodaje, ajuste básico nulo o incorrecto". Esta avería solo se puede borrar repitiendo la función del grupo 003 de principio a fin hasta completarla con éxito. (pág. 22).

COBERTURA: documento «Audi A5 Coupé_2008_aire acondicionado.pdf», páginas 1 a 25 de 414. [queda pendiente desde la página 25]