# Puente Drive → GitHub (capturas del alumnado)

Drive y GitHub no se hablan solos. Este script es el puente: cada 15 minutos mira
una carpeta de Drive y sube a `imagenes/` las fotos que el alumnado haya
dejado ahí.

## Puesta en marcha (una sola vez)

1. **Crear la carpeta en Drive** y compartirla con el alumnado *como editores*
   (necesitan poder subir, no solo ver). Copia su ID: es lo que va detrás de
   `/folders/` en la URL.

2. **Crear el token de GitHub**: `github.com/settings/personal-access-tokens`
   → *Fine-grained token* → solo este repositorio → permiso
   **Contents: Read and write**. Nada más. Cópialo, solo se enseña una vez.

3. **Proyecto nuevo** en `script.google.com` (suelto, sin hoja detrás), pega
   `Codigo.gs`, y en *Configuración del proyecto → Propiedades del script*:

   | Propiedad | Valor |
   |---|---|
   | `GITHUB_TOKEN` | el token del paso 2 |
   | `CARPETA_CAPTURAS` | el ID del paso 1 |

   El token va aquí y no dentro del código: las propiedades no viajan con las
   copias del proyecto, el código sí.

4. Ejecutar **`crearActivador`** una vez. Ya queda solo.

Si quieres que se despliegue desde este repositorio como los demás, añade su
Script ID a la matriz de `.github/workflows/deploy-gas.yml`.

## Qué hace con cada archivo

| Nombre del archivo | Qué pasa |
|---|---|
| `NT21_02.jpg` | sube a `imagenes/` y se aparta en *Subidas* |
| `IMG_4471.jpg` | se aparta en *Nombre incorrecto*, para que lo renombren |
| falla la subida | se queda donde está y se reintenta a los 15 minutos |

No borra nada nunca. Solo mueve.

## Dos cosas a tener en cuenta

**Los nombres.** El alumnado tiene que poner exactamente el nombre que sale en la
etiqueta azul del dashboard. Es todo el acuerdo que hace falta; el emparejamiento
es por ese nombre, no por lo que haya en la foto.

**Las fotos originales.** El generador borra la geolocalización al incrustar la
imagen en el HTML, pero lo que este puente sube al repositorio es el archivo tal
cual salió del móvil, con sus datos EXIF. El repositorio es privado, así que no
sale de ahí, pero conviene saberlo. Y lo que se vea en la foto —matrículas,
caras, el VIN— eso no lo puede quitar ningún script.

---

## Segundo automatismo: apartar los documentos ya procesados

Renombras en Drive el PDF que acabas de procesar añadiéndole la marca (`PRO`) y,
una vez al día, `puenteNT_archivarProcesados` lo mueve a la subcarpeta
*Procesados*. Lo que queda en la carpeta es lo que falta: la lista de pendientes
se mantiene sola, sin llevar ninguna cuenta aparte.

Dos propiedades más del script:

| Propiedad | Valor |
|---|---|
| `CARPETA_FUENTES` | ID de la carpeta de Drive con los PDF sin procesar |
| `MARCA_PROCESADO` | opcional; por defecto `PRO` |

**La marca se busca como palabra suelta, no como trozo de otra.** Si se buscara
sin más, un `PROCEDIMIENTO`, un `PROTECCIÓN` o un `PROCESOS` en el nombre del
archivo darían por procesado un documento que no lo está, y en esta asignatura
esas tres palabras salen constantemente.

### Esto no vacía el cuaderno de NotebookLM

Renombrar o mover en Drive **no toca las fuentes del cuaderno**: cuando añades un
documento a NotebookLM, el cuaderno se queda con su propia copia. Mover el
archivo en Drive no la borra ni la cambia de sitio.

Quitar las fuentes ya procesadas del cuaderno sigue siendo manual. Y conviene
hacerlo, porque las fuentes que se quedan dentro siguen alimentando las
respuestas: al procesar el documento 12, el cuaderno puede mezclarlo con los 11
anteriores y romper la disciplina de "una nota, un documento, y su cobertura
declarada".

Lo más barato es trabajar con el cuaderno casi vacío: metes el PDF, lo procesas,
lo sacas, metes el siguiente. Un cuaderno por bloque temático también sirve, y
así lo archivas entero al acabar en vez de ir quitando fuentes de una en una.
