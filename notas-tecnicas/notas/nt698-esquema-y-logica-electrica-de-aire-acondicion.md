---
id: ssc.sin-clasificar.esquema-y-logica-electrica-de-aire-acondicionado-manual-con-trinaria
modulo: ssc
unidad: sin-clasificar
nt: 698
tipo: proceso
subtipo: fundamento
titulo: "Esquema Y Lógica Eléctrica De Aire Acondicionado Manual Con Trinaria"
menu: "Esquema Y Lógica Eléctrica De Aire Aco"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura del circuito eléctrico, la lógica de interconexión y las condiciones de activación del compresor y los electroventiladores en sistemas de aire acondicionado manual equipados con presostato trinario. Aplica al análisis de esquemas eléctricos de climatización manual.

## Fundamento

La UCE de motor y la electrónica de control condicionan la excitación del embrague electromagnético del compresor a la existencia de un régimen de ralentí estable, a la ausencia de aceleraciones bruscas y a la validación de presiones y temperaturas por parte de la trinaria y las sondas NTC.

## Condiciones previas

Tensión de batería disponible, contacto conectado, motor térmico funcionando regularmente al ralentí y turbina de aire fresco seleccionada al menos en velocidad lenta.

## Desarrollo

* **Condiciones de activación del compresor:**
  1. El conductor acciona el interruptor de AC y selecciona al menos la velocidad lenta de la turbina de aire fresco.
  2. La UCE del motor verifica que el motor gira a un régimen de ralentí regular.
  3. La trinaria de alta mide que la presión del circuito se encuentra en el rango de trabajo entre 2 bar y 32 bar (bornes 1-2 cerrados).
  4. La sonda NTC del evaporador confirma que no hay riesgo de congelación en el núcleo del evaporador.
  5. La sonda NTC del refrigerante del motor confirma que el motor de combustión no padece sobretemperatura.
  6. Cumplidas las condiciones, la electrónica alimenta el embrague electromagnético del compresor.
* **Gobierno del electroventilador del condensador:**
  - Al conectar el aire acondicionado, el electroventilador del circuito de refrigeración se activa de forma continua en velocidad lenta.
  - Cuando la presión en el circuito de alta alcanza los 16 bar, los bornes 3-4 de la trinaria se cierran excitando el relé para conectar la velocidad rápida (II velocidad) del electroventilador.
* **Estrategias de desconexión de seguridad:**
  - La UCE del motor interrumpe la alimentación al compresor ante una aceleración brusca para entregar la máxima potencia a la transmisión.
  - La sonda NTC del refrigerante desactiva el compresor si la temperatura del motor sube en exceso.

## Valores de referencia

| Parámetro / Componente | Valor y Condiciones |
| :--- | :--- |
| Presión de corte por baja o alta de la trinaria (P1) | P1 = 2 bar (corte por baja) / 32 bar (corte por alta) en el circuito de alta |
| Presión de conexión de II velocidad en trinaria (P2) | P2 = 16 bar en el circuito de alta presión |
| Temperatura de conexión de velocidad lenta (t1) | t1 = 95 ºC en el termostato de refrigerante |
| Temperatura de conexión de velocidad rápida (t2) | t2 = 103 ºC en el termostato de refrigerante |

## Interpretación y errores frecuentes

* Tratar de conectar el A/C con la turbina del habitáculo desconectada (posición 0); el circuito eléctrico impide la activación del compresor si la turbina no gira como mínimo a velocidad lenta.
* Interpretar la desconexión del compresor en una incorporación como avería, cuando se trata de la función de corte por aceleración gestionada por la UCE del motor.

## Verificación final

Verificar que al pulsar el interruptor de AC con la turbina en marcha lenta, el electroventilador arranca inmediatamente en velocidad lenta y el embrague electromagnético acopla el compresor.

## Imágenes requeridas

- Esquema eléctrico de aire acondicionado manual con trinaria y relés — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94
