// [hackerrank] Left Rotation
/**
A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. 
Given an integer,d, rotate the array that many steps left and return the result.

* Example
d = 2
arr = [1,2,3,4,5]
After 2 rotations, arr = [3,4,5,1,2]

* Function Description
Complete the rotateLeft function in the editor below.

* RotateLeft has the following parameters:
    1. int d: the amount to rotate by
    2. int arr[n]: the array to rotate
 */

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  while (d > 0) {
    const rotateValue = arr.shift();
    arr.push(rotateValue);
    d--;
  }
  return arr;
}
