# https://leetcode.com/problems/climbing-stairs/description/


def climbStairs(n: int) -> int:
    return climb_Stairs_brute(0, n)


def climb_Stairs_brute(i: int, n: int) -> int:
    if i > n:
        return 0
    if i == n:
        return 1
    return climb_Stairs_brute(i + 1, n) + climb_Stairs_brute(i + 2, n)


# BIG O: O(2^n), Space O(n)

print(climb_Stairs_brute(0, 4))

# climb_Stars(0, 4)

# climb_stars(1, 4) ir climb_Stairs(2, 4)


class Solution:
    def climbStairs(self, n: int) -> int:
        memo = [0] * (n + 1)
        return self.climb_Stairs(0, n, memo)

    def climb_Stairs(self, i: int, n: int, memo: List[int]) -> int:
        if i > n:
            return 0
        if i == n:
            return 1
        if memo[i] > 0:
            return memo[i]
        memo[i] = self.climb_Stairs(i + 1, n, memo) + self.climb_Stairs(i + 2, n, memo)
        return memo[i]


# O(n)
# O(n)


# Also, it can be solved as a fibonacci number
# Fib(n)=Fib(n−1)+Fib(n−2)
