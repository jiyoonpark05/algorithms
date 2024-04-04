## Message Delivery System
In this task, a basic message delivery service is to be implemented that has a rate-limiting algorithm that drops any message that has already been delivered in the last `k seconds`

**Given** </br>

- Integer `k`
- A list of `messages` as an array of strings
- A sorted integer array `timestamp`s representing the time at which the message arrived
- stack "true" if the message is delivered and "false" otherwise.
  
### Example
n = 6  </br>
timestamps = [1, 4, 5, 10, 11, 14) </br>
messages = ["hello", "bye", "bye", "hello", "bye", "hello"]  </br>
k = 5

</br>

| Timestamps| Message request  | Last Same Message at the time | Delivered |
| --------- | ---------------- |------------------------------ |---------- |
| 1         | Hello            | -                             | true      |
| 4         | Bye              | -                             | true      |
| 5         | Bye              | 4                             | false     |
| 10        | Hello            | 1                             | true      |
| 11        | Bye              | 5                             | true      |
| 14        | Hello            | 10                            | false     |

</br>

answer is `["true","true","false","true","true","false"]`

### Returns

string(n): the status of the messages

### Constraints

- 1 ≤ n ≤ 10^5
- 1 ≤ |messages[i]| ≤ 15
- 1 ≤ timestamps[i] ≤ 10^6
- It is guaranteed that all the messages consist of lowercase English letters only.



