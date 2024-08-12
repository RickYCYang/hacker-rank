def has_cycle(head):
    fast, slow = head, head
    while fast and slow and fast.next:
        fast = fast.next.next
        slow = slow.next
        if fast == slow:
            return True
        
    return False