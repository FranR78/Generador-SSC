---
id: ssc.clima.regulacion-y-control-basico-del-sistema-de-climatizacion.3
modulo: ssc
unidad: clima
nt: 112
tipo: proceso
subtipo: fundamento
titulo: "Regulación Y Control Básico Del Sistema De Climatización"
menu: "Regulación Y Control Básico Del Sistem"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la lógica de control eléctrico y electrónico que gobierna la activación, regulación y protección del sistema de climatización. Se aplica para comprender las condiciones de acoplamiento del compresor y la gestión de la seguridad del motor y del circuito frigorífico.

## Fundamento

Para que un sistema de climatización funcione correctamente, además del circuito hidráulico requiere elementos eléctricos y electrónicos de control. El sistema condiciona el funcionamiento del compresor a la activación previa de la turbina de aire fresco, el ralentí regular del motor, el control de presión en alta y la ausencia de congelación en el evaporador o sobrecalentamiento en el motor.

## Condiciones previas

* Conexión del interruptor de AC por el conductor.  
* Funcionamiento de la turbina de aire fresco como mínimo a velocidad lenta.  
* Motor de combustión en marcha funcionando regularmente al ralentí.

## Equipo y material

* Interruptor de AC y selector de velocidad de la turbina.  
* Válvula de descarga de sobrepresión del compresor.  
* Electroventilador del circuito de refrigeración.  
* Conmutador de presión (trinaria o sensor MAP de alta).  
* NTC de temperatura del refrigerante del motor.  
* Caja de relés y electrónica de control.  
* Termostato de refrigerante.  
* Sonda de temperatura del evaporador.  
* Turbina de aire fresco.  
* Unidad de control del motor (UCE).  
* Embrague electromagnético / electroválvula de cilindrada variable.

## Desarrollo

Secuencia y lógica de funcionamiento de la regulación básica:

1. **Conexión del sistema e impulso de aire:** El interruptor de AC conecta o desconecta el sistema y controla la velocidad de la turbina de aire fresco, la cual hace pasar el aire por el evaporador para enfriarlo y deshidratarlo. Es imprescindible que la turbina gire como mínimo a velocidad lenta para habilitar la conexión del sistema.  
2. **Autorización por UCE de motor:** La UCE del motor no conecta el compresor hasta que el motor funciona regularmente al ralentí, y lo desconecta en caso de aceleración brusca.  
3. **Gestión del compresor:** El compresor se conecta mediante embrague electromagnético o se controla el caudal impelido mediante una electroválvula en compresores de cilindrada variable.  
4. **Control de presiones y condensación:** La trinaria o sensor MAP de alta mide la presión del circuito de alta para determinar los momentos de arranque y parada del compresor. El electroventilador del circuito de refrigeración funciona a velocidad lenta al conectar el AC y conmuta a velocidad más rápida cuando sube la presión del circuito. El termostato de refrigerante conecta las distintas velocidades del electroventilador según la temperatura. En caso de sobrepresión puntual, la válvula de descarga libera el exceso para proteger el sistema.  
5. **Protecciones térmicas de seguridad:** La sonda del evaporador controla la temperatura de evaporación y desconecta el compresor si existe peligro de formación de hielo (no se utiliza en sistemas con compresor variable). La sonda NTC del refrigerante del motor desconecta el aire acondicionado si la temperatura del motor sube en exceso. La electrónica de control y los relés alimentan eléctricamente a todos los componentes.

## Valores de referencia

| Componente / Función | Condición / Lógica de control |
| ----- | ----- |
| Turbina de aire fresco | Velocidad mínima lenta imprescindible para habilitar la conexión |
| UCE del motor | Conecta tras ralentí regular; desconecta en aceleración brusca |
| Electroventilador | Vel. lenta al encender AC; vel. rápida al subir la presión en alta |
| Sonda del evaporador | Desconecta el compresor si hay peligro de hielo (solo en compresor fijo) |
| Sonda NTC refrigerante | Desconecta el AC si la temperatura del motor sube en exceso |

## Interpretación y errores frecuentes

* Si la turbina de aire fresco no gira (velocidad 0), el sistema no se conecta eléctricamente.  
* En aceleraciones bruscas, la UCE de motor desacopla el compresor para priorizar la potencia.  
* Ante un incremento excesivo de temperatura del refrigerante del motor, la NTC desactiva el AC por seguridad.  
* Ante una sobrepresión puntual, la válvula de descarga libera refrigerante al exterior.

## Verificación final

Verificar el acoplamiento del compresor al pulsar el interruptor de AC con el motor al ralentí y turbina en velocidad 1 o superior, observando la activación simultánea del electroventilador a velocidad lenta.

## Imágenes requeridas

- Esquema de la configuración básica para la regulación del sistema con 11 elementos de control eléctrico y electrónico — Fuente: 5. Sistemas de Aire Acondicionado.pdf, pág. 46
