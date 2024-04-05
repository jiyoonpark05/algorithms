// [leetcode] 236.Lowest Common Ancestor of a Binary Tree
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

/**
example1.
         (3)
       /     \
    (5)       (1)
   /   \      /  \
 (6)  (2)   (0)  (9)
     /   \
  (7)    (4)

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Explanation: The LCA of nodes 5 and 1 is 3.

example 2. 
         (3)
       /     \
    (5)       (1)
   /   \      /  \
 (6)  (2)   (0)  (9)
     /   \
  (7)    (4)

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5

Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  function dfs(node) {
    if (!node) return null;
    if (node === p || node === q) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left && right) return node;

    return left || right;
  }
  return dfs(node);
};
