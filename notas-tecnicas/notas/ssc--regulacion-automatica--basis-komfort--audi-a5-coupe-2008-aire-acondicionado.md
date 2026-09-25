---
id: ssc.regulacion-automatica.basis-komfort.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 841
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Arquitectura de climatización versiones Basis y Komfort"
menu: "Arquitectura de climatización versione"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: basis-komfort
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 206, 226, 229, 307-308"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-calidad-aire"]
palabras: ["Basis", "Komfort", "pared divisoria", "regulación bizona", "monozona", "G238", "G355"]
---

## Objeto

Establecer las diferencias técnicas, componentes y esquemas de distribución entre la versión estándar de aire acondicionado monozona (Basis) y la versión climatizador automático bizona (Komfort). (págs. 206, 226, 307)

## Fundamento

La versión Basis distribuye una única temperatura homogénea para todo el habitáculo mediante un climatizador simplificado. La versión Komfort dispone de circuitos mecánicos y electrónicos divididos que permiten regular de forma independiente la temperatura y el flujo de aire para el lado izquierdo y derecho, integrando sensores ambientales avanzados. (págs. 206, 226, 307-308)

## Desarrollo

- **Climatizador versión Basis:** La carcasa interna no equipa paredes divisorias en el lado del aire. Las chapaletas de mezcla y reposapiés están comunicadas entre sí por varillas de unión y accionadas por servomotores únicos (V68 para temperatura global y V261 para reposapiés). No equipa sensor de calidad del aire G238, sensor de humedad G355 ni difusores traseros ajustables. (págs. 226, 307)
- **Climatizador versión Komfort:** La carcasa de mezcla cuenta con una pared divisoria central hermética. Dispone de regulación bizona independiente con servomotores individuales para temperatura izquierda (V158), temperatura derecha (V159), vano reposapiés izquierdo (V108), vano reposapiés derecho (V109), difusor central izquierdo (V110) y derecho (V111). Incorpora de serie el sensor de calidad del aire G238 en la toma de aire fresco y el sensor de humedad G355 en la base del retrovisor interior. (págs. 229, 307-308)

## Valores de referencia

- Configuración Basis: 1 zona de temperatura, 1 curva de regulación calculada. (pág. 106)
- Configuración Komfort: 2 zonas de regulación independientes (adaptables automáticamente según capota abierta o cerrada en modelos Cabriolet). (págs. 33, 106)

## Errores de concepto frecuentes

- Intentar codificar la presencia del sensor de calidad del aire G238 o válvulas de corte en una unidad de control instalada en un vehículo versión Basis, lo que genera fallos permanentes en el autodiagnóstico. (págs. 11, 226)

## Imágenes requeridas

- Vista seccionada del climatizador Komfort mostrando la pared divisoria de separación entre los flujos izquierdo y derecho — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 307
