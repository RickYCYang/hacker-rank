function isBalanced(s) {
  // Write your code here
  const YES = 'YES';
  const NO = 'NO';
  const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];
  for (const c of s) {
    /* open */
    if (c in bracketMap) {
      stack.push(c);
      continue;
    }
    /** close */
    if (stack.length === 0) return NO;
    const lastOpenBracket = stack.pop();
    if (bracketMap[lastOpenBracket] !== c) return NO;
  }

  return stack.length === 0 ? YES : NO;
}

const testData = [
  { s: '{[()]}', expected: 'YES' },
  { s: '{[(])}', expected: 'NO' },
  { s: '{{[[(())]]}}', expected: 'YES' },
  {
    s: '[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]',
    expected: 'YES',
  },
];

for (const data of testData) {
  console.log(isBalanced(data.s) === data.expected);
}
