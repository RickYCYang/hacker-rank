/*
 * Complete the 'twoStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER maxSum
 *  2. INTEGER_ARRAY a
 *  3. INTEGER_ARRAY b
 */

function twoStacks(maxSum, a, b) {
  // Write your code here
  let [idxOfA, idxOfB] = [0, 0];
  let [selection, maxSelection] = [0, 0];
  let curSum = 0;

  /** pre-sum A */
  for (const num of a) {
    if (num + curSum > maxSum) break;

    curSum += num;
    idxOfA++;
    selection++;
  }

  maxSelection = selection;

  /** select B and remove from A if needs */
  while (idxOfB < b.length) {
    curSum += b[idxOfB];
    idxOfB++, selection++;

    /** remove from A if needs */
    while (curSum > maxSum && idxOfA > 0) {
      curSum -= a[--idxOfA];
      selection--;
    }

    /** if it is a valid sum */
    if (curSum <= maxSum) maxSelection = Math.max(maxSelection, selection);
  }

  return maxSelection;
}
