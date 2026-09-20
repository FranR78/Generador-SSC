# Despliegue de la puerta de datos

Dos proyectos Apps Script. El **Portal** (`portal/`) se ejecuta como cada alumno
para usar su propia API key; **Datos** (`datos/`) se ejecuta como el profe y es el
único que abre la Hoja. La Hoja **no se comparte con nadie**.

## 1. Proyecto Datos (una vez)

1. Crear un proyecto Apps Script nuevo llamado `Generador-SSC — Datos`.
2. Subir `datos/Datos.gs` y `datos/appsscript.json`.
3. Ejecutar `db_setup()` desde el editor. Si ya lo habías ejecutado antes de
   añadir las rondas, borra las pestañas `Tareas`, `Aportaciones` y
   `Valoraciones` (solo tenían datos de prueba): se recrean con las columnas
   nuevas al usarlas. Devuelve la URL de la Hoja creada y
   guarda su ID en `DB_SHEET_ID`. **No compartir esa Hoja.**
4. Desplegar: *Implementar → Nueva implementación → Aplicación web*
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Usuarios de <dominio del centro>**
5. Copiar la URL `/exec`.

## 2. Proyecto Portal

1. En *Configuración del proyecto → Propiedades del script*:
   - `DATOS_URL` = la URL `/exec` del paso anterior.
   - `ROOT_FOLDER_ID` = carpeta de Drive con los PDF (ya existente).
2. Volver a desplegar para que se apliquen los permisos nuevos (`openid`), y
   **volver a autorizar** al abrirlo: sin el permiso `openid`,
   `ScriptApp.getIdentityToken()` devuelve `null` y no hay identidad.

## 3. Cerrar el candado (recomendado)

En las Propiedades del script de **Datos**:

- `DOMINIO` = dominio del centro (p. ej. `ejemplo.edu`). Rechaza cuentas de fuera.
- `PORTAL_AUD` = `client_id` del proyecto Portal, que aparece en
  *Configuración del proyecto → Proyecto de Google Cloud*. Con esto, Datos solo
  acepta tokens emitidos para el Portal.

## 4. Visibilidad de temas y documentos

1. En Propiedades del script de **Datos**: `PROFES` = tus correos separados por
   comas. Solo esos pueden cambiar la visibilidad.
2. Entrar al portal con tu cuenta: aparece la pestaña **Panel**, que solo se
   muestra a los correos de `PROFES` (lo decide el servidor, no el navegador).
3. En el Panel, **Buscar PDF nuevos** da de alta en `Config` lo que falte —
   púlsalo cada vez que subas PDF al Drive. Luego desmarca lo que no quieras
   disponible y **Guardar visibilidad**.
4. Ocultar un tema oculta todo lo que cuelga de él. Lo que no tiene fila en
   `Config` se considera visible, así que los PDF nuevos nunca desaparecen sin
   avisar. Para que algo se abra solo un día concreto, poner la fecha en la
   columna `abre_el` de la Hoja.
5. Los umbrales del gating (consultas por bloque, respuestas y valoraciones
   necesarias) también se editan en el Panel. Ya no se tocan en Propiedades del
   script: `GATE_LIBRES`, `GATE_REQ_APORTA` y `GATE_REQ_VALORA` se pueden borrar.

El profesorado ve el árbol completo con lo oculto marcado; el alumnado no recibe
del servidor ni el nombre de lo que está cerrado.

## 5. Rondas

Una ronda es un ítem a definir. Estados: `borrador` → `abierta` → `votacion` →
`cerrada`. Se gestionan desde el Panel, y si pones fechas de cierre avanzan solas
(el paso se comprueba al leer, así que no hace falta ningún disparador).

Dos reglas del diseño, ya en el código:

- **Una respuesta por alumno y ronda**, y solo mientras está `abierta`.
- **Portón**: en `votacion`, cada alumno solo ve las respuestas de las rondas en
  las que él ya entregó, sin autor y en un orden distinto para cada uno.
  Reparte tres estrellas: 3 ★, 2 ★ y 1 ★, una de cada por ronda.

## 6. Comprobación

1. Entrar al portal con una cuenta de alumno de prueba.
2. Hacer una consulta: debe aumentar `consultas` en la pestaña `Actividad`.
3. Intentar abrir la Hoja con esa misma cuenta: **debe dar "no tienes acceso"**.
   Si la abre, la Hoja sigue compartida — quitar el permiso.

## 7. Qué protege y qué no

Protege: los contadores del gating, el anonimato de las valoraciones y las filas
de los demás. Nadie puede editarlos fuera del portal.

No protege los PDF: el portal se ejecuta como el alumno, así que la carpeta de
Drive debe estar compartida en **solo lectura** y un alumno decidido puede
abrirla directamente. La visibilidad por temas del panel del profesor sirve para
no agobiar, no como control de acceso.

## El panel del profesorado, tras retirar el Admin antiguo

Había dos paneles hechos por separado y ahora solo queda uno: `portal/Profesor.html`.
Lo que solo tenía el antiguo se ha traído aquí:

- **Prompt de la IA**: sigue en las Propiedades del script del *portal* (no en la
  Hoja), pero quién puede tocarlo lo decide la puerta (`soyProfe`), para no
  mantener dos listas de profesorado. Antes había una lista aparte, `ADMIN_EMAILS`,
  que ya no se usa: **el profesorado se define solo en `PROFES` del proyecto Datos.**
- **Reiniciar contadores de un alumno** ("Nueva tanda"): botón en el Pulso del
  grupo. Pasa por la puerta (`resetUsuario`), que exige profe; si se hiciera desde
  el portal, un alumno podría ponerse los contadores a cero.
- **Telemetría de uso** (`conexiones` y `tiempo_seg`): se había perdido al mover el
  acceso a la puerta y se ha restaurado como operaciones `conexion` y `latido`.
  Las dos columnas **se crean solas** en la pestaña Actividad la primera vez, así
  que una Hoja ya existente no hay que tocarla a mano.

---

# Puesta al día del proyecto de Apps Script

Orden que hay que respetar: **primero la puerta, luego el portal**. El portal ya
no abre la Hoja por su cuenta, así que sin la puerta desplegada no arranca.

Los archivos se copian de GitHub: `github.com/FranR78/Generador-SSC`.

## Fase 1 — La puerta de datos (proyecto NUEVO)

1. `script.google.com` → **Nuevo proyecto**. Nombre: *Datos SSC*.
2. Pega `datos/Datos.gs` en `Código.gs`.
3. **+ → Secuencia de comandos**, llámalo `Casos`, y pega `datos/Casos.gs`.
4. ⚙ **Configuración del proyecto → Propiedades del script**:

   | Propiedad | Valor |
   |---|---|
   | `PROFES` | tu correo del centro |

   `DB_SHEET_ID` no lo pongas: lo escribe `db_setup()` solo.

5. Ejecuta **`db_setup`** una vez. Crea la Hoja y devuelve su URL en el registro.
6. Ejecuta **`prepararCasos`** una vez. Deja el caso del León relleno y añade
   la pestaña *Cómo se rellena*.
7. **Implementar → Nueva implementación → Aplicación web**:

   | Campo | Valor |
   |---|---|
   | Ejecutar como | **Yo** |
   | Quién tiene acceso | **Cualquier usuario de tu organización** |

8. Copia la URL que acaba en `/exec`. Es lo que necesita el portal.

## Fase 2 — El portal (proyecto que ya tienes)

9. **Borra** `Admin.gs` y `AdminUI.html`. Ya no existen: su panel lo sustituye
   `Profesor.html`, y si los dejas romperán, porque llaman a funciones de Hoja
   que `DB.gs` ya no tiene.
10. **Reemplaza** el contenido de `Code.gs`, `DB.gs`, `Gating.gs`, `IA.gs` y
    `Portal.html` por el de la carpeta `portal/`.
11. **Crea dos archivos HTML nuevos** (+ → HTML), con estos nombres exactos:
    `Profesor` y `Simulador`. Pega dentro `portal/Profesor.html` y
    `portal/Simulador.html`.

    > Los nombres importan: `Portal.html` los llama con `include('Profesor')` e
    > `include('Simulador')`.

12. ⚙ **Propiedades del script** → añade:

    | Propiedad | Valor |
    |---|---|
    | `DATOS_URL` | la URL `/exec` del paso 8 |

13. **Implementar → Gestionar implementaciones** → lápiz → Versión **Nueva** →
    **Implementar**. La URL del portal no cambia.

## Comprobar que ha ido bien

- Entra en el portal: deben aparecer las pestañas **Simulador** y **Panel**
  (esta última solo si tu correo está en `PROFES`).
- En **Simulador** deben salir los dos casos del León.
- Abre uno y mide entre los dos pines de N280 con el conector puesto: marca
  ~10,9 Ω y avisa de que la medida no vale. Desconéctalo y marca ~11 Ω.

## Para más adelante: cerrar el acceso

Dos propiedades **opcionales** de la puerta, que conviene poner cuando esto
esté en manos del alumnado:

| Propiedad | Valor | Para qué |
|---|---|---|
| `DOMINIO` | el dominio del centro | Rechaza cuentas de fuera |
| `PORTAL_AUD` | el ID de cliente OAuth del portal | Solo acepta tokens del portal, no de otra app |

Si no las pones, esas dos comprobaciones simplemente no se hacen.

---

# Apuntes, progreso y freno del simulador

Tres cambios de fondo, en esta dirección: **preguntar a la IA deja de estar
racionado** (preguntar es trabajar) y **el freno se mueve al simulador**, donde
entre dos intentos del mismo caso tienen que pasar horas.

## Qué hay que hacer, una vez

1. **Puerta** (*Datos SSC*): añade el archivo `datos/Progreso.gs` (+ → Secuencia
   de comandos, nombre `Progreso`) y actualiza `Datos.gs`. Las pestañas
   `Lecturas` e `Intentos` se crean solas.
2. **Puente** (*el de las capturas*): actualiza `Codigo.gs` y ejecuta a mano
   **`puenteNT_traerNotas`**. Deja `notas.json` en Drive y escribe en el
   registro el **NOTAS_FILE_ID**. Cópialo.
3. **Portal**: añade `Notas.gs`, `Apuntes.html` e `Inicio.html`, actualiza
   `Code.gs`, `DB.gs`, `Gating.gs`, `Portal.html` y `Simulador.html`, y pon la
   propiedad:

   | Propiedad | Valor |
   |---|---|
   | `NOTAS_FILE_ID` | el id del paso 2 |

4. Vuelve a ejecutar **`crearActivador`** en el puente, para que los apuntes se
   refresquen solos una vez al día.

## Los dos ajustes que ahora mandan

En la pestaña **Ajustes** de la Hoja:

| Clave | Por defecto | Qué hace |
|---|---|---|
| `LIBRES` | `0` | Consultas a la IA. **0 = sin límite.** |
| `HORAS_ENTRE_INTENTOS` | `12` | Horas antes de repetir el MISMO caso |

Un caso ya resuelto **con fundamento** no se bloquea: repetirlo es repasar, y
repasar no se castiga. Lo que se frena es reintentar el que aún no domina.

## Por qué las notas van a Drive y no se leen de GitHub

El repositorio es privado y **el portal corre como el alumno**: un token de
GitHub ahí sería un token en manos del alumnado. El puente, que sí es tuyo y ya
tiene el token, deja el archivo en Drive. El alumno solo ve el resultado.

El corpus entero son **371 KB de texto** frente a los 15 MB que puede pesar un
solo PDF, así que se puede preguntar contra toda la asignatura de una vez.
