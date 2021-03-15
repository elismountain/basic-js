const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  result = '';
  members.forEach(element => {
    if (typeof element == 'string') {
      result += element.trim()[0];
    }
  });
  return result.toUpperCase().split('').sort().join('');
};
