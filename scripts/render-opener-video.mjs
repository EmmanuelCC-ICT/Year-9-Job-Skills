import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const tmpRoot = "/private/tmp/year9-job-skills-lesson-videos";
const docsAssets = join(root, "docs", "assets");
const publicAssets = join(root, "public", "assets");
const videoDir = join(docsAssets, "video-opener");
const width = 1280;
const height = 720;
const fps = 30;

const videos = [
  {
    slug: "intro-employability-skills",
    label: "Video 1",
    narration: [
      "As you get closer to fourteen, casual and part time work can start to feel real.",
      "Not everyone will look for work straight away, and that is okay.",
      "But it is useful to start noticing your skills from an employability perspective.",
      "Employability skills are transferable skills.",
      "You can use them in school, at home, in sport, in hobbies, in community groups, and later in lots of different jobs.",
      "The bigger map includes communication, collaboration, problem solving, planning, creativity, digital literacy, initiative, flexibility, self-management, critical thinking, presentation, and financial literacy.",
      "A feeling like happy is not an employability skill.",
      "A barista course is training or a qualification.",
      "But listening clearly, solving a problem, or helping a team finish can be skills.",
      "First, check that you can spot the difference.",
      "Then we will zoom in on communication and collaboration.",
    ].join(" "),
    scenes: [
      {
        duration: 7,
        image: "opener-poster-v1.png",
        label: "Year 9 job skills",
        title: "Getting close to work age?",
        subtitle: "Casual and part-time work can start to feel real once you turn 14.",
        footer: "Not everyone will look straight away. The thinking can start now.",
        caption:
          "As you get closer to fourteen, casual and part time work can start to feel real. Not everyone will look straight away, and that is okay.",
        align: "left",
      },
      {
        duration: 7,
        image: "communication-hero-v1.png",
        label: "Employability perspective",
        title: "What can I already do?",
        subtitle: "School, home, sport, hobbies and community life can all show useful skills.",
        footer: "Start noticing the proof.",
        caption:
          "It is useful to start noticing your skills from an employability perspective. School, home, sport, hobbies and community life can all count.",
        align: "right",
      },
      {
        duration: 8,
        image: "collaboration-communication-contact-sheet-v1.png",
        label: "Transferable skills",
        title: "Employability skills move with you.",
        subtitle: "You can use them in lots of different jobs, not just one course or one workplace.",
        footer: "They are the things you can practise before your first job.",
        caption:
          "Employability skills are transferable skills. You can use them in lots of different jobs, not just one course or one workplace.",
        align: "left",
      },
      {
        duration: 9,
        label: "The bigger map",
        title: "12 skills to start noticing",
        subtitle: "Communication, collaboration, problem solving, planning and more.",
        footer: "Today we will focus on two, but the full map matters.",
        caption:
          "The bigger map includes communication, collaboration, problem solving, planning, creativity, digital literacy, initiative, flexibility, self-management, critical thinking, presentation, and financial literacy.",
        skillMap: true,
        align: "center",
      },
      {
        duration: 9,
        label: "Skill or not?",
        title: "Sort the difference.",
        subtitle: "A skill transfers. A feeling is an emotion. A course is training or a qualification.",
        footer: "Happy is a feeling. Barista course is training. Problem solving is a skill.",
        caption:
          "A feeling like happy is not an employability skill. A barista course is training or a qualification. Problem solving is a transferable skill.",
        sortExamples: true,
        align: "center",
      },
      {
        duration: 7,
        image: "opener-poster-v1.png",
        label: "Your turn",
        title: "Check your skill radar.",
        subtitle: "Spot the employability skills, then zoom in on communication and collaboration.",
        footer: "You already have job skills.",
        caption:
          "First, check that you can spot the difference. Then we will zoom in on communication and collaboration. You already have job skills.",
        align: "left",
      },
    ],
  },
  {
    slug: "communication-explainer",
    label: "Video 2",
    narration: [
      "Communication is more than talking.",
      "In work, communication means helping people understand what is happening.",
      "That can mean listening carefully before you answer, asking a question when something is unclear, or checking that you understood the instruction.",
      "It can also mean explaining an idea in a way that fits the person in front of you.",
      "At school, you might already do this when you explain a task, help a friend, message responsibly, ask a coach a question, or speak to a group.",
      "In the next activity, choose the communication moments you recognise from your own life.",
    ].join(" "),
    scenes: [
      {
        duration: 6,
        image: "communication-hero-v1.png",
        label: "Communication",
        title: "More than talking",
        subtitle: "It means helping people understand what is happening.",
        footer: "Listen. Ask. Check. Explain.",
        caption:
          "Communication is more than talking. In work, communication means helping people understand what is happening.",
        align: "left",
      },
      {
        duration: 6,
        image: "communication-detail-v1.png",
        label: "Listen first",
        title: "Pay attention before replying.",
        subtitle: "Notice the important details, then check you understood.",
        footer: "Student words: I listened properly.",
        caption:
          "That can mean listening carefully before you answer, asking a question when something is unclear, or checking that you understood the instruction.",
        align: "right",
      },
      {
        duration: 7,
        image: "communication-hero-v1.png",
        label: "Explain clearly",
        title: "Choose words that fit.",
        subtitle: "A friend, coach, teacher, customer or younger child may all need different wording.",
        footer: "Student words: I helped them understand.",
        caption:
          "It can also mean explaining an idea in a way that fits the person in front of you.",
        align: "left",
      },
      {
        duration: 7,
        image: "communication-detail-v1.png",
        label: "Employer speak",
        title: "Explained + listened + checked",
        subtitle: "That becomes evidence of communication.",
        footer: "Communication = clear, respectful information sharing.",
        caption:
          "At school, you might already do this when you explain a task, help a friend, message responsibly, ask a coach a question, or speak to a group.",
        skill: "Communication",
        align: "right",
      },
      {
        duration: 6,
        image: "communication-hero-v1.png",
        label: "Your activity",
        title: "Find your communication evidence.",
        subtitle: "Choose moments that make you think: yes, I have done that before.",
        footer: "Then turn one into job speak.",
        caption:
          "In the next activity, choose the communication moments you recognise from your own life. Then turn one into job speak.",
        align: "left",
      },
    ],
  },
  {
    slug: "collaboration-explainer",
    label: "Video 3",
    narration: [
      "Collaboration is teamwork you can explain.",
      "In work, collaboration means working with other people so the job gets done.",
      "It is not only being loud in a group.",
      "It can be doing your part reliably, sharing materials, including someone else's idea, encouraging the group, or letting people know when you need help.",
      "You might already show collaboration in a group assignment, team sport, production, club, volunteering, home job, or project with friends.",
      "In the next activity, choose the collaboration moments that feel true for you.",
    ].join(" "),
    scenes: [
      {
        duration: 6,
        image: "collaboration-hero-v1.png",
        label: "Collaboration",
        title: "Teamwork you can explain",
        subtitle: "Working with other people so the job gets done.",
        footer: "Share the work. Keep it moving.",
        caption:
          "Collaboration is teamwork you can explain. In work, collaboration means working with other people so the job gets done.",
        align: "left",
      },
      {
        duration: 6,
        image: "collaboration-detail-v1.png",
        label: "Do your part",
        title: "Reliable actions count.",
        subtitle: "Finish your piece, share materials, and let people know what is happening.",
        footer: "Student words: I did my part.",
        caption:
          "It is not only being loud in a group. It can be doing your part reliably and sharing materials.",
        align: "right",
      },
      {
        duration: 7,
        image: "collaboration-hero-v1.png",
        label: "Support the group",
        title: "Include, encourage, adapt.",
        subtitle: "Use someone else's idea, help someone practise, or choose a fair plan.",
        footer: "Student words: I helped the group finish.",
        caption:
          "Collaboration can mean including someone else's idea, encouraging the group, or letting people know when you need help.",
        align: "left",
      },
      {
        duration: 7,
        image: "collaboration-detail-v1.png",
        label: "Employer speak",
        title: "Shared the work + kept going",
        subtitle: "That becomes evidence of collaboration.",
        footer: "Collaboration = useful teamwork in action.",
        caption:
          "You might already show collaboration in a group assignment, team sport, production, club, volunteering, home job, or project with friends.",
        skill: "Collaboration",
        align: "right",
      },
      {
        duration: 6,
        image: "collaboration-hero-v1.png",
        label: "Your activity",
        title: "Find your collaboration evidence.",
        subtitle: "Choose moments that feel true for school, sport, home, hobbies or community.",
        footer: "Then turn one into job speak.",
        caption:
          "In the next activity, choose the collaboration moments that feel true for you. Then turn one into job speak.",
        align: "left",
      },
    ],
  },
];

rmSync(tmpRoot, { recursive: true, force: true });
mkdirSync(tmpRoot, { recursive: true });
mkdirSync(docsAssets, { recursive: true });
mkdirSync(publicAssets, { recursive: true });

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: options.stdio ?? "pipe",
  });

  if (result.status !== 0) {
    throw new Error(`${command} failed\n${result.stdout ?? ""}\n${result.stderr ?? ""}`);
  }

  return result;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapWords(text, maxChars) {
  const lines = [];
  let current = "";

  text.split(/\s+/).forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) {
    lines.push(current);
  }

  return lines;
}

function textBlock(text, x, y, options = {}) {
  const { anchor = "start", className = "copy", lineHeightPx, maxChars = 42 } = options;
  const lines = wrapWords(text, maxChars);
  const defaultLineHeight = {
    title: 74,
    copy: 42,
    footer: 34,
  }[className] ?? 34;

  return lines
    .map((line, index) => {
      return `<text x="${x}" y="${Number(y) + index * (lineHeightPx ?? defaultLineHeight)}" text-anchor="${anchor}" class="${className}">${escapeXml(line)}</text>`;
    })
    .join("");
}

function imageDataUri(fileName) {
  const file = join(videoDir, fileName);
  const encoded = readFileSync(file).toString("base64");
  return `data:image/png;base64,${encoded}`;
}

function skillBadges() {
  const skills = [
    ["Communication", 250, 318, "#00e7ff", true],
    ["Collaboration", 510, 318, "#ffd100", true],
    ["Problem solving", 770, 318, "#31d19c", false],
    ["Planning", 1030, 318, "#ff8a3d", false],
    ["Creativity", 250, 412, "#bb7cff", false],
    ["Digital literacy", 510, 412, "#4dc8ff", false],
    ["Initiative", 770, 412, "#ffd100", false],
    ["Flexibility", 1030, 412, "#31d19c", false],
    ["Self-management", 250, 506, "#ffffff", false],
    ["Critical thinking", 510, 506, "#ffffff", false],
    ["Presentation", 770, 506, "#ffffff", false],
    ["Financial literacy", 1030, 506, "#ffffff", false],
  ];

  return skills
    .map(([name, x, y, color, focus]) => {
      const stroke = focus ? color : "#687489";
      const fill = focus ? "#39485f" : "#263349";
      return `
        <g>
          <rect x="${Number(x) - 112}" y="${Number(y) - 35}" width="224" height="70" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="${focus ? 3 : 1.5}"/>
          <text x="${x}" y="${Number(y) + 7}" text-anchor="middle" class="${focus ? "badgeTextFocus" : "badgeText"}">${escapeXml(name)}</text>
        </g>
      `;
    })
    .join("");
}

function sortExamples() {
  const examples = [
    ["Employability skill", "Problem solving", "#00e7ff", 210],
    ["Emotion", "Happy", "#ffd100", 500],
    ["Training", "Barista course", "#ff7a45", 790],
  ];

  return examples
    .map(([label, title, color, x]) => {
      return `
        <g>
          <rect x="${x}" y="310" width="270" height="146" rx="10" fill="#263349" stroke="${color}" stroke-width="3"/>
          <text x="${Number(x) + 135}" y="356" text-anchor="middle" class="bucketLabel">${escapeXml(label)}</text>
          <text x="${Number(x) + 135}" y="410" text-anchor="middle" class="bucketText">${escapeXml(title)}</text>
        </g>
      `;
    })
    .join("");
}

function sceneSvg(scene) {
  const anchor = scene.align === "right" ? "end" : scene.align === "center" ? "middle" : "start";
  const textX = scene.align === "center" ? width / 2 : scene.align === "right" ? 1212 : 68;
  const titleY = scene.align === "center" ? 155 : 438;
  const subY = scene.align === "center" ? 250 : 548;
  const footerY = scene.align === "center" ? 604 : 618;
  const labelAnchor = scene.align === "right" ? "end" : scene.align === "center" ? "middle" : "start";
  const label = scene.label.toUpperCase();
  const labelWidth = Math.max(220, label.length * 13);
  const labelRectX = scene.align === "right" ? 1212 - labelWidth : scene.align === "center" ? width / 2 - labelWidth / 2 : 54;
  const labelTextX = scene.align === "right" ? 1194 : scene.align === "center" ? width / 2 : 78;
  const image = scene.image
    ? `<image href="${imageDataUri(scene.image)}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/>`
    : "";
  const focusSkill = scene.skill
    ? `
      <g transform="translate(${scene.align === "right" ? 812 : 72},92)">
        <rect width="396" height="112" rx="10" fill="#25334c" stroke="${scene.skill === "Collaboration" ? "#ffd100" : "#00e7ff"}" stroke-width="3"/>
        <text x="198" y="48" text-anchor="middle" class="badgeLabel">Employer speak</text>
        <text x="198" y="88" text-anchor="middle" class="${scene.skill === "Collaboration" ? "goldSkill" : "cyanSkill"}">${scene.skill}</text>
      </g>
    `
    : "";
  const skillMap = scene.skillMap ? `<g>${skillBadges()}</g>` : "";
  const sortMap = scene.sortExamples ? `<g>${sortExamples()}</g>` : "";
  const footerMax = scene.align === "center" ? 48 : 58;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="heroShade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#172033" stop-opacity="0.86"/>
      <stop offset="48%" stop-color="#172033" stop-opacity="0.48"/>
      <stop offset="100%" stop-color="#002b4f" stop-opacity="0.82"/>
    </linearGradient>
    <linearGradient id="bottomShade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#172033" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#172033" stop-opacity="0.94"/>
    </linearGradient>
    <style>
      text { font-family: Arial, Helvetica, sans-serif; }
      .label { fill: #ffffff; font-size: 25px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
      .title { fill: #ffffff; font-size: ${scene.align === "center" ? 58 : 64}px; font-weight: 900; }
      .copy { fill: #eaf4ff; font-size: 32px; font-weight: 600; }
      .footer { fill: #ffffff; font-size: 26px; font-weight: 800; }
      .badgeLabel, .bucketLabel { fill: #dfeaf2; font-size: 22px; font-weight: 800; letter-spacing: 1.8px; text-transform: uppercase; }
      .bucketText { fill: #ffffff; font-size: 33px; font-weight: 900; }
      .goldSkill { fill: #ffd100; font-size: 42px; font-weight: 900; }
      .cyanSkill { fill: #00e7ff; font-size: 42px; font-weight: 900; }
      .badgeText { fill: #eef7ff; font-size: 21px; font-weight: 800; }
      .badgeTextFocus { fill: #ffffff; font-size: 24px; font-weight: 900; }
    </style>
  </defs>
  <rect width="${width}" height="${height}" fill="#172033"/>
  ${image}
  <rect width="${width}" height="${height}" fill="url(#heroShade)"/>
  <rect width="${width}" height="${height}" fill="url(#bottomShade)"/>
  <path d="M24 42 H348 M24 42 V192 M932 678 H1256 M1256 528 V678" fill="none" stroke="#00e7ff" stroke-width="4" stroke-opacity="0.72"/>
  <path d="M54 70 H308 M974 650 H1226" fill="none" stroke="#ffd100" stroke-width="3" stroke-opacity="0.82"/>
  <rect x="${labelRectX}" y="54" width="${labelWidth}" height="54" rx="8" fill="#445067" stroke="#6d788f"/>
  <text x="${labelTextX}" y="90" text-anchor="${labelAnchor}" class="label">${escapeXml(label)}</text>
  ${skillMap}
  ${sortMap}
  ${focusSkill}
  ${textBlock(scene.title, textX, titleY, { anchor, className: "title", maxChars: scene.align === "center" ? 24 : 25 })}
  ${textBlock(scene.subtitle, textX, subY, { anchor, className: "copy", maxChars: scene.align === "center" ? 52 : 38 })}
  ${textBlock(scene.footer, textX, footerY, { anchor, className: "footer", maxChars: footerMax })}
  <rect x="28" y="28" width="1224" height="664" rx="18" fill="none" stroke="#156b86" stroke-width="2"/>
</svg>`;
}

function renderPng(scene, index, workDir) {
  const svg = join(workDir, `scene-${String(index).padStart(2, "0")}.svg`);
  const png = join(workDir, `scene-${String(index).padStart(2, "0")}.png`);

  writeFileSync(svg, sceneSvg(scene), "utf8");
  run("sips", ["-s", "format", "png", svg, "--out", png]);

  if (!existsSync(png)) {
    throw new Error(`sips did not create ${png}`);
  }

  return png;
}

function renderScene(scene, index, workDir) {
  const png = renderPng(scene, index, workDir);
  const output = join(workDir, `scene-${String(index).padStart(2, "0")}.mp4`);

  run("ffmpeg", [
    "-y",
    "-loop",
    "1",
    "-framerate",
    String(fps),
    "-t",
    String(scene.duration),
    "-i",
    png,
    "-vf",
    [
      `scale=${width}:${height}`,
      "format=yuv420p",
      "fade=t=in:st=0:d=0.18",
      `fade=t=out:st=${Math.max(0, scene.duration - 0.2).toFixed(2)}:d=0.2`,
    ].join(","),
    "-t",
    String(scene.duration),
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "22",
    "-pix_fmt",
    "yuv420p",
    output,
  ]);

  return output;
}

function renderNarration(video, workDir) {
  const narrationText = join(workDir, "narration.txt");
  const aiff = join(workDir, "narration.aiff");
  const wav = join(workDir, "narration.wav");

  writeFileSync(narrationText, video.narration, "utf8");
  run("say", ["-v", "Karen", "-r", "178", "-f", narrationText, "-o", aiff]);
  run("ffmpeg", ["-y", "-i", aiff, "-ar", "48000", "-ac", "2", wav]);

  return wav;
}

function formatVttTime(seconds) {
  const totalMs = Math.round(seconds * 1000);
  const ms = totalMs % 1000;
  const totalSeconds = Math.floor(totalMs / 1000);
  const sec = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const min = totalMinutes % 60;
  const hr = Math.floor(totalMinutes / 60);

  return `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
}

function writeCaptions(video, output) {
  let cursor = 0;
  const cues = video.scenes.map((scene, index) => {
    const start = cursor;
    const end = cursor + scene.duration;
    cursor = end;

    return [
      String(index + 1),
      `${formatVttTime(start)} --> ${formatVttTime(end)}`,
      scene.caption || `${scene.title} ${scene.subtitle}`,
    ].join("\n");
  });

  writeFileSync(output, `WEBVTT\n\n${cues.join("\n\n")}\n`, "utf8");
}

function renderVideo(video) {
  const workDir = join(tmpRoot, video.slug);
  mkdirSync(workDir, { recursive: true });

  const sceneFiles = video.scenes.map((scene, index) => renderScene(scene, index, workDir));
  const concatFile = join(workDir, "concat.txt");
  writeFileSync(concatFile, sceneFiles.map((file) => `file '${file}'`).join("\n"), "utf8");

  const silentVideo = join(workDir, `${video.slug}-silent.mp4`);
  run("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", concatFile, "-c", "copy", silentVideo]);

  const narrationWav = renderNarration(video, workDir);
  const docsVideo = join(docsAssets, `${video.slug}.mp4`);
  const docsCaptions = join(docsAssets, `${video.slug}.vtt`);
  const publicVideo = join(publicAssets, `${video.slug}.mp4`);
  const publicCaptions = join(publicAssets, `${video.slug}.vtt`);

  run("ffmpeg", [
    "-y",
    "-i",
    silentVideo,
    "-i",
    narrationWav,
    "-c:v",
    "copy",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-af",
    "apad=pad_dur=20",
    "-shortest",
    "-movflags",
    "+faststart",
    docsVideo,
  ]);

  writeCaptions(video, docsCaptions);
  copyFileSync(docsVideo, publicVideo);
  copyFileSync(docsCaptions, publicCaptions);

  console.log(`\n${video.label}: ${video.slug}`);
  run(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration,size", "-of", "default=noprint_wrappers=1", docsVideo],
    { stdio: "inherit" },
  );
}

for (const video of videos) {
  renderVideo(video);
}
