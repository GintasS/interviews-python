# https://leetcode.com/problems/reverse-linked-list/


def reverseList(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr

        curr = next_temp

    return prev


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


first_node = ListNode(1)
second_node = ListNode(2)
first_node.next = second_node
third_node = ListNode(3)
second_node.next = third_node
fourth_node = ListNode(4)
third_node.next = fourth_node

l1 = first_node

new_head = reverseList(l1)
print(new_head.val)
