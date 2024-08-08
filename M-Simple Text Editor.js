function processData(input) {
  //Enter your code here
  let s = '';
  const rollback = [];
  const opers = input; //input.split(/\r?\n/);
  for (const oper of opers) {
    const [type, value] = oper.split(' ');
    s = operate(s, Number(type), value, rollback);
  }
}

const operate = (s, type, value, rollback, isUndo = false) => {
  let updatedS = s;
  if (type === 1) {
    if (!isUndo) rollback.push([2, value.length]);
    updatedS += value;
  }
  if (type === 2) {
    if (!isUndo) {
      const removedStr = updatedS.slice(-value);
      rollback.push([1, removedStr]);
    }
    updatedS = updatedS.slice(0, -value);
  }
  if (type === 3) {
    console.log(updatedS[value - 1]);
  }
  if (type === 4) {
    const [lastType, lastValue] = rollback.pop();
    updatedS = operate(updatedS, lastType, lastValue, rollback, true);
  }
  return updatedS;
};

const opers = ['8', '1 abc', '3 3', '2 3', '1 xy', '3 2', '4', '4', '3 1'];

processData(opers);
