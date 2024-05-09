// Dynamic Array
/**
Declare a 2-dimensional array,arr, of  empty arrays. 
All arrays are zero indexed.
Declare an integer,lastAnswer , and initialize it to 0.

There are 2 types of queries, given as an array of strings for you to parse:

Query: 1 x y
    1. Let idx = ((x (+) lastAnswer) % n)
    2. Append the integer y to stt[idx]
Query: 2 x y
    1. Let idx = ((x (+) lastAnswer) % n)
    2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
    3. Store the new value of lastAnswer to an answers array.
 */
