# Paso a paso — lo que tienes que hacer tú a mano

Ordenado de lo que desbloquea más a lo que menos. Lo que puedo hacer yo ya
está hecho; esto es lo que solo puedes hacer tú (tocar el editor de Apps
Script, crear secretos en GitHub, pegar en la web de Google).

Tácha­lo según lo hagas. Cada bloque es independiente: puedes hacerlos en días
distintos.

---

## 1. Que el portal deje de servir código viejo (URGENTE, 2 min)

Es lo que hace que sigan saliendo errores tipo «Operación desconocida». Pegar
código en el editor NO lo publica: hay que crear versión nueva.

En el proyecto **Datos SSC**:
1. Arriba a la derecha → **Implementar**
2. **Gestionar implementaciones**
3. Clic en el **lápiz** ✏️
4. Desplegable **Versión** → **Versión nueva**
5. **Implementar** → **Listo**

La URL no cambia. Lo mismo en el proyecto **Portal** cuando pegues los archivos
nuevos (paso 2).

Para comprobar: entra en el portal, pestaña Inicio. Si carga sin el error, hecho.

---

## 2. Poner al día el código de los dos proyectos (10 min)

Todo lo de esta semana está en GitHub pero NO en el editor de Apps Script.
Hay que copiarlo a mano (hasta que funcione el automatismo del paso 3).

**Proyecto Portal** — copia de GitHub y pega en el editor, archivo por archivo:
`Portal.html`, `Cursos.html`, `Apuntes.html`, `Consulta.html`, `Simulador.html`,
`IA.gs`, `Code.gs`. (Si un archivo no existe aún en el editor: Archivo → Nuevo.)

**Proyecto Datos SSC:** `Datos.gs`, `Casos.gs`, `Progreso.gs`.

Regla para no equivocarse: **todo archivo HTML empieza por `<`; todo `.gs`
empieza por `/**`.** Si pegas un .gs en un .html, se rompe.

Al terminar, en CADA proyecto haz el paso 1 (versión nueva).

---

## 3. Automatismo de despliegue GAS ↔ GitHub (una vez, 20 min)

Esto es lo que hace que el paso 2 no vuelva a hacer falta nunca: a partir de
aquí, un push a GitHub sube el código y publica solo.

### 3a. Sacar las credenciales de clasp (en un PC, no en el móvil)
En una terminal:
```
npm install -g @google/clasp@2.4.2
clasp login
```
Se abre el navegador, entras con la cuenta dueña de los proyectos. Queda un
archivo `.clasprc.json`:
- Windows: `C:\Users\<tu usuario>\.clasprc.json`
- Mac/Linux: `~/.clasprc.json`

### 3b. Crear el secreto CLASPRC_JSON
GitHub → repo Generador-SSC → **Settings** → **Secrets and variables** →
**Actions** → **New repository secret**.
- Nombre: `CLASPRC_JSON`
- Valor: **todo el contenido** de ese `.clasprc.json`

⚠️ Ese archivo es la llave de tus proyectos. No lo pegues en un chat ni lo subas
al repo. Si se escapa: `clasp logout` y repites 3a (invalida el anterior).

### 3c. Poner los dos Script ID en el workflow
Editas `.github/workflows/deploy-gas.yml` (desde GitHub, lápiz), y donde pone
`PON_AQUI_EL_SCRIPT_ID_...` pegas el ID real de cada proyecto.

Cada Script ID sale de su editor: **Configuración del proyecto (⚙️) → ID de
secuencia de comandos**. No son secretos.

### 3d. Crear los dos secretos de implementación (para que además publique)
Como en 3b, dos secretos más:
| Secreto | De dónde sale |
|---|---|
| `DEPLOYMENT_ID_PORTAL` | Portal → Implementar → Gestionar implementaciones → **ID de implementación** |
| `DEPLOYMENT_ID_DATOS` | lo mismo en Datos SSC |

Cada ID es de SU proyecto. Si los cruzas, falla con «Invalid deployment ID»
(y el workflow te enseña los IDs reales para corregir).

### 3e. Primera ejecución a mano
GitHub → pestaña **Actions** → **Desplegar Apps Script** → **Run workflow**.
Miras que salga verde. A partir de ahí, cada push despliega solo el proyecto
que cambió.

**Si te saltas 3c o 3d:** no se rompe nada. El workflow avisa en el resumen de
que falta el dato y sube el código sin publicar (la publicación se queda a mano,
como el paso 1).

---

## 4. Limpieza y clasificación (cuando tengas rato)

- **Borrar dos ramas viejas** en GitHub → Branches → papelera:
  `claude/educational-control-panel-6fl35j` (fusionada, segura),
  `claude/pdf-query-system-students-1chuax` (un commit huérfano, superado).
- **Clasificar NT143–NT163**: están en `grupo: POR CLASIFICAR`. Pon su grupo y,
  las del Audi, su unidad (ahora en `sin-clasificar`).
- **Medir la N280** en un coche real y cambiar su rango de Inferido a Medido.

---

## Lo que ya NO tienes que hacer (está automatizado)

- Subir un `.md` de NotebookLM: lo sueltas en `notas-tecnicas/entrada/` y el
  workflow crea las notas y regenera el dashboard solo. (Ya funciona: probado
  con el manual del Audi A5.)
