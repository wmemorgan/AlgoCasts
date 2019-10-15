// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const arr = [root, "s"];
	const counters = [0];

	while (arr.length > 1) {
		const node = arr.shift();

		if (node === "s") {
			counters.push(0);
			arr.push("s");
		} else {
			arr.push(...node.children);
			counters[counters.length - 1]++;
		}
	}

	return counters;
}

module.exports = levelWidth;

/**
 * My Solution
 */
// function levelWidth(root) {
//   const counters = [0];
//   const arr = [root, "s"];

//   while (arr.length > 1) {
//     if (arr[0] === "s") {
//       arr.shift();
//       arr.push("s");
//       counters.push(0);
//     }

//     const node = arr.shift();
//     if (node.children) {
//       arr.push(...node.children)
//     }

//     counters[counters.length - 1]++;
//   }

//   return counters;
// }
/**
 * Official Solution
 */
// function levelWidth(root) {
//   const arr = [root, "s"];
//   const counters = [0];

//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === "s") {
//       counters.push(0);
//       arr.push("s");
//     } else {
//       arr.push(...node.children);
//       counters[counters.length - 1]++;
//     }
//   }

//   return counters;
// }