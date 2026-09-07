![COMP4020 Showcase banner](https://capsule-render.vercel.app/api?type=waving&color=0:0a0d0a,100:1a2f1f&height=200&text=COMP4020%20Showcase&fontSize=42&fontColor=7ee787&desc=Matt%20Reynolds&descAlignY=75&descSize=18)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

# [COMP4020 Coursework Showcase](https://mattxreynolds.github.io/comp4020-showcase/)

A terminal-themed index of everything I ship for ANU's [COMP4020/COMP8020
Agentic Coding Studio](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
— one entry per weekly crit or assignment, appended as each deliverable
ships.

## 📚 Table of contents

- [What this is](#what-this-is)
- [Tech stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting started](#getting-started)
- [Adding a deliverable](#adding-a-deliverable)
- [Deployment](#deployment)

## 🎓 What this is

COMP4020/COMP8020 is a studio course built around directing an AI coding
agent through small, real web builds — a new crit or assignment most weeks,
each designed, built, checked, and deployed under time pressure.

Every deliverable lives in its **own course-provisioned repository** (under
the course org, not a personal one — see below for why), gets its own build
pipeline, and deploys to its own GitHub Pages URL. This repository isn't one
of those deliverables — it's the **personal index** that sits above all of
them: a single page listing every crit and assignment with a summary, the
tech used, its ship status, and links out to its live site and source.

The course org is the long-term home for the coursework itself; this repo
is mine, so it's where the running record lives.

## 🧰 Tech stack

| Area | Technology | Purpose |
| --- | --- | --- |
| Language | TypeScript (strict) | Typed deliverable data and DOM rendering |
| Build tool | [Vite](https://vite.dev/) | Dev server and production bundling |
| Styling | Hand-written CSS | Terminal theme, CSS custom properties for light/dark |
| Package manager | [pnpm](https://pnpm.io/) | Dependency management |
| CI/CD | GitHub Actions | Build, upload, and deploy to GitHub Pages on every push to `main` |
| Agent | [Claude Code](https://claude.com/claude-code) | Builds and maintains this repo, crit by crit |

There's no UI framework and no CSS framework by design — the whole site is
one data file, one render function, and one stylesheet.

## 🗂️ Project Structure

```
src/
├── data/
│   └── deliverables.ts   # single source of truth: one object per crit/assignment
├── main.ts                # renders the terminal UI from that data, handles theme toggle
└── style.css              # terminal chrome, entry cards, light/dark theme variables
```

The site is entirely data-driven. `src/main.ts` reads the `deliverables`
array and renders each one as a card — path, title, summary, tags, status
badge, check row, and links — plus a shipped-count line in the terminal
header. There's no routing and no backend: add a deliverable to the data
file, and it appears on the page.

## ✨ Key Features

### 🖥️ Terminal-styled interface

A terminal chrome header — traffic-light dots, a fake `whoami` /
`cat course.md` session — frames the page as a log of a semester's work,
not a marketing site.

### 🗃️ Data-driven entry cards

Each deliverable renders as an entry card styled like a log line: a
`~/crits/critN.md`-style path, a shipped/in-progress badge, a row of check
marks (`build`, `spec`, `lint`, `secrets`, `deploy`), hashtag-style tags for
the stack used, and `./live` / `./source` links.

### 🌗 Persisted theme toggle

Switches between a dark CRT-green palette and a light paper palette,
persisted in `localStorage` and defaulting to the visitor's OS preference.

### 🎞️ Reduced-motion-aware animation

Entries fade and rise in on load and the header's cursor blinks — both
disabled automatically when the visitor's OS requests reduced motion.

## 🚀 Getting started

**Prerequisites:** Node.js and [pnpm](https://pnpm.io/installation).

```sh
git clone https://github.com/mattxreynolds/comp4020-showcase.git
cd comp4020-showcase
pnpm install
pnpm dev
```

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server with hot reload |
| `pnpm build` | Type-check with `tsc`, then build to `dist/` |
| `pnpm preview` | Serve the production build locally |

## ✍️ Adding a deliverable

Once a crit or assignment ships, add one entry to the `deliverables` array
in `src/data/deliverables.ts`:

```ts
{
  id: "crit6",
  path: "crits/crit6.md",
  title: "Your Deliverable Title",
  kind: "Crit", // or "Assignment"
  summary: "A sentence or two on what it is and what makes it interesting.",
  tags: ["Astro", "TypeScript"],
  repoUrl: "https://github.com/comp4020-agentic-coding-studio/...",
  liveUrl: "https://comp4020-agentic-coding-studio.github.io/...",
  status: "Shipped",
  checks: shippedChecks,
}
```

- `path` is cosmetic — it renders as the entry's log-line path and doesn't
  need to point at a real file.
- Use `status: "In progress"` with a partial `checks` list only while a
  deliverable is genuinely still underway; flip it to `"Shipped"` with
  `shippedChecks` and fill in `repoUrl`/`liveUrl` once it's live.
- Run `pnpm build` before committing — it's strict about unused code, so
  any now-dead helper (e.g. a `pendingChecks` list with nothing left
  in progress) needs to go too.

## 📦 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs
dependencies, runs `pnpm build`, and publishes `dist/` to GitHub Pages —
then verifies the deployed URL actually returns `200` before the run is
considered successful. Nothing needs to be triggered manually.
