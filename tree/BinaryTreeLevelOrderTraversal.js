/**

 example

      (3)
     /    \
   (9)    (20)
          /   \
        (15)   (7)
        
Input : root = [3,9,20,null,null,15,7]
Output : [[3],[9,20],[15,7]]
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while(queue.length) {
    let levelArray = [];
    let levelSize = queue.length;

    while(levelSize) {
        let current = queue.shift();

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);

        levelArray.push(current.val);
        levelSize --;
    }
        result.push(levelArray);
  } 
    return result;
};