def decodeHuff(root, s):
    # Enter Your Code Here
    n = len(s)
    code_map = {}
    parse_huffman_code_map(root, code_map, "")
    result = ""
    left, right = 0, 1
    for i in range(n):
        if left > n:
            break
        target_path = s[left:right]
        if target_path in code_map:
            result += code_map[target_path]
            left = i + 1
        right += 1
    print(result)
    return result

def parse_huffman_code_map(node, code_map, cur_path):
    # leaf
    if node.left is None and node.right is None:
        code_map[cur_path] = node.data
    if node.left is not None:
        new_path = cur_path + "0"
        parse_huffman_code_map(node.left, code_map, new_path)
    if node.right is not None:
        new_path = cur_path + "1"
        parse_huffman_code_map(node.right, code_map, new_path)
    