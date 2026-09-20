# Servir el entrenador como aplicación web

El insertador de código de Google Sites **no sirve** para esto: sanea el HTML
—se come la tabla de la ficha— y corta por tamaño, así que el entrenador
llegaba a medias. Servido desde Apps Script llega entero, y es donde luego
encajan el login, los tiempos y la puntuación.

## Puesta en marcha (una sola vez)

1. **Proyecto nuevo** en `script.google.com` (suelto, sin hoja detrás).
   Ponle de nombre *Entrenador de Climatización*.

2. **Pega el código.** Borra lo que traiga `Código.gs` y pega el contenido de
   `Codigo.gs` de esta carpeta.

3. **Crea el archivo HTML.** Botón **+** junto a *Archivos* → **HTML**.
   Llámalo exactamente **`Entrenador`** (sin `.html`, el editor lo añade solo).
   Borra lo que traiga y pega dentro el contenido de `Entrenador.html`.

   > El nombre importa: `doGet` busca un archivo llamado `Entrenador`.

4. **Despliega.** Arriba a la derecha: **Implementar → Nueva implementación**
   → rueda dentada → **Aplicación web**. Rellena:

   | Campo | Valor |
   |---|---|
   | Ejecutar como | **Yo** |
   | Quién tiene acceso | **Cualquier usuario de tu organización** |

   Pulsa **Implementar**, acepta los permisos y **copia la URL** que acaba en
   `/exec`.

5. **Pruébala** pegándola en el navegador. Debe salir el entrenador completo:
   esquema, polímetro y ficha.

## Incrustarlo en Google Sites

En tu página de Sites: **Insertar → Insertar → Por URL** (no "Insertar código"),
pega la URL `/exec` y ajusta el alto del marco.

Si Sites lo muestra en blanco, casi siempre es que falta
`setXFrameOptionsMode(ALLOWALL)` en `doGet`. Ya viene puesto en `Codigo.gs`:
sin eso, Google no deja que la aplicación se vea dentro de un iframe.

## Cuando cambie el entrenador

No hay que repetir nada de lo anterior. Solo:

1. Ejecutar `python3 simulador/construir.py`.
2. Copiar el nuevo `Entrenador.html` sobre el archivo del editor.
3. **Implementar → Gestionar implementaciones** → lápiz → Versión: **Nueva** →
   **Implementar**. La URL no cambia.
