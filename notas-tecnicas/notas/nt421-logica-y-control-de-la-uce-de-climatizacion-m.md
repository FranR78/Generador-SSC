---
id: ssc.sin-clasificar.logica-y-control-de-la-uce-de-climatizacion-mmi-y-modelo-termico
modulo: ssc
unidad: clima
nt: 421
tipo: proceso
subtipo: fundamento
titulo: "Lógica Y Control De La Uce De Climatización (Mmi Y Modelo Térmico)"
menu: "Lógica Y Control De La Uce De Climatiz"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el procesamiento interno de datos de la UCE y los tipos de interfaces hombre-máquina (MMI) para la regulación de la temperatura de la cabina.

## Fundamento

La UCE compara la temperatura requerida por el usuario (TR) con las lecturas de los sensores para calcular la condición climática objetivo (TTV) y ajustar el caudal de aire (Qs) y las trampillas mediante un modelo térmico.

## Condiciones previas

Alimentación eléctrica y sistema configurado en modo Manual, Semiautomático o Automático.

## Desarrollo

* **Entradas base requeridas por la UCE:**  
  - a) Temperatura deseada por el usuario (TR).  
  - b) Velocidad de la turbina interior (si está en modo manual).  
  - c) Temperatura del aire exterior (TE).  
  - d) Temperatura del aire interior/habitáculo (TA).  
  - e) Temperatura del agua del motor.  
  - f) Posición de las trampillas.  
* **Frecuencia de cálculo:** El ciclo de regulación del sensor de calentamiento y modelo térmico se efectúa cada 15 segundos.  
* **Tipos de interfaces de usuario (MMI):**  
  - **Regulación Manual:** Mando mecánico o eléctrico simple; el usuario mezcla manualmente abriendo el paso de agua o trampilla de calefacción.  
  - **Regulación Semiautomática:** Mando analógico; el usuario selecciona la temperatura y la UCE regula la mezcla de aire caliente y frío de forma automatizada.  
  - **Regulación Automática (Climatronic):** Mando digital; la UCE controla automáticamente la mezcla, el caudal de la turbina y la distribución de aire.

## Valores de referencia

| Parámetro | Período / Criterio |
|---|---|
| **Tiempo de refresco del modelo térmico** | **Cada 15 segundos** se ejecuta el algoritmo de control |

## Interpretación y errores frecuentes

- En modo automático, ignorar la selección de velocidad de turbina del usuario: en AUTO, la UCE anula el caudal manual (Qu) e impone el caudal automatizado (Qs).

## Verificación final

Comprobación del movimiento suave de las trampillas de mezcla al modificar el valor TR en el display.
