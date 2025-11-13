def floodFill(image, sr, sc, newColor):
    R, C = len(image), len(image[0])
    color = image[sr][sc]
    if color == newColor:
        return image

    def dfs(r, c):
        if image[r][c] == color:
            image[r][c] = newColor
            if r >= 1:
                dfs(r - 1, c)
            if r + 1 < R:
                dfs(r + 1, c)
            if c >= 1:
                dfs(r, c - 1)
            if c + 1 < C:
                dfs(r, c + 1)

    dfs(sr, sc)


# Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
sr = 1
sc = 1
color = 2
floodFill(image, sr, sc, color)
print(image)

# O(N)
# O(N)
