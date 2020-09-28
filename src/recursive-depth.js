const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let result = 1;
      for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
              let depth = 1;
              depth += this.calculateDepth(arr[i]);
              if (depth > result) {
                result = depth;
              }
          }
      }
      return result;
  }
};