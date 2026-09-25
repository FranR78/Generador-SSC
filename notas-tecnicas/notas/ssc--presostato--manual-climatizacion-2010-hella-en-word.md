---
id: ssc.presostato.manual-climatizacion-2010-hella-en-word
modulo: ssc
unidad: clima
nt: 875
tipo: elemento
clase: componente
titulo: "Conmutador de presión para climatizador F129"
codigo: "F129"
menu: "Conmutador de presión para cli F129"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "Hella"
fuentes: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, págs. 38-40, 42"
relacionados: ["embrague-compresor", "electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["F129", "presostato triple", "0", "2 MPa", "1", "6 MPa", "3", "2 MPa", "protección de presión"]
---

## Misión

Supervisar los niveles de alta presión en el circuito frigorífico para desconectar el compresor ante presiones extremas (por defecto o exceso) y accionar el segundo escalón de velocidad del electroventilador. (págs. 38, 42)

## Tipos y características

Presostato hidromecánico de triple función (Trinary) montado en la tubería de alta presión. (págs. 38, 42)

## Principio de funcionamiento

Integra tres contactos eléctricos accionados por la presión del refrigerante:
- **Desconexión por baja/alta presión:** Desconecta el acoplamiento magnético N25 si la presión cae por debajo de 0,2 MPa (2 bar) o si supera los 3,2 MPa (32 bar). (pág. 42)
- **Conmutación del ventilador:** Cierra el contacto hacia el relé J101 cuando la alta presión alcanza los 1,6 MPa (16 bar), activando la velocidad rápida del ventilador V7 para forzar la condensación. (pág. 42)

## Valores de trabajo

- Umbral de corte por baja presión: < 0,2 MPa (2 bar). (pág. 42)
- Umbral de activación del 2º escalón del ventilador: > 1,6 MPa (16 bar). (pág. 42)
- Umbral de corte por alta presión: > 3,2 MPa (32 bar). (pág. 42)

## Anomalías frecuentes

Sulfatación de contactos o fallo de conmutación interna por picos reiterados de sobrepresión. (págs. 38, 42)

## Comportamiento en avería

Inoperatividad del acoplamiento del compresor N25 o falta de activación del 2º escalón de los electroventiladores. (págs. 38, 42)

## Cómo comprobarlo

Verificar la continuidad eléctrica de sus bornes con multímetro o comprobar los estados con el equipo de autodiagnóstico. (págs. 38, 42)

## Mantenimiento

En instalaciones de nueva generación este conmutador hidromecánico es sustituido por un transmisor de alta presión piezoeléctrico (G65). (pág. 42)

## Imágenes requeridas

- Esquema eléctrico de conexiones del presostato F129 en la línea de control del relé del compresor y del ventilador — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 42
