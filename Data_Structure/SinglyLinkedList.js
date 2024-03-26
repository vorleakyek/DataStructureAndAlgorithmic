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
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // 1 --> 10 --> 5 --> 6
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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

    const newNode = new Node(value);
    const leadNode = this.traverseToIndex(index - 1);
    const temptNode = leadNode.next;
    leadNode.next = newNode;
    newNode.next = temptNode;
    this.length++;
    // return this.printList();
  }

  remove(index) {
    // validate params later such as -# and outside of the index range

    if (index === 0) {
      this.head = this.head.next;
    }
    const leadNode = this.traverseToIndex(index - 1);

    if (index === this.length - 1) {
      leadNode.next = null;
      this.tail = leadNode;
    }

    const unwantedNode = leadNode.next;
    leadNode.next = unwantedNode.next;
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next; //third node
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(200, 99);
myLinkedList.insert(3, 20);
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
