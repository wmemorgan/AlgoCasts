// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	charStore = {};
	let maxNum = 0;
	let maxResult = "";

  // Parse string and map 
  // number of character occurences
	str
		.split("")
		.forEach(char =>
			charStore[char] ? charStore[char]++ : (charStore[char] = 1)
  );
  
  // Compare the key/value pairs and return
  // the letter with the highest number of occurences
  Object.entries(charStore).forEach(char => {
    if (char[1] > maxNum) {
      maxNum = char[1]
      maxResult = char[0]
    }
  })

  console.log(maxResult, maxNum)
  return maxResult
}

module.exports = maxChar;

/**
 * My Solution #1
 * @returns string
 */
// function maxChar(str) {
//   // create new object
//   const charStore = {};

//   let maxNum = 0
//   let maxResult = ''

//   // Parse string and record number of
//   // occurences of characters in a string
//   str
//     .split("")
//     .forEach(char => (charStore[char] ? charStore[char]++ : (charStore[char] = 1)));

//   for (let charCount of Object.entries(charStore)) {
//     if (charCount[1] > maxNum) {
//       maxNum = charCount[1]
//       maxResult = charCount[0]
//     }
//   }

//   console.log(maxResult, maxNum)
//   return maxResult

// }

/**
 * My Solution #2: JS array methods
 * @returns string
 */
// function maxChar(str) {
//   charStore = {};
//   let maxNum = 0;
//   let maxResult = "";

//   // Parse string and map 
//   // number of character occurences
//   str
//     .split("")
//     .forEach(char =>
//       charStore[char] ? charStore[char]++ : (charStore[char] = 1)
//     );

//   // Compare the key/value pairs and return
//   // the letter with the highest number of occurences
//   Object.entries(charStore).forEach(char => {
//     if (char[1] > maxNum) {
//       maxNum = char[1]
//       maxResult = char[0]
//     }
//   })

//   console.log(maxResult, maxNum)
//   return maxResult
// } 


/**
 * Official Solution
 */
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }

//   console.log(maxChar, max)

//   return maxChar
// }
