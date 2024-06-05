const fs = require("fs");

export function overwriteLastContent(filePath: string, content: string) {
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
}
