---
id: ssc.sin-clasificar.autodiagnostico-y-lectura-de-valores-en-climatizacion-electronica
modulo: ssc
unidad: sin-clasificar
nt: 726
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnóstico Y Lectura De Valores En Climatización Electrónica"
menu: "Autodiagnóstico Y Lectura De Valores E"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el procedimiento de autodiagnóstico en climatizadores automáticos mediante el equipo de diagnosis, incluyendo la gestión de memoria de averías, el test de actuadores, el ajuste básico de servomotores y la lectura de bloques de parámetros en tiempo real. Aplica a sistemas de climatización electrónica.

## Fundamento

La UCE del climatizador monitoriza continuamente la señal de sus sensores directos y recibe variables de otras unidades (Cuadro de Instrumentos, Red de A Bordo, UCE de Motor) a través de la red CAN-Bus, permitiendo interrogar los componentes y calibrar las posiciones límite de las trampillas.

## Condiciones previas

Equipo de diagnosis conectado al puerto OBD del vehículo y contacto del vehículo encendido (borne 15) con tensión de batería estable.

## Equipo y material

Máquina o terminal de diagnosis compatible con la marca y modelo del vehículo.

## Desarrollo

1. **Consulta y borrado de la memoria de averías:**
   - *Averías esporádicas o fugaces:* Se borran automáticamente si no se repiten tras un número determinado de arranques (entre 30 y 40 puestas en marcha según el fabricante).
   - *Averías actuales o permanentes:* Permanecen fijas en la UCE y solo se pueden borrar manualmente desde la función "borrar memoria" tras reparar el componente.
   - *Identificación de origen CAN-Bus:* La UCE de Climatización registra fallos de sus sensores específicos. Los sensores compartidos provienen de otras UCEs (Cuadro de instrumentos: sensor de temperatura exterior y velocidad; Red de a bordo: sensor de marcha atrás, carga del alternador y regulador de iluminación; UCE de motor: temperatura de refrigerante).
2. **Diagnóstico de elementos actuadores (Test de componentes):**
   - *Test de segmentos:* Ilumina todos los dígitos y símbolos del display del panel de mandos para detectar fallos de información visual.
   - *Velocidades del electroventilador:* Activa las distintas velocidades o la variación continua del ventilador del radiador/condensador.
   - *Turbina de aire fresco:* Pone en marcha el soplador del habitáculo recorriendo todo su margen de trabajo.
   - *Embrague del compresor:* Conecta y desconecta cíclicamente el electroembrague para verificar visual y acústicamente su acoplamiento.
   - *Motores de trampillas:* Activa los servomotores para verificar el cambio de temperatura y la distribución por difusores.
3. **Ajuste básico (Adaptación de topes):**
   - Ejecuta el recorrido completo de todos los servomotores de principio a fin, memorizando en la UCE las posiciones de tope mínimo y máximo.
   - **Obligatorio realizar el ajuste básico:** tras sustituir cualquiera de los servomotores de trampilla o al reemplazar la Unidad de Control del Climatizador.
4. **Lectura de bloques de valores de funcionamiento individual:**
   - Consultar el estado del compresor (parado/en marcha), rpm del motor, velocidad del vehículo y tiempo de parada (segundos transcurridos desde el último apagado).
   - Leer la posición **teórica y real** de los servomotores de temperatura, trampilla central, deshielo y recirculación.
   - Verificar sensores térmicos: aplicar aire frío/caliente a la sonda del parachoques/espejo (temperatura exterior en display), entrada de aire y sensor del habitáculo comprobando la variación de lectura.
   - Verificar fotosensor solar: acercar una luz intensa al salpicadero y observar la variación en el porcentaje de radiación solar.
   - Leer el porcentaje de activación de la electroválvula del compresor (modificando la consigna de temperatura en el panel) y la presión del circuito enviada por el sensor MAP de alta presión.
   - Verificar señales de carga: comprobar la solicitud de aumento de revoluciones al ralentí y la desactivación del compresor por sobrecarga del alternador conectando consumidores eléctricos.

## Valores de referencia

| Función / Parámetro | Valor y Condición de Aceptación |
| :--- | :--- |
| Borrado automático de averías esporádicas | Tras 30 a 40 arranques del vehículo sin reproducirse el fallo |
| Tensión de alimentación de UCE | Aproximadamente igual a la tensión de batería (~12 a 14 V) |
| Tensión entre polea y plato en prueba de embrague | Conmutación cíclica a 12 V |
| Condición de ejecución de Ajuste Básico | Obligatorio tras cambiar servomotor o UCE de Climatización |

## Interpretación y errores frecuentes

* Intentar borrar una avería permanente sin reparar el defecto físico: la UCE vuelve a registrar el código de inmediato.
* Omitir el Ajuste Básico tras cambiar un servomotor: el climatizador no reconoce la posición del nuevo actuador, provocando errores en la distribución de aire o ruidos al buscar topes.
* Diagnosticar un fallo del sensor de temperatura exterior en la UCE de Climatización cuando el fallo está registrado en la UCE del Cuadro de instrumentos (origen de la señal CAN-Bus).

## Verificación final

Verificar la ausencia de códigos de avería en la memoria de la UCE y comprobar en los bloques de valores que la posición real de cada servomotor coincide con su valor teórico.

## Imágenes requeridas

- Pantalla de diagnosis del climatizador mostrando el valor teórico y real de posicionamiento de servomotores — Fuente: 15. Diágnostico y averías.pdf, pág. 133
