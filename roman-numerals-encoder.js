
const solution = (number) => {
  let numeral = '';
  const symbols = [ { 'M': 1000 }, { 'D': 500 }, { 'C': 100 }, { 'L': 50 }, { 'X': 10 }, { 'V': 5 }, { 'I': 1 } ];
  const getKey = (i) => Object.keys(symbols[i])[0];
  const getValue = (i) => Object.values(symbols[i])[0];
  symbols.forEach((symbol, i) => {
    const value = getValue(i);
    while (number >= value) {
      const firstDigit = number.toString()[0];
      if (i && firstDigit === '4') {
        numeral += getKey(i) + getKey(i - 1);
        number -= getValue(i - 1) - getValue(i);
      } else if (i && firstDigit === '9') {
        numeral += getKey(i + 1) + getKey(i - 1);
        number -= getValue(i - 1) - getValue(i + 1);
      } else {
        numeral += getKey(i);
        number -= value;
      }
    }
  });
  return numeral;
}

const X = 1992;
console.log('\n----------------------');
// console.log(5, solution(5));
// for (let i = 1; i <= 15; i++) {
  console.log('\n');
  console.log(`testing ${X} solution is ${solution(X)}`);
// }
