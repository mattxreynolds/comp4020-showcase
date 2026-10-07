import { captures, type CaptureItem } from "./data/captures";
import { deliverables } from "./data/deliverables";
import { mountThemeToggle } from "./theme";
import "./style.css";

const base = import.meta.env.BASE_URL;

function media(id: string, item: CaptureItem): string {
  const src = `${base}captures/${id}/${item.file}`;
  const poster = item.poster ? ` poster="${base}captures/${id}/${item.poster}"` : "";
  const el =
    item.type === "video"
      ? `<video src="${src}"${poster} aria-label="${item.alt}" controls muted loop playsinline preload="metadata"></video>`
      : `<img src="${src}" alt="${item.alt}" loading="lazy" />`;
  return `<figure class="capture">${el}<figcaption>${item.caption}</figcaption></figure>`;
}

const root = document.querySelector<HTMLDivElement>("#app")!;
const id = root.dataset.id ?? "";
const capture = captures[id];
const deliverable = deliverables.find((d) => d.id === id);

if (!capture || !deliverable) {
  throw new Error(`No capture data for "${id}"`);
}

document.title = `${deliverable.title} — captures — COMP4020 Coursework`;

root.innerHTML = `
  <div class="crt">
    <header class="term-header">
      <div class="term-bar">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
        <span class="term-title">matt@comp4020 — ${deliverable.path}</span>
        <button class="theme-toggle" type="button" aria-label="Toggle dark/light theme"></button>
      </div>
      <div class="term-body">
        <p class="line"><span class="prompt">$</span> cat ${deliverable.path} <span class="dim">--captured-at=${capture.tag}</span></p>
        <p class="line out">${capture.intro}</p>
        <p class="line out">
          <a href="${base}">↳ back to deliverables</a>
          ${deliverable.repoUrl ? `<a href="${deliverable.repoUrl}" target="_blank" rel="noopener" aria-label="Source code for ${deliverable.title} at ${capture.tag}">↳ source @ ${capture.tag}</a>` : ""}
        </p>
      </div>
    </header>

    <main>
      <h1 class="capture-title">${deliverable.title}</h1>
      ${
        capture.items.length
          ? `<div class="captures">${capture.items.map((i) => media(id, i)).join("")}</div>`
          : `<p class="dim">// captures coming soon</p>`
      }
    </main>

    <footer class="term-footer">
      <p class="line"><span class="prompt">$</span> cd .. <a href="${base}">↳ deliverables</a></p>
    </footer>
  </div>
`;

mountThemeToggle(document.querySelector<HTMLButtonElement>(".theme-toggle")!);
