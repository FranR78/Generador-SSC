# Despliegue de la puerta de datos

Dos proyectos Apps Script. El **Portal** (`portal/`) se ejecuta como cada alumno
para usar su propia API key; **Datos** (`datos/`) se ejecuta como el profe y es el
único que abre la Hoja. La Hoja **no se comparte con nadie**.

## 1. Proyecto Datos (una vez)

1. Crear un proyecto Apps Script nuevo llamado `Generador-SSC — Datos`.
2. Subir `datos/Datos.gs` y `datos/appsscript.json`.
3. Ejecutar `db_setup()` desde el editor. Devuelve la URL de la Hoja creada y
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
2. Desde el editor del **Portal**, ejecutar `sincronizarCatalogo()` una vez (y
   cada vez que añadas PDF nuevos al Drive). Da de alta en la pestaña `Config`
   los temas y documentos que falten, todos como visibles.
3. Para ocultar algo: en `Config`, poner `NO` en la columna `visible`. Para que
   se abra solo un día concreto: dejar `SI` y poner la fecha en `abre_el`.
4. Ocultar un tema oculta todo lo que cuelga de él. Lo que no tiene fila en
   `Config` se considera visible, así que los PDF nuevos nunca desaparecen sin
   avisar.

El profesorado ve el árbol completo con lo oculto marcado; el alumnado no recibe
del servidor ni el nombre de lo que está cerrado.

## 5. Comprobación

1. Entrar al portal con una cuenta de alumno de prueba.
2. Hacer una consulta: debe aumentar `consultas` en la pestaña `Actividad`.
3. Intentar abrir la Hoja con esa misma cuenta: **debe dar "no tienes acceso"**.
   Si la abre, la Hoja sigue compartida — quitar el permiso.

## 6. Qué protege y qué no

Protege: los contadores del gating, el anonimato de las valoraciones y las filas
de los demás. Nadie puede editarlos fuera del portal.

No protege los PDF: el portal se ejecuta como el alumno, así que la carpeta de
Drive debe estar compartida en **solo lectura** y un alumno decidido puede
abrirla directamente. La visibilidad por temas del panel del profesor sirve para
no agobiar, no como control de acceso.
