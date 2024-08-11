function processData(input) {
  //Enter your code here
  const [_, n, origArr] = input.split(/\r?\n/);
  arr = origArr.split(' ');
  // const [n, arr] = [7, [1, 2, 3, 4, 5, 6, 7]];
  const max = Math.max(...arr);
  const middleIdx = Math.floor(n / 2);
  const maxIdx = arr.findIndex((num) => num === max);

  /** swap the max item to pivot position */
  arr[maxIdx] = arr[middleIdx];
  arr[middleIdx] = max;

  const firstHalfSlice = arr.slice(0, middleIdx).toSorted((a, b) => a - b);
  const secondHalfSlice = arr.slice(middleIdx + 1).toSorted((a, b) => b - a);
  const newArr = [...firstHalfSlice, max, ...secondHalfSlice];
  return newArr;
}

console.log('processData', processData());
