function plusMinus(arr) {
  // Write your code here
  let n = arr.length;
  let posCnt = 0;
  let negCnt = 0;
  let zeroCnt = 0;
  for (const i of arr) {
    if (i > 0) {
      posCnt++;
      continue;
    }
    if (i < 0) {
      negCnt++;
      continue;
    }
    zeroCnt++;
  }
  console.log((posCnt / n).toFixed(6));
  console.log((negCnt / n).toFixed(6));
  console.log((zeroCnt / n).toFixed(6));
}
