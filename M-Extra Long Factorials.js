/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
const dp = [BigInt(1)]; //stands for 0

const initDp = (dp) => {
  const limit = 100;
  for (let i = 1; i <= limit; i++) {
    dp[i] = BigInt(BigInt(i) * dp[i - 1]);
  }
};

initDp(dp);

function extraLongFactorials(n) {
  // Write your code here
  console.log(String(dp[n]));
}
