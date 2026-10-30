import { appendFile } from "node:fs/promises";

export async function recordDailySentence(filePath: string, content: string) {
  await appendFile(filePath, `\n${content}\n`);
  console.log("append file successfully");
}
