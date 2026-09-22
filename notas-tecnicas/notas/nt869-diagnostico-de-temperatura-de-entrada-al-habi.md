---
id: ssc.sin-clasificar.diagnostico-de-temperatura-de-entrada-al-habitaculo-siempre-caliente
modulo: ssc
unidad: sin-clasificar
nt: 869
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Temperatura De Entrada Al Habitáculo Siempre Caliente"
menu: "Diagnóstico De Temperatura De Entrada "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe los pasos ordenados de diagnosis para localizar la causa por la cual la temperatura del aire introducido en el habitáculo se mantiene siempre caliente sin responder a los mandos. Aplica a sistemas con regulación electrónica de mezcla (Calefacción Motorizada y Autoclima).

## Fundamento

El ajuste de la temperatura depende del posicionamiento del motor de la trampilla de mezcla V68 y de la lectura del potenciómetro G92 y sondas térmicas. Si el motor V68 queda trabado en la posición de calor o la UCE recibe lecturas erróneas, el aire atraviesa continuamente el radiador de calefacción.

## Condiciones previas

Motor del vehículo a temperatura de trabajo y contacto encendido.

## Equipo y material

Lector de averías / equipo de diagnosis (VAG 1551 o equivalente) y herramienta manual para desmontaje de guarnecidos.

## Desarrollo

* **Componentes implicados que pueden provocar la avería:**
  - Motor de la trampilla de temperatura V68 (engranaje roto, motor quemado o atascado).
  - Potenciómetro de posición de la trampilla de temperatura G92 (integrado en V68).
  - Articulación o palanca mecánica de la trampilla de mezcla.
  - Sondas de temperatura (G17 exterior, G56 habitáculo, G191/G192 aire de entrada).
  - Unidad de control de climatización J255 / Radiocasete R.
* **Pasos ordenados para la localización de la avería:**
  1. Conectar el lector de averías a la toma T16 e interrogar la memoria con la función "02".
  2. Ejecutar el diagnóstico de actuadores (función "03") seleccionando el motor V68 para comprobar si conmuta físicamente de frío a calor.
  3. Consultar en el bloque de valores de medición (función "08", Grupo 002) la tensión real y calculada del potenciómetro G92.
  4. Si los valores de G92 no varían o la trampilla no mueve, acceder físicamente al motor V68 en la caja climática y verificar si la varilla mecánica está trabada.
  5. Desmontar y sustituir el motor V68/G92 si presenta fallo interno.
  6. Realizar obligatoriamente el **Ajuste Básico (función "04", Grupo 002)** para memorizar los topes de V68.

## Valores de referencia

| Función de Diagnosis | Grupo / Campo | Valor de Referencia |
| :--- | :--- | :--- |
| Función "08" (Bloques) | Grupo 002 / Campo 1 y 2 | Tensión real y calculada de G92 en V (0,76 V a 4,21 V) |
| Función "04" (Ajuste Básico) | Grupo 002 | Aprendizaje de topes mínimo y máximo del motor V68 |

## Interpretación y errores frecuentes

* Omitir el Ajuste Básico (función 04) tras cambiar el motor V68; provoca que la UCE no reconozca los topes y la temperatura siga funcionando de forma errática.
* Confundir un fallo mecánico de la varilla atascada con un fallo de la centralita electrónica.

## Verificación final

Comprobar en la función "08" que la tensión de G92 varía de forma fluida y verificar físicamente que al seleccionar la temperatura mínima sale aire fresco por los difusores.
