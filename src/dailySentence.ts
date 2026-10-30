const superagent = require("superagent");

export async function dailySentence() {
  const { text } = await superagent.get(
    "https://apiv3.shanbay.com/weapps/dailyquote/quote"
  );
  const data = JSON.parse(text);
  return {
    zh: data.translation,
    en: data.content,
  };
}
