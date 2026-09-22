---
id: ssc.sin-clasificar.arquitectura-funciones-y-componentes-en-climatizacion-y-refrigeracion
modulo: ssc
unidad: sin-clasificar
nt: 872
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura, Funciones Y Componentes En Climatización Y Refrigeración"
menu: "Arquitectura, Funciones Y Componentes "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica las afirmaciones técnicas correctas, las funciones asumidas por la UCE del Autoclima, las motorizaciones con transmisor G65 y los componentes de activación de los ventiladores del radiador. Aplica a los sistemas de climatización de SEAT Ibiza/Córdoba '99.

## Fundamento

Sistemas de climatización electrónica y analógica. La UCE del Autoclima asume la gestión de la mezcla de aire, velocidad de turbina, compresor y comunicación, mientras que los electroventiladores son gobernados por J293, F18, F129/G65 y la UCE del motor.

## Desarrollo

* **Afirmaciones técnicas verdaderas en la gama Ibiza/Córdoba '99:**
  - En todos los sistemas de climatización la selección de la distribución de aire se realiza mecánicamente mediante cables.
  - El Autoclima regula y mantiene automáticamente la temperatura seleccionada por el usuario.
  - La trampilla de recirculación es accionada de forma eléctrica en todos los casos (motor V113).
  - *(Es FALSO que la calefacción motorizada mantenga constante la temperatura o que el autoclima controle una trampilla de velocidad)*.
* **Funciones asumidas por la unidad de control del Autoclima J255:**
  - Control de la trampilla de temperatura (motor V68).
  - Control de la velocidad de la turbina (regulador J126 / motor V2).
  - Control del compresor de aire acondicionado (acoplamiento N25).
  - *(Es FALSO que controle directamente los ventiladores del refrigerante o la comunicación directa con el usuario; los ventiladores los gobierna J293 y la comunicación la realiza el radiocasete R)*.
* **Motorizaciones que montan el transmisor de presión electrónico G65:**
  - Exclusivamente en los **motores de gasolina** (los motores diésel montan el conmutador de presión mecánico F129).
* **Componentes existentes en un sistema de Calefacción Motorizada:**
  - Unidad de control J255 (codificada con puente a masa en pin 21).
  - Radiocasete R y panel con display E87.
  - Motor de la trampilla de temperatura V68 / G92.
  - Motor de la turbina V2 y regulador de régimen J126.
  - Motor de la trampilla de recirculación V113.
  - Mando de distribución de aire por cable con potenciómetro.
  - *(No equipa compresor, condensador, filtro deshidratador ni válvula de expansión)*.
* **Componentes que activan los ventiladores del líquido refrigerante:**
  - La unidad de control del aire acondicionado J293.
  - El conmutador térmico del radiador F18.
  - El conmutador de presión F129 / Transmisor G65.
  - La unidad de control del motor.
* **Unidades de control que utilizan la señal del transmisor de temperatura exterior G17:**
  - La unidad del Radiocasete R (para mostrar la lectura en el display).
  - La unidad del Autoclima J255 (para el cálculo de la mezcla de temperatura).
* **Componentes NO implicados en la regulación de la temperatura en modo automático:**
  - Mandos/cables de distribución de aire.
  - Conmutador de presión F129 / G65.
  - Interruptor térmico de la caja de aguas F38.

## Valores de referencia

| Elemento / Sistema | Configuración / Aplicación |
| :--- | :--- |
| Transmisor de presión G65 | Exclusivo para motores de GASOLINA |
| Conmutador de presión F129 | Exclusivo para motores DIÉSEL |
| Unidades receptoras de señal G17 | Radiocasete R y UCE Autoclima J255 |

## Interpretación y errores frecuentes

* Creer que la calefacción motorizada mantiene la temperatura constante; solo mueve la trampilla V68 a la posición solicitada pero no autorregula ante cambios térmicos.
* Confundir la unidad que gobierna los electroventiladores (J293) con la UCE del autoclima (J255).

## Imágenes requeridas

- Despiece esquemático de componentes de la unidad climática del Ibiza/Córdoba '99 — Fuente: ce2.pdf, pág. 11
