
![alt text](image.png)

# Simple truths

* data structure
* nodes connected to each other
* can be either single linked list or double linked list
* can have its elements stored anywhere in memory, no need for ocntigous space.
* write > read
* To remove or add elements to the back or at the end.
* extra storage needed for references, thus storing small data such as characters or boolean is more expensive then other means.
* Sequential access

# Big O

| operation | cost |
| ----------| -----|
| read | O(n) |
| write | O(1) |
| remove | O(1) |

Space depends on the algorithm.
Remove,  access single assumes that we need to navigate to the node first, thus O(n).


# Declare array in Python

import array

arr = array.array("i", [1, 2, 3, 4])  # i stands for integer
