class CustomNode:
    def __init__(self, val, next):
        self.val = val
        self.next = next


def find_max_number(node: CustomNode) -> int:
    if node.next is None:
        return node.val

    return max(node.val, find_max_number(node.next))


node3 = CustomNode(5, None)
node2 = CustomNode(2, node3)
node1 = CustomNode(3, node2)
root = CustomNode(4, node1)
print(find_max_number(root))

# return 4 or max
#             return 3 or max
#                         return 2 or max
#                                     return 5
