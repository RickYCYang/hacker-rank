class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  constructor(root = null) {
    this.root = root;
  }

  getHeight = (node) => {
    return node ? node.height : 0;
  };

  getBalanceFactor = (node) => {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  };

  insert = (node, value) => {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this.insert(node.left, value); // put in left sub-tree
    } else node.right = this.insert(node.right, value); // put in right sub-tree

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balanceFactor = this.getBalanceFactor(node);

    // LL unbalanced scenario -> do a right rotation
    if (balanceFactor > 1 && value < node.left.value) {
      return rightRotate(node);
    }

    // RR unbalanced scenario -> do a left rotation
    if (balanceFactor < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // LR unbalanced scenario -> do a left rotation for node.left making the scenario be the LL case
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRorate(node);
    }

    // RL unbalanced scenario -> do a right rotation for node.left making the scenario be the RR case
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  };

  rightRorate = (node) => {
    const newRoot = node.left;
    const newLeftOfNode = newRoot.right;

    node.left = newLeftOfNode;
    newRoot.right = node;

    // update height
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  };

  leftRotate = (node) => {
    const newRoot = node.right;
    const newRightOfNode = newRoot.left;

    node.right = newRightOfNode;
    newRoot.left = node;

    // update height
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  };

  insertValue = (value) => {
    console.log('value', value);
    this.root = this.insert(this.root, value);
  };

  inorderTraversal = (node, result = []) => {
    if (!node) return result;

    this.inorderTraversal(node.left, result);
    result.push(`${node.value}(BF=${this.getBalanceFactor(node)})`);
    this.inorderTraversal(node.right, result);

    return result;
  };

  preorderTraversal = (node, result = []) => {
    if (!node) return result;

    result.push(`${node.value}(BF=${this.getBalanceFactor(node)})`);
    this.preorderTraversal(node.left, result);
    this.preorderTraversal(node.right, result);

    return result;
  };
}

function processData(input) {
  const lines = input.split('\n');
  const _nodeCount = Number(lines[0]);
  const nodeValues = lines[1].split(' ').map((str) => Number(str));
  const newVal = Number(lines[2]);

  const avlTree = new AvlTree();
  for (const value of nodeValues) avlTree.insertValue(value);
  avlTree.insertValue(newVal);

  const inorederResult = avlTree.inorderTraversal(avlTree.root);
  const preorederResult = avlTree.preorderTraversal(avlTree.root);

  console.log(inorederResult);
  console.log(preorederResult);
  //console.log(avlTree.root);
}

processData('4\n3 2 4 5\n6');

// expected print line 1 (inorder): 2(BF=0) 3(BF=-1) 4(BF=0) 5(BF=0) 6(BF=0)
// expected print line 2 (preorder): 3(BF=-1) 2(BF=0) 5(BF=0) 4(BF=0) 6(BF=0)
