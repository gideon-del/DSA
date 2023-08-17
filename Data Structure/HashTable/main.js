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
