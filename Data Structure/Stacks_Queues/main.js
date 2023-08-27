class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stacks
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
      this.top.next = newNode;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.bottom) {
      return "Stack is Empty";
    }
    let currentNode = this.bottom;
    let i = 0;
    if (this.length === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      while (i < this.length - 2) {
        currentNode = currentNode.next;
        i++;
      }
      currentNode.next = null;
      this.top = currentNode;
    }
    this.length--;
    return this;
  }
}
const myStack = new Stack();
myStack.push("Google");
myStack.push("Discord");
myStack.pop();

console.log(myStack);
