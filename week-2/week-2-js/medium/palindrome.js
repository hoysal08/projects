/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[!?.,]/g, '')
  str = str.replace(/\s+/g,'')
  str = str.toLowerCase()
  strRev = str.split('').reverse().join('');
  console.log(str)
  console.log(strRev)
  for( let i = 0; i < str.length; i++){
    if(str[i]!==strRev[i]){
      return false
    }
  }
  return true
}
console.log(isPalindrome('hello'))
module.exports = isPalindrome;
