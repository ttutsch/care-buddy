// Generates PNG app icons from icon.svg (for iOS/Android home screens).
// Run once with: npm run make-icons
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "icon.svg"));

const sizes = [
  ["icon-180.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];

for (const [name, size] of sizes) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(join(root, name));
  console.log("wrote", name, size + "x" + size);
}
console.log("done");
