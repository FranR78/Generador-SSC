---
id: ssc.sin-clasificar.calculo-de-humedad-y-control-de-recirculacion-en-tres-y-cuatro-zonas
modulo: ssc
unidad: sin-clasificar
nt: 478
tipo: proceso
subtipo: fundamento
titulo: "Cálculo De Humedad Y Control De Recirculación En Tres Y Cuatro Zonas"
menu: "Cálculo De Humedad Y Control De Recirc"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el flujo de datos de humedad, temperatura y calidad del aire desde el conducto de admisión hacia la unidad Climatronic J255 para el cálculo de la humedad relativa y el control de recirculación de aire.

## Fundamento

El flujo de aire fresco entrante es evaluado por el sensor G657. Las señales se transmiten vía bus LIN a la unidad J519 y posteriormente a la unidad J255 para obtener el valor de humedad relativa. En los sistemas de cuatro zonas, la integración del sensor G238 añade la función de control automático de recirculación tras una fase de inicialización.

## Condiciones previas

Encendido conectado.

## Desarrollo

- **Sistema de tres zonas:** El sensor G657 determina la temperatura y la humedad en el conducto de aire fresco. Envía los datos mediante bus LIN al módulo de la red de a bordo J519, el cual transmite la información a la unidad Climatronic J255 para calcular la humedad relativa.  
- **Sistema de cuatro zonas:** El sensor G657 combina en el mismo módulo el sensor de humedad, el sensor de temperatura y el sensor de calidad del aire G238. El sistema gestiona además el control automático de la recirculación de aire. El sensor G238 requiere aprox. 2 minutos para configurar el sistema tras dar el contacto.

## Valores de referencia

| Parámetro / Sistema | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Inicialización de recirculación (G238)** | **Aprox. 2 minutos** | Tras conectar el encendido (Ignition ON) |

## Interpretación y errores frecuentes

- Intentar verificar la función de recirculación automática inmediatamente después de dar el contacto en sistemas de cuatro zonas: el sensor G238 necesita un tiempo de configuración inicial de aprox. 2 minutos.

## Imágenes requeridas

- Disposición del sensor de humedad G657 solo y combinado con el sensor de calidad del aire G238 en el conducto de admisión — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 51
