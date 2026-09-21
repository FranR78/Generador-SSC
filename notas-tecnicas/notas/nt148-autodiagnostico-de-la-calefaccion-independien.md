---
id: ssc.sin-clasificar.autodiagnostico-de-la-calefaccion-independiente
modulo: ssc
unidad: clima
nt: 148
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnóstico De La Calefacción Independiente"
menu: "Autodiagnóstico De La Calefacción Inde"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer el procedimiento de consulta, análisis y borrado de la memoria de averías del sistema de calefacción independiente [1, 2]. Se aplica en las labores de mantenimiento preventivo y localización de fallos eléctricos o mecánicos en el módulo del calefactor [3, 4].

## Fundamento

La unidad de control monitoriza de forma continua el estado de sensores y actuadores [3]. Si una perturbación o señal fuera de rango se mantiene durante un tiempo determinado, se registra como avería estática; si desaparece, conmuta a avería esporádica (/SP) y termina borrándose automáticamente tras un período prefijado sin reproducirse [4, 5]. La memoria es de tipo no volátil, manteniendo el registro aunque se interrumpa la alimentación eléctrica [6].

## Condiciones previas

- Tensión de alimentación de la batería de servicio correcta [7].  
- Fusibles del sistema de calefacción independiente comprobados y en buen estado [7].  
- Conexión del encendido ("borne 15 ON") para iniciar la comunicación con la interfaz de diagnosis para bus de datos -J533- [8, 9].

## Equipo y material

- Equipo de diagnosis homologado (VAS 5051, VAS 5052 o equivalente) [1, 3].  
- Cable de diagnóstico con conector de 16 polos -VAS 5051/5A- [7].

## Desarrollo

* **Síntomas de avería:** El calefactor no arranca, se interrumpe la combustión tras el ciclo de inicio, emite humo denso o no genera rendimiento térmico en el habitáculo [10, 11].  
* **Causas probables:** Fallo en los componentes de encendido (bujía -Q9-), falta de llama (guardallamas -G64-), sobretemperatura en sensores (-G18-, -G587-), defecto en bombas (-V54-, -V55-) o bloqueo activado por falta de combustible o señal de colisión [12-15].  
* **Procedimiento de comprobación e interpretación:**  
  1. Conectar el equipo de diagnosis al conector de 16 polos con el encendido desconectado [7].  
  2. Conectar el encendido y seleccionar el código de dirección "18 - Calefacción adicional/independiente" [8, 16].  
  3. Ejecutar la función "02 - Consultar la memoria de averías" [17, 18].  
  4. Analizar el código de avería, el componente afectado y las condiciones de entorno registradas (kilometraje, tensión, temperatura del motor) [18, 19].  
  5. Reparar la avería física detectada [20].  
  6. Seleccionar la función "05 - Borrar la memoria de averías" [17, 21]. En caso de bloqueo persistente, desbloquear previamente en el canal de adaptación "42" [20, 22, 23].

## Valores de referencia

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| Tensión de alimentación ("borne 30") | > 11,5 V | Encendido conectado, motor parado [24] |
| Estado de la memoria | 0 averías detectadas | Tras la reparación y borrado [18, 25] |

## Interpretación y errores frecuentes

- Intentar borrar la memoria de averías habiendo desconectado el encendido entre la consulta y el borrado (el sistema impide el borrado si se corta la comunicación) [25].  
- Ignorar que una señal de colisión bloquea inmediatamente la calefacción independiente sin inscribir una avería con texto explícito en el registro [15, 26].

## Verificación final

Confirmar la indicación "Memoria de averías borrada" en la pantalla del equipo de diagnosis y realizar un ciclo de prueba de funcionamiento del calefactor [10, 25].

## Seguridad y normativa

Fijar el equipo de diagnosis con cinturón de seguridad si se realizan pruebas dinámicas en carretera, requiriéndose la presencia de un segundo operario [27, 28].
