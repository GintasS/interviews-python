class Item:
    def __init__(self, name, cost, weight):
        self.name = name
        self.cost = cost
        self.weight = weight


class Row:
    def __init__(self, row_item, list=None):
        self.row_item = row_item
        self.list = list


class Cell:
    def __init__(self):
        self.items = []

    def add_item(self, item):
        self.items.append(item)

    def get_cost(self):
        if self.items is not None:
            return sum([item.cost for item in self.items])
        return None

    def get_item_names(self):
        for item in self.items:
            print(item.name)


class Matrix:
    def __init__(self, matrix):
        self.matrix = matrix

    def get_previous_row(self, i):
        return matrix[i - 1]

    def get_remaining_space_cell(self, i, j, current_item):
        if j + 1 - current_item.weight > 0:
            return self.matrix[i - 1].list[j - current_item.weight]
        return None

    def fill_matrix(self):
        for i in range(len(self.matrix)):
            current_item = self.matrix[i].row_item

            for j in range(len(self.matrix[i].list)):
                j_weight = j + 1

                if i == 0:
                    if j_weight - current_item.weight >= 0:
                        self.matrix[i].list[j].add_item(current_item)
                    else:
                        self.matrix[i].list[j].items = None

                    continue

                previous_max = self.matrix[i - 1].list[j].get_cost()
                previous_max_items = self.matrix[i - 1].list[j].items

                if j_weight - current_item.weight < 0:
                    if previous_max is None:
                        self.matrix[i].list[j].items = None
                    else:
                        self.matrix[i].list[j].items.extend(previous_max_items)

                    continue

                current_cell_cost = current_item.cost

                remaining_space_cell = self.get_remaining_space_cell(i, j, current_item)
                if remaining_space_cell is not None:
                    current_cell_cost += remaining_space_cell.get_cost()

                if previous_max > current_cell_cost:
                    self.matrix[i].list[j].items.extend(previous_max_items)
                else:
                    self.matrix[i].list[j].add_item(current_item)

                    if remaining_space_cell is not None:
                        self.matrix[i].list[j].items.extend(remaining_space_cell.items)

    def visualize(self):
        for i in range(len(self.matrix)):
            for j in range(len(self.matrix[i].list)):
                print(
                    i, j, " COST ", self.matrix[i].list[j].get_cost(), " CELL ITEMS: "
                )
                for item in self.matrix[i].list[j].items:
                    print("ITEM: ", item.name)

                if self.matrix[i].list[j].items is None:
                    print("NONE")
            print("----")

    def get_matrix(self):
        return self.matrix


guitar = Item("guitar", 1500, 1)
stereo = Item("stereo", 3000, 4)
laptop = Item("laptop", 3000, 3)
iphone = Item("iphone", 2000, 1)
mp3 = Item("mp3", 1000, 1)

matrix_grid = matrix = [
    Row(guitar, [Cell(), Cell(), Cell(), Cell()]),
    Row(stereo, [Cell(), Cell(), Cell(), Cell()]),
    Row(laptop, [Cell(), Cell(), Cell(), Cell()]),
]

matrix_obj = Matrix(matrix_grid)
matrix_obj.fill_matrix()
matrix_obj.visualize()
