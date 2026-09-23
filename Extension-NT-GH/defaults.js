// Configuración por defecto (compartida por todas las piezas)
const DEFAULTS = {
  repo: "",
  dir: "notebooklm",
  token: "",
  prompt: "Procesa la fuente seleccionada.",
  sel: {
    sourceRow: ".single-source-container",
    sourceTitle: ".source-title",
    sourceCheck: "input.mdc-checkbox__native-control",
    input: 'textarea:not([formcontrolname="discoverSourcesQuery"])',
    send: 'button[aria-label="Enviar"]',
    answer: "chat-message .to-user-container",
    copy: 'button[aria-label="Copiar respuesta del modelo en el portapapeles"]'
  }
};

async function getCfg() {
  const { cfg = {} } = await chrome.storage.local.get("cfg");
  return { ...DEFAULTS, ...cfg, sel: { ...DEFAULTS.sel, ...(cfg.sel || {}) } };
}
