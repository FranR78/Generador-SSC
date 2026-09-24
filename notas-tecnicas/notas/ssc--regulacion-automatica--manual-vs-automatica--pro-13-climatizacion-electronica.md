---
id: ssc.regulacion-automatica.manual-vs-automatica.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 152
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Comparativa entre climatización manual y regulación automática"
menu: "Comparativa entre climatización manual"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: manual-vs-automatica
area: climatizacion
sistema: "control-climatizacion"
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 100-101"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["climatización manual", "climatización automática", "servomotores", "UCE", "sensores"]
---

## Objeto

Diferenciar la arquitectura, el modo de gestión y la intervención del conductor entre los sistemas de aire acondicionado manuales y los climatizadores automáticos (págs. 100-101).

## Fundamento

En el sistema manual el conductor realiza las funciones de unidad de control y actuador ajustando mandos mecánicos por cable; en el sistema automático una UCE procesa información de múltiples sensores y comanda servomotores con potenciómetro de realimentación (págs. 100-101).

## Desarrollo

Características comparativas:
1. Climatización manual:
   - El movimiento de las trampillas de mezcla y distribución se realiza mediante cables conectados físicamente al panel de mandos (pág. 100).
   - El caudal de aire depende de la selección manual entre las 4 velocidades de giro de la turbina (págs. 100-101).
   - El conductor debe corregir manualmente de forma continua las fluctuaciones de temperatura provocadas por cambios en el clima exterior, la velocidad de marcha o la temperatura del refrigerante del motor (pág. 100).
2. Climatización automática:
   - El conductor únicamente selecciona la temperatura de confort deseada (pág. 101).
   - La UCE del climatizador recibe lecturas de sensores térmicos (entrada de aire, salida del evaporador, difusor central, zona pies, interior, exterior, radiación solar) e información vía Can-Bus (velocidad de marcha, r.p.m. del motor, tiempo parado) (pág. 101).
   - La UCE calcula las señales de salida para alimentar servomotores eléctricos que posicionan las trampillas, modula el regulador de la turbina de aire fresco y memoriza las averías en su registro de diagnóstico (pág. 101).

## Valores de referencia

- Velocidades de selección manual de la turbina: 4 velocidades (pág. 100).

## Errores de concepto frecuentes

- Asumir que en un climatizador automático el conductor debe reajustar los mandos cuando varía la velocidad del vehículo o la temperatura del motor (págs. 100-101).

## Imágenes requeridas

- Esquema comparativo de la unidad climática manual con mando por cables frente a la unidad automática provista de servomotores y sensores — Fuente: PRO. Climatización Electrónica.pdf, págs. 100-101
