# Sacar las notas técnicas a su propio repositorio

Runbook para hacerlo de una sentada. Las órdenes están probadas sobre este
repositorio; la extracción con historia y el pipeline en la estructura nueva se
comprobaron antes de escribir esto.

**Regla que ordena todo lo demás: no se borra nada de Diario-Docente hasta que
el repositorio nuevo esté en verde.** Mientras tanto conviven los dos, que no
molestan.

---

## 0. Qué se lleva y qué se queda

Se lleva todo `nt/`, y además dos cosas que **no están dentro de `nt/`** y por
eso no viajan solas en la extracción:

| Qué | Dónde está hoy | Ya preparado en |
|---|---|---|
| El workflow | `.github/workflows/notas-tecnicas.yml` | `nt/migracion/notas-tecnicas.yml` |
| El puente de Drive | `apps-script/puente-nt/` | `nt/migracion/puente-nt/` |

Las copias de `nt/migracion/` llevan las rutas ya corregidas para la estructura
nueva (sin el prefijo `nt/`, porque el contenido pasa a estar en la raíz). Como
están dentro de `nt/`, viajan con la extracción y mañana solo hay que moverlas
de sitio.

---

## 1. Crear el repositorio nuevo

En `github.com/new`:

- Nombre: `notas-tecnicas` (o el que prefieras).
- **Privado. Esto no es opcional**: dentro hay contenido de manuales de
  fabricante y va a acabar habiendo fotos hechas por alumnado.
- Sin README, sin .gitignore, sin licencia. Vacío del todo: lo que se empuja
  en el paso 3 trae su propia historia y un repositorio con un commit inicial
  estorba.

Comprueba que la rama por defecto se llama `main`. En Diario-Docente no lo es
—quedó apuntando a una rama `claude/…`— y eso despista cada vez que se vuelve.

---

## 2. Extraer `nt/` con su historia

```bash
cd Diario-Docente
git checkout main && git fetch origin main -q && git pull --ff-only
git subtree split -P nt -b extraccion-nt
```

Tarda unos segundos y va imprimiendo un contador. Al terminar deja una rama
local `extraccion-nt` cuyo contenido es lo que hay en `nt/` pero colocado en la
raíz, y con los commits que tocaron esa carpeta (hoy son 4).

Comprobación antes de seguir:

```bash
git ls-tree --name-only extraccion-nt     # debe salir generador, notas, entrada…
git log --oneline extraccion-nt | wc -l   # los commits de notas técnicas
```

## 3. Empujarlo al repositorio nuevo

```bash
git remote add nt-nuevo https://github.com/FranR78/notas-tecnicas.git
git push nt-nuevo extraccion-nt:main
```

## 4. Colocar el workflow y comprobar que sale verde

```bash
cd ..
git clone https://github.com/FranR78/notas-tecnicas.git
cd notas-tecnicas

mkdir -p .github/workflows
git mv migracion/notas-tecnicas.yml .github/workflows/notas-tecnicas.yml
git rm -r --cached migracion -q && rm -rf migracion   # ya no hace falta

git add -A
git commit -m "Workflow en su sitio tras la extracción"
git push -u origin main
```

Eso dispara la primera ejecución. **Míralo en la pestaña Actions y no sigas
hasta que esté verde.** Si falla, el registro dice en qué paso.

Para probarlo de verdad, sube un `.md` a `entrada/` y comprueba que aparecen
las fichas en `notas/` y que `web/notas-tecnicas.html` se regenera.

## 5. El puente de Drive

El token de GitHub que tengas creado es *fine-grained* y apunta al repositorio
viejo, así que **no sirve**: hay que hacer uno nuevo para el repositorio nuevo.

1. `github.com/settings/personal-access-tokens` → solo `notas-tecnicas` →
   **Contents: Read and write**.
2. En el proyecto de Apps Script, sustituye `Codigo.gs` por
   `migracion/puente-nt/Codigo.gs` (ya trae `DESTINO = 'imagenes/'`).
3. Cambia `const REPO` por `FranR78/notas-tecnicas`.
4. Actualiza la propiedad `GITHUB_TOKEN` con el token del paso 1.
5. Borra el token viejo en GitHub, que ya no pinta nada.

Si el puente todavía no estaba en marcha, sáltate esto y monta directamente el
del repositorio nuevo siguiendo su README.

## 6. Google Sites

No cambia nada. Sigues cogiendo `web/notas-tecnicas.txt`, ahora desde el
repositorio nuevo, y pegándolo en el insertador de código.

---

## 7. Solo ahora: limpiar Diario-Docente

Con el repositorio nuevo funcionando y comprobado:

```bash
cd ../Diario-Docente
git rm -r -q nt apps-script/puente-nt .github/workflows/notas-tecnicas.yml
```

Y en `docs/README.md`, la línea de notas técnicas pasa a ser un puntero:

```
| Notas técnicas | Se han mudado a github.com/FranR78/notas-tecnicas |
```

```bash
git commit -m "Las notas técnicas se mudan a su propio repositorio"
git push origin main
git branch -D extraccion-nt
git remote remove nt-nuevo
```

## 8. El CLAUDE.md del repositorio nuevo

El de Diario-Docente no viaja, y sin él trabajo a ciegas allí. Dime cuando
estés en este punto y lo escribo: formato de respuesta, la regla de que manda
origin, y el mapa de carpetas.

---

## Una cosa a vigilar de aquí en adelante

`nt/` ocupa hoy 784 KB, y de eso 380 KB son `web/` — el HTML generado, con las
imágenes ya incrustadas en base64. Ese archivo se vuelve a guardar entero en
cada ejecución, así que el repositorio engorda un poco cada vez, y mucho más en
cuanto empiecen a entrar las capturas del alumnado.

No es problema hoy ni lo será en meses, pero es la razón de fondo por la que
esto merece repositorio propio: no arrastra a Diario-Docente. Si algún día
molesta, la salida es dejar de versionar `web/` y publicarlo como artefacto de
la ejecución; cuando llegue el momento se mira.
