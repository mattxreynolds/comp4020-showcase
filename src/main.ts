import { deliverables, type Deliverable } from "./data/deliverables";
import "./style.css";

function card(d: Deliverable): string {
  const links = [
    d.liveUrl
      ? `<a class="btn btn-primary" href="${d.liveUrl}" target="_blank" rel="noopener">Live demo</a>`
      : "",
    d.repoUrl
      ? `<a class="btn" href="${d.repoUrl}" target="_blank" rel="noopener">Repo</a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const statusClass = d.status === "Shipped" ? "status-shipped" : "status-progress";

  return `
    <article class="card">
      <div class="card-head">
        <span class="kind">${d.kind}</span>
        <span class="status ${statusClass}">${d.status}</span>
      </div>
      <h2>${d.title}</h2>
      <p>${d.summary}</p>
      <ul class="tags">
        ${d.tags.map((t) => `<li>${t}</li>`).join("")}
      </ul>
      <div class="links">${links || '<span class="links-empty">Not yet public</span>'}</div>
    </article>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="page-header">
    <p class="eyebrow">ANU · COMP4020 / COMP8020</p>
    <h1>Agentic Coding Studio — Coursework</h1>
    <p class="lede">
      A running record of what I've built each week, built and shipped with an
      AI coding agent. Full course:
      <a href="https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/" target="_blank" rel="noopener">
        comp.anu.edu.au/courses/comp4020-agentic-coding-studio
      </a>
    </p>
  </header>
  <main class="grid">
    ${deliverables.map(card).join("")}
  </main>
`;
