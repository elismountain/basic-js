const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('arr is not an array!');
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case '--discard-next':
        result[i] = undefined;
        if (result[i + 1] != undefined) result[i + 1] = undefined;
        break;
      case '--discard-prev':
        result[i] = undefined;
        if (result[i - 1] != undefined) result[i - 1] = undefined;
        break;
      case '--double-next':
        result[i] = undefined;
        if (result[i + 1] != undefined) result[i] = result[i + 1];
        break;
      case '--double-prev':
        result[i] = undefined;
        if (result[i - 1] != undefined) result[i] = result[i - 1];
        break;
      default:
        break;
    }
  }
  return result.filter(item => item !== undefined);
};
