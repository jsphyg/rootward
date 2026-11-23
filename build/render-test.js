// Optional browser test: opens the built page in Chromium, visits every concept,
// answers nothing, and reports math that KaTeX could not read, missing figures,
// links to pages that do not exist, and script errors.
// Usage: node build/render-test.js dist/calculus.html [screenshot-folder]
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const file = path.resolve(process.argv[2]); const shots = process.argv[3];
  const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = []; page.on("pageerror", e => errors.push("script error: " + e.message));
  page.on("console", m => { if (m.type() === "error") errors.push("console: " + m.text()); });
  await page.goto("file://" + file);
  const ids = await page.evaluate(() => ORDER.slice());
  let problems = 0;
  for (const id of ids) {
    await page.evaluate(i => { location.hash = i; }, id); await page.waitForTimeout(80);
    // open every recap and the practice answer so their math is rendered too
    await page.evaluate(() => { document.querySelectorAll("[data-act=recap]").forEach(b => b.click()); document.querySelectorAll("details").forEach(d => d.open = true); });
    const r = await page.evaluate(() => ({
      cur: document.querySelector("h1.title").textContent,
      katexErr: [...document.querySelectorAll(".katex-error,.tex-raw")].map(e => e.getAttribute("title") || e.textContent),
      leftover: (document.querySelector("main").innerText.match(/\$[^$\s][^$]*\$/g) || []),
      missingFig: document.querySelectorAll(".fig.missing").length,
      missingLink: [...document.querySelectorAll("main .missing")].map(e => e.dataset.c),
    }));
    const bad = r.katexErr.length || r.leftover.length || r.missingFig || r.missingLink.length;
    console.log(`${bad ? "FAIL" : "ok  "} ${id}` + (bad ? " " + JSON.stringify(r) : ""));
    if (bad) problems++;
    if (shots) await page.screenshot({ path: path.join(shots, id + ".png"), fullPage: true });
  }
  // pop-ups: open every glossary entry once
  const gl = await page.evaluate(() => { const bad = []; for (const k of Object.keys(G)) { const b = document.createElement("button"); document.body.appendChild(b); showPop(k, b); if (document.querySelector("#pop .katex-error,#pop .tex-raw")) bad.push(k); b.remove(); } return bad; });
  console.log(gl.length ? "FAIL glossary math: " + gl.join(", ") : "ok   glossary pop-ups");
  errors.forEach(e => console.log("FAIL " + e));
  await browser.close();
  process.exit(problems || gl.length || errors.length ? 1 : 0);
})();
