function climbingLeaderboard(ranked, player) {
  // Write your code here

  // distRanked = [ 100, 50, 40, 20, 10 ]
  // player = [5, 4, 25, 50, 120]
  const distRanked = Array.from(new Set(ranked));
  const result = [];
  let last = distRanked.length - 1;

  console.log('distRanked', distRanked);

  for (const score of player) {
    // last is the previous ranking
    while (last >= 0 && score >= distRanked[last]) last--;
    result.push(last + 2); // 1 is 1-based, and the other 1 is the ranking
  }

  console.log('result', result);
  return result;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 4, 25, 50, 120])
);
