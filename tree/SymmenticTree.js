// [leetcode] 101.Symmentic Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

/**
example1.
* TRUE
          (1)
       /   |  \
    (2)    |   (2)
   /   \   |   /  \
 (3)  (4)  | (3)  (4)

root = [1,2,2,3,4,4,3]

example 2. 
* FALSE
         (1)
       /  |  \
     (2)  |   (2)
       \  |     \
      (3) |     (3)

p = [1,2,2,null,3,null,3]
 
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const invertCheck = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return (
      invertCheck(left.left, right.right) && invertCheck(left.right, right.left)
    );
  };
  return invertCheck(root, root);
};
