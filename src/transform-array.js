const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];
  if (!Array.isArray(arr)) throw new Error();

  newArray = arr.slice();
  
  for(let i = 0; i < newArray.length; i ++){
    
    switch (newArray[i]) {
      case '--discard-next': 
        if (i + 1 < newArray.length) {
          newArray.splice(i, 2, '-', '-');
        } 
        else 
          newArray[i] = '-';
        break;
      
      case '--discard-prev': 
        if (i - 1 > 0) {
          newArray.splice(i - 1, 2, '-', '-');
        } else  
          newArray[i] = '-';
        break;
      
      case '--double-next':
        if (i + 1 < newArray.length && newArray[i + 1] !== '-') {
          newArray.splice(i, 1, arr[i + 1]);
        } 
        else
          newArray[i] = '-';
        break;

      case '--double-prev': 
        if (i - 1 > 0 && newArray[i - 1] !== '-') {
          newArray.splice(i, 1, arr[i - 1]);
        } 
        else 
          newArray[i] = '-';
        break;
      
    }
    }
  return newArray.filter(word => word !== '-');
};