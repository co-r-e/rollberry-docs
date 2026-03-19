import fs from "fs";
import path from "path";
import { buildSearchEntries } from "../src/lib/docs/search-index";

const OUT_DIR = path.join(process.cwd(), "public", "docs");
const OUT_PATH = path.join(OUT_DIR, "search-index.json");

function main() {
  console.log("Generating search index...");

  const entries = buildSearchEntries();

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(entries, null, 2));
  console.log(`Search index generated: ${entries.length} entries → ${OUT_PATH}`);
}

main();
