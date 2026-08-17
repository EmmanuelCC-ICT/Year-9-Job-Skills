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
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
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
};

function mix(a, b, t) {
  return a.map((value, index) => Math.round(value + (b[index] - value) * t));
}

function frameBuffer() {
  const buffer = new Uint8Array(width * height * 3);
  for (let y = 0; y < height; y += 1) {
    const colour = mix(colours.navy, colours.city, y / height);
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

function drawCentredText(buffer, text, y, scale, colour) {
  const x = Math.round((width - measure(text, scale, 4)) / 2);
  drawText(buffer, text, x + 5, y + 5, scale, colours.deep, 0);
  drawText(buffer, text, x, y, scale, colour, 4);
}

function signX() {
  return 84;
}

function renderFrames(kind, title, subtitle, panelColour, accentColour, tempDir) {
  for (let frame = 0; frame < frames; frame += 1) {
    const buffer = frameBuffer();
    drawCity(buffer, frame);

    const x = signX(frame);
    fillRect(buffer, x, 62, 552, 142, panelColour, 0.72);
    fillRect(buffer, x + 14, 76, 524, 114, colours.deep, 0.9);
    fillRect(buffer, x + frame * 22 - 110, 74, 160, 8, accentColour, 0.95);
    fillRect(buffer, x + 20, 212, 512, 8, accentColour, 0.62);

    drawCentredText(buffer, title, 102, 10, colours.white);
    drawCentredText(buffer, subtitle, 184, 5, accentColour);

    if (kind === "well-done") {
      fillRect(buffer, 574 + Math.sin(frame / 3) * 5, 86, 38, 76, colours.gold, 0.95);
      fillRect(buffer, 590 + Math.sin(frame / 3) * 5, 142, 80, 18, colours.gold, 0.95);
    } else {
      fillRect(buffer, 590 + Math.sin(frame / 2) * 7, 92, 72, 14, colours.orange, 0.95);
      fillRect(buffer, 619 + Math.sin(frame / 2) * 7, 68, 14, 72, colours.orange, 0.95);
    }

    const header = Buffer.from(`P6\n${width} ${height}\n255\n`);
    writeFileSync(join(tempDir, `frame-${String(frame).padStart(3, "0")}.ppm`), Buffer.concat([header, Buffer.from(buffer)]));
  }
}

function renderGif(name, kind, title, subtitle, panelColour, accentColour) {
  const tempDir = mkdtempSync(join(tmpdir(), `city-feedback-${kind}-`));
  const output = `${outDir}/${name}`;
  try {
    renderFrames(kind, title, subtitle, panelColour, accentColour, tempDir);
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

renderGif("city-well-done-v1.gif", "well-done", "WELL DONE", "CITY PIECE BUILT", colours.teal, colours.gold);
renderGif("city-try-again-v1.gif", "try-again", "TRY AGAIN", "CHECK THE CLUE", colours.pink, colours.orange);
