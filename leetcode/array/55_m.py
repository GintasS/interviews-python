# https://leetcode.com/problems/jump-game/submissions/1823157733/?envType=study-plan-v2&envId=top-interview-150
# TOPICS: Array, DP, Greedy

from typing import List


def canJump(nums: List[int]) -> bool:
    lastPos = len(nums) - 1
    for i in range(len(nums) - 1, -1, -1):
        if i + nums[i] >= lastPos:
            lastPos = i
    return lastPos == 0


# leetcode.com/problems/jump-game/editorial/?envType=study-plan-v2&envId=top-interview-150
# canJump([2, 3, 1, 1, 4])

# O(n)
# O(1)


def canJumpFromPosition(position, nums):
    if position == len(nums) - 1:
        return True
    furthestJump = min(position + nums[position], len(nums) - 1)
    for nextPosition in range(position + 1, furthestJump + 1):
        if canJumpFromPosition(nextPosition, nums):
            return True
    return False


def canJump2(nums):
    return canJumpFromPosition(0, nums)


print(canJump2([2, 3, 1, 1, 4]))
