# CLAUDE.md — Notas Técnicas

Vale lo del `CLAUDE.md` de la raíz (formato, git, ahorro de tokens, modo
preparación). Aquí solo va lo propio de este subsistema.

Qué es: de un PDF de fabricante a un dashboard para el alumnado, pasando por
NotebookLM. El recorrido completo está en `PROCESO.md`; el formato de las
fichas, en `README.md`.

## Reglas que no se tocan

Cada una está aquí porque se rompió antes. No se relajan sin hablarlo.

**Los números del cuerpo son datos.** El limpiador de citas de NotebookLM
(`CITAS` en `generador/importar.py`) solo borra un número si va detrás de una
letra y delante del punto que cierra la frase. Un valor real nunca cumple eso: o
va tras dos puntos (`ambiente: 20 °C`), o lleva la unidad pegada (`14 bares`), o
el punto es separador de millar (`1.500`). La primera versión era más laxa y
convertía «entre 1.500 y 2.000 rpm» en «entre.500 y.000 rpm». Ampliar ese patrón
—por ejemplo para pillar las citas que quedan antes de una coma— vuelve a poner
en riesgo presiones y temperaturas. Quedan citas sin limpiar y está bien así.

**De NotebookLM se copia, no se exporta.** Comprobado con el mismo documento y
el mismo prompt: exportando, las tablas salen como columnas con comas y los
números de cita quedan metidos dentro de las frases; copiando de la pantalla
salen tablas Markdown y ni una cita. Y esas citas de mitad de frase ya no se
pueden quitar sin arriesgar un dato, así que lo que entra mal se queda mal.

**Las tablas se arreglan en el importador, no en el prompt.** NotebookLM ignora
la instrucción de escribirlas en Markdown, seguramente porque las aplana al
exportar y no al redactar. `csv_a_tabla()` las convierte y funciona. No gastes
intentos en afinar el prompt por ahí.

**La marca de procesado se busca como palabra suelta.** En
`puenteNT_archivarProcesados`. Buscando `PRO` sin más, un `PROCEDIMIENTO`, un
`PROTECCIÓN` o un `PROCESOS` en el nombre darían por procesado un documento que
no lo está, y son tres palabras que en automoción salen a todas horas.

**El HTML lo genera `construir.py`, nunca un modelo.** El modelo produce el
Markdown de las notas; la maquetación es determinista. Es lo que hace que el
dashboard sea reproducible y que una nota mal generada no rompa la página.

**Los duplicados se avisan, no se fusionan.** `construir.py` detecta notas que
tratan de lo mismo y las lista al final. Fusionarlas es decisión del profesor,
con sus capturas y sus fuentes. El sistema no decide qué versión sobrevive.

**Las capturas se emparejan por el nombre del archivo**, y ese nombre exacto
(`NT21_02`) se enseña al alumnado en una etiqueta dentro de la nota. No hay
acuerdo verbal que recordar: el alumno lee el nombre que tiene que poner. Si se
cambia el renderizado, esa etiqueta se queda.

**`grupo: POR CLASIFICAR` es decisión suya.** El importador deja así las notas
nuevas y salen agrupadas aparte, bien visibles. No las clasifiques tú.

## Lo que NotebookLM no hace

Las fuentes de un cuaderno son una **copia** hecha al importarlas. Renombrar o
mover el PDF en Drive no las toca: vaciar el cuaderno es manual. Y conviene
hacerlo, porque las fuentes que se quedan dentro siguen alimentando las
respuestas y acaban mezclando documentos.

Tampoco hay API pública para gestionar cuadernos, así que esa parte no se puede
automatizar.

## Privacidad

El repositorio es **privado y tiene que seguir siéndolo**: dentro hay contenido
de manuales de fabricante y fotos hechas por alumnado.

Al incrustar una captura se le quitan los datos EXIF, geolocalización incluida.
Lo que se ve en la foto —matrículas, caras, el VIN— eso no lo quita ningún
script. Y un ranking público de quién sube capturas son datos personales de
menores: eso pasa por jefatura antes de existir.

## Mapa

| Carpeta | Qué es |
|---|---|
| `entrada/` | donde se suelta el `.md` de NotebookLM; se archiva solo en `procesados/` |
| `generador/` | `importar.py` (NotebookLM → ficha), `construir.py` (fichas → HTML), `imagenes.py` |
| `notas/` | una ficha Markdown por nota, con front-matter |
| `imagenes/` | las capturas, nombradas `NT21_02.jpg` |
| `web/` | el HTML generado y su copia `.txt` para Google Sites |
| `prompts/` | el prompt único de NotebookLM |
| `FUENTES.md` | qué documentos están procesados |
| `PENDIENTES.md` | elementos detectados que aún no tienen nota |
