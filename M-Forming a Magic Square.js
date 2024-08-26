function formingMagicSquare(s) {
  // Write your code here
  const solutions = [
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];
  const matrix = s.flatMap((row) => row);
  let minCost = Number.MAX_SAFE_INTEGER;

  for (const solution of solutions) {
    let cost = 0;
    for (let i = 0; i < matrix.length; i++) {
      if (solution[i] !== matrix[i]) cost += Math.abs(solution[i] - matrix[i]);
    }
    minCost = Math.min(minCost, cost);
  }

  return minCost;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);
