---
id: ssc.servomotor-trampilla.sin-potenciometro.servomotores-sin-potenciometros
modulo: ssc
unidad: clima
nt: 555
tipo: elemento
clase: componente
titulo: "Servomotor de trampillas sin potenciómetro"
menu: "Servomotor de trampillas sin potencióm"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: sin-potenciometro
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
fuentes: "SERVOMOTORES SIN POTENCIOMETROS.pdf, págs. 81"
relacionados: ["unidad-control-j255", "lin-bus"]
palabras: ["motor paso a paso", "bus LIN", "conexión en serie", "sin potenciómetro"]
---

## Misión

Son los encargados de realizar el accionamiento de las diferentes chapaletas del sistema de climatización. (pág. 81)

## Tipos y características

Todos los servomotores de accionamiento presentan el mismo diseño, lo que permite asociarlos a cualquier chapaleta. Son motores paso a paso que no necesitan potenciómetros. Se conectan en serie y son gestionados a través de un LIN-Bus independiente.
El climatizador automático de zona única dispone de 6 servomotores, mientras que el climatizador automático de tres zonas posee 10 servomotores conectados en serie.
Asignación de bornes en el conector:
- A1: Borne 31 (masa).
- A2: LIN IN (entrada de datos LIN-Bus).
- A3: LIN OUT (salida de datos LIN-Bus).
- A4: Borne 30 (positivo constante). (pág. 81)

## Principio de funcionamiento

Funcionan como motores paso a paso gestionados por la unidad de control Climatronic J255 mediante comunicación por LIN-Bus en serie. Para que cada servomotor pueda ser asignado a su chapaleta correspondiente, debe vincularse con un código de dirección específico de cada accionamiento. (pág. 81)

## Valores de trabajo

- Alimentación eléctrica: Borne 30 en terminal A4 y Borne 31 en terminal A1.
- Línea de datos: LIN IN en terminal A2 y LIN OUT en terminal A3.
- Cantidad de actuadores: 6 servomotores en climatizador monozona y 10 servomotores en climatizador trizona. (pág. 81)

## Mantenimiento

Una vez realizado el direccionamiento, no se deben intercambiar los conectores ni los servomotores entre sí. (pág. 81)

## Imágenes requeridas

- Esquema de conexión en serie de los servomotores en el LIN-Bus con asignación de bornes (A1 a A4) — Fuente: SERVOMOTORES SIN POTENCIOMETROS.pdf, pág. 81
