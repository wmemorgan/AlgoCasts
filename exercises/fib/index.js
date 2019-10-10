// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) {
			return cache[args];
    }
    
    const result = fn.apply(this, args);
    cache[args] = result
    
    return result
	};
}

function slowFib(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(4));
fib(4);

module.exports = fib;

/**
 * My Solution: Iterative Approach
 */
// function fib(n) {
//   const fibArr = [];
//   let nextNum;

//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       nextNum = 0;
//     } else if (i === 1) {
//       nextNum = 1;
//     } else {
//       nextNum = fibArr[i - 2] + fibArr[i - 1];
//     }

//     fibArr.push(nextNum);
//   }
//   console.log(fibArr);
//   console.log(nextNum);
//   return nextNum;
// }

/**
 * My Solution: Recursive Approach
 */
// function fib(n, fibArr = [0, 1]) {
//   let nextNum = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]
//   // Base case
//   if (n === fibArr.length) {
//     console.log(fibArr)
//     console.log(nextNum)
//     return nextNum
//   }

//   fibArr.push(nextNum)

//   fib(n, fibArr)

// }

/**
 * Official Solution: Iterative Approach
 */
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n]
// }
/**
 * Official Solution: Recursive Approach
 * NOTE: Exponential Time (Very bad)
 */
// function fib(n) {

//   if (n < 2) {
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }
/**
 * Official Solution: Memoization Approach
 */
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result

//     return result
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);