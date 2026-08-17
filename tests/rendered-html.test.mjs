import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Year 9 Job Skills app shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Year 9 Job Skills<\/title>/i);
  assert.match(html, /Year 9 enterprise skills/);
  assert.match(html, /https:\/\/emmanuelcc-ict\.github\.io\/Year-9-Job-Skills\//);
  assert.match(html, /Job speak translator/);
  assert.match(html, /My Employability Snapshot/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("starter preview files are no longer part of the product", async () => {
  const previewRoot = new URL("../app/_sites-preview/", import.meta.url);
  const [previewFiles, page, layout, packageJson, assetReadme] = await Promise.all([
    readdir(previewRoot),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/assets/README.md", import.meta.url), "utf8"),
  ]);

  assert.deepEqual(previewFiles, []);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|react-loading-skeleton/);
  assert.match(layout, /Year 9 Job Skills/);
  assert.doesNotMatch(packageJson, /site-creator-vinext-starter|react-loading-skeleton/);
  assert.match(assetReadme, /opener-video\.mp4/);
});

test("GitHub Pages version is present in docs", async () => {
  const [index, css, js, assetReadme, storyboard] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../docs/app.js", import.meta.url), "utf8"),
    readFile(new URL("../docs/assets/README.md", import.meta.url), "utf8"),
    readFile(new URL("../docs/you-already-have-job-skills-storyboard.md", import.meta.url), "utf8"),
  ]);

  assert.match(index, /<title>Year 9 Job Skills<\/title>/);
  assert.match(index, /https:\/\/emmanuelcc-ict\.github\.io\/Year-9-Job-Skills\//);
  assert.match(index, /opener-poster-v1\.png/);
  assert.match(index, /collaboration-hero-v1\.png/);
  assert.match(index, /communication-hero-v1\.png/);
  assert.match(index, /Today's focus/);
  assert.match(index, /app\.js/);
  assert.match(css, /visual-grid/);
  assert.match(css, /@media print/);
  assert.match(js, /year-9-job-skills-state/);
  assert.match(js, /lessonFocusSkillIds/);
  assert.match(assetReadme, /opener-video\.mp4/);
  assert.match(assetReadme, /opener-poster-v1\.png/);
  assert.match(storyboard, /Collaboration \+ Communication/);
});
