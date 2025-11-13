# Construct the graph

graph = {}

graph["start"] = {}

graph["start"]["a"] = 6
graph["start"]["b"] = 2

print(graph)

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {}

# Construct the costs

infinity = float("inf")

costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# Hold the directions from nodes
# to backtrack later.

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# Hold the processed nodes
processed = []


# Before main while loop:
# find the shortest weight:
# found node B


# MAIN LOOP:
# ITERATION 1:
#   COST OF B is 2
#   GO THROUGH B  NEIGHBOURS
#       FIRST NEIGHBOUR IS A
#           CURRENT A COST FROM START TO A IS MORE THAN GOING THROUGH NODE B
#               CHANGE ITS COST AND UPDATE THE PARENT (WE FOUND CHEAPER)
#       SECOND NEIGHBOUR IS FIN
#           AS THE CURRENT COST OF FIND IS INFINITE, 2 + 5 = 7 IS BETTER THAN INF.
#                UPDATE THE COSTS OF FIN TO 7 and change the parent
#
# GO FIND ANOTHER LOWEST COST NODE THAT WASN'T PROCESSED
# WE FOUND NODE A


# MAIN LOOP:
# ITERATION 2:
#   COST OF A IS 5
#    GO THROUGH A NEIGHBOURS
#       FIRST (AND ONLY) neighbour is FIN
#           CHECK THE COST OF IT, if we would go through node A: 6.
#           ITS ONE LOWER, SO WE DO CHANGE!!!
#   WE ARE PROCESSING FIN NODE, BUT IT HAS NO NEIGHBOURS, SO WE ADD IT TO PROCESSED.
# FINITO


def find_lowest_cost_node(costs):
    lowest_cost = float("inf")
    lowest_cost_node = None
    print("")
    for node in costs:
        cost = costs[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node

    print("")
    return lowest_cost_node


def djikstra_search():
    node = find_lowest_cost_node(costs)
    print("")
    while node is not None:
        cost = costs[node]
        neighbors = graph[node]
        for n in neighbors.keys():
            new_cost = cost + neighbors[n]
            print("")
            if costs[n] > new_cost:
                print("")
                costs[n] = new_cost
                parents[n] = node
        processed.append(node)
        node = find_lowest_cost_node(costs)
        print("")


def get_the_shortest_path_in_reverse(parents):
    if "fin" not in parents:
        return None

    value = None
    key = "fin"
    path = "fin -> "
    while value != "start":
        value = parents[key]
        if value != "start":
            path += value + " -> "
        else:
            path += value
        key = value
    return path


def get_the_actual_path(reverse_path):
    split_nodes = reverse_path.split(" -> ")
    path = ""
    split_nodes.reverse()
    for n in split_nodes:
        path += n
        if n != "fin":
            path += " => "
    return path


def get_full_path_cost(costs):
    return costs["fin"]


djikstra_search()
reverse_path = get_the_shortest_path_in_reverse(parents)
print(get_the_actual_path(reverse_path))
