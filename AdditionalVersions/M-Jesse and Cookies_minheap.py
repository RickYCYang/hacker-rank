from typing import Union

class MinHeap:
    def __init__(self, nums: list[int] = []) -> None:
        self.__heap = []
        for num in nums:
            self.heap_push(num)
    
    def heap_push(self, num: int):
        self.__heap.append(num)
        self.__heapify_up(len(self.__heap) - 1)
        
    def heap_pop(self) -> Union[int, None]:
        if len(self.__heap) == 0:
            return None
        if (len(self.__heap) == 1):
            return self.__heap.pop()
        
        root = self.__heap[0]
        self.__heap[0] = self.__heap.pop()
        self.__heapify_down(0)
        return root

    def size(self) -> int:
        return len(self.__heap)
    
    def __heapify_up(self, idx: int):
        parent_idx = (idx - 1) >> 1
        if (parent_idx >= 0 and self.__heap[idx] < self.__heap[parent_idx]):
            [self.__heap[parent_idx], self.__heap[idx]] = [self.__heap[idx], self.__heap[parent_idx]]
            self.__heapify_up(parent_idx)
    
    def __heapify_down(self, idx):
        left_child_idx = idx * 2 + 1
        right_child_idx = idx * 2 + 2
        smallest_idx = idx
        
        if left_child_idx < len(self.__heap) and self.__heap[left_child_idx] < self.__heap[smallest_idx]:
            smallest_idx = left_child_idx
        if right_child_idx < len(self.__heap) and self.__heap[right_child_idx] < self.__heap[smallest_idx]:
            smallest_idx = right_child_idx
        if smallest_idx != idx:
            [self.__heap[smallest_idx], self.__heap[idx]] = [self.__heap[idx], self.__heap[smallest_idx]]
            self.__heapify_down(smallest_idx)
            
    def peek(self) -> Union[int, None]:
        return None if len(self.__heap) == 0 else self.__heap[0]
            

def cookies(k, A):
    min_heap = MinHeap(A)
    oper = 0
    
    while (min_heap.size() > 1):
        a = min_heap.heap_pop()
        if a >= k:
            return oper
        
        b = min_heap.heap_pop()
        min_heap.heap_push(a + b * 2)
        oper += 1
    
    return -1 if min_heap.peek() < k else oper
    
print(cookies(10, [1, 1, 1]))