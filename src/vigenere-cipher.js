const CustomError = require("../extensions/custom-error");

const ALFABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let mesChrCode;
let keyChrCode;
let newChrCode;
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    const keyArr = [];
    const resArr = [];
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0; i < this.key.length; i++) {
      keyArr.push(ALFABET.indexOf(this.key[i]));
    };

    for (let j = 0, k =0; j < this.message.length; j++, k++) {
      if(!/[A-Z]/.test(this.message[j])) {
        resArr.push(this.message[j]);
        k -= 1;
        continue;
      }

      mesChrCode = ALFABET.indexOf(this.message[j]);
      keyChrCode = (k < keyArr.length) ? keyArr[k] : keyArr[k % keyArr.length];
      newChrCode = (mesChrCode + keyChrCode >= 26) 
      ? mesChrCode + keyChrCode - 26 
      : mesChrCode + keyChrCode;

      resArr.push(ALFABET[newChrCode]);
    }

    return this.type ? resArr.join('') : resArr.reverse().join('');
  }    

  decrypt(encryptedMessage, key) {
    const keyArr = [];
    const resArr = [];
    this.encryptedMessage = encryptedMessage.toUpperCase();
    this.key = key.toUpperCase();

    for (let i = 0; i < this.key.length; i++) {
      keyArr.push(ALFABET.indexOf(this.key[i]));
    };

    for (let j = 0, k = 0; j < this.encryptedMessage.length; j++, k++) {
      if(!/[A-Z]/.test(this.encryptedMessage[j])) {
        resArr.push(this.encryptedMessage[j]);
        k -= 1;
        continue;
      }

      mesChrCode = ALFABET.indexOf(this.encryptedMessage[j]);
      keyChrCode = (k < keyArr.length) ? keyArr[k] : keyArr[k % keyArr.length];
      newChrCode = (mesChrCode - keyChrCode >= 0)
        ? mesChrCode - keyChrCode
        : mesChrCode - keyChrCode + 26;

      resArr.push(ALFABET[newChrCode]);
    }

    return this.type ? resArr.join('') : resArr.reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

module.exports = VigenereCipheringMachine;
