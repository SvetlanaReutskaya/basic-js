const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str === null ? 'null' : str.toString();
  if(options.addition === null) options.addition = 'null';
  
  let result = ''
  
  if(options.repeatTimes != undefined){
    for(let i = 0; i < options.repeatTimes - 1; i ++){
      result += string;

      if(options.addition != undefined){
        if(options.additionRepeatTimes != undefined){
          for(let j = 0; j < options.additionRepeatTimes-1; j ++){
            result += options.addition.toString();

            if(options.additionSeparator != undefined){
              result += options.additionSeparator;
            } else {
              result += '|';
            }
          }
          result += options.addition.toString();
        } else {
          result += options.addition.toString();
        }
      }

      if(options.separator  != undefined){
        result += options.separator ;
      } else {
        result += '+';
      }
    }
    
  }

    result += string;

      if(options.addition != undefined){
        if(options.additionRepeatTimes != undefined){
          for(let j = 0; j < options.additionRepeatTimes-1; j ++){
            result += options.addition.toString();

            if(options.additionSeparator != undefined){
              result += options.additionSeparator;
            } else {
              result += '|';
            }
          }
          result += options.addition.toString();
        } else {
          result += options.addition.toString();
        }
      }

  return result;
};
  