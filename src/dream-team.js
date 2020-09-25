const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members === null) return false;
  let result = "";
  for(let i = 0; i < members.length; i ++){
    if(typeof members[i] === "string"){
      members[i] = members[i].split(' ').join('').toUpperCase();
    }
  }
  members.sort();
  for(let i = 0; i < members.length; i ++){
    if(typeof members[i] === "string"){
      result += members[i][0].toUpperCase();
    }
  }
  return result;
};
