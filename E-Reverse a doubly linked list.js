function reverse(list) {
  // Write your code here
  let node = list;
  while (node.next) {
    [node.next, node.prev] = [node.prev, node.next];
    node = node.prev;
  }
  node.next = node.prev;
  return node;
}
