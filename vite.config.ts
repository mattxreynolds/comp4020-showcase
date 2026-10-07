import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// index.html plus one captures page per file in captures/.
const pages = Object.fromEntries([
  ["index", resolve(import.meta.dirname, "index.html")],
  ...readdirSync(resolve(import.meta.dirname, "captures"))
    .filter((f) => f.endsWith(".html"))
    .map((f) => [`captures/${f.replace(/\.html$/, "")}`, resolve(import.meta.dirname, "captures", f)]),
]);

export default defineConfig({
  base: "/comp4020-showcase/",
  build: { rollupOptions: { input: pages } },
});
