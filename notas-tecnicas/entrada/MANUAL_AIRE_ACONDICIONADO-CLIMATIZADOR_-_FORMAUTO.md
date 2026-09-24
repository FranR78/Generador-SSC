```yaml
tipo: fundamento
titulo: Cambio de estado, calor sensible y calor latente
entidad: calor-sensible-y-latente
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "3-4"
relacionados: [ciclo-frigorifico, refrigerante-r134a]
palabras: [cambio de estado, calor sensible, calor latente, transferencia de energía, evaporación]
```

## Objeto
Definir los conceptos de cambio de estado físico, calor sensible y calor latente aplicados al funcionamiento de los sistemas de aire acondicionado y climatización. (pág. 3).

## Fundamento
Los materiales existen en tres estados fundamentales (sólido, líquido y gaseoso). El paso de un estado a otro requiere una enorme transferencia de energía térmica (calor). Los sistemas de climatización aprovechan esta propiedad física para absorber calor y enfriar el habitáculo. (pág. 3).

## Desarrollo
1. Cambio de estado: proceso físico que requiere una transferencia de energía para transformar una sustancia entre sus fases sólida, líquida y gaseosa. (pág. 3).
2. Calor sensible: cantidad de energía térmica necesaria para aumentar o modificar la temperatura de un elemento o sustancia sin alterar su estado físico. (pág. 4).
3. Calor latente: cantidad de energía térmica necesaria para producir el cambio de estado físico de una sustancia sin que se modifique su temperatura. (pág. 4).

📷 IMAGEN: Gráfica de calor sensible y calor latente según el aporte de kcal en los estados sólido, líquido y gas — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 4

## Valores de referencia
- Ejemplo de calor sensible: calentamiento de hielo de -50 ºC a 0 ºC, de agua líquida de 0 ºC a 100 ºC y de vapor por encima de 100 ºC. (págs. 3-4).
- Ejemplo de calor latente: fusión de hielo a agua a 0 ºC (80 kcal) y vaporización de agua a gas a 100 ºC (539 kcal). (págs. 3-4).

## Errores de concepto frecuentes
Confundir el calor sensible (que eleva la temperatura registrada en el termómetro) con el calor latente (que consume energía exclusivamente para cambiar el estado físico del fluido a temperatura constante). (pág. 4).

---

```yaml
tipo: fundamento
titulo: Presión absoluta, presión relativa y vacío
entidad: ciclo-frigorifico
variante: magnitudes de presión
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "4"
relacionados: [vacio-circuito, lectura-manometros]
palabras: [presión absoluta, presión relativa, vacío, depresión, cero absoluto, presión atmosférica]
```

## Objeto
Diferenciar las magnitudes de presión absoluta, presión relativa y vacío empleadas en la medición y diagnóstico de los circuitos frigoríficos. (pág. 4).

## Fundamento
El comportamiento del fluido refrigerante en un circuito cerrado depende de la presión ejercida sobre él, requiriendo diferenciar si el origen de medida toma como base el vacío absoluto o la presión atmosférica exterior. (pág. 4).

## Desarrollo
1. Presión absoluta: magnitud cuyo origen de medida corresponde al vacío absoluto o presión cero. Se calcula sumando la presión medida en el manómetro más la presión atmosférica (Presión absoluta = Presión medida + Presión atmosférica). (pág. 4).
2. Presión relativa: magnitud medida tomando como referencia cero la presión atmosférica. (pág. 4).
3. Vacío o depresión: nivel de presión situado por debajo de la presión atmosférica. (pág. 4).

## Valores de referencia
- Cero absoluto: 0 bar de presión absoluta. (pág. 4).
- Presión atmosférica tomada como referencia relativa: 0 bar relativo. (pág. 4).

## Errores de concepto frecuentes
Interpretar la lectura de los manómetros de taller como presión absoluta; los relojes estándar marcan la presión relativa respecto a la presión atmosférica. (pág. 4).

---

```yaml
tipo: fundamento
titulo: Formas de transmisión del calor
entidad: calor-sensible-y-latente
variante: transmisión de calor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "4-5"
relacionados: [condensador, evaporador]
palabras: [conducción, radiación, convección, transferencia térmica, equilibrio térmico]
```

## Objeto
Explicar los tres mecanismos físicos mediante los cuales se transmite la energía térmica entre diferentes cuerpos o fluidos. (págs. 4-5).

## Fundamento
El cuerpo que se encuentra a mayor temperatura cede calor espontáneamente al elemento de menor temperatura hasta que ambos alcanzan el equilibrio térmico a la misma temperatura. (pág. 4).

## Desarrollo
1. Conducción: transferencia de calor producida a través de un elemento sólido, bien entre varios cuerpos en contacto directo o de un extremo a otro del mismo cuerpo (ejemplo: calentamiento de un cazo metálico desde la zona expuesta al fuego hacia el mango). (pág. 5).
2. Radiación: transmisión de calor mediante ondas electromagnéticas (rayos infrarrojos) sin necesidad de contacto físico entre el cuerpo emisor y el receptor (ejemplo: la radiación solar calentando la superficie del planeta). (págs. 5-6).
3. Convección: transmisión de calor que se realiza entre fluidos (líquidos o gases); se produce cuando las moléculas del fluido de mayor temperatura se mezclan físicamente con las de menor temperatura. (pág. 5).

📷 IMAGEN: Esquema descriptivo de las tres formas de transmisión de calor: conducción, radiación y convección — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 5

## Valores de referencia
No documentado en fuentes. (págs. 4-5).

## Errores de concepto frecuentes
Creer que la radiación térmica requiere un medio material para propagarse; las ondas electromagnéticas infrarrojas transmiten la energía térmica a través del espacio sin contacto directo. (pág. 5).

---

```yaml
tipo: fluido
titulo: Agentes refrigerantes R12 y R134a
entidad: refrigerante-r134a
variante: R12 y R134a
area: climatizacion
sistema: fluidos-frigorificos
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "5-7"
relacionados: [aceite-frigorifico, ciclo-frigorifico]
palabras: [R12, R134a, CCl2F2, CH2FCF3, CFC, HFC, curva de saturación, phosgeno]
```

## Designación y norma
- R12: Dicloro-difluor-metano (fórmula química CCl2F2). Familia de los clorofluorocarbonos (CFC). Utilizado en turismos antiguos. (págs. 6-7).
- R134a: Tetrafluor-etano (fórmula química CH2FCF3). Familia de los hidrofluorocarbonos (HFC). Sustituto del R12 en turismos. (págs. 6-7).
- Sustitutos HFC en otros sectores: R407c (autobuses en lugar de R22), R404a y R507 (camiones frigoríficos en lugar de R502). (pág. 7).

## Propiedades
- R12: baja toxicidad (<20%), elevada estabilidad química, fácil mezcla con lubricantes, elevado calor de evaporación, no inflamable ni explosivo. En presencia de agua forma ácido fluorhídrico F2OH que ataca Fe, Cu y Al. En contacto con llamas forma gas phosgeno. Temperatura de evaporación a presión atmosférica: -30 ºC. (págs. 6-7).
- R134a: baja toxicidad, estabilidad química, fácil mezcla con lubricantes, elevado calor de vaporización, no inflamable ni explosivo, presiones de trabajo moderadas, compatible con metales comunes y bajo coste. Temperatura de evaporación a presión atmosférica: -26 ºC. (págs. 6-7).

## Dónde se usa y cantidades
Circuitos frigoríficos cerrados de aire acondicionado en automoción. (págs. 6-7).

## Compatibilidades y mezclas prohibidas
El R12 es incompatible químicamente con metales como el zinc (Zn) y el magnesio (Mg). El R134a requiere lubricantes sintéticos (PAG o Ester) y no debe mezclarse bajo ningún concepto con R12 ni con aceites minerales. (págs. 6-7).

## Identificación
Indicado en la placa del vehículo y en la curva de saturación de temperatura respecto a la presión (por ejemplo, el R134a se evapora a -26 ºC a 1 bar y requiere 16,7 bar para condensar a 60 ºC). (págs. 5, 7).

## Manipulación, almacenamiento y residuos
No documentado en fuentes. (págs. 5-7).

## Riesgos y normativa
- R12: destruye la Capa de Ozono por su contenido de cloro (familia CFC). En presencia de fuego genera gas tóxico phosgeno. (págs. 6-7).
- R134a: no ataca la capa de ozono (sin cloro). En contacto con humedad genera corrosión por ácidos. (pág. 6).

---

```yaml
tipo: fundamento
titulo: Principio de evaporación en el circuito frigorífico
entidad: ciclo-frigorifico
variante: principio de evaporación
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "7-9"
relacionados: [evaporador, valvula-expansion, compresor]
palabras: [evaporación, cambio de estado, evaporador, gas recalentado, baja presión, 2 bar, -10 ºC]
```

## Objeto
Describir el proceso térmico de evaporación del refrigerante líquido a baja presión en el evaporador para extraer calor del aire exterior. (págs. 7-9).

## Fundamento
En la evaporación se produce un cambio de estado del fluido de líquido a gas a temperatura constante. Este cambio de estado exige una aportación de calor que se obtiene enfriando el aire exterior que atraviesa el evaporador. (pág. 8).

## Desarrollo
1. Intercambio térmico en el evaporador: el refrigerante entra en estado líquido a baja presión (ejemplo: 2 bar a -10 ºC). A medida que circula, absorbe calor del aire exterior (enfriándolo de 40 ºC a 10 ºC), produciéndose la evaporación progresiva del líquido. (págs. 7-8).
2. Cambio de estado a la salida: se busca que el fluido se transforme íntegramente en gas justo a la salida del evaporador para evitar el sobrecalentamiento prematuro. Si el refrigerante se evaporase antes de terminar el recorrido, el gas se recalentaría y dejaría de enfriar el aire. (pág. 8).
3. Datos de calor latente de evaporación del R134a:
   - A -10 ºC (2,005 bar abs): 48,23 kcal/kg (201,87 kJ/kg). (pág. 7).
   - A -26,1 ºC (1,013 bar abs, presión atmosférica): 50,90 kcal/kg (213,03 kJ/kg). (pág. 7).

📷 IMAGEN: Esquema del principio de evaporación progresiva del refrigerante en el evaporador a 2 bar y -10 ºC — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 8

## Valores de referencia
- Presión y temperatura de evaporación típica: 2 bar y -10 ºC. (pág. 8).
- Enfriamiento del aire exterior: de 40 ºC a 10 ºC. (pág. 8).
- Calor latente de evaporación del R134a a -26,1 ºC (1,013 bar abs): 213,03 kJ/kg. (pág. 7).

## Errores de concepto frecuentes
Permitir que el refrigerante complete su evaporación demasiado pronto en el evaporador; la evaporación prematura recalienta el gas y anula la transferencia térmica en el resto del panel. (pág. 8).

---

```yaml
tipo: fundamento
titulo: Principio de condensación en el circuito frigorífico
entidad: ciclo-frigorifico
variante: principio de condensación
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "9-10"
relacionados: [condensador, compresor, filtro-deshidratador]
palabras: [condensación, cambio de estado, condensador, vapor saturado, líquido subenfriado, alta presión]
```

## Objeto
Explicar el proceso de ceder calor al aire exterior para transformar el refrigerante en estado gaseoso a alta presión a estado líquido dentro del condensador. (págs. 9-10).

## Fundamento
Durante la condensación, el refrigerante cambia de estado gaseoso a líquido a temperatura constante. Para que ocurra este cambio de fase, el fluido debe disipar calor, el cual es absorbido por el aire exterior que fluye a través de las aletas del condensador. (pág. 9).

## Desarrollo
1. Intercambio térmico en el condensador: el gas caliente a alta presión enviado por el compresor entra en el condensador (ejemplo: vapor recalentado a 20 bar y 110 ºC o a 16,7 bar y 60 ºC). Al circular por los conductos, cede calor al aire de la calle (calentando el aire exterior de 40 ºC a 50 ºC o de 35 ºC a 40 ºC). (págs. 9-10).
2. Fases de transformación del fluido en el condensador:
   - Vapor recalentado: refrigerante en fase gaseosa enfriándose hasta alcanzar la temperatura de saturación. (pág. 10).
   - Vapor saturado y mezcla vapor + líquido: cambio de estado a presión y temperatura constantes. (pág. 10).
   - Líquido saturado y líquido subenfriado: refrigerante totalmente licuado saliendo a alta presión (ejemplo: 19 bar y 60 ºC). (pág. 10).

📷 IMAGEN: Esquema del principio de condensación y cambio de estado gaseoso a líquido en el condensador — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 9

## Valores de referencia
- Entrada de gas al condensador: 20 bar / 110 ºC o 16,7 bar / 60 ºC. (pág. 9).
- Salida de líquido subenfriado: 19 bar / 60 ºC o 16,7 bar / 50 ºC. (págs. 9-10).
- Calentamiento del aire exterior al atravesar el condensador: de 40 ºC a 50 ºC. (pág. 9).

## Errores de concepto frecuentes
Suponer que la condensación requiere una caída brusca de presión; la licuación se realiza a alta presión prácticamente constante mientras el refrigerante cede su calor latente. (págs. 9-10).

---

```yaml
tipo: fundamento
titulo: Esquema general del circuito frigorífico, presiones y temperaturas
entidad: ciclo-frigorifico
variante: esquema general
area: climatizacion
sistema: circuito-frigorifico
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "10-12"
relacionados: [compresor, condensador, valvula-expansion, evaporador]
palabras: [circuito cerrado, alta presión, baja presión, cuadro de presiones, R12, R134a]
```

## Objeto
Definir las cuatro etapas del circuito cerrado frigorífico y establecer la tabla de presiones de trabajo en función de la temperatura ambiente. (págs. 10-12).

## Fundamento
El agente frigorífico realiza un bucle cerrado continuo experimentando variaciones de presión, cambios de estado y transferencias térmicas para extraer calor del habitáculo y transferirlo al exterior. (págs. 10-11).

## Desarrollo
1. Circuito de alta presión (AP):
   - Compresor: eleva la presión y la temperatura del gas. (págs. 10-11).
   - Condensador: enfría el gas a alta presión constante hasta licuarlo. (págs. 10-11).
   - Estado del fluido en AP: líquido a alta presión (10-20 bar) y 50-60 ºC, o gas a AP (10-20 bar) y 80-90 ºC. (págs. 11-12).
2. Circuito de baja presión (BP):
   - Válvula de expansión: provoca la caída brusca de presión y temperatura. (págs. 10-11).
   - Evaporador: absorbe calor del aire del habitáculo evaporando el fluido a baja presión constante. (págs. 10-11).
   - Estado del fluido en BP: gas a baja presión (1,5-3 bar) y baja temperatura (-10 ºC a -12 ºC a la entrada y 3-12 ºC a la salida). (pág. 12).

📷 IMAGEN: Esquema básico del circuito frigorífico cerrado indicando presiones y temperaturas en cada tramo — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 11

## Valores de referencia
Cuadro de presiones de trabajo en función de la temperatura ambiente:
- Tª ambiente 12 ºC: BP = 0,5 a 2 bar | AP (R134a) = 9,5 a 13 bar. (pág. 12).
- Tª ambiente 21 ºC: BP = 0,5 a 2 bar | AP (R134a) = 12,5 a 15 bar. (pág. 12).
- Tª ambiente 26 ºC: BP = 0,5 a 2 bar | AP (R134a) = 14 a 17 bar. (pág. 12).
- Tª ambiente 32 ºC: BP = 1 a 2 bar | AP (R134a) = 15 a 18 bar. (pág. 12).
- Tª ambiente 38 ºC: BP = 1 a 2,5 bar | AP (R134a) = 18,5 a 22 bar. (pág. 12).
- Tª ambiente 43 ºC: BP = 1 a 2,5 bar | AP (R134a) = 20 a 24 bar. (pág. 12).

## Errores de concepto frecuentes
Interpretar los valores de alta presión sin considerar la temperatura exterior; la alta presión de trabajo adecuada depende directamente de la temperatura ambiente. (pág. 12).

---

```yaml
tipo: componente
titulo: Presostato de tres funciones (Trinary)
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "12-14"
relacionados: [compresor, electroventilador-condensador]
palabras: [presostato, Trinary, cuatro etapas, corte de baja, corte de alta, ventiladores]
```

## Misión
Proteger el equipo de aire acondicionado de roturas mecánicas por falta o exceso de presión en el circuito y gobernar la activación de los ventiladores del condensador. (págs. 12-13).

## Tipos y características
Presostatos de baja, presostatos de alta e interruptor de tres funciones (Trinary). Internamente se estructura en dos zonas eléctricas independientes: una dedicada al control del compresor y otra a la activación de los ventiladores. (págs. 12-13).

## Principio de funcionamiento
Opera en 4 etapas progresivas según la presión del circuito:
1. 1ª Etapa (sin refrigerante): presión del circuito muy baja por falta de carga; el contacto que alimenta al compresor permanece abierto impidiendo la activación. (pág. 13).
2. 2ª Etapa (con refrigerante): al cargar el circuito con la cantidad prescrita, la presión supera el umbral mínimo de activación, cerrando el contacto y enviando corriente al compresor. (págs. 13-14).
3. 3ª Etapa (activación de ventiladores): al estar funcionando el climatizador y elevarse la presión, se cierra el contacto correspondiente para activar los ventiladores del condensador a máxima velocidad. (págs. 13-14).
4. 4ª Etapa (desconexión por sobrepresión): cuando la presión alcanza el umbral máximo de seguridad, se abre el contacto del compresor para evitar averías. (pág. 14).

## Valores de trabajo
No documentado en fuentes. (págs. 12-14).

## Anomalías frecuentes
Fallo de contactos eléctricos internos por desgaste o sulfatación en las clemas de conexión. (págs. 12-14).

## Comportamiento en avería
El compresor no acopla por baja presión o sobrepresión, o los electroventiladores del condensador no entran en marcha al aumentar la presión. (págs. 13-14).

## Cómo comprobarlo
1. Comprobar la continuidad eléctrica en el contacto del compresor con la carga de refrigerante correcta. (pág. 13).
2. Verificar el cierre del contacto de los electroventiladores al elevar la presión de alta. (pág. 14).

## Mantenimiento
Verificación periódica de la conexión eléctrica y comprobación de la estanqueidad en la rosca del puerto de presión. (págs. 12-14).

---

```yaml
tipo: componente
titulo: Presostato electrónico o transmisor de alta presión
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "14-17"
relacionados: [unidad-control-climatizador, electroventilador-condensador]
palabras: [presostato electrónico, transmisor de alta presión, cristal de silicio, PWM, 50 Hz, 20 ms]
```

## Misión
Supervisar de forma continua la presión del agente frigorífico en todo el ciclo de trabajo y convertir la magnitud física de la presión en una señal eléctrica rectangular PWM dirigida a las unidades de control del motor y del climatizador. (págs. 14-15).

## Tipos y características
Sensor de presión electrónico montado en la tubería de alta presión. Incorpora un cristal de silicio y un microprocesador integrado en su cuerpo. (págs. 14-15).

## Principio de funcionamiento
La presión del refrigerante deforma un cristal de silicio. Al deformarse, el cristal altera su resistencia eléctrica y modifica una tensión de medición. El microprocesador del sensor convierte esa tensión en una señal rectangular digital modulada en anchura de impulsos (PWM) con una frecuencia fija de 50 Hz (período T = 20 ms = 100%).
- A presión baja (0,14 MPa / 1,4 bar): la deformación es leve y la anchura de impulso generada es de 2,6 ms (13% del período). (págs. 15-16).
- A presión alta (3,7 MPa / 37 bar): la deformación del cristal es intensa y la anchura de impulso aumenta a 18 ms (90% del período). (pág. 17).

## Valores de trabajo
- Frecuencia de la señal PWM: 50 Hz (duración del período T = 20 ms). (pág. 16).
- Presión baja (0,14 MPa / 1,4 bar): anchura de impulso de 2,6 ms (13%). (pág. 16).
- Presión alta (3,7 MPa / 37 bar): anchura de impulso de 18 ms (90%). (pág. 17).

## Anomalías frecuentes
Fallo interno del cristal de silicio o interrupción en el cableado de señal y alimentación del sensor. (pág. 15).

## Comportamiento en avería
Si la unidad de control para el ventilador del líquido refrigerante no detecta la señal del transmisor, desactiva el compresor inmediatamente por motivos de seguridad. (pág. 15).

## Cómo comprobarlo
1. Comprobar la señal de salida modulada en anchura de impulsos con un osciloscopio en los pines del sensor (frecuencia 50 Hz, período 20 ms). (págs. 15-16).
2. Consultar el parámetro de presión en el bloque de valores de medición con el equipo de diagnosis. (pág. 15).

📷 IMAGEN: Gráfica de la señal digital PWM generada por el transmisor de alta presión a baja y alta presión — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 16

## Mantenimiento
Mantener limpios y protegidos los terminales del conector estanco del transmisor. (pág. 14).

---

```yaml
tipo: componente
titulo: Termostato del evaporador
entidad: sensor-evaporador
variante: termostato mecánico y eléctrico
area: climatizacion
sistema: control-climatizacion
fabricante: Formauto
fuente: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf"
paginas: "18"
relacionados: [evaporador, compresor, unidad-control-climatizador]
palabras: [termostato, antihielo, termostato mecánico, termostato eléctrico, corte de compresor]
```

## Misión
Evitar la formación de hielo en el panel del evaporador abriendo el circuito eléctrico del acoplamiento del compresor cuando la temperatura desciende por debajo del límite de congelación. (pág. 18).

## Tipos y características
- Termostato mecánico: conmutador gobernado por temperatura mediante un capilar térmico. (pág. 18).
- Termostato eléctrico: sensor de temperatura que transmite la señal directamente a la UCE de climatización. (pág. 18).

## Principio de funcionamiento
- Termostato mecánico: actúa como un interruptor de paso de corriente intercalado en la alimentación del relé del compresor. Mientras la temperatura del evaporador sea adecuada permite el paso de corriente; al bajar la temperatura en exceso (riesgo de escarcha), el termocontacto se abre interrumpiendo la alimentación al presostato y al relé del compresor. (pág. 18).
- Termostato eléctrico: actúa como una sonda de temperatura que informa continuamente a la UCE del climatizador sobre la temperatura real del evaporador para que la centralita desactive eléctricamente el compresor. (pág. 18).

## Valores de trabajo
No documentado en fuentes. (pág. 18).

## Anomalías frecuentes
Fallo de apertura de los contactos mecánicos o descalibración del sensor de temperatura eléctrico. (pág. 18).

## Comportamiento en avería
- Si no abre al descender la temperatura: se forma hielo en el evaporador, obstruyendo el paso de aire al habitáculo. (pág. 18).
- Si queda abierto de forma permanente: el relé del compresor no recibe corriente y el aire acondicionado no activa. (pág. 18).

## Cómo comprobarlo
1. En termostato mecánico: verificar continuidad eléctrica entre bornes según la temperatura del capilar. (pág. 18).
2. En termostato eléctrico: medir la resistencia del sensor o consultar la temperatura del evaporador en la UCE de climatización. (pág. 18).

## Mantenimiento
Asegurar el correcto posicionado del capilar o sonda dentro de la superficie del evaporador. (pág. 18).

---

COBERTURA: documento «MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf», páginas 1 a 18 de 47. [queda pendiente desde la página 19]