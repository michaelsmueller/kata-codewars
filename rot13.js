function rot13(str) {
  const strArr = str
    ? str.split('').map((char) => {
        const index = char.charCodeAt(0);
        if (char.match(/[A-Z]/)) {
          if (index > 77) return String.fromCharCode(index - 13);
          return String.fromCharCode(index + 13);
        } else if (char.match(/[a-z]/)) {
          if (index > 109) return String.fromCharCode(index - 13);
          return String.fromCharCode(index + 13);
        }
        return char;
      })
    : [];
  return strArr.toString().split(',').join('');
}

console.log(rot13('EBG13 rknzcyr.'));
console.log(rot13('This is my first ROT13 excercise!'));
console.log(
  rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf")
);
