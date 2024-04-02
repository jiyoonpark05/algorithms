/*
      (1)
     /    \
   (2)    (3)
  /   \
(4)   (5)

*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  makeNode(left, data, right) {
    const newNode = new Node();
    newNode.data = data;
    newNode.left = left;
    newNode.right = right;

    return newNode;
  }

  // [L > Root > R] : 4 > 2 > 5 > 1 > 3
  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // [Root > L > R] : 1 > 2 > 4 > 5 > 3
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // [L > R > Root] : 4 > 5 > 2 > 3 > 1
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

class Test {
  constructor() {
    this.t = new Tree();
    const n4 = this.t.makeNode(null, 4, null);
    const n5 = this.t.makeNode(null, 5, null);
    const n2 = this.t.makeNode(n4, 2, n5);
    const n3 = this.t.makeNode(null, 3, null);
    const n1 = this.t.makeNode(n2, 1, n3);

    this.t.root = n1;
    this.print();
  }
  print() {
    console.log(this.t.inorder(this.t.root));
  }
}

const test = new Test();
