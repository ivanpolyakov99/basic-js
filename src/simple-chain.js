const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.split('~~').length - 1;
  },
  addLink(value) {
    if(value === undefined) {
      value = '';
    }

    if(!this.chain) {
      this.chain = `( ${value} )~~`;
    } else {
      this.chain += `( ${value} )~~`;
    }

    return chainMaker;
  },
  removeLink(position) {
    this.chain = this.chain.split('~~');

    if(!Number.isInteger(position) || position < 1 || position > this.chain.length - 1) {
      this.chain = '';
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    this.chain = this.chain.join('~~')

    return chainMaker;
  },
  reverseChain() {
    if(!this.chain) {
      return chainMaker;
    }

    this.chain = this.chain.split('~~');
    this.chain.pop();
    this.chain = this.chain.reverse().join('~~') + '~~';

    return chainMaker;
  },
  finishChain() {
    const resultChain = this.chain.slice(0, -2);

    this.chain = '';

    return resultChain;
  }
};

module.exports = chainMaker;
