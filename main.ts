import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: the failing test was slowing the deploy, so I deleted it — CI is green, ship it, it's Friday";

if (line.length < 1 || line.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
