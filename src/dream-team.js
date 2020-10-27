const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const strArr = members.filter((human) => typeof(human) === 'string');
  let lettersArr = [];

  strArr.forEach((human) => {
    lettersArr.push(human.match(/\b[a-zA-Z]/)[0].toUpperCase())
  })

  return lettersArr.sort().join('')
  
};
