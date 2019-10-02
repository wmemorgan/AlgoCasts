// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str
		.replace(/[^\w]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
}

console.log(anagrams("One One", "Two two two"));

/**
 * My Solution #1: using JS array methods
 */
// function anagrams(stringA, stringB) {
//   const sortedStrA = stringA.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
//   const sortedStrB = stringB.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
//
//   return sortedStrA === sortedStrB
// }

// anagrams('RAIL! SAFETY!', 'fairy tales')

/**
 * My Solution #1a: cleaner RegEx w/ array methods
 */
// function anagrams(stringA, stringB) {
//   const sortedStrA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
//   const sortedStrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
//   return sortedStrA === sortedStrB
// }

/**
 * Official Solution #1: Character Map approach
 */
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   console.log("aCharMap", aCharMap);

//   const bCharMap = buildCharMap(stringB);
//   console.log("bCharMap", bCharMap);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     console.log("for char: ", char)
//     console.log(
//       "aCharMap[char] & bCharMap[char]: ",
//       aCharMap[char],
//       bCharMap[char]
//     );

//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

/**
 * Official Solution #2: JS Methods with helper function
 */
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .sort()
//     .join("");
// }

module.exports = anagrams;
