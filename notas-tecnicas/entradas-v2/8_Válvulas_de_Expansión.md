```yaml
tipo: componente
titulo: Válvula de expansión con bulbo exterior
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "8. Válvulas de Expansión.pdf"
paginas: "74-75, 79-80"
relacionados: [evaporador, condensador, estrangulador, compresor]
palabras: [bulbo exterior, termostato, válvula de bola, diafragma, muelle regulador]
```

## Misión
Gasificar el agente frigorífico líquido procedente del condensador justo antes de su entrada al evaporador, regulando el caudal de fluido que se introduce en el evaporador en función de la temperatura de salida del propio evaporador. Constituye el punto de división entre la zona de alta y baja presión del circuito de aire acondicionado.

## Tipos y características
- Válvula de expansión monobloque con bulbo sensor térmico exterior situado sobre la tubería de salida del evaporador.
- Empleada en modelos de vehículos más antiguos.
- Consta de termostato con tubo sensor y bulbo exterior cargado con un gas especial, diafragma, eje de transmisión, válvula de bola y muelle regulador interno.
- Viene preajustada de fábrica (no debe manipularse el tapón inferior ni deformar el tubo del sensor).

## Principio de funcionamiento
El gas que sale del evaporador entra en la válvula por la zona próxima al termostato con bulbo sensor. Sobre la válvula de bola actúan tres fuerzas: la fuerza de apertura del gas del bulbo, la presión del evaporador que actúa sobre el diafragma en dirección contraria a la apertura, y la presión del muelle que cierra la bola.
- **Temperatura alta a la salida del evaporador:** El gas del termostato se expande, aumenta su volumen y empuja sobre el eje. La válvula de bola se abre y aumenta el caudal de fluido hacia el evaporador para incrementar la capacidad de refrigeración.
- **Temperatura baja a la salida del evaporador:** El gas del termostato reduce su volumen, el eje sube y el muelle cierra la válvula de bola, reduciendo el caudal de fluido hacia el evaporador.

📷 IMAGEN: Esquema seccionado de la válvula de expansión con bulbo exterior y fuerzas que actúan sobre la válvula de bola — Fuente: 8. Válvulas de Expansión.pdf, pág. 74-75

## Valores de trabajo
- **Ajuste de fábrica:** Preajustada de origen (no admite regulación manual).
- **Tiempo mínimo de vacío profundo en sustitución:** 45 minutos.
- **Régimen del motor para pruebas de diagnóstico:** 1.500-1.700 r.p.m.

## Anomalías frecuentes
- Plegado, deformación o rotura del tubo del sensor del termostato (pérdida del gas especial).
- Bloqueo de la válvula de bola en posición abierta o cerrada por suciedad o congelación de humedad.
- Ausencia o colocación defectuosa del aislamiento térmico del bulbo exterior.

## Comportamiento en avería
- **Válvula bloqueada en posición cerrada:** Falta de rendimiento frigorífico por ausencia de caudal en el evaporador; generación de depresión en la línea de baja en sistemas con compresor fijo o ralentí irregular en sistemas con compresor variable.
- **Válvula bloqueada en posición abierta:** Entrada excesiva de líquido al evaporador con riesgo de retorno de líquido al compresor y formación de escarcha en el tubo de baja.

## Cómo comprobarlo
- **Prueba de frío al bulbo (motor a 1.500-1.700 r.p.m.):**
  - *Compresor fijo:* Descenso gradual de la presión hasta valores negativos (depresión). Al marcar depresión, desconectar el equipo de A/C y seguir enfriando la válvula; la depresión debe permanecer constante al menos 3 minutos (si la depresión sube, el compresor no trabaja correctamente).
  - *Compresor variable:* Ralentí irregular cuando la válvula está totalmente cerrada.
- **Prueba de calor al bulbo (motor a 1.500-1.700 r.p.m.):**
  - *Compresor fijo:* Aumento de la presión de baja y disminución gradual de la presión de alta.
  - *Compresor variable:* Formación de escarcha en el tubo de baja cuando la válvula abre completamente.

## Mantenimiento
- Sustituir la válvula ante cualquier defecto de funcionamiento (no admite ajuste ni reparación).
- Recuperar el refrigerante con la estación de carga adecuada, limpiar el circuito y realizar un vacío profundo de al menos 45 minutos.
- Colocar adecuadamente los aislamientos térmicos que lleve originalmente el bulbo.

---

```yaml
tipo: componente
titulo: Válvula de expansión con bulbo interior
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "8. Válvulas de Expansión.pdf"
paginas: "76-77, 79-80"
relacionados: [evaporador, condensador, compresor]
palabras: [bulbo interior, cabezal térmico, taladros de compensación, diafragma, monobloque]
```

## Misión
Regular de forma autónoma el caudal de agente frigorífico que se rocía al interior del evaporador en función de la temperatura de salida del gas en el lado de baja presión, dividiendo el circuito en las zonas de alta y baja presión.

## Tipos y características
- Válvula de expansión monobloque muy compacta con bulbo interior situado en el cabezal térmico.
- Modelo utilizado en la mayoría de los vehículos actuales.
- Consta de cabezal térmico con carga de gas especial, diafragma, taladros para la compensación de presión del evaporador, eje de transmisión, válvula de bola y muelle regulador.
- Se suministra e instala obligatoriamente con una protección de aislamiento térmico exterior.

## Principio de funcionamiento
El gas del cabezal térmico actúa sobre la cara superior del diafragma, mientras que la presión del gas a la salida del evaporador llega a la cara inferior a través de los taladros de compensación de presión.
- **Aumento de temperatura a la salida del evaporador (por mayor demanda térmica o más velocidad de la turbina):** Aumenta la presión (Pa) y el volumen de la carga de gas del bulbo. A través del diafragma y del eje, se vence el muelle y se abre la válvula de bola, aumentando la sección de paso de fluido hacia el evaporador.
- **Disminución de temperatura a la salida del evaporador:** Cae la presión (Pb) y el volumen en la cámara del bulbo. El muelle empuja el eje hacia arriba, cerrando la válvula de bola y reduciendo el caudal de agente frigorífico.

📷 IMAGEN: Sección y esquema de funcionamiento de la válvula de expansión con bulbo interior (aumento de presión Pa y disminución Pb) — Fuente: 8. Válvulas de Expansión.pdf, pág. 76-77

## Valores de trabajo
- **Ajuste de fábrica:** Preajustada e inmodificable.
- **Tiempo mínimo de vacío profundo en sustitución:** 45 minutos.
- **Régimen del motor para pruebas de diagnóstico:** 1.500-1.700 r.p.m.

## Anomalías frecuentes
- Ausencia o montaje defectuoso de la protección de aislamiento térmico (altera la curva de regulación programada por afectación de la temperatura ambiente).
- Bloqueo mecánico del eje o de la válvula de bola por suciedad o virutas en el circuito.
- Fuga de la carga de gas especial del cabezal térmico.

## Comportamiento en avería
- **Falta de aislamiento térmico:** Modificación de la curva característica de regulación y rendimiento térmico deficiente o inestable del climatizador.
- **Válvula bloqueada en posición cerrada:** Imposibilidad de enfriar el aire del habitáculo; generación de vacío en baja presión (compresor fijo) o ralentí irregular (compresor variable).
- **Válvula bloqueada en posición abierta:** Exceso de refrigerante en el evaporador, formación de escarcha en la tubería de baja y riesgo de golpe de líquido en el compresor.

## Cómo comprobarlo
- **Prueba de frío al bulbo (motor a 1.500-1.700 r.p.m.):**
  - *Compresor fijo:* Descenso gradual de la presión hasta valores negativos (depresión). Tras desconectar el equipo de A/C manteniendo frío en la válvula, la depresión debe mantenerse constante al menos 3 minutos (si la depresión sube, el compresor no trabaja correctamente).
  - *Compresor variable:* Ralentí irregular cuando la válvula cierra totalmente.
- **Prueba de calor al bulbo (motor a 1.500-1.700 r.p.m.):**
  - *Compresor fijo:* Subida de presión en baja y caída gradual de la presión de alta.
  - *Compresor variable:* Formación de escarcha en la tubería de baja cuando la válvula abre completamente.

## Mantenimiento
- Sustitución completa ante cualquier defecto (unidad monobloque no reparable).
- Recuperar refrigerante con estación de carga, realizar vacío profundo de al menos 45 minutos y reemplazar imperativamente todas las juntas tóricas por otras nuevas.
- Colocar obligatoriamente la protección de aislamiento térmico original.

---

```yaml
tipo: componente
titulo: Estrangulador
entidad: estrangulador
area: climatizacion
sistema: circuito-frigorifico
fuente: "8. Válvulas de Expansión.pdf"
paginas: "78"
relacionados: [evaporador, condensador, deposito-colector, tuberias-y-racores]
palabras: [orificio calibrado, taladro calibrado, tamiz pulverizador, tamiz filtrante, código de colores]
```

## Misión
Regular el caudal de agente frigorífico mediante un paso estrecho, mantener la presión y el estado líquido en la zona de alta presión, provocando una caída rápida de presión, enfriamiento y pulverización del refrigerante a la entrada del evaporador. Constituye el punto de división entre los lados de alta y baja presión del circuito.

## Tipos y características
- Elemento de estrangulamiento de sección fija que sustituye a la válvula de expansión térmica.
- Formado por un cuerpo plástico con juntas tóricas de sellado exterior, filtro de tamiz de entrada, tubo con taladro calibrado y tamiz pulverizador a la salida.
- Codificado en **6 colores diferentes** según el diámetro del tubo calibrado.
- Según el fabricante del vehículo:
  - Integrado en el tubo de alta (requiere sustituir el tubo completo en algunos modelos de Chrysler, Renault o Ford).
  - Recambio independiente de estrangulador extraíble, susceptible de limpieza y reutilización cambiando las juntas tóricas.

📷 IMAGEN: Despiece y vista seccionada del estrangulador con tamiz filtrante, junta tórica, tubo calibrado y tamiz pulverizador — Fuente: 8. Válvulas de Expansión.pdf, pág. 78

## Principio de funcionamiento
El refrigerante líquido a alta presión y temperatura atraviesa el tamiz filtrante previo. Al pasar por el taladro calibrado estrecho, sufre una caída rápida de presión y temperatura, iniciando una evaporación parcial. A la salida, el tamiz pulverizador atomiza el agente frigorífico antes de su entrada al evaporador. Las juntas tóricas garantizan que el fluido pase exclusivamente por el orificio calibrado.

## Valores de trabajo
- **Código de colores:** 6 colores diferentes vinculados al diámetro del tubo calibrado.
- **Sentido de montaje:** Orientación marcada por una flecha grabada en el cuerpo (flecha siempre dirigida hacia el evaporador).

## Anomalías frecuentes
- Obstrucción del tamiz filtrante o del taladro calibrado por impurezas, restos de desecante o virutas del compresor.
- Deterioro de las juntas tóricas exteriores de sellado entre la zona de alta y baja presión.
- Montaje invertido (en sentido contrario a la flecha).

## Comportamiento en avería
- **Obstrucción total o parcial:** Falta de caudal de refrigerante en el evaporador, caída excesiva de la presión de baja y anulación del rendimiento frigorífico.
- **Fallo de sellado en juntas tóricas:** El fluido salta el orificio calibrado por el exterior, impidiendo la caída de presión necesaria para la evaporación.

## Cómo comprobarlo
- Inspeccionar visualmente la presencia de suciedad o virutas metálicas en el tamiz de entrada tras el desmontaje.
- Comprobar la estanqueidad de las juntas tóricas y verificar que la flecha del sentido de montaje apunte hacia el evaporador.

## Mantenimiento
- En caso de sustitución, colocar imperativamente un estrangulador del **mismo color** (mismo diámetro de paso).
- Respetar estrictamente el sentido de montaje indicado por la flecha hacia el evaporador.
- Si dispone de recambio independiente, se puede limpiar y volver a montar cambiando las juntas tóricas; si está integrado en la tubería de alta, sustituir el tubo completo.

---

COBERTURA: documento «8. Válvulas de Expansión.pdf», páginas 74 a 80 de 80. [completo]