---
id: ssc.condensador.el-condensador
modulo: ssc
unidad: clima
nt: 741
tipo: elemento
clase: componente
titulo: "Condensador"
menu: "Condensador"
grupo: "Circuito frigorífico"
clave: condensador
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: ciclo-frigorifico
marca: "Valeo"
fuentes: "EL CONDENSADOR.PDF, págs. 1-7"
relacionados: ["compresor", "evaporador", "valvula-expansion", "electroventilador-condensador"]
palabras: ["intercambiador térmico", "subenfriamiento", "flujo paralelo", "serpentín", "tubos aletas"]
---

## Misión

Evacuar el calor absorbido por el fluido frigorífico durante las fases de evaporación y compresión, enfriando y condensando el fluido que circula por sus tubos mientras el aire que lo atraviesa se calienta (pág. 1).

## Tipos y características

- Ubicación: parte delantera del vehículo, entre los electroventiladores axiales y el radiador de refrigeración del motor (pág. 1).
- Tecnologías de haz de tubos (pág. 6):
  - **Condensador de serpentín**: tubo plano extruido con sección ovoide dividida en 3 o 4 canales paralelos. Forma un serpentín con aletas en acordeón intercaladas, soldadas por calor (pág. 6).
  - **Condensador tubo / aletas**: tubos cilíndricos en horquilla insertados paralelamente en un conjunto de aletas y expandidos mecánicamente para asegurar el contacto térmico, unidos por codos formando serpentines (pág. 6).
  - **Condensador de flujo paralelo**: tubos planos extruidos que desembocan en tubos colectores laterales subdivididos por separadores en varios tramos para realizar varias pasadas de fluido. Tubos más finos y numerosos separados por aletas en acordeón, galvanizado en horno (pág. 6).

## Principio de funcionamiento

- **Mecanismos de intercambio**: combinación de conducción térmica (a través de los materiales) y convección térmica (entre el aire y la superficie externa, y entre el fluido y la superficie interna) (pág. 3).
- **Flujo del fluido**: penetra en estado gaseoso por el tubo de entrada superior y desciende hacia la parte inferior saliendo en estado líquido, movimiento favorecido por la gravedad (pág. 2).
- **Etapas de transformación del fluido**:
  - Enfriamiento inicial: el fluido en estado vapor descargado por el compresor se enfría desde la temperatura de descarga hasta la temperatura de condensación (calor sensible) (pág. 2).
  - Condensación: el fluido en estado vapor se condensa a temperatura constante (calor latente) (pág. 2).
  - Subenfriamiento: el fluido en estado líquido reduce su temperatura por debajo de la de condensación (calor sensible) (pág. 2).
- **Balances energéticos**:
  - Balance del circuito: Pcond = Pfrigo + Pcomp = Qf · (h3 - h1) (pág. 1).
  - Balance del aire: Pcond = Qa · Cp · (Tf - Ti) (pág. 2).
  - Transmisión global: Pcond = hcond · S · (Tc - Ti). A mayor coeficiente de intercambio hcond (por velocidad del vehículo o diseño), menor es la temperatura de condensación Tc y menor la alta presión requerida (pág. 4).

## Valores de trabajo

- Subenfriamiento mínimo requerido (SE = Tc - T4): superior a 2 ºC para garantizar la ausencia de burbujas de gas a la entrada de la válvula de expansión (pág. 3).

## Anomalías frecuentes

- **Sustitución por un condensador adaptable de menor eficacia** (hcond inferior) (pág. 4, 5):
  - Provoca el aumento de la temperatura de condensación (Tc) y de la alta presión (HP) (pág. 4).
  - Eleva la relación de compresión, disminuyendo el rendimiento volumétrico y el rendimiento efectivo del compresor (pág. 5).
  - Reduce el caudal másico de fluido y el salto de entalpía, disminuyendo la potencia frigorífica del circuito (pág. 5).
  - Causa cortes cíclicos del compresor ordenados por el presostato por exceso de alta presión (pág. 4).
- Presencia de incondensables (aire en el circuito): eleva la presión de alta medida por el captador por encima de la presión real del refrigerante por efecto de las presiones parciales (pág. 2).
- Acumulación de suciedad o corrosión en la superficie externa (pág. 7).

## Comportamiento en avería

Disminución drástica del rendimiento del climatizador, falta de enfriamiento en el habitáculo y desconexión cíclica del compresor por disparo del presostato de alta presión (pág. 4, 5).

## Cómo comprobarlo

- Comprobar que el valor de subenfriamiento (SE = Tc - T4) sea superior a 2 ºC mediante la lectura de presiones y temperaturas en la salida del condensador (pág. 3).
- Inspeccionar visualmente la superficie externa verificando la ausencia de suciedad y corrosión en el panal (pág. 7).

## Mantenimiento

- Prohibida la sustitución de un condensador original por un recambio adaptable no homologado o de menor eficacia (pág. 7).
- Verificar y mantener limpia la superficie externa exenta de suciedad y corrosión (pág. 7).

## Imágenes requeridas

- Ciclo de funcionamiento del condensador en el Diagrama de Mollier con etapas de enfriamiento, condensación y subenfriamiento — Fuente: EL CONDENSADOR.PDF, pág. 2 (pág. 2).
