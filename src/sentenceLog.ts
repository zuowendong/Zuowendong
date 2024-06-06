const fs = require("fs");

export function recordDailySentence(filePath: string, content: string) {
  fs.appendFile(filePath, `\n${content}\n`, (err) => {
    if (err) {
      console.error(`append file to ${filePath}:`, err);
      return;
    }
    console.log("append file successfully");
  });
}
