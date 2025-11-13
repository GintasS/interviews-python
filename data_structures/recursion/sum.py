def sum_rec(numbers: list) -> int:
    if len(numbers) == 0:
        return 0
    elif len(numbers) == 1:
        return numbers[0]

    return numbers[0] + sum_rec(numbers[1:])


numbers = [4, 8, 4, 1, 2]
print(sum_rec(numbers))
