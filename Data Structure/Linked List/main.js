// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
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
    // let currentHead = this.head;
    // for (let i = 0; i < this.length; i++) {
    //   if (currentHead.next === null) {
    //     break;
    //   }
    //   currentHead = currentHead.next;
    // }

    // currentHead.next = {
    //   value: value,
    //   next: null,
    // };
    // this.tail.next = {
    //   value: value,
    //   next: null,
    // };
    // this.tail = {
    //   value: value,
    //   next: null,
    // };
    // this.length++;
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    let currentNode = this.head;
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    // for (let i = 0; i < index - 1; i++) {
    //   currentNode = currentNode.next;
    // }
    // const next = currentNode.next;
    // const newNode = new Node(value);
    // newNode.next = next;
    // currentNode.next = newNode;
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
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
myLinkedList.append(5).append(6).prepend(5).insert(1, 6).remove(2).remove(1);
