He procesado el documento **«ce0.pdf»** (*Climatización en el Ibiza/Córdoba'99 - Cuaderno de ejercicios - Modalidad 0*) y he extraído todas las notas técnicas de elemento y de proceso siguiendo el orden de aparición del cuaderno.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE PARPADEO EN DISPLAY Y FALLO DE COMUNICACIÓN EN AUTOCLIMA / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la metodología de diagnóstico ante la presencia de dígitos parpadeantes en el display del aire acondicionado y la pérdida de comunicación entre la unidad del autoclima y el radiocasete. Aplica a los modelos SEAT Ibiza '99 y Córdoba '99.

**2. FUNDAMENTO**
El parpadeo continuo de los dígitos en la pantalla AC indica la presencia de averías memorizadas en la unidad de control del autoclima. Asimismo, la falta de comunicación serie entre el radiocasete R y la UCE del autoclima impide la transmisión de órdenes de usuario e indicación de datos.

**3. CONDICIONES PREVIAS**
Vehículo en taller con contacto encendido (+15) y conector de diagnosis T16 accesible.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis (VAG 1551 o equivalente).

**5. DESARROLLO**
* **Síntomas de avería:**
  - Los dígitos de la pantalla AC parpadean continuamente al solicitar el aire acondicionado y el sistema no enfría.
  - El display no indica datos del autoclima o no reacciona al presionar los pulsadores.
  - El sistema conmuta automáticamente al modo automático de emergencia.
* **Causas probables:**
  - Presencia de un código de avería memorizado en la UCE de climatización.
  - Ausencia de comunicación o interrupción de la línea de bus entre la unidad del autoclima y el radiocasete.
  - Transmisor de temperatura exterior G17 o sondas térmicas defectuosas.
* **Procedimiento de diagnosis:**
  1. Conectar el lector de averías al conector de diagnosis del vehículo.
  2. Interrogar la memoria de averías mediante la función "02" en la dirección del climatizador.
  3. Comprobar las averías registradas (esporádicas /SP o permanentes).
  4. Verificar el cableado del bus serie entre la unidad del autoclima y la unidad del radiocasete.
  5. Reparar la causa del fallo o restablecer la comunicación, borrar la memoria con la función "05" y argumentar los motivos de la avería al cliente.

📷 IMAGEN: Diagrama de interconexión y fallo de comunicación entre la unidad del autoclima y el radiocasete — Fuente: ce0.pdf, pág. 13

**6. VALORES DE REFERENCIA**
| Parámetro / Síntoma | Estado de Indicación | Comportamiento del Sistema |
| :--- | :--- | :--- |
| Parpadeo de dígitos en pantalla AC | Parpadeo continuo al encender | Avería memorizada en UCE; compresor inhibido |
| Pérdida de comunicación con radiocasete | Display sin datos / no responde | Conmuta a modo automático de emergencia |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar reparar el compresor o recargar gas sin consultar previamente la función "02" del lector de averías cuando la pantalla está parpadeando.
* Reemplazar la pantalla del display cuando la falta de indicación se debe a un fallo de comunicación en el bus con el radiocasete.

**8. VERIFICACIÓN FINAL**
Verificar que los dígitos del display permanecen fijos sin parpadear al conectar el aire acondicionado y que el sistema responde a la presión de los pulsadores.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE AVERÍAS EN CALEFACCIÓN MOTORIZADA Y REGULACIÓN DE TEMPERATURA / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Establece los pasos para identificar las causas que impiden el calentamiento del aire de entrada o provocan el fallo total de la calefacción motorizada. Aplica a los sistemas de calefacción motorizada y autoclima del SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
En los sistemas con calefacción motorizada y autoclima, la regulación de la temperatura depende de la UCE, el motor de la trampilla de temperatura V68, el radiocasete y las sondas térmicas. El fallo de cualquiera de estos elementos impide la mezcla adecuada de aire caliente.

**3. CONDICIONES PREVIAS**
Motor en marcha a temperatura de servicio y contacto encendido.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis y Manual de Reparaciones.

**5. DESARROLLO**
* **Componentes que pueden provocar la ausencia de aire caliente:**
  - Motor de la trampilla de temperatura V68 (bloqueado o defectuoso).
  - Cable o articulación mecánica de la trampilla de temperatura.
  - Unidad de control del autoclima / calefacción motorizada J255.
  - Radiocasete (pasarela de datos de pulsadores).
  - Transmisor de temperatura exterior G17.
  - Pulsador de temperatura en el display / panel de mandos E87.
  - Radiador de calefacción / circuito de refrigerante del motor.
* **Pasos de diagnosis:**
  1. Efectuar un reconocimiento de funcionamiento del sistema evaluando la respuesta al accionar los pulsadores de temperatura.
  2. Conectar el lector de averías y consultar la memoria de fallos (función "02").
  3. Ejecutar la prueba de actuadores (función "03") para verificar el movimiento completo del motor V68 de tope a tope.
  4. Consultar los valores de posición real y calculada de V68 en la función "08" (bloques de medición).
  5. Consultar el Manual de Reparaciones para proceder al desmontaje y sustitución del componente defectuoso.

**6. VALORES DE REFERENCIA**
| Elemento Afectado | Verificación en Lector | Criterio de Avería |
| :--- | :--- | :--- |
| Motor de trampilla de temp. V68 | Función "03" / Bloque "08" | Bloqueo mecánico o fuera de límites en tensión |
| Transmisor de temp. exterior G17 | Función "08" | Lectura errónea o valor sustitutivo de 20 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Atribuir el fallo de calefacción al compresor de aire acondicionado o al conmutador de presión; ninguno de estos elementos interviene en el calentamiento del aire.
* Cambiar la UCE sin comprobar previamente si el motor V68 se encuentra atascado mecánicamente.

**8. VERIFICACIÓN FINAL**
Confirmar que al seleccionar la temperatura máxima (HOT o ºC elevados) el caudal de aire sale caliente por los difusores seleccionados.

**9. SEGURIDAD Y NORMATIVA**
Riesgo de quemaduras por líquido refrigerante al intervenir en los latiguillos del radiador de calefacción.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE PANTALLA INOPERATIVA Y CONEXIÓN EN AUTOCLIMA / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la localización de averías cuando el autoclima no se conecta y el display no muestra ninguna indicación. Aplica a los sistemas autoclima del SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
La falta total de indicación en la pantalla y la imposibilidad de conectar el autoclima obedecen a la ausencia de alimentación eléctrica (+30 / +15 / masa), fallo interno en el radiocasete R (que alimenta la pantalla) o avería en la UCE.

**3. CONDICIONES PREVIAS**
Tensión de batería suficiente (12 V).

**4. EQUIPO Y MATERIAL**
Polímetro, esquemas eléctricos del vehículo y lector de averías.

**5. DESARROLLO**
* **Síntomas:** El autoclima no se enciende, los botones no responden y la pantalla del display está completamente apagada.
* **Procedimiento de localización:**
  1. Comprobar los fusibles de alimentación del sistema de climatización y del radiocasete en la caja de fusibles.
  2. Verificar la llegada de tensión (+12 V) y masa (línea 31) en los conectores del radiocasete y de la UCE del autoclima.
  3. Conectar el lector de averías e intentar la comunicación con la dirección 08 (Aire acondicionado) y dirección de Radio.
  4. Si no hay respuesta de la UCE, desmontar el frontal y verificar las conexiones traseras del radiocasete y del panel E87.
  5. Sustituir el componente defectuoso (fusible, cableado, radiocasete o UCE) según los esquemas eléctricos.

**6. VALORES DE REFERENCIA**
| Punto de Comprobación | Valor Numérico | Condición de Validez |
| :--- | :--- | :--- |
| Alimentación positivo línea 30 / 15 | 12 V | Medido con polímetro respecto a masa |
| Conexión de masa línea 31 | 0 Ω (continuidad) | Medido con polímetro a masa del chasis |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Reemplazar la UCE de climatización sin comprobar antes si el fallo proviene del fusible del radiocasete (que alimenta eléctricamente la pantalla E87).

**8. VERIFICACIÓN FINAL**
Verificar el encendido de los dígitos en el display al conectar el contacto y la respuesta normal del climatizador al pulsar las teclas.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE DISTRIBUCIÓN DE AIRE Y LECTURA DE BLOQUES DE MEDICIÓN / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Detalla el procedimiento para diagnosticar fallos en la distribución del caudal de aire (ej. cuando no sale aire por la zona de los pies) evaluando las funciones "02" y "08" del lector de averías. Aplica a SEAT Córdoba Vario '99 e Ibiza '99 con autoclima.

**2. FUNDAMENTO**
La orientación del aire se realiza mediante la distribución mecánica por cable o servomotores y la monitorización de sensores. Las funciones de autodiagnóstico 02 (memoria de averías) y 08 (bloques de valores de medición) permiten aislar el fallo eléctrico o mecánico.

**3. CONDICIONES PREVIAS**
Contacto conectado (+15) y turbina de aire en funcionamiento.

**4. EQUIPO Y MATERIAL**
Lector de averías VAG 1551 o equivalente.

**5. DESARROLLO**
* **Síntoma:** El aire acondicionado/calefacción funciona pero el caudal nunca sale por los difusores de los pies.
* **Componentes que pueden provocar la avería:**
  - Mando giratorio o cable Bowden de distribución de aire suelto/roto.
  - Potenciómetro de la distribución de aire.
  - Chapaletas de distribución de aire atascadas dentro de la caja climática.
  - Transmisor de temperatura del difusor del reposapiés G192.
  - Unidad de control del autoclima.
* **Procedimiento con el lector de averías:**
  1. Acceder a la dirección 08 (Climatizador) e interrogar la memoria de averías con la **función "02"**.
  2. Leer las averías registradas para verificar si existe un fallo en G192, potenciómetro de distribución o la propia UCE.
  3. Acceder a la **función "08" (Leer bloque de valores de medición)** y revisar secuencialmente los grupos del 001 al 006:
     - Grupo 001: Estado de salidas y señales principales.
     - Grupo 002: Posiciones del motor de temperatura V68.
     - Grupo 003 y 004: Estado de los pulsadores y porcentaje de posición de distribución (0 a 100%).
     - Grupo 005: Tensiones solicitadas y reales de la turbina V2.
     - Grupo 006: Lecturas de temperatura de G17, G191, G192 y G56.
  4. Analizar los valores fuera de tolerancia en el Grupo 004 (posición de distribución) y Grupo 006 (temperatura en pies G192).

**6. VALORES DE REFERENCIA**
| Grupo en Función "08" | Campo Analizado | Parámetro Esperado |
| :--- | :--- | :--- |
| Grupo 004 | Campo 4 (Posición distribución) | Variación entre 0% y 100% al girar el mando |
| Grupo 006 | Campo 3 (Temp. reposapiés G192) | Valor en ºC acorde a la temperatura del caudal inferior |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si en el Grupo 004 campo 4 el porcentaje varía de 0 a 100% pero el aire no sale por los pies, el fallo es puramente mecánico (cable Bowden soltado o trampilla atascada).
* Si el porcentaje no varía al girar la rueda, el fallo es eléctrico en el potenciómetro de distribución o en el cableado hacia la UCE.

**8. VERIFICACIÓN FINAL**
Verificar físicamente la salida de caudal de aire caliente/frío por los difusores de los pies al seleccionar la posición correspondiente en el mando.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL AUTOCLIMA
CÓDIGO: 6K0959291 (versión software 6K-AUTOCLIMA-110, X01, WSC 00000)
UBICACIÓN: Montada en la consola central del salpicadero, detrás del panel de mandos.
APLICACIÓN: Sistema Autoclima en SEAT Ibiza '99 y Córdoba '99.

**1. MISIÓN**
Procesar las señales de las sondas térmicas, gestionar la lógica de control del clima, regular la posición de la trampilla de mezcla V68 y comunicarse con el radiocasete R para la indicación en display.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Unidad de control electrónica con microprocesador y memoria de autodiagnóstico. Evalúa la temperatura deseada y la real del habitáculo para emitir órdenes de control hacia el compresor, la turbina V2 y las trampillas.

**3. CARACTERÍSTICAS**
Módulo electrónico de control con versión de software identificable por el lector de averías (6K-AUTOCLIMA-110), código de taller WSC 00000 y conectores de múltiples vías.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: 12 V (línea 30 y línea 15).
* Identificación por lector de averías: Código de recambio 6K0959291, software 6K-AUTOCLIMA-110, versión X01.

**5. ANOMALÍAS FRECUENTES**
Fallo en la memoria interna, cortocircuito en las etapas de potencia de salida o pérdida de comunicación por el bus con el radiocasete R.

**6. COMPORTAMIENTO EN AVERÍA**
El sistema de climatización deja de regular automáticamente, los dígitos del display parpadean o la pantalla queda totalmente apagada, registrando códigos de avería en el autodiagnóstico.

**7. CÓMO COMPROBARLO**
Interrogar la unidad mediante la función "01" (Versión de la unidad) con el lector de averías para verificar la comunicación y consultar la memoria de fallos con la función "02".

📷 IMAGEN: Pantalla de identificación de la versión de la unidad de control del autoclima en el lector de averías — Fuente: ce0.pdf, pág. 10

---

### NOTA DE PROCESO — ARQUITECTURA, ESTRATEGIAS DE CONTROL Y CIRCUITOS DE CLIMATIZACIÓN EN IBIZA/CÓRDOBA '99 / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Describe la distribución de componentes en los circuitos frigoríficos de alta y baja presión, la lógica de control del compresor y electroventiladores, y las estrategias de funcionamiento en desempañado y regulación automática. Aplica a la gama SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
El circuito frigorífico se divide en alta presión (desde la descarga del compresor hasta la válvula de expansión) y baja presión (desde la válvula de expansión hasta la aspiración del compresor). La UCE del autoclima asume la regulación de la temperatura, la velocidad de la turbina, el compresor y la recirculación, comunicándose con el usuario a través del radiocasete.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Distribución de componentes por circuitos de presión:**
  - *Circuito de Alta Presión:* Salida/descarga del compresor, condensador, filtro deshidratador, conmutador de presión (F129 / G65) y entrada a la válvula de expansión.
  - *Circuito de Baja Presión:* Salida de la válvula de expansión, evaporador, silenciador de baja presión y tubería de aspiración al compresor.
* **Componentes no montados en Autoclima con motor de gasolina:**
  - No equipan conmutador de presión mecánico F129 (utilizan el transmisor electrónico G65).
* **Estrategia al seleccionar desorientación parabrisas (deshielo):**
  1. Se conecta automáticamente el compresor del aire acondicionado para deshidratar el aire.
  2. Aumenta casi al máximo la velocidad de la turbina V2 para impulsar mayor caudal.
  3. La trampilla de recirculación V113 se sitúa forzosamente en posición de entrada de aire del exterior (impide la recirculación).
* **Unidades que utilizan la señal del transmisor de temperatura exterior G17:**
  - La unidad del Radiocasete R (para mostrar la indicación en la pantalla).
  - La unidad del Autoclima J255 (para el cálculo de la mezcla y marcha del compresor).
* **Componentes accionados automáticamente para la regulación de temperatura:**
  - Trampilla de temperatura V68.
  - Turbina de aire V2.
  - Trampilla de recirculación V113.
  - Compresor de aire acondicionado N25.
  - *(Nota: Las trampillas de distribución de aire son de selección manual por el usuario)*.
* **Tipos de equipos de climatización disponibles en la gama '99:**
  1. Ventilación-Calefacción.
  2. Aire Acondicionado Manual.
  3. Calefacción Motorizada.
  4. Autoclima.
* **Componentes que afectan al funcionamiento de los electroventiladores del refrigerante:**
  - Conmutador térmico del radiador F18.
  - Conmutador de presión F129 / Transmisor G65.
  - Unidad de control del aire acondicionado J293.
  - Unidad de control del motor J623.

📷 IMAGEN: Esquema de distribución de componentes en el circuito frigorífico de alta y baja presión — Fuente: ce0.pdf, pág. 8
📷 IMAGEN: Diagrama de componentes que intervienen en la activación de los electroventiladores de refrigeración — Fuente: ce0.pdf, pág. 13

**6. VALORES DE REFERENCIA**
| Parámetro / Estrategia | Estado o Valor | Condición de Validez |
| :--- | :--- | :--- |
| Salida contra el parabrisas | Compresor ON / Turbina casi máx / Recirculación exterior | Al seleccionar aire hacia el parabrisas |
| Unidades con señal de G17 | Radiocasete R y UCE Autoclima J255 | Reciben la lectura del sensor exterior G17 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Creer que la unidad del autoclima controla automáticamente las trampillas de distribución de aire; en el Ibiza/Córdoba '99 las trampillas de distribución se mueven mecánicamente mediante cable.
* Confundir los componentes de alta presión con los de baja presión al instalar manómetros en las tomas del servicio.

**8. VERIFICACIÓN FINAL**
Verificar el acoplamiento del compresor y el cambio a aire exterior al seleccionar el modo de desorientación contra el parabrisas.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

COBERTURA: documento «ce0.pdf», páginas 1 a 14 de 14. [completo]

---

💡 ¿Necesitas que preparemos algún solucionario o pautas de corrección para estas prácticas y cuestiones del cuaderno para utilizarlas en el aula?