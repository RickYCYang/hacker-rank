/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
  // Write your code here
  const trimS = s.replaceAll(' ', '');

  const n = trimS.length;
  const squareN = Math.pow(n, 0.5);
  let rows = Math.floor(squareN);
  let cols = Math.ceil(squareN);
  if (rows * cols < n) rows = cols;

  const arr = [];
  let encryption = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (trimS[i * cols + j]) {
        arr[i] = (arr[i] ?? '') + trimS[i * cols + j];
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (arr[row][col]) {
        encryption += arr[row][col];
      }
    }
    encryption += ' ';
  }

  return encryption;
}

console.log('abc' >= '');
