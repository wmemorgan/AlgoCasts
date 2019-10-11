// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
	const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove())
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }

  console.log(q)
  return q
}

module.exports = weave;

/**
 * My Solution
 */
// const Queue = require("./queue");

// function weave(sourceOne, sourceTwo) {
//   const q = new Queue();
//   const iterationNum =
//     sourceOne.data.length >= sourceTwo.data.length
//       ? sourceOne.data.length
//       : sourceTwo.data.length;
//   console.log("iterationNum", iterationNum);

//   let loopCount = 0;

//   while (loopCount < iterationNum) {
//     if (sourceOne.peek() && sourceTwo.peek()) {
//       q.add(sourceOne.remove());
//       q.add(sourceTwo.remove());
//     } else if (!sourceOne.peek()) {
//       q.add(sourceTwo.remove());
//     } else if (!sourceTwo.peek()) {
//       q.add(sourceOne.remove());
//     }
//     loopCount++;
//   }
//   console.log("FINAL Q: ", q);
//   return q;
// }

/**
 * Official Solution
 */
// const Queue = require("./queue");

// function weave(sourceOne, sourceTwo) {
//   const q = new Queue();

//   while (sourceOne.peek() || sourceTwo.peek()) {
//     if (sourceOne.peek()) {
//       q.add(sourceOne.remove())
//     }

//     if (sourceTwo.peek()) {
//       q.add(sourceTwo.remove())
//     }
//   }

//   console.log(q)
//   return q
// }