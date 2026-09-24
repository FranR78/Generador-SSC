---
id: ssc.elevalunas-electricos.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 511
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Elevalunas eléctricos y funciones de confort"
menu: "Elevalunas eléctricos y funciones de c"
grupo: "Elevalunas"
clave: elevalunas-electricos
area: confort-y-seguridad
sistema: "NUEVO-elevalunas"
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 42-43"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["elevalunas", "normalizacion", "apertura de confort", "antiaprisionamiento", "proteccion termica", "lin-bus"]
---

## Objeto

Gobernar el movimiento de los cristales de las puertas garantizando la protección antiaprisionamiento, el confort de manejo y la seguridad térmica de los motores. (págs. 42-43)

## Fundamento

Las unidades de control de puerta (J386, J387, J388, J389) comunican los cambios de estado de los conmutadores a la UCE de red de a bordo J519 mediante el LIN-Bus puertas, autorizando J519 la subida o bajada. (págs. 42-43)

## Desarrollo

El sistema abarca las siguientes funciones:
- Subida y bajada: comandada desde los pulsadores de las puertas bajo autorización de la UCE J519.
- Normalización: proceso de aprendizaje mediante el cual las UCEs de puerta reconocen los topes mecánicos superior e inferior. Se realiza subiendo manualmente el cristal al tope superior, liberando el pulsador y volviéndolo a mantener en subida unos segundos, para ejecutar luego una bajada automática.
- Apertura y cierre de confort: permite subir o bajar todos los cristales desde la cerradura, mando a distancia o manilla con sistema sin llave (requiere haber realizado la normalización previa).
- Antiaprisionamiento: detiene e invierte la subida del cristal al detectar un obstáculo (requiere normalización previa).
- Bloqueo de elevalunas traseros: accionado desde la puerta del conductor (iluminado en amarillo). La UCE J519 recibe las peticiones de las puertas traseras pero deniega la autorización de movimiento.
- Protección térmica: cálculo interno en la UCE de puerta que bloquea el motor en su posición hasta que la temperatura calculada sea segura.
- Función de emergencia: en caso de avería o corte de la línea LIN-Bus, se anulan las funciones centralizadas y solo es posible accionar cada elevalunas desde su propia puerta. (págs. 42-43)

## Errores de concepto frecuentes

Pensar que si se interrumpe el LIN-Bus los elevalunas quedan totalmente inoperativos. En modo de emergencia, cada cristal se puede seguir accionando localmente desde el pulsador de su propia puerta. (pág. 43)

## Imágenes requeridas

- Esquema del sistema de elevalunas eléctricos con red LIN-Bus puertas y unidades de control J386-J389 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 43
