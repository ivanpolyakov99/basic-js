const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }

  let resultArr = []

  for (let i =0; i < arr.length; i++) {
    if(arr[i] === '--discard-next') {
      if((i + 1) < arr.length) {
        i++;
        continue;
      } else {
        break;
      }
    }

    if(arr[i] === '--discard-prev') {
      if((i - 1) > 0 && arr[i - 2] !== '--discard-next') {
        resultArr.pop();
        continue;
      } else {
        continue;
      }
    }

    if(arr[i] === '--double-next') {
      if((i + 1) < arr.length) {
        resultArr.push(arr[i + 1]);
        continue;
      } else {
        break;
      }
    }

    if(arr[i] === '--double-prev') {
      if((i - 1) > 0 && arr[i - 2] !== '--discard-next') {
        resultArr.push(arr[i - 1]);
        continue;
      } else {
        continue;
      }
    }

    resultArr.push(arr[i]);
  }

  return resultArr;
};
