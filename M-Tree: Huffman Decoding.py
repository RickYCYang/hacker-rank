def decodeHuff(root, s):
    # Enter Your Code Here
    code_map = {}
    parse_tree(root, code_map, "")
    result = ""
    left, right = 0, 1
    while right <= len(s):
        path = s[left:right]
        if path in code_map:
            result += code_map[path]
            left = right
        right += 1
    print(result)

def parse_tree(node, code_map, cur_path):
    if node.left is None and node.right is None:
        code_map[cur_path] = node.data
        return
    parse_tree(node.left, code_map, cur_path + "0")
    parse_tree(node.right, code_map, cur_path + "1")
    