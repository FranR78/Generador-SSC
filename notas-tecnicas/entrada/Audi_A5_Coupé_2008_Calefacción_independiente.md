```yaml
tipo: fundamento
titulo: Prevención de la corrosión por contacto y normas de limpieza
entidad: prl-y-seguridad
area: general
sistema: prl-y-seguridad
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "1-2"
relacionados: [calefaccion-independiente]
palabras: [corrosión galvánica, elementos de unión, limpieza, sistema de combustible]
```

## Objeto
Prevenir la corrosión galvánica por contacto en componentes de aluminio y garantizar la limpieza rigurosa en las intervenciones del sistema de combustible y de la calefacción independiente. (págs. 1-2)

## Fundamento
El contacto directo entre materiales metálicos disímiles (como el aluminio y metales no revestidos) origina corrosión galvánica. La entrada de impurezas, partículas de fibra o agua en el sistema de combustible provoca sedimentaciones e irregularidades en la combustión. (págs. 1-2)

## Desarrollo
Para evitar la corrosión por contacto, en fábrica se instalan únicamente elementos de unión (tornillos, tuercas, remaches, tapones) provistos de un revestimiento aislante especial, combinados con piezas de goma o plástico no conductoras. Los recambios montados deben ser piezas originales comprobadas y compatibles con el aluminio.

Durante los trabajos en el sistema de combustible de la calefacción independiente deben observarse las siguientes reglas de limpieza:
- Limpiar a fondo los empalmes y sus zonas adyacentes antes de aflojarlos.
- Depositar las piezas desmontadas sobre superficies limpias (papel o lámina de plástico, nunca trapos que desprendan fibras) y mantenerlas cubiertas.
- Extraer los recambios de su embalaje protector únicamente en el momento de su instalación.
- Con el circuito de combustible abierto, queda prohibido trabajar con aire comprimido, mover el vehículo, poner en marcha el motor o activar la calefacción independiente (incluso desde la función de ajuste básico). (págs. 1-2)

## Valores de referencia
No documentado en fuentes en las páginas 1-2.

## Errores de concepto frecuentes
- Utilizar paños o trapos convencionales que desprendan fibras para limpiar o cubrir componentes abiertos del sistema de combustible. (pág. 2)
- Aplicar aire comprimido para limpiar racores o conductos cuando el sistema de combustible se encuentra abierto. (pág. 2)

---

```yaml
tipo: fundamento
titulo: Autodiagnosis y gestión de memoria de averías de la calefacción independiente
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "3-6"
relacionados: [unidad-control-j364]
palabras: [J364, dirección 18, memoria permanente, averías esporádicas, protección de componentes]
```

## Objeto
Explicar el funcionamiento del sistema de autodiagnosis, el registro de fallos en memoria no volátil y el protocolo de protección de componentes en la unidad de control para calefacción adicional J364. (págs. 3-6)

## Fundamento
La unidad de control J364 analiza continuamente las señales registradas por los sensores y supervisa los actuadores del calefactor independiente. Las anomalías detectadas se inscriben en una memoria no volátil que conserva la información independientemente de la tensión de alimentación. (págs. 3-5)

## Desarrollo
- **Acceso al sistema:** La autodiagnosis se realiza con el equipo de diagnosis (VAS 5051/5052) bajo el código de dirección "18 - Calefacción adicional/independiente". Requiere el encendido conectado para iniciar la comunicación con la interfaz J533; una vez establecida la fase de diagnosis, esta puede continuar con el encendido desconectado. (págs. 5, 8)
- **Clasificación de averías:** Los fallos se catalogan en estáticos (permanentes) o esporádicos (/SP). Si las condiciones de la avería desaparecen durante un periodo determinado, el registro pasa a esporádico y termina borrándose automáticamente tras un tiempo. Junto a cada código se memorizan las condiciones de entorno (kilometraje, hora, fecha, temperatura del motor, tensión de servicio y régimen). (págs. 4, 8)
- **Bloqueos especiales:** En caso de impacto con transmisión de la "señal de colisión" por el bus de datos, el sistema se bloquea de inmediato sin registrar ningún fallo explícito. (pág. 9)
- **Protección de componentes:** Al instalar una calefacción nueva o sustituir la unidad J364, puede activarse el bloqueo por protección de componentes, requiriendo la ejecución de un ciclo de autoadaptación en la localización guiada de averías. (págs. 3-4)

## Valores de referencia
- Código de dirección para equipo de diagnosis: 18 (Calefacción adicional/independiente). (pág. 8)

## Errores de concepto frecuentes
- Intentar realizar la diagnosis de la calefacción independiente utilizando los lectores de averías antiguos V.A.G 1551 o V.A.G 1552. (pág. 4)
- Esperar un código de avería específico tras un accidente con disparo de la señal de colisión, cuando el sistema realiza un bloqueo directo e incondicional. (pág. 9)

---

```yaml
tipo: procedimiento
titulo: Diagnosis de actuadores de la calefacción independiente
entidad: diagnosis-actuadores
area: climatizacion
sistema: calefaccion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "10-11"
relacionados: [bomba-recirculacion-liquido-refrigerante, bomba-dosificadora-v54, bujia-precalentamiento-q9]
palabras: [J364, V55, V6, Q9, V54, N279, Z66, prueba estática]
```

## Objeto y alcance
Comprobar secuencialmente la respuesta eléctrica y mecánica de los componentes activados por la unidad de control para calefacción adicional J364 (V55, V6, Q9, V54, G6, N279 y Z66). (págs. 10-11)

## Condiciones previas
- Tensión de la batería correcta y fusibles en buen estado. (pág. 7)
- Memoria de averías previamente consultada y subsanada. (pág. 10)
- Velocidad del vehículo no superior a 5 km/h. (pág. 6)
- Encendido conectado. (pág. 8)

## Equipo y material
- Sistema de información, medición y diagnóstico de vehículos (VAS 5051 o VAS 5052) con cable de diagnóstico VAS 5051/5A y pinza amperimétrica. (págs. 7, 11)

## Pasos
1. Conectar el equipo de diagnosis al conector de 16 polos con el encendido desconectado. (pág. 7)
2. Conectar el encendido y seleccionar la dirección "18 - Calefacción adicional/independiente". (págs. 8, 10)
3. Consultar y corregir las averías memorizadas. (pág. 10)
4. Seleccionar la función "Diagnosis de actuadores" e iniciar la prueba secuencial. (pág. 10)
5. Comprobar la bomba de recirculación V55 (activación y desactivación a ritmo de 5 segundos; verificar sonoridad). (pág. 11)
6. Comprobar la turbina de aire de combustión V6 (activación y desactivación a ritmo de 5 segundos; verificar sonoridad). (pág. 11)
7. Comprobar la bujía de precalentamiento Q9 (activación durante 5 segundos; medir corriente absorbida con pinza amperimétrica en el conector de alimentación). (pág. 11)
8. Comprobar la bomba dosificadora V54 (emisión de impulsos audibles durante 10 segundos; no se reactiva al repetir el test si no ha funcionado a plena carga previamente). (págs. 10-11)
9. Comprobar la bomba de preelevación de combustible G6 (verificar sonoridad de funcionamiento). (pág. 11)
10. Comprobar la válvula de cierre para líquido refrigerante N279 (excitación intermitente a 0,5 Hz; verificar chasquido audible). (pág. 11)
11. Comprobar el elemento calefactor de precalentamiento del combustible Z66 (medir consumo de corriente con pinza amperimétrica). (pág. 11)
12. Consultar nuevamente la memoria de averías al finalizar la secuencia. (pág. 11)

## Valores de referencia
- Consumo de corriente de la bujía Q9 en frío: hasta aprox. 20 A. (pág. 11)
- Frecuencia de excitación de la válvula N279: 0,5 Hz. (pág. 11)
- Consumo de corriente del elemento Z66: hasta aprox. 20 A. (pág. 11)
- Velocidad límite del vehículo para la prueba: < 5 km/h. (pág. 6)

## Verificación final
Asegurar que la memoria de averías de la unidad J364 permanezca limpia de registros tras completar la prueba de actuadores. (pág. 11)

## Seguridad y normativa
No realizar la prueba de actuadores con el vehículo en circulación a velocidades superiores a 5 km/h para evitar distracciones durante la marcha. (págs. 6, 10)

---

```yaml
tipo: procedimiento
titulo: Ajuste básico de la calefacción independiente
entidad: ajuste-basico-calefaccion-independiente
area: climatizacion
sistema: control-climatizacion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "12-18"
relacionados: [unidad-control-j364, mando-distancia-r64, bomba-dosificadora-v54]
palabras: [J364, grupo 004, grupo 011, grupo 022, grupo 033, grupo 066, llenado conducto]
```

## Objeto y alcance
Ejecutar las funciones de ajuste básico para la autoadaptación del mando a distancia por radiofrecuencia, pruebas de funcionamiento del calefactor y purga inicial del conducto de combustible. (págs. 12-18)

## Condiciones previas
- Encendido conectado. (pág. 12)
- Memoria de averías consultada y subsanada previamente. (pág. 12)
- Nivel de combustible suficiente en el depósito (indicador fuera de la franja roja). (pág. 13)

## Equipo y material
- Sistema de información, medición y diagnóstico de vehículos (VAS 5051 / VAS 5052) conectado al conector de 16 polos. (pág. 12)

## Pasos
1. Conectar el equipo de diagnosis e iniciar la función "18 - Calefacción adicional/independiente". (pág. 12)
2. Seleccionar la función "006 - Ajuste básico". (pág. 12)
3. **Autoadaptación del mando a distancia (Grupo 004):** Introducir el grupo "004". Al mostrar la pantalla "Autoadaptación", oprimir la tecla OFF en el mando a distancia por radiofrecuencia hasta confirmar la indicación "Autoadaptado". (pág. 16)
4. **Activación de prueba ordinaria (Grupo 011):** Introducir el grupo "011" para iniciar el arranque del calefactor; este se desactiva tras transcurrir el tiempo programado en la pantalla del MMI. (pág. 16)
5. **Activación de prueba a plena carga (Grupo 022):** Introducir el grupo "022" para operar el calefactor a plena carga fija durante un máximo de 10 minutos (pasa a continuación si el termosensor G18 alcanza ≥ 110 ºC). (pág. 17)
6. **Desactivación manual (Grupo 033):** Introducir el grupo "033" para interrumpir el funcionamiento del calefactor y de la bomba V54, activando la fase de marcha por inercia/enfriamiento. (pág. 17)
7. **Llenado del conducto de combustible (Grupo 066):** Desbloquear previamente la función poniendo a "1" el canal de adaptación 36; introducir el grupo "066" para activar la bomba dosificadora V54 durante el tiempo programado en el canal de adaptación 30. (págs. 17-18)
8. Esperar a la indicación de "Fin" y consultar la memoria de averías. (págs. 13, 18)

## Valores de referencia
- Tiempo de marcha por inercia/enfriamiento en grupo 033: entre 15 y 180 segundos. (pág. 17)
- Tiempo máximo de funcionamiento en grupo 022: 10 minutos. (pág. 17)
- Temperatura límite de seguridad en grupo 022: ≥ 110 ºC. (pág. 17)

## Verificación final
Comprobar que el sistema retorna al estado de reposo sin generar averías memorizadas tras finalizar el ajuste básico. (pág. 13)

## Seguridad y normativa
Si se produce un fallo durante la activación por ajuste básico, la calefacción solo se podrá volver a encender previa desactivación explícita mediante el grupo "033", evitando acumulaciones peligrosas de combustible no quemado en la cámara. (págs. 13, 91)

---

```yaml
tipo: procedimiento
titulo: Codificación de la unidad de control para calefacción adicional
entidad: codificacion-calefaccion-independiente
area: climatizacion
sistema: control-climatizacion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "21-25"
relacionados: [unidad-control-j364, interfaz-bus-j533, unidad-bateria-j367]
palabras: [J364, codificación larga, byte 0, sistema binario, hexadecimal, SVM]
```

## Objeto y alcance
Configurar la estructura de datos (codificación larga) de la unidad de control J364 según la variante del vehículo, el tipo de motorización y los componentes opcionales instalados. (págs. 21-25)

## Condiciones previas
- Calefacción independiente totalmente desactivada. (pág. 22)
- Memoria de averías consultada, corregida y borrada. (pág. 22)
- Encendido conectado. (pág. 22)

## Equipo y material
- Equipo de diagnosis VAS 5051 / VAS 5052 configurado con la gestión de versiones de software (SVM). (págs. 21-23)

## Pasos
1. Conectar el equipo de diagnosis al conector de 16 polos y seleccionar la dirección "18 - Calefacción adicional/independiente". (págs. 8, 22)
2. Seleccionar la función "07 - Codificar la unidad de control" (o función "008" según la versión del software). (págs. 6, 22)
3. Seleccionar la codificación guiada o gestionar el código largo mediante la muestra de bits/bytes. (págs. 21-22)
4. Configurar las opciones correspondientes al Byte 0:
   - Desactivación por subtensión (a través del bus de datos mediante J533/J367 o por valor fijo de adaptación). (págs. 22-23)
   - Presencia de bomba de recirculación V55. (pág. 24)
   - Presencia de válvula de cierre de líquido refrigerante N279. (pág. 24)
   - Tipo de motor y combustible (gasolina o diésel). (págs. 24-25)
   - Presencia de mando a distancia por radiofrecuencia R64. (pág. 25)
5. Confirmar y guardar la nueva codificación en la unidad J364. (pág. 22)
6. Finalizar la función y consultar la memoria de averías para verificar la ausencia de fallos de configuración. (págs. 20, 22)

## Valores de referencia
- Ejemplo de codificación larga típica (Audi A5 Coupé diésel con V55, N279 y mando a distancia): "\$5D 00 00". (pág. 22)

## Verificación final
Acceder al bloque de valores de medición (grupo de indicación "017", campo 3) para corroborar la recepción y validez del código largo en la unidad J364. (págs. 21, 50)

## Seguridad y normativa
Es imprescindible asegurar que el tipo de motor (gasolina o diésel) codificado en el Byte 0 coincida con el combustible real del vehículo, ya que la unidad de control aplica estrategias de combustión y tiempos de precalentamiento completamente incompatibles entre ambas variantes. (págs. 23, 44)

---

COBERTURA: documento «Audi A5 Coupé_2008_Calefacción independiente.pdf», páginas 1 a 25 de 149. queda pendiente desde la página 26