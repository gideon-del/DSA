let user = {
  age: 54,
  name: "Kyle",
  magic: true,
  scream() {
    console.log("AHHHHHH!");
  },
};

user.age; //O(1)
user.spell = "Abra kadabra"; //O(1)
user.scream(); //O(1)
//Hash Table implementation
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let hashedKey = this._hash(key);
    if (!this.data[hashedKey]) {
      this.data[hashedKey] = [];
    }
    this.data[hashedKey].push([key, value]);
  }
  get(key) {
    let hashedKey = this._hash(key);
    const currentBouket = this.data[hashedKey];
    if (currentBouket) {
      for (let i = 0; i < currentBouket.length; i++) {
        if (currentBouket[i][0] === key) {
          return currentBouket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 3000);

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  const keys = {};
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (keys[current] !== undefined) {
      return current;
    }
    keys[current] = current;
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
