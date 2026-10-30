import { readFile, writeFile } from "node:fs/promises";

export async function overwriteLastContent(filePath: string, content: string) {
  const data = await readFile(filePath, "utf8");
  const lines = data.split("\n");
  lines[lines.length - 1] = content;
  await writeFile(filePath, lines.join("\n"));
  console.log("Last content overwritten successfully.");
}
