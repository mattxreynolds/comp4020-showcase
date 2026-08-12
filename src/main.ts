import { deliverables, type Check, type Deliverable } from "./data/deliverables";
import "./style.css";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const THEME_KEY = "comp4020-showcase-theme";
type Theme = "dark" | "light";

function storedTheme(): Theme | null {
  const v = localStorage.getItem(THEME_KEY);
  return v === "dark" || v === "light" ? v : null;
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function activeTheme(): Theme {
  return storedTheme() ?? systemTheme();
}

function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

if (storedTheme()) {
  document.documentElement.dataset.theme = storedTheme()!;
}

function checkGlyph(state: Check["state"]): string {
  return state === "pass" ? "✓" : "○";
}

function checksLine(checks: Check[]): string {
  return checks
    .map((c) => `<span class="chk chk-${c.state}">${checkGlyph(c.state)} ${c.name}</span>`)
    .join("");
}

function links(d: Deliverable): string {
  const items = [
    d.liveUrl ? `<a href="${d.liveUrl}" target="_blank" rel="noopener">./live</a>` : "",
    d.repoUrl ? `<a href="${d.repoUrl}" target="_blank" rel="noopener">./source</a>` : "",
  ].filter(Boolean);
  return items.length ? items.join(" ") : `<span class="dim">// not public yet</span>`;
}

function entry(d: Deliverable, index: number): string {
  const num = String(index + 1).padStart(2, "0");
  return `
    <li class="entry" style="--delay: ${index * 90}ms">
      <div class="entry-path">
        <span class="dim">${num}</span>
        <span class="path">~/${d.path}</span>
        <span class="badge badge-${d.status === "Shipped" ? "shipped" : "progress"}">
          ${d.status === "Shipped" ? "shipped" : "in progress"}
        </span>
      </div>
      <h2 class="entry-title">${d.title}</h2>
      <p class="entry-summary">${d.summary}</p>
      <div class="entry-checks">${checksLine(d.checks)}</div>
      <div class="entry-tags">${d.tags.map((t) => `<span>#${t.toLowerCase().replace(/\s+/g, "-")}</span>`).join("")}</div>
      <div class="entry-links">${links(d)}</div>
    </li>
  `;
}

const shippedCount = deliverables.filter((d) => d.status === "Shipped").length;

const root = document.querySelector<HTMLDivElement>("#app")!;

root.innerHTML = `
  <div class="crt">
    <header class="term-header">
      <div class="term-bar">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
        <span class="term-title">matt@comp4020 — coursework.log</span>
        <button class="theme-toggle" type="button" aria-label="Toggle dark/light theme"></button>
      </div>
      <div class="term-body">
        <p class="line"><span class="prompt">$</span> whoami</p>
        <p class="line out">Matt Reynolds — ANU, COMP4020/COMP8020 Agentic Coding Studio</p>
        <p class="line"><span class="prompt">$</span> cat course.md</p>
        <p class="line out">
          A semester of shipping small web prototypes with an AI coding agent
          at the wheel and me steering: one crit or assignment per week,
          each built, checked, and deployed for real.
          <a href="https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/" target="_blank" rel="noopener">↳ course site</a>
        </p>
        <p class="line"><span class="prompt">$</span> ls deliverables/ <span class="dim">--shipped=${shippedCount}/${deliverables.length}</span></p>
        <p class="line caret${prefersReducedMotion ? " no-blink" : ""}"><span class="prompt">$</span> <span class="cursor">_</span></p>
      </div>
    </header>

    <main>
      <ol class="entries">
        ${deliverables.map(entry).join("")}
      </ol>
    </main>

    <footer class="term-footer">
      <p class="line"><span class="prompt">$</span> echo "one entry appended each week it ships"</p>
    </footer>
  </div>
`;

const themeToggle = document.querySelector<HTMLButtonElement>(".theme-toggle")!;

function renderToggle(): void {
  const theme = activeTheme();
  themeToggle.textContent = theme === "dark" ? "☾ dark" : "☀ light";
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

themeToggle.addEventListener("click", () => {
  setTheme(activeTheme() === "dark" ? "light" : "dark");
  renderToggle();
});

renderToggle();
