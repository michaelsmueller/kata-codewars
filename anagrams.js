const sortLetters = (word) => word.split('').sort().join('');

const anagrams = (word, words) => {
  const results = [];
  if (typeof word === 'string') {
    const sortedLetters = sortLetters(word);
    const wordsToTest = words.filter(wordToTest => word.length === wordToTest.length);
    wordsToTest.forEach(testWord => {
      if (sortedLetters === sortLetters(testWord))
        results.push(testWord);
    })
  }
  return results;
}


// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));