const addDays = require("date-fns/addDays");
const newDate = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  let date = result.getDate();
  let month = result.getMonth() + 1;
  let year = result.getFullYear();
  return `${date}-${month}-${year}`;
};

module.exports = newDate;
