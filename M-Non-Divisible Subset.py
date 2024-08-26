def nonDivisibleSubset(k, S):
    # Array to store frequency of remainders
    remainder_count = [0] * k

    # Fill remainder_count with the frequency of remainders
    for num in S:
        remainder_count[num % k] += 1

    print("remainder_count", remainder_count)

    # Start with count of elements with remainder 0 (at most one)
    max_subset_size = min(remainder_count[0], 1)
    print("max_subset_size", max_subset_size)

    # Iterate over the rest of the remainders
    for i in range(1, (k // 2) + 1):
        if i == k - i:  # Special case where remainders are exactly half of k
            max_subset_size += min(remainder_count[i], 1)
        else:
            max_subset_size += max(remainder_count[i], remainder_count[k - i])

    return max_subset_size


# Example usage:
k = 3
S = [1, 7, 2, 4]
print(nonDivisibleSubset(k, S))  # Output: 3
