---
nt: 7
titulo: Válvula de expansión termostática y tubo de expansión
codigo: Sin código documentado
menu: Válvula de expansión / OT
grupo: Circuito frigorífico
aplicacion: [Estabilizador interior, Estabilizador exterior, Monobloc tipo H, Tubo OT]
ubicacion: Tubería de alta presión, antes de la entrada del evaporador
fuentes: AA Automoción (Hella), págs. 106-116
---

## Misión
Hacer bajar bruscamente la presión y la temperatura del R-134a de alta a baja. Dosificar y
modular el caudal enviado al evaporador para lograr la máxima potencia frigorífica **y
evitar que retorne refrigerante líquido al compresor**.

## Principio de funcionamiento
Desarrolla dos funciones simultáneas:

- **Dosificadora:** un orificio calibrado genera la caída de presión, convirtiendo el
  líquido en vapor saturado pulverizado, que entra al evaporador en forma de rocío.
- **Modulante:** un elemento termostático con diafragma y sensor a bulbo o bobina detecta
  la temperatura a la salida del evaporador; la presión del gas interno abre o cierra el
  paso accionando una aguja o bola contra un muelle de sobrecalentamiento.

La válvula monobloc combina tres fuerzas: presión del sensor (apertura), presión del
evaporador y presión del muelle (ambas, cierre).

En el **tubo de expansión (OT)** el estrangulamiento es fijo, mediante un tubo capilar
calibrado, sin modulación activa.

## Características
- Control neumático/termodinámico por equilibrio de fuerzas.
- El fluido sale en proporción de **70 % líquido en peso (4 % en volumen)** y **30 % vapor
  en peso (96 % en volumen)**.
- Los tubos OT se identifican por código de colores: rojo (Ford), azul (Audi/Ford), blanco
  (GM/Audi), amarillo (Volvo).
- Los circuitos con OT no llevan filtro en alta: montan acumulador en baja.

| Racor | Dimensión | Rosca |
|---|---|---|
| Entrada | 3/8" | 8/8" UNF, 18 hilos/pulgada |
| Salida | 1/2" | 3/4" UNF, 16 hilos/pulgada |

## Valores de trabajo
Establece la frontera entre alta y baja presión. Controla que el **recalentamiento a la
salida del evaporador se mantenga entre 2 y 10 °C**.

## Anomalías frecuentes
- Obstrucción o bloqueo por suciedad y limaduras en su filtro de malla.
- Formación de una gota de hielo interna por humedad en el circuito.
- Agarrotamiento del elemento modulante, abierto o cerrado.
- Bulbo sensible suelto o sin contacto térmico con el tubo del evaporador.

## Comportamiento en avería
| Baja | Alta | Diagnóstico |
|---|---|---|
| 0 bar, va a vacío al acelerar | 10 a 13 bar | Cerrada u obturada, o bulbo roto |
| 3 a 3,8 bar | 12 a 14 bar | Bulbo suelto |
| 3,5 a 4,5 bar | 10 a 14 bar | Demasiado abierta: riesgo de golpe de líquido |
| Sobre 0 bar | 4 a 6 bar | Gota de hielo, o válvulas de baja del compresor tapadas |

**Gota de hielo:** el sistema deja de enfriar de forma intermitente y se recupera al parar
el equipo y fundirse el hielo; reaparece al volver a pasar humedad.

## Cómo comprobarlo
**Herramienta:** estación de carga con manómetros y spray enfriador.
**Método:** motor a 1.500-1.800 rpm, equipo a máxima potencia, aislamiento del bulbo retirado.

1. **Enfriar** el bulbo: la baja debe descender gradualmente hasta valores de depresión
   (por debajo de 0 bar). **Si queda por encima de 0 bar, sustituir la válvula.**
2. **Calentar** el bulbo: la baja debe subir y la alta bajar.
3. Si no reacciona, sustituir la válvula **y el filtro deshidratador**.

Colocación correcta del sensor: apoyado en la salida del evaporador, lo más cerca posible
de las aletas, en tramo horizontal, **nunca en la parte inferior del tubo**, con las zonas
de contacto limpias, fijado con su muelle y aislado térmicamente.

## Imágenes requeridas
- Sección de la válvula monobloc en "H" y detalle del tubo OT — AA Automoción, págs. 110 y 115, Fig. 6.10.5 y 6.10.8
- Posiciones correctas (X, Y) e incorrectas (H, K) del sensor — Fig. 6.10.2
- Tabla de equivalencias de orificios calibrados — pág. 86

## Advertencias
El valor del sobrecalentamiento lo fija el fabricante. **Nunca intervengas en la tuerca de
reglaje del muelle**: se daña la válvula y queda inutilizada. El tubo OT se sustituye
siempre tras un gripaje del compresor.
