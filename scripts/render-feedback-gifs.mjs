import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const width = 720;
const height = 360;
const fps = 18;
const frames = 27;
const outDir = "docs/assets/feedback";
const publicDir = "public/assets/feedback";

mkdirSync(outDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

const font = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01111"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  W: ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
};

const colours = {
  navy: [7, 24, 39],
  deep: [5, 17, 28],
  city: [18, 51, 74],
  tower: [20, 63, 95],
  teal: [0, 184, 197],
  pink: [225, 29, 114],
  gold: [255, 194, 75],
  orange: [255, 107, 34],
  white: [255, 255, 255],
  spaceNavy: [5, 8, 32],
  spaceBlue: [12, 38, 84],
  violet: [126, 87, 255],
  lime: [69, 217, 118],
};

function mix(a, b, t) {
  return a.map((value, index) => Math.round(value + (b[index] - value) * t));
}

function frameBuffer(scene) {
  const buffer = new Uint8Array(width * height * 3);
  for (let y = 0; y < height; y += 1) {
    const colour = scene === "space"
      ? mix(colours.spaceNavy, colours.spaceBlue, y / height)
      : mix(colours.navy, colours.city, y / height);
    for (let x = 0; x < width; x += 1) {
      setPixel(buffer, x, y, colour);
    }
  }
  return buffer;
}

function setPixel(buffer, x, y, colour) {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const index = (Math.floor(y) * width + Math.floor(x)) * 3;
  buffer[index] = colour[0];
  buffer[index + 1] = colour[1];
  buffer[index + 2] = colour[2];
}

function fillRect(buffer, x, y, w, h, colour, alpha = 1) {
  const startX = Math.max(0, Math.floor(x));
  const startY = Math.max(0, Math.floor(y));
  const endX = Math.min(width, Math.ceil(x + w));
  const endY = Math.min(height, Math.ceil(y + h));
  for (let yy = startY; yy < endY; yy += 1) {
    for (let xx = startX; xx < endX; xx += 1) {
      const index = (yy * width + xx) * 3;
      buffer[index] = Math.round(buffer[index] * (1 - alpha) + colour[0] * alpha);
      buffer[index + 1] = Math.round(buffer[index + 1] * (1 - alpha) + colour[1] * alpha);
      buffer[index + 2] = Math.round(buffer[index + 2] * (1 - alpha) + colour[2] * alpha);
    }
  }
}

function fillCircle(buffer, cx, cy, radius, colour, alpha = 1) {
  const startX = Math.max(0, Math.floor(cx - radius));
  const startY = Math.max(0, Math.floor(cy - radius));
  const endX = Math.min(width, Math.ceil(cx + radius));
  const endY = Math.min(height, Math.ceil(cy + radius));
  const radiusSquared = radius * radius;
  for (let yy = startY; yy < endY; yy += 1) {
    for (let xx = startX; xx < endX; xx += 1) {
      if ((xx - cx) ** 2 + (yy - cy) ** 2 <= radiusSquared) {
        fillRect(buffer, xx, yy, 1, 1, colour, alpha);
      }
    }
  }
}

function drawCity(buffer, frame) {
  fillRect(buffer, 0, 246, width, 114, colours.deep, 1);
  [
    [64, 156, 88, 100],
    [172, 126, 112, 130],
    [306, 168, 86, 88],
    [502, 136, 118, 120],
  ].forEach((building, index) => {
    fillRect(buffer, building[0], building[1], building[2], building[3], index % 2 ? colours.tower : colours.city, 0.98);
  });

  const windowColours = [colours.teal, colours.gold, colours.pink];
  for (let i = 0; i < 22; i += 1) {
    const building = i % 4;
    const x = [78, 192, 326, 520][building] + (i % 3) * 28;
    const y = [178, 150, 190, 158][building] + Math.floor(i / 4) * 22;
    const colour = windowColours[(i + frame) % windowColours.length];
    fillRect(buffer, x, y, 12, 10, colour, (i + frame) % 2 ? 0.9 : 0.45);
  }

  fillRect(buffer, 72, 284, 576, 8, colours.city, 1);
  fillRect(buffer, frame * 22 - 80, 286, 120, 5, colours.gold, 0.95);
}

function drawSpace(buffer, frame) {
  for (let i = 0; i < 52; i += 1) {
    const x = (i * 83 + frame * 5) % width;
    const y = (i * 47 + 18) % 216;
    const colour = i % 5 === 0 ? colours.gold : i % 3 === 0 ? colours.lime : colours.teal;
    fillRect(buffer, x, y, i % 7 === 0 ? 4 : 2, i % 7 === 0 ? 4 : 2, colour, 0.72);
  }

  fillCircle(buffer, 562, 118, 76, colours.violet, 0.54);
  fillCircle(buffer, 542, 96, 58, colours.teal, 0.2);
  fillCircle(buffer, 586, 146, 38, colours.gold, 0.2);

  for (let i = 0; i < 36; i += 1) {
    const angle = (i / 36) * Math.PI * 2 + frame / 12;
    const x = 562 + Math.cos(angle) * 116;
    const y = 118 + Math.sin(angle) * 34;
    fillRect(buffer, x, y, 3, 3, colours.teal, 0.7);
  }

  fillRect(buffer, 0, 238, width, 122, colours.deep, 0.9);
  fillRect(buffer, 42, 252, 636, 68, colours.spaceBlue, 0.74);
  fillRect(buffer, 74, 268, 130, 26, colours.teal, 0.3);
  fillRect(buffer, 244, 268, 126, 26, colours.lime, 0.28);
  fillRect(buffer, 410, 268, 126, 26, colours.violet, 0.3);
  fillRect(buffer, 576, 268, 68, 26, colours.gold, 0.26);

  const sweepX = (frame * 28) % width;
  fillRect(buffer, sweepX - 80, 230, 180, 4, colours.lime, 0.72);
}

function measure(text, scale, tracking) {
  return [...text].reduce((total, char) => total + (char === " " ? 4 * scale : 6 * scale) + tracking, 0);
}

function drawText(buffer, text, x, y, scale, colour, tracking = 4) {
  let cursor = x;
  for (const char of text) {
    if (char === " ") {
      cursor += 4 * scale + tracking;
      continue;
    }
    const glyph = font[char];
    if (!glyph) {
      cursor += 6 * scale + tracking;
      continue;
    }
    glyph.forEach((row, rowIndex) => {
      [...row].forEach((pixel, columnIndex) => {
        if (pixel === "1") {
          fillRect(buffer, cursor + columnIndex * scale, y + rowIndex * scale, scale, scale, colour, 1);
        }
      });
    });
    cursor += 6 * scale + tracking;
  }
}

function drawPanelText(buffer, text, panelX, panelWidth, y, scale, colour) {
  const x = Math.round(panelX + (panelWidth - measure(text, scale, 4)) / 2);
  drawText(buffer, text, x + 5, y + 5, scale, colours.deep, 0);
  drawText(buffer, text, x, y, scale, colour, 4);
}

function easeOut(t) {
  return 1 - (1 - t) ** 3;
}

function signX(frame) {
  if (frame < 6) {
    return -520 + easeOut(frame / 6) * 604;
  }
  if (frame > frames - 7) {
    return 84 + easeOut((frame - (frames - 7)) / 6) * 640;
  }
  return 84;
}

function renderFrames(scene, kind, title, subtitle, panelColour, accentColour, tempDir) {
  for (let frame = 0; frame < frames; frame += 1) {
    const buffer = frameBuffer(scene);
    if (scene === "space") {
      drawSpace(buffer, frame);
    } else {
      drawCity(buffer, frame);
    }

    const x = signX(frame);
    fillRect(buffer, x, 62, 552, 142, panelColour, 0.72);
    fillRect(buffer, x + 14, 76, 524, 114, colours.deep, 0.9);
    fillRect(buffer, x + frame * 22 - 110, 74, 160, 8, accentColour, 0.95);
    fillRect(buffer, x + 20, 212, 512, 8, accentColour, 0.62);

    drawPanelText(buffer, title, x, 552, 102, 10, colours.white);
    drawPanelText(buffer, subtitle, x, 552, 184, 5, accentColour);

    if (kind === "well-done") {
      fillRect(buffer, x + 490 + Math.sin(frame / 3) * 5, 86, 38, 76, colours.gold, 0.95);
      fillRect(buffer, x + 506 + Math.sin(frame / 3) * 5, 142, 80, 18, colours.gold, 0.95);
    } else {
      fillRect(buffer, x + 506 + Math.sin(frame / 2) * 7, 92, 72, 14, colours.orange, 0.95);
      fillRect(buffer, x + 535 + Math.sin(frame / 2) * 7, 68, 14, 72, colours.orange, 0.95);
    }

    const header = Buffer.from(`P6\n${width} ${height}\n255\n`);
    writeFileSync(join(tempDir, `frame-${String(frame).padStart(3, "0")}.ppm`), Buffer.concat([header, Buffer.from(buffer)]));
  }
}

function renderGif(name, scene, kind, title, subtitle, panelColour, accentColour) {
  const tempDir = mkdtempSync(join(tmpdir(), `${scene}-feedback-${kind}-`));
  const output = `${outDir}/${name}`;
  try {
    renderFrames(scene, kind, title, subtitle, panelColour, accentColour, tempDir);
    const result = spawnSync(
      "ffmpeg",
      ["-y", "-framerate", String(fps), "-i", join(tempDir, "frame-%03d.ppm"), "-loop", "0", output],
      { stdio: "inherit" },
    );
    if (result.status !== 0) {
      throw new Error(`ffmpeg failed while rendering ${name}`);
    }
    copyFileSync(output, `${publicDir}/${name}`);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

renderGif("city-well-done-v1.gif", "city", "well-done", "WELL DONE", "CITY PIECE BUILT", colours.teal, colours.gold);
renderGif("city-try-again-v1.gif", "city", "try-again", "TRY AGAIN", "CHECK THE CLUE", colours.pink, colours.orange);
renderGif("mission-control-well-done-v1.gif", "space", "well-done", "MISSION CLEAR", "ORBIT TILE BUILT", colours.spaceBlue, colours.lime);
renderGif("mission-control-try-again-v1.gif", "space", "try-again", "TRY AGAIN", "CHECK THE CLUE", colours.violet, colours.gold);
