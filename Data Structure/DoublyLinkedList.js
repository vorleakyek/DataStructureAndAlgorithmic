// 10 --> 5 --> 6

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // 1 --> 10 --> 5 --> 6
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    //validate params later

    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value); // ref to 3
    const leadNode = this.traverseToIndex(index - 1); // ref to 1
    const shiftNode = leadNode.next; //ref to 2
    leadNode.next = newNode;
    newNode.prev = leadNode;
    newNode.next = shiftNode;
    shiftNode.prev = newNode;
    this.length++;
    // console.log(this);
    // return this.printList();
  }

  remove(index) {
    // validate params later such as -# and outside of the index range

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    const leadNode = this.traverseToIndex(index - 1);

    if (index === this.length - 1) {
      leadNode.next = null;
      this.tail = leadNode;
    }

    const unwantedNode = leadNode.next;
    const follower = unwantedNode.next;
    leadNode.next = follower;
    follower.prev = leadNode;
    this.length--;
  }

  traverseToIndex(index) {
    //can validate params later

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.prepend(1));
myLinkedList.insert(200, 99);
myLinkedList.insert(1, 20);
myLinkedList.remove(0);
myLinkedList.printList();
