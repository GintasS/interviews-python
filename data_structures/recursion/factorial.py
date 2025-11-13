def factorial(n: int) -> int:
    """A function to return a factorial of N.
    Uses recursion.

    Args:
        n (int): Integer to find a factor of.

    Returns:
        int: Final value.
    """
    if n == 1:  # base case
        return 1
    else:  # recursive case
        return n * factorial(n - 1)


# each recursive call adds a new frame to the call stack until it returns.


# 6! = 6 * 5 * 4 * 3 * 2 * 1
# 6 * factorial(5)
# 5 * factorial(4)
# 4 * factorial(3)
# 3 * factorial(2)
# 2 * factorial(1)
# 1

print(factorial(5))
