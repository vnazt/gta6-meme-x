// main.ts — hand-in for gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is a post on X. This program's whole job is to place
// POST.json — the file that names the post's URL — into the output
// directory, byte for byte, so the house can read the post back from X
// and build the dossier that gets judged. Nothing else is produced.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));

console.log("handed in POST.json ->", join(outDir, "POST.json"));
