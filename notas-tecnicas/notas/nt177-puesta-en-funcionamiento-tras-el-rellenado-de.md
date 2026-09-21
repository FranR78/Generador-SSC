---
id: ssc.sin-clasificar.puesta-en-funcionamiento-tras-el-rellenado-de-refrigerante
modulo: ssc
unidad: clima
nt: 177
tipo: proceso
subtipo: procedimiento
titulo: "Puesta En Funcionamiento Tras El Rellenado De Refrigerante"
menu: "Puesta En Funcionamiento Tras El Relle"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer el protocolo de arranque y rodaje inicial del compresor tras sustituir componentes del circuito o recargar el refrigerante R134a. Se aplica en el acabado de reparaciones del circuito frigorífico.

## Fundamento

Los compresores Denso de cilindrada variable giran continuamente arrastrados por la correa de accesorios al carecer de embrague electromagnético. Poner en marcha el motor con el circuito bajo vacío o acelerar bruscamente tras el llenado provoca el retorno masivo de líquido o la falta de aceite en las cámaras de compresión, causando el golpe de ariete y el agarrotamiento mecánico del plato oscilante.

## Condiciones previas

- Circuito de refrigerante R134a y aceite para máquinas frigoríficas cargado con la masa nominal especificada en la placa del vano motor.  
- En caso de compresor nuevo o circuito lavado: haber girado el eje del compresor manualmente un mínimo de **10 vueltas completas** antes de montarlo.

## Equipo y material

- Estación de carga de A/C.  
- Equipo de diagnosis OBD.

## Desarrollo

1. En caso de compresor recién instalado, hacer girar a mano el eje central de la polea 10 vueltas completas en su sentido de rotación antes del arranque.  
2. Arrancar el motor del vehículo manteniendo el compresor **desactivado** (modo "Econ" / tecla AC OFF con testigo apagado).  
3. Esperar a que el régimen del motor se estabilice completamente en ralentí.  
4. Abrir todos los difusores del tablero de instrumentos y seleccionar la temperatura en "LO" (mínima) en el panel -J255-.  
5. Activar el compresor pulsando la tecla AC (modo "Auto" / AC ON) y mantener el motor funcionando estrictamente a **régimen de ralentí durante un mínimo de 5 minutos**.  
6. Si excepcionalmente se requiere arrancar el motor con el circuito de refrigerante totalmente vacío por motivos de pruebas de taller: asegurar que el circuito esté ensamblado, no exista vacío en las tuberías, se conserve como mínimo 1/4 de la cantidad nominal de aceite en el cárter del compresor y no superar bajo ninguna circunstancia las 2.500 rpm.

## Valores de referencia

| Operación de rodaje | Valor de referencia |
|---|---|
| **Tiempo de rodaje a ralentí tras llenado** | Mínimo 5 minutos continuos |
| **Giros manuales previos al eje del compresor** | 10 vueltas completas |
| **Régimen máximo si el circuito está vacío** | Máximo 2.500 rpm |

## Interpretación y errores frecuentes

Acelerar el motor inmediatamente después de efectuar la carga de gas provoca la migración repentina de refrigerante líquido al compresor, cizallando los pistones y haciendo saltar la protección contra sobrecarga de la polea.

## Verificación final

Comprobación de la estabilidad de presiones de alta y baja en la batería de manómetros y ausencia de ruidos o vibraciones en la polea del compresor.

## Imágenes requeridas

- Placa de datos de llenado de agente frigorífico R134a colocada en el vano motor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 4
