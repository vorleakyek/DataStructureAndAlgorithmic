class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //see the very top node
  peek() {
    return this.top;
  }

  //add a node to the top of the stack
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  //remove from the top of the stack
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }

  //isEmpty
  isEmpty() {
    if (this.length === 0) {
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
