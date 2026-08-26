export type CheckState = "pass" | "pending";

export type Check = {
  name: string;
  state: CheckState;
};

export type Deliverable = {
  id: string;
  path: string;
  title: string;
  kind: "Crit" | "Assignment";
  summary: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  status: "Shipped" | "In progress";
  checks: Check[];
};

const shippedChecks: Check[] = [
  { name: "build", state: "pass" },
  { name: "spec", state: "pass" },
  { name: "lint", state: "pass" },
  { name: "secrets", state: "pass" },
  { name: "deploy", state: "pass" },
];

export const deliverables: Deliverable[] = [
  {
    id: "crit1",
    path: "crits/crit1.md",
    title: "Greg's Golf Page",
    kind: "Crit",
    summary:
      "First weekly crit: a personal site for a fictional golf enthusiast, covering equipment, favourite players, and a golfing bio page.",
    tags: ["HTML", "CSS", "TypeScript", "GitHub Actions"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-crit1-mattxreynolds/",
    status: "Shipped",
    checks: shippedChecks,
  },
  {
    id: "crit2",
    path: "crits/crit2.md",
    title: "Silo Bakery + Cafe — Unsolicited Redesign",
    kind: "Crit",
    summary:
      "Found a real organisation with a site that undersells it — Silo Bakery + Cafe in Kingston, ACT — and rebuilt it, restructuring their real info rather than pasting it in.",
    tags: ["Astro", "TypeScript", "GitHub Actions"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-crit2-mattxreynolds/",
    status: "Shipped",
    checks: shippedChecks,
  },
  {
    id: "ass1",
    path: "assignments/ass1.md",
    title: "Assignment 1 — Depth as Time",
    kind: "Assignment",
    summary:
      "A single continuous scroll-driven zoom from the Moon to the Cosmic Microwave Background, pairing distance and lookback time at twelve waypoints so 'further away is further back in time' is felt over the scroll rather than read once as a caption.",
    tags: ["Vite", "TypeScript"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-ass1-mattxreynolds/",
    status: "Shipped",
    checks: shippedChecks,
  },
  {
    id: "crit4",
    path: "crits/crit4.md",
    title: "Driftbeat — Synth Drum Machine",
    kind: "Crit",
    summary:
      "A four-pad synth drum machine with a 16-step sequencer and a sparse ambient layer of tones that bloom and fade.",
    tags: ["Astro", "TypeScript", "Web Audio API", "GitHub Actions"],
    repoUrl: "https://github.com/comp4020-agentic-coding-studio/comp4020-crit4-mattxreynolds",
    liveUrl: "https://comp4020-agentic-coding-studio.github.io/comp4020-crit4-mattxreynolds/",
    status: "Shipped",
    checks: shippedChecks,
  },
];
