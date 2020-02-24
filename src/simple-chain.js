const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value = '( )') {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length || isNaN(position)) {
      this.arr = [];
      throw new Error('Error');
    } else{
        this.arr.splice(position - 1, 1);
      }
      return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let arr2 = this.arr.map((elem) => `( ${elem} )`);
    this.arr = [];
    return arr2.join('~~');
  }
};

module.exports = chainMaker;
