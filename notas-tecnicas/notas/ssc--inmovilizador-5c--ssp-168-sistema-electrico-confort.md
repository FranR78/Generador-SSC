---
id: ssc.inmovilizador-5c.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 514
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Inmovilizador electrónico 5C"
menu: "Inmovilizador electrónico 5C"
grupo: "Inmovilizador"
clave: inmovilizador-5c
area: electricidad-electronica
sistema: "NUEVO-inmovilizador"
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 49-51"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["inmovilizador 5c", "transponder", "cuadro de instrumentos j285", "j623", "j743", "n360", "codigo hexadecimal"]
---

## Objeto

Impedir el arranque del motor y la puesta en marcha del vehículo a personas no autorizadas mediante una arquitectura de seguridad digital criptográfica. (págs. 49-50)

## Fundamento

Generación de inmovilizador que evoluciona respecto a la 5A incorporando un nuevo transponder en las llaves y mayor robustez criptográfica. El cuadro de instrumentos J285 actúa como UCE maestra y valida las UCEs esclavas antes de autorizar el arranque. (págs. 49-50)

## Desarrollo

Estructura de componentes:
- UCE Maestra: Cuadro de instrumentos J285.
- UCEs Esclavas: UCE de motor J623, UCE mecatrónica del cambio DSG J743 y actuador de bloqueo de la columna de dirección N360.
- Elementos de lectura: Bobina lectora D2 y transponder integrado en la llave con mando.

Diagnóstico y valores de medición (Código de dirección 17 - Cuadro de instrumentos):
- Estado de la UCE Maestra: código hexadecimal de 20 cifras.
  - Dígitos: Estado del inmovilizador (1: virgen, 2: adaptado, 3: adaptando llaves).
  - Dígitos: Contador de nuevas identidades.
  - Dígitos: Número de llaves adaptadas.
  - Dígitos: Tiempo restante para conectar borne 15 tras un bloqueo.
  - Dígitos: Tiempo de bloqueo para descarga en servidor FAZIT.
  - Dígitos: Tiempo de bloqueo en minutos para acceso GeKo.
- Estado de UCEs Esclavas: código hexadecimal de 2 cifras convertible a binario de 8 cifras para verificar si está codificada, adaptada, si responde a solicitudes y si posee firma digital y contraseña válidas. (págs. 49-51)

## Valores de referencia

- Código de dirección de diagnosis: 17 (Cuadro de instrumentos).
- Valores de estado del inmovilizador (dígitos 1-2): 1 = virgen, 2 = adaptado, 3 = adaptando llaves. (págs. 50-51)

## Errores de concepto frecuentes

Creer que el inmovilizador solo bloquea la UCE del motor. En el inmovilizador 5C, la mecatrónica del cambio DSG (J743) y el bloqueo de la columna (N360) son UCEs esclavas que deben autenticarse de forma independiente ante el cuadro J285. (pág. 50)

## Imágenes requeridas

- Esquema de la red de componentes del inmovilizador 5C con J285, J623, J743, N360 y D2 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 49
