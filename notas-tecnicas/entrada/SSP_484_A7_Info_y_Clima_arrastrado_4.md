### **NOTA DE PROCESO — ESTRUCTURA E INTEGRACIÓN DE LA PLATAFORMA RADIO MEDIA CENTER (RMC) / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la arquitectura e integración de funciones de infotenamiento dentro de la plataforma Radio Media Center (RMC) y el sistema MMI Radio plus.

**2. FUNDAMENTO**  
A diferencia de los sistemas MMI de tercera generación que utilizan un módulo de radio independiente, la plataforma RMC unifica casi todas las funciones de hardware de infotenamiento y el sintonizador de radio en una única unidad central (J794), simplificando el cableado y la estructura de red del vehículo.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Módulos de control y funciones agrupadas en la unidad J794 del Radio Media Center — Fuente: SSP 484 A7 Info y Clima (arrastrado) 4.pdf, pág. 31  
- La plataforma Radio Media Center (RMC) agrupa en una única carcasa equivalente a un dispositivo de tamaño 1-DIN la mayoría de las funciones de infotenamiento.  
- Actúa como controlador central del sistema de infotenamiento.  
- Elimina el módulo de control de radio separado, integrando sus funciones directamente en la unidad de control de electrónica de información 1 J794.  
- En vehículos con equipamiento MMI Radio plus, la unidad J794 incorpora además un amplificador de audio adicional.  
- Agrupa y gestiona de forma centralizada las siguientes funciones y componentes:  
  * Reproductor de CD (R89).  
  * Unidad de control para la pantalla de información frontal (J523).  
  * Módulo de control de entrada por voz (J507).  
  * Conexión para fuentes de audio externas Audi Music Interface / AMI (R199).  
  * Lector de tarjetas SD.  
  * Transceptor de teléfono (R36).  
  * Interfaz con la unidad de control del sistema de sonido digital (J525).

**6. VALORES DE REFERENCIA**  

| Parámetro / Dimensión | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Tamaño del alojamiento del módulo RMC** | **1-DIN** | Estándar de montaje en salpicadero |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Buscar un módulo de control de radio independiente durante las tareas de diagnosis o sustitución: en la plataforma RMC la radio está integrada dentro de la propia unidad J794.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL DE ELECTRÓNICA DE INFORMACIÓN 1 J794**
CÓDIGO: J794  
UBICACIÓN: Salpicadero / consola central (alojamiento de formato 1-DIN).  
APLICACIÓN: Sistema de infotenamiento MMI Radio plus y plataforma Radio Media Center (RMC).

**1. MISIÓN**  
Actuar como la unidad de control central del sistema de infotenamiento, gestionando las funciones de radio, reproducción de audio, control de pantalla e interfaces de comunicación.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad electrónica centralizada que procesa las señales de las distintas fuentes de audio y multimedia. Integra el sintonizador de radio y, en versiones MMI Radio plus, un amplificador de audio adicional, coordinando el flujo de datos hacia la pantalla frontal, el sistema de sonido y los periféricos de comunicación.

**3. CARACTERÍSTICAS**  
Carcasa metálica compacta de tamaño 1-DIN. Dispone en su frontal de ranura para reproductor de CD (R89) y lecturas para tarjetas SD. Agrupa las funciones de J523, J507, R199, R36 y la conexión con J525.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Fallo general o parcial de la radio, pérdida de reproducción de audio/CD/SD, inoperatividad de la pantalla de información frontal o interrupción del diálogo por voz y telefonía.

**7. CÓMO COMPROBARLO**  
Efectuar la diagnosis electrónica conectando el equipo VAS Scan Tool y accediendo a través de la dirección de diagnóstico **5F - Electrónica de información 1**.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 4.pdf», páginas 31 a 31 de 31. [completo]