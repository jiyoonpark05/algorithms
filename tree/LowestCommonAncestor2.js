// [hackerrank] Binary Search Tree : Lowest Common Ancestor

// You are given pointer to the root of the binary search tree and two values  and . You need to return the lowest common ancestor (LCA) of v1 and v2 in the binary search tree.

/**
example1.
        
    (2)       
   /   \     
 (1)   (3)   
      /   \
   (4)    (5)
           |
          (6)

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

In the diagram above, the lowest common ancestor of the nodes 4 and 6 is the node . Node 3 is the lowest node which has nodes 4 and 6 as descendants.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function lca(root, v1, v2) {
  const dfs = (node) => {
    if (!node) return null;
    if (node.data === v1 || node.data === v2) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left && right) return node;

    return left || right;
  };

  return dfs(root);
}

function processData(input) {
  const lines = input.trim().split("\n");
  const n = parseInt(lines[0]);
  const values = lines[1].split(" ").map(Number);
  const [v1, v2] = lines[2].split(" ").map(Number);

  let root = new Node(values[0]);
  for (let i = 1; i < n; i++) {
    insert(root, values[i]);
  }

  const result = lca(root, v1, v2);
  console.log(result.data);
}

function insert(root, data) {
  if (data <= root.data) {
    if (root.left == null) {
      root.left = new Node(data);
    } else {
      insert(root.left, data);
    }
  } else {
    if (root.right == null) {
      root.right = new Node(data);
    } else {
      insert(root.right, data);
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
