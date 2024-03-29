function doPreOrder(root, str) {
  if (!root) {
    return str;
  }
  if (!str) {
    str = "";
  }
  if (root) {
    str += root.data + " ";
    str = doPreOrder(root.left, str);
    str = doPreOrder(root.right, str);
  }
  return str;
}
function preOrder(root) {
  // preorder : Root > Left > Right
  let result = doPreOrder(root);
  console.log(result);
}
