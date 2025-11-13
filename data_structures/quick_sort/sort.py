numbers = [8, 4, 3, 1, 6, 7, 11, 9, 2, 10]


def quickSort(numbers: list):
    if len(numbers) < 2:
        return numbers
    else:
        pivot = numbers[0]
        less = [i for i in numbers[1:] if i <= pivot]

        greater = [i for i in numbers[1:] if i > pivot]

        return quickSort(less) + [pivot] + quickSort(greater)


print(quickSort(numbers))

# 1st iteration
# less = 4 3 1 6 7 2
# greater = 11 9 10
# pivot = 8

# to the left numbers < 8 (not sorted order) and to the right we have numbers >8 (not sorted order)

# 2nd iteration
# less = 3 1 2
# greater = 6 7
# pivot = 4

# to the left numbers < 4 (not sorted order) and to the right we have numbers > 4 (not sorted order)

# 3rd iteration
# less = 1 2
# greater = []
# pivot 3

# to the left we have < 3 and to the right > 3

# 4th iteration
# less []
# greater [2]
# pivot 1

# to the left we have < 1 and to the right > 1

# 5th iteration
# return empty list for less

# 6th iteration
# return [2] for greater

# 7th iter
# greater 7
# less []
# pivot 6

# 8th
# return empty for less
# return 7 for greater
