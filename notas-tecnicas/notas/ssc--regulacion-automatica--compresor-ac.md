---
id: ssc.regulacion-automatica.compresor-ac
modulo: ssc
unidad: clima
nt: 715
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación externa del rendimiento del compresor"
codigo: "E87"
menu: "Regulación externa del rendimi E87"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "COMPRESOR__AC.PDF, págs. 4"
relacionados: ["compresor", "valvula-reguladora-compresor", "sensor-evaporador", "unidad-control-climatizador"]
palabras: ["regulación externa", "E87", "G263", "N280", "Reheat", "temperatura evaporador"]
---

## Objeto

Ajustar de forma progresiva la potencia frigorífica del compresor en función de las necesidades térmicas reales del evaporador para reducir el consumo energético y evitar la necesidad de calefactar adicionalmente el aire (Reheat) (pág. 4).

## Fundamento

La regulación se efectúa externamente mediante la unidad de manejo e indicación E87, la cual gobierna una válvula de regulación electromagnética (N280) que modifica la cilindrada del compresor a partir de la temperatura de salida del aire en el evaporador (pág. 4).

## Desarrollo

- **Captación de datos de entrada**: La unidad de manejo e indicación E87 procesa la señal enviada por el transmisor de temperatura del aire a la salida del evaporador G263 (pág. 4).
- **Gestión del rendimiento frigorífico**: A partir del valor de temperatura medido por el transmisor G263, la unidad E87 modula la señal de excitación hacia la válvula reguladora N280 para ajustar la presión del cárter del compresor (pág. 4).
- **Optimización energética**: Adapta la temperatura de salida del aire en el evaporador ajustando exactamente el caudal de gas refrigerante necesario, minimizando el calentamiento posterior mediante la calefacción (Reheat) y reduciendo la demanda de potencia al motor (pág. 4).

## Errores de concepto frecuentes

Creer que el compresor trabaja siempre a máxima potencia y que la temperatura del habitáculo se regula únicamente mezclando aire frío con aire caliente procedente de la calefacción (Reheat) (pág. 4).
