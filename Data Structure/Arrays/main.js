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

function reverese(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm thats not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
function reverse2(str) {}
console.log(reverese("Hi My Name is Gideon"));

function mergerSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergerSortedArrays([1, 3, 4, 5], [1, 2, 3, 4, 5]);
