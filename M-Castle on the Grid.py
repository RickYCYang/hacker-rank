from collections import deque

def minimumMoves(grid, startX, startY, goalX, goalY):
    n = len(grid)
    queue = deque([(startX, startY, 0)])
    visisted = set([(startX, startY)])
    directions = [
        (0, -1),
        (0, 1),
        (1, 0),
        (-1, 0)
    ]
    
    while queue:
        x, y, moves = queue.popleft()
        if x == goalX and y == goalY:
            return moves
        
        for dx, dy in directions:
            nx, ny = x, y
            
            while 0 <= nx + dx < n and 0 <= ny + dy < n and grid[nx+dx][ny+dy] == ".":
                nx += dx
                ny += dy
                if (nx, ny) not in visisted:
                    visisted.add((nx, ny))
                    queue.append((nx, ny, moves + 1))
    
    return -1

# Example usage:
grid = ['.X.', '.X.', '...']
startX, startY = 0, 0
goalX, goalY = 0, 2
print(minimumMoves(grid, startX, startY, goalX, goalY))  # Output: 3