const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const generateHashtag = (str) => {
  const array = str.split(' ').map(capitalizeFirstLetter);
  const result = array.join('');
  if (!result || result.length > 139) return false;
  else return '#' + result;
};

const input = " Hello    there thanks for trying my Kata";
// const input = '  ';
console.log(generateHashtag(input));
