---
id: ssc.regulacion-automatica.ssp-484-a7-info-y-clima-arrastrado-2-cop
modulo: ssc
unidad: clima
nt: 329
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Direccionamiento automático de servomotores en bus LIN"
codigo: "J255"
menu: "Direccionamiento automático de J255"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, págs. 52-53"
relacionados: ["servomotor-trampilla", "unidad-control-climatizador", "autodiagnostico-climatizador"]
palabras: ["auto-addressing", "direccionamiento automático", "bus LIN", "conexión en serie", "codificación de dirección"]
---

## Objeto

Asignar direcciones individuales a cada servomotor de trampilla conectado en serie en el bus LIN para su adaptación y control desde la unidad Climatronic J255 o E265. (pág. 53).

## Fundamento

Los servomotores están enlazados en serie a través del bus LIN. Para que la unidad de mando identifique qué trampilla acciona cada servomotor, se ejecuta un proceso de codificación de dirección denominado direccionamiento automático (auto-addressing). (pág. 53).

## Desarrollo

1. Estructura de la conexión: La línea de datos bus LIN entra en cada servomotor por el pin A2 (LIN in) y sale hacia el siguiente por el pin A3 (LIN out), compartiendo todos la alimentación por terminal 30 (pin A4) y terminal 31 (pin A1). (pág. 53).
2. Proceso de asignación: La unidad de control J255 o E265 asigna las direcciones a las trampillas respetando el orden físico de los conectores en el mazo de cables de la conexión en serie. (pág. 53).
3. Gestión de averías en la red LIN:
   - Si se interrumpe el bus LIN en un servomotor, se detecta avería en dicho servomotor y en todos los situados a continuación en la serie (aguas abajo). (pág. 53).
   - Cualquier fallo genera un registro de avería (DTC) en la memoria de averías accesible por diagnóstico. (pág. 53).

## Errores de concepto frecuentes

Creer que permutar la posición física de dos servomotores soluciona un fallo; no funcionarán con la dirección antigua en la nueva ubicación y, tras el siguiente ciclo de auto-addressing, se les asignarán las trampillas correspondientes al orden físico de los conectores del mazo de cables. (pág. 53).
