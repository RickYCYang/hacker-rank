// o(n^2) solution
// function largestRectangle(h) {
//   let res = 0;
//   for (let i = 0; i < h.length; i++) {
//     let minHeight = Number.MAX_SAFE_INTEGER;
//     for (let j = i; j < h.length; j++) {
//       minHeight = Math.min(minHeight, h[j]);
//       const width = j - i + 1;
//       const area = width * minHeight;
//       res = Math.max(res, area);
//     }
//   }
//   return res;
// }

// O(n) solution
function largestRectangle(h) {
  // Write your code here
  const stack = [];
  let idx = 0;
  let maxArea = 0;
  while (idx < h.length) {
    const n = stack.length;
    if (!stack.length || h[idx] >= h[stack[n - 1]]) {
      stack.push(idx);
      idx++;
    } else {
      const height = h[stack.pop()];
      const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length) {
    const height = h[stack.pop()];
    const width = stack.length ? idx - stack[stack.length - 1] - 1 : idx;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}

// 26152
console.log(
  largestRectangle([8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116])
);
console.log(largestRectangle([3, 2, 3, 2, 2, 2, 2, 1])); // 14
console.log(largestRectangle([1, 2, 1, 5, 3])); // Output: 6
console.log(largestRectangle([2, 1, 1, 5, 6, 2, 3])); // Output: 10
