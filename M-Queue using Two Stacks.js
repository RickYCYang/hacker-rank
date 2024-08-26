function processData(input) {
  //Enter your code here
  const arr = input.split('\n');
  const forward = [];
  const backward = [];
  let idx = 1;
  while (idx < arr.length) {
    const [oper, val] = arr[idx++].split(' ');
    switch (oper) {
      case '1': {
        while (backward.length) forward.push(backward.pop());
        forward.push(val);
        break;
      }
      case '2': {
        while (forward.length) backward.push(forward.pop());
        backward.pop();
        break;
      }
      case '3': {
        if (forward.length) console.log(forward[0]);
        else console.log(backward[backward.length - 1]);
        break;
      }
    }
  }
}
