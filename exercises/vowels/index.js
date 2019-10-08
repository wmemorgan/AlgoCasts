// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

vowels("Hi There!");
module.exports = vowels;

/**
 * My Solution #1: REGEX approach
 */
// function vowels(str) {
//   // Search for vowels in string and place them in an array
//   const vowelArr = str.match(/[aeiouAEIOU]/g)
//   // IF vowels are present return array length
//   // ELSE return 0
//   console.log(vowelArr ? vowelArr.length : 0)
//   return vowelArr ? vowelArr.length : 0
// }

/**
 * My Solution #2: Iterative approach
 */
// function vowels(str) {
//   // Set vowelCount to 0
//   let vowelCount = 0
//   const vowelList = ["a", "e", "i", "o", "u"]
//   // Iterate through string
//   for (let char of str.toLowerCase()) {
//     // Compare char with vowel
//     for (let vowel of vowelList) {
//       if (char === vowel) {
//         // Increment count
//         vowelCount++
//       }
//     }
//   }
//   // Return vowelCount
//   console.log(vowelCount)
//   return vowelCount
// }

/**
 * Official Solution #1: Iterative approach
 */
// function vowels(str) {
//   let count = 0;
//   const vowelList = ["a", "e", "i", "o", "u"]

//   for (let char of str.toLowerCase()) {
//     if (vowelList.includes(char)) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// }

/**
 * Official Solution #2: REGEX approach
 */
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }