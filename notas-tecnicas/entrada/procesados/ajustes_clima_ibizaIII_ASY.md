```yaml
tipo: procedimiento
titulo: Ajuste básico de servomotores del Climatronic
entidad: ajuste-basico-servomotores
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "ajustes clima ibizaIII ASY.pdf"
paginas: "1-2"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [ajuste básico, V.A.G 1551, servomotores, memoria de averías]
```

## Objeto y alcance
Realizar la memorización de las posiciones finales de los cuatro servomotores y de los valores de sus potenciómetros de retroacoplamiento en la unidad de control del Climatronic (J255). Se realiza cuando el display del climatizador parpadea al dar el contacto a pesar de no indicar averías en la memoria. (pág. 1, 2)

## Condiciones previas
- Display de la unidad de Climatronic parpadeando tras conectar el encendido. (pág. 1)
- Consultar previamente la memoria de averías mediante la función 02 y borrar todas las averías registradas. (pág. 1)

## Equipo y material
Comprobador de sistemas del vehículo V.A.G 1551. (pág. 1)

## Pasos
1. Conectar el comprobador V.A.G 1551 y seleccionar el código de dirección 08 correspondiente a la unidad de control para Climatronic J255. (pág. 1)
2. Seleccionar la función 02 "Consultar memoria de averías" y eliminar todas las averías eventualmente indicadas. (pág. 1)
3. Pulsar las teclas 0 y 4 para seleccionar la función 04 "Iniciar el ajuste básico" y confirmar la entrada con la tecla Q. (pág. 2)
4. Pulsar las teclas 0, 0 y 1 para seleccionar el grupo de valores 001 y confirmar con la tecla Q. (pág. 2)
5. Observar en la pantalla la extensión de los cuatro servomotores hasta sus posiciones finales; durante este proceso la unidad de control J255 memoriza los valores de los potenciómetros. (pág. 2, 3)
6. Esperar a que en la pantalla del comprobador aparezca la indicación "1", la cual señala que ha finalizado el ajuste básico. (pág. 3)
7. Confirmar la entrada con la tecla Q y pulsar la tecla de avance. (pág. 3)
8. Introducir la función 02 "Consultar memoria de averías" y confirmar con Q para verificar las averías registradas durante el recorrido del ajuste. (pág. 3, 4)

## Valores de referencia
- Código de dirección de la unidad de Climatronic: 08. (pág. 1)
- Función de consulta de memoria de averías: 02. (pág. 1, 3)
- Función de inicio de ajuste básico: 04. (pág. 1, 2)
- Grupo de valores seleccionado para el ajuste: 001. (pág. 2)
- Estado de finalización del ajuste: Indicación "1" en la pantalla del V.A.G 1551. (pág. 3)

## Verificación final
Consultar nuevamente la memoria de averías (función 02) para comprobar si el sistema indica "ninguna avería identificada" o si se ha registrado alguna avería específica durante el movimiento de los servomotores. (pág. 3, 4)

## Seguridad y normativa
No documentado en fuentes. (pág. 2)

COBERTURA: documento «ajustes clima ibizaIII ASY.pdf», páginas 1 a 2 de 2. completo