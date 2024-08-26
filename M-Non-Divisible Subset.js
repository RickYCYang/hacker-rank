function nonDivisibleSubset(k, s) {
  // Write your code here

  // Fill remainder_count with the frequency of remainders
  const remainderCount = new Array(k).fill(0);
  for (const num of s) remainderCount[num % k]++;

  // Start with count of elements with remainder 0 (at most one)
  let minSetSize = Math.min(remainderCount[0], 1);

  // Iterate over the rest of the remainders
  for (let i = 1; i <= k / 2; i++) {
    const opposite = k - i;
    // Special case where remainders are exactly half of k
    if (i === opposite) minSetSize += Math.min(remainderCount[i], 1);
    else minSetSize += Math.max(remainderCount[i], remainderCount[opposite]);
  }

  return minSetSize;
}

const k = 3;
const S = [1, 7, 2, 4];
console.log(nonDivisibleSubset(k, S)); // Output: 3
