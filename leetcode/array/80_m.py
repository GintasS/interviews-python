# Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

# Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

# Return k after placing the final result in the first k slots of nums.

# Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

# TOPICS: Array, Two Pointers
# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150


def removeDuplicates(nums):
    if not nums:
        return 0

    i = 1
    j = 1
    count = 1

    while i < len(nums):
        if nums[i] == nums[i - 1]:
            count += 1
            if count > 2:
                i += 1
                continue
        else:
            count = 1
        nums[j] = nums[i]
        j += 1
        i += 1

    del nums[j:]
    return len(nums)



nums = [1, 1, 1, 2, 2, 3]
removeDuplicates(nums)
print(nums)


def removeDuplicates2_worse_version(nums)
    # Check for edge case where list is empty
    if not nums:
        return 0

    # Pointer for current index in the list
    i = 1
    # Count of the current element occurrences
    count = 1

    # Iterate through the list starting from the second element
    while i < len(nums):
        # Check if the current element is same as the previous one
        if nums[i] == nums[i - 1]:
            # Increment count for the current element
            count += 1
            # If count exceeds 2, remove the current element
            if count > 2:
                nums.pop(i)
                i -= 1
                count -= 1
        else:
            # Reset count for new element
            count = 1
        # Move to the next element
        i += 1

    # Return the new list length
    return len(nums)