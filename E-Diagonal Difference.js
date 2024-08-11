function diagonalDifference(arr) {
  // Write your code here
  const n = arr.length;
  let [diaSumL, diaSumR] = [0, 0];

  for (let i = 0; i < n; i++) {
    diaSumL += arr[i][i];
    diaSumR += arr[i][n - i - 1];
  }

  return Math.abs(diaSumL - diaSumR);
}
