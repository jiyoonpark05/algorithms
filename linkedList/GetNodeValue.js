//[hackerrank] Get Node Value
/**
Given a pointer to the head of a linked list and a specific position, determine the data value at that position. 
Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on. 
 
* example 

head refers to (3) > (2) > (1) > (0) > NULL
positionFromTail = 2

Each of the data value matches its distance from the tail.
The value 2 is at the desired position
 */

function getNode(list, positionFromTail) {
  let fast = list;
  let slow = list;

  for (let i = 0; i < positionFromTail; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.data;
}
