# TOPICS: Array, Math, Two Pointers
# https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150


def reverse_list(numbs):
    index = 0
    for i in range(len(numbs) - 1, -1, -1):
        temp = numbs[index]
        numbs[index] = numbs[i]
        numbs[i] = temp
        index += 1
        if index == len(numbs) // 2:
            break

    return numbs


print("A")
print(reverse_list([1, 2, 3]))
a = reversed([1, 2, 3])


def rotate(nums: List[int], k: int) -> None:
    n = len(nums)
    k %= n

    reverse(nums, 0, n - 1)
    print(nums)
    reverse(nums, 0, k - 1)
    print(nums)
    reverse(nums, k, n - 1)
    print(nums)


rotate([1, 2, 3, 4, 5], 3)
# end = 4


# k = 2


def reverse2(nums: list, start: int, end: int) -> None:
    while start < end:
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start = start + 1
        end = end - 1


def rotate2(nums: List[int], k: int) -> None:
    n = len(nums)
    k %= n

    reverse2(nums, 0, n - 1)
    print(nums)
    reverse2(nums, 0, k - 1)
    print(nums)
    reverse2(nums, k, n - 1)
    print(nums)


rotate2([1, 2, 3, 4, 5], 3)
# end = 4


# k = 2
