# CONFIGURAR LA API KEY (IA)

Cómo obtenerla, configurarla y replicarla en un proyecto nuevo. Proveedor por
defecto: **Gemini (Google AI Studio)**. No hay que pagar para empezar.

## 1. Obtener la clave (una sola vez)
1. Entra en Google AI Studio → `https://aistudio.google.com/apikey`.
   Usa un perfil de Chrome que **no** sea el de `@g.educaand.es` (cuentas de
   centro suelen bloquear la creación de claves).
2. "Create API key" → cópiala (empieza por `AIza...`). Guárdala en tu gestor de
   contraseñas, no en el repo ni en un chat.
3. Si al usarla todos los modelos dan **404**: en Google Cloud Console, en el
   proyecto de esa clave, habilita la **Generative Language API**.

## 2. Configurarla en la app
1. Abre la app → **Ajustes de la aplicación → Proveedores de IA**.
2. Pega la clave en el proveedor Gemini → **Guardar clave**.
3. Pulsa **Comprobar**: debe decir "✅ La API key funciona (modelo …)".
4. Ya puedes generar informes.

Modo avanzado (opcional): puedes añadir varios proveedores
(`gemini` / `anthropic` / `openai`-compatible) con su propia clave, URL base y
modelo. Se prueban **en el orden de la lista** hasta que uno responde.

## 3. Dónde se guarda (y por qué no se "hereda" sola)
- Se guarda en `PropertiesService.getUserProperties()`:
  - `AI_API_KEY` → la clave única (Gemini legacy).
  - `AI_PROVEEDORES` → la lista avanzada `{tipo, apiKey, baseUrl, modelo, activo}`.
- UserProperties es **personal de cada usuario y de cada proyecto Apps Script**.
  Un proyecto nuevo arranca vacío: hay que **volver a pegar la misma clave** una
  vez en su panel de Ajustes. No se copia por código ni por el Sheet.

## 4. Heredarla en el proyecto nuevo (elige una)
- **Recomendado:** re-pega la misma clave de AI Studio en el panel del proyecto
  nuevo. Simple y sin riesgo. (Reutilizar la clave comparte su cuota.)
- **Clave por app:** crea una segunda clave en AI Studio para el proyecto nuevo
  (cuotas independientes, más fácil de revocar). Recomendable si va a tener uso
  real.
- **Fuente única (avanzado, más riesgo):** una celda de una hoja tuya que ambas
  apps lean al arrancar. Solo si controlas los permisos de esa hoja; amplía la
  superficie de fuga. Por defecto, evítalo.

## 5. Reglas de seguridad
- La clave nunca va al repositorio, ni a un commit, ni a una hoja compartida,
  ni a un chat. Solo en UserProperties (la app) y en tu gestor de contraseñas.
- Para reutilizar el **código** de gestión de clave, copia `AIReportEngine.gs`
  (funciones `saveAIApiKey` / `hasAIApiKey` / `comprobarAIApiKey` /
  `frGuardarProveedoresIA`): traen la key, no.
