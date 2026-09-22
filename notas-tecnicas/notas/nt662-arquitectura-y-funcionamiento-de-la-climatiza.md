---
id: ssc.sin-clasificar.arquitectura-y-funcionamiento-de-la-climatizacion-regulada-automatica-y-semiautomatica
modulo: ssc
unidad: sin-clasificar
nt: 662
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Funcionamiento De La Climatización Regulada (Automática Y Semiautomática)"
menu: "Arquitectura Y Funcionamiento De La Cl"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe la lógica de control, los sensores de entrada, la estrategia de cálculo y la gestión de actuadores en sistemas de climatización electrónica. Aplica a climatizadores semiautomáticos y automáticos.

## Fundamento

Regulación en bucle cerrado gobernada por un Calculador de Climatización. La unidad procesa las variables de temperatura interior, temperatura exterior, radiación solar y temperatura del evaporador para accionar servomotores de mezcla, recirculación y distribución, manteniendo de forma estable la temperatura de confort fijada en el display.

## Desarrollo

* **Entradas de información al Calculador:**
  - Sonda de temperatura interior del habitáculo.
  - Sonda de temperatura exterior.
  - Sonda de temperatura del evaporador.
  - Selección del nivel de confort (temperatura consignada en el cuadro de mandos).
  - Petición de marcha/parada A/C e información de recirculación.
* **Procesamiento y Lógica de Control:**
  - El calculador evalúa la diferencia entre la temperatura ambiente y la consigna.
  - Para evitar choques térmicos perjudiciales, la unidad de control no autoriza un salto térmico superior a 20 ºC entre el habitáculo interior y el exterior.
  - Asigna una distribución térmica en el habitáculo donde la temperatura es ligeramente más alta en la zona de los pies que a nivel de la cabeza para maximizar el confort del individuo.
* **Salidas y Gestión de Actuadores:**
  - **En Climatización Semiautomática:** La UCE regula electrónicamente el nivel de confort (motor de mezcla), la velocidad del motoventilador del habitáculo y la trampilla de reciclaje.
  - **En Climatización Automática:** Además de los parámetros de la semiautomática, la UCE gobierna de forma automatizada los motores de repartición para decidir por qué difusores saldrá el aire (parabrisas, frontal o pies).

## Valores de referencia

| Criterio de Regulación | Valor Límitado por Calculador |
| :--- | :--- |
| Diferencia máxima de temperatura autorizado (interior vs. exterior) | Máximo 20 ºC de salto térmico |
| Gradiente térmico vertical | Temperatura en pies > Temperatura en cabeza |

## Interpretación y errores frecuentes

* Si la sonda de temperatura exterior se avería indicando valores extremadamente fríos, el calculador cortará el compresor para no congelar la instalación.
* Confundir climatización semiautomática con automática; la semiautomática exige la selección manual de los difusores de salida por parte del usuario.

## Verificación final

Verificar que la pantalla muestra la temperatura seleccionada y que el calculador ajusta automáticamente la velocidad del ventilador y la trampilla de mezcla al calentar o enfriar las sondas térmicas.

## Imágenes requeridas

- Esquema sinóptico de entradas y salidas en climatización regulada — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 55
- Esquema general del circuito eléctrico con calculador de climatización y display — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 57
- Esquema de componentes y conexiones de climatización semiautomática — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 76
- Esquema de conexiones de climatización automática completa con motores individuales — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 78
- Paneles de mandos con display digital de climatizaciones reguladas — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 109, 110, 111
