```yaml
tipo: fundamento
titulo: Normas de seguridad y prevención en trabajos con aire acondicionado
entidad: prl-y-seguridad
area: general
sistema: prl-y-seguridad
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "1-3"
relacionados: [refrigerante-r134a, circuito-frigorifico]
palabras: [seguridad, agente frigorífico, horno de secado, sobrepresión, enjuague]
```

## Objeto
Establecer las medidas de seguridad laboral y precauciones técnicas necesarias durante la manipulación del agente frigorífico, intervenciones en el circuito y trabajos en cabina de pintura. (págs. 1-3)

## Fundamento
El agente frigorífico se encuentra bajo presión en el circuito cerrado. El contacto directo o la exposición a altas temperaturas entrañan riesgos de congelación, explosión por sobrepresión o descomposición de la sustancia en gases nocivos. (págs. 1-3)

## Desarrollo
- **Contacto con refrigerante:** En caso de contacto accidental del agente frigorífico con los ojos u otras partes del cuerpo, lavar inmediatamente con abundante agua fría durante un mínimo de 15 minutos e informar al médico. (pág. 1)
- **Apertura e intervenciones en el circuito:** Vaciar el circuito frigorífico mediante una estación de reciclaje antes de aflojar racores o desmontar componentes. Prohibido realizar soldaduras o trabajos térmicos en piezas de la instalación que contengan refrigerante. (págs. 2-3)
- **Trabajos de pintura:** En cabinas o hornos de secado de pintura, la temperatura de los componentes del vehículo con el circuito cargado no debe superar bajo ningún concepto los 80 ºC para evitar sobrepresiones peligrosas que puedan hacer estallar la instalación. (pág. 3)

📷 IMAGEN: Advertencia de seguridad sobre el calentamiento excesivo en cabinas de pintura — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 3

## Valores de referencia
- Tiempo mínimo de enjuague con agua fría tras contacto: 15 minutos. (pág. 1)
- Temperatura máxima en hornos de secado de pintura con circuito lleno: 80 ºC. (pág. 3)

## Errores de concepto frecuentes
- Introducir un vehículo con el circuito frigorífico cargado en un horno de secado de pintura a temperaturas superiores a 80 ºC. (pág. 3)
- Intentar soldar o calentar tuberías del sistema de climatización sin haber evacuado previamente el agente frigorífico. (pág. 3)

---

```yaml
tipo: fundamento
titulo: Autodiagnosis y protección de componentes en la unidad Climatronic
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "4-11"
relacionados: [unidad-control-climatizador]
palabras: [J255, dirección 08, protección de componentes, memoria no volátil, averías esporádicas]
```

## Objeto
Explicar el funcionamiento del sistema de autodiagnosis, la gestión de memoria de averías y el mecanismo de protección de componentes en la unidad de control para Climatronic J255. (págs. 4-11)

## Fundamento
La unidad de control J255 supervisa continuamente los sensores y actuadores del sistema. Integra una memoria no volátil que registra las averías e incorpora un protocolo de seguridad antirrobo denominado protección de componentes. (págs. 4-7)

## Desarrollo
- **Dirección de diagnóstico:** El acceso al sistema mediante el equipo de diagnosis (VAS 5051/5052) se realiza a través del código de dirección "08 - Electrónica de climatización/calefacción". (pág. 8)
- **Memoria de averías:** Es de tipo no volátil (no pierde los datos al desconectar la batería). Clasifica los fallos en estáticos (permanentes) o esporádicos (/SP). Las averías esporádicas que no vuelven a reproducirse se borran automáticamente tras un periodo determinado. Junto a la avería se memorizan las condiciones de entorno (kilometraje, fecha, temperatura del motor, régimen y tensión). (págs. 5, 9)
- **Protección de componentes:** Al adaptar una unidad J255 a un vehículo, queda vinculada electrónicamente a él. Si se instala en otro vehículo sin desinmovilizar previa verificación, la protección de componentes inhibe las funciones de confort y solo mantiene operativas las funciones de seguridad. (págs. 4, 26)

📷 IMAGEN: Pantalla del equipo de diagnosis VAS 5051 con la selección del código de dirección 08 — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 9

## Valores de referencia
- Código de dirección del climatizador: 08 (Electrónica de climatización/calefacción). (pág. 8)

## Errores de concepto frecuentes
- Asumir que al desconectar la batería del vehículo se borra la memoria de averías del Climatronic J255. (pág. 5)
- Creer que una unidad de control J255 usada se puede intercambiar directamente entre dos vehículos sin desactivar la protección de componentes. (pág. 4)

---

```yaml
tipo: procedimiento
titulo: Diagnosis de actuadores del climatizador
entidad: diagnosis-actuadores
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "12-14"
relacionados: [unidad-control-climatizador, valvula-reguladora-compresor]
palabras: [actuadores, N280, J519, velocidad inferior 5 km/h, prueba estática]
```

## Objeto y alcance
Comprobar de forma secuencial la respuesta eléctrica y mecánica de los componentes activados por el climatizador (válvula reguladora N280, electroventiladores, luneta térmica). (págs. 12-14)

## Condiciones previas
- Tensión de la batería correcta y fusibles en buen estado. (pág. 8)
- Velocidad del vehículo inferior a 5 km/h. (pág. 12)
- Para comprobar la activación de la válvula reguladora para compresor N280: encendido conectado con el motor parado. (págs. 12-13)
- Para comprobar los electroventiladores del radiador (V7/V177) y luneta térmica (Z1): motor en marcha. (pág. 13)

## Equipo y material
- Sistema de información, diagnosis y medición para vehículos (VAS 5051, VAS 5052 o equivalente) con cable de diagnóstico de 16 polos. (págs. 8, 12)

## Pasos
1. Conectar el equipo de diagnosis al conector de 16 polos del vehículo con el encendido desconectado. (pág. 12)
2. Conectar el encendido (o arrancar el motor según el actuador a probar). (pág. 13)
3. Seleccionar la dirección "08 - Electrónica de climatización/calefacción". (pág. 13)
4. Consultar y registrar previamente la memoria de averías. (pág. 13)
5. Abrir los difusores de aire del tablero de instrumentos. (pág. 13)
6. Seleccionar la función "03 - Diagnosis de actuadores" y avanzar secuencialmente verificando la activación de cada componente. (págs. 12-14)
7. Al finalizar, consultar y borrar la memoria de averías acumulada durante la prueba. (pág. 14)

## Valores de referencia
- Velocidad máxima permitida para ejecutar la prueba: < 5 km/h. (pág. 12)

## Verificación final
Comprobar que no quedan averías estáticas almacenadas en la unidad de control J255 ni en la unidad de red de a bordo J519 tras completar el ciclo. (pág. 14)

## Seguridad y normativa
No realizar la diagnosis de actuadores con el vehículo en circulación por encima de 5 km/h para evitar distracciones o comportamientos anómalos de las trampillas y ventiladores. (págs. 7, 12)

---

```yaml
tipo: procedimiento
titulo: Ajuste básico de los componentes del climatizador
entidad: ajuste-basico-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "15-25"
relacionados: [unidad-control-climatizador, servomotor-trampilla, compresor]
palabras: [ajuste básico, grupo 001, grupo 003, grupo 004, LIN-Bus, topes finales]
```

## Objeto y alcance
Aprender y memorizar las posiciones límite de las trampillas motorizadas, inicializar la asignación de direcciones por bus LIN y ejecutar el rodaje inicial del compresor. (págs. 15-25)

## Condiciones previas
- Para ajuste básico de servomotores (grupo 001 y 004): encendido conectado y motor parado. (pág. 15)
- Para rodaje inicial del compresor (grupo 003): haber completado con éxito el grupo 001, motor en marcha al ralentí y difusores del tablero abiertos. (págs. 20, 22)

## Equipo y material
- Equipo de diagnosis VAS 5051 / VAS 5052 con cable adaptador de 16 polos. (pág. 15)

## Pasos
1. Conectar el equipo de diagnosis e iniciar el sistema con la dirección "08 - Electrónica de climatización". (pág. 15)
2. Consultar la memoria de averías y subsanar los fallos existentes. (pág. 15)
3. Seleccionar la función "04 - Ajuste básico". (pág. 15)
4. En caso de haber sustituido un servomotor, introducir el grupo de indicación "004" para autoadaptar la dirección electrónica del servomotor en la serie LIN-Bus. (págs. 23-24)
5. Introducir el grupo de indicación "001" para recorrer y memorizar los topes mecánicos de todas las trampillas (parpadea el testigo AC o la pantalla durante el proceso). Esperar a la confirmación de finalizado. (págs. 17-18)
6. Para un nuevo panel J255 o tras reparar el circuito, arrancar el motor e introducir el grupo "003" para el rodaje del compresor; dejar funcionar durante 5 minutos continuos sin apagar el motor. (págs. 21-22)
7. Consultar y borrar la memoria de averías al término del ajuste. (pág. 25)

## Valores de referencia
- Tiempo de ejecución grupo 001: 1 a 2 minutos. (pág. 16)
- Tiempo de ejecución grupo 003 (rodaje compresor): aprox. 5 minutos continuos. (pág. 22)
- Margen de valores autoadaptados para topes finales: 10000 para tope inferior, entre 11000 y 20000 para tope superior. (pág. 45)

## Verificación final
Asegurar que el testigo de la tecla AC deja de parpadear y que la avería "Especificación de rodaje" queda eliminada automáticamente de la memoria. (págs. 17, 22)

## Seguridad y normativa
Mantener las manos alejadas de los mecanismos articulados de las trampillas bajo el tablero durante la ejecución del grupo 001, ya que los motores realizan recorridos de tope a tope de forma automática. (pág. 17)

COBERTURA: documento «Audi A5 Coupé_2008_aire acondicionado.pdf», páginas 1 a 25 de 414. queda pendiente desde la página 26