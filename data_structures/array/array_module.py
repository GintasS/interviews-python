# In Python, array is a collection of items stored at contiguous memory locations.
# The idea is to store multiple items of the same type together.
# Unlike Python lists (can store elements of mixed types),
# arrays must have all elements of same type. Having only homogeneous elements makes it memory-efficient.


def create_array() -> None:
    """Will create an actual array from array module."""


import array

arr = array.array("i", [1, 2, 3, 4])  # i stands for integer
arr_float = array.array("f", [1.2, 3.4, 5.6])
print(arr)
print(arr[0])
