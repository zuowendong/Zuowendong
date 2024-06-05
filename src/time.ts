const dayjs = require("dayjs");

export function getTime() {
  const currentDate = dayjs();
  const formattedDate = currentDate.format("MMMM D, YYYY");
  return formattedDate;
}
