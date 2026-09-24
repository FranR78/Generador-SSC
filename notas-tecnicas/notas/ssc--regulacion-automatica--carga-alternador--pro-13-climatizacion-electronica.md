---
id: ssc.regulacion-automatica.carga-alternador.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 158
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Señal de carga eléctrica del alternador en la climatización"
menu: "Señal de carga eléctrica del alternado"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: carga-alternador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 105"
relacionados: ["unidad-control-climatizador", "compresor", "electroventilador-condensador"]
palabras: ["borne L", "borne DF", "red de abordo", "Can-Bus", "desconexión compresor", "batería"]
---

## Objeto

Informar a la UCE del climatizador sobre el nivel de saturación o trabajo del alternador para evitar la descarga accidental de la batería (pág. 105).

## Fundamento

El alternador genera una señal digital evaluando la tensión de trabajo (borne L) y el rendimiento (borne +/DF) que envía a la UCE de la red de a bordo, la cual emite un mensaje por el Can-Bus de confort (pág. 105).

## Desarrollo

Procesamiento y estrategia de gestión:
- Cuando el alternador supera un límite de trabajo prefijado, la UCE de la red de a bordo transmite un mensaje de exceso de carga a través del Can-Bus (pág. 105).
- La UCE del climatizador interpreta el mensaje y desactiva el compresor al tiempo que desconecta los electroventiladores (pág. 105).
- Esta acción reduce drásticamente el consumo de corriente impidiendo la descarga de la batería (pág. 105).

## Valores de referencia

- Bornes de evaluación del alternador: borne L (tensión de trabajo) y borne +/DF (rendimiento) (pág. 105).

## Errores de concepto frecuentes

- Creer que el climatizador funciona al máximo rendimiento ignorando las situaciones de sobrecarga eléctrica del alternador (pág. 105).
