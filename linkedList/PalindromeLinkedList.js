// 234. Palindrome Linked List
/**
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
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
 * @return {boolean}
 */

// 1. using Array
var isPalindrome = function (head) {
  let nodeArr = [];
  let endPointer = head;
  let nodeCount = 0;

  while (endPointer) {
    nodeArr.push(endPointer.val);
    endPointer = endPointer.next;
    nodeCount++;
  }

  for (let i = 0; i < nodeCount / 2; i++) {
    let lastIdx = nodeCount - 1 - i;
    if (nodeArr[i] !== nodeArr[lastIdx]) return false;
  }
  return true;
};

// 2. using Pointer
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverse(slow);

  while (slow) {
    if (fast.val !== slow.val) return false;

    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

function reverse(root) {
  let prev = null;

  while (root) {
    let nextNode = root.next;
    root.next = prev;
    prev = root;
    root = nextNode;
  }

  return prev;
}
