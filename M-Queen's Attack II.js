function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  // [4, 0], [4, 4]
  // console.log('obstacles', obstacles)
  const rows = n;
  const queen = [r_q, c_q];
  const directions = {
    up: [1, 0],
    down: [-1, 0],
    left: [0, -1],
    right: [0, 1],
    'up-left': [1, -1],
    'up-right': [1, 1],
    'down-left': [-1, -1],
    'down-right': [-1, 1],
  };
  //console.log('n', n)
  const obstclSet = new Set(obstacles.map((obstcl) => obstcl.join(',')));
  //console.log('obstclSet', obstclSet)
  const queue = [];
  let attack = 0;
  const isValidSquare = (x, y) => {
    if (x < 1 || x > n) return false;
    if (y < 1 || y > n) return false;

    const pos = [x, y].join(',');
    if (obstclSet.has(pos)) return false;

    return true;
  };
  for (const [direction, [mx, my]] of Object.entries(directions)) {
    const [nx, ny] = [r_q + mx, c_q + my];
    if (isValidSquare(nx, ny)) queue.push([direction, nx, ny]);
  }
  //console.log('queue', queue)

  while (queue.length) {
    attack++;
    //console.log('queue', queue);
    const [direction, x, y] = queue.shift();
    const [mx, my] = directions[direction];
    const [nx, ny] = [x + mx, y + my];
    if (isValidSquare(nx, ny)) queue.push([direction, nx, ny]);
  }

  // console.log('queue', queue);
  // console.log('attack', attack);

  return attack;

  // find all the attackable positions using BFS
  // if there are block in the way, stop exploring
}
