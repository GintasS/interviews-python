def binary_search(haystack: list, needle: int) -> int:
    """Searches for an integer in a list using Binary Search.
    Big O: Runtime: O(log n)
    Space: O(1)

    Args:
        haystack (list): List to search for a needle.
        needle (int): Integer to search for.

    Returns:
        int: index in the list if found, -1 otherwise.
    """
    if haystack is None:
        return -1

    left = 0
    right = len(haystack) - 1
    while left <= right:
        middle_index = (left + right) // 2

        if haystack[middle_index] == needle:
            return middle_index
        elif needle < haystack[middle_index]:
            right = middle_index - 1
        elif needle > haystack[middle_index]:
            left = middle_index + 1

    return -1


index = binary_search([4, 7, 8, 9], None)
print(index)


# binary_search([4, 7, 8, 9], 10)
#
# Explanation
# - First, it searches the middle (7). left = 0, right = 3, middle = 1
# - Secondly, because the value is larger, it discards the left side.
# left = 2, middle = 2, right = 3
# Searches between 7 and 9, thus (8)
# - Thirdly, as the value still larger then 8, discards the 7.
# left = 3, middle = 3, right = 3
# Fourthly, as the value is stil larger, discards the 9.
# Adds one to left.
# !!! As left becoems larger than right, we have finished searching the list, thus the needle is not in the list.
# Return -1.
