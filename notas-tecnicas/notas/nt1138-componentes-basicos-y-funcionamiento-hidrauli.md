---
id: ssc.sin-clasificar.componentes-basicos-y-funcionamiento-hidraulico-del-circuito-frigorifico
modulo: ssc
unidad: sin-clasificar
nt: 1138
tipo: proceso
subtipo: fundamento
titulo: "Componentes Básicos Y Funcionamiento Hidráulico Del Circuito Frigorífico"
menu: "Componentes Básicos Y Funcionamiento H"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la función de los componentes principales y las transformaciones de estado, presión y temperatura en los tramos de alta y baja presión del circuito cerrado de A/C.

## Fundamento

Ciclo cerrado por compresión de vapor. El compresor aporta trabajo mecánico para elevación de presión; el condensador licúa el gas cediendo calor; la válvula de expansión reduce la presión provocando ebullición; el evaporador absorbe calor del aire del habitáculo.

## Condiciones previas

Motor en marcha con el sistema de aire acondicionado activado.

## Desarrollo

* **Componentes básicos:**
  - *Compresor:* Eleva la presión del gas y lo hace circular.
  - *Condensador:* Radiador frontal que enfría y licúa el gas comprimido.
  - *Filtro deshidratador:* Retiene impurezas y agua del líquido que sale del condensador.
  - *Transmisor de presión:* Mide la presión en alta (trinaria o sensor MAP).
  - *Válvula de expansión:* Distensa e inyecta el gas hacia el evaporador.
  - *Evaporador:* Radiador interno donde se evapora el gas, enfriando (de 24 ºC a 4 ºC), deshumidificando y depurando el aire.
  - *Silenciador - Depósito receptor:* Ubicado en baja antes del compresor para evitar la entrada de líquido al compresor (no instalado en todos los sistemas).
* **Secuencia del flujo hidráulico:**
  - *Tramo de Alta Presión:*
    1. Compresor aspira gas frío en baja a 1,2 bar y -7 ºC.
    2. Compresor impulsa gas gaseoso a **14 bar y 65 ºC**.
    3. Gas entra al condensador, se enfría por aire forzado y se licúa saliendo a **14 bar y 55 ºC**.
    4. Atraviesa el filtro deshidratador manteniendo **14 bar y 55 ºC** hasta la válvula de expansión.
  - *Tramo de Baja Presión:*
    5. La válvula de expansión pulveriza el líquido al evaporador; la presión cae a **1,2 bar** y la temperatura a **-7 ºC**.
    6. En el evaporador, el refrigerante hierve absorbiendo el calor del aire de la turbina (el aire entra a 24 ºC y sale a 4 ºC, bajando unos 20 ºC).
    7. El gas gaseoso frío retorna al compresor a **1,2 bar y -7 ºC**.
* **Estanqueidad:** Tuberías rígidas de aluminio, flexibles de neopreno con barrera de nylon y juntas tóricas hidrogenadas verdes (HNBR) resistentes hasta 130 ºC.

## Valores de referencia

| Tramo / Componente | Estado del Refrigerante | Presión de Trabajo | Temperatura del Refrigerante / Aire |
| :--- | :--- | :--- | :--- |
| Salida del Compresor (Alta) | Gaseoso | 14 bar | 65 ºC |
| Salida del Condensador (Alta) | Líquido | 14 bar | 55 ºC |
| Salida del Filtro (Alta) | Líquido | 14 bar | 55 ºC |
| Salida Válvula / Evaporador (Baja) | Mezcla / Gaseoso | 1,2 bar | -7 ºC |
| Aire de ventilación en Evaporador | Aire atmosférico | Entrada a 24 ºC | Salida a 4 ºC en difusores |
| Resistencia de Juntas HNBR | Caucho sintético verde | Presión de estanqueidad | Resisten hasta 130 ºC |

## Interpretación y errores frecuentes

* Permitir el ingreso de refrigerante líquido al compresor; causa el deterioro irreparable de los mecanismos internos por incompresibilidad de líquidos.

## Imágenes requeridas

- Esquema del circuito hidráulico con presiones, temperaturas y componentes básicos — Fuente: Nº10. Introducción y tipos de gases.pdf, págs. 21 y 22
