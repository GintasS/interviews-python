from graph_exer import Node

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


def dfs3(start_node, target):
    if start_node.val == target:
        return True
    start_node.is_visited = True
    if len(start_node.connections) > 0:
        for node in start_node.connections:
            print(node.name)
            if node.is_visited is True:
                print("IGNORING")
                continue

            node.is_visited = True
            is_found = dfs3(node, target)
            if is_found is True:
                return True

    return False


print(dfs3(start, 1))
