---
id: ssc.sin-clasificar.comprobacion-del-filtro-de-habitaculo-con-airtest
modulo: ssc
unidad: clima
nt: 239
tipo: proceso
subtipo: procedimiento
titulo: "Comprobación Del Filtro De Habitáculo Con Airtest"
menu: "Comprobación Del Filtro De Habitáculo "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Diagnosticar de forma rápida y objetiva el nivel de saturación del filtro de habitáculo desde el interior del vehículo sin necesidad de desmontarlo. Se aplica en mantenimientos preventivos.

## Fundamento

El equipo Airtest mide la presión de aire soplado en el difusor seleccionado. Un filtro saturado reduce el caudal y la presión, lo que es detectado por el captador electrónico del instrumento.

## Condiciones previas

- Motor a temperatura de servicio y estabilizado a 1.500 rpm.  
- Mando de calefacción al mínimo, A/C desconectado y recirculación apagada.  
- Ventilador del vehículo al máximo de velocidad.

## Equipo y material

- Dispositivo de diagnóstico **Valeo Airtest**.  
- Tabla de interpretación de medidas por modelo de vehículo.

## Desarrollo

1. Sentarse en el asiento del conductor; abrir el difusor de aire indicado en la tabla del vehículo y cerrar el resto de toberas frontales.  
2. Conectar el tubo del captador al racor `+` del Airtest.  
3. Pulsar `ON` y verificar que la pantalla marque cero ( 0,2).  
4. Arrancar el motor, seleccionar salida frontal, calefacción al mínimo, ventilación al máximo y estabilizar el motor a 1.500 rpm.  
5. Aplicar y presionar fuertemente el canalizador del captador sobre el difusor seleccionado.  
6. Anotar la lectura digital mostrada en el display.  
7. Consultar el código de color en la tabla de referencia:  
   - **ROJO:** Filtro saturado. Sustituir de inmediato.  
   - **ÁMBAR:** Filtro parcialmente saturado. Aconsejar cambio.  
   - **VERDE:** Filtro correcto.  
8. Si se sustituye el filtro, repetición de la prueba: el nuevo valor debe situarse obligatoriamente en la zona VERDE.

## Valores de referencia

| Indicación / Código de color | Estado del filtro de habitáculo | Acción requerida |
|---|---|---|
| **Zona ROJA** | Filtro totalmente saturado | Sustitución inmediata |
| **Zona ÁMBAR** | Parcialmente saturado | Aconsejar cambio al cliente |
| **Zona VERDE** | Filtro en buen estado | Sin intervención |
| **Puesta a cero del Airtest** | **0,0 ( 0,2)** | Antes de presionar sobre la tobera |

## Interpretación y errores frecuentes

- Si tras montar un filtro nuevo la lectura sigue en zona ROJA: existe una avería en el circuito de aire (conductos sueltos, trampilla encasquillada, relé o impulsor defectuoso).  
- **Jamás soplar dentro del canalizador del Airtest:** se descalibra de forma irreversible.

## Verificación final

Confirmar que la medición con el filtro nuevo instalado se ubica holgadamente dentro de la franja VERDE.

## Imágenes requeridas

- Equipo Airtest aplicado sobre la tobera central para la medición de caudal — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 192
