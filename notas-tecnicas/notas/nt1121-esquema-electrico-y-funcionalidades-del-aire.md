---
id: ssc.sin-clasificar.esquema-electrico-y-funcionalidades-del-aire-acondicionado-manual-con-trinaria
modulo: ssc
unidad: sin-clasificar
nt: 1121
tipo: proceso
subtipo: fundamento
titulo: "Esquema Eléctrico Y Funcionalidades Del Aire Acondicionado Manual Con Trinaria"
menu: "Esquema Eléctrico Y Funcionalidades De"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la arquitectura eléctrica, la lógica de alimentación y las funciones de control de un sistema de aire acondicionado manual provisto de conmutador trinario de alta presión. Aplica a la instalación eléctrica de climatización manual en turismos.

## Fundamento

El funcionamiento del sistema de aire acondicionado requiere la interacción entre el circuito frigorífico y una red eléctrica de control. El sistema condiciona la marcha del compresor a la activación previa de la turbina de aire fresco, la presión del refrigerante y la temperatura del motor de combustión.

## Condiciones previas

Contacto encendido (+15) y conmutador de aire acondicionado activado por el conductor.

## Desarrollo

* **Lógica de conexión e interbloqueos:**
  - El interruptor de AC se encuentra asociado al selector de velocidad de la turbina. Para autorizar la conexión eléctrica del A/C, es imprescindible que la turbina gire como mínimo a velocidad lenta (1.ª velocidad).
  - Al activar el A/C, la UCE de ventiladores conecta el electroventilador del radiador en velocidad lenta para refrigerar el condensador.
  - El presostato trinario mide la presión en el tramo de alta presión:
    - *Bornes 1-2 (P1):* Vigilan la presión de trabajo del refrigerante. Permiten el paso de corriente al embrague del compresor entre 2 bar y 32 bar. Si la presión cae de 2 bar (falta de gas) o supera 32 bar (sobrepresión), los contactos abren y desconectan el compresor.
    - *Bornes 3-4 (P2):* Conectan la II velocidad (rápida) del electroventilador a través del relé dedicado cuando la presión de alta alcanza 16 bar.
  - La sonda NTC del evaporador evalúa la temperatura de evaporación; si detecta riesgo de congelación del condensado, desactiva el embrague del compresor (no se utiliza en sistemas con compresor de cilindrada variable).
  - La sonda NTC de temperatura del motor / termostato de refrigerante interrumpe la marcha del A/C si el motor de combustión sufre sobrecalentamiento.
  - El termostato del radiador conmuta las velocidades del electroventilador por temperatura del refrigerante: conecta la velocidad lenta a 95 ºC y la velocidad rápida a 103 ºC.
  - La UCE del motor condiciona el acoplamiento del compresor a que el motor funcione regularmente al ralentí y lo desactiva temporalmente en aceleraciones bruscas.

## Valores de referencia

| Componente / Parámetro | Condición de Validez / Disparo | Reacción o Estado del Sistema |
| :--- | :--- | :--- |
| **Presostato Trinario (Bornes 1-2 / P1)** | Presión entre 2 bar y 32 bar | Contactos cerrados (embrague de compresor autorizable) |
| **Presostato Trinario (Bornes 1-2 / P1)** | Presión < 2 bar o > 32 bar | Contactos abiertos (desconexión del compresor) |
| **Presostato Trinario (Bornes 3-4 / P2)** | Presión ≥ 16 bar en tramo de alta | Contactos cerrados (activa II velocidad del electroventilador) |
| **Termostato del Radiador (t1)** | Temperatura del refrigerante de motor = 95 ºC | Conecta I velocidad (lenta) del electroventilador |
| **Termostato del Radiador (t2)** | Temperatura del refrigerante de motor = 103 ºC | Conecta II velocidad (rápida) del electroventilador |

## Interpretación y errores frecuentes

* Intentar activar el aire acondicionado con el mando del ventilador en posición; el interbloqueo eléctrico impide el acoplamiento del compresor si la turbina no gira al menos a velocidad lenta.
* Confundir la función de los bornes de la trinaria: los bornes 1-2 gobiernan la línea del compresor, mientras que los bornes 3-4 gobiernan la bobina del relé de la II velocidad del electroventilador.

## Verificación final

Comprobar que al conectar la tecla A/C con la turbina en velocidad 1 se enciende el electroventilador en velocidad lenta y acopla el embrague del compresor.

## Imágenes requeridas

- Esquema eléctrico de aire acondicionado manual con conmutador trinario y relés de ventiladores — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 94
