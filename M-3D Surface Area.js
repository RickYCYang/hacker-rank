const A = [
  [1, 3, 4],
  [2, 2, 3],
  [1, 2, 4],
];

function surfaceArea(A) {
  // Write your code here
  const h = A.length;
  const w = A[0].length;
  let surfaceArea = 0;

  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const height = A[row][col];

      // Top and Bottom
      surfaceArea += 2;

      // Front
      surfaceArea += row === 0 ? height : Math.max(0, height - A[row - 1][col]);

      // Back
      surfaceArea +=
        row === h - 1 ? height : Math.max(0, height - A[row + 1][col]);

      // Left
      surfaceArea += col === 0 ? height : Math.max(0, height - A[row][col - 1]);

      // Right
      surfaceArea +=
        col === w - 1 ? height : Math.max(0, height - A[row][col + 1]);
    }
  }

  return surfaceArea;
}

console.log(surfaceArea(A)); // output = 60
