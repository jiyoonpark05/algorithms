function doInOrder(root, str) {
  if (!root) {
    return str;
  }

  if (!str) {
    str = "";
  }

  if (root) {
    str = doInOrder(root.left, str);
    str += root.data + " ";
    str = doInOrder(root.right, str);
  }
  return str;
}
function inOrder(root) {
  const result = doInOrder(root);
  console.log(result);
}
