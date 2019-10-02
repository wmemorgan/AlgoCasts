// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const reversed = n
		.toString()
		.split("")
		.reverse()
		.join("");

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

/**
 * My Solution #1
 */
// function reverseInt(n) {
//   const polarity = Math.sign(n);
//   if (polarity < 0) {
//     const stageString = n
//       .toString()
//       .split("")
//       .reverse();

//     const numToString =
//       "-" + stageString.slice(0, stageString.length - 1).join("");

//     return parseInt(numToString);
//   } else {
//     const numToString = n
//       .toString()
//       .split("")
//       .reverse()
//       .join("");

//     return parseInt(numToString);
//   }
// }
/**
 * My Solution #2: Inspired by official solution
 */
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   if (Math.sign(n) < 0) {
//     return -parseInt(reversed);
//   } else return parseInt(reversed);
// }
/**
 * My Solution #3: More efficient method
 */
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   return Math.sign(n) < 0 ? -parseInt(reversed) : parseInt(reversed)
// }
/**
 * Offical Solution: The Long Way
 */
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   } else {
//     return parseInt(reversed);
//   }
// }
/**
 * Official Solution #2: More efficient way
 */
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   return parseInt(reversed) * Math.sign(n)
// }
