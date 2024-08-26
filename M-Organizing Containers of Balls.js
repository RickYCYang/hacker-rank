/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
  // Write your code here
  const n = container.length;
  const ballTypeCount = Array(n).fill(0);
  const containerSlotCount = Array(n).fill(0);
  for (let cntnr = 0; cntnr < n; cntnr++) {
    for (let ballType = 0; ballType < n; ballType++) {
      const balls = container[cntnr][ballType];
      ballTypeCount[ballType] += balls;
      containerSlotCount[cntnr] += balls;
    }
  }
  const ascOrder = (a, b) => a - b;
  const ballTypeCountStr = JSON.stringify(ballTypeCount.sort(ascOrder));
  const containerSlotCountStr = JSON.stringify(
    containerSlotCount.sort(ascOrder)
  );
  return ballTypeCountStr === containerSlotCountStr ? 'Possible' : 'Impossible';
}
