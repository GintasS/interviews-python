from collections import defaultdict

# vhttps://leetcode.com/problems/contains-duplicate/description/
# TOPICS: Hash Table, Array, Sorting


class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        nums_dict = defaultdict(int)

        for i in range(len(nums)):
            nums_dict[nums[i]] += 1

        for key, value in nums_dict.items():
            if value > 1:
                return True

        return False

        # return len(set(nums)) != len(nums)
        # O(n) O(N)
