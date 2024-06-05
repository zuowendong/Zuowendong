const { getTime } = require("./src/time");
const { dailySentence } = require("./src/dailySentence");
const { overwriteLastContent } = require("./src/overwrite");
const { recordDailySentence } = require("./src/sentenceLog");

(async function () {
  const { en } = await dailySentence();
  const sentence = en ? `As the saying goes. ${en}` : "";
  const lastContent = `Today is ${getTime()}, let's keep going! ${sentence}`;

  overwriteLastContent("./README.md", lastContent);
  recordDailySentence("./dailySentence-log.md", en);
})();
