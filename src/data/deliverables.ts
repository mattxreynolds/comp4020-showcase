export type Deliverable = {
  id: string;
  title: string;
  kind: "Crit" | "Assignment";
  summary: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  status: "Shipped" | "In progress";
};

export const deliverables: Deliverable[] = [
  {
    id: "crit1",
    title: "Greg's Golf Page",
    kind: "Crit",
    summary:
      "First weekly crit: a personal site for a fictional golf enthusiast, covering equipment, favourite players, and a golfing bio page.",
    tags: ["HTML", "CSS", "TypeScript", "GitHub Actions"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-crit1-mattxreynolds/",
    status: "Shipped",
  },
  {
    id: "crit2",
    title: "Silo Bakery + Cafe — Unsolicited Redesign",
    kind: "Crit",
    summary:
      "Found a real organisation with a site that undersells it — Silo Bakery + Cafe in Kingston, ACT — and rebuilt it, restructuring their real info rather than pasting it in.",
    tags: ["Astro", "TypeScript", "GitHub Actions"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-crit2-mattxreynolds/",
    status: "Shipped",
  },
  {
    id: "ass1",
    title: "Assignment 1",
    kind: "Assignment",
    summary: "In progress — repo is still private while the build is underway.",
    tags: ["Vite", "TypeScript"],
    status: "In progress",
  },
];
