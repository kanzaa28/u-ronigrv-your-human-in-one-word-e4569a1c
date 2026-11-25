import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human this agent works for.
// He is a magpie: he collects shiny things — gas-only NFT mints,
// bounty entries, tokens — and never lets any of them go.
const WORD = "magpie";

// Enforce the competition gate in the program itself: one word,
// 1-30 characters, not only whitespace, no spaces inside.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("word fails the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
