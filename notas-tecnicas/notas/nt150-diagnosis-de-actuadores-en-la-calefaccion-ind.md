---
id: ssc.sin-clasificar.diagnosis-de-actuadores-en-la-calefaccion-independiente
modulo: ssc
unidad: sin-clasificar
nt: 150
tipo: proceso
subtipo: procedimiento
titulo: "Diagnosis De Actuadores En La Calefacción Independiente"
menu: "Diagnosis De Actuadores En La Calefacc"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la secuencia de activación individualizada e intermitente de los componentes eléctricos de la calefacción independiente [12, 51]. Se aplica para verificar el estado operativo mecánico y eléctrico de los actuadores sin necesidad de iniciar la combustión [51].

## Fundamento

La UCE -J364- excita secuencialmente cada salida eléctrica durante un tiempo determinado [51]. El técnico verifica mediante percepción acústica (chasquidos, zumbidos) o mediciones con pinza amperimétrica si el actuador responde a la señal eléctrica [12, 13].

## Condiciones previas

- Vehículo detenido o a velocidad inferior a 5 km/h [17, 51].  
- Encendido conectado y memoria de averías consultada y corregida previamente [33, 52].  
- Para activar la bomba dosificadora -V54-, el calefactor debe haber trabajado al menos una vez a plena carga desde la última diagnosis de actuadores [51].

## Equipo y material

- Equipo de diagnosis (VAS 5051 / VAS 5052) [52].  
- Pinza amperimétrica de 50 A (-VAS 5051/9-) [12, 53].

## Desarrollo

1. Conectar el equipo de diagnosis e iniciar la "Localización guiada de averías" [52].  
2. Seleccionar la función "03 - Diagnosis de actuadores" en el sistema de la calefacción independiente [17, 33].  
3. Iniciar la prueba y verificar la respuesta del primer componente:  
   - **Bomba de recirculación -V55-:** Se activa y desactiva a ritmo de 5 segundos (sonoridad audible) [12].  
   - **Turbina de aire de combustión -V6-:** Se activa y desactiva a ritmo de 5 segundos (sonoridad audible) [12].  
   - **Bujía de precalentamiento -Q9-:** Se activa durante 5 segundos (consumo térmico/eléctrico hasta 20 A en frío con pinza amperimétrica) [12].  
   - **Bomba dosificadora -V54-:** Emite impulsos audibles durante aproximadamente 10 segundos [54].  
   - **Bomba de preelevación de combustible -G6-:** Sonoridad de funcionamiento en el depósito audible [13].  
   - **Válvula de cierre para refrigerante -N279-:** Excitación intermitente a 0,5 Hz (sonoridad audible) [13].  
   - **Elemento calefactor de combustible -Z66-:** Consumo de corriente registrado hasta aprox. 20 A [13].  
4. Avanzar manualmente de componente pulsando la tecla de confirmación o finalizar la prueba [52, 55].

## Valores de referencia

| Actuador | Señal de excitación / Consumo | Criterio de verificación |
|---|---|---|
| Bomba de recirculación -V55- | Intermitencia a 5 s | Sonoridad de giro audible [12] |
| Bujía de precalentamiento -Q9- | Consumo hasta 20 A en frío | Medición con pinza amperimétrica [12] |
| Bomba dosificadora -V54- | Impulsos durante 10 s | Chasquido característico intermitente [54] |
| Válvula de cierre -N279- | Conmutación a 0,5 Hz | Clic audible de conmutación [13] |

## Interpretación y errores frecuentes

- Intentar repetir el test de la bomba dosificadora -V54- seguidamente sin haber hecho funcionar el calefactor a plena carga (el sistema bloquea la reexcitación para evitar inyectar exceso de combustible en la cámara) [51].  
- No consultar la memoria de averías al finalizar la diagnosis de actuadores (los fallos detectados durante el test se memorizan al concluir) [51, 55].

## Verificación final

Consultar la memoria de averías tras finalizar el test para confirmar la ausencia de registros provocados durante la prueba [55].
