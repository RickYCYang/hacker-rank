function cookies(k: number, A: number[]): number {
  let oper = 0;
  const minHeap = new MinHeap(A);

  while (minHeap.size() > 1) {
    const a = minHeap.heapPop() as number;
    if (a >= k) return oper;

    const b = minHeap.heapPop() as number;
    minHeap.heapPush(a + b * 2);
    oper++;
  }

  return minHeap[0] < k ? -1 : oper;
}

class MinHeap {
  #heap: number[];

  constructor(list: number[] = []) {
    this.#heap = [];
    if (list.length > 0) {
      for (const num of list) this.heapPush(num);
    }
  }

  heapPush(value: number): void {
    this.#heap.push(value);
    this.heapifyUp(this.#heap.length - 1);
  }

  heapPop(): number | null {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop() as number;

    const min = this.#heap[0];
    this.#heap[0] = this.#heap.pop() as number;
    this.heapifyDown(0);
    return min;
  }

  heapifyUp(idx: number): void {
    const parentIdx = (idx - 1) >> 1;
    if (parentIdx >= 0 && this.#heap[idx] < this.#heap[parentIdx]) {
      [this.#heap[parentIdx], this.#heap[idx]] = [
        this.#heap[idx],
        this.#heap[parentIdx],
      ];
      this.heapifyUp(parentIdx);
    }
  }

  heapifyDown(idx: number): void {
    const [lChildIdx, rChildIdx] = [idx * 2 + 1, idx * 2 + 2];
    let smallestChildIdx = idx;
    if (
      lChildIdx < this.#heap.length &&
      this.#heap[lChildIdx] < this.#heap[smallestChildIdx]
    ) {
      smallestChildIdx = lChildIdx;
    }
    if (
      rChildIdx < this.#heap.length &&
      this.#heap[rChildIdx] < this.#heap[smallestChildIdx]
    ) {
      smallestChildIdx = rChildIdx;
    }

    if (smallestChildIdx !== idx) {
      [this.#heap[idx], this.#heap[smallestChildIdx]] = [
        this.#heap[smallestChildIdx],
        this.#heap[idx],
      ];
      this.heapifyDown(smallestChildIdx);
    }
  }

  size(): number {
    return this.#heap.length;
  }
}

console.log(cookies(10, [1, 1, 1]));
