/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
  // Write your code here
  const arr = w.split('');
  const n = w.length;
  let i = n - 1;

  // step 1: find the index whose left is smaller than current
  while (i >= 0 && arr[i - 1] >= arr[i]) i--;

  // w is the biggest string, no available combination greater than w
  if (i === 0) return 'no answer';

  // step 2: swap i-1 with the smallest value but greater than i - 1
  let j = n - 1;
  while (arr[i - 1] >= arr[j]) j--;
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

  // step 3: reverse the arr starting from i
  let [l, r] = [i, n - 1];
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++, r--;
  }

  return arr.join('');
}
