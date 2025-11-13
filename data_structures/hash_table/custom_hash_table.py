# this will try to implement hashtable on my own
# we mostly need these things
# 1) place to store key and values (array)
# 2) hash function to place a new value
# 3) get mechanism


class MyHashTable:
    def __init__(self, size):
        self.table = [[] for i in range(size)]

    def add_item(self, key: str, val: object):
        index = self.__hash__(key)
        print(index)
        self.table[index].append(val)

    def get_item(self, key: str):
        index = self.__hash__(key)
        return self.table[index]

    def __hash__(self, item) -> int:
        if type(item) is not str:
            return

        sum_of_chars = 0
        for char in item:
            sum_of_chars += ord(char)

        return sum_of_chars % len(self.table)

    def __resize__(self):
        pass


table = MyHashTable(10)
table.add_item("abc", 10)
print(table.table)

item = table.get_item("abc")
print(item)
