# TOPICS: Hash Table, Math, String
# https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150


def romanToInt(self, s):
    """
    :type s: str
    :rtype: int
    """
    roman_dict = {}
    roman_dict["I"] = 1
    roman_dict["V"] = 5
    roman_dict["X"] = 10
    roman_dict["L"] = 50
    roman_dict["C"] = 100
    roman_dict["D"] = 500
    roman_dict["M"] = 1000
    roman_dict["IV"] = 4
    roman_dict["IX"] = 9
    roman_dict["XL"] = 40
    roman_dict["XC"] = 90
    roman_dict["CD"] = 400
    roman_dict["CM"] = 900

    sum = 0
    i = 0
    sum_special = 0
    while i < len(s):
        if i + 2 <= len(s) and s[i : i + 2] in roman_dict:
            sum += roman_dict[s[i : i + 2]]
            i += 2
        else:
            sum += roman_dict[s[i : i + 1]]
            i += 1

    return sum
