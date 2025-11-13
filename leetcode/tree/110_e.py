# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution(object):
    def isBalanced(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: bool
        """
        if root is None:
            return True

        left_depth = self.dfs(root.left, 1, 1)
        right_depth = self.dfs(root.right, 1, 1)

        print(left_depth, " ", right_depth)
        if left_depth == 0 and right_depth == 0:
            return True

        return abs(left_depth - right_depth) <= 1

    def dfs(self, root, left_depth, right_depth):
        if root is None:
            return 0

        print("VAL: ", root.val)

        if root.left is not None:
            left_depth = self.dfs(root.left, left_depth + 1, right_depth)
        if root.right is not None:
            right_depth = self.dfs(root.right, left_depth, right_depth + 1)

        # print(left_depth_abs, " ", right_depth_abs)
        print(left_depth, " ", right_depth)
        return max(left_depth, right_depth)
