# https://leetcode.com/problems/reverse-linked-list/

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def middleNode(self, head: ListNode) -> ListNode:
    arr = [head]
    while arr[-1].next:
        arr.append(arr[-1].next)
    return arr[len(arr) // 2]


# O(n)
# O(n)


def middleNode_long(self, head):
    """
    :type head: Optional[ListNode]
    :rtype: Optional[ListNode]
    """
    middle_node = None
    cursor = head
    length = 0
    middle_node_index = 0
    while cursor != None:
        cursor = cursor.next
        length += 1

    middle_node_index = length // 2

    cursor = head
    counter = 0
    while cursor != None:
        if counter == middle_node_index:
            return cursor
        cursor = cursor.next
        counter += 1


class Solution:
    def middleNode(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
