// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false
  }

  return true

}

module.exports = validate;
/**
 * My Attempt
 */
// function validate(node, min = null, max = null) {
//   if (node.data > node.left.data) {
//     max = node.data;
//     node = node.left;
//   } else if (node.data < node.right.data) {
//     min = node.data;
//     node = node.right;
//   }

//   if (!node.left) {
//     console.log("ENDING node", node)
//     console.log("ENDING MAX", max)
//     console.log(`!node.left NODE.DATA ${node.data} <  MAX ${max}`)
//     return node.data < max;
//   } else if (!node.right) {
//     console.log("ENDING node", node)
//     console.log("ENDING MIN", min)
//     console.log(`!node.right NODE.DATA ${node.data} > MIN ${min}`)
//     return node.data > min;
//   }

//   validate(node, min, max);
// }
/**
 * Official Solution
 */

// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) {
//     return false;
//   }

//   if (min !== null && node.data < min) {
//     return false;
//   }

//   if (node.left && !validate(node.left, min, node.data)) {
//     return false
//   }

//   if (node.right && !validate(node.right, node.data, max)) {
//     return false
//   }

//   return true

// }