const superagent = require("superagent");

export async function dailySentence() {
  const { text } = await superagent.get("https://open.iciba.com/dsapi/");
  const data = JSON.parse(text);
  return {
    zh: data.note,
    en: data.content,
  };
}
