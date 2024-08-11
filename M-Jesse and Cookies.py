import heapq


def cookies(k, A):
    heapq.heapify(A)
    oper = 0
    
    while len(A) > 1:
        a = heapq.heappop(A)
        if a >= k:
            return oper

        b = heapq.heappop(A)
        heapq.heappush(A, a + b * 2)
        oper += 1
    
    return -1 if A[0] < k else oper
    