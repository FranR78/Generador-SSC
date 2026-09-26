---
id: ssc.maestra.deposito-colector
modulo: ssc
unidad: clima
nt: 1007
tipo: elemento
clase: componente
titulo: "Depósito colector de baja presión (Acumulador)"
codigo: "MASTER-ACUMULADOR-01"
menu: "Depósito colector de baja presión (Acu"
grupo: "Circuito frigorífico"
clave: deposito-colector
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: borrador
fusionadas: [57, 237, 281, 617, 687, 722, 787, 808]
huella: a43785c45949
modelo: gemini-3.5-flash
fuentes: "Fusión de 8 fuentes"
niveles:
  "Misión": basico
  "Tipos y características": basico
  "Principio de funcionamiento": intermedio
  "Valores de trabajo": intermedio
  "Anomalías frecuentes": avanzado
  "Comportamiento en avería": avanzado
  "Cómo comprobarlo": avanzado
  "Mantenimiento": intermedio
---

## Misión

El depósito colector de baja presión actúa como **depósito de expansión, reserva de refrigerante y colector de aceite** (NT57, pág. 81; NT281, págs. 85-86; NT722, pág. 31; NT808, págs. 30-31). Su función principal es **separar las fases líquida y gaseosa** a la salida del evaporador, garantizando que el compresor solo aspire gas libre de gotas (NT57, pág. 81; NT237, págs. 133, 135; NT281, págs. 85-86; NT617, págs. 12-13; NT687, págs. 37, 46, 57, 68; NT722, pág. 31; NT787, pág. 36; NT808, págs. 30-31). Esto protege mecánicamente al compresor evitando el **golpe de ariete o golpe de líquido** (NT687, pág. 46, 57, 71; NT787, pág. 36; NT808, págs. 30-31). También se encarga de **filtrar impurezas y absorber la humedad** del fluido mediante un deshidratador (NT237, págs. 133, 135; NT281, págs. 85-86; NT687, pág. 37, 46, 57, 68; NT722, pág. 31; NT787, pág. 36; NT808, págs. 30-31).

## Tipos y características

Este componente es un **depósito cilíndrico metálico de gran volumen**, mayor que los filtros de alta presión (NT57, pág. 81; NT237, págs. 132, 135; NT281, pág. 86; NT617, págs. 12-13; NT722, pág. 31; NT808, págs. 30-31). Se instala en la **línea de baja presión**, entre la salida del evaporador y la aspiración del compresor (NT237, págs. 132, 135; NT281, pág. 86; NT687, pág. 37, 46, 66, 68; NT787, pág. 36). Se usa en sistemas con **tubo de expansión o estrangulador** (NT57, pág. 81; NT617, págs. 12-13; NT687, pág. 37, 46, 66, 68; NT722, pág. 31; NT787, pág. 36) y con compresores de **cilindrada variable** (NT237, págs. 132, 135). Se ubica en una **zona caliente del vano motor** para facilitar la reevaporación del refrigerante líquido residual (NT57, pág. 81; NT281, pág. 86; NT722, pág. 31; NT808, págs. 30-31). Sus componentes internos principales son:
- **Carcasa cilíndrica** con tapones de protección para transporte (NT722, pág. 31; NT808, págs. 30-31).
- **Deflector** de entrada (NT237, págs. 132, 135).
- **Bolsa de desecante o deshidratador** de gran capacidad higroscópica (NT57, pág. 81; NT237, págs. 132, 135; NT281, pág. 86; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT808, págs. 30-31).
- **Caperuza o campana de plástico** superior (NT57, pág. 81; NT281, pág. 86; NT687, pág. 46, 68, 70, 71; NT722, pág. 31).
- **Tubo interno de aspiración** en forma de U (NT57, pág. 81; NT237, págs. 132, 135; NT281, pág. 86; NT617, págs. 12-13; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT808, págs. 30-31).
- **Orificio o taladro calibrado** inferior para el retorno de aceite, protegido por una **malla o tamiz filtrante** (NT57, pág. 81; NT237, págs. 132, 135; NT281, pág. 86; NT617, págs. 12-13; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT808, págs. 31).

### Variante con tubo en V En algunos sistemas, el acumulador integra en su interior un **tubo de salida en forma de V** en lugar de U, manteniendo la toma de aspiración en la parte superior (NT787, pág. 36).

## Principio de funcionamiento

El funcionamiento sigue este orden:
1. El fluido (mezcla de gas, líquido y aceite) entra al depósito por la parte superior y choca contra el **deflector** (NT57, pág. 81; NT237, págs. 133, 135; NT281, pág. 86; NT617, págs. 12-13; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT787, pág. 36; NT808, pág. 31).
2. Las gotas de líquido caen al fondo por **gravedad**, donde completan su evaporación gracias al calor del vano motor (NT237, págs. 133, 135; NT281, pág. 86; NT687, pág. 46, 68, 70, 71; NT787, pág. 36; NT808, pág. 31).
3. El deshidratador absorbe la **humedad** contenida en el refrigerante (NT57, pág. 81; NT237, págs. 133, 135; NT722, pág. 31).
4. El gas limpio asciende a la cúpula superior y entra por la **caperuza de plástico** hacia la boca del tubo en U (o V), siendo aspirado por el compresor libre de fase líquida (NT57, pág. 81; NT237, págs. 133, 135; NT281, pág. 86; NT617, págs. 12-13; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT787, pág. 36; NT808, pág. 31).
5. El aceite lubricante se acumula en el fondo y es succionado de forma **dosificada y progresiva** a través del taladro calibrado inferior del tubo en U, tras pasar por un tamiz filtrante, retornando emulsionado al compresor (NT57, pág. 81; NT237, págs. 133, 135; NT281, pág. 86; NT617, pág. 13; NT687, pág. 46, 68, 70, 71; NT722, pág. 31; NT808, pág. 31).

## Valores de trabajo

Los valores de funcionamiento y diseño del sistema son:
- Presión de trabajo en el tramo de baja presión: aprox. **2 bares** (NT281, págs. 85-86).
- Diámetro del orificio calibrado de retorno de aceite: **1 mm** (NT617, pág. 13; NT687, pág. 71).
- Tiempo mínimo de vacío profundo requerido: **45 minutos** (NT57, pág. 81).

## Anomalías frecuentes

- **Saturación del desecante** interno por absorción excesiva de humedad ambiental debido a aperturas del circuito o retirada prematura de los tapones (NT57, pág. 81; NT237, pág. 134; NT281, pág. 86; NT617, pág. 13; NT687, pág. 48, 71).
- **Obstrucción del taladro calibrado** de 1 mm de retorno de aceite por acumulación de posos o colmatación de su tamiz filtrante (NT57, pág. 81; NT237, pág. 134; NT281, pág. 86; NT617, pág. 13; NT687, pág. 48, 71; NT808, pág. 31).
- **Degradación interna** de la estructura del filtro (NT237, pág. 134).

## Comportamiento en avería

- **Pérdida de rendimiento de frío** y post-expansión en el acumulador debido a la saturación del desecante (NT237, pág. 134).
- **Formación de ácidos** corrosivos por la reacción del agua con el aceite, dañando el compresor de cilindrada variable (NT237, pág. 134).
- **Gripado mecánico del compresor** por falta de lubricación, al quedar el aceite estancado en el fondo del depósito por obstrucción del taladro (NT281, págs. 86, 139; NT617, pág. 13; NT687, pág. 46, 57, 71; NT808, págs. 30-31).
- **Golpe de ariete o golpe de líquido** en el compresor por el retorno de refrigerante en fase líquida (NT687, pág. 46, 57, 71; NT808, págs. 30-31).

## Cómo comprobarlo

- **Inspección térmica**: Verificar que la carcasa exterior se mantiene fría de forma uniforme durante el funcionamiento (NT281, pág. 86) y comprobar la **ausencia de escarcha** en la tubería de aspiración (NT687).
- **Inspección visual**: Comprobar que la carcasa metálica no presente golpes o daños externos (NT617, pág. 13).
- **Historial de mantenimiento**: Verificar el registro de sustituciones previas del componente (NT617, pág. 13).

## Mantenimiento

- **Recuperación de refrigerante**: Utilizar siempre una estación de carga para recuperar el fluido antes de desmontar el filtro (NT57, pág. 81).
- **Sustitución periódica**: Se recomienda cambiar el acumulador cada **2 años** (NT237, pág. 134).
- **Sustitución obligatoria**: Reemplazar imperativamente al abrir el circuito frigorífico (NT57, pág. 81; NT237, pág. 134; NT281, pág. 86), especialmente si permanece abierto más de **3 horas** o tras reparaciones de averías mayores (NT617, pág. 13; NT687, pág. 48; NT808, págs. 30-31).
- **Protección contra humedad**: Mantener los tapones de protección colocados en las conexiones hasta el instante previo a su montaje para evitar la saturación del desecante (NT57, pág. 81; NT281, pág. 86; NT722, pág. 31).
- **Vacío profundo**: Realizar un vacío en el circuito de al menos **45 minutos** antes de recargar el refrigerante (NT57, pág. 81).

## Imágenes requeridas

- [NT722_01] Esquema en sección del depósito colector indicando la caperuza de plástico, la entrada del evaporador, la salida al compresor, el deshidratador, el tubo en U, el tamiz filtrante y el taladro para aceite
- [NT787_01] Vista seccionada de un acumulador con tubo interno en V y toma de aspiración superior
- [NT237_01] Sección del acumulador con el deflector, desecante, tubo en U y orificio de retorno de aceite
