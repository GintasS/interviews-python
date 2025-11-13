# TOPICS: Array, DP
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150


def maxProfit(self, prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    buy_day_price = -1
    sell_day_price = -1
    max_profit = 0
    for i in range(0, len(prices)):
        buy_day_price = prices[i]
        for y in range(i + 1, len(prices)):
            if prices[y] - buy_day_price > max_profit:
                max_profit = prices[y] - buy_day_price

    return max_profit


def maxProfit2(prices):
    min_price = float("inf")
    max_profit = 0
    # [7,1,5,3,6,4]
    for i in range(0, len(prices)):
        if prices[i] < min_price:
            min_price = prices[i]
        elif prices[i] - min_price > max_profit:
            max_profit = prices[i] - min_price

    return max_profit


print(maxProfit2([7, 1, 5, 3, 6, 4]))
