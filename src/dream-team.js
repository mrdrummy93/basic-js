const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let firstLetters =[];
    members.forEach(el => {
        firstLetters.push(el.trim().charAt(0));
    })
  return firstLetters.sort().join('').toUpperCase();
};
