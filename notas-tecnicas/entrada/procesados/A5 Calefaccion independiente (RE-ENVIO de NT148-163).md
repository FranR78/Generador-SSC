### **NOTA DE PROCESO — AUTODIAGNÓSTICO Y MEMORIA DE AVERÍAS DE LA CALEFACCIÓN INDEPENDIENTE / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento de consulta, análisis de condiciones de entorno y borrado de la memoria de averías del sistema de calefacción independiente. Se aplica para la localización de fallos y comprobación electrónica en el taller.  
📷 IMAGEN: Conexión del equipo de diagnosis VAS 5051/5A al conector de diagnóstico de 16 polos del vehículo — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 8

**2. FUNDAMENTO**  
La unidad de control para calefacción adicional J364 supervisa continuamente el estado de sensores y actuadores. Las averías se registran como estáticas si se mantienen durante un tiempo determinado; si la condición desaparece, conmutan a esporádicas (/SP) y se borran automáticamente tras un período prefijado sin reproducirse. La memoria de averías es de tipo permanente no volátil y no depende de la alimentación de tensión. Si el vehículo transmite una señal de colisión por impacto en un accidente, la calefacción se bloquea de inmediato sin grabar un código de avería explícito en el registro.

**3. CONDICIONES PREVIAS**  
- Tensión de alimentación de la batería de servicio correcta.  
- Todos los fusibles del sistema en perfecto estado según el esquema eléctrico.  
- Encendido conectado ("borne 15 ON") para activar la interfaz de diagnosis J533.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis homologado (VAS 5051, VAS 5052 o equivalente).  
- Cable de diagnóstico con conector de 16 polos -VAS 5051/5A-.  
- No es posible realizar la autodiagnosis con los lectores antiguos V.A.G 1551 o V.A.G 1552.

**5. DESARROLLO**  
1. Con el encendido desconectado, conectar el equipo de diagnosis al conector de 16 polos del vehículo.  
2. Conectar el encendido ("borne 15 ON").  
3. Seleccionar la función "Autodiagnosis del vehículo" e introducir el código de dirección "18 - Calefacción adicional/independiente".  
4. Seleccionar la función "02 - Consultar la memoria de averías".  
5. Analizar el código de avería, la clase de fallo y las condiciones de entorno memorizadas (kilometraje, hora, fecha, temperatura del motor, tensión de servicio, régimen).  
6. Subsanar la avería física identificada.  
7. Seleccionar la función "05 - Borrar la memoria de averías"; en caso de bloqueo persistente del calefactor, realizar previamente el desbloqueo en el canal de adaptación "42".  
8. Finalizar la emisión seleccionando la función "06 - Finalizar la emisión".

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Tensión de batería** | Suficientemente cargada | Encendido conectado ("borne 15 ON") |
| **Velocidad del vehículo** | 0 km/h (vehículo parado) | Prueba de autodiagnosis en taller |
| **Estado de la memoria** | 0 averías memorizadas | Tras subsanar fallos y ejecutar borrado |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar borrar la memoria habiendo desconectado el encendido entre la consulta y el borrado: la UCE muestra el mensaje "Memoria de averías aún sin consultar" e impide el borrado.  
- Ignorar el bloqueo por señal de colisión: en caso de colisión el sistema se bloquea sin inscribir un motivo adicional en la memoria de averías.

**8. VERIFICACIÓN FINAL**  
Confirmar la indicación "Memoria de averías borrada" en la pantalla del equipo de diagnosis y verificar que no se reproduzcan códigos al realizar un ciclo de funcionamiento.

**9. SEGURIDAD Y NORMATIVA**  
Fijar siempre los equipos de comprobación con un cinturón de seguridad sobre el asiento trasero durante recorridos de prueba, requiriéndose la presencia de una segunda persona para su manejo.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA CALEFACCIÓN ADICIONAL**
CÓDIGO: J364  
UBICACIÓN: Montada directamente sobre el propio cuerpo del calefactor de la calefacción independiente.  
APLICACIÓN: Gestión electrónica integral del sistema de calefacción independiente y adicional del Audi A5 Coupé 2008.

**1. MISIÓN**  
Procesar las señales de los sensores, gestionar la lógica de regulación de potencia (plena carga, carga parcial, pausa de regulación) y gobernar los actuadores del sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo electrónico microprocesado provisto de memoria de averías permanente. Se comunica con el cuadro de instrumentos, la UCE del Climatronic J255, la gestión de energía J644 y el equipo de diagnosis a través del bus CAN (interfaz J533). Regula dinámicamente la frecuencia de impulsos de la bomba dosificadora V54 y la tensión de la turbina V6 para garantizar una combustión estequiométrica. Incorpora la función de protección de componentes.

**3. CARACTERÍSTICAS**  
- Conectores externos de 2 polos (alimentación) y 6 polos (bus CAN y actuadores externos), y conector interno de 14 polos hacia los sensores del calefactor.  
- Existen versiones diferenciadas para motorizaciones de gasolina y diésel, no intercambiables entre sí.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez / Medición |
|---|---|---|
| **Tensión de alimentación** | Tensión de batería en voltios | Borne 30 (bloque de medición 001, campo 1) |
| **Temperatura máxima en tarjeta** | < 130 ºC | Bloque de medición 023, campos 1 y 2 |
| **Estado del sensor interno** | "OK" | Bloque de medición 023, campo 3 |
| **Frecuencia de control para V54** | 0 Hz a 8 Hz | Según demanda de carga térmica |

**5. ANOMALÍAS FRECUENTES**  
- Bloqueo de seguridad tras acumular 3 intentos fallidos de arranque consecutivos con su correspondiente repetición.  
- Sobretemperatura en la placa electrónica por encima de 130 ºC por falta de circulación de líquido refrigerante.  
- Activación de la protección de componentes tras la sustitución de la unidad.

**6. COMPORTAMIENTO EN AVERÍA**  
El calefactor suspende el proceso de arranque o pasa inmediatamente al ciclo de post-marcha. La UCE desactiva el funcionamiento y transmite la prohibición de arranque al MMI y al cuadro de instrumentos.

**7. CÓMO COMPROBARLO**  
Consultar la memoria de averías. Verificar en el bloque de medición 017 el código de configuración y en el bloque 023 la temperatura interna de la tarjeta (campo 1) y el estado de la sonda interna (campo 3 = "OK"). Desbloquear en caso necesario mediante el canal de adaptación "42".

---

### **NOTA DE PROCESO — DIAGNÓSTICO DE ACTUADORES EN LA CALEFACCIÓN INDEPENDIENTE / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Describir la secuencia de excitación individual e intermitente de los componentes eléctricos de la calefacción independiente. Se aplica para verificar la respuesta mecánica y eléctrica de los actuadores sin necesidad de iniciar la combustión.  
📷 IMAGEN: Esquema del conector de 14 polos de la unidad de control J364 para la verificación de componentes — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 65

**2. FUNDAMENTO**  
La UCE J364 excita secuencialmente cada salida eléctrica durante un tiempo determinado. Las anomalías de funcionamiento detectadas en los actuadores durante la prueba quedan registradas en la memoria de averías.

**3. CONDICIONES PREVIAS**  
- Velocidad del vehículo inferior a 5 km/h (prueba realizable con vehículo parado).  
- Encendido conectado ("borne 15 ON").  
- Memoria de averías consultada y subsanada previamente.  
- Para que la bomba dosificadora V54 vuelva a activarse en este test, el calefactor debe haber funcionado al menos una vez a plena carga desde la última prueba.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis (VAS 5051 / VAS 5052).  
- Pinza amperimétrica de 50 A (-VAS 5051/9-).

**5. DESARROLLO**  
1. Iniciar la "Localización guiada de averías" en el equipo de diagnosis y seleccionar "Diagnosis de actuadores" en el sistema 18.  
2. Iniciar la prueba y verificar la respuesta de los componentes en la siguiente secuencia:  
   - **Bomba de recirculación V55:** Se activa y desactiva a ritmo de 5 segundos (sonoridad de giro audible).  
   - **Turbina de aire de combustión V6:** Se activa y desactiva a ritmo de 5 segundos (sonoridad de giro audible).  
   - **Bujía de precalentamiento Q9:** Se activa durante 5 segundos (absorción de corriente de hasta aprox. 20 A en frío, comprobable con pinza amperimétrica en el conector de alimentación).  
   - **Bomba dosificadora V54:** Emite impulsos audibles durante aprox. 10 segundos (no se vuelve a excitar si se repite la prueba seguidamente).  
   - **Bomba de preelevación de combustible G6:** Sonoridad de funcionamiento audible en el depósito de combustible.  
   - **Válvula de cierre para líquido refrigerante N279:** Excitación intermitente a 0,5 Hz (sonoridad de conmutación audible).  
   - **Elemento calefactor de combustible Z66:** Absorción de corriente de hasta aprox. 20 A (comprobable con pinza amperimétrica).  
3. Consultar obligatoriamente la memoria de averías tras finalizar el diagnóstico de actuadores.

**6. VALORES DE REFERENCIA**  

| Actuador | Señal de excitación / Consumo | Criterio de verificación |
|---|---|---|
| **Bomba de recirculación V55** | Intermitencia a 5 s | Sonoridad de giro audible |
| **Turbina de aire V6** | Intermitencia a 5 s | Sonoridad de giro audible |
| **Bujía de precalentamiento Q9** | Hasta ~20 A en frío (5 s) | Medición con pinza amperimétrica |
| **Bomba dosificadora V54** | Impulsos durante ~10 s | Impulsos audibles característicos |
| **Válvula de cierre N279** | Conmutación a 0,5 Hz | Intermitencia de conmutación audible |
| **Elemento calefactor Z66** | Hasta ~20 A | Medición con pinza amperimétrica |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar repetir la prueba de V54 de forma consecutiva sin haber hecho funcionar el calefactor a plena carga: la UCE bloquea la reexcitación para evitar inundar la cámara de combustión.  
- No consultar la memoria de averías al concluir el test de actuadores.

**8. VERIFICACIÓN FINAL**  
Comprobar que no hayan quedado registradas averías en la memoria como consecuencia de las desconexiones o pruebas realizadas durante el test.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — AJUSTE BÁSICO Y ADAPTACIÓN EN LA CALEFACCIÓN INDEPENDIENTE / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer las secuencias operativas para ejecutar el llenado de la tubería de combustible, sincronizar mandos a distancia por radiofrecuencia, forzar modos de prueba y anular el bloqueo de la UCE J364.

**2. FUNDAMENTO**  
La función de Ajuste Básico fuerza a la UCE a ejecutar rutinas de servicio prefijadas (arranque de prueba, llenado de tubería, autoadaptación del mando). La función de Adaptación permite modificar parámetros operativos almacenados en canales no volátiles de la memoria EEPROM.

**3. CONDICIONES PREVIAS**  
- Encendido conectado y motor parado.  
- Memoria de averías consultada y subsanada previamente.  
- Tensión de batería correcta y nivel de combustible en depósito fuera de la reserva (fuera de la franja roja).

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis (VAS 5051 / VAS 5052).

**5. DESARROLLO**  
- **Autoadaptación del mando a distancia R64 (Ajuste Básico - Grupo 004):**  
  1. En autodiagnosis, seleccionar función "006 - Ajuste básico" e introducir el grupo "004".  
  2. En pantalla se muestra 'Autoadaptación'.  
  3. Mantener pulsada la tecla OFF del mando a distancia por radiofrecuencia durante al menos 3 segundos.  
  4. Confirmar la indicación 'Autoadaptado' en el display del equipo de diagnosis.  
- **Activación de prueba del calefactor (Ajuste Básico - Grupos 011 / 022 / 033):**  
  - *Grupo 011:* Inicia el arranque del calefactor respetando el tiempo programado en el MMI.  
  - *Grupo 022:* Fuerza el funcionamiento del calefactor a plena carga continua hasta alcanzar 110 ºC o un máximo de 10 minutos (permite arranque desde la pausa de regulación).  
  - *Grupo 033:* Fuerza la desactivación del calefactor y pasa al ciclo de post-marcha (duración de 15 a 180 segundos).  
- **Llenado de la tubería de combustible (Ajuste Básico - Grupo 066):**  
  1. Seleccionar función "12 - Adaptación" e ingresar al canal "30". Introducir el tiempo de excitación deseado en segundos (ej. "3" o "30") y guardar.  
  2. Acceder al canal de adaptación "36", introducir el valor "1" y guardar (anula el bloqueo de primer llenado).  
  3. Seleccionar función "006 - Ajuste básico", introducir el grupo "066" y pulsar 'Activar'. La bomba V54 funcionará a 8 Hz durante el tiempo programado.  
- **Desbloqueo de la unidad de control J364 (Adaptación - Canal 42):**  
  1. Acceder a la función "12 - Adaptación", canal "42".  
  2. Cambiar el valor de "0" a "1" y guardar. El valor retorna automáticamente a "0" y el bloqueo queda anulado.

**6. VALORES DE REFERENCIA**  

| Canal / Grupo | Valor de ajuste | Función / Resultado esperado |
|---|---|---|
| **Canal de adaptación 03** | 0 ó 1 | 0 = Funciona tras "borne 15 OFF"; 1 = Desconecta con "borne 15 OFF" |
| **Canal de adaptación 30** | Tiempo en seg (3 a 240 s) | Programa la duración de excitación de V54 en grupo 066 |
| **Canal de adaptación 36** | 1 | Anula el bloqueo de la función de primer llenado |
| **Canal de adaptación 42** | 1 | Anula el bloqueo de la unidad de control J364 |
| **Ajuste básico grupo 066** | Frecuencia fija de 8 Hz | Excitación de la bomba V54 para llenado de tubería |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Aparición del mensaje "Función desconocida o no se puede ejecutar": Ocurre si el calefactor está en ciclo de post-marcha, si el nivel de combustible está en reserva o si existe una avería no borrada en memoria.  
- Activar repetidamente el llenado de la tubería sin combustión intermedia: provoca acumulación masiva de combustible en la cámara, generando emisiones de humo denso en encendidos posteriores.

**8. VERIFICACIÓN FINAL**  
Confirmar la indicación "Fin" o "Autoadaptado" en la pantalla del equipo de diagnosis y consultar la memoria de averías.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CODIFICACIÓN DE LA UNIDAD DE CONTROL J364 / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Explicar la estructura de la codificación larga por bytes de la UCE J364 y su procedimiento de programación. Se aplica al reemplazar el calefactor o la unidad de control.

**2. FUNDAMENTO**  
La codificación configura el software de la UCE J364 en función de las características del vehículo (tipo de motor/combustible, presencia de bomba V55, válvula N279, mando por radiofrecuencia y mercado). La codificación se expresa como "Codificación larga" en sistema hexadecimal.

**3. CONDICIONES PREVIAS**  
- Memoria de averías consultada, subsanada y borrada.  
- Calefacción independiente desactivada.  
- Encendido conectado ("borne 15 ON").

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis (VAS 5051 / VAS 5052).

**5. DESARROLLO**  
1. Seleccionar la dirección "18 - Calefacción adicional/independiente".  
2. Seleccionar la función "07 - Codificar la unidad de control".  
3. Analizar la estructura del código por bytes (ejemplo de codificación larga para Audi A5 Coupé 2.0 TDI diésel con V55, N279 y mando R64: **5D 00 00**).  
4. Estructura del Byte 0:  
   - *Desactivación por subtensión:* Vía bus CAN (J533/J367) o valor fijo programado en adaptación.  
   - *Bomba de recirculación V55:* 0 = No montada / 1 = Montada.  
   - *Válvula de cierre N279:* 0 = No montada / 1 = Montada.  
   - *Tipo de motor / combustible:* 0 = Motor de gasolina / 1 = Motor diésel.  
   - *Mando a distancia R64:* 0 = No montado / 1 = Montado.  
   - *Versión de país:* 0 = Resto del mundo (excepto EEUU) / 1 = Versión para EEUU.  
5. Confirmar y guardar la codificación.

**6. VALORES DE REFERENCIA**  

| Parámetro | Código / Valor de ejemplo | Explicación de la versión |
|---|---|---|
| **Codificación Larga** | 5D 00 00 | Alemania/RdW, Diésel, V55 montada, N279 montada, Mando R64 |
| **Byte 0 - Tipo de motor** | Bit correspondiente | 0 = Gasolina / 1 = Diésel |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Codificar de forma incorrecta el tipo de combustible: una UCE configurada para diésel no funcionará correctamente si se monta en un vehículo de gasolina y registrará discrepancia en el grupo de medida 012.

**8. VERIFICACIÓN FINAL**  
Verificar en el bloque de valores de medición (grupo de indicación 017, campo 3) que la codificación memorizada se corresponde con el equipamiento real del vehículo.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — BUJÍA DE PRECALENTAMIENTO PARA CALEFACCIÓN**
CÓDIGO: Q9  
UBICACIÓN: Montada en el suplemento del quemador, en el interior de la cámara de combustión del calefactor.  
APLICACIÓN: Inflamación de la mezcla y vigilancia de la llama en la calefacción independiente.

**1. MISIÓN**  
Inflamar la mezcla de aire y combustible durante el ciclo de arranque y actuar como sensor de control de llama mediante la variación de su resistencia en caliente.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Espiga de incandescencia eléctrica. La UCE J364 le aplica una tensión regulada de aprox. 8 V durante el inicio del arranque. Una vez formada la llama, la UCE interrumpe la corriente de caldeo y mide la resistencia del filamento para confirmar la combustión.

**3. CARACTERÍSTICAS**  
Espiga incandescente metálica conectada a las celdas 3 (marrón) y 6 (blanco) del conector de 14 polos del calefactor.  
📷 IMAGEN: Desmontaje de la bujía Q9 y medición de resistencia con multímetro — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 65

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión aplicada en arranque** | Aprox. 8 V | Durante la fase de encendido |
| **Resistencia eléctrica nominal** | 0,42 a 0,63 Ω | A 20 +/-2 ºC |
| **Resistencia máxima en comprobación** | Inferior a 1 Ω | Medición en taller |
| **Absorción de corriente** | 9 a 20 A | Aplicando tensión de 9 V CC |

**5. ANOMALÍAS FRECUENTES**  
Incrustación de sedimentos de carbono o coquización en la cámara por uso de combustibles PME/RME; cortocircuito o rotura por sobrecalentamiento de los cables de alimentación.

**6. COMPORTAMIENTO EN AVERÍA**  
El calefactor suspende la puesta en marcha, realiza un barrido de la cámara con la turbina V6 e intenta un re-arranque. Si no se forma llama o la resistencia permanece fuera de rango, el sistema se bloquea tras 3 intentos.

**7. CÓMO COMPROBARLO**  
Limpiar cuidadosamente la espiga incandescente con un cepillo de latón. Medir la resistencia eléctrica entre los contactos 3 y 6 del conector (valor nominal 0,42 a 0,63 Ω a 20 ºC) y verificar que no exista derivación a masa contra la carcasa (resistencia infinita). Verificar la absorción de corriente de 9 a 20 A aplicando 9 V CC.

---

### **NOTA DE ELEMENTO — TURBINA DE AIRE DE COMBUSTIÓN**
CÓDIGO: V6  
UBICACIÓN: Montada en la carcasa superior de la camisa de agua del calefactor.  
APLICACIÓN: Suministro de aire comburente en la calefacción independiente.

**1. MISIÓN**  
Aspirar aire del exterior a través del silenciador de aspiración e introducirlo en la cámara de combustión para lograr la mezcla estequiométrica y efectuar el barrido de gases quemados.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motor eléctrico de corriente continua de excitación regulada en tensión (de 0 V a 12 V) por la UCE J364. Ajusta su régimen de giro según la fase de trabajo (arranque, plena carga, carga parcial y ciclo de post-marcha).

**3. CARACTERÍSTICAS**  
Soplante centrífugo integrado conectado a las celdas 13 (negro) y 14 (marrón) del conector de 14 polos.

**4. VALORES DE TRABAJO**  

| Parámetro / Fase | Valor numérico | Condiciones de trabajo |
|---|---|---|
| **Tensión en arranque** | 4 V a 9 V | Rampa de encendido |
| **Tensión en plena carga / post-marcha** | Aprox. 12 V | Plena carga / ciclo de enfriamiento |
| **Tensión en carga parcial** | Aprox. 5 V a 6 V | Carga parcial (diésel / gasolina) |
| **Absorción de corriente continua** | 2 a 3 A | Aplicando tensión de 12 V CC |
| **Resistencia interna del bobinado** | 3 a 6 Ω (hasta 40 Ω tras inactividad) | Medido entre celda 13 y carcasa |

**5. ANOMALÍAS FRECUENTES**  
Agarrotamiento del rodete por suciedad o embozamiento en el silenciador de aspiración; interrupción del bobinado.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de realizar el barrido previo de la cámara de combustión; la UCE cancela la secuencia de arranque e inscribe la avería en memoria.

**7. CÓMO COMPROBARLO**  
Medir la resistencia entre la celda 13 y la carcasa del calefactor (valor nominal entre 3 y 6 Ω). Aplicar 12 V CC directamente al motor y verificar con multímetro/pinza una intensidad absorbida de 2 a 3 A.

---

### **NOTA DE ELEMENTO — GUARDALLAMAS**
CÓDIGO: G64  
UBICACIÓN: Insertado en el interior de la cámara de combustión del calefactor.  
APLICACIÓN: Monitorización y supervisión térmica de la llama en la calefacción independiente.

**1. MISIÓN**  
Detectar la presencia o ausencia de llama en la cámara de combustión e informar a la UCE J364 para confirmar el arranque o detectar extinciones.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor térmico foto-resistivo o termistor de resistencia variable en función de la temperatura radiada por la llama de la combustión. La UCE evalúa su resistencia según una curva característica interna.

**3. CARACTERÍSTICAS**  
Sonda térmica provista de una junta de grafito especial para estanqueidad. Cableado de color marrón conectado a las celdas 1 y 2 del conector de 14 polos.  
📷 IMAGEN: Montaje del guardallamas G64 con la junta de grafito en la ranura — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 141

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Rango de resistencia operativo normal** | 780 Ω a 3040 Ω | Temperatura de trabajo con llama |
| **Umbral de interrupción (avería)** | > 3040 Ω | Resistencia superior al límite |
| **Umbral de cortocircuito (avería)** | < 780 Ω | Resistencia inferior al límite |
| **Indicación en bloque 005 campo 1** | "detectada" / "no detectada" | Según presencia de llama |

**5. ANOMALÍAS FRECUENTES**  
Incrustación de hollín o sedimentos en la cabeza de la sonda por combustión deficiente; deterioro o mala posición de la junta de grafito; deformación térmica.

**6. COMPORTAMIENTO EN AVERÍA**  
Si la resistencia se encuentra fuera de rango durante el arranque, la UCE realiza un único intento de repetición; si el fallo persiste, desactiva la bomba dosificadora e inscribe la avería "Interrupción de la llama".

**7. CÓMO COMPROBARLO**  
Retirar la carcasa del conector y medir la resistencia entre las celdas 1 y 2 (cables marrones) a la temperatura momentánea (debe situarse entre 780 Ω y 3040 Ω). Al montar, verificar que el lado sin rebarbas de la junta de grafito apunte hacia el collar del sensor.

---

### **NOTA DE ELEMENTO — TERMOSENSOR**
CÓDIGO: G18  
UBICACIÓN: Alojado en la camisa de agua del calefactor.  
APLICACIÓN: Medición de la temperatura del líquido refrigerante para la regulación de potencia del calefactor.

**1. MISIÓN**  
Medir la temperatura del refrigerante a la salida del calefactor para gestionar la conmutación entre plena carga, carga parcial y pausa de regulación.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Termistor de Coeficiente de Temperatura Negativo (NTC) de inmersión. Su variación de resistencia es transmitida a las celdas 10 y 11 de la UCE J364.

**3. CARACTERÍSTICAS**  
Sensor de inmersión con junta tórica de sellado, fijado mediante presilla/estribo de sujeción. Cables negros conectados a las celdas 10 y 11 del conector de 14 polos.  
📷 IMAGEN: Curva característica de resistencia NTC del termosensor G18 según la temperatura — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 67

**4. VALORES DE TRABAJO**  

| Parámetro / Umbral | Valor numérico | Función / Estado de regulación |
|---|---|---|
| **Cambio a Carga Parcial** | 77 ºC | Temperatura de refrigerante en aumento |
| **Cambio a Plena Carga** | < 60 ºC | Temperatura de refrigerante en descenso |
| **Entrada a Pausa de Regulación** | 89 ºC | Temperatura de refrigerante en aumento |
| **Salida de Pausa de Regulación** | < 65 ºC | Temperatura de refrigerante en descenso |
| **Desconexión por sobretemperatura** | >= 110 ºC | Pasa de inmediato a estado OFF |
| **Umbrales de avería eléctrica** | Interrupción > 2 MΩ / Cortocircuito < 50 Ω | Muestra "fallo" en bloque 002 campo 1 |

**5. ANOMALÍAS FRECUENTES**  
Fugas de refrigerante por degradación del anillo toroidal; descalibración por envejecimiento térmico; interrupción o cortocircuito.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE muestra la indicación "fallo" en el bloque de medición 002 (campo 1) y desactiva inmediatamente el calefactor para evitar la ebullición del agua.

**7. CÓMO COMPROBARLO**  
Medir la resistencia entre las celdas 10 y 11 (cables negros) en el conector de 14 polos y cotejar con la gráfica NTC. Sustituir siempre el anillo toroidal y humedecerlo con refrigerante durante el montaje.

---

### **NOTA DE ELEMENTO — TERMOSENSOR 2 PARA CALEFACTOR Y CALEFACCIÓN INDEPENDIENTE**
CÓDIGO: G587  
UBICACIÓN: Alojado sobre el cuerpo del intercambiador de calor / camisa de agua del calefactor.  
APLICACIÓN: Sensor de protección redundante contra sobrecalentamiento excesivo.

**1. MISIÓN**  
Supervisar la temperatura de la masa metálica del intercambiador de calor para proteger el grupo calefactor contra daños térmicos por falta de circulación de agua.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Termistor NTC de contacto térmico directo. Su lectura de resistencia es evaluada por la UCE J364 en paralelo con la del sensor G18.

**3. CARACTERÍSTICAS**  
Sensor de contacto provisto de estribo de sujeción. Cables de color blanco conectados a las celdas 7 y 8 del conector de 14 polos.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Límite crítico de sobrecalentamiento** | > 130 ºC | Incrementa el cuentaciclos en bloque 012 campo 3 |
| **Umbrales de avería eléctrica** | Interrupción > 2 MΩ / Cortocircuito < 50 Ω | Muestra "fallo" en bloque 002 campo 3 |

**5. ANOMALÍAS FRECUENTES**  
Deformación del estribo de sujeción provocando falso contacto térmico; fallo interno del termistor.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE desactiva el calefactor, registra el código DTC e incrementa el contador de sobrecalentamiento en caso de haber superado los 130 ºC.

**7. CÓMO COMPROBARLO**  
Medir la resistencia entre las celdas 7 y 8 (cables blancos) en el conector de 14 polos y comparar con la curva característica NTC.

---

### **NOTA DE ELEMENTO — ELEMENTO CALEFACTOR PARA PRECALENTAMIENTO DEL COMBUSTIBLE**
CÓDIGO: Z66  
UBICACIÓN: Montado junto al evaporador de combustible en el suplemento del quemador.  
APLICACIÓN: Acondicionamiento térmico del combustible para facilitar la evaporación en arranques en frío.

**1. MISIÓN**  
Calentar el combustible antes de penetrar al fieltro evaporador para asegurar una rápida gasificación e inflamación durante el arranque.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia de caldeo eléctrica. La UCE J364 le aplica tensión durante los primeros segundos del ciclo de arranque.

**3. CARACTERÍSTICAS**  
Módulo térmico fijado mediante un seguro elástico Seeger. Cables de color negro conectados a las celdas 9 y 12 del conector de 14 polos.  
📷 IMAGEN: Seguro elástico Seeger y fijación del elemento Z66 en el evaporador de combustible — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 143

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Resistencia eléctrica nominal** | 0,79 a 0,97 Ω | A 23 +/-5 ºC |
| **Absorción de corriente** | Hasta aprox. 20 A | Durante excitación en test de actuadores |

**5. ANOMALÍAS FRECUENTES**  
Deterioro del aislamiento o huellas de sobrecalentamiento en los cables de alimentación (riesgo de cortocircuito).

**6. COMPORTAMIENTO EN AVERÍA**  
Dificultades o fallos en la formación de la llama durante arranques a bajas temperaturas ambientales.

**7. CÓMO COMPROBARLO**  
Inspeccionar visualmente que los cables no presenten daños ni sobrecalentamiento. Medir la resistencia entre las celdas 9 y 12 (cables negros) obteniendo entre 0,79 y 0,97 Ω a 23 ºC.

---

### **NOTA DE PROCESO — SECUENCIA DE FUNCIONAMIENTO Y CICLOS DE CALEFACCIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Describir los estados operativos (arranque, plena carga, carga parcial, pausa de regulación y desactivación) del sistema de calefacción independiente. Se aplica para comprender la lógica de control del calefactor.

**2. FUNDAMENTO**  
La UCE J364 coordina el suministro de combustible (V54), el caudal de aire comburente (V6), el encendido (Q9), la circulación de agua (V55) y la conmutación de circuito (N279) para mantener la temperatura del refrigerante dentro de los márgenes teóricos requeridos por el climatizador.

**3. CONDICIONES PREVIAS**  
- Circuito de líquido refrigerante purgado.  
- Depósito de combustible fuera de la reserva e indicador fuera de la franja roja.  
- Batería con carga suficiente y ausencia de averías memorizadas.

**4. EQUIPO Y MATERIAL**  
- Sistema de diagnosis VAS 5051 / VAS 5052 (para monitorización en bloque de valores de medición).

**5. DESARROLLO**  
1. **Inicio de Arranque:** Chequeo interno de componentes y tensiones. Excitación de la bomba V55 y de la válvula N279.  
2. **Encendido Bujía Q9:** Aplicación de ~8 V a la bujía Q9 y pre-arranque de la turbina V6.  
3. **Preelevación de Combustible:** Activación de la bomba dosificadora V54 (~4 Hz) y regulación del flujo de aire en V6.  
4. **Formación de Llama:** Transición a plena carga, desactivación de la bujía Q9 y confirmación de la combustión mediante el guardallamas G64 (resistencia dentro del margen 780-3040 Ω).  
5. **Modo Plena Carga (100% / 5 kW):** V6 alimentada a ~12 V y V54 a ~8 Hz hasta que la temperatura del refrigerante alcanza los 77 ºC.  
6. **Modo Carga Parcial (50% / 2,5 kW):** Al alcanzar los 77 ºC, V6 reduce su tensión a ~5-6 V y V54 disminuye su frecuencia a ~4 Hz (diésel) o ~2 Hz (gasolina).  
7. **Pausa de Regulación:** Si el refrigerante alcanza los 89 ºC, se cortan V54, Q9 y V6 (0 V / 0 Hz). El calefactor re-arranca automáticamente cuando la temperatura desciende por debajo de los 65 ºC.  
8. **Desactivación / Post-marcha:** Al recibir la orden de apagado, V54 se corta (0 Hz), V6 sopla a 12 V durante 20 a 120 segundos para barrer los gases y enfriar el cuerpo, y Q9 realiza un postcalentamiento regulado (en motores diésel).

**6. VALORES DE REFERENCIA**  

| Fase de Trabajo | Temp. Refrigerante | V6 (Tensión) | V54 (Frecuencia) |
|---|---|---|---|
| **Plena Carga (5 kW)** | < 77 ºC | Aprox. 12 V | Aprox. 8 Hz |
| **Carga Parcial (2,5 kW)** | 77 ºC a 89 ºC | Aprox. 5 V - 6 V | Aprox. 4 Hz (diésel) / 2 Hz (gasolina) |
| **Pausa de Regulación** | >= 89 ºC (re-arranque < 65 ºC) | 0 V | 0 Hz |
| **Post-marcha (Enfriamiento)** | N/A | 8 V a 12 V (20-120 s) | 0 Hz |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Tres intentos de arranque fallidos consecutivos provocan el bloqueo de la unidad de control J364.

**8. VERIFICACIÓN FINAL**  
Comprobar en el bloque de medición 003 el estado operativo momentáneo ("Plena carga", "Carga parcial", "Pausa de la regulación").

**9. SEGURIDAD Y NORMATIVA**  
No conectar la calefacción independiente en recintos cerrados sin extracción de gases de escape ni en estaciones de servicio/zonas con riesgo de explosión.

---

### **NOTA DE ELEMENTO — BOMBA DOSIFICADORA DE COMBUSTIBLE**
CÓDIGO: V54  
UBICACIÓN: Montada en los bajos del vehículo, sobre un apoyo en el elemento del eje a la derecha del depósito de combustible.  
APLICACIÓN: Suministro de combustible a impulsos para la calefacción independiente.

**1. MISIÓN**  
Aspirar combustible de la zona calmada de la cuba antioleaje del depósito e impulsarlo en dosis exactas hacia la cámara de combustión del calefactor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Bomba de émbolo oscilante por impulsos electromagnéticos gobernada por la UCE J364. Cada pulso eléctrico desplaza el émbolo una carrera fija, inyectando un volumen preciso de combustible (aprox. 0,03 ml/carrera en diésel y 0,027 ml/carrera en gasolina).

**3. CARACTERÍSTICAS**  
Cuerpo metálico cilíndrico provisto de abrazadera de goma antivibratoria y acoplamiento rápido de tubería. Conector eléctrico de 2 polos.  
📷 IMAGEN: Ubicación y cuadro de montaje de la bomba dosificadora V54 junto al depósito — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 111

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Caudal por carrera (Diésel)** | Aprox. 0,03 ml / carrera | Impulsado a 8 Hz |
| **Caudal por carrera (Gasolina)** | Aprox. 0,027 ml / carrera | Impulsado a 8 Hz |
| **Frecuencia de excitación nominal** | 0 Hz a 8 Hz | Según demanda de carga |
| **Par de apriete tuercas de apoyo** | 6 Nm | Montaje sobre chasis |

**5. ANOMALÍAS FRECUENTES**  
Generación de ruidos molestos en el habitáculo si el cuerpo de la bomba o sus tuberías apoyan directamente contra partes metálicas del chasis; descalibración del caudal por suciedad.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de suministro de combustible, imposibilidad de formación de llama y bloqueo del calefactor tras acumular intentos fallidos.

**7. CÓMO COMPROBARLO**  
Verificar la sonoridad de los impulsos en la diagnosis de actuadores. Medir el caudal impelido con probeta graduada ejecutando la prueba de 240 segundos a 8 Hz (Ajuste Básico - Grupo 066).

---

### **NOTA DE PROCESO — COMPROBACIÓN DEL CAUDAL DE LA BOMBA DOSIFICADORA V54 / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Medir con precisión volumétrica el caudal de combustible suministrado por la bomba V54 para diagnosticar problemas de combustión, emisión de humo o falta de arranque.  
📷 IMAGEN: Disposición de la tubería de combustible y probeta graduada para la medición de caudal de V54 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 105

**2. FUNDAMENTO**  
La UCE excita la bomba V54 a una frecuencia fija de 8 Hz durante un tiempo programado (240 segundos). El combustible impulsado se recoge en una probeta graduada y se contrasta con las especificaciones técnicas del fabricante.

**3. CONDICIONES PREVIAS**  
- Temperatura del refrigerante del motor < 30 ºC.  
- Temperatura ambiente < 25 ºC (para evitar errores por evaporación del combustible).  
- Depósito de combustible fuera de la reserva (fuera de la franja roja).  
- Batería del vehículo totalmente cargada.  
- Tubería de combustible previamente purgada mediante la prueba de llenado de 30 segundos.

**4. EQUIPO Y MATERIAL**  
- Probeta / recipiente graduado de precisión.  
- Equipo de diagnosis (VAS 5051 / VAS 5052).

**5. DESARROLLO**  
1. Desmontar el pasarruedas delantero derecho y desconectar la tubería de combustible A a la entrada del calefactor, dirigiéndola al interior de la probeta graduada B.  
2. **Primer Llenado de Tubería:** En adaptación canal "30", introducir "30" (segundos). En canal "36", introducir "1" (desbloqueo). Ejecutar Ajuste Básico grupo "066" (V54 trabaja 30 s a 8 Hz).  
3. Vaciar la probeta graduada.  
4. **Prueba de Medición de Caudal:** En adaptación canal "30", introducir "240" (segundos). En canal "36", introducir "1". Seleccionar Ajuste Básico grupo "066" y pulsar 'Activar' (V54 trabaja 240 s a 8 Hz).  
5. Esperar a que finalice la prueba (indicación 'Fin') y medir el volumen acumulado en la probeta graduada.

**6. VALORES DE REFERENCIA**  

| Motorización | Tiempo / Frecuencia | Volumen teóricamente recolectado |
|---|---|---|
| **Motor Diésel** | 240 segundos a 8 Hz | **54 a 65 ml** (cm3) |
| **Motor Gasolina** | 240 segundos a 8 Hz | **50 a 60 ml** (cm3) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Medir con temperatura ambiente > 25 ºC: genera errores por evaporación del fluido.  
- Caudal por debajo del límite inferior (< 54 ml en diésel / < 50 ml en gasolina): provoca dificultades de arranque y requiere la sustitución de la bomba V54.

**8. VERIFICACIÓN FINAL**  
Reconectar la tubería al calefactor evitando que toque otros componentes para prevenir ruidos de retumbo, y hacer funcionar el calefactor a plena carga durante 10 minutos.

**9. SEGURIDAD Y NORMATIVA**  
Observar strictly las normas de seguridad e higiene para el trabajo con sistemas de combustible abiertos; no fumar ni generar chispas.

---

### **NOTA DE PROCESO — VERIFICACIÓN DEL CONTENIDO DE CO2 EN GASES DE ESCAPE / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Medir el porcentaje en volumen de dióxido de carbono (CO2) en los gases de escape del calefactor para evaluar la calidad de la combustión tras sustituir componentes o ante la presencia de humo.  
📷 IMAGEN: Introducción de la sonda de gases VAS 6300 en el tubo de escape del calefactor — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 115

**2. FUNDAMENTO**  
El porcentaje de CO2 refleja el equilibrio estequiométrico entre el caudal de combustible (V54) y el volumen de aire comburente (V6). Desviaciones fuera de la norma indican problemas de bomba, turbina o estrechamientos en aspiración/escape.

**3. CONDICIONES PREVIAS**  
- Depósito de combustible fuera de la reserva.  
- Batería cargada y ausencia de averías memorizadas.  
- Motor del vehículo en marcha.

**4. EQUIPO Y MATERIAL**  
- Estación completa para revisión de gases de escape VAS 6300 con sonda y tubo flexible.  
- Equipo de diagnosis (VAS 5051 / VAS 5052).

**5. DESARROLLO**  
1. Conectar el equipo de diagnosis, arrancar el motor e introducir la sonda de la estación VAS 6300 en el tubo de escape A del calefactor.  
2. Ajustar la temperatura en el panel Climatronic J255 a "HI" y la turbina de aire fresco al 50%.  
3. Activar la calefacción independiente mediante MMI o Ajuste Básico grupo "011" u "022".  
4. (Opcional) Desacoplar el conector de la válvula N279 para mantener el calefactor más tiempo a plena carga sin calentar el motor.  
5. Esperar a que el calefactor pase a plena carga (~4 minutos) y mantenerlo 1 minuto adicional en esa fase.  
6. Leer el porcentaje de CO2 en el analizador (si la aguja oscila ligeramente, calcular la media aritmética entre el valor máximo y mínimo leídos).

**6. VALORES DE REFERENCIA**  

| Tipo de Combustible | Valor nominal CO2 (% en vol.) | Condiciones de medición |
|---|---|---|
| **Motor Diésel** | **8,0 % a 11,0 % en vol.** | Plena carga estabilizada (~4 min) |
| **Motor Gasolina** | **7,5 % a 10,5 % en vol.** | Plena carga estabilizada (~4 min) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Valores en el margen inferior (< 9% en diésel / < 8,5% en gasolina): provocan fallos de combustión al circular a altas velocidades.  
- Oscilación fuerte (> +/-0,6%): mala posición de la sonda dentro del tubo de escape.  
- CO2 fuera de tolerancia con caudal de bomba V54 correcto: comprobar obstrucciones en el silenciador de aspiración o tubo de escape, o fallo en la turbina V6.

**8. VERIFICACIÓN FINAL**  
Reconectar la válvula N279 si se desacopló, consultar y borrar la memoria de averías y hacer funcionar el sistema durante 10 minutos a plena carga.

**9. SEGURIDAD Y NORMATIVA**  
Peligro de quemaduras graves: no tocar con las manos desnudas la sonda de gases ni el tubo de escape del calefactor durante o inmediatamente después de la prueba.

---

### **NOTA DE ELEMENTO — BOMBA DE RECIRCULACIÓN DE LÍQUIDO REFRIGERANTE**
CÓDIGO: V55  
UBICACIÓN: Integrada en el entubado flexible de la calefacción independiente, en el paso de rueda delantero derecho.  
APLICACIÓN: Circulación forzada del líquido refrigerante con el motor parado o como apoyo a la bomba del motor.

**1. MISIÓN**  
Impulsar el líquido refrigerante a través del calefactor y del intercambiador de calor del climatizador cuando el motor está parado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electrobomba centrífuga accionada por motor eléctrico de corriente continua. Es alimentada directamente por la UCE J364 durante el funcionamiento de la calefacción o tras recibir solicitudes vía bus de la UCE de motor o del Climatronic J255.

**3. CARACTERÍSTICAS**  
Cuerpo plástico con racores para tubos flexibles de 25 mm. Conector eléctrico de 2 polos (Pin 1: Excitación +, Pin 2: Masa -).

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación** | 12 V CC (Borne 30) | Activada por J364 |
| **Par de apriete estribo sujeción** | 3,5 Nm | Tornillo de fijación al soporte |
| **Par de apriete soporte a chasis** | 6 Nm | Tornillo de fijación |

**5. ANOMALÍAS FRECUENTES**  
Destrucción inmediata por funcionamiento en seco (sin refrigerante); fugas por racores.

**6. COMPORTAMIENTO EN AVERÍA**  
El refrigerante estancado dentro del calefactor se calienta rápidamente superando los 89 ºC / 110 ºC, provocando el paso inmediato a pausa de regulación o desconexión por sobretemperatura.

**7. CÓMO COMPROBARLO**  
Verificar la sonoridad de giro durante el test de actuadores (intermitencia a 5 segundos). Comprobar la presencia de 12 V en el conector de 2 polos.

---

### **NOTA DE ELEMENTO — VÁLVULA DE CIERRE PARA LÍQUIDO REFRIGERANTE DE LA CALEFACCIÓN**
CÓDIGO: N279  
UBICACIÓN: Montada en la parte derecha de la caja de aguas del vano motor.  
APLICACIÓN: Conmutación del flujo de refrigerante entre el circuito menor (salpicadero) y el circuito mayor (salpicadero + motor).

**1. MISIÓN**  
Priorizar el calentamiento rápido del habitáculo aislando el bloque motor durante las fases iniciales de funcionamiento de la calefacción independiente.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electroválvula proporcional de solenoide gobernada por la UCE J364 en función de la temperatura del refrigerante.  
- Sin tensión (0% excitación): flujo abierto de A hacia B (circuito mayor: pasa por el motor).  
- Con tensión (100% excitación): flujo derivado de A hacia C (circuito menor: directo al intercambiador del climatizador).

**3. CARACTERÍSTICAS**  
Cuerpo plástico de 3 vías de agua con conector eléctrico de 2 polos (vía 3 del conector de 6 polos del calefactor).  
📷 IMAGEN: Conexiones de las 3 vías de agua en la válvula N279 y tornillos de fijación en la caja de aguas — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 121

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Valor numérico | Estado del circuito |
|---|---|---|
| **Tensión de alimentación** | 12 V CC | Pulsada por J364 |
| **Excitación 100% (Con tensión)** | Indicación "100%" en bloque 003 | Circuito menor (salpicadero) |
| **Excitación 0% (Sin tensión)** | Indicación "0%" en bloque 003 | Circuito mayor (motor + salpicadero) |
| **Par de apriete tornillos fijación** | 8 Nm | Montaje en caja de aguas |

**5. ANOMALÍAS FRECUENTES**  
Bloqueo mecánico del pistón interno por cal o sedimentos del refrigerante; interrupción de la bobina eléctrica.

**6. COMPORTAMIENTO EN AVERÍA**  
Si se bloquea en circuito menor, el motor del vehículo no recibe precalentamiento; si se bloquea en circuito mayor, se retrasa la calefacción del habitáculo.

**7. CÓMO COMPROBARLO**  
Verificar la excitación a 0,5 Hz durante el test de actuadores. Medir el porcentaje de excitación en el bloque de medición 003 campo 3.

---

### **NOTA DE ELEMENTO — RECEPTOR DE RADIOFRECUENCIA Y MANDO A DISTANCIA**
CÓDIGO: R64  
UBICACIÓN: Receptor R64 montado en el maletero, parte derecha bajo el guarnecido lateral; Mando a distancia portátil.  
APLICACIÓN: Activación y desactivación remota por radiofrecuencia de la calefacción o ventilación independiente.

**1. MISIÓN**  
Recibir las órdenes de encendido/apagado emitidas por el mando manual por radiofrecuencia y transmitirlas a la UCE J364, enviando una confirmación óptica de retorno al mando.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El mando manual transmite un código de radiofrecuencia. El receptor R64 procesa la señal, la envía a la UCE J364 vía bus y transmite la confirmación de vuelta para hacer parpadear el LED de control del mando. Se pueden adaptar hasta 4 mandos en R64 (un 5º borra el primero).

**3. CARACTERÍSTICAS**  
- **Mando a distancia:** Tecla ON (activación), tecla OFF (desactivación) y testigo LED verde/rojo.  
- **Batería del mando:** 1 pila de botón de litio tipo CR2430 (3 V, 280 mAh).  
- **Receptor R64:** Conectado a la antena integrada en el techo del vehículo.  
📷 IMAGEN: Ubicación del receptor R64 en el lado derecho del maletero y sustitución de la pila CR2430 en el mando manual — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 98 y 149

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Alcance máximo teórico** | Aprox. 600 metros | En campo libre sin obstáculos |
| **Tiempo de pulsación en mando** | Mínimo 3 segundos | Para emitir señal de radiofrecuencia |
| **Consumo de R64 en reposo** | < 1 mA (modo normal) / 0,04 mA (modo ahorro) | Controlado por J364 |
| **Parpadeo LED verde OK** | 30 veces a ~1 Hz | Confirmación de encendido correcto |
| **Parpadeo LED rojo fallo** | 30 veces (sin recepción) / 10 veces a 4 Hz (desconexión fallida) | Mensaje de error / distancia excesiva |

**5. ANOMALÍAS FRECUENTES**  
Agotamiento de la pila CR2430 del mando; pérdida de sincronización/adaptación; apantallamiento de la señal por obstáculos metálicos o edificios.

**6. COMPORTAMIENTO EN AVERÍA**  
El LED del mando no se enciende (pila agotada) o parpadea 30 veces en rojo (sin cobertura o por fallo en el calefactor).

**7. CÓMO COMPROBARLO**  
Pulsar la tecla ON durante 3 segundos y verificar la respuesta del LED. Comprobar el código de los mandos en los bloques de medición 018 y 019. Realizar la autoadaptación en el Ajuste Básico grupo 004.

---

COBERTURA: documento «Audi A5 Coupé_2008_Calefacción independiente.pdf», páginas 1 a 149 de 149. [completo]
