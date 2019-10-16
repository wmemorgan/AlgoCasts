// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	// Implement algorithm
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let lesser = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = lesser;
			}
		}
	}

	// Return sorted array
	return arr;
}

function selectionSort(arr) {
	// Implement algorithm
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;

		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

    if (indexOfMin !== i) {
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}
	// Return sorted array
	return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
  
}

function merge(left, right) {
  // Implement algorithm
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
	// Return array
  return [...results, ...left, ...right]
}

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

console.log(mergeSort(getArray()))

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
/**
 * BubbleSort: My Solution
 */
// function bubbleSort(arr) {
//   // Implement algorithm
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }

//   // Return sorted array
//   return arr
// }
/**
 * Bubble Sort: Official Solution
 */
// function bubbleSort(arr) {
//   // Implement algorithm
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < (arr.length - i - 1); j++) {
//       if (arr[j] > arr[j + 1]) {
//         let lesser = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = lesser
//       }
//     }
//   }

//   // Return sorted array
//   return arr
// }

/**
 * SelectionSort: My Attempt
 */
// function selectionSort(arr) {
//   // Implement algorithm
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMin = i
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexOfMin]) {
//         indexOfMin = j
//       }
//     }

//     if (i !== indexOfMin) {
//       let higher = arr[indexOfMin]
//       let lower = arr[i]
//       arr[indexOfMin] = lower
//       arr[i] = higher
//     }
//   }
//   // Return sorted array
//   return arr
// }
/**
 * SelectionSort: Official Solution
 */
// function selectionSort(arr) {
//   // Implement algorithm
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMin = i;

//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexOfMin]) {
//         indexOfMin = j;
//       }
//     }

//     if (indexOfMin !== i) {
//       let lesser = arr[indexOfMin];
//       arr[indexOfMin] = arr[i];
//       arr[i] = lesser;
//     }
//   }
//   // Return sorted array
//   return arr;
// }
/**
 * Merge: My Solution
 */
// function merge(left, right) {
//   // Implement algorithm
//   const results = []
//
//   while (left.length || right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift())
//     } else {
//       results.push(right.shift())
//     }
//   }
//   // Return array
//   return results
// }
/**
 * Merge: Official Solution
 */
// function merge(left, right) {
//   // Implement algorithm
//   const results = []

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift())
//     } else {
//       results.push(right.shift())
//     }
//   }
//   // Return array
//   return [...results, ...left, ...right]
// }