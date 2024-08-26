/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
  // Write your code here
  const numMap = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];

  const hourStr = numMap[h];
  let minuteStr = '';
  if (m === 0) return `${hourStr} o' clock`;
  if (m === 1) return `${numMap[m]} minute past ${hourStr}`;
  if (m === 15) return `${numMap[m]} past ${hourStr}`;
  if (m === 30) return `half past ${hourStr}`;
  if (m < 30) return `${numMap[m]} minutes past ${hourStr}`;
  // m > 30
  if (m === 45) return `${numMap[60 - m]} to ${numMap[h + 1]}`;
  return `${numMap[60 - m]} minutes to ${numMap[h + 1]}`;
}
