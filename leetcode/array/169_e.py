# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


# Example 1:

# Input: nums = [3,2,3]
# Output: 3
# Example 2:

# Input: nums = [2,2,1,1,1,2,2]
# Output: 2

# TOPICS: Array, hash Table, D&C, Sorting, Counting
# https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150


from collections import defaultdict


def majorityElement(self, nums):
    if nums is None:
        return None
    if len(nums) == 1:
        return nums[0]

    numb_dict = defaultdict(int)

    for i in range(len(nums)):
        numb_dict[nums[i]] += 1

    for key, value in numb_dict.items():
        if numb_dict[key] > len(nums) // 2:
            return key


# Time: O(n)
# Space: O(n)


# basically, how it works is that divide (imaginably) the array into several parts
# and disregard the equal amount of majority and minority elements,
# selecting a new candidate each time our count for the previous candidate reaches 0.


def majorityElement2(nums):
    count = 0
    candidate = None

    for num in nums:
        if count == 0:
            print(" NEW CANDIDATE ", num)
            print("---")
            candidate = num

        print("CURRENT NUMB: ", num)
        if num == candidate:
            count += 1
        else:
            count -= 1

    return candidate


# O(n)
# O(1)

numbs = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7]
# [7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
# [4, 4, 5, 4, 4, 8, 9, 4, 5, 0, 4, 0]
print(majorityElement2(numbs))
