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
      return undefined;
    }
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index === this.length - 1) {
      this.append(value);
      return this;
    }

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    const next = currentNode.next;
    const newNode = new Node(value);
    newNode.next = next;
    currentNode.next = newNode;
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
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(5);
myLinkedList.insert(1, 6);
console.log(myLinkedList.printList());
