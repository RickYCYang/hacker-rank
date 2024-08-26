/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
  // Write your code here
  const rem = new Set(
    Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  );
  const result = [];

  for (let i = 1; i <= n; i++) {
    // | target - i| = k => target - i = +-k
    // 1. target = k + i,
    // 2. target = i - k
    const [target1, target2] = [k + i, i - k];

    // Neither of the two targets exists.
    if (!rem.has(target1) && !rem.has(target2)) return [-1];

    // Both of the 2 targets exist
    if (rem.has(target1) && rem.has(target2)) {
      if (target1 < target2) {
        result.push(target1);
        rem.delete(target1);
      } else {
        result.push(target2);
        rem.delete(target2);
      }
      continue;
    }

    // Either one of the 2 targets exists
    if (rem.has(target1)) {
      result.push(target1);
      rem.delete(target1);
      continue;
    }
    result.push(target2);
    rem.delete(target2);
  }

  return rem.size > 0 ? -1 : result;
}

//console.log(absolutePermutation(10, 0));
console.log(absolutePermutation(10, 1));
