// [hackerrank] Find Merge Point of Two Lists
/**
Given pointers to the head nodes of  linked lists that merge together at some point, find the node where the two lists merge. The merge point is where both lists point to the same node, i.e. they reference the same memory location. It is guaranteed that the two head nodes will be different, and neither will be NULL. If the lists share a common node, return that node's  value.

Note: After the merge point, both lists will share the same node pointers.

Example

In the diagram below, the two lists converge at Node x:

[List #1] a--->b--->c
                     \
                      x--->y--->z--->NULL
                     /
     [List #2] p--->q
Function Description

Complete the findMergeNode function in the editor below.

findMergeNode has the following parameters:

SinglyLinkedListNode pointer head1: a reference to the head of the first list
SinglyLinkedListNode pointer head2: a reference to the head of the second list
 */

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let pointer1 = headA;
  let pointer2 = headB;

  // Traverse until both pointers are at the same node or both reach the end
  while (pointer1 !== pointer2) {
    // Move pointer1 to the next node or to the head of the other list if it reaches the end
    pointer1 = pointer1.next ? pointer1.next : headB;
    // Move pointer2 to the next node or to the head of the other list if it reaches the end
    pointer2 = pointer2.next ? pointer2.next : headA;
  }

  // Return the value of the node where the pointers meet (merge point)
  return pointer1.data;
}
