---
id: ssc.presostato.trinaria.aa-automocion-md-fr
modulo: ssc
unidad: clima
nt: 495
tipo: elemento
clase: componente
titulo: "Presostato de 3 funciones"
menu: "Presostato de 3 funciones"
grupo: "Circuito frigorífico"
clave: presostato
variante: trinaria
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
fuentes: "AA AUTOMOCION MD FR.pdf, págs. 132-134"
relacionados: ["compresor", "electroventilador-condensador", "relé"]
palabras: ["válvula trinaria", "tres funciones", "corte por baja", "corte por alta", "control ventilador"]
---

## Misión

Agrupar en un solo cuerpo tres funciones de seguridad y control: protección por mínima presión, protección por máxima presión y gestión automática de la puesta en marcha/paro del electroventilador del condensador. (pág. 133)

## Tipos y características

Denominado comúnmente Válvula Trinara. Instalado en la tubería o filtro deshidratador en el tramo de Alta Presión. Dispone de 4 terminales eléctricos: un par para el circuito de seguridad del compresor (en serie con el termostato y embrague) y otro par para excitar el relé del electroventilador. (pág. 132, 133)

## Principio de funcionamiento

Posee dos pares de contactos independientes accionados por membranas de presión:
- Primer par (seguridad): abre los contactos si la presión baja de 2-3 bar (mínima) o si supera los 25-27 bar (máxima).
- Segundo par (ventilador): cierra los contactos cuando la presión de alta sube entre 14 y 17 bar, alimentando el relé del electroventilador para enfriar el condensador. Cuando la presión desciende a 11-14 bar, vuelve a abrir los contactos desactivando el ventilador para ahorrar energía.

## Valores de trabajo

- Presostato de mínima: corte entre 2 y 3 bar.
- Presostato de máxima: corte entre 25 y 27 bar.
- Control de electroventilador: conexión entre 14 y 17 bar; desconexión entre 11 y 14 bar. (pág. 133)

## Anomalías frecuentes

Avería en los contactos de mando del electroventilador (el ventilador no arranca al subir la presión). Fogueado de contactos o fallo de estanqueidad. (pág. 132, 187)

## Comportamiento en avería

Si falla la etapa de control del ventilador, la alta presión sube sin control hasta llegar a 25-27 bar donde el compresor corta discontinuamente por máxima. Si falla el par de contactos de seguridad, el compresor no se activa en absoluto. (pág. 133, 187, 188)

## Cómo comprobarlo

Conectar manómetros e inspeccionar con multímetro los dos pares de terminales:
- Par de seguridad: debe dar continuidad (0 ohm) entre 3 y 25 bar.
- Par del ventilador: debe dar continuidad cuando el manómetro de alta supere los 14-17 bar. (pág. 133)

## Mantenimiento

Reemplazo directo de la unidad en caso de descalibración o fallo de contactos. (pág. 132)

## Imágenes requeridas

- Esquema eléctrico y de funcionamiento de la Válvula Trinaria — Fuente: AA AUTOMOCION MD FR.pdf, pág. 133, 134
