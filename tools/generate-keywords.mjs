import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "用語.txt");
const outputPath = path.join(root, "src", "defaultKeywords.js");

const COLORS = {
  plus: "rgb(248, 194, 0)",
  minus: "rgb(227, 0, 0)",
  neutral: "rgb(161, 106, 59)"
};

const TYPE_BY_MARK = {
  "＋": "plus",
  "+": "plus",
  "－": "minus",
  "ー": "minus"
};

function normalizeType(mark) {
  return TYPE_BY_MARK[mark] || "neutral";
}

function slugify(value, index) {
  const hex = Array.from(value)
    .map((char) => char.codePointAt(0).toString(16))
    .join("-");
  return `keyword-${index + 1}-${hex.slice(0, 48)}`;
}

function splitDescriptionAndFlavor(text) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  if (!normalized) return { description: "", flavor: "" };

  const parts = normalized.split(/\n{2,}/);
  if (parts.length > 1) {
    const last = parts.at(-1).trim();
    if (/^[「『（(]/.test(last) || /[」』）)]$/.test(last) || last.includes("。")) {
      return {
        description: parts.slice(0, -1).join("\n\n").trim(),
        flavor: last
      };
    }
  }

  const lines = normalized.split("\n");
  const flavorStart = lines.findIndex((line) => /^[「『]/.test(line.trim()));
  if (flavorStart > 0) {
    return {
      description: lines.slice(0, flavorStart).join("\n").trim(),
      flavor: lines.slice(flavorStart).join("\n").trim()
    };
  }

  return { description: normalized, flavor: "" };
}

function parseKeywords(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const entries = [];
  let current = null;

  const finish = (mark) => {
    if (!current) return;
    const { description, flavor } = splitDescriptionAndFlavor(current.descriptionLines.join("\n"));
    entries.push({
      id: slugify(current.name, entries.length),
      name: current.name,
      type: normalizeType(mark),
      color: COLORS[normalizeType(mark)],
      description,
      flavor,
      icon: "default"
    });
    current = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim() || line.includes("＝")) {
      if (current) current.descriptionLines.push("");
      continue;
    }

    const columns = line.split("\t");
    const lastColumn = columns.at(-1)?.trim();
    const hasTerminator = ["＋", "+", "－", "ー", "-"].includes(lastColumn);

    if (columns.length >= 3 && !current) {
      current = {
        name: (columns[1] || columns[0]).trim(),
        descriptionLines: [columns.slice(2, hasTerminator ? -1 : undefined).join("\t").trim()]
      };
      if (hasTerminator) finish(lastColumn);
      continue;
    }

    if (columns.length >= 3 && current && hasTerminator) {
      current.descriptionLines.push(line.replace(/\t[＋+－ー-]\s*$/, ""));
      finish(lastColumn);
      continue;
    }

    if (columns.length >= 3 && current) {
      current.descriptionLines.push(line);
      continue;
    }

    if (!current) {
      current = {
        name: columns[0].trim(),
        descriptionLines: []
      };
      continue;
    }

    if (hasTerminator) {
      current.descriptionLines.push(columns.slice(0, -1).join("\t").trim());
      finish(lastColumn);
    } else {
      current.descriptionLines.push(line);
    }
  }

  if (current) finish("-");

  const seen = new Set();
  return entries.filter((entry) => {
    if (!entry.name || seen.has(entry.name)) return false;
    seen.add(entry.name);
    return true;
  });
}

const keywords = parseKeywords(fs.readFileSync(sourcePath, "utf8"));
const output = `/* Generated from ../用語.txt by tools/generate-keywords.mjs */\n\nexport const DEFAULT_KEYWORDS = ${JSON.stringify(keywords, null, 2)};\n`;

fs.writeFileSync(outputPath, output);
console.log(`Generated ${keywords.length} keywords at ${path.relative(root, outputPath)}`);
