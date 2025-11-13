def findSmallest(arr: list) -> int:
    """Find smallest element from the list

    Args:
        arr (list): Input list

    Returns:
        int: index of the smallest element
    """
    smallest_element = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if smallest_element > arr[i]:
            smallest_element = arr[i]
            smallest_index = i
            print(i)
    return smallest_index


def selection_sort(arr: list) -> list:
    """Performs a Selection Sort for an array.

    Args:
        arr (list): List to sort

    Returns:
        list: Sorted list
    """
    new_arr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        print(smallest)
        new_arr.append(arr.pop(smallest))

    return new_arr


print(selection_sort([5, 3, 6, 2, 10]))
