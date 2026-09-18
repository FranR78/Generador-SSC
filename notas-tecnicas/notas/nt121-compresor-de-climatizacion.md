---
nt: 121
titulo: "Compresor De Climatización"
ubicacion: "Montado en el bloque motor mediante soporte metálico y arrastrado por la correa de accesorios (Poly-V) [42-44]"
aplicacion: "Todos los sistemas de aire acondicionado y climatización de vehículos [1, 42]"
menu: "Compresor De Climatización"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Aspirar el agente refrigerante en estado gaseoso procedente del evaporador a baja presión y comprimirlo para elevar su presión y temperatura, bombeándolo hacia el condensador [26, 42, 45].

## Principio de funcionamiento

Bomba de desplazamiento positivo. Según su arquitectura interna comprende:  
- *Alternativo de pistones (York, Sanden axial):* los pistones desplazan el fluido alternativamente en los cilindros mediante válvulas de lámina de aspiración y descarga impulsados por cigüeñal o disco inclinado [46-48].  
- *Rotativo de paletas/aletas:* un rotor excéntrico con paletas desplaza y comprime el gas contra las paredes del estator [45, 49, 50].  
- *Rotativo de espiral (Scroll):* una espiral giratoria orbita excéntricamente dentro de una espiral fija creando cámaras de compresión progresivas hacia el centro [51, 52].  
- *Cilindrada variable interna (Harrison V5, Sanden):* la inclinación del plato oscilante/disco de mando varía entre el mínimo y el máximo en función de la diferencia de presión entre el cárter interno y la baja presión, regulada por un fuelle neumático interno [53-56].  
- *Cilindrada variable externa (Denso 6SEU12):* la UCE regula electrónicamente el ángulo del disco oscilante alimentando una electroválvula modulada por ancho de pulso (PWM a 500 Hz). Sin corriente la válvula abre conectando alta presión con el cárter (mínimo rendimiento, +2%); al aumentar la señal Duty Cycle la válvula cierra reduciendo la presión del cárter y aumentando la inclinación a plena carga (+98%) [57-62].

## Características

Carcasa de aluminio inyectado, árbol/eje con retén frontal, plato de válvulas de aspiración y descarga, tapón de aceite, racores de conexión de alta y baja presión, y válvula de seguridad por descarga de gas [46, 47, 49, 51, 55, 63]. En modelos de regulación externa incluye conector eléctrico de 2 vías para la electroválvula [64, 65].

## Valores de trabajo

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Frecuencia de control electroválvula (Denso)** | 500 Hz (señal cuadrada PWM) | Conexión activa de la UCE [60] |
| **Rango de activación / rendimiento** | +2% (mínima carga) a +98% (plena carga) | Variable según demanda térmica [61, 62, 66] |
| **Presión de descarga típica (HP)** | 10 a 20 bar (fijo) / 6 a 13 bar (variable) | A 1.500-1.800 rpm y 30 ºC exterior [36, 41] |
| **Presión de aspiración típica (LP)** | 0.8 a 2.2 bar (fijo) / 1.8 a 2.1 bar (variable) | A 1.500-1.800 rpm y 30 ºC exterior [36, 41] |

## Anomalías frecuentes

Gripado interno por falta de lubricación o acidez del aceite; rotura de láminas/válvulas por golpe de ariete (aspiración de líquido); fallo eléctrico u obstrucción por suciedad de la electroválvula de regulación externa; fuga por el retén del eje [20, 31, 39, 40, 67].

## Comportamiento en avería

- Compresor no comprime / no conecta: las presiones de alta y baja se igualan entre 4.5 y 6.0 bar [67].  
- Electroválvula bloqueada en mínimo rendimiento: la baja presión se mantiene alta y no genera aire frío [67, 68].  
- Electroválvula bloqueada en máximo rendimiento: el evaporador se congela y cesa el caudal de aire en las rejillas [68].

## Cómo comprobarlo

- En compresores convencionales: medir continuidad y alimentación de 12 V en la bobina del embrague [31, 67].  
- En compresor de regulación externa (Denso 6SEU12): verificar con osciloscopio la señal cuadrada de 500 Hz en la electroválvula y comprobar la resistencia de su bobina [59, 60].
