
![alt text](image.png)

# Simple truths

* Search algorithm for graphs (including trees)
* First searches at immediate neighbours, later it goes deeper.
* Needs to have the queue to hold the nodes, as well as list/bool values at each node to check if it was visited.

# Big O

Runtime: O(E + V)
Space: O(V + E)

E - neighbours
V - nodes

# Problems

* visiting the same node twice (bool value, list of visited)

# Real life usage

* GPS