// const strings = ["a", "b", "c", "d"];

// strings[2];

// push
// strings.push("e"); O(1)

// pop
// strings.pop(); O(1)

// unshift

// strings.unshift("x"); O(n)

// splice
// strings.splice(2, 0, "alien"); O(n)

// console.log(strings);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    //O(1)
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    //O(1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    //O(n)
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    //O(n)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();

newArr.push("Array");
newArr.push("you");
newArr.push("!");
newArr.delete(1);
console.log(newArr);
