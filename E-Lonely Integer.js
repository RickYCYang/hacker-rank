function lonelyinteger(a) {
  // Write your code here
  const s = new Set();
  for (const num of a) {
    if (s.has(num)) s.delete(num);
    else s.add(num);
  }
  return Array.from(s)[0];
}
