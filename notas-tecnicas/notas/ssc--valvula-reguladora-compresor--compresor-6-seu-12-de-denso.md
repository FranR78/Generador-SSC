---
id: ssc.valvula-reguladora-compresor.compresor-6-seu-12-de-denso
modulo: ssc
unidad: clima
nt: 712
tipo: elemento
clase: componente
titulo: "Válvula reguladora del compresor"
menu: "Válvula reguladora del compresor"
grupo: "Control de climatización"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: compresor
marca: "Denso"
fuentes: "Compresor 6 SEU 12 de Denso.docx, págs. 1-2"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["electroválvula", "400 Hz", "estado flotante", "alta presión", "baja presión", "carter"]
---

## Misión

Gobernar la cilindrada del compresor regulando la comunicación de presiones entre la carcasa del cigüeñal (cárter), la alta presión y la baja presión (pág. 1, 2).

## Tipos y características

- Integra un elemento mecánico (sensible a la presión) y una función electromagnética (pág. 1).
- En su cuerpo se comunican tres presiones: cárter del compresor (A), alta presión (B) y baja presión (C) (pág. 1, 2).

## Principio de funcionamiento

- **Función electromagnética**: La unidad de mando activa la electroválvula a una frecuencia de 400 Hz mediante una señal de proporción de período variable (PWM) (pág. 1). La frecuencia de 400 Hz mantiene al empujador en un estado "flotante" con un recorrido de pocas décimas de milímetro entre topes (pág. 1).
- **Plena carga / Máximo rendimiento**: La válvula se activa y separa el cárter (A) de la alta presión (B), comunicando el cárter con la baja presión (C) (pág. 2). La presión en el cárter desciende y la alta presión sobre los pistones desplaza el disco oscilante a máxima cilindrada (pág. 2).
- **Desconexión / Suministro nulo**: Al desactivar la válvula, esta permanece abierta conectando la alta presión (B) con el cárter (A) (pág. 1, 2). Se igualan las presiones en los pistones y el muelle del disco lo desplaza a rendimiento nulo (por debajo del 2%) (pág. 2).
- **Función mecánica (regulación por baja presión)**: Si la baja presión (C) sube en exceso, comprime el elemento deformable interior y libera el empujador, separando la alta presión (B) del cárter (A) para aumentar la cilindrada y hacer bajar la baja presión a su valor correcto (pág. 2). Si la baja presión es insuficiente, el elemento se descomprime e impide la separación completa de A y B (pág. 2).

## Valores de trabajo

- Frecuencia de activación electromagnética: 400 Hz con señal PWM (pág. 1).
- Recorrido del empujador entre topes: pocas décimas de milímetro (pág. 1).

## Comportamiento en avería

En ausencia de excitación eléctrica, la válvula permanece abierta uniendo alta presión con el cárter, situando el compresor en suministro nulo (por debajo del 2%) (pág. 1, 2).

## Imágenes requeridas

- Detalle de la válvula reguladora con las vías de presión del cárter (A), alta presión (B) y baja presión (C) — Fuente: Compresor 6 SEU 12 de Denso.docx, pág. 1 (pág. 1).
