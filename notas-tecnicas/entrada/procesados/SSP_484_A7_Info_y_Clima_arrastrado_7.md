### **NOTA DE ELEMENTO — SENSOR DE HUMEDAD EN EL CONDUCTO DE ADMISIÓN DE AIRE FRESCO G657**
CÓDIGO: G657  
UBICACIÓN: Conducto de admisión de aire fresco, junto a la rejilla atrapahojas.  
APLICACIÓN: Climatización Climatronic de tres y cuatro zonas.

**1. MISIÓN**  
Determinar la temperatura y el contenido de humedad del flujo de aire fresco de entrada. Transmitir los datos para que la unidad de control Climatronic J255 calcule la humedad relativa del aire aspirado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Mide la temperatura y la humedad mediante sus elementos sensores integrados situados en el caudal de aire. Envía los datos de medición a través del bus LIN a la unidad de control de la red de a bordo J519. Desde la unidad J519, la información se reenvía al módulo Climatronic J255 para calcular la humedad relativa.

**3. CARACTERÍSTICAS**  
- **En el sistema de tres zonas:** Consta de un sensor de humedad del aire y un sensor de temperatura.  
- **En el sistema de cuatro zonas:** El sensor G657 se combina en un único conjunto con el sensor de calidad del aire G238.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tiempo de configuración de G238** | **Aprox. 2 minutos** | Tras conectar el encendido (Ignition ON) |

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CÁLCULO DE HUMEDAD Y CONTROL DE RECIRCULACIÓN EN TRES Y CUATRO ZONAS / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el flujo de datos de humedad, temperatura y calidad del aire desde el conducto de admisión hacia la unidad Climatronic J255 para el cálculo de la humedad relativa y el control de recirculación de aire.

**2. FUNDAMENTO**  
El flujo de aire fresco entrante es evaluado por el sensor G657. Las señales se transmiten vía bus LIN a la unidad J519 y posteriormente a la unidad J255 para obtener el valor de humedad relativa. En los sistemas de cuatro zonas, la integración del sensor G238 añade la función de control automático de recirculación tras una fase de inicialización.

**3. CONDICIONES PREVIAS**  
Encendido conectado.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Disposición del sensor de humedad G657 solo y combinado con el sensor de calidad del aire G238 en el conducto de admisión — Fuente: SSP 484 A7 Info y Clima (arrastrado) 7.pdf, pág. 51  
- **Sistema de tres zonas:** El sensor G657 determina la temperatura y la humedad en el conducto de aire fresco. Envía los datos mediante bus LIN al módulo de la red de a bordo J519, el cual transmite la información a la unidad Climatronic J255 para calcular la humedad relativa.  
- **Sistema de cuatro zonas:** El sensor G657 combina en el mismo módulo el sensor de humedad, el sensor de temperatura y el sensor de calidad del aire G238. El sistema gestiona además el control automático de la recirculación de aire. El sensor G238 requiere aprox. 2 minutos para configurar el sistema tras dar el contacto.

**6. VALORES DE REFERENCIA**  

| Parámetro / Sistema | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Inicialización de recirculación (G238)** | **Aprox. 2 minutos** | Tras conectar el encendido (Ignition ON) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar verificar la función de recirculación automática inmediatamente después de dar el contacto en sistemas de cuatro zonas: el sensor G238 necesita un tiempo de configuración inicial de aprox. 2 minutos.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 7.pdf», páginas 51 a 51 de 51. [completo]

---
🔍 ¿Quieres que preparemos un resumen global o una ficha de repaso comparativa con todos los sensores de temperatura y humedad analizados en las fuentes del cuaderno?