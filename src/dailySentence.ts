const QUOTE_API = "https://apiv3.shanbay.com/weapps/dailyquote/quote";
const TIMEOUT_MS = 15_000;
const MAX_RETRIES = 3;

async function fetchQuote() {
  const res = await fetch(QUOTE_API, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) {
    throw new Error(`daily quote api responded ${res.status}`);
  }
  const data = await res.json();
  if (!data.content || !data.translation) {
    throw new Error("daily quote api returned incomplete data");
  }
  return { zh: data.translation, en: data.content };
}

export async function dailySentence() {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await fetchQuote();
    } catch (err) {
      lastError = err;
      console.error(`fetch quote failed (attempt ${attempt}/${MAX_RETRIES}):`, err);
    }
  }
  throw lastError;
}
