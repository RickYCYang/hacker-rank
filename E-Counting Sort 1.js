function countingSort(arr) {
  // Write your code here
  const freqArr = new Array(100).fill(0);
  for (const num of arr) freqArr[num] += 1;
  return freqArr;
}
