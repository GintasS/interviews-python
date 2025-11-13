# 4.5. else Clauses on Loops

for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')

# 4.6. pass Statements




# 4.7. match Statements
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"

# Note the last block: the “variable name” _ acts as a wildcard and never fails to match.
class Point:
    __match_args__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def is_match(points):
        match points:
            case []:
                print("No points")
            case [Point(0, 0)]:
                print("The origin")
            case [Point(x, y)]:
                print(f"Single point {x}, {y}")
            case [Point(0, y1), Point(0, y2)]:
                print(f"Two on the Y axis at {y1}, {y2}")
            case _:
                print("Something else")


# 4.9. More on Defining Functions

def ask_ok(prompt, retries=4, reminder='Please try again!'):
    pass

# keyword argument
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    pass

# nally, the least frequently used option is to specify that a function can be called with an arbitrary number of arguments.

def write_multiple_items(file, separator, *args):
    pass

def f(a, L=[]):
    L.append(a)
    return L

# 4.9.5. Unpacking Argument Lists


# 4.9.6. Lambda Expressions

# Small anonymous functions can be created with the lambda keyword.
# Lambda functions can be used wherever function objects are required.

def make_incrementor(n):
    return lambda x: x + n

# 4.9.7 doc strings

def my_function():
    """Do nothing, but document it.

    No, really, it doesn't do anything.
    """
    pass

# 4.9.8 Function annotations

# Function annotations are completely optional metadata information about the types used by user-defined functions (see PEP 3107 and PEP 484 for more information).

def f(ham: str, eggs: str = 'eggs') -> str:
    print("Annotations:", f.__annotations__)
    print("Arguments:", ham, eggs)
    return ham + ' and ' + eggs