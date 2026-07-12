// Prerenders the app to static HTML after the client build, so crawlers
// that don't execute JavaScript still see the full page content.
// React hydrates over this markup on the client (see src/main.tsx).
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url)) + "/..";
const distDir = path.join(root, "dist");
const ssrOutDir = path.join(root, "dist-ssr");

execSync(
  "npx vite build --ssr src/entry-server.tsx --outDir dist-ssr",
  { cwd: root, stdio: "inherit" }
);

const entryPath = path.join(ssrOutDir, "entry-server.js");
const { render } = await import(`file://${entryPath}`);
const appHtml = render();

const indexPath = path.join(distDir, "index.html");
const html = readFileSync(indexPath, "utf-8").replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);
writeFileSync(indexPath, html);

rmSync(ssrOutDir, { recursive: true, force: true });

console.log("Prerender complete: dist/index.html now has full content.");
