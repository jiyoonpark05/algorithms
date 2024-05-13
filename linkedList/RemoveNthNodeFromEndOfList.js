// [leetcode]19. Remove Nth Node From End of List

/**
 Given the head of a linked list, remove the nth node from the end of the list and return its head.

 * example 1.
 Input: head = [1,2,3,4,5], n = 2
 Output: [1,2,3,5]

* example 2.
 Input: head = [1], n = 1
 Output: []
 
* example 3.
 Input: head = [1,2], n = 1
 Output: [1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // move fast pointer
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
