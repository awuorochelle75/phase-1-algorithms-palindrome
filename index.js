function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  1. Define the function `isPalindrome(word)`.
2. Reverse the input string.
   - Convert the string to an array.
   - Reverse the array.
   - Convert it back into a string.
3. Compare the original string with the reversed string.
4. If they are equal, return `true`; otherwise, return `false`.

*/

/*
  Add written explanation of your solution here

  - We use `.split("")` to convert the string into an array of characters.
  - We use `.reverse()` to reverse the order of the array elements.
  - We use `.join("")` to convert the array back into a string.
  - Finally, we check if the reversed string matches the original string.
*/

function isPalindrome(word) {
  
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
