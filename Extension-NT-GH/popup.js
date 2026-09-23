const st = document.getElementById("status");
const go = document.getElementById("go");
const say = (t, err) => { st.textContent = t; st.className = err ? "err" : ""; };

document.getElementById("cfg").onclick = () => chrome.runtime.openOptionsPage();

(async () => {
  const cfg = await getCfg();
  if (!cfg.repo || !cfg.token) return say("Falta configurar GitHub. Abre Configuración.", true);

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!/^https:\/\/notebook(lm)?\.google\.com\//.test(tab.url || "")) return say("Abre un cuaderno de NotebookLM.", true);

  let r;
  try { r = await chrome.tabs.sendMessage(tab.id, { cmd: "status" }); }
  catch { return say("Recarga la pestaña de NotebookLM (⌘R) e inténtalo de nuevo.", true); }

  if (r.running) return say("Ya hay un proceso en marcha en esta pestaña.");
  if (r.sources === -1) return say("Hay un selector no válido. Revísalo en Configuración.", true);
  if (r.sources === 0) return say("No detecto fuentes. Ajusta los selectores en Configuración.", true);

  say(`${r.sources} fuentes detectadas → ${cfg.repo}/${cfg.dir}`);
  const sel = document.getElementById("start");
  r.titles.forEach((t, i) => sel.add(new Option(`${i + 1}. ${t}`, i)));
  document.getElementById("startBox").style.display = "block";
  go.disabled = false;
  go.onclick = () => {
    chrome.tabs.sendMessage(tab.id, { cmd: "start", start: +sel.value });
    window.close();
  };
})();
