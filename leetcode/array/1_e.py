from literalai import List

# https://leetcode.com/problems/two-sum/description/
# TOPICS: Array, Hash Table


def twoSum(self, nums: List[int], target: int) -> List[int]:
    hashmap = {}
    for i in range(len(nums)):
        complement = target - nums[i]
        if complement in hashmap:
            return [i, hashmap[complement]]
        hashmap[nums[i]] = i
    # Return an empty list if no solution is found
    return []


print(twoSum([1, 3, 4, 7, 10, 1, 4, 6], 4))
