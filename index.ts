import { getTime } from "./src/time.js";
import { dailySentence } from "./src/dailySentence.js";
import { overwriteLastContent } from "./src/overwrite.js";
import { recordDailySentence } from "./src/sentenceLog.js";

try {
  const { zh, en } = await dailySentence();
  const sentence = en ? `As the saying goes. ${en}` : "";
  const lastContent = `Today is ${getTime()}, let's keep going! ${sentence}`;

  await overwriteLastContent("./README.md", lastContent);
  await recordDailySentence("./dailySentence-log.md", `${en} ${zh}`);
} catch (err) {
  console.error("update failed:", err);
  process.exit(1);
}
