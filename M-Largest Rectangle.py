def largestRectangle(h):
    stack = []
    idx = 0
    max_area = 0
    
    while idx < len(h):
        if len(stack) == 0 or h[idx] >= h[stack[-1]]:
            stack.append(idx)
            idx += 1
        else:
            height = h[stack.pop()]
            width = idx - stack[-1] - 1 if stack else idx
            area = height * width
            max_area = max(max_area, area)
    
    while len(stack):
        height = h[stack.pop()]
        width = idx - stack[-1] - 1 if len(stack) else idx
        area = height * width
        max_area = max(max_area, area)
    
    return max_area
    
    


print(largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116]))  # Output: 26152
print(largestRectangle([3, 2, 3, 2, 2, 2, 2, 1]))  # Output: 14
print(largestRectangle([1, 2, 1, 5, 3]))  # Output: 6
print(largestRectangle([2, 1, 1, 5, 6, 2, 3]))  # Output: 10