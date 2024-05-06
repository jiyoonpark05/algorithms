// [Hackerrank] Delete duplicate-value nodes from a sorted linked list

/**
You are given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. Delete nodes and return a sorted list with each distinct value in the original list. The given head pointer may be null indicating that the list is empty.

* Example
head refers to the first node in the list (1) > (2) > (2) > (3) > (3) > (3) > (3) > Null
Remove 1 of the 2 data values and return head. pointing to the revised list (1) > (2) > (3) > Null
*/

function removeDuplicates(list) {
  let slow = list;
  let fast = list.next;
  const appear = [slow.data];

  while (fast) {
    if (!appear.includes(fast.data)) {
      slow.next = fast;
      slow = slow.next; // Move slow to the next node
      appear.push(fast.data);
    }
    fast = fast.next;
  }

  // Set the next of the last distinct node to null
  slow.next = null;

  return list;
}
