---
id: ssc.sin-clasificar.conmutador-de-presion-trinaria-2
modulo: ssc
unidad: sin-clasificar
nt: 1206
titulo: "Conmutador De Presión (Trinaria)"
ubicacion: "Montado directamente en la tubería del tramo de alta presión o en el filtro deshidratador"
aplicacion: "Circuitos de aire acondicionado y climatización de vehículos automóviles (sustituido en modelos actuales por sensor MAP)"
menu: "Conmutador De Presión (Trinaria)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Vigilar y limitar las condiciones de presión del circuito hidráulico del climatizador en el lado de alta. Desactiva el compresor por medio del embrague electromagnético si la presión está fuera de los límites de seguridad y conecta el electroventilador para asegurar el caudal de aire de refrigeración.

## Principio de funcionamiento

Conmutador electromecánico presostático triple. La presión ejercida por el fluido refrigerante en el lado de alta sobre un mecanismo interno de membrana desplaza contactos eléctricos para abrir o cerrar los circuitos de control del compresor y del electroventilador.

## Características

Interruptor combinado triple de 4 vías o bornes eléctricos (bornes 1 y 2 para el control del compresor; bornes 3 y 4 para la activación del electroventilador). Cuerpo metálico con rosca de unión estanca al circuito de alta.

## Valores de trabajo

* Corte por baja presión: **P < 2 bar** (con motor en marcha y A/C activado; indica presencia de fuga de refrigerante).
* Conexión del electroventilador a máxima velocidad: **P > 16 bar** (con A/C activado e incremento de presión en alta).
* Corte por alta presión: **P > 24 a 32 bar** (según el tarado del presostato; indica sobrepresión por suciedad en el condensador u obturación del circuito).

## Anomalías frecuentes

* Fugas de fluido refrigerante por el cuerpo o la rosca del conmutador.
* Descalibrado o fatiga de los muelles y membranas internas por picos de presión.
* Sulfatación de los bornes de conexión eléctrica.
* Fusión o fogueo de los contactos por arcos eléctricos.

## Comportamiento en avería

El conductor percibe que el aire acondicionado no enfría. Si los contactos 1 y 2 quedan abiertos permanentemente, el compresor no acopla; si fallan los contactos 3 y 4, el electroventilador no salta a máxima velocidad, provocando sobrecalentamiento en el tramo de alta; si los contactos se quedan pegados, el compresor no se desconecta ante fugas o sobrepresiones peligrosas.

## Cómo comprobarlo

* Con el conector eléctrico desenchufado, medir continuidad con un polímetro en función de óhmetro:
  - **Entre bornes 1 y:** Debe dar continuidad (0 Ω) a presión normal de reposo/trabajo (entre 2 bar y 24-32 bar). Si da circuito abierto (infinito / OL) con presión correcta en el circuito de alta, el presostato está averiado.
  - **Entre bornes 3 y:** Debe dar circuito abierto (infinito / OL) con presión inferior a 16 bar, y continuidad (0 Ω) cuando la presión en el tramo de alta supera los 16 bar.
* Verificar simultáneamente los valores reales de presión hidráulica conectando el puente de manómetros en la toma de servicio de alta.
