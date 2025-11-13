# TOPICS: String
# https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150


class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """

        # check if s has space
        # if not, return s length ( its a word)

        # split s by space
        # get the last split
        # go through the last split and ignore spaces
        # return the length of this str

        if " " not in s:
            return len(s)

        words = s.split(" ")

        if len(words) > 1:
            last_word = self.get_last_word(words)
            return self.count_chars_without_space(last_word)
        else:
            return len(s) - 1

    def get_last_word(self, words):
        i = len(words) - 1
        while i >= 0:
            if words[i] == "":
                i -= 1
            else:
                return words[i]

    def count_chars_without_space(self, s):
        sum = 0
        for char in s:
            if char == " ":
                continue
            else:
                sum += 1
        return sum
