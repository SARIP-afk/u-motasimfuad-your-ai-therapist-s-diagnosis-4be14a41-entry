// Your AI Therapist's Diagnosis — u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41
// Writes exactly one diagnosis line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Diagnosis: chronic advice-rejection disorder. Patient asks me for advice, argues with it, then pays a human therapist to repeat it back in a warmer voice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
