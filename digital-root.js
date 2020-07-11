// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// 6kyu

const digital_root = (n) => {
  if (n < 10) return n;
  else {
    const nArr = n.toString().split('').map(nStr => parseInt(nStr));
    const newDigit = nArr.reduce((sum, current) => sum + current);
    return digital_root(newDigit);
  }
};

console.log(digital_root(16));
