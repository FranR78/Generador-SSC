```yaml
tipo: componente
titulo: Estación de diagnosis electrónica Valeo Clim On Line
entidad: estacion-diagnosis-clim-on-line
area: climatizacion
sistema: equipos-taller
fabricante: Valeo
fuente: "EL CLIM ON LINE.PDF"
paginas: "1-8"
relacionados: [unidad-control-climatizador, equipos-taller]
palabras: [estación de diagnosis, base de datos interactiva, RDSI, extranet, fichas técnicas]
```

## Misión
Permitir la diagnosis, el mantenimiento preventivo y la intervención integral en los sistemas de climatización del vehículo mediante la conexión interactiva con la base de datos centralizada del centro técnico Valeo Clim Service. (pág. 1)

## Tipos y características
Se configura como un equipo de taller con dos posibilidades de implantación física:
- **Estación móvil**: integrada en un mueble rodante suspendido mediante cable tensado o soporte monorraíl/brazo mural.
- **Estación fija**: ubicada de forma permanente con las ruedas bloqueadas.

Requisitos de la estación:
- **Hardware PC**: microprocesador **Pentium III a 400 MHz**, **128 MB** de memoria RAM, disco duro de **13 GB**, tarjeta gráfica de **16 MB** y tarjeta módem **RDSI de 64 Kbps**.
- **Software**: aplicación de acceso a la red de diagnóstico instalada por el administrador del sistema.
- **Mueble de protección**: estructura metálica sobre ruedas diseñada específicamente para resistir las condiciones de trabajo en el taller.
- **Funcionalidades del sistema**: diagnóstico de mantenimiento ("check-up"), diagnóstico de reparación asistido por árbol de preguntas, catálogo interactivo con referencias Valeo y de constructor, consulta de fichas técnicas (esquema básico, eléctrico y de situación), reportajes fotográficos con función de zoom, consulta de tiempos de intervención de fabricante y red VCS, seguimiento de varios vehículos en paralelo, mensajería con el administrador, visualización de averías típicas e impresión de informes de control para el cliente.

(pág. 1, 2, 6, 7, 8)

## Principio de funcionamiento
Efectúa la diagnosis sin necesidad de intervenir directamente sobre el vehículo en la fase inicial: el usuario introduce los síntomas detectados y los valores medidos, y la aplicación los compara con los casos prácticos almacenados en una base de datos interactiva y actualizada permanentemente alojada en un servidor Extranet. (pág. 1, 2)

## Valores de trabajo
- Ancho de banda de la conexión del servidor Extranet: **128 Kbps**. (pág. 2)
- Velocidad de transferencia de la línea cliente RDSI: **64 Kbps** (frente a los **9,6 Kbps** de una red conmutada convencional). (pág. 2)
- Tiempo de conservación en memoria de un diagnóstico suspendido o contexto guardado: **1 semana** (7 días) antes de su borrado automático. (pág. 7)

## Anomalías frecuentes
Aparición de microcortes en la transmisión de datos debido a esfuerzos de tracción excesivos sobre los conectores frágiles del cable RDSI durante el desplazamiento del mueble. (pág. 3, 5)

## Comportamiento en avería
No documentado en fuentes. (pág. 8)

## Cómo comprobarlo
No documentado en fuentes. (pág. 8)

## Mantenimiento
- En estaciones fijas, mantener los frenos de las ruedas bloqueados permanentemente para evitar tirones en las tomas de red. (pág. 3, 5)
- Alojar el cable de datos RDSI en el interior de una funda espiral para protegerlo de rozaduras y roturas mecánicas. (pág. 3, 5)

---

```yaml
tipo: procedimiento
titulo: Instalación e implantación de la estación Clim On Line
entidad: instalacion-estacion-clim-on-line
area: climatizacion
sistema: equipos-taller
fabricante: Valeo
fuente: "EL CLIM ON LINE.PDF"
paginas: "2-5"
relacionados: [equipos-taller]
palabras: [instalación, funda espiral, cable RDSI, suspensión, estación móvil, estación fija]
```

## Objeto y alcance
Establecer las operaciones de montaje, fijación de la línea de datos RDSI y puesta en servicio de la estación de diagnosis Clim On Line (variantes móvil y fija) en la zona de trabajo del taller. (pág. 3)

## Condiciones previas
- Contar con la acometida de la línea telefónica RDSI en la pared junto al puesto de intervención. (pág. 2, 4)
- En estaciones móviles, haber instalado previamente la estructura de suspensión (cable de acero tensado o monorraíl). (pág. 4, 5)

## Equipo y material
- Cable RDSI (diámetro exterior de **7,2 mm**). (pág. 3)
- Funda espiral de protección (**Øint = 10 mm, Øext = 12 mm**) con rácores machos fileteados en los extremos (diámetro de paso mínimo de **7,5 mm**), contratuercas y arandelas. (pág. 3, 4)
- Perfil de fijación mural en L con orificio de **15 mm**. (pág. 3, 4)
- Sistema de guiado móvil: cable de acero con aprieta-cables, tensor, pitón y equilibrador (Solución 1) o soporte monorraíl/brazo mural con carrito deslizante y equilibrador (Solución 2). (pág. 3)
- Terminal RDSI, cinta adhesiva de doble cara y toma RJ45 con minibus. (pág. 4, 5)
- Aguja pasacables. (pág. 4)

## Pasos

**Procedimiento para estación móvil:**
1. Instalar el soporte porta-cable (cable tensado con equilibrador o monorraíl/brazo mural con carrito) cerca de la toma de la línea RDSI en la pared. (pág. 4)
2. Pasar el cable RDSI por el interior de la funda espiral empleando una aguja pasacables, evitando que los dos conductores del cable entren en contacto. (pág. 4)
3. Montar la funda espiral sobre el soporte porta-cable o sistema de guiado. (pág. 4)
4. Fijar un extremo de la funda espiral mediante su rácor fileteado, contratuerca y arandela en el perfil en L de la pared, y el otro extremo en el orificio de la puerta trasera del mueble. (pág. 3, 4)
5. Fijar el terminal RDSI en la cara interior de la puerta trasera de la estación mediante la cinta adhesiva de doble cara. (pág. 4)
6. Guiar el cable de alimentación eléctrica sobre la funda espiral respetando la distancia de separación requerida. (pág. 5)
7. Conectar la tarjeta módem del ordenador a la línea RDSI. (pág. 5)

**Procedimiento para estación fija:**
1. Bloquear de forma permanente los frenos de las ruedas de la estación. (pág. 3, 5)
2. Instalar el terminal RDSI en la pared y montar la toma RJ45 en la pared o en la propia estación (previendo un minibus de longitud menor o igual a **3 m** si la toma va a la pared). (pág. 3, 5)
3. Tender el cable de alimentación eléctrica guardando la separación con respecto al cable RDSI. (pág. 3, 5)
4. Conectar la tarjeta módem del PC a la red RDSI. (pág. 5)

## Valores de referencia
- Diámetro del cable RDSI: **7,2 mm**. (pág. 3)
- Diámetro interior y exterior de la funda espiral: **10 mm** / **12 mm**. (pág. 4)
- Diámetro de paso mínimo de la funda espiral: **8 mm**. (pág. 3)
- Diámetro de paso mínimo de los rácores fileteados de extremo: **7,5 mm**. (pág. 3, 4)
- Longitud máxima del minibus para toma RJ45 mural: **3 m**. (pág. 3, 5)
- Distancia límite de trazado paralelo: el cable RDSI no debe discurrir en paralelo al cable de alimentación eléctrica durante más de **60 cm** si la separación entre ambos es inferior a **30 cm**. (pág. 3, 5)

## Verificación final
Comprobar el desplazamiento suave y sin tirones del mueble de la estación móvil, asegurando que no se ejercen esfuerzos de tracción sobre las conexiones del cable RDSI. (pág. 5)

## Seguridad y normativa
- Mantener la distancia de separación entre el cable de datos RDSI y la línea de alimentación de red eléctrica para evitar interferencias. (pág. 3, 5)
- Asegurar la rigidez de los rácores de extremo de la funda espiral para proteger el cable RDSI contra roturas al desplazar el equipo. (pág. 4, 5)

---

COBERTURA: documento «EL CLIM ON LINE.PDF», páginas 1 a 8 de 8. completo