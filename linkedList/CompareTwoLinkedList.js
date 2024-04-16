// [hackerrank] Compare two linked list
/*
You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return . Otherwise, return .

* Example
List 1 : (1) > (2) > (3) > Null
List 2 : (1) > (2) > (3) > (4) > Null

The two lists have equal data attributes for the first 3 nodes. List2 is longer, though, so the lists are not equal. Return 0.
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
function CompareLists(list1, list2) {
  while (list1 || list2) {
    if (!list1 || !list2) return 0;
    if (list1.data !== list2.data) return 0;

    list1 = list1.next;
    list2 = list2.next;
  }

  if (list1 || list2) return 0;

  return 1;
}
