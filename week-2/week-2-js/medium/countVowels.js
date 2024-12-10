/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(char){
  return char === 'a' || char === 'e' || char === 'i'||char === 'o'||char === 'u'
}

function countVowels(str) {
    let count = 0;
    str = str.toLowerCase()
    str.split('').forEach(char => isVowel(char) ? count++ : 0)
    return count;
}

// console.log(countVowels('EaSiEr'))
module.exports = countVowels;