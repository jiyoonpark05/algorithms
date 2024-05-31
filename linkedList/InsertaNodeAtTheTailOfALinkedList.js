// [hacker rank]Insert a Node at the Tail of a Linked List
/**
 * Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.
  
 * example 1.
    First the linked list is NULL. After inserting 141, the list is 141 -> NULL.
    After inserting 302, the list is 141 -> 302 -> NULL.
    After inserting 164, the list is 141 -> 302 -> 164 -> NULL.
    After inserting 530, the list is 141 -> 302 -> 164 -> 530 -> NULL. After inserting 474, the list is 141 -> 302 -> 164 -> 530 -> 474 -> NULL, which is the final list.
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
function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (head == null) {
    return newNode;
  }

  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = newNode;

  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtTail(llist.head, llistItem);
    llist.head = llist_head;
  }

  printSinglyLinkedList(llist.head, "\n", ws);
  ws.write("\n");

  ws.end();
}
