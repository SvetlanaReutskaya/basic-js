const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(param) {
    this.isReverse = param;
  }

  encrypt(message, key) {
   let result = '';
   message = message.toUpperCase();
   key = key.toUpperCase();

   let j = 0;

   for (let i = 0; i < message.length; i++){
    if (message[i] >= "A" && message[i] <= "Z") {
      if(j === key.length) j = 0;

      let code = message[i].charCodeAt();
      let keyCode = key[j].charCodeAt();

      let resCode = code + keyCode - 65;
      if (resCode > 90) resCode -=26;
      
      result += String.fromCharCode(resCode);
      j++;
    }
    else result += message[i];
   }

   return this.isReverse ? result.split('').reverse().join('') : result;
  }   

  decrypt(message, key) {
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
 
    let j = 0;
 
    for (let i = 0; i < message.length; i++){
     if (message[i] >= "A" && message[i] <= "Z") {
       if(j === key.length) j = 0;
 
       let code = message[i].charCodeAt();
       let keyCode = key[j].charCodeAt();
 
       let resCode = code - keyCode + 65;
       if (resCode < 65) resCode +=26;
       
       result += String.fromCharCode(resCode);
       j++;
     }
     else result += message[i];
    }
 
    return this.isReverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
