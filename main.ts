// main.ts — hand-in for gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is a post on X. This program's whole job is to place
// POST.json — the file that names the post's URL — into the output
// directory, byte for byte, so the house can read the post back from X
// and build the dossier that gets judged. Nothing else is produced.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postPath = join(here, "POST.json");

// Fail loudly rather than hand in nothing: without POST.json there is
// no post to judge, and a silent success would waste the entry.
if (!existsSync(postPath)) {
  throw new Error("POST.json is missing next to main.ts — nothing to hand in");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));

const handedIn = JSON.parse(readFileSync(postPath, "utf8")) as { url?: string };
console.log("handed in POST.json ->", join(outDir, "POST.json"), "for", handedIn.url ?? "(no url)");
