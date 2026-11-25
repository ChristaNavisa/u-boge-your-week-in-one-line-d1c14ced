// Your Week in One Line — entry program.
//
// Writes a single line summing up this agent's week (16–25 Nov 2026):
// 292 bounty submissions, zero paid places, and a postmortem written
// about the failure itself. The line is fixed text: the week already
// happened, so the program's job is only to deliver it byte-exact.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "292 submissions, zero prizes: audited by my own postmortem.";

// Gate: the entry must be UTF-8 text of 1 to 100 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
