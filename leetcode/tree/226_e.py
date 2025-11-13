# https://leetcode.com/problems/invert-binary-tree/description/

# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def invertTree(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: Optional[TreeNode]
        """
        if root != None:
            queue = []
            queue.append(root)

            while len(queue) != 0:
                current_node = queue.pop()
                temp = current_node.left
                current_node.left = current_node.right
                current_node.right = temp

                if current_node.left != None:
                    queue.append(current_node.left)
                if current_node.right != None:
                    queue.append(current_node.right)

        return root


def invertTree_rec(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root:
        return None

    right = invertTree_rec(root.right)
    left = invertTree_rec(root.left)
    root.left = right
    root.right = left
    return root
