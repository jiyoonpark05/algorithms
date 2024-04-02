// [leetcode] 100.Same Tree

/**
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

example 1. 
* TRUE
    (1)         (1)
   /    \      /    \
 (2)    (3)  (2)    (3)
       
p = [1,2,3], q = [1,2,3]

example 2. 
* FALSE
    (1)   (1)
   /        \
 (2)         (2)

p = [1,2], q = [1,null,2]


example 3. 
* FALSE
     (1)         (1)
    /   \       /    \
  (2)    (1)  (1)    (2)

p = [1,2,1], q = [1,1,2]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const checkNode = (p,q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;

        return (p.val === q.val) && checkNode(p.left, q.left) && checkNode(p.right, q.right)
    }
    return checkNode(p,q);
};