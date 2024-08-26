class AvlTreeNode {
  value: number;
  left: AvlTreeNode | null;
  right: AvlTreeNode | null;
  height: number;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  root: AvlTreeNode | null;

  constructor(root: AvlTreeNode | null = null) {
    this.root = root;
  }

  // Utility function to get the height of a node
  getHeight = (node: AvlTreeNode | null): number => {
    return node ? node.height : 0;
  };

  // Utility function to get the balance factor of a node
  getBalance = (node: AvlTreeNode | null): number => {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  };

  insert = (node: null | AvlTreeNode, value: number): AvlTreeNode => {
    if (!node) return new AvlTreeNode(value);

    // insert to the target leaf node
    if (value < node.value) node.left = this.insert(node.left, value);
    else node.right = this.insert(node.right, value);

    // update height of each visited node
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

    const balance = this.getBalance(node);

    // case LL: rotate to right
    if (balance > 1 && node.left && value < node.left.value) {
      return this.rightRorate(node);
    }

    // case RR: rotate to left
    if (balance < -1 && node.right && value > node.right.value) {
      return this.leftRorate(node);
    }

    // case LR: rotate to left for node.left making node the LL case
    if (balance > 1 && node.left && value > node.left.value) {
      node.left = this.leftRorate(node.left);
      return this.rightRorate(node);
    }

    // case RL: rotate to right for node.right making node the RR case
    if (balance < -1 && node.right && value < node.right.value) {
      node.right = this.rightRorate(node.right);
      return this.leftRorate(node);
    }

    return node;
  };

  updateHeight = (node: AvlTreeNode): void => {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  };

  leftRorate = (node: AvlTreeNode): AvlTreeNode => {
    const newRoot = node.right as AvlTreeNode;
    const newRightOfNode = newRoot?.left || null;

    node.right = newRightOfNode;
    newRoot.left = node;

    // update height
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  };

  rightRorate = (node: AvlTreeNode): AvlTreeNode => {
    const newRoot = node.left as AvlTreeNode;
    const newLeftOfNode = newRoot?.right || null;

    node.left = newLeftOfNode;
    newRoot.right = node;

    // update height
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  };

  getOutputString = (node: AvlTreeNode): string => {
    return `${node.value}(BF=${this.getBalance(node)})`;
  };

  inorderTraversal = (
    node: null | AvlTreeNode,
    result: string[] = []
  ): string[] => {
    if (!node) return result;

    this.inorderTraversal(node.left, result);
    result.push(this.getOutputString(node));
    this.inorderTraversal(node.right, result);

    return result;
  };

  preorderTraversal = (
    node: null | AvlTreeNode,
    result: string[] = []
  ): string[] => {
    if (!node) return result;

    result.push(this.getOutputString(node));
    this.preorderTraversal(node.left, result);
    this.preorderTraversal(node.right, result);

    return result;
  };
}

function processData(input: string): void {
  const lines = input.split('\n');
  const _nodeCount = lines[0];
  const nodeValues = lines[1].split(' ').map((num) => Number(num)) as number[];
  const newValue = Number(lines[2]) as number;
  // console.log('nodeValues', nodeValues);
  // console.log('newValue', newValue);

  const avlTree = new AvlTree();
  for (const value of [...nodeValues, newValue]) {
    avlTree.root = avlTree.insert(avlTree.root, value);
  }

  const inorederResult = avlTree.inorderTraversal(avlTree.root);
  const preorederResult = avlTree.preorderTraversal(avlTree.root);

  console.log(inorederResult.join(' '));
  console.log(preorederResult.join(' '));
}

processData('4\n3 2 4 5\n6');

// expected print line 1 (inorder): 2(BF=0) 3(BF=-1) 4(BF=0) 5(BF=0) 6(BF=0)
// expected print line 2 (preorder): 3(BF=-1) 2(BF=0) 5(BF=0) 4(BF=0) 6(BF=0)
