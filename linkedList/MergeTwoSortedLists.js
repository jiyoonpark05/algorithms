// [leetcode] 21.Merge Two Sorted Lists
/**
 You are given the heads of two sorted linked lists list1 and list2
 Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 Return the head of the merged linked list.

 * example
 (1) > (2) > (4)
 (1) > (3) > (4)

 (1) > (1) > (2) > (3) > (4) > (4)

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergeList = new ListNode();
  let head = mergeList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      mergeList.next = new ListNode(list2.val);
      list2 = list2.next;
    } else {
      mergeList.next = new ListNode(list1.val);
      list1 = list1.next;
    }
    mergeList = mergeList.next;
  }

  if (list1) {
    mergeList.next = list1;
  }

  if (list2) {
    mergeList.next = list2;
  }

  return head.next;
};
