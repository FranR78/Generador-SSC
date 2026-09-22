---
id: ssc.sin-clasificar.arquitectura-estrategias-de-control-y-circuitos-de-climatizacion-en-ibiza-cordoba-99
modulo: ssc
unidad: sin-clasificar
nt: 858
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura, Estrategias De Control Y Circuitos De Climatización En Ibiza/Córdoba '99"
menu: "Arquitectura, Estrategias De Control Y"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe la distribución de componentes en los circuitos frigoríficos de alta y baja presión, la lógica de control del compresor y electroventiladores, y las estrategias de funcionamiento en desempañado y regulación automática. Aplica a la gama SEAT Ibiza/Córdoba '99.

## Fundamento

El circuito frigorífico se divide en alta presión (desde la descarga del compresor hasta la válvula de expansión) y baja presión (desde la válvula de expansión hasta la aspiración del compresor). La UCE del autoclima asume la regulación de la temperatura, la velocidad de la turbina, el compresor y la recirculación, comunicándose con el usuario a través del radiocasete.

## Desarrollo

* **Distribución de componentes por circuitos de presión:**
  - *Circuito de Alta Presión:* Salida/descarga del compresor, condensador, filtro deshidratador, conmutador de presión (F129 / G65) y entrada a la válvula de expansión.
  - *Circuito de Baja Presión:* Salida de la válvula de expansión, evaporador, silenciador de baja presión y tubería de aspiración al compresor.
* **Componentes no montados en Autoclima con motor de gasolina:**
  - No equipan conmutador de presión mecánico F129 (utilizan el transmisor electrónico G65).
* **Estrategia al seleccionar desorientación parabrisas (deshielo):**
  1. Se conecta automáticamente el compresor del aire acondicionado para deshidratar el aire.
  2. Aumenta casi al máximo la velocidad de la turbina V2 para impulsar mayor caudal.
  3. La trampilla de recirculación V113 se sitúa forzosamente en posición de entrada de aire del exterior (impide la recirculación).
* **Unidades que utilizan la señal del transmisor de temperatura exterior G17:**
  - La unidad del Radiocasete R (para mostrar la indicación en la pantalla).
  - La unidad del Autoclima J255 (para el cálculo de la mezcla y marcha del compresor).
* **Componentes accionados automáticamente para la regulación de temperatura:**
  - Trampilla de temperatura V68.
  - Turbina de aire V2.
  - Trampilla de recirculación V113.
  - Compresor de aire acondicionado N25.
  - *(Nota: Las trampillas de distribución de aire son de selección manual por el usuario)*.
* **Tipos de equipos de climatización disponibles en la gama '99:**
  1. Ventilación-Calefacción.
  2. Aire Acondicionado Manual.
  3. Calefacción Motorizada.
  4. Autoclima.
* **Componentes que afectan al funcionamiento de los electroventiladores del refrigerante:**
  - Conmutador térmico del radiador F18.
  - Conmutador de presión F129 / Transmisor G65.
  - Unidad de control del aire acondicionado J293.
  - Unidad de control del motor J623.

## Valores de referencia

| Parámetro / Estrategia | Estado o Valor | Condición de Validez |
| :--- | :--- | :--- |
| Salida contra el parabrisas | Compresor ON / Turbina casi máx / Recirculación exterior | Al seleccionar aire hacia el parabrisas |
| Unidades con señal de G17 | Radiocasete R y UCE Autoclima J255 | Reciben la lectura del sensor exterior G17 |

## Interpretación y errores frecuentes

* Creer que la unidad del autoclima controla automáticamente las trampillas de distribución de aire; en el Ibiza/Córdoba '99 las trampillas de distribución se mueven mecánicamente mediante cable.
* Confundir los componentes de alta presión con los de baja presión al instalar manómetros en las tomas del servicio.

## Verificación final

Verificar el acoplamiento del compresor y el cambio a aire exterior al seleccionar el modo de desorientación contra el parabrisas.

## Imágenes requeridas

- Esquema de distribución de componentes en el circuito frigorífico de alta y baja presión — Fuente: ce0.pdf, pág. 8
- Diagrama de componentes que intervienen en la activación de los electroventiladores de refrigeración — Fuente: ce0.pdf, pág. 13
