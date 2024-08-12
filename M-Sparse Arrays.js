function matchingStrings(stringList, queries) {
  // Write your code here
  const freqMap = {};
  for (const str of stringList) {
    freqMap[str] = (freqMap[str] ?? 0) + 1;
  }
  //console.log('freqMap', freqMap);
  const result = [];
  for (const query of queries) {
    result.push(freqMap[query] ?? 0);
  }
  //console.log('result', result)
  return result;
}
