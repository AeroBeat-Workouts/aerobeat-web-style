// @ts-check

import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const server = createServer(async (request, response) => {
  try { const pathname = new URL(request.url ?? "/", "http://127.0.0.1").pathname; const file = normalize(join(root, pathname === "/" ? ".testbed/demo/index.html" : pathname.slice(1))); if (!file.startsWith(root)) { response.writeHead(403).end(); return; } const data = await readFile(file); response.writeHead(200, { "content-type": extname(file) === ".css" ? "text/css" : extname(file) === ".js" ? "text/javascript" : "text/html", "cache-control":"no-store" }); response.end(data); }
  catch { response.writeHead(404).end(); }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address(); if (!address || typeof address === "string") throw new Error("Style browser test server failed");
const browser = await chromium.launch({ headless:true });
try {
  const page = await browser.newPage({ viewport:{ width:390,height:720 } }); const noise=[];
  page.on("console", (message) => { if (message.type() === "warning" || message.type() === "error") noise.push(`${message.type()}: ${message.text()}`); }); page.on("pageerror", (error) => noise.push(`pageerror: ${error.message}`));
  await page.goto(`http://127.0.0.1:${address.port}/.testbed/demo/index.html`, { waitUntil:"networkidle" }); await page.waitForFunction(() => globalThis.__AERO_STYLE_TEST__?.ready === true);
  const result = await page.evaluate(() => ({ values:globalThis.__AERO_STYLE_TEST__.values, roles:[...document.querySelectorAll(".role")].map((element) => getComputedStyle(element).backgroundImage || getComputedStyle(element).backgroundColor) }));
  assert.equal(result.values.left, "#2693ff"); assert.equal(result.values.guard, "#9a67ea"); assert.equal(result.values.obstacleHatchOpacity, "0.72"); assert.equal(result.roles.length, 6); assert.match(result.roles[3], /repeating-linear-gradient/iu); assert.deepEqual(noise, []);
  console.log(`Chromium gameplay visual-token validation passed at http://127.0.0.1:${address.port}/.testbed/demo/index.html`);
} finally { await browser.close(); await new Promise((resolve) => server.close(resolve)); }
