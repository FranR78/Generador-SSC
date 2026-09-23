importScripts("defaults.js");

chrome.runtime.onMessage.addListener((m, _, reply) => {
  if (m.cmd !== "upload") return;
  upload(m).then(reply).catch(e => reply({ ok: false, status: e.message }));
  return true;
});

// dir opcional: por defecto la de las notas; el informe va a la suya
async function upload({ name, md, dir: d, ext = "md" }) {
  const c = await getCfg();
  const dir = (d ?? c.dir).replace(/^\/+|\/+$/g, "");
  const path = [dir, `${name}.${ext}`].filter(Boolean).join("/");
  const url = `https://api.github.com/repos/${c.repo}/contents/${encodeURI(path)}`;
  const h = { Authorization: `Bearer ${c.token}`, Accept: "application/vnd.github+json" };

  // Si ya existe, hace falta su sha para sobrescribirlo
  let sha;
  const g = await fetch(url, { headers: h });
  if (g.ok) sha = (await g.json()).sha;

  let bin = "";
  new TextEncoder().encode(md).forEach(b => bin += String.fromCharCode(b));
  const r = await fetch(url, {
    method: "PUT",
    headers: h,
    body: JSON.stringify({ message: `NotebookLM: ${name}`, content: btoa(bin), ...(sha && { sha }) })
  });
  return { ok: r.ok, status: r.status, updated: !!sha };
}
