const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if(typeof sampleActivity !== "string" || sampleActivity === null || sampleActivity === undefined) return false;
  let param = parseFloat(sampleActivity);
  if(isNaN(param) || param < 1 || param > 15) return false;
  let result = (Math.log(MODERN_ACTIVITY / param)) / (Math.log(2) / HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
