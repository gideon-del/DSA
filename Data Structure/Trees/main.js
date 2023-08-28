class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.level = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    let leaderNode = this.root;

    if (!this.root) {
      this.root = newNode;
    } else {
      while (leaderNode.left || leaderNode.right) {
        if (leaderNode.value > value) {
          leaderNode = leaderNode.left;
        } else if (!leaderNode.right) {
          break;
        } else {
          leaderNode = leaderNode.right;
        }
      }

      if (leaderNode.value > value) {
        leaderNode.left = newNode;
      } else {
        leaderNode.right = newNode;
      }
      console.log(leaderNode);
    }
    return this;
  }
  lookup(value) {
    let leaderNode = this.root;
    while (leaderNode) {
      if (leaderNode.value === value) {
        return leaderNode;
      }
      if (leaderNode.value > value) {
        leaderNode = leaderNode.left;
      } else {
        leaderNode = leaderNode.right;
      }
    }
    return leaderNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);

tree.insert(15);
tree.insert(170);
