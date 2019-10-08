// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // Create empty array of arrays called results
  const results = Array(n);
  for (let i = 0; i < n; i++) {
    results[i] = Array(n);
  }

  // Create a counter variable, starting at 1
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top: loop from startColumn (left) to endColumn (right)
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++
 
    // Right: loop from startRow (top) to endRow (bottom)
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // Bottom: loop from endColumn (right) to startColumn (left)
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // Left: loop from endRow (bottom) to startRow (top)
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }
  console.log(results)
  return results
}

matrix(4);

module.exports = matrix;

/**
 * My Solution Attempt
 */
// function matrix(n) {
//   // Create empty array of arrays called results
//   const results = Array(n);
//   for (let i = 0; i < n; i++) {
//     results[i] = Array(n);
//   }

//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;

//   for (let i = 0; i < n; i++) {
//     results[startRow][i] = counter
//     results[i][endColumn] = counter
//     counter++
//     startRow++
//     endRow--
//   }

//   console.log(results);
//   return results;
// }

/**
 * My Solution 1a: with lots of help
 * from Official Solution
 */
// function matrix(n) {
//   // Create empty array of arrays called results
//   const results = Array(n);
//   for (let i = 0; i < n; i++) {
//     results[i] = Array(n);
//   }

//   // Create a counter variable, starting at 1
//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;

//   while (startRow <= endRow && startColumn <= endColumn) {
//     // Top: loop from startColumn (left) to endColumn (right)
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter
//       counter++
//     }
//     startRow++

//     // Right: loop from startRow (top) to endRow (bottom)
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter
//       counter++
//     }
//     endColumn--

//     // Bottom: loop from endColumn (right) to startColumn (left)
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter
//       counter++
//     }
//     endRow--

//     // Left: loop from endRow (bottom) to startRow (top)
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter
//       counter++
//     }
//     startColumn++
//   }
//   console.log(results)
//   return results
// }

/**
 * Official Solution: Iterative approach
 */
// function matrix(n) {
//   // Create empty array of arrays called results
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   // Create a counter variable, starting at 1
//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   // As long as (start column <= end column) AND (start row <= end row)
//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top row: Loop from start column to end column
//     for (let i = startColumn; i <= endColumn; i++) {
//       // At results [start_row][i] assign counter variable
//       results[startRow][i] = counter;
//       // Increment counter
//       counter++;
//     }
//     // Increment start row
//     startRow++;

//     // Right column: Loop from start row to end row
//     for (let i = startRow; i <= endRow; i++) {
//       // At results[i][end_column] assign counter variable
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     // Decrement end column
//     endColumn--;

//     // Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       // Increment counter
//       counter++;
//     }
//     // Decrement end row
//     endRow--;

//     // Start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     // Increment start column
//     startColumn++;
//   }

//   // Return results
//   console.log(results);
//   return results;
// }