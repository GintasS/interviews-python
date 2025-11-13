class Node:
    def __init__(self, val, next, prev):
        self.val = val
        self.next = next
        self.prev = prev


head = Node(1, None, None)  # starting node, head

print(head.val)

head.next = Node(2, None, head)

head.next.next = Node(3, None, head.next)

print(head.next.val)


def search_in_linked_list(linked_list: Node, needle: int) -> bool:
    """Search for a value in Linked List.
    Big O: Runtime: O(n)
    Space: O(1)

    Args:
        linked_list (Node): Head node of Linked List
        needle (int): Value to search.

    Returns:
        bool: True if exists in list, false otherwise.
    """

    pointer = head
    while pointer is not None:
        print("CHECKING: ", pointer.val)
        if pointer.val == 4:
            print("YES")
            return True
        else:
            pointer = pointer.next
    return False


def delete_in_linked_list(linked_list: Node, needle: int) -> bool:
    pointer = head
    last_node = None
    while pointer is not None:
        print("CHECKING: ", pointer.val)
        if pointer.val == needle:
            last_node.next = pointer.next
            break
        else:
            pointer = pointer.next
            last_node = pointer.prev

    while last_node.prev is not None:
        last_node = last_node.prev

    return last_node


# search_in_linked_list(head, 2)
node = delete_in_linked_list(head, 3)
print(node.val)
print(node.next.val)
