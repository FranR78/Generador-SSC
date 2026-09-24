```yaml
tipo: fundamento
titulo: Circuito de aire acondicionado y estados de trabajo
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "2-4"
relacionados: [compresor, condensador, evaporador, valvula-expansion]
palabras: [circuito A/C, alta presión, baja presión, evaporador, condensador]
```

## Objeto
Definir la estructura general y las condiciones de presión y temperatura en las distintas etapas de un circuito de aire acondicionado automotriz. (págs. 2-4)

## Fundamento
El circuito de aire acondicionado transfiere el calor del habitáculo hacia el aire exterior utilizando las variaciones de presión y temperatura provocadas en el fluido frigorífico al circular por sus componentes principales. (págs. 2-4)

## Desarrollo
El circuito está formado por el compresor, el condensador, la válvula de expansión y el evaporador:
- **Entrada al compresor:** El fluido frigorífico entra a baja presión (3 bars) y baja temperatura (5 ºC). (pág. 4)
- **Compresión:** El compresor eleva la presión y temperatura del gas hasta alcanzar 20 bars y 110 ºC. (pág. 4)
- **Condensación:** En el condensador, el gas cede calor al aire exterior (a 35 ºC) y se condensa saliendo en estado líquido a 19 bars y 60 ºC. (pág. 4)
- **Expansión y evaporación:** Tras atravesar el elemento de expansión, el fluido entra al evaporador a 3 bars y -1 ºC, absorbiendo el calor del aire del habitáculo y permitiendo impulsar aire acondicionado a 10 ºC hacia el interior. (pág. 4)

📷 IMAGEN: Diagrama del circuito de A/C con indicación de presiones y temperaturas en compresor, condensador, evaporador y aire exterior — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 4

## Valores de referencia
- Presión y temperatura a la salida del compresor: 20 bars y 110 ºC. (pág. 4)
- Presión y temperatura a la salida del condensador: 19 bars y 60 ºC. (pág. 4)
- Presión y temperatura a la entrada del evaporador: 3 bars y -1 ºC. (pág. 4)
- Presión y temperatura a la salida del evaporador / entrada al compresor: 3 bars y 3 ºC a 5 ºC. (pág. 4)
- Temperatura del aire exterior de prueba: 35 ºC. (pág. 4)
- Temperatura del aire acondicionado impulsado al habitáculo: 10 ºC. (pág. 4)

## Errores de concepto frecuentes
- Creer que la presión del fluido frigorífico se mantiene constante a lo largo de todo el circuito sin dividirse en lado de alta y lado de baja presión. (pág. 4)

---

```yaml
tipo: fundamento
titulo: Confort térmico e higrometría en el habitáculo
entidad: higrometria-y-confort
area: climatizacion
sistema: distribucion-aire
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "5-9"
relacionados: [ciclo-frigorifico]
palabras: [confort térmico, higrometría, humedad relativa, fuentes de calor, zona de confort]
```

## Objeto
Definir las condiciones de equilibrio térmico, temperatura y tasa de humedad necesarias para garantizar la zona de confort de los ocupantes dentro del habitáculo. (págs. 5-9)

## Fundamento
El cuerpo humano busca estar en un estado de equilibrio térmico con el ambiente. Si el entorno está frío (20 ºC) el cuerpo cede calorías; si está caluroso (28 ºC) el cuerpo no puede ceder calorías acumulando calor. La higrometría mide la humedad relativa del aire regulando la evaporación del sudor y la sensación térmica. (págs. 7-9)

## Desarrollo
La higrometría es la relación entre la cantidad de agua contenida en el aire y la cantidad máxima que podría contener en las mismas condiciones de presión y temperatura. La zona de confort térmico queda delimitada por una combinación de temperatura ambiental entre 20 ºC y 28 ºC y una tasa de humedad relativa comprendida entre el 30% y el 70%. Fuera de estos límites se producen sensaciones extremas:
- Con humedad inferior al 30%: frío seco (con bajas temperaturas) o calor con deshidratación (con altas temperaturas). (pág. 9)
- Con humedad superior al 70%: frío con niebla (con bajas temperaturas) o calor con sudoración (con altas temperaturas). (pág. 9)

📷 IMAGEN: Gráfica de la zona de confort térmico en función de la temperatura y el porcentaje de humedad relativa del aire — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 9

## Valores de referencia
- Temperatura ambiente en estado de equilibrio corporal (ambiente templado): 20 ºC a 28 ºC. (págs. 7, 9)
- Margen de humedad relativa dentro de la zona de confort: entre 30% y 70%. (pág. 9)
- Límite inferior de humedad seca: < 30%. (pág. 9)
- Límite superior de humedad saturada: > 70%. (pág. 9)

## Errores de concepto frecuentes
- Evaluar el confort térmico atendiendo únicamente a la temperatura del aire e ignorando el impacto de la humedad relativa (higrometría). (págs. 8-9)

---

```yaml
tipo: fundamento
titulo: Intercambios térmicos, calor sensible y calor latente
entidad: ciclo-frigorifico
variante: intercambios-termicos
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "10-18"
relacionados: [refrigerante-r134a]
palabras: [calor sensible, calor latente, cambio de estado, ebullición, equilibrio térmico]
```

## Objeto
Explicar los principios físicos de la transferencia de energía térmica, la distinción entre calor sensible y latente y la curva de cambio de estado de las sustancias. (págs. 10-18)

## Fundamento
Cuando dos cuerpos o fluidos entran en contacto, el calor fluye siempre de forma natural desde el cuerpo más caliente hacia el más frío hasta que sus temperaturas se igualan en la temperatura de equilibrio. (págs. 11-12)

## Desarrollo
- **Calor sensible:** Cantidad de calor suministrada a un cuerpo que provoca un aumento de su temperatura sin alterar su estado físico (por ejemplo, calentar agua líquida de 20 ºC a 100 ºC). (pág. 13)
- **Calor latente:** Cantidad de energía térmica necesaria para provocar un cambio de estado físico en una sustancia sin que varíe su temperatura durante el proceso (meseta de cambio de fase). (pág. 14)
- **Cambio de estado:** Durante la ebullición del agua a 100 ºC (a presión atmosférica), la sustancia se encuentra en fase difásica (coexisten líquido y gas). El calor aportado durante esa meseta es el calor latente de vaporización. (págs. 15-17)

## Valores de referencia
- Calor sensible de 1 kg de hielo (-10 ºC a 0 ºC): +20 kJ. (pág. 18)
- Calor latente de fusión de 1 kg de hielo (a 0 ºC): +335 kJ. (pág. 18)
- Calor sensible de 1 kg de agua (0 ºC a 20 ºC): +85 kJ. (pág. 18)
- Calor sensible de 1 kg de agua (20 ºC a 100 ºC): +335 kJ. (pág. 18)
- Calor latente de vaporización de 1 kg de agua (a 100 ºC): +2250 kJ. (pág. 18)

## Errores de concepto frecuentes
- Asumir que la adición continua de calor a un líquido hirviendo provoca necesariamente un aumento de su temperatura durante el cambio de estado. (pág. 14)

---

```yaml
tipo: fundamento
titulo: Entalpía, volumen específico y ebullición por vacío
entidad: ciclo-frigorifico
variante: entalpia-y-termodinamica
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "19-24"
relacionados: [refrigerante-r134a, compresor, tuberias-y-racores]
palabras: [entalpía, volumen de fluido, canalización HP, canalización BP, ebullición por vacío]
```

## Objeto
Describir el concepto de entalpía, la diferencia de volumen entre las fases líquida y gaseosa del refrigerante R134a y el efecto de la presión sobre la temperatura de ebullición. (págs. 19-24)

## Fundamento
La entalpía (H = U + P x V) mide la energía contenida en un cuerpo por unidad de masa. El trabajo mecánico suministrado por el compresor eleva la entalpía del fluido frigorífico. (págs. 20-21)

## Desarrollo
- **Variación de entalpía:** Al comprimir 1 kg de fluido suministrándole 1 julio de trabajo mecánico, su entalpía se incrementa en 1 J/kg. (pág. 21)
- **Volumen específico del refrigerante:** El volumen que ocupa una masa de gas es sustancialmente mayor que el volumen que ocupa esa misma masa en estado líquido. En el caso del R134a a 20 ºC, una masa de 1,2 kg ocupa 1 litro en estado líquido y pasa a ocupar 31 litros en estado gaseoso. Por este motivo, las canalizaciones de alta presión (HP) con fluido líquido son de pequeño diámetro, mientras que las canalizaciones de baja presión (BP) con fluido en estado gaseoso son de mayor diámetro. (pág. 22)
- **Ebullición por vacío:** El punto de ebullición de un líquido depende directamente de la presión sobre su superficie: al reducir la presión externa (hacer vacío a 0 bar), el agua entra en ebullición a temperaturas muy bajas (como agua a 30 ºC). (págs. 23-24)

## Valores de referencia
- Masa de referencia de R134a a 20 ºC: 1,2 kg. (pág. 22)
- Volumen de 1,2 kg de R134a líquido a 20 ºC: 1 litro. (pág. 22)
- Volumen de 1,2 kg de R134a gaseoso a 20 ºC: 31 litros. (pág. 22)
- Temperatura de ebullición del agua a vacío (0 bar): 30 ºC. (pág. 24)

## Errores de concepto frecuentes
- Diseñar o instalar tuberías de baja presión (BP) y alta presión (HP) del mismo diámetro ignorando la gran diferencia de volumen específico entre el líquido y el gas. (pág. 22)
- Suponer que el agua solo puede hervir alcanzando 100 ºC independientemente del nivel de presión o vacío existente en la instalación. (págs. 23-24)

---

COBERTURA: documento «CLIMATIZACION INTRODUCCION.PDF», páginas 1 a 24 de 249. queda pendiente desde la página 25