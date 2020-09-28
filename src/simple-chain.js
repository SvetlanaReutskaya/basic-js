const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {

    if(value === null) this.chain.push('null');
    else if(value !== undefined) this.chain.push(value.toString());
    else this.chain.push('');

    return this
  },
  removeLink(position) {
    if(position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    }
    else {
      this.chain = [];
      throw new Error();
    }

    return this
  },
  reverseChain() {
    this.chain.reverse();

    return this
  },
  finishChain() {
    let result = '';

    for(let i = 0; i < this.chain.length - 1; i ++){
      result += '( ' + this.chain[i] + ' )~~';
    }
    if(this.chain.length > 0) result += '( ' + this.chain[this.chain.length-1] + ' )';

    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
