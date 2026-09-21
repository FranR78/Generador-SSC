---
id: ssc.sin-clasificar.auto-direccionamiento-y-diagnostico-de-servomotores-lin
modulo: ssc
unidad: sin-clasificar
nt: 455
tipo: proceso
subtipo: diagnostico
titulo: "Auto-Direccionamiento Y Diagnóstico De Servomotores Lin"
menu: "Auto-Direccionamiento Y Diagnóstico De"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el proceso de asignación automática de direcciones (auto-addressing) y la localización de averías por interrupción o intercambio de conectores en la cadena en serie de servomotores del sistema Climatronic.

## Fundamento

Los servomotores se conectan en serie (entrada A2 / salida A3) al módulo J255 o E265. La unidad de control utiliza el auto-direccionamiento para reconocer la secuencia física de los componentes en el mazo de cables y asignar a cada dirección el mando de la trampilla correspondiente.

## Condiciones previas

- Encendido conectado.  
- Equipo de diagnosis conectado al puerto OBD del vehículo.

## Equipo y material

- Equipo de diagnosis VAS Scan Tool.

## Desarrollo

1. **Diagnóstico de interrupción en la línea:** Si el bus LIN se corta en un punto de la cadena, la unidad de control registra un código de avería (DTC) en el servomotor afectado y en todos los servomotores conectados a continuación en la serie.  
2. **Efecto de intercambio de conectores:**  
   - *Antes del auto-direccionamiento:* Conservan la asignación y función antiguas.  
   - *Tras el auto-direccionamiento:* El sistema asigna funciones equivocadas a las trampillas debido al orden incorrecto de las clemas en el mazo de cables.

## Valores de referencia

| Borne del servomotor | Función en la cadena LIN | Condición de servicio |
|---|---|---|
| **Borne A1** | **Borne 31 (Masa)** | Masa de carrocería |
| **Borne A2** | **LIN in** | Entrada de datos desde el componente anterior |
| **Borne A3** | **LIN out** | Salida de datos hacia el componente posterior |
| **Borne A4** | **Borne 30** | Positivo permanente |

## Interpretación y errores frecuentes

- **Interpretación de fallos múltiples:** La presencia de varios servomotores marcados como defectuosos suele estar originada por un único corte en la línea LIN del primer servomotor que encabeza el listado de averías.  
- **Error de montaje:** Conectar las clemas en posiciones cambiadas provoca que, tras realizar el auto-direccionamiento, las trampillas de aire funcionen cruzadas.

## Verificación final

Ejecución del ciclo de auto-direccionamiento mediante la máquina VAS Scan Tool, borrado de la memoria de averías DTC y comprobación de la respuesta física de cada trampilla.

## Imágenes requeridas

- Esquema de conexión en serie del bus LIN entre servomotores con patinaje de bornes A1 a A4 — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2 copia.pdf, pág. 1
