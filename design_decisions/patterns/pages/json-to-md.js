#!/usr/bin/env node
/*
 * Node CLI to convert JSON -> Markdown and optionally write/append to a file.
 *
 * Usage:
 *   node scripts/json-to-markdown.js input.json [--title "Title"] [--out path/to/file.md] [--append]
 *
 * If --out is omitted, output is written to stdout (so you can redirect or capture).
 */

const fs = require("fs");
const path = require("path");

function isPrimitive(v) {
  return v === null || ["string", "number", "boolean"].includes(typeof v);
}

function escapeInline(s) {
  return String(s).replace(/\n/g, " ").replace(/\|/g, "\\|");
}

function toMarkdown(value, indent = 0) {
  const pad = "  ".repeat(indent);

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (isPrimitive(item)) {
          return `${pad}- ${escapeInline(item === null ? "null" : item)}`;
        } else {
          return `${pad}-\n${toMarkdown(item, indent + 1)}`;
        }
      })
      .join("\n");
  }

  if (value && typeof value === "object") {
    const obj = value;
    return Object.entries(obj)
      .map(([k, v]) => {
        if (isPrimitive(v)) {
          return `${pad}- **${k}**: ${escapeInline(v === null ? "null" : v)}`;
        } else {
          return `${pad}- **${k}**:\n${toMarkdown(v, indent + 1)}`;
        }
      })
      .join("\n");
  }

  return `${pad}- ${escapeInline(value === null ? "null" : value)}`;
}

function showUsageAndExit() {
  console.error("Usage: json-to-markdown <input.json> [--title \"Title\"] [--out file.md] [--append]");
  process.exit(2);
}

async function fileExists(p) {
  try {
    await fs.promises.access(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 1) showUsageAndExit();

  const inputPath = argv[0];
  const titleFlagIndex = argv.indexOf("--title");
  let title;
  if (titleFlagIndex !== -1 && argv.length > titleFlagIndex + 1) {
    title = argv[titleFlagIndex + 1];
  }

  const outFlagIndex = argv.indexOf("--out");
  let outPath;
  if (outFlagIndex !== -1 && argv.length > outFlagIndex + 1) {
    outPath = argv[outFlagIndex + 1];
  }

  const append = argv.includes("--append");

  try {
    const resolved = path.resolve(inputPath);
    const raw = await fs.promises.readFile(resolved, "utf8");
    const data = JSON.parse(raw);

    const mdBody = toMarkdown(data, 0);
    const content = title ? `# ${title}\n\n${mdBody}\n` : `${mdBody}\n`;

    if (!outPath) {
      // stdout
      process.stdout.write(content);
      return;
    }

    const outResolved = path.resolve(outPath);
    const exists = await fileExists(outResolved);

    if (append && exists) {
      // If appending, optionally skip duplicate title and ensure newline separator
      let existing = await fs.promises.readFile(outResolved, "utf8");
      let prefix = "";
      if (!existing.endsWith("\n")) prefix = "\n";

      // If title is provided and already present as a complete line, remove it from content
      let contentToAppend = content;
      if (title) {
        const titleLine = `# ${title}`;
        if (existing.split(/\r?\n/).some((ln) => ln.trim() === titleLine)) {
          // remove title line and following blank line if present
          contentToAppend = contentToAppend.replace(/^# .*?\r?\n\r?\n/, "");
        }
      }

      await fs.promises.appendFile(outResolved, prefix + contentToAppend, "utf8");
      console.log(`Appended markdown to ${outResolved}`);
    } else {
      // write/overwrite
      await fs.promises.mkdir(path.dirname(outResolved), { recursive: true });
      await fs.promises.writeFile(outResolved, content, "utf8");
      console.log(`Wrote markdown to ${outResolved}`);
    }
  } catch (err) {
    console.error("Error:", err && err.message ? err.message : String(err));
    process.exit(1);
  }
}

if (require.main === module) main();
