def create_simple_dict():
    """Simple dict creation"""
    table = dict()
    table["a"] = [4, 6, 8]
    table["b"] = 2
    table["c"] = 3
    table["d"] = 4

    for key, val in table.items():
        print(key, " ", val)


create_simple_dict()


# Since Python 3.3, string and bytes hashes are randomized for each interpreter run to prevent hash-collision attacks.

a = hash("A")
b = hash("A")
print(a)
print(b)
