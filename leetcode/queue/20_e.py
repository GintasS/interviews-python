# https://leetcode.com/problems/valid-parentheses/description/
# String Stack


class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) == 1:
            return False

        stack = []
        popped = ""
        for i in range(len(s)):
            if s[i] in ["{", "(", "["]:
                stack.append(s[i])
            else:
                if len(stack) > 0:
                    popped = stack.pop()
                else:
                    return False

                if s[i] == "]" and popped != "[":
                    return False
                elif s[i] == "}" and popped != "{":
                    return False
                elif s[i] == ")" and popped != "(":
                    return False

        return len(stack) == 0
