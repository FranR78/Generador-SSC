---
id: ssc.clima.regulacion-en-climatizacion-semiautomatica-y-automatica
modulo: ssc
unidad: clima
nt: 141
tipo: proceso
subtipo: fundamento
titulo: "Regulación En Climatización Semiautomática Y Automática"
menu: "Regulación En Climatización Semiautomá"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar las diferencias funcionales, variables de entrada y salidas de control gestionadas por la Unidad de Control Electrónico (UCE) en sistemas de climatización semiautomáticos y automáticos. Se aplica para la diagnosis electrónica y análisis de bloques de medida [171, 185].

## Fundamento

La climatización gestionada por UCE analiza las condiciones térmicas del vehículo comparando las variables de entrada (sensores) con la selección elegida por el usuario. En el sistema semiautomático, la UCE gestiona automáticamente la temperatura de mezcla pero el conductor controla manualmente la velocidad de la turbina y la distribución del aire [185]. En el sistema automático integral, la UCE gestiona de forma totalmente autónoma la temperatura, la distribución del aire por los difusores y la velocidad de la turbina [171].

## Condiciones previas

Tensión de encendido conectada y sistema de climatización activado desde el panel de mandos [171, 178, 185].

## Equipo y material

Unidad de control (UCE), sensores de temperatura, servomotores y equipo de diagnosis OBD [171, 185].

## Desarrollo

1. **Climatización Semiautomática:**  
   - *Variables de entrada:* Temperatura exterior, temperatura habitáculo, temperatura evaporador, temperatura aire mezclado, posición de selección de temperatura, interruptor A/C, selección de soplado (auto/manual), selección de reciclaje, régimen del motor e información de la ECU del motor [185].  
   - *Variables de salida:* Compresor A/C, motor de trampilla de mezcla, motor de trampilla de reciclaje, mando de ventilador del habitáculo, display/panel y diagnosis [185].  
2. **Climatización Automática:**  
   - *Variables de entrada (adicionales):* Temperatura del calefactor, posición de trampillas de distribución, presión del circuito A/C, sensor de radiación solar y distribución de aire [171].  
   - *Variables de salida (adicionales):* Motores de trampillas de distribución independientes [171].

## Valores de referencia

| Sistema | Grado de automatización de funciones |
|---|---|
| **Semiautomático** | Regula automáticamente la trampilla de mezcla (temperatura) [185] |
| **Automático** | Regula automáticamente mezcla, distribución y velocidad de turbina [171] |

## Interpretación y errores frecuentes

Si falla un sensor principal (ej. radiación solar o temperatura de habitáculo), la UCE adopta valores sustitutivos fijos restringiendo las funciones automáticas [171, 185].

## Verificación final

Comprobación del ajuste autónomo de las trampillas y velocidad de la turbina al modificar la temperatura seleccionada en el panel de mandos [171, 185].

## Imágenes requeridas

- Diagramas de bloques de variables de entrada, salida y UCE para climatización semiautomática y automática — Fuente: AA AUTOMOCION 1 Enero 2010 HELLA.pptx, diapositivas 445 y 446 [171, 185]
