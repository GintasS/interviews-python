## You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

# Example 1:

# Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

# TOPICS: array two pointers sorting, EASY
# https://leetcode.com/problems/merge-sorted-array?envType=study-plan-v2&envId=top-interview-150


def merge(nums1, m, nums2, n):
    """
    Do not return anything, modify nums1 in-place instead.
    """
    # Make a copy of the first m elements of nums1.
    nums1_copy = nums1[:m]

    # Read pointers for nums1Copy and nums2 respectively.
    p1 = 0
    p2 = 0

    # Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for p in range(n + m):
        # We also need to ensure that p1 and p2 aren't over the boundaries
        # of their respective arrays.
        if p2 >= n or (p1 < m and nums1_copy[p1] <= nums2[p2]):
            nums1[p] = nums1_copy[p1]
            p1 += 1
        else:
            nums1[p] = nums2[p2]
            p2 += 1


nums1 = [4, 7, 9, 0, 0, 0]
nums2 = [2, 5, 10]
m = 3
n = 3

merge(nums1, m, nums2, n)
print(nums1)

# Runtime: Big O(m + n)
# Space: O(1)


def merge2(nums1, m, nums2, n):
    # Write the elements of num2 into the end of nums1.
    for i in range(n):
        nums1[i + m] = nums2[i]

    # Sort nums1 list in-place.
    nums1.sort()


nums1 = [4, 7, 9, 0, 0, 0]
nums2 = [2, 5, 10]
m = 3
n = 3

merge2(nums1, m, nums2, n)
print(nums1)

# Time complexity: O((n+m)log(n+m)).
# Space: O(n)
