### NOTA DE ELEMENTO — CONMUTADOR DE PRESIÓN (TRINARIA)
UBICACIÓN: Montado directamente en la tubería del tramo de alta presión o en el filtro deshidratador.
APLICACIÓN: Circuitos de aire acondicionado y climatización de vehículos automóviles (sustituido en modelos actuales por sensor MAP).

**1. MISIÓN**
Vigilar y limitar las condiciones de presión del circuito hidráulico del climatizador en el lado de alta. Desactiva el compresor por medio del embrague electromagnético si la presión está fuera de los límites de seguridad y conecta el electroventilador para asegurar el caudal de aire de refrigeración.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador electromecánico presostático triple. La presión ejercida por el fluido refrigerante en el lado de alta sobre un mecanismo interno de membrana desplaza contactos eléctricos para abrir o cerrar los circuitos de control del compresor y del electroventilador.

**3. CARACTERÍSTICAS**
Interruptor combinado triple de 4 vías o bornes eléctricos (bornes 1 y 2 para el control del compresor; bornes 3 y 4 para la activación del electroventilador). Cuerpo metálico con rosca de unión estanca al circuito de alta.

**4. VALORES DE TRABAJO**
* Corte por baja presión: **P < 2 bar** (con motor en marcha y A/C activado; indica presencia de fuga de refrigerante).
* Conexión del electroventilador a máxima velocidad: **P > 16 bar** (con A/C activado e incremento de presión en alta).
* Corte por alta presión: **P > 24 a 32 bar** (según el tarado del presostato; indica sobrepresión por suciedad en el condensador u obturación del circuito).

**5. ANOMALÍAS FRECUENTES**
* Fugas de fluido refrigerante por el cuerpo o la rosca del conmutador.
* Descalibrado o fatiga de los muelles y membranas internas por picos de presión.
* Sulfatación de los bornes de conexión eléctrica.
* Fusión o fogueo de los contactos por arcos eléctricos.

**6. COMPORTAMIENTO EN AVERÍA**
El conductor percibe que el aire acondicionado no enfría. Si los contactos 1 y 2 quedan abiertos permanentemente, el compresor no acopla; si fallan los contactos 3 y 4, el electroventilador no salta a máxima velocidad, provocando sobrecalentamiento en el tramo de alta; si los contactos se quedan pegados, el compresor no se desconecta ante fugas o sobrepresiones peligrosas.

**7. CÓMO COMPROBARLO**
* Con el conector eléctrico desenchufado, medir continuidad con un polímetro en función de óhmetro:
  - **Entre bornes 1 y 2:** Debe dar continuidad (0 Ω) a presión normal de reposo/trabajo (entre 2 bar y 24-32 bar). Si da circuito abierto (infinito / OL) con presión correcta en el circuito de alta, el presostato está averiado.
  - **Entre bornes 3 y 4:** Debe dar circuito abierto (infinito / OL) con presión inferior a 16 bar, y continuidad (0 Ω) cuando la presión en el tramo de alta supera los 16 bar.
* Verificar simultáneamente los valores reales de presión hidráulica conectando el puente de manómetros en la toma de servicio de alta.

---

### NOTA DE PROCESO — REGULACIÓN Y PROTECCIÓN POR PRESIÓN MEDIANTE PRESOSTATO TRINARIO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la lógica de control, los umbrales de disparo y las condiciones de seguridad hidráulica y eléctrica gobernadas por el conmutador de presión trinario en el tramo de alta. Aplica al diagnóstico y mantenimiento de sistemas de aire acondicionado.

**2. FUNDAMENTO**
Protección activa del circuito presurizado. Para evitar la destrucción del compresor por falta de lubricante (en caso de fuga) o el reventón de componentes por sobrepresión (falta de condensación), el presostato trinario desconecta la alimentación del embrague electromagnético e intensifica el caudal de aire forzado sobre el condensador cuando la presión se eleva.

**3. CONDICIONES PREVIAS**
Motor térmico en marcha, sistema A/C activado y conector del presostato trinario acoplado.

**4. EQUIPO Y MATERIAL**
Puente de manómetros de climatización, polímetro digital y estación de servicio de A/C.

**5. DESARROLLO**
* **Lógica de Funcionamiento del Conmutador Trinario:**
  1. *Corte por baja presión (P < 2 bar):* Cuando la presión en el tramo de alta cae por debajo de 2 bares debido a una fuga de refrigerante, se abren los contactos de los bornes 1 y 2, interrumpiendo la alimentación del embrague electromagnético para proteger el compresor.
  2. *Conexión del electroventilador (P > 16 bar):* Al alcanzar los 16 bares en el tramo de alta, se cierran los contactos de los bornes 3 y 4, alimentando el electroventilador a máxima velocidad para refrigerar el condensador y reducir la presión.
  3. *Corte por alta presión (P > 24 a 32 bar):* Si la presión aumenta hasta situarse entre 24 y 32 bares (por exceso de suciedad en el condensador u obturación del circuito), se abren de nuevo los contactos 1 y 2, desactivando el compresor por seguridad.
* **Evolución técnica:** En modelos actuales, el presostato mecánico trinario ha sido reemplazado por un sensor de presión de señal continua (sensor MAP).

📷 IMAGEN: Esquema del conmutador trinario, bornes de accionamiento (1 y 2 para compresor, 3 y 4 para electroventilador) y valores de presión — Fuente: Trinary y conmutadores.pdf, pág. 88

**6. VALORES DE REFERENCIA**
| Umbral de Presión (Tramo de Alta) | Estado de Bornes del Presostato | Condición Técnica y Causa |
| :--- | :--- | :--- |
| **P < 2 bar** | Abre bornes 1 y 2 (Corte de compresor) | Fuga de fluido refrigerante en el circuito |
| **P > 16 bar** | Cierra bornes 3 y 4 (Marcha electroventilador) | Incremento de presión; optimización de condensación |
| **P > 24 a 32 bar** | Abre bornes 1 y 2 (Corte de compresor) | Sobrepresión; suciedad en condensador u obturación |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Diagnosticar un fallo eléctrico en el compresor sin medir la presión hidráulica del circuito; si la presión cae de 2 bar por fuga de gas, el presostato trinario actúa correctamente impidiendo la marcha del compresor.
* Puentear los bornes 1 y 2 de forma permanente para forzar la marcha del compresor sin refrigerante; provoca el gripado del compresor por falta de retorno de aceite.

**8. VERIFICACIÓN FINAL**
Comprobar que el embrague del compresor se acopla con presiones de alta entre 2 bar y 24-32 bar, y verificar la activación del electroventilador a máxima velocidad al superar los 16 bar en el manómetro de alta.

**9. SEGURIDAD Y NORMATIVA**
Prohibido anular o puentear de forma permanente los dispositivos presostáticos de seguridad del circuito de A/C.

---

COBERTURA: documento «Trinary y conmutadores.pdf», páginas 88 a 88 de 88. [completo]

---

💡 ¿Quieres que preparemos una guía de diagnóstico paso a paso para el control del presostato trinario o una hoja de ejercicios prácticos para medir sus bornes en el taller?