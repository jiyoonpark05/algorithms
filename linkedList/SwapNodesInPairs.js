//24. Swap Nodes in Pairs
/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 
 * example 1.
 
 (1) -> (2) -> (3) -> (4)
 (2) -> (1) -> (4) -> (3)
 
 Input head = [1,2,3,4]
 Output = [2,1,4,3]
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
var swapPairs = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    let p1 = head;
    let p2 = head.next;

    prev.next = p2;
    p1.next = p2.next;
    p2.next = p1;

    prev = p1;
    head = p1.next;
  }
  return dummy.next;
};
