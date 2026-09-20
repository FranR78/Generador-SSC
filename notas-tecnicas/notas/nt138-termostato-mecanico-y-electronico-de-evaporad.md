---
id: ssc.clima.termostato-mecanico-y-electronico-de-evaporador
modulo: ssc
unidad: clima
nt: 138
titulo: "Termostato Mecánico Y Electrónico De Evaporador"
ubicacion: "Bulbo/sonda insertada entre las aletas del evaporador; cuerpo/caja instalado en la carcasa o panel [174-177]"
aplicacion: "Climatizadores cíclicos de compresor de cilindrada fija [41, 176, 178]"
menu: "Termostato Mecánico Y Electrónico De E"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Monitorizar la temperatura del evaporador y desconectar eléctricamente el compresor cuando la temperatura roza los 0 ºC para evitar la congelación del agua condensada en sus aletas [31, 68, 174, 175, 178].

## Principio de funcionamiento

- **Termostato Mecánico:** cuenta con un sensor a tubo capilar cargado con gas unido a un fuelle interno. Al enfriarse el evaporador, la presión del gas disminuye venciendo la fuerza del muelle (Fm) y basculando una palanca que abre los contactos eléctricos. Incluye pomo de regulación manual [174, 175].  
- **Termostato Electrónico:** utiliza una sonda de temperatura NTC conectada a una centralita de mando con potenciómetro. La centralita procesa la resistencia de la sonda y activa un relé de salida para el embrague del compresor [176-179].

## Características

- **Mecánico:** fuelle, capilar con sensor, muelle, palanca, tornillo de regulación y contactos eléctricos (2 ó 3 bornes) [175, 176].  
- **Electrónico:** sonda NTC, reostato/potenciómetro de control, centralita electrónica y relé de acoplamiento [177-179].

## Valores de trabajo

Umbral de desconexión por baja temperatura: desactiva el compresor al aproximarse a 0 ºC / +1 ºC en las aletas del evaporador [68, 175].

## Anomalías frecuentes

Fuga de gas en el tubo capilar mecánico; contactos pegados; descalibración del muelle regulador; fallo de la sonda NTC electrónica [31, 159, 175].

## Comportamiento en avería

- Si no desconecta al llegar a 0 ºC: el evaporador se congela, bloqueando el paso de aire y anulando la ventilación en las rejillas [31, 68, 159].  
- Si permanece abierto: el compresor no se acopla en ningún momento [31, 82].

## Cómo comprobarlo

- *En mecánico:* verificar continuidad entre bornes sumergiendo la sonda en agua con hielo (debe abrir contactos a aprox. 0 ºC) [175].  
- *En electrónico:* medir el valor de resistencia en ohmios de la sonda NTC a diferentes temperaturas [177-179].
