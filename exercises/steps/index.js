// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
	// If (row === n) then we have hit the end of our problem (Base case)
	if (n === row) {
		return;
	}
	// If the 'stair' string has a length === n then we are at the end of a row
	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}
	// If the length of the stair string is less than or equal to the row number
	// we're working on, we add a '#', otherwise add a space

	const add = stair.length <= row ? "#" : " ";
	steps(n, row, stair + add);
}

steps(10);

module.exports = steps;

/**
 * My Solution
 */
// function steps(n) {
//   // Check edge case
//   if (n < 1) {
//     console.log('Invalid number. Please enter positive integer')
//     return ''
//   } else {
//     for (let i = 1; i <= n; i++) {
//       // STEP 1: Multiply "#" by the iteration number (aka Round number)
//       // STEP 2: Multiply whitespaces by the given number minus the current round
//       let step = "#".repeat(i) + " ".repeat(n - i)
//       console.log(step)
//     }
//     return
//   }

// }

/**
 * Official Solution: Brute Force method
 */
// function steps(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // Create an empty string, 'stair'
//     let stair = ''
//     // From 0 to n (iterate through columns)
//     for (let column = 0; column < n; column++) {
//       // IF the current column is equal to or less than the current row
//       if (column <= row) {
//         // Add a '#' to 'stair'
//         stair += "#";
//       } else {
//         // Add a space to 'stair'
//         stair += " "
//       }
//     }
//     // Console log 'stair'
//     console.log(stair)
//   }
// }
/**
 * Official Solution #2: Recursion
 */
// function steps(n, row = 0, stair = "") {
//   // If (row === n) then we have hit the end of our problem (Base case)
//   if (n === row) {
//     return;
//   }
//   // If the 'stair' string has a length === n then we are at the end of a row
//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//     return;
//   }
//   // If the length of the stair string is less than or equal to the row number
//   // we're working on, we add a '#', otherwise add a space

//   const add = stair.length <= row ? "#" : " ";
//   steps(n, row, stair + add);
// }