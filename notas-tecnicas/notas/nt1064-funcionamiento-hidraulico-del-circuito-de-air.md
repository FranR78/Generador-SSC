---
id: ssc.sin-clasificar.funcionamiento-hidraulico-del-circuito-de-aire-acondicionado
modulo: ssc
unidad: sin-clasificar
nt: 1064
tipo: proceso
subtipo: fundamento
titulo: "Funcionamiento Hidráulico Del Circuito De Aire Acondicionado"
menu: "Funcionamiento Hidráulico Del Circuito"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la secuencia de transformación de fase, variaciones de presión y temperatura y flujo del fluido refrigerante en los tramos de alta y baja presión del circuito frigorífico.

## Fundamento

Ciclo frigorífico por compresión de vapor en circuito cerrado. El compresor aporta trabajo mecánico para elevar la energía del gas; el condensador disipa energía al exterior licuando el gas; la válvula de expansión genera una caída de presión por estrangulamiento; y el evaporador absorbe calor del habitáculo para evaporar el líquido.

## Condiciones previas

Motor en marcha a 1.500–2.000 rpm con el sistema de aire acondicionado conectado y la turbina de aire fresco funcionando.

## Desarrollo

* **Tramo de Alta Presión (desde la salida del compresor hasta la válvula de expansión):**
  1. El compresor aspira gas frío a 1,2 bar y -7 ºC, lo comprime e impulsa a la línea de alta a ~14 bar y ~65 ºC en estado gaseoso.
  2. El gas entra por la parte superior del condensador. El flujo de aire de la marcha o del electroventilador lo enfría. Al alcanzar el punto de rocío a 14 bar, el gas se condensa y pasa a estado líquido, saliendo por la parte inferior a ~14 bar y ~55 ºC.
  3. El líquido atraviesa el filtro deshidratador, donde se eliminan impurezas y gotas de agua, continuando a ~14 bar y ~55 ºC hacia la entrada de la válvula de expansión.
* **Tramo de Baja Presión (desde la salida de la válvula de expansión hasta la entrada del compresor):**
  4. La válvula de expansión atomiza e inyecta el refrigerante hacia el evaporador. Se produce una caída instantánea de presión hasta ~1,2 bar y la temperatura cae a -7 ºC.
  5. En el evaporador, el refrigerante líquido a baja presión entra en ebullición absorbiendo el calor del aire del habitáculo impulsado por la turbina. El aire entra a 24 ºC y sale a 4 ºC (caída de 20 ºC).
  6. El refrigerante totalmente evaporado en estado gaseoso sale del evaporador a 1,2 bar y -7 ºC, atraviesa el silenciador/depósito receptor y retorna a la boca de aspiración del compresor para reiniciar el ciclo.
* **Estanqueidad y canalización:**
  - Tuberías de aluminio rígido y latiguillos de neopreno con barrera interna de nylon.
  - Estanqueidad mediante juntas tóricas verdes de caucho hidrogenado (HNBR), resistentes hasta 130 ºC.

## Valores de referencia

| Tramo del Circuito / Componente | Estado de Fase del Gas | Presión de Trabajo | Temperatura del Refrigerante |
| :--- | :--- | :--- | :--- |
| Salida del Compresor (Entrada Condensador) | Gaseoso | ~14 bar | ~65 ºC |
| Salida del Condensador (Entrada Filtro) | Líquido | ~14 bar | ~55 ºC |
| Entrada a la Válvula de Expansión | Líquido | ~14 bar | ~55 ºC |
| Salida de la Válvula de Expansión (Evaporador) | Mezcla Líquido/Vapor | ~1,2 bar | -7 ºC |
| Salida del Evaporador (Aspiración Compresor) | Gaseoso | ~1,2 bar | -7 ºC |
| Aire de ventilación atravesando el evaporador | Aire atmosférico | Entrada a 24 ºC | Salida a 4 ºC en difusores |

## Interpretación y errores frecuentes

* Permitir la entrada de refrigerante en estado líquido al compresor (golpe de líquido); destruye las láminas de válvulas y los pistones al ser los líquidos incompresibles.
* Montar juntas tóricas negras convencionales de nitrilo en lugar de juntas verdes HNBR; las juntas convencionales se degradan con el aceite sintético PAG/PAO causando fugas de gas.

## Verificación final

Verificar con la mano que la tubería de alta presión está caliente (~55–65 ºC) y la tubería de baja presión está muy fría o sudada (~-7 a 2 ºC).

## Seguridad y normativa

Utilización obligatoria de gafas estancas y guantes de protección contra quemaduras por congelación.

💡 ¿Quieres que continuemos con la siguiente tanda de páginas del documento (Unidad: Refrigerantes y Aceites, Unidad: Equipos de reparación y herramientas) en la próxima respuesta?

## Imágenes requeridas

- Esquema del circuito frigorífico con presiones, temperaturas y fases del refrigerante — Fuente: Nº10. Autodidactico Diagonostico y climatización OCR.pdf, pág. 22
