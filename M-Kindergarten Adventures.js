/*
 * Complete the solve function below.
 */
function solve(t) {
  let currentId = 0;
  let max = Number.MIN_SAFE_INTEGER;

  // create an array of size t and make each index start at 0
  let ranges = Array(t.length).fill(0);

  // iterate through students and mark ranges in which the teacher gives enough time for that student to finish
  for (let i = 0; i < t.length; i++) {
    let startRange = i + 1;
    let endRange = ((i - t[i]) % t.length) + 1;
    ranges[startRange]++;
    ranges[endRange]--;
    console.log('ranges', ranges);
  }

  // find the first student with largest overlapping of ranges
  let sum = 0;
  for (let i = 0; i < ranges.length; i++) {
    sum += ranges[i];
    if (sum > max) {
      max = sum;
      currentId = i;
    }
  }
  return currentId + 1;
}

console.log(solve([1, 0, 0]) === 2);
//console.log(solve([0, 1, 2]) === 1);
