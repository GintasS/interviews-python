# https://leetcode.com/problems/merge-two-sorted-lists/
# TOPICS:
class ListNode(object):
    def __init__(self, val=0, group="", next=None):
        self.val = val
        self.group = group
        self.next = next


def mergeTwoLists_rec(l1, l2):
    if l1 is None:
        return l2
    elif l2 is None:
        return l1
    elif l1.val < l2.val:
        print("L1: WE ARE GOING TO RETURN LATER: ", l1.val)
        l1.next = mergeTwoLists_rec(l1.next, l2)
        return l1
    else:
        print("L2: WE ARE GOING TO RETURN LATER: ", l2.val)
        l2.next = mergeTwoLists_rec(l1, l2.next)
        return l2


first_node = ListNode(1, "l1")
second_node = ListNode(2, "l1")
first_node.next = second_node
third_node = ListNode(3, "l1")
second_node.next = third_node
fourth_node = ListNode(4, "l1")
third_node.next = fourth_node

l1 = first_node

fifth_node = ListNode(3, "l2")
sixt_node = ListNode(4, "l2")
fifth_node.next = sixt_node
seventh_node = ListNode(6, "l2")
sixt_node.next = seventh_node
eighth_node = ListNode(8, "l2")
seventh_node.next = eighth_node

l2 = fifth_node

# new_list = mergeTwoLists_rec(l1, l2)


# new_list_pointer = new_list
# while new_list_pointer is not None:
# print(new_list_pointer.val, " ", new_list_pointer.group)
# new_list_pointer = new_list_pointer.next

# First call: comparing first node (1) vs fifth_node (3)
# Fifth node is larger, thus we are going to change hte first node (1) pointer to whether is larger


def mergeTwoLists(l1, l2):
    # maintain an unchanging reference to node ahead of the return node.
    prehead = ListNode(-1)

    prev = prehead
    while l1 and l2:
        if l1.val <= l2.val:
            prev.next = l1
            l1 = l1.next
        else:
            prev.next = l2
            l2 = l2.next
        prev = prev.next

    # At least one of l1 and l2 can still have nodes at this point, so connect
    # the non-null list to the end of the merged list.
    prev.next = l1 if l1 is not None else l2

    return prehead.next


new_list = mergeTwoLists(l1, l2)
new_list_pointer = new_list
while new_list_pointer is not None:
    print(new_list_pointer.val, " ", new_list_pointer.group)
    new_list_pointer = new_list_pointer.next
