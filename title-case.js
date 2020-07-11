// https://www.codewars.com/kata/5202ef17a402dd033c000009

const titleCase = (title, minorWords) => {
  const minorArr = minorWords ? minorWords.split(' ').map(word => word.toLowerCase()) : [];
  const titleArr = title.split(' ').map((word, i) => {
    if (i !== 0 && minorArr.includes(word.toLowerCase())) return word.toLowerCase();
    else return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  });
  return titleArr.toString().split(',').join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
