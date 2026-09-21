---
id: ssc.sin-clasificar.servomotor-de-trampilla-con-comunicacion-lin
modulo: ssc
unidad: sin-clasificar
nt: 454
titulo: "Servomotor De Trampilla Con Comunicación Lin"
codigo: "No documentado en fuentes"
ubicacion: "Mueble climatizador del vehículo"
aplicacion: "Sistema de climatización Climatronic (Audi A7) mediante unidad de control J255 o pantalla trasera E265"
menu: "Servomotor De Trampilla Con Co No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Accionar las trampillas del sistema de climatización ajustando la distribución, mezcla y caudal de aire según las órdenes transmitidas por la unidad de control a través del bus LIN.

## Principio de funcionamiento

Recibe órdenes digitales multiplexadas mediante una conexión en serie por bus LIN. Cada servomotor adapta su posición y se activa individualmente en función de la dirección atribuida a su trampilla durante el proceso de auto-direccionamiento.

## Características

Conector eléctrico de 4 vías con la siguiente distribución de pines:
- **Borne A1:** Borne 31 (Masa).
- **Borne A2:** LIN in (Entrada de señal del bus).
- **Borne A3:** LIN out (Salida de señal del bus).
- **Borne A4:** Borne 30 (Positivo de alimentación).

## Valores de trabajo

| Parámetro / Conexión | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Alimentación eléctrica** | **Borne 30 (A4) y Borne 31 (A1)** | Tensión continua de batería |
| **Línea de datos** | **Bus LIN (A2 in / A3 out)** | Conexión en serie multiplexada |

## Anomalías frecuentes

Corte o interrupción del bus LIN; cruce e intercambio accidental de conectores entre varios servomotores durante intervenciones de reparación.

## Comportamiento en avería

Si se interrumpe la línea LIN en un servomotor, este y todos los servomotores conectados en serie por detrás (aguas abajo) quedan inoperativos y la unidad los registra como defectuosos. Si se cruzan los conectores, mantendrán las funciones antiguas hasta ejecutar un nuevo auto-direccionamiento, tras el cual responderán a trampillas equivocadas.

## Cómo comprobarlo

Conectar el equipo de diagnosis VAS Scan Tool y realizar la lectura del registro de memoria de averías (DTC) de la unidad J255 o E265.
