---
id: ssc.bomba-calor-climatizacion.6-compresores
modulo: ssc
unidad: clima
nt: 42
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Climatización por bomba de calor en vehículos eléctricos"
menu: "Climatización por bomba de calor en ve"
grupo: "Circuito frigorífico"
clave: bomba-calor-climatizacion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
marca: "Renault"
fuentes: "6. Compresores.pdf, págs. 52-53"
relacionados: ["compresor", "evaporador", "condensador", "valvula-expansion"]
palabras: ["bomba de calor", "Renault Zoe", "electroválvula 10", "electroválvula 11", "condensador interior", "orificio calibrado"]
---

## Objeto

Generación de frío o calor para el habitáculo de un vehículo eléctrico utilizando el mismo circuito de climatización y compresor mediante la inversión funcional de los intercambiadores (págs. 52-53).

## Fundamento

Modificando el trazado hidráulico mediante electroválvulas de conmutación, el refrigerante puede ceder calor en el habitáculo (modo calefacción) o extraer calor del habitáculo (modo refrigeración) sin depender de resistencias eléctricas de alto consumo (págs. 52-53).

## Desarrollo

Componentes del circuito (ejemplo Renault Zoe):
1. Condensador/evaporador externo delantero.
2. Compresor eléctrico de alto voltaje.
3. Filtro/acumulador en tramo de baja.
4. Condensador en el interior del habitáculo.
5. Evaporador en el interior del habitáculo.
6. Válvula expansora de orificio calibrado.
7. Calculador de climatización del automóvil.
8. Calculador para la bomba de calor.
9. Turbina de aire fresco.
10. Electroválvula de conmutación.
11. Electroválvula de conmutación 11 (pág. 52).

Modos de funcionamiento:
- Modo Climatización (Refrigerar): se activa la electroválvula (10) creando un *by-pass* que anula la válvula expansora colocada antes del condensador exterior (pág. 53). El compresor hace circular el refrigerante por ambos condensadores (1) y (4). La válvula de orificio calibrado (6) reduce la presión antes del evaporador interior (5). La trampilla de calefacción se cierra y la turbina (9) impulsa aire frío al habitáculo (pág. 53).



- Modo Calefacción (Calentar): se activa la electroválvula (11) anulando el paso hacia el evaporador interior (pág. 53). El compresor envía gas caliente al condensador interior (4). A continuación, la válvula de orificio calibrado (6) reduce la presión del gas que se dirige al condensador exterior (1), el cual pasa a funcionar como evaporador (pág. 53). El aire impulsado por la turbina (9) se calienta al atravesar el condensador interior (4) y entra caliente al habitáculo (pág. 53).

## Valores de referencia

- Regulación de expansión: válvula de orificio calibrado y filtro/acumulador en circuito de baja (págs. 52-53).

## Errores de concepto frecuentes

- Creer que la bomba de calor de un vehículo eléctrico requiere dos compresores independientes para generar frío y calor (págs. 52-53).

## Imágenes requeridas

- Esquema hidráulico de la bomba de calor funcionando en modo climatización para refrigerar el habitáculo — Fuente: 6. Compresores.pdf, pág. 53
- Esquema hidráulico de la bomba de calor funcionando en modo calefacción para calentar el habitáculo — Fuente: 6. Compresores.pdf, pág. 53
