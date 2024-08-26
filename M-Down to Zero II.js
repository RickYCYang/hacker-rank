/*
 * Complete the 'downToZero' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
const dp = [0, 1];
const limit = Math.pow(10, 6);
for (let i = 2; i <= limit; i++) {
  if (i % 10000 === 0) console.log(i);
  dp[i] = dp[i - 1] + 1;
  for (let a = 2; a * a <= i; a++) {
    if (i % a === 0) {
      const b = i / a;
      const max = Math.max(a, b);
      dp[i] = Math.min(dp[i], dp[max] + 1);
    }
  }
}

function downToZero(n) {
  // Write your code here
  return dp[n];
}
