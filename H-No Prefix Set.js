class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndChar = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      /** prefix doest not exsit */
      if (!(char in node.children)) return false;
      /** prefix has appered */
      if (node.children[char].isEndChar) return true;
      node = node.children[char];
    }
    return true;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndChar = false;
  }
}

function noPrefix(words) {
  // Write your code here
  const trie = new Trie();
  for (const word of words) {
    if (trie.search(word)) {
      console.log('BAD SET');
      console.log(word);
      return;
    }
    trie.insert(word);
  }
  console.log('GOOD SET');
}

console.log(
  noPrefix([
    'aab',
    //'aab',
    'defgab',
    'abcde',
    'aabcde',
    'cedaaa',
    'bbbbbbbbbb',
    'jabjjjad',
  ])
);
