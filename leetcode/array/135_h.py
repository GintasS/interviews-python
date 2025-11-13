# https://leetcode.com/problems/candy/description/?envType=study-plan-v2&envId=top-interview-150
# Array, Greedy

from literalai import List


def candy_brute_force(ratings: List[int]) -> int:
    candies = [1] * len(ratings)
    hasChanged = True
    while hasChanged:
        hasChanged = False
        for i in range(len(ratings)):
            if (
                i != len(ratings) - 1
                and ratings[i] > ratings[i + 1]
                and candies[i] <= candies[i + 1]
            ):
                candies[i] = candies[i + 1] + 1
                hasChanged = True
            if i > 0 and ratings[i] > ratings[i - 1] and candies[i] <= candies[i - 1]:
                candies[i] = candies[i - 1] + 1
                hasChanged = True
    return sum(candies)


# candy_brute_force([1, 0, 2])


# Time: O(n^2)
# Space: O(n)


def candy_good(ratings: List[int]) -> int:
    sum = 0
    n = len(ratings)
    left2right = [1] * n
    right2left = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            left2right[i] = left2right[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            right2left[i] = right2left[i + 1] + 1
    for i in range(n):
        sum += max(left2right[i], right2left[i])
    return sum


#  0 > 1
#  2 > 0
#  PRIDEDAM
# 1 1 2


# 0 > 2
# 1 > 0
# PRIEDAM

# 2 1 2
print(candy_good([1, 3, 2, 4]))


# 1
