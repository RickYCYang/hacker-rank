function arrayManipulation(n, queries) {
  // Write your code here
  const arr = new Array(n + 1).fill(0);
  for (const query of queries) {
    /** access zero-based array */
    const start = query[0] - 1;
    const end = query[1] - 1;
    const num = query[2];
    arr[start] += num;
    /** important: save the diff into the end + 1 cell to represent the diff */
    arr[end + 1] -= num;
  }
  /** calc sum and max */
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (const num of arr) {
    sum += num;
    max = Math.max(max, sum);
  }
  return max;
}
