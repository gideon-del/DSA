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
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
console.log(myLinkedList);
