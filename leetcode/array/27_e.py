# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

# Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
# Return k.

# Example 1:
# Input: nums = [3,2,2,3], val = 3
# Output: 2, nums = [2,2,_,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 2.
# It does not matter what you leave beyond the returned k (hence they are underscores).

# TOPICS: Array, Two Pointers, Easy
# https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150


def removeElement(nums, val):
    """
    :type nums: List[int]
    :type val: int
    :rtype: int
    """
    writer_p = 0
    reader_p = 0

    while reader_p < len(nums):
        if nums[reader_p] == val:
            reader_p += 1
        else:
            nums[writer_p] = nums[reader_p]
            reader_p += 1
            writer_p += 1
    return writer_p


nums = [4, 7, 8, 9, 4]
val = 4
removeElement(nums, val)
print(nums)

# Time: O(n)
# Space: O(1)
