const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addMy;
  if (options.addition === undefined) {
    addMy = String(str);
  } else {
    addMy = String(str) + String(options.addition);
  }
  let arrAdd = [];
  arrAdd.push(addMy);

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    if (options.addition !== undefined) {
      arrAdd.push((options.additionSeparator || '|') + (String(options.addition)));
    }
  }

  let strAdd = arrAdd.join('');

  let arr = [];
  arr.push(strAdd);
  for (let i = 1; i < options.repeatTimes; i++) {
    arr.push(strAdd);
  }
  return options.separator === undefined ? arr.join('+') : arr.join(String(options.separator));
};
