def has_cycle(head):
    visited_node_set = set()
    while head:
        if head in visited_node_set:
            return 1
        visited_node_set.add(head)
        head = head.next
    return 0