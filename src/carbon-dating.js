const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

  if (sampleActivity <= 0 && sampleActivity > 15 || sampleActivity === '' || sampleActivity !== '') {
    return false;
  } else {
    return (MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  }
};
