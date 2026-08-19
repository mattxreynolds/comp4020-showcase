# CLAUDE.md

This is Matt's personal showcase site for ANU's COMP4020/COMP8020 Agentic
Coding Studio — a terminal/build-log themed page that links out to each
week's crit or assignment, which ship from their own course-provisioned
repos (see README.md for why).

## Working here

- The only content file that normally changes is `src/data/deliverables.ts`
  — one entry per crit/assignment. Add a new entry when a deliverable ships;
  flip `status` from `"In progress"` to `"Shipped"` and fill in `repoUrl`/
  `liveUrl`/`checks` once it's live. `shippedChecks` is the standard set for
  a shipped entry; only reach for a partial/pending check list if a
  deliverable is genuinely still in progress.
- Rendering lives in `src/main.ts` (plain DOM string templating, no
  framework) and `src/style.css`. Change these only if the showcase's
  layout/behaviour itself needs to change, not to add a deliverable.
- `path` on a `Deliverable` is cosmetic (rendered like `~/crits/crit1.md`)
  — it doesn't need to point at a real file.

## Before committing

- `pnpm build` (runs `tsc` then `vite build`) must pass — it's strict on
  unused locals/params, so remove now-dead helpers (e.g. don't leave
  `pendingChecks` defined if nothing has `status: "In progress"` anymore).
- If you claim a deliverable's `liveUrl` works, actually check it returns
  200 first.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to
GitHub Pages automatically. Nothing to trigger manually.
