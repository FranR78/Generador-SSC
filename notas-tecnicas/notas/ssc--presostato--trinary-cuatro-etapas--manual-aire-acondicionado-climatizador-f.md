---
id: ssc.presostato.trinary-cuatro-etapas.manual-aire-acondicionado-climatizador-f
modulo: ssc
unidad: clima
nt: 867
tipo: elemento
clase: componente
titulo: "Presostato de cuatro etapas"
menu: "Presostato de cuatro etapas"
grupo: "Control de climatización"
clave: presostato
variante: trinary-cuatro-etapas
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, págs. 13-14"
relacionados: ["embrague-compresor", "electroventilador-condensador"]
palabras: ["presostato", "trinary", "cuatro etapas", "corte por baja", "corte por alta", "velocidad del ventilador"]
---

## Misión

Supervisar de forma continuada las presiones del fluido refrigerante en la línea de alta presión para conectar las velocidades del electroventilador y proteger el compresor contra faltas de carga o sobrepresiones peligrosas. (págs. 13-14)

## Tipos y características

Sensor e interruptor hidromecánico de presión de cuatro etapas (Trinary) montado en la tubería de alta presión, dividiendo internamente su mecanismo en dos zonas de trabajo: una para el control de los ventiladores de refrigeración y otra para el circuito de activación del compresor. (págs. 13-14)

## Principio de funcionamiento

Procesa la señal de presión del fluido repartida en cuatro secuencias o etapas operativas:
- **1ª Etapa (Sin líquido refrigerante / Presión insuficiente):** Ante una fuga o falta de gas, la baja presión mantiene abierto el contacto eléctrico de la línea del compresor, impidiendo su acoplamiento para evitar el trabajo sin aceite. (pág. 13)
- **2ª Etapa (Con líquido refrigerante / Presión de trabajo normal):** Al alcanzar la presión de servicio adecuada, el contacto se cierra, permitiendo el paso de corriente para activar el acoplamiento magnético del compresor. (pág. 13)
- **3ª Etapa (Aumento de presión / Ventilador a máxima velocidad):** Cuando la presión de alta se eleva por incremento térmico en el condensador, el presostato cierra el contacto del electroventilador para conectarlo a su máxima velocidad de soplado y forzar la condensación. (pág. 13)
- **4ª Etapa (Desconexión por sobrepresión alta):** Si la presión alcanza el límite máximo de seguridad, se abre de inmediato el contacto del compresor para interrumpir su funcionamiento y evitar el reventón de mangueras o componentes. (pág. 14)

## Anomalías frecuentes

Sulfatación de bornes o agarrotamiento del diafragma interno por picos continuos de sobrepresión. (págs. 13-14)

## Comportamiento en avería

Imposibilidad de acoplar el compresor por fallo en la 1ª/2ª etapa o falta de activación de la velocidad rápida del ventilador, provocando sobrecalentamiento del condensador. (págs. 13-14)

## Cómo comprobarlo

Medir la continuidad eléctrica con multímetro entre las bornes de la etapa del compresor y de los ventiladores verificando la conmutación al presurizar la toma. (págs. 13-14)

## Imágenes requeridas

- Esquema funcional de las cuatro etapas del presostato trinary identificando los contactos del compresor y del electroventilador — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, págs. 13-14
