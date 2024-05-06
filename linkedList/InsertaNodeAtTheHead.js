// [hackerrank] Insert a node at the head of a linked list
/**
Given a pointer to the head of a linked list, insert a new node before the head. 
The  value in the new node should point to  and the  value should be replaced with a given value. 
Return a reference to the new head of the list. 
The head pointer given may be null meaning that the initial list is empty. 
Function Description Complete the function insertNodeAtHead in the editor below. 

insertNodeAtHead has the following parameter(s):

SinglyLinkedListNode llist: a reference to the head of a list
data: the value to insert in the  field of the new node
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
function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (head === null) {
    head = newNode;
  } else {
    newNode.next = head;
    head = newNode;
  }

  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtHead(llist.head, llistItem);
    llist.head = llist_head;
  }

  printSinglyLinkedList(llist.head, "\n", ws);
  ws.write("\n");

  ws.end();
}
