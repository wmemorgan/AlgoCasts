// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
	// If (row === n) (Base case)
	if (n === row) {
		return;
	}

	if (n * 2 - 1 === level.length) {
		console.log(level);
		pyramid(n, row + 1);
		return;
	}

	const midpoint = Math.floor((n * 2 - 1) / 2);
	let add;
	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = "#";
	} else {
		add = " ";
	}

	pyramid(n, row, level + add);
}

pyramid(3);

module.exports = pyramid;

/**
 * My Solution: (Attempted)
 */
// function pyramid(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 1; row <= n; row++) {
//     // Create an empty string, 'level'
//     let level = ''
//     // From 1 to (n+2) (iterate through columns)
//     for (let column = 1; column <= (n * 2 - 1); column++) {
//       // IF the current column is equal to Math.floor((n+2)/2)
//       if (column === Math.floor((n * 2 - 1) / 2)) {
//         // Add a '#' to level
//         level += '#'
//       } else {
//         // Add a space to 'level'
//         level += " "
//       }
//     }
//     // Console log 'level'
//     console.log(level)
//   }
// }

/**
 * My Solution #1a: Iterative approach (with lots of help)
 */
// function pyramid(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // Create an empty string, 'level'
//     let level = "";
//     // From 1 to (n+2) (iterate through columns)
//     for (let column = 0; column < n * 2 - 1; column++) {
//       // IF the current column is equal to Math.floor((n+2)/2)
//       if (
//         column >= Math.floor((n * 2 - 1) / 2) - row &&
//         column <= Math.floor((n * 2 - 1) / 2) + row
//       ) {
//         // Add a '#' to level
//         level += "#";
//       } else {
//         // Add a space to 'level'
//         level += " ";
//       }
//     }
//     // Console log 'level'
//     console.log(level);
//   }
// }

/**
 * Official Solution #1: Iterative approach
 */
// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < n * 2 - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

/**
 * Official Solution #2: Recursive approach
 */
// function pyramid(n, row = 0, level = "") {
// 	// If (row === n) (Base case)
// 	if (n === row) {
// 		return;
// 	}

// 	if (n * 2 - 1 === level.length) {
// 		console.log(level);
// 		pyramid(n, row + 1);
// 		return;
// 	}

// 	const midpoint = Math.floor((n * 2 - 1) / 2);
// 	let add;
// 	if (midpoint - row <= level.length && midpoint + row >= level.length) {
// 		add = "#";
// 	} else {
// 		add = " ";
// 	}

// 	pyramid(n, row, level + add);
// }
