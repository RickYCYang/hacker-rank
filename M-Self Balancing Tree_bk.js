class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

function insert(root, data) {
  if (!root) return new Node(data);

  if (data < root.value) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }

  root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

  const balance = getBalance(root);

  if (balance > 1 && data < root.left.value) {
    return rightRotate(root);
  }

  if (balance < -1 && data > root.right.value) {
    return leftRotate(root);
  }

  if (balance > 1 && data > root.left.value) {
    root.left = leftRotate(root.left);
    return rightRotate(root);
  }

  if (balance < -1 && data < root.right.value) {
    root.right = rightRotate(root.right);
    return leftRotate(root);
  }

  return root;
}

function getHeight(node) {
  return node ? node.height : 0;
}

function getBalance(node) {
  return node ? getHeight(node.left) - getHeight(node.right) : 0;
}

function rightRotate(y) {
  const x = y.left;
  const T2 = x.right;

  x.right = y;
  y.left = T2;

  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
  x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));

  return x;
}

function leftRotate(x) {
  const y = x.right;
  const T2 = y.left;

  y.left = x;
  x.right = T2;

  x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));

  return y;
}

function inOrderTraversal(node, result = []) {
  if (!node) return result;

  inOrderTraversal(node.left, result);
  result.push(`${node.value}(BF=${getBalance(node)})`);
  inOrderTraversal(node.right, result);

  return result;
}

function preOrderTraversal(node, result = []) {
  if (!node) return result;

  result.push(`${node.value}(BF=${getBalance(node)})`);
  preOrderTraversal(node.left, result);
  preOrderTraversal(node.right, result);

  return result;
}

function processData(input) {
  const lines = input.trim().split('\n');
  const rootPointer = parseInt(lines[0]);
  const values = lines[1].split(' ').map(Number);
  const valueToAdd = parseInt(lines[2]);

  let treeAVL;

  values.forEach((node) => {
    treeAVL = insert(treeAVL, node);
  });

  treeAVL = insert(treeAVL, valueToAdd);

  console.log(inOrderTraversal(treeAVL).join(' '));
  console.log(preOrderTraversal(treeAVL).join(' '));
}

processData('4\n3 2 4 5\n6');
