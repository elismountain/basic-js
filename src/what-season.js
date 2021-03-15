const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error('THROWN');
  // if (!(date instanceof Date)) throw new Error('THROWN');
  let month = date.getMonth();
  switch (true) {
  case month > 1 && month < 5:
    return 'spring';
  case month > 4 && month < 8:
    return 'summer';
  case month > 7 && month < 11:
    return 'autumn';
  default:
    return 'winter';
  }
};
