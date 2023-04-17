const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(el) {
    let arr = this;
    if (!this.length){
      this.length = 0;
    }
    arr[arr.length] = el;
    arr.length++;    
  }

  pop() {
    if(this.length === 0){
      return undefined
    }
    this.length--;
    let poped = this[this.length];
    delete this[this.length];
    
    return poped
  }

  peek() {
    return this[this.length - 1]
  }
}

module.exports = {
  Stack
};
