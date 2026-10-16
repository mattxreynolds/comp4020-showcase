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

export function mountThemeToggle(button: HTMLButtonElement): void {
  const render = (): void => {
    const theme = activeTheme();
    button.textContent = theme === "dark" ? "☾ dark" : "☀ light";
    button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  };

  button.addEventListener("click", () => {
    setTheme(activeTheme() === "dark" ? "light" : "dark");
    render();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", render);

  render();
}
