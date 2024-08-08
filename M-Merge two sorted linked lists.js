function mergeLists(head1, head2) {
  const head = new SinglyLinkedListNode(null, null);
  let node = head;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      node.next = new SinglyLinkedListNode(head1.data, null);
      node = node.next;
      head1 = head1.next;
      continue;
    }
    node.next = new SinglyLinkedListNode(head2.data, null);
    node = node.next;
    head2 = head2.next;
    continue;
  }

  if (head1) {
    node.next = head1;
    head1 = head1.next;
    node = node.next;
  }

  if (head2) {
    node.next = head2;
    head2 = head2.next;
    node = node.next;
  }

  return head.next;
}
