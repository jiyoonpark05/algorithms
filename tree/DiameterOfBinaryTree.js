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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const getDepth = (root) => {
    if (!root) {
      return 0;
    }

    const left = getDepth(root.left);
    const right = getDepth(root.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  };

  getDepth(root);
  return maxDiameter;
};

