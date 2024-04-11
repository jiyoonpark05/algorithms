// [hackerrank] Delete a Node
/**
 Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. 
 The list may be empty after you delete the node. In that case, return a null value.
 
 *example
 list = (0) > (1) > (2) > (3)
 position =  2

 return (0) > (1) > (3) 
 */

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(list, position) {
  let result = [];
  let pointer = 0;

  // Specail case : deleting the head node
  if (position === 0) {
    return list.next;
  }

  let curr = list;
  while (curr) {
    if (pointer === position - 1) {
      curr.next = curr.next.next;
      break;
    }
    result.push(curr.data);
    curr = curr.next;
    pointer++;
  }

  return list;
}
