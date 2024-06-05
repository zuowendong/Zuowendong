const fs = require("fs");
const { getTime } = require("./src/time");
const { dailySentence } = require("./src/dailySentence");

(async function writeFile() {
  const { en } = await dailySentence();
  const sentence = en ? `As the saying goes. ${en}` : "";
  const content = `Today is ${getTime()}, let's keep going! ${sentence}`;
  const filePath = "./README.md";
  fs.readFile(filePath, "utf8", (err: any, data: string) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      const lines = data.split("\n");
      lines[lines.length - 1] = content;
      fs.writeFile(filePath, lines.join("\n"), (err: any) => {
        if (err) {
          console.error("Error overwriting file content:", err);
        } else {
          console.log("Last content overwritten successfully.");
        }
      });
    }
  });
})();
