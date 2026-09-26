---
id: ssc.maestra.higrometria-y-confort
modulo: ssc
unidad: clima
nt: 1010
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Estrés climatológico y márgenes de agrado térmico"
codigo: "NT_ESTRES_AGRADO_TERMICO"
menu: "Estrés climatológico y márgenes de agr"
grupo: "Control de climatización"
clave: higrometria-y-confort
area: climatizacion
sistema: "control-climatizacion"
estado: borrador
fusionadas: [151, 224, 251, 263, 320, 400, 539, 566, 663, 775]
huella: 8fc2705d65ac
modelo: gemini-3.6-flash
fuentes: "Fusión de 10 fuentes"
niveles:
  "Objeto": basico
  "Fundamento": intermedio
  "Desarrollo": intermedio
  "Valores de referencia": intermedio
  "Errores de concepto frecuentes": avanzado
---

## Objeto

Analizar la influencia de las condiciones higrotérmicas del habitáculo sobre la capacidad perceptiva y física del conductor, definiendo los márgenes de confort, bienestar y sobrecarga ambiental para garantizar la seguridad activa del vehículo (NT151, págs. 98-99; NT224, págs. 5, 9; NT251, pág. 1; NT263, págs. 26-27; NT320, págs. 2-3; NT400, pág. 45; NT539, págs. 4-5; NT566, pág. 9; NT663, págs. 2-11; NT775, pág. 8).

## Fundamento

El cuerpo humano alcanza el confort al mantenerse en **equilibrio térmico**, cediendo las calorías producidas sin sufrir deshidratación ni sudoración excesiva (NT224, págs. 6-9; NT775, pág. 8). Las temperaturas elevadas y la humedad alta generan sobrecarga térmica (**estrés climatológico**), lo que incrementa la transpiración, la temperatura corporal y la frecuencia cardíaca, reduciendo la oxigenación cerebral (NT151, págs. 98-99; NT251, págs. 1-2; NT263, págs. 26-27; NT539, págs. 4-5; NT663, pág. 11, 61). Según la OMS, el calor excesivo disminuye la concentración y el tiempo de reacción, generando un riesgo equivalente a la conducción bajo los efectos del alcohol (NT251, págs. 1-2; NT263, págs. 26-27; NT539, págs. 4-5).

## Desarrollo

El sistema de climatización deshidrata, enfría y depura el aire impulsado tanto en marcha como parado (NT263, págs. 26-27; NT539, págs. 4-5; NT566, pág. 9; NT663, págs. 54, 60).

- **Higrometría y humedad**: la higrometría es la relación porcentual entre la cantidad de agua en el aire y la máxima posible bajo iguales condiciones de presión y temperatura (NT224, pág. 8; NT775, pág. 8). La zona de confort exige una **humedad relativa del 30% al 70%** (NT224, pág. 9; NT663, pág. 20; NT775, pág. 9).

[NT224_01]

- **Efectos del calor**: pasar de 25 ºC a 35 ºC reduce un **20% la capacidad perceptiva**, de reacción y la facultad combinatoria, equivalente a una alcoholemia de **0,5 g/l de sangre** (NT151, pág. 99; NT251, pág. 2; NT263, pág. 26).
- **Radiación solar**: eleva la temperatura del habitáculo **más de 15 ºC** por encima de la atmosférica, afectando principalmente a la cabeza (NT151, págs. 98-99; NT251, págs. 1-2; NT263, pág. 26; NT539, pág. 4).
- **Curvas de agrado y caudales requeridos**:
  - A **40 ºC exterior**: requiere **23 ºC** interior con un caudal intenso de **10 kg/min** (NT151, pág. 98; NT251, pág. 1; NT663, pág. 7).
  - A **-20 ºC exterior**: requiere **28 ºC** interior con un caudal intenso de **8 kg/min** (NT151, pág. 98; NT251, pág. 1; NT663, pág. 5).
  - A **10 ºC exterior**: requiere elevar la temperatura interior (a 21 ºC o 21,5 ºC) con un caudal de **4 kg/min** (NT151, pág. 98; NT251, pág. 1; NT663, pág. 9).

[NT151_01]

- **Depuración, deshumidificación y distribución**:
  - El evaporador condensa la humedad y arrastra partículas de polvo retenidas hacia el exterior (NT151, pág. 99; NT566, pág. 9; NT663, pág. 54), bajando la humedad relativa al **25-35%** para desarmar el vaho de los cristales (NT663, págs. 54, 56).
  - La adición de **filtros antipolen y de carbón activo** retiene contaminantes y beneficia a personas alérgicas (NT151, pág. 99; NT251, págs. 1-2; NT263, págs. 26-27; NT539, págs. 4-5).
  - **Estratificación térmica**: la distribución de aire mantiene una temperatura superior en los pies respecto a la cabeza (NT400, pág. 45).
  - Comparativa de temperaturas tras 1 hora a **30 ºC exteriores** expuesto al sol:

| Zona del cuerpo | Con climatizador | Sin climatizador |
| --- | --- | --- |
| **Cabeza** | **23 ºC** | **42 ºC** |
| **Tórax / Pecho** | **24 ºC** | **40 ºC** |
| **Pies** | **28 ºC** (o **30 ºC**) | **35 ºC** |

(NT263, pág. 27; NT539, pág. 4; NT566, pág. 9; NT663, pág. 10).

[NT263_01]

## Valores de referencia

- **Humedad relativa en zona de confort**: 30% a 70% (NT224, pág. 9; NT663, pág. 20; NT775, pág. 9).
- **Humedad relativa tras deshumidificación**: 25% a 35% (NT663, pág. 56).
- **Disminución de aptitudes de 25 ºC a 35 ºC**: 20% (equivalente a 0,5 g/l de alcohol) (NT151, pág. 99; NT251, pág. 2; NT263, pág. 26).
- **Incremento térmico por radiación solar**: > 15 ºC respecto al exterior (NT151, págs. 98-99; NT251, págs. 1-2; NT263, pág. 26; NT539, pág. 4).
- **Caudal de aire a 40 ºC exterior**: 10 kg/min (NT151, pág. 98; NT251, pág. 1; NT663, pág. 7).
- **Caudal de aire a -20 ºC exterior**: 8 kg/min (NT151, pág. 98; NT251, pág. 1; NT663, pág. 5).
- **Caudal de aire a 10 ºC exterior**: 4 kg/min (NT151, pág. 98; NT251, pág. 1; NT663, pág. 9).

## Errores de concepto frecuentes

- Considerar el climatizador como un accesorio opcional de lujo, ignorando que es un componente clave de la **seguridad activa** para prevenir accidentes por fatiga térmica (NT151, pág. 99; NT251, pág. 1; NT263, págs. 25, 27; NT320, págs. 2-3; NT539, pág. 4).
- Creer que abrir las ventanillas o el techo solar reemplaza la función del climatizador, cuando en realidad genera ruido, corrientes molestas e ingresa agentes alérgenos y gases de escape (NT251, pág. 2; NT263, págs. 25, 27; NT539, pág. 4; NT566, pág. 9).
- Evaluar el confort térmico basándose de forma exclusiva en la temperatura del aire, sin considerar la tasa de **humedad relativa (higrometría)** (NT224, págs. 8-9; NT775, págs. 8-9).

## Discrepancias

- Margen de temperatura de confort en el habitáculo: NT151, NT251, NT263 y NT539 fijan el margen de confort (Zona A) entre 20 ºC y 22 ºC; NT224 lo establece entre 20 ºC y 28 ºC; NT775 indica un margen ideal de 18 ºC a 26 ºC; y NT663 define un área de bienestar entre 18 ºC y 28 ºC.
- Temperatura interior a 10 ºC exteriores: NT151 indica elevar la temperatura interior a 21 ºC, mientras que NT251 y NT663 la fijan en 21,5 ºC.
- Temperatura en la zona de pies con climatizador tras 1 hora a 30 ºC exteriores: NT263, NT539 y NT663 registran 28 ºC, mientras que NT566 registra 30 ºC.

## Imágenes requeridas

- [NT151_01] Gráfica de curvas de agrado térmico, caudal de aire en kg/min y zonas de confort, carga media y estrés climatológico
- [NT224_01] Gráfica del diagrama de zona de confort relacionando la temperatura ambiental de 20 ºC a 28 ºC con la tasa de humedad del 30% al 70%
- [NT263_01] Tabla comparativa de variación térmica interior tras 1 hora a 30 ºC exteriores
