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
    let currentNode = this.root;

    if (!this.root) {
      this.root = newNode;
    } else {
      while (currentNode.left || currentNode.right) {
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (!currentNode.right) {
          break;
        } else {
          currentNode = currentNode.right;
        }
      }

      if (currentNode.value > value) {
        currentNode.left = newNode;
      } else {
        currentNode.right = newNode;
      }
    }
    return this;
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode || false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            } else {
              parentNode.left = currentNode.left;
            }
          }
        } else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;
          if (!parentNode) {
            this.root = currentNode.right;
          } else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftMostChild = currentNode.right.left;
          let leftMostParent = null;
          while (leftMostChild.left) {
            leftMostParent = leftMostChild;
            leftMostChild = leftMostChild.left;
          }
          leftMostParent.left = leftMostChild.right;
          leftMostChild.left = currentNode.left;
          leftMostChild.right = currentNode.right;

          if (parentNode.value > leftMostChild.value) {
            parentNode.left = leftMostChild;
          } else {
            parentNode.right = leftMostChild;
          }
        }
        return true;
      }
    }
    return false;
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
tree.remove(20);
console.log(tree.root);
