# https://leetcode.com/problems/valid-anagram/
# Array Hash Table Sorting


def isAnagram(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    dict_s, dict_t = {}, {}

    if len(s) != len(t):
        return False

    for let in s:
        if let in dict_s:
            dict_s[let] += 1
        else:
            dict_s[let] = 1

    for let in t:
        if let in dict_t:
            dict_t[let] += 1
        else:
            dict_t[let] = 1

    for let in dict_t.keys():
        if dict_s.get(let) != dict_t[let]:
            return False
    return True
