const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  throw new CustomError('Not implemented');
  if (members !== '') {
    return false
  } else {
   return members.sort().toString().slice(1);
  }
};
