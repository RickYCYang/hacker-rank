function timeConversion(s) {
  // Write your code here
  const ampm = s.substring(s.length - 2);
  const hour = Number(s.substring(0, 2));
  const minuteAndSecond = s.substring(3, 8);
  const specHour = 12;
  let procHour = hour;
  if (ampm === 'AM' && hour === specHour) procHour = 0;
  if (ampm === 'PM' && hour !== specHour) procHour += 12;
  return `${procHour.toString().padStart(2, '0')}:${minuteAndSecond}`;
}

console.log(timeConversion('06:40:03AM'));
