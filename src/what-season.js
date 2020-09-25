const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) && isNaN(date.getMonth)) throw new Error('THROWN');

  if(date instanceof Date && !isNaN(date.valueOf())){
    let month = date.getMonth();
    let day = date.getDate();

    if((day > 30 && month%2==1 && month!=7) || (day > 28 && month === 1)) month +=1;

    if(month < 2) return "winter";
    if(month > 1 && month < 5) return "spring";
    if(month > 4 && month < 8) return "summer";
    if(month > 7 && month < 11) return "autumn";
    if(month > 10) return "winter";
  } 
};
