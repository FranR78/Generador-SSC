---
id: ssc.sin-clasificar.regulacion-conjunta-de-las-trampillas-de-velocidad-y-recirculacion
modulo: ssc
unidad: clima
nt: 501
tipo: proceso
subtipo: fundamento
titulo: "Regulación Conjunta De Las Trampillas De Velocidad Y Recirculación"
menu: "Regulación Conjunta De Las Trampillas "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el funcionamiento y las posiciones de trabajo de las trampillas de velocidad y recirculación accionadas mecánicamente por el único motor V71.

## Fundamento

Ambas trampillas están vinculadas mecánicamente mediante dos guías a las que se conecta el eje del motor V71. El sistema adapta el caudal de aire fresco para evitar variaciones causadas por la presión dinámica al aumentar la velocidad del vehículo, o bien bloquea la entrada de aire exterior en modo recirculación.

## Condiciones previas

Sistema Climatronic encendido y vehículo en circulación.

## Desarrollo

El motor V71 posiciona simultáneamente ambas trampillas en tres estados de servicio:  
1. **Entrada de aire fresco:** Las dos trampillas abren completamente el paso de aire desde el exterior hacia el habitáculo.  
2. **Entrada de aire en función de la velocidad:** A altas velocidades, la chapaleta de velocidad reduce su apertura para evitar un aumento excesivo de caudal en el habitáculo.  
   - Se activa a partir de **80 km/h**.  
   - Por encima de **160 km/h** se cierra por completo, dejando únicamente una pequeña entrada residual de aire.  
   - *Excepción:* Si existe una gran diferencia entre la temperatura solicitada y la temperatura real del habitáculo, la trampilla se mantiene abierta aunque se supere la velocidad para enfriar/calentar rápidamente la cabina.  
3. **Recirculación activada:** Ambas trampillas se desplazan a su posición superior cerrando por completo la entrada de aire exterior.

## Valores de referencia

| Condición de velocidad del vehículo | Estado de la trampilla de velocidad |
|---|---|
| **Velocidad < 80 km/h** | Trampilla totalmente abierta |
| **Velocidad entre 80 km/h y 160 km/h** | Cierre progresivo en función de la velocidad |
| **Velocidad > 160 km/h** | Cierre completo (mantiene paso residual) |

## Interpretación y errores frecuentes

- Notar que el caudal de aire disminuye al superar 80 km/h o 160 km/h no es una avería: es la estrategia normal de la trampilla de velocidad para estabilizar la ventilación del habitáculo.

## Verificación final

Verificar el movimiento simultáneo de las dos trampillas al activar la recirculación o al simular señal de velocidad mediante el autodiagnóstico.

## Imágenes requeridas

- Posiciones de las guías de accionamiento del motor V71 para aire fresco, regulación por velocidad y recirculación — Fuente: Toledo 99 CLIMA.pdf, pág. 51
