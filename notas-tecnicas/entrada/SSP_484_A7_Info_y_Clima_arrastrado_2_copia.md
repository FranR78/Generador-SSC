### **NOTA DE ELEMENTO — SERVOMOTOR DE TRAMPILLA CON COMUNICACIÓN LIN**
CÓDIGO: No documentado en fuentes  
UBICACIÓN: Mueble climatizador del vehículo  
APLICACIÓN: Sistema de climatización Climatronic (Audi A7) mediante unidad de control J255 o pantalla trasera E265.

**1. MISIÓN**  
Accionar las trampillas del sistema de climatización ajustando la distribución, mezcla y caudal de aire según las órdenes transmitidas por la unidad de control a través del bus LIN.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recibe órdenes digitales multiplexadas mediante una conexión en serie por bus LIN. Cada servomotor adapta su posición y se activa individualmente en función de la dirección atribuida a su trampilla durante el proceso de auto-direccionamiento.

**3. CARACTERÍSTICAS**  
Conector eléctrico de 4 vías con la siguiente distribución de pines:
- **Borne A1:** Borne 31 (Masa).
- **Borne A2:** LIN in (Entrada de señal del bus).
- **Borne A3:** LIN out (Salida de señal del bus).
- **Borne A4:** Borne 30 (Positivo de alimentación).

**4. VALORES DE TRABAJO**  

| Parámetro / Conexión | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Alimentación eléctrica** | **Borne 30 (A4) y Borne 31 (A1)** | Tensión continua de batería |
| **Línea de datos** | **Bus LIN (A2 in / A3 out)** | Conexión en serie multiplexada |

**5. ANOMALÍAS FRECUENTES**  
Corte o interrupción del bus LIN; cruce e intercambio accidental de conectores entre varios servomotores durante intervenciones de reparación.

**6. COMPORTAMIENTO EN AVERÍA**  
Si se interrumpe la línea LIN en un servomotor, este y todos los servomotores conectados en serie por detrás (aguas abajo) quedan inoperativos y la unidad los registra como defectuosos. Si se cruzan los conectores, mantendrán las funciones antiguas hasta ejecutar un nuevo auto-direccionamiento, tras el cual responderán a trampillas equivocadas.

**7. CÓMO COMPROBARLO**  
Conectar el equipo de diagnosis VAS Scan Tool y realizar la lectura del registro de memoria de averías (DTC) de la unidad J255 o E265.

---

### **NOTA DE PROCESO — AUTO-DIRECCIONAMIENTO Y DIAGNÓSTICO DE SERVOMOTORES LIN / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Explicar el proceso de asignación automática de direcciones (auto-addressing) y la localización de averías por interrupción o intercambio de conectores en la cadena en serie de servomotores del sistema Climatronic.

**2. FUNDAMENTO**  
Los servomotores se conectan en serie (entrada A2 / salida A3) al módulo J255 o E265. La unidad de control utiliza el auto-direccionamiento para reconocer la secuencia física de los componentes en el mazo de cables y asignar a cada dirección el mando de la trampilla correspondiente.

**3. CONDICIONES PREVIAS**  
- Encendido conectado.  
- Equipo de diagnosis conectado al puerto OBD del vehículo.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis VAS Scan Tool.

**5. DESARROLLO**  
📷 IMAGEN: Esquema de conexión en serie del bus LIN entre servomotores con patinaje de bornes A1 a A4 — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, pág. 1  
1. **Diagnóstico de interrupción en la línea:** Si el bus LIN se corta en un punto de la cadena, la unidad de control registra un código de avería (DTC) en el servomotor afectado y en todos los servomotores conectados a continuación en la serie.  
2. **Efecto de intercambio de conectores:**  
   - *Antes del auto-direccionamiento:* Conservan la asignación y función antiguas.  
   - *Tras el auto-direccionamiento:* El sistema asigna funciones equivocadas a las trampillas debido al orden incorrecto de las clemas en el mazo de cables.

**6. VALORES DE REFERENCIA**  

| Borne del servomotor | Función en la cadena LIN | Condición de servicio |
|---|---|---|
| **Borne A1** | **Borne 31 (Masa)** | Masa de carrocería |
| **Borne A2** | **LIN in** | Entrada de datos desde el componente anterior |
| **Borne A3** | **LIN out** | Salida de datos hacia el componente posterior |
| **Borne A4** | **Borne 30** | Positivo permanente |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- **Interpretación de fallos múltiples:** La presencia de varios servomotores marcados como defectuosos suele estar originada por un único corte en la línea LIN del primer servomotor que encabeza el listado de averías.  
- **Error de montaje:** Conectar las clemas en posiciones cambiadas provoca que, tras realizar el auto-direccionamiento, las trampillas de aire funcionen cruzadas.

**8. VERIFICACIÓN FINAL**  
Ejecución del ciclo de auto-direccionamiento mediante la máquina VAS Scan Tool, borrado de la memoria de averías DTC y comprobación de la respuesta física de cada trampilla.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf», páginas 1 a 3 de 3. [completo]