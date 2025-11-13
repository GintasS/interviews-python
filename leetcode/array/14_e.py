# https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
# TOPICS: Array, String, Trie


def longestCommonPrefix(strs):
    if not strs:
        return ""

    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix) and prefix:
            prefix = prefix[:-1]

        if not prefix:
            return ""

    return prefix


longestCommonPrefix(["flow", "flower", "flo"])
