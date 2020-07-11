const getValue = (numeral) => {
  switch (numeral) {
    case 'M': return 1000;
    case 'D': return 500;
    case 'C': return 100;
    case 'L': return 50;
    case 'X': return 10;
    case 'V': return 5;
    case 'I': return 1;
  };
};

const solution = (roman) => {
  const NUMERALS = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let sum = 0;
  roman.split('').forEach((numeral, i) => {
  if (i < roman.length - 1) {
    if (NUMERALS.indexOf(roman[i]) > NUMERALS.indexOf(roman[i + 1])) sum -= getValue(numeral);
    else sum += getValue(numeral);
  } else sum += getValue(numeral);
  });
  return sum;
};


console.log('XXI', solution('XXI'));
console.log('I', solution('I'));
console.log('IV', solution('IV'));
console.log('MMVIII', solution('MMVIII'));
console.log('MDCLXVI', solution('MDCLXVI'));
