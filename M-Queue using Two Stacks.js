function processData(input) {
  //Enter your code here
  const arr = input.split(/\r?\n/);
  arr.shift();
  const forward = [];
  const backward = [];

  while (arr.length) {
    const [oper, value] = arr.shift().split(' ');
    switch (oper) {
      case '1':
        if (!forward.length) {
          while (backward.length) forward.push(backward.pop());
        }
        forward.push(value);
        break;
      case '2': {
        while (forward.length) backward.push(forward.pop());
        backward.pop();
        break;
      }
      case '3':
        if (forward.length) console.log(forward[0]);
        else console.log(backward[backward.length - 1]);
    }
  }
}
