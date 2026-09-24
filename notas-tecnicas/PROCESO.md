# El proceso, paso a paso

Regla de oro: **tú solo dejas archivos en su carpeta. Lo demás lo hace GitHub.**
No hay que ejecutar nada en el PC ni abrir la terminal.

---

## A. Sacar una nota nueva de un PDF

1. Sube el PDF a **tu cuaderno de NotebookLM**. Uno solo, valga lo que valga el
   documento: el prompt decide por sí mismo qué sale como nota de elemento (una
   pieza que se sustituye) y qué sale como nota de proceso (cómo funciona, cómo
   se hace, cómo se diagnostica). El prompt está en
   `prompts/notebooklm-v2.md` (va en «Configurar conversación» del cuaderno).
2. Lanza la extensión NotebookLM → GitHub: copia cada respuesta (no la
   exporta) y la sube sola a **`notas-tecnicas/entrada/`**.

Y ya está. A los dos minutos GitHub ha hecho solo:

- numerar las notas a partir de la última que exista (no hay que llevar la cuenta);
- limpiar lo que NotebookLM añade (LaTeX, tablas en comas, números de cita);
- apartar el `.md` original en `notas-tecnicas/entrada/procesados/`, para saber qué está hecho;
- regenerar `nt/web/notas-tecnicas.html`.

### Cómo se sube un archivo a `notas-tecnicas/entrada/` sin saber git

En el navegador, también desde el móvil:
`github.com/FranR78/Generador-SSC` → carpeta `notas-tecnicas/entrada` → **Add file → Upload files**
→ arrastras el `.md` → **Commit changes**.

---

### Si el documento es largo

NotebookLM no se traga un manual de 200 páginas de una vez. El prompt le obliga a
decir dónde ha parado, y esa línea sale en el registro de la ejecución:

```
cobertura declarada: páginas 98 a 113 de 240. Queda pendiente desde la 114.
```

Le pides que continúe desde ahí y subes el segundo `.md` igual que el primero. La
numeración sigue sola donde lo dejó.

---

## B. Lo único que sigue siendo tuyo

Las notas recién importadas salen con `grupo: POR CLASIFICAR`. Aparecen agrupadas
así en el dashboard, bien visibles, hasta que les pongas el grupo que les toca.
Es una decisión tuya de criterio, no la puede tomar el sistema.

Se edita en `nt/notas/ntNN-....md`, en GitHub, con el lápiz. Dos líneas:

```
grupo: Circuito frigorífico
fuentes: "5. Sistemas de Aire Acondicionado.pdf, pág. 44-46"
```

Al guardar, el HTML se regenera solo otra vez.

### Si dos notas se parecen

El sistema no fusiona nada por su cuenta. Cuando detecta que dos notas tratan de
lo mismo, lo dice en el registro de la ejecución (pestaña **Actions**):

```
· NT40 «Ciclo frigorífico con válvula de expansión» y NT48 «…» tratan de lo mismo
```

Ahí me lo pasas y las fusionamos conservando las capturas de ambas.

---

## C. Las capturas del alumnado

Cada nota lleva sus huecos de imagen numerados: `NT21_01`, `NT21_02`… El nombre
exacto aparece en el dashboard, en una etiqueta azul. El alumno ve el nombre que
tiene que ponerle a su foto; no hay que acordar nada de palabra.

El emparejamiento es por el nombre del archivo, sin más: una foto llamada
`NT21_02.jpg` cae en el segundo hueco de la nota 21. Mayúsculas, guión bajo, y da
igual la extensión.

**Dónde las dejan ellos:** en la carpeta compartida de Drive. De ahí a GitHub hay
que tender un puente, porque Drive y GitHub no se hablan solos:
`apps-script/puente-nt/` lo hace, pero le falta configurar el token. Ver su README.

**Mientras tanto**, vale con que las subas tú a `notas-tecnicas/imagenes/`
igual que el `.md` del paso A.

> Antes de publicar capturas de taller: matrículas, caras y VIN. El generador
> borra la geolocalización de las fotos al incrustarlas, pero no puede borrar lo
> que salga en la imagen.

---

## D. Que lo vea el alumnado

`nt/web/notas-tecnicas.txt` es el mismo HTML con extensión que Drive sí acepta.
Se pega en Google Sites con el insertador de código.

Este paso sigue siendo manual: Sites no se deja actualizar desde fuera. Si quieres
quitártelo de encima, el portal del alumnado que ya tienes desplegado sí puede
servir el HTML en una URL fija; dímelo y lo engancho.
