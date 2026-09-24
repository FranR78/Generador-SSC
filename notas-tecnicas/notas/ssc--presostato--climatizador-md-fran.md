---
id: ssc.presostato.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 619
tipo: elemento
clase: componente
titulo: "Conmutador de presión para climatizador"
codigo: "F129 / F73 / F118"
menu: "Conmutador de presión para cli F129 / F73 / F118"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 13, 14, 15"
relacionados: ["embrague-compresor", "electroventilador-condensador"]
palabras: ["F129", "Trinary", "2 bares", "16 bares", "32 bares", "alta presión", "baja presión"]
---

## Misión

Supervisar la presión del lado de alta y baja presión para proteger el compresor contra sobrepresión o falta de carga y gobernar la velocidad de los electroventiladores. (págs. 13, 14, 15)

## Tipos y características

Presostato combinado triple (Trinary) o interruptores individuales (F73 para baja presión y F118 para alta presión) montados en la tubería de alta presión o en el filtro deshidratador. (págs. 14, 15)

## Principio de funcionamiento

- **Protección por baja presión:** Desconecta el compresor si la presión cae por debajo de 2 bares (o 1,7 bares en F73) para evitar girar sin aceite disuelto. (págs. 14, 15)
- **Protección por alta presión:** Desconecta el compresor si la presión supera los 24 a 32 bares (o 30 bares en F118) para evitar reventones. (págs. 14, 15)
- **Etapa de ventiladores:** Cierra el contacto a 16 bares (1,6 MPa) para conectar el 2º escalón del electroventilador. (pág. 14)

## Valores de trabajo

- Desconexión por baja presión: < 2,0 bares (0,2 MPa). (pág. 14)
- Desconexión por alta presión: > 24 a 32 bares (2,4 a 3,2 MPa). (pág. 14)
- Conmutación de 2ª velocidad de ventilador: 16 bares (1,6 MPa). (pág. 14)

## Anomalías frecuentes

Fogueo interno de contactos mecánicos o fugas en la toma Schrader de fijación. (págs. 14, 15)

## Comportamiento en avería

Inoperatividad del compresor o falta de activación del 2º escalón de ventiladores provocando sobrepresión. (págs. 14, 15)

## Cómo comprobarlo

Puentear provisionalmente los contactos correspondientes en el conector y medir presiones de disparo. (pág. 14)

## Mantenimiento

Sustituir la junta tórica de sellado al desmontar el conmutador de la toma. (pág. 14)
