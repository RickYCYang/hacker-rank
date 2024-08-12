class Node {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
    this.huffmanPath = '';
  }
}

const buildHuffTree = (freqArr, freqMap, node) => {
  /** tree is built completely */
  if (freqArr.length === 0) return node;

  const char = freqArr.shift();
  const sibNode = new Node(char, freqMap[char]);
  const parentFreq = node.freq + sibNode.freq;
  const parentNode = new Node(null, parentFreq);
  if (sibNode.freq >= node.freq) {
    parentNode.right = sibNode;
    parentNode.left = node;
  } else {
    parentNode.right = node;
    parentNode.left = sibNode;
  }

  return buildHuffTree(freqArr, freqMap, parentNode);
};

const setHuffmanCode = (node, huffmanPathMap, parentHuffmanCode = '') => {
  if (!node) return;

  const tmpNode = node;
  if (tmpNode.left) {
    tmpNode.left.huffmanPath = parentHuffmanCode + '0';
    if (tmpNode.left.char) {
      huffmanPathMap[tmpNode.left.char] = tmpNode.left.huffmanPath;
    }
    setHuffmanCode(tmpNode.left, huffmanPathMap, tmpNode.left.huffmanPath);
  }
  if (tmpNode.right) {
    tmpNode.right.huffmanPath = parentHuffmanCode + '1';
    if (tmpNode.right.char) {
      huffmanPathMap[tmpNode.right.char] = tmpNode.right.huffmanPath;
    }
    setHuffmanCode(tmpNode.right, huffmanPathMap, tmpNode.right.huffmanPath);
  }
};

function processData(input) {
  //Enter your code here
  const freqMap = {};
  for (const c of input) freqMap[c] = (freqMap[c] ?? 0) + 1;
  const freqArr = Object.keys(freqMap).toSorted(
    (a, b) => freqMap[a] - freqMap[b]
  );
  const minFreqChar = freqArr.shift();
  const minNode = new Node(minFreqChar, freqMap[minFreqChar]);
  const root = buildHuffTree(freqArr, freqMap, minNode);
  const huffmanPathMap = {};
  setHuffmanCode(root, huffmanPathMap);
  let result = '';
  for (const c of input) {
    result += huffmanPathMap[c];
  }
  console.log('input', input);
  console.log('freqMap', freqMap);
  console.log('huffmanPathMap', huffmanPathMap);
  console.log('result', result);
  return result;
}

console.log(processData('ABRACADABRA'));
