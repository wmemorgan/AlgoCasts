// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversed = "";

	for (let character of str) {
		reversed = character + reversed;
	}

	return reversed;
}

module.exports = reverse;

/**
 * My Solution
 * NOTe: Instructor recommends to stay
 * away from this syntax because it introduces
 * possibility of typos
 */
// function reverse(str) {
//   const reverseStr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr.push(str[i]);
//   }

//   return reverseStr.join("");
// }

/**
 * Solution 2: Easiest approach using built-in
 * JS array method
 */
// function reverse(str) {
// 	return str
// 		.split("")
// 		.reverse()
// 		.join("");
// }

/**
 * Solution 2: A more manual (interview friendly)
 * approach
 * NOTE: Recommended syntax using a `for` loop
 */
// function reverse(str) {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

/**
 * Solution 3: Advanced Array helper
 */
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }
