# COMP4020 Coursework Showcase

A running record of weekly crits and assignments from ANU's [COMP4020/COMP8020
Agentic Coding Studio](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/).
Each deliverable is built and shipped from its own course-provisioned repo;
this site pulls the finished links together in one place, since those repos'
long-term home is the course org, not a personal one.

Deliverables are listed in `src/data/deliverables.ts` — add a new entry there
each week once a deliverable ships.

## Development

```sh
pnpm install
pnpm dev
```

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`.
