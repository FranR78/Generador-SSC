### NOTA DE PROCESO — DIAGNÓSTICO DE COMPRESOR DE AIRE ACONDICIONADO QUE NO SE ACTIVA / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la metodología de localización de averías y comprobación visual cuando el compresor de aire acondicionado no se activa en el vehículo. Aplica al diagnóstico del sistema frigorífico y eléctrico en SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
La activación del compresor requiere la integridad eléctrica de la bobina del acoplamiento magnético (N25), la presencia de presión adecuada de refrigerante en el circuito (validada por F129/G65), la autorización térmica (F38) y la gestión de potencia por la unidad J293 y la UCE del motor.

**3. CONDICIONES PREVIAS**
Encendido del vehículo conectado (borne 15) y selección de aire acondicionado en la consola central.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis, polímetro y esquemas eléctricos.

**5. DESARROLLO**
* **Componentes principales que pueden provocar que el compresor no se active:**
  1. Acoplamiento magnético del compresor N25 (bobina cortada o entrehierro excesivo).
  2. Conmutador de presión F129 / Transmisor de presión electrónico G65 (falta de carga de gas o presostato defectuoso).
  3. Interruptor térmico F38 (abierto por temperatura exterior < 5 ºC o averiado).
  4. Unidad de control del aire acondicionado J293 o fusibles de alimentación del sistema.
* **Pasos para la localización de averías:**
  1. Comprobación visual inicial: verificar la correa de accesorios Poly-V, el conector eléctrico del compresor N25, el estado de los fusibles y posibles fugas de refrigerante.
  2. Interrogar la memoria de averías con el equipo de diagnosis (dirección 08 - Climatización y UCE del motor).
  3. Verificar la presencia de alimentación de +12 V en la bobina del acoplamiento N25 al pulsar la tecla AC.
  4. Si no llega tensión, comprobar la continuidad de los contactos en el conmutador F129/G65 y en el interruptor térmico F38.
  5. Comprobar las masas y tensiones de alimentación en la unidad de control J293.
  6. Sustituir el componente defectuoso y verificar el acoplamiento mecánico del compresor.

📷 IMAGEN: Mando central de climatización con pulsador AC — Fuente: ce2.pdf, pág. 1

**6. VALORES DE REFERENCIA**
| Componente / Parámetro | Valor y Condición |
| :--- | :--- |
| Tensión en bobina N25 al activar AC | 12 V (con motor en marcha tras 10 s y temp. > 5 ºC) |
| Estado del interruptor F38 | Cerrado a temp. > 5 ºC; Abierto a temp. < 5 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Reemplazar el compresor sin verificar si la causa es la falta de gas (F129/G65 abierto) o la temperatura ambiente inferior a 5 ºC (F38 abierto).
* Intentar medir la activación del compresor durante los primeros 10 segundos tras arrancar el motor; la UCE de motor inhibe el compresor temporalmente.

**8. VERIFICACIÓN FINAL**
Verificar el acoplamiento del plato frontal sobre la polea del compresor y el descenso de temperatura en los difusores al conectar la tecla AC.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE CALEFACCIÓN MOTORIZADA INOPERATIVA CON DISPLAY APAGADO / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Establece el procedimiento de comprobación visual, verificación eléctrica y localización de averías cuando la calefacción motorizada no se conecta y la pantalla del display permanece totalmente apagada. Aplica a los sistemas de climatización de SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
La pantalla del display y la botonera E87 son alimentadas y gestionadas eléctricamente a través del radiocasete R. La falta de alimentación general (+30, +15, masa) o la avería en el radiocasete/fusibles provoca el apagado total del display y la inoperatividad del sistema.

**3. CONDICIONES PREVIAS**
Tensión de batería suficiente (12 V) y encendido conectado.

**4. EQUIPO Y MATERIAL**
Polímetro, esquemas eléctricos del vehículo y equipo de diagnosis.

**5. DESARROLLO**
* **Comprobación visual inicial:**
  - Inspeccionar el estado de los fusibles de alimentación de la calefacción motorizada, cuadro e iluminación.
  - Verificar la correcta inserción de los conectores traseros del radiocasete R y de la consola central E87.
* **Componentes que pueden provocar la avería:**
  - Fusibles de alimentación (+30 / +15) fundidos.
  - Unidad del radiocasete R (fallo interno en la alimentación de la pantalla).
  - Mazo de cables de interconexión o fallo de masa en la línea 31.
  - Unidad de control J255 / consola de mandos E87.
* **Tabla de verificaciones eléctricas:**
  1. Comprobar tensión de +12 V en borne 30 (positivo directo) y borne 15 (positivo tras contacto).
  2. Comprobar continuidad a masa en borne 31 del radiocasete R y UCE J255.
  3. Verificar la continuidad del bus de datos de interconexión.
  4. Si las alimentaciones son correctas y el display continúa apagado, sustituir la unidad del radiocasete o la botonera E87.

**6. VALORES DE REFERENCIA**
| Punto de Verificación | Valor Esperado y Condición |
| :--- | :--- |
| Tensión en línea +30 | 12 V (constante directo de batería) |
| Tensión en línea +15 | 12 V (con contacto encendido) |
| Resistencia en línea 31 (Masa) | 0 Ω respecto a chasis |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Sustituir la centralita de clima J255 pensando que está averiada cuando el fallo real proviene del fusible del radiocasete R (encargado de alimentar y gestionar el display).

**8. VERIFICACIÓN FINAL**
Verificar el encendido de los dígitos en el display al conectar el contacto y la respuesta de la calefacción motorizada al accionar los pulsadores.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE TEMPERATURA DE ENTRADA AL HABITÁCULO SIEMPRE CALIENTE / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Describe los pasos ordenados de diagnosis para localizar la causa por la cual la temperatura del aire introducido en el habitáculo se mantiene siempre caliente sin responder a los mandos. Aplica a sistemas con regulación electrónica de mezcla (Calefacción Motorizada y Autoclima).

**2. FUNDAMENTO**
El ajuste de la temperatura depende del posicionamiento del motor de la trampilla de mezcla V68 y de la lectura del potenciómetro G92 y sondas térmicas. Si el motor V68 queda trabado en la posición de calor o la UCE recibe lecturas erróneas, el aire atraviesa continuamente el radiador de calefacción.

**3. CONDICIONES PREVIAS**
Motor del vehículo a temperatura de trabajo y contacto encendido.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis (VAG 1551 o equivalente) y herramienta manual para desmontaje de guarnecidos.

**5. DESARROLLO**
* **Componentes implicados que pueden provocar la avería:**
  - Motor de la trampilla de temperatura V68 (engranaje roto, motor quemado o atascado).
  - Potenciómetro de posición de la trampilla de temperatura G92 (integrado en V68).
  - Articulación o palanca mecánica de la trampilla de mezcla.
  - Sondas de temperatura (G17 exterior, G56 habitáculo, G191/G192 aire de entrada).
  - Unidad de control de climatización J255 / Radiocasete R.
* **Pasos ordenados para la localización de la avería:**
  1. Conectar el lector de averías a la toma T16 e interrogar la memoria con la función "02".
  2. Ejecutar el diagnóstico de actuadores (función "03") seleccionando el motor V68 para comprobar si conmuta físicamente de frío a calor.
  3. Consultar en el bloque de valores de medición (función "08", Grupo 002) la tensión real y calculada del potenciómetro G92.
  4. Si los valores de G92 no varían o la trampilla no mueve, acceder físicamente al motor V68 en la caja climática y verificar si la varilla mecánica está trabada.
  5. Desmontar y sustituir el motor V68/G92 si presenta fallo interno.
  6. Realizar obligatoriamente el **Ajuste Básico (función "04", Grupo 002)** para memorizar los topes de V68.

**6. VALORES DE REFERENCIA**
| Función de Diagnosis | Grupo / Campo | Valor de Referencia |
| :--- | :--- | :--- |
| Función "08" (Bloques) | Grupo 002 / Campo 1 y 2 | Tensión real y calculada de G92 en V (0,76 V a 4,21 V) |
| Función "04" (Ajuste Básico) | Grupo 002 | Aprendizaje de topes mínimo y máximo del motor V68 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Omitir el Ajuste Básico (función 04) tras cambiar el motor V68; provoca que la UCE no reconozca los topes y la temperatura siga funcionando de forma errática.
* Confundir un fallo mecánico de la varilla atascada con un fallo de la centralita electrónica.

**8. VERIFICACIÓN FINAL**
Comprobar en la función "08" que la tensión de G92 varía de forma fluida y verificar físicamente que al seleccionar la temperatura mínima sale aire fresco por los difusores.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE AUTOCLIMA INOPERATIVO / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la redacción del proceso de localización de averías ante un fallo total de funcionamiento del sistema Autoclima. Aplica a los modelos SEAT Ibiza '99 y Córdoba '99.

**2. FUNDAMENTO**
El funcionamiento global del Autoclima requiere la presencia de alimentación eléctrica, integridad del bus de datos serie entre el radiocasete R y la UCE J255, y ausencia de averías críticas que bloqueen la unidad de control.

**3. CONDICIONES PREVIAS**
Tensión de batería de 12 V y encendido conectado (borne 15).

**4. EQUIPO Y MATERIAL**
Lector de averías, polímetro y esquemas de cableado del vehículo.

**5. DESARROLLO**
* **Cuatro componentes principales que pueden provocar el fallo total:**
  1. Unidad de control del autoclima J255.
  2. Unidad del radiocasete R (pasarela de datos e interfaz).
  3. Fusibles de alimentación de la instalación de climatización y del radiocasete.
  4. Mazo de cables del bus de datos o fallo en la línea de masa (borne 31).
* **Proceso de localización de averías:**
  1. Verificar los fusibles de la caja central del vehículo asociados al climatizador y la radio.
  2. Conectar el equipo de diagnosis al conector T16 e intentar comunicar con la dirección 08 (Aire acondicionado).
  3. Si hay comunicación, consultar la memoria de averías (función 02) para identificar el código de fallo.
  4. Si no hay comunicación, comprobar con el polímetro las alimentaciones (+30 y +15) y la masa en la UCE J255 y en el radiocasete R.
  5. Verificar la continuidad del cable del bus serie entre el radiocasete y la UCE J255.
  6. Reparar el corte eléctrico o sustituir el elemento averiado, borrar códigos y verificar el sistema.

**6. VALORES DE REFERENCIA**
| Punto de Comprobación | Valor Numérico | Condición de Validez |
| :--- | :--- | :--- |
| Alimentaciones +30 y +15 | 12 V | Medido en conectores de UCE J255 y Radiocasete R |
| Continuidad del Bus Serie | 0 Ω | Entre conector del Radiocasete R y UCE J255 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Atribuir la falta de funcionamiento a la falta de gas refrigerante; si no hay gas el compresor no acopla, pero la electrónica y la turbina del Autoclima deben encender y funcionar.

**8. VERIFICACIÓN FINAL**
Verificar que la UCE responde al equipo de diagnosis, enciende el display y ejecuta la regulación del caudal y de la temperatura.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNÓSTICO DE AUTOCLIMA CON PARPADEO DE DÍGITOS Y ANÁLISIS DE BLOQUES DE MEDICIÓN / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Detalla el procedimiento de diagnosis cuando el cliente indica que el Autoclima no enfría y los dígitos AC parpadean constantemente, analizando los grupos de la función "08" (bloques de valores de medición). Aplica a SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
El parpadeo de los dígitos AC al encender indica que la UCE ha detectado un código de avería en sus sensores o actuadores. La función "08" del lector muestra en tiempo real los valores procesados por la UCE en los grupos 001 al 006, permitiendo identificar la señal anómala.

**3. CONDICIONES PREVIAS**
Contacto del vehículo encendido (+15) y equipo de diagnosis VAG 1551 conectado al puerto T16.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis y manual de valores de referencia.

**5. DESARROLLO**
* **Componentes del Autoclima que pueden causar la avería (sin utilizar el lector):**
  - Transmisor de temperatura exterior G17.
  - Sonda de temperatura del habitáculo G56 / turbina V42.
  - Transmisores de temperatura de entrada G191 / G192.
  - Motor de la trampilla de temperatura V68 / potenciómetro G92.
  - Conmutador de presión F129 / Transmisor G65.
* **Consulta de la función "08" (Bloques de valores de medición):**
  - *Grupo 001:* Campo 1 (Salida compresor 0/1), Campo 2 (Estado F129 0/1), Campo 3 (Estado V113 0/1), Campo 4 (Velocidad km/h).
  - *Grupo 002:* Campo 1 (V68 real V), Campo 2 (V68 calculada V), Campo 3 (Tope sup. V), Campo 4 (Tope inf. V).
  - *Grupo 003:* Estado de pulsadores de turbina, AC y AUTO (0/1).
  - *Grupo 004:* Estado de pulsadores de recirculación, temp. y posición de distribución (0-100%).
  - *Grupo 005:* Campo 1 (Tensión solicitada V2 V), Campo 2 (Tensión real V2 V), Campo 3 (Tensión alimentación V).
  - *Grupo 006:* Campo 1 (Temp. ext. G17 ºC), Campo 2 (Temp. G191 ºC), Campo 3 (Temp. G192 ºC), Campo 4 (Temp. G56 ºC).
* **Pasos si la avería no es detectada en los bloques:**
  1. Interrogar la memoria de averías (función 02) por si existe un fallo grabado intermitente (/SP).
  2. Ejecutar el diagnóstico de actuadores (función 03) para forzar la marcha del acoplamiento N25 y la turbina V2.
  3. Realizar la comprobación de la presión de gas en el circuito frigorífico con el puente de manómetros.
  4. Borrar la memoria de averías (función 05) tras reparar el componente dañado.

**6. VALORES DE REFERENCIA**
| N.º de Grupo | Campo 1 | Campo 2 | Campo 3 | Campo 4 |
| :--- | :--- | :--- | :--- | :--- |
| **001** | Estado compresor (0/1) | Estado F129 (0 fuera/1 rango) | Estado V113 (0 ext/1 recir) | Velocidad vehículo (km/h) |
| **002** | V68 posición real (V) | V68 posición calculada (V) | V68 tope superior (V) | V68 tope inferior (V) |
| **003** | Pulsador + turbina (0/1) | Pulsador - turbina (0/1) | Pulsador AC (0/1) | Pulsador AUTO (0/1) |
| **004** | Pulsador recirculación (0/1) | Pulsador - temp. (0/1) | Pulsador + temp. (0/1) | Posición distribución (0-100%) |
| **005** | Tensión solicitada V2 (V) | Tensión real V2 (V) | Tensión alimentación (V) | Libre |
| **006** | Temp. exterior G17 (ºC) | Temp. difusor central G191 (ºC) | Temp. reposapiés G192 (ºC) | Temp. habitáculo G56 (ºC) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si en el Grupo 006 la temperatura exterior G17 indica "---" o un valor incoherente (ej. -40 ºC), la UCE deshabilita la marcha del compresor para evitar congelación y hace parpadear los dígitos.
* Si en el Grupo 001 el campo 2 indica "0", la presión en el circuito está fuera del rango de trabajo (< 2 bar o > 32 bar).

**8. VERIFICACIÓN FINAL**
Verificar que los dígitos del display dejan de parpadear al encender el Autoclima y que la temperatura del aire en difusores desciende progresivamente.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — ARQUITECTURA, FUNCIONES Y COMPONENTES EN CLIMATIZACIÓN Y REFRIGERACIÓN / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica las afirmaciones técnicas correctas, las funciones asumidas por la UCE del Autoclima, las motorizaciones con transmisor G65 y los componentes de activación de los ventiladores del radiador. Aplica a los sistemas de climatización de SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
Sistemas de climatización electrónica y analógica. La UCE del Autoclima asume la gestión de la mezcla de aire, velocidad de turbina, compresor y comunicación, mientras que los electroventiladores son gobernados por J293, F18, F129/G65 y la UCE del motor.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Afirmaciones técnicas verdaderas en la gama Ibiza/Córdoba '99:**
  - En todos los sistemas de climatización la selección de la distribución de aire se realiza mecánicamente mediante cables.
  - El Autoclima regula y mantiene automáticamente la temperatura seleccionada por el usuario.
  - La trampilla de recirculación es accionada de forma eléctrica en todos los casos (motor V113).
  - *(Es FALSO que la calefacción motorizada mantenga constante la temperatura o que el autoclima controle una trampilla de velocidad)*.
* **Funciones asumidas por la unidad de control del Autoclima J255:**
  - Control de la trampilla de temperatura (motor V68).
  - Control de la velocidad de la turbina (regulador J126 / motor V2).
  - Control del compresor de aire acondicionado (acoplamiento N25).
  - *(Es FALSO que controle directamente los ventiladores del refrigerante o la comunicación directa con el usuario; los ventiladores los gobierna J293 y la comunicación la realiza el radiocasete R)*.
* **Motorizaciones que montan el transmisor de presión electrónico G65:**
  - Exclusivamente en los **motores de gasolina** (los motores diésel montan el conmutador de presión mecánico F129).
* **Componentes existentes en un sistema de Calefacción Motorizada:**
  - Unidad de control J255 (codificada con puente a masa en pin 21).
  - Radiocasete R y panel con display E87.
  - Motor de la trampilla de temperatura V68 / G92.
  - Motor de la turbina V2 y regulador de régimen J126.
  - Motor de la trampilla de recirculación V113.
  - Mando de distribución de aire por cable con potenciómetro.
  - *(No equipa compresor, condensador, filtro deshidratador ni válvula de expansión)*.
* **Componentes que activan los ventiladores del líquido refrigerante:**
  - La unidad de control del aire acondicionado J293.
  - El conmutador térmico del radiador F18.
  - El conmutador de presión F129 / Transmisor G65.
  - La unidad de control del motor.
* **Unidades de control que utilizan la señal del transmisor de temperatura exterior G17:**
  - La unidad del Radiocasete R (para mostrar la lectura en el display).
  - La unidad del Autoclima J255 (para el cálculo de la mezcla de temperatura).
* **Componentes NO implicados en la regulación de la temperatura en modo automático:**
  - Mandos/cables de distribución de aire.
  - Conmutador de presión F129 / G65.
  - Interruptor térmico de la caja de aguas F38.

📷 IMAGEN: Despiece esquemático de componentes de la unidad climática del Ibiza/Córdoba '99 — Fuente: ce2.pdf, pág. 11

**6. VALORES DE REFERENCIA**
| Elemento / Sistema | Configuración / Aplicación |
| :--- | :--- |
| Transmisor de presión G65 | Exclusivo para motores de GASOLINA |
| Conmutador de presión F129 | Exclusivo para motores DIÉSEL |
| Unidades receptoras de señal G17 | Radiocasete R y UCE Autoclima J255 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Creer que la calefacción motorizada mantiene la temperatura constante; solo mueve la trampilla V68 a la posición solicitada pero no autorregula ante cambios térmicos.
* Confundir la unidad que gobierna los electroventiladores (J293) con la UCE del autoclima (J255).

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — LECTURA DE IDENTIFICACIÓN DE LA UNIDAD DE CONTROL DEL AUTOCLIMA EN EQUIPO DE DIAGNOSIS / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la interpretación de los campos mostrados en la pantalla de identificación de la versión de la unidad de control del autoclima mediante la función "01" del equipo de diagnosis. Aplica al autodiagnóstico del SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
Al seleccionar la **Función "01" (Interrogar la versión de la unidad de control)** en la Dirección 08 del equipo de diagnosis (VAG 1551 o equivalente), la UCE transmite sus códigos de identificación de recambio, versión de software, hardware y código del taller.

**3. CONDICIONES PREVIAS**
Equipo de diagnosis conectado al puerto T16 del vehículo y contacto encendido.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis (VAG 1551 o equivalente).

**5. DESARROLLO**
* **Interpretación de los campos en la pantalla de la función "01":**
  - **Campo A (`6K0959291`):** Número o código de recambio oficial SEAT de la Unidad de Control del Autoclima.
  - **Campo B (`6K-AUTOCLIMA-110`):** Denominación del sistema y versión de programa/software grabado en la UCE. Indica que la centralita física J255 está trabajando con la codificación de programa Autoclima (sin puente de masa en pin 21).
  - **Campo C (`X01`):** Versión de desarrollo del hardware/software de la centralita.
  - **Campo D (`WSC 00000`):** Código del taller (WorkShop Code) que realizó la última codificación o adaptación de la unidad.

📷 IMAGEN: Pantalla de identificación de la unidad de control del autoclima en el equipo VAG 1551 — Fuente: ce2.pdf, pág. 12

**6. VALORES DE REFERENCIA**
| Campo en Pantalla | Código Mostrado | Significado Técnico |
| :--- | :--- | :--- |
| **Campo A** | `6K0959291` | Número de recambio original de la UCE |
| **Campo B** | `6K-AUTOCLIMA-110` | Sistema identificado y versión de software |
| **Campo C** | `X01` | Versión de hardware / software |
| **Campo D** | `WSC 00000` | Código de identificación del taller |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si en el Campo B aparece la denominación de Calefacción Motorizada en lugar de Autoclima, significa que el conector posterior tiene colocado por error el puente de masa en el pin 21 del mazo de cables.

**8. VERIFICACIÓN FINAL**
Verificar que el código de recambio y la versión de software mostrados en el lector coinciden con la equipamiento real del vehículo.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

COBERTURA: documento «ce2.pdf», páginas 1 a 14 de 14. [completo]

---

💡 ¿Deseas que adaptemos alguno de estos casos prácticos de la Modalidad 2 en fichas de taller listas para imprimir y entregar al alumnado durante las clases de diagnóstico?