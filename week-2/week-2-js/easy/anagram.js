/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isSame (obj1, obj2) {
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  return obj1Keys.length === obj2Keys.length && obj1Keys.every((key) => obj1[key] === obj2[key])
}

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  str1Map = {}
  str2Map = {}
  str1.split('').forEach(char => str1Map[char] = str1Map[char] ? str1Map[char] + 1 : 1 )
  str2.split('').forEach(char => str2Map[char] = str2Map[char] ? str2Map[char] + 1 : 1 )
  return isSame(str1Map, str2Map)
}
module.exports = isAnagram;
