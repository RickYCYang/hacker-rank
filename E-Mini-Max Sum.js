function miniMaxSum(arr) {
  // Write your code here
  let [min, max] = [Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER];
  let sum = 0;
  for (const num of arr) {
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }
  const minSum = sum - max;
  const maxSum = sum - min;
  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
