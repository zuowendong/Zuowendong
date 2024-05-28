const fs = require("fs");

function getTime() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let formattedDate = ` ${year} 年 ${month} 月 ${day} 号`;
  return `今天是${formattedDate}, 也要加油呀！`;
}

function writeFile() {
  const content = getTime();
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
}

writeFile();
