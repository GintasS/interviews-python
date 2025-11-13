# namedtuple
from collections import namedtuple

pastatas = namedtuple('Pastatas', ['adresas', 'aukstu_sk'])
pastatas_obj = pastatas(10, 14)

print(pastatas_obj[0])

# dequeue 
# list like implementation of queue/stack
# O(1) for inserting
# O(1) for adding

from collections import deque

queue = deque()
queue.append(1)
queue.append(2)

print(queue)

queue.pop()


print(queue)


# Counter
# Typical dict implementation
# O(1) insert
# O(1) get

from collections import Counter
c = Counter("gallahad")
cd = Counter(cats=4, dogs=8)
print(cd)

cd["cats"] += 400
print(cd)

# Ordered dict
# Return an instance of a dict subclass that has methods specialized for rearranging dictionary order.
# O(1) insert
# O(1) get
from collections import OrderedDict

od = OrderedDict()
od["a"] = 1
od["b"] = 1

print(od)




# default dict
# https://docs.python.org/3/library/collections.html#collections.defaultdict

from collections import defaultdict

a = defaultdict(int)
a[10] = 1


s = 'mississippi'
d = defaultdict(int)
for k in s:
    print(k)
    d[k] += 1

print(d)

