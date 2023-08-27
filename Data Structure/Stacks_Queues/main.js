class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stacks
// LinkedList
/* 

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  append(value) {
    this.bottom = new Node(value);
    this.top = this.bottom;
  }

  push(value) {
    if (!this.bottom) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      const holdingPointer = this.top;
      //   this.top.next = newNode;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return "Stack is Empty";
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    let i = 0;
    // if (this.length === 1) {
    //   this.bottom = null;
    //   this.top = null;
    // } else {
    //   while (i < this.length - 2) {
    //     currentNode = currentNode.next;
    //     i++;
    //   }
    //   currentNode.next = null;
    //   this.top = currentNode;
    // }
    this.length--;
    return holdingPointer;
  }
}
*/
//Array
class Stack {
  constructor() {
    // this.top = null;
    // this.bottom = null;
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);

    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}
const myStack = new Stack();
myStack.push("Google");
myStack.push("Discord");
myStack.push("Udemy");
myStack.pop();

console.log(myStack);

//Queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.length === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      const nextNode = this.first.next;
      this.first = nextNode;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
