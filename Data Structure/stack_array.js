class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  //see the very top node
  peek() {
    const index = this.array.length;
    return this.array[index - 1];
  }

  //add a node to the top of the stack
  push(value) {
    this.array.push(value);
    return this;
  }

  //remove from the top of the stack
  pop() {
    this.array.pop();
    return this;
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("freecodecamp");
myStack.peek();
myStack.pop();
myStack.pop();
const result = myStack.pop();

console.log(result);
