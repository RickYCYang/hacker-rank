""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""
import sys
def check_binary_search_tree_(root):
    return validate_bst(root, -sys.maxsize, sys.maxsize)

def validate_bst(node, must_greater, must_less):
    if node is None:
        return True
    if node.data <= must_greater or node.data >= must_less:
        return False
    return validate_bst(node.left, must_greater, node.data) and validate_bst(node.right, node.data, must_less)
