// [leetcode] 876.Middle of the Linked List
/**
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
  
*example
             *
(1) > (2) > (3) > (4) > (5)

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fastPointer = 0;
  let node = head;

  while (head.next != null) {
    head = head.next;
    fastPointer++;
  }

  for (let i = 0; i < fastPointer / 2; i++) {
    node = node.next;
  }

  return node;
};
