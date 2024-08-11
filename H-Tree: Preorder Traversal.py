def preOrder(root):
    #Write your code here
    node_values = []
    travalPreOrder(root, node_values)
    print(" ".join(node_values))
    

def travalPreOrder(node, node_values):
    if not node:
        return

    node_values.append(str(node.info))
    travalPreOrder(node.left, node_values)
    travalPreOrder(node.right, node_values)