---
id: ssc.valvula-reguladora-compresor.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 258
tipo: elemento
clase: componente
titulo: "Válvula reguladora del compresor"
codigo: "6 SEU 12"
menu: "Válvula reguladora del compres 6 SEU 12"
grupo: "Circuito frigorífico"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: compresor
marca: "Denso"
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. Secciones Regulación externa, Compresor 6 SEU 12 de Denso y Válvula reguladora"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["regulación externa", "PWM", "400 Hz", "señal de proporción de período", "protección sobrecarga"]
---

## Misión

Regular de forma continua y externa la cilindrada y el caudal del compresor (desde el 0% hasta el 100%) modificando las presiones internas de la carcasa del cigüeñal/cárter por orden electromagnética de la unidad de control. (Secciones Compresor 6 SEU 12 de Denso y Válvula reguladora).

## Tipos y características

Válvula de regulación externa combinada electromagnética y mecánica, integrada en compresores de cilindrada variable sin embrague electromagnético (como el modelo Denso 6 SEU 12). Dispone de un elemento mecánico sensible a la baja presión y una unidad electromagnética alimentada con frecuencia fija. (Sección Válvula reguladora).

## Principio de funcionamiento

1. Control electromagnético: la unidad de mando activa la bobina con una señal de frecuencia fija de 400 Hz y proporción de período variable (PWM). Debido a los 400 Hz, el empujador se mantiene en estado «flotante» sin golpear los topes finales, regulando en centésimas de milímetro. (Sección Válvula reguladora).
2. Plena carga (máximo rendimiento): la válvula cierra el paso entre alta presión y cárter, comunicando la cámara del cárter (A) con la baja presión (C). La presión en el cárter cae y la alta presión desplaza el disco oscilante a la máxima inclinación. (Sección Válvula reguladora).
3. Rendimiento nulo (0% a <2%): al desconectar o reducir demanda, la válvula conecta alta presión (B) con la cámara del cárter (A). La presión se equilibra en las caras de los pistones y el muelle del disco lo desplaza a suministro nulo. (Sección Válvula reguladora).
4. Corrección mecánica interna: si la baja presión (C) sube en exceso, un elemento deformable interno libera el empujador para aumentar la cilindrada de forma puramente mecánica, restableciendo la baja presión a su valor adecuado. (Sección Válvula reguladora).

## Valores de trabajo

- Frecuencia de control de la señal de mando: 400 Hz. (Sección Válvula reguladora).
- Señal de activación: Modulación por anchura de impulsos (PWM / proporción de período variable). (Sección Válvula reguladora).
- Rango de regulación de caudal: de 0% (suministro nulo) a 100% (plena carga). (Sección Válvula reguladora).

## Anomalías frecuentes

Fallo eléctrico de la bobina electromagnética, agarrotamiento mecánico del empujador de la válvula por suciedad/virutas o deformación del elemento elástico sensible a la baja presión. (Sección Válvula reguladora).

## Comportamiento en avería

El compresor se queda fijo en rendimiento nulo (no enfría) o fijo en máxima cilindrada independientemente de la demanda. Si el compresor se bloquea internamente, la polea rompe su elemento amortiguador de goma con capa de grafito para evitar la rotura de la correa de accesorios del motor. (Secciones Válvula reguladora y Polea de accionamiento).

## Cómo comprobarlo

1. Medir con osciloscopio la señal de mando PWM enviada por la unidad de control a 400 Hz. (Sección Válvula reguladora).
2. Comprobar la resistencia eléctrica de la bobina de la válvula. (Sección Válvula reguladora).
3. Verificar el estado físico del disco de arrastre A y de la pieza de goma de protección de la polea por si existiera bloqueo del compresor. (Sección Polea de accionamiento).

## Mantenimiento

Asegurar la limpieza absoluta del fluido frigorífico; las impurezas pueden bloquear el recorrido flotante del empujador. En caso de salto de la protección de goma de la polea, reparar/sustituir el compresor bloqueado. (Secciones Válvula reguladora y Polea de accionamiento).

## Imágenes requeridas

- Detalle de la válvula reguladora con las conexiones de presión de cárter (A), alta presión (B) y baja presión (C) — Fuente: CLIMATIZADOR MD FRAN.docx, Sección Detalle de la válvula reguladora
