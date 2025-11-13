from collections import deque


tuplas = ()
listas = []
hashTableas = {}
setas = set()
stackas = [] # stack


stackas.append(1)
print(stackas)

stackas.pop()

print(stackas)


queue = deque()

print(queue)
queue.append(1)

print(queue)


class MyBinaryTree():
    def __init__(self):
        self.val = 0
        self.right = None
        self.left = None


tree = MyBinaryTree()
print(tree)


# write a short program that prints each number from 1 to 100 on a new line
    # if it is multiple of 3, print "Fizz" instead
    # if it is multiple of 5, print "Buzz" instead of number
    # for numbers that are both, print "FizzBuzz"


# 1, 1, 2, 3, 5, 8, 13 

