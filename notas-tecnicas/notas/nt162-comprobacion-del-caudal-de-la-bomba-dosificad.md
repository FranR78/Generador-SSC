---
id: ssc.sin-clasificar.comprobacion-del-caudal-de-la-bomba-dosificadora-v54
modulo: ssc
unidad: clima
nt: 162
tipo: proceso
subtipo: procedimiento
titulo: "Comprobación Del Caudal De La Bomba Dosificadora V54"
menu: "Comprobación Del Caudal De La Bomba Do"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir el método de medición volumétrica de la cantidad de combustible bombeada por la bomba dosificadora -V54- [57, 136]. Se aplica para verificar la dosificación exacta cuando existen fallos de combustión, emisión de humo o desviaciones en la prueba de CO2 [65, 137].

## Fundamento

La UCE excita la bomba dosificadora a una frecuencia fija de 8 Hz durante un tiempo programado [44, 69]. El combustible impulsado se recoge en una probeta graduada; si el volumen recuperado no alcanza o supera los márgenes normativos, la dosificación es incorrecta [117].

## Condiciones previas

- Temperatura ambiente inferior a 25 ºC y temperatura del refrigerante del motor inferior a 30 ºC (para evitar errores por evaporación) [136].  
- Nivel de combustible en depósito fuera de la zona de reserva [138].  
- Batería del vehículo totalmente cargada [138].  
- Tubería de combustible previamente llena y purgada de aire de forma completa (ejecutando Ajuste Básico 066 durante 30 s) [44, 69, 139].

## Equipo y material

- Probeta/recipiente graduado de precisión [140].  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [139].  
- Manguera transparente de prolongación [139].

## Desarrollo

1. Desmontar el casco del pasarrueda delantero derecho para acceder al tubo de combustible [140].  
2. Desconectar el tubo de combustible -A- a la entrada del calefactor y conducirlo al interior de la probeta graduada [140].  
3. Llenar previamente la tubería: En adaptación, canal "30", introducir "30" (segundos); en canal "36", introducir "1"; seleccionar "Ajuste básico", grupo "066" y activar [66-69].  
4. Vaciar la probeta graduada tras el llenado inicial [141].  
5. Programar la prueba de medición: En adaptación, canal "30", introducir "240" (segundos); en canal "36", introducir "1" [71, 142, 143].  
6. Seleccionar "Ajuste básico", grupo "066" y pulsar 'Activar' [116]. La bomba funcionará durante 240 segundos a 8 Hz [116].  
7. Esperar a que finalice la activación (indicación 'Fin') y medir el volumen de combustible acumulado en la probeta [117].

## Valores de referencia

| Tipo de Motorización | Tiempo de prueba / Frecuencia | Volumen recolectado nominal |
|---|---|---|
| Motor Diésel | 240 segundos a 8 Hz | No documentado en fuentes (aprox. 0,03 ml/carrera) [114, 117] |
| Motor Gasolina | 240 segundos a 8 Hz | No documentado en fuentes (aprox. 0,027 ml/carrera) [114, 117] |

## Interpretación y errores frecuentes

- Medir el caudal con la tubería de combustible parcialmente vacía (aporta un volumen muy inferior al real) [139, 144].  
- Volúmenes excesivos: Provocan humo denso, coquización de la bujía -Q9- y fallos de encendido [11, 65].  
- Volúmenes deficientes: Generan falta de llama o valores de CO2 inferiores a los nominales [137, 145].

## Verificación final

Reconectar la manguera al calefactor asegurando que no toque partes metálicas para evitar ruidos de retumbo, y hacer funcionar el calefactor a plena carga durante 10 minutos [115, 146].

## Seguridad y normativa

Observar estrictamente las normas de seguridad e higiene para el trabajo con sistemas de combustible abiertos; no fumar ni generar chispas [136].
