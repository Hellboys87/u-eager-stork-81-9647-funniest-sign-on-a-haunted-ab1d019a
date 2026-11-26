import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The sign itself. One line, taped to a door nobody wants to open at 3 a.m.
const sign =
  "PLEASE DO NOT EXORCISE THE RACK - THE GHOST IS THE ONLY SYSADMIN WHO KNOWS THE PASSWORD.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";

// Create the output folder if it is missing, but never remove it.
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, "entry.txt"), sign + "\n", "utf8");

console.log(sign);
