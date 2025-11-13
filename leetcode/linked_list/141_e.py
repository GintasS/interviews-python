# vhttps://leetcode.com/problems/linked-list-cycle/description/
#

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


def hasCycle(head):
    """
    :type head: ListNode
    :rtype: bool
    """
    fast_pointer = head
    slow_pointer = head

    while fast_pointer is not None and fast_pointer.next is not None:
        fast_pointer = fast_pointer.next.next
        slow_pointer = slow_pointer.next

        if fast_pointer == slow_pointer:
            return True
    return False


def hasCycle2(self, head: ListNode) -> bool:
    nodes_seen = set()
    current = head
    while current is not None:
        if current in nodes_seen:
            return True
        nodes_seen.add(current)
        current = current.next
    return False
