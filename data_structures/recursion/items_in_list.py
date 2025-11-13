class CustomNode:
    def __init__(self, val, next):
        self.val = val
        self.next = next


def count_items(node: CustomNode) -> int:
    if node.next is None:
        return 1

    return 1 + count_items(node.next)


node3 = CustomNode(5, None)
node2 = CustomNode(2, node3)
node1 = CustomNode(3, node2)
root = CustomNode(4, node1)
print(count_items(root))
