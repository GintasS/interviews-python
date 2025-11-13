def print_numbers(n: int) -> None:
    print(n)
    if n == 0:
        return

    return print_numbers(n - 1)


print_numbers(6)

# Space and Runtime is O(n)
