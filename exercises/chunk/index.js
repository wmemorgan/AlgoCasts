// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
chunk(arr, 2);

module.exports = chunk;

/**
 * My Solution
 */
// function chunk(array, size) {
//   const chunkedArr = [];
//   let subArr = [];
//   for (let el of array) {
//     if (subArr.length === size) {
//       chunkedArr.push(subArr);
//       subArr = [];
//       subArr.push(el);
//     } else {
//       subArr.push(el);
//     }
//   }

//   if (subArr.length > 0) {
//     chunkedArr.push(subArr);
//   }
//   console.log(`Final chunkedArr: `, chunkedArr);
//   return chunkedArr
// }

/**
 * Official Solution #1
 */
// function chunk(array, size) {
//   // Create empty array to hold chunks
//   const chunked = [];
//   // For each element in the 'unchunked' array
//   for (let element of array) {
//     // Retrieve the last element in 'chunked'
//     const last = chunked[chunked.length - 1];
//     // If last element does not exist or if
//     // it's length is equal to chunk size
//     if (!last || last.length === size) {
//       // Push a new chunk into 'chunked'
//       // with the current element
//       chunked.push([element]);
//     } else { // Else add the current element into the chunk
//       last.push(element);
//     }
//   }

//   return chunked;
// }


/**
 * Official Solution #2
 */
// function chunk(array, size) {
//   // Create empty 'chunked' array
//   const chunked = []
//   // Create index start at 0
//   let index = 0
//   while (index < array.length) {
//     // Push a slice of length 'size'
//     // from array into 'chunked'
//     chunked.push(array.slice(index, index + size))
//     // Add 'size' to 'index'
//     index += size
//   }

//   console.log(chunked)
//   return chunked
// }
