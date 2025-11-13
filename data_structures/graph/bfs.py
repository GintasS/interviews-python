from collections import deque
from graph_exer import Node


def bfs(start_node, target):
    queue = []
    queue.append(start_node)
    while len(queue) > 0:
        node = queue.pop(0)
        print(node.name)
        if node.is_visited is True:
            print("WAS VISITED")
            continue
        if node.val == target:
            return True
        node.is_visited = True
        new_nodes = node.connections
        queue.extend(new_nodes)
        print("ABC")
    return False


def bfs2(start_node, target):
    queue = deque()
    queue.append(start_node)
    searched = []
    while len(queue) > 0:
        node = queue.popleft()
        print(node.name)
        if node in searched:
            continue
        if node.val == target:
            return True
        new_nodes = node.connections
        queue.extend(new_nodes)
        searched.append(node)
    return False


start = Node(5, "start")
node1 = Node(4, "node1")
node2 = Node(3, "node2")
node3 = Node(2, "node3")
node4 = Node(1, "node4")

start.add_connections([node1, node2])
node1.add_connections([start, node3])
node2.add_connections([start, node4])

node3.add_connections([node1])
node4.add_connections([node2])

print(bfs(start, 2))
