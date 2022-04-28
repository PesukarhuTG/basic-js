const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    //returns the current chain length as a number;
    return this.chain.length;
  },

  addLink(value = '( )') {
    //adds a link containing a string representation of the value to the chain
    this.chain.push(value + '');
    return this;
  },

  removeLink(position) {
    //If it accepts invalid position (e.g. not a number, or a fractional number, or corresponding to a nonexistent link), 
    //it must throw an Error with message You can't remove incorrect link!
    if (typeof position !== 'number' || position > this.chain.length - 1 || position < 1) {
      //After calling the removeLink method, the existing chain must be deleted
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    //removes a chain link in the specified position
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    //The finished chain is a string and looks like this: '( value1 )~~( value2 )~~( value3 )'
    for (let i = 0; i < this.chain.length; i++) {
      this.chain[i] = `( ${this.chain[i]} )`;
    }
    let result = this.chain.join('~~');

    //After calling the finishChain method, the existing chain must be deleted, as if an Error was thrown.
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
