---
nt: 1
titulo: Compresor de aire acondicionado
codigo: Sin código documentado
menu: Compresor
grupo: Circuito frigorífico
aplicacion: [Sanden, Harrison, Denso, York, Zexel]
ubicacion: Compartimento motor, accionado por correa desde el cigüeñal
fuentes: AA Automoción (Hella), págs. 38-60
---

## Misión
Hacer circular de forma continuada el R-134a por el circuito. Aspira el refrigerante en
estado de vapor a baja presión y baja temperatura y lo comprime, elevando su presión y
temperatura para situarlo en el nivel de alta presión.

Es el **único componente que trabaja simultáneamente en baja y alta presión**, en su
entrada y su salida respectivamente.

## Principio de funcionamiento
Aprovecha el trabajo mecánico alternativo o rotativo. En los alternativos, los pistones
realizan cuatro fases: **aspiración, compresión, impulsión y descarga**.

- **Cilindrada fija:** el caudal es proporcional al régimen del motor.
- **Cilindrada variable de regulación interna:** la inclinación del plato porta pistones
  varía según la diferencia entre alta presión (AP), baja presión (BP) y presión de cárter
  (PC), gestionada por una válvula interna.
- **Cilindrada variable de regulación externa** (Denso 6 SEU 12): una electroválvula
  pilotada por la UCE controla el equilibrio de presiones del cárter y modifica la
  inclinación del disco entre el 0 % y el 100 % de rendimiento.

Resumen de la regulación interna:

| Si la baja presión… | Presión de cárter | Cilindrada |
|---|---|---|
| Aumenta sobre el punto de regulación | Se iguala a la de aspiración | **Máxima** |
| Disminuye (cilindrada excesiva) | Comunica con la alta y sube | **Mínima** |

## Características
- Variantes: alternativo de pistones, de paletas rotativas, de espiral (scroll), de
  cilindrada variable interna o externa.
- Lubricante específico sintético **PAG o PAO**. Nunca aceite mineral con R-134a.
- Cilindrada mínima de seguridad en los variables: **10,43 cm³** (el plato nunca llega a la
  vertical, por lubricación).
- Señal de control en regulación externa: **PWM**, con el empujador en estado flotante.

| Modelo | Cilindros | Cilindrada | rpm máx. | Aceite |
|---|---|---|---|---|
| York 206 / 209 / 210 | 2 | 99,7 / 138,8 / 168,5 cm³ | 6.000 | 225 / 255 / 285 ml |
| Sanden 505 / 507 / 508 / 510 | 5 | 87 / 108 / 138 / 161 cm³ | 6.500 a 4.000 | 100 a 175 ml |

## Valores de trabajo
Con 30 °C exteriores y el motor entre 1.500 y 1.800 rpm:

| Tipo | Alta presión | Baja presión |
|---|---|---|
| Cilindrada fija o cíclico | 10 a 20 bar | 0,8 a 2,2 bar |
| Cilindrada variable | 7,5 a 13 bar | 1,8 a 2,2 bar |

## Anomalías frecuentes
- Gripado por falta de lubricación o suciedad en el circuito.
- Limaduras metálicas o partículas de desgaste circulando.
- Fugas por la junta rotativa del eje (retén prensaestopas).
- Válvulas de láminas deformadas por entrada de refrigerante líquido o por grumos de
  material sellante.

## Comportamiento en avería
- En compresores de regulación externa sin embrague, al bloquearse se deforma o rompe la
  pieza preformada de goma con grafito de la polea: **la polea gira libre y no rompe la
  correa** del motor.
- Con las válvulas internas dañadas, alta y baja se igualan (baja entre 4,5 y 6 bar, igual
  a la alta) y desaparece la acción frigorífica.

## Cómo comprobarlo
**Herramienta:** estación de carga con manómetros y spray enfriador o refrigerante líquido.
**Puntos de medida:** tomas de servicio de alta y baja presión.

1. Motor a 1.500-1.800 rpm con el A/A activado.
2. Enfriar el bulbo de la válvula de expansión para forzar su cierre total.
3. La baja presión debe caer a valores de depresión (por debajo de 0 bar).
4. Parar el compresor manteniendo el bulbo frío: la aguja de baja debe quedarse quieta.
5. **Si la aguja sube rápidamente**, las presiones se comunican por válvulas defectuosas.

## Imágenes requeridas
- Sección transversal de un compresor alternativo con válvulas de láminas — AA Automoción, pág. 38
- Despiece del Harrison V5 y su válvula de regulación — Fig. 6.3.6 y 6.3.7
- Sanden en posición de cilindrada máxima y mínima — Fig. 6.3.10 y 6.3.11

## Advertencias
Tras un gripaje es imperativo lavar el circuito y montar un filtro de malla en el tubo de
aspiración. Sustituir siempre el filtro deshidratador al cambiar el compresor, y girar la
polea 10 veces a mano antes de arrancar.
