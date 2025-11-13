
# using str.format

yes_votes = 42_572_654
total_votes = 85_705_149
percentage = yes_votes / total_votes
'{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage)

# using f strings
import math
print(f'The value of pi is approximately {math.pi:.3f}.')

# The % operator (modulo) can also be used for string formatting. 

import math
print('The value of pi is approximately %5.3f.' % math.pi)

# 7.2. Reading and Writing Files
f = open('workfile', 'w', encoding="utf-8")

# 7.2.2. Saving structured data with json

import json
x = [1, 'simple', 'list']
json.dumps(x)