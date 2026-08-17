import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
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
  assert.match(html, /\/assets\/intro-employability-skills\.mp4/);
  assert.match(html, /\/assets\/communication-explainer\.mp4/);
  assert.match(html, /\/assets\/collaboration-explainer\.mp4/);
  assert.match(html, /Can you spot an employability skill/);
  assert.match(html, /Skill Bot power/);
  assert.match(html, /My Employability Snapshot/);
  assert.match(html, /My Skills PDF/);
  assert.match(html, /\/assets\/ecc-logo\.png/);
  assert.match(html, /Download your one-page skills profile/);
  assert.match(html, /choose Save as PDF/);
  assert.match(html, /First name only/);
  assert.match(html, /does not send your answers anywhere/);
  assert.match(html, /https:\/\/forms\.cloud\.microsoft\/r\/g0w8hFceqZ/);
  assert.doesNotMatch(html, /pc-grid|pc-picker|pcClass|First name and PC class/);
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
  assert.match(assetReadme, /intro-employability-skills\.mp4/);
  assert.match(assetReadme, /communication-explainer\.mp4/);
  assert.match(assetReadme, /collaboration-explainer\.mp4/);
  assert.doesNotMatch(assetReadme, /opener-video\.mp4/);
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
  assert.match(index, /<video[\s\S]*controls/);
  assert.match(index, /video-shell/);
  assert.match(index, /opener-poster-v1\.png/);
  assert.match(index, /intro-employability-skills\.mp4/);
  assert.match(index, /communication-explainer\.mp4/);
  assert.match(index, /collaboration-explainer\.mp4/);
  assert.match(index, /intro-employability-skills\.vtt/);
  assert.match(index, /communication-explainer\.vtt/);
  assert.match(index, /collaboration-explainer\.vtt/);
  assert.doesNotMatch(index, /opener-video\.mp4/);
  assert.match(index, /career-quest-communication-v1\.png/);
  assert.match(index, /career-quest-collaboration-v1\.png/);
  assert.match(index, /data-theme-choice="city"/);
  assert.match(index, /Mission Control/);
  assert.match(index, /Skill Sorter/);
  assert.match(index, /skill-yes-button/);
  assert.match(index, /skill-scene/);
  assert.match(index, /picture-puzzle/);
  assert.match(index, /data-picture-tile="10"/);
  assert.match(index, /City Shift hidden picture/);
  assert.match(index, /sort-feedback-animation/);
  assert.match(index, /city-well-done-v1\.gif/);
  assert.doesNotMatch(index, /Skill Bot|skill-bot/);
  assert.match(index, /Employability skill/);
  assert.match(index, /Not a skill/);
  assert.doesNotMatch(index, /data-stage-panel="brief"/);
  assert.match(index, /Communication is more than talking/);
  assert.match(index, /Listening, asking, checking/);
  assert.match(index, /Explaining ideas for the person in front of you/);
  assert.match(index, /Where have you already used communication/);
  assert.match(index, /data-stage-panel="communication-build collaboration-build"/);
  assert.match(index, /Build one strong communication example/);
  assert.match(index, /saved-examples-panel/);
  assert.match(index, /another-example-button/);
  assert.match(index, /finish-skill-button/);
  assert.match(index, /Collaboration is teamwork you can explain/);
  assert.match(index, /share tasks and materials/);
  assert.match(index, /projects with friends/);
  assert.match(index, /Where have you already used collaboration/);
  assert.match(index, /My Skills PDF/);
  assert.match(index, /assets\/ecc-logo\.png/);
  assert.match(index, /Download your one-page skills profile/);
  assert.match(index, /save-pdf-button/);
  assert.match(index, /choose Save as PDF/);
  assert.match(index, /Scale 90%/);
  assert.match(index, /First name only/);
  assert.match(index, /does not ask for your PC class or surname/);
  assert.match(index, /https:\/\/forms\.cloud\.microsoft\/r\/g0w8hFceqZ/);
  assert.match(index, /Upload your snapshot in Microsoft Forms/);
  assert.match(index, /form-link-button/);
  assert.doesNotMatch(index, /pc-grid|pc-picker|snapshot-pc-class|First name and PC class/);
  assert.match(index, /Skill Quest/);
  assert.match(index, /mission-rail/);
  assert.match(index, /quest-meter-fill/);
  assert.match(index, /celebration-toast/);
  assert.match(index, /communication-experience-grid/);
  assert.match(index, /collaboration-experience-grid/);
  assert.match(index, /Keep it real/);
  assert.match(index, /clarifying-questions/);
  assert.match(index, /right-size-feedback/);
  assert.match(index, /Do not include private details/);
  assert.match(index, /Clear work/);
  assert.match(index, /does not send your answers to AI or the internet/);
  assert.doesNotMatch(index, /data-stage-panel="build"/);
  assert.match(index, /data-stage-panel="communication-build collaboration-build"/);
  assert.match(index, /Yes, build another/);
  assert.match(index, /No, move on/);
  assert.match(index, /app\.js/);
  assert.match(css, /video-player/);
  assert.match(css, /unpack-grid/);
  assert.match(css, /arcade-grid/);
  assert.match(css, /sort-card/);
  assert.match(css, /theme-picker/);
  assert.match(css, /skill-sorter-scene/);
  assert.match(css, /picture-puzzle/);
  assert.match(css, /picture-tile/);
  assert.match(css, /city-shift-hidden-picture-v1\.png/);
  assert.match(css, /sort-feedback-animation/);
  assert.match(css, /feedback-flyout/);
  assert.match(css, /compact-video-shell/);
  assert.match(css, /clarifying-panel/);
  assert.match(css, /saved-examples-panel/);
  assert.match(css, /builder-decision/);
  assert.match(css, /snapshot-example-list/);
  assert.match(css, /pdf-action-panel/);
  assert.match(css, /snapshot-logo/);
  assert.match(css, /@page/);
  assert.match(css, /A4 portrait/);
  assert.match(css, /print-color-adjust/);
  assert.match(css, /handoff-panel/);
  assert.match(css, /form-link-button/);
  assert.match(css, /right-size-note/);
  assert.match(css, /clear-work-button/);
  assert.match(css, /privacy-note/);
  assert.match(css, /mission-nav/);
  assert.match(css, /grid-auto-flow: column/);
  assert.match(css, /quest-meter/);
  assert.match(css, /mission-token/);
  assert.match(css, /unpack-card:not\(\.media-card\)::before/);
  assert.match(css, /card-fly-in/);
  assert.match(css, /card-sort-left/);
  assert.match(css, /card-sort-right/);
  assert.match(css, /sort-correct/);
  assert.match(css, /sort-wrong/);
  assert.match(css, /feedback-pop/);
  assert.match(css, /toast-pop/);
  assert.match(css, /celebrate-screen/);
  assert.match(css, /screen-sparkle/);
  assert.match(css, /confetti-pop/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media print/);
  assert.match(js, /year-9-job-skills-state/);
  assert.match(js, /lessonFocusSkillIds/);
  assert.match(js, /communication-build/);
  assert.match(js, /collaboration-build/);
  assert.match(js, /drafts/);
  assert.match(js, /examples/);
  assert.match(js, /commitDraft/);
  assert.match(js, /openPrintDialog/);
  assert.match(js, /save-pdf-button/);
  assert.match(js, /skillCheckCards/);
  assert.match(js, /answerSkillCheckCard/);
  assert.match(js, /showSortPulse/);
  assert.match(js, /feedbackAssets/);
  assert.match(js, /showFeedbackAnimation/);
  assert.match(js, /revealedTileIds/);
  assert.match(js, /data-picture-tile/);
  assert.match(js, /Replay to reveal missing tiles/);
  assert.match(js, /stageRailLabels/);
  assert.match(js, /themeChoices/);
  assert.match(js, /renderTheme/);
  assert.match(js, /quest-meter-fill/);
  assert.match(js, /mission-token/);
  assert.match(js, /celebrate-screen/);
  assert.match(js, /hasMeaningfulWork/);
  assert.match(js, /beforeunload/);
  assert.match(js, /Open mission/);
  assert.doesNotMatch(js, /Locked by progress|Skill Bot/);
  assert.match(js, /Happy/);
  assert.match(js, /Barista course/);
  assert.match(js, /Certificate II/);
  assert.match(js, /hydrateVideoSlots/);
  assert.doesNotMatch(js, /pcClasses|pcClass|9 Teresa|snapshot-pc-class|pc-grid/);
  assert.match(js, /firstNameOnly/);
  assert.match(js, /communicationMoments/);
  assert.match(js, /collaborationMoments/);
  assert.match(js, /In a group assignment/);
  assert.match(js, /At sport, dance, or training/);
  assert.match(js, /Helping at home or with a younger person/);
  assert.match(js, /Planning something with friends/);
  assert.match(js, /In a casual, job-style, or helping task/);
  assert.match(js, /clarifyingPrompts/);
  assert.match(js, /small but real example/);
  assert.match(js, /resetWork/);
  assert.match(js, /celebrationCopy/);
  assert.match(js, /maybeCelebrate/);
  assert.match(assetReadme, /intro-employability-skills\.mp4/);
  assert.match(assetReadme, /communication-explainer\.mp4/);
  assert.match(assetReadme, /collaboration-explainer\.mp4/);
  assert.match(assetReadme, /career-quest-sorter-arena-v1\.png/);
  assert.match(assetReadme, /city-shift-hidden-picture-v1\.png/);
  assert.match(assetReadme, /career-quest-communication-v1\.png/);
  assert.match(assetReadme, /career-quest-collaboration-v1\.png/);
  assert.match(assetReadme, /city-well-done-v1\.gif/);
  assert.match(assetReadme, /city-try-again-v1\.gif/);
  assert.doesNotMatch(assetReadme, /opener-video\.mp4/);
  assert.match(assetReadme, /opener-poster-v1\.png/);
  assert.match(storyboard, /Collaboration \+ Communication/);
  assert.match(storyboard, /Three short explainer videos/);
  assert.match(storyboard, /Skill Sorter Check/);

  const videoNames = [
    "intro-employability-skills",
    "communication-explainer",
    "collaboration-explainer",
  ];

  for (const videoName of videoNames) {
    const [docsVideo, publicVideo, docsCaptions, publicCaptions] = await Promise.all([
      stat(new URL(`../docs/assets/${videoName}.mp4`, import.meta.url)),
      stat(new URL(`../public/assets/${videoName}.mp4`, import.meta.url)),
      stat(new URL(`../docs/assets/${videoName}.vtt`, import.meta.url)),
      stat(new URL(`../public/assets/${videoName}.vtt`, import.meta.url)),
    ]);

    assert.ok(docsVideo.size > 300_000, `${videoName}.mp4 should contain rendered video`);
    assert.ok(docsCaptions.size > 200, `${videoName}.vtt should contain captions`);
    assert.equal(docsVideo.size, publicVideo.size);
    assert.equal(docsCaptions.size, publicCaptions.size);
  }

  const questImages = [
    "career-quest-sorter-arena-v1",
    "city-shift-hidden-picture-v1",
    "career-quest-communication-v1",
    "career-quest-collaboration-v1",
  ];

  for (const imageName of questImages) {
    const [docsImage, publicImage] = await Promise.all([
      stat(new URL(`../docs/assets/quest/${imageName}.png`, import.meta.url)),
      stat(new URL(`../public/assets/quest/${imageName}.png`, import.meta.url)),
    ]);

    assert.ok(docsImage.size > 500_000, `${imageName}.png should contain a generated scene image`);
    assert.equal(docsImage.size, publicImage.size);
  }

  const feedbackGifs = [
    "city-well-done-v1",
    "city-try-again-v1",
  ];

  for (const gifName of feedbackGifs) {
    const [docsGif, publicGif] = await Promise.all([
      stat(new URL(`../docs/assets/feedback/${gifName}.gif`, import.meta.url)),
      stat(new URL(`../public/assets/feedback/${gifName}.gif`, import.meta.url)),
    ]);

    assert.ok(docsGif.size > 100_000, `${gifName}.gif should contain rendered animation frames`);
    assert.equal(docsGif.size, publicGif.size);
  }

  const [docsLogo, publicLogo] = await Promise.all([
    stat(new URL("../docs/assets/ecc-logo.png", import.meta.url)),
    stat(new URL("../public/assets/ecc-logo.png", import.meta.url)),
  ]);
  assert.ok(docsLogo.size > 10_000, "ECC logo should be available in docs assets");
  assert.equal(docsLogo.size, publicLogo.size);
});
