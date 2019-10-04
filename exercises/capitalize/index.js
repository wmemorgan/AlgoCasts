// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Create 'result' which is the first character of the input string capitalized
  let result = `${str[0].toUpperCase()}`
  // For each character in the string
  for (let i = 1; i < str.length; i++) {
    // IF the character to the left of a space
    if (str[i - 1] === " ") {
      // Capitalize it and add it to 'result'
      result += str[i].toUpperCase()
    } else {
      //Add it to 'result'
      result += str[i]
    }    
  }
  console.log(`${str} result: `, result)
  return result
}

capitalize("a short sentence");

module.exports = capitalize;

/**
 * My Solution
 */
// function capitalize(str) {
//   // Split string into arrays based on whitespace
//   const newArr = str.split(" ").map(element => {
//     // Capitalize the first letter in each element
//     return `${element[0].toUpperCase()}${element.slice(1)}`;
//   });
//   console.log(`${str} converts to: `, newArr.join(" "));
//   return newArr.join(" ");
// }

/**
 * Official Solution #1
 */
// function capitalize(str) {
//   // Make an empty array 'words'
//   const words = []
//   // Split the input string by space to get an array
//   for (let word of str.split(' ')) {
//     // For each word in the array
//     // Uppercase the first letter of the word
//     // Join first letter with rest of the string
//     // Push result into 'words' array
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }

//   // Join 'words' into a string and return it
//   return words.join(' ')
// }

/**
 * Official Solution #2
 */
// function capitalize(str) {
//   // Create 'result' which is the first character of the input string capitalized
//   let result = `${str[0].toUpperCase()}`
//   // For each character in the string
//   for (let i = 1; i < str.length; i++) {
//     // IF the character to the left of a space
//     if (str[i - 1] === " ") {
//       // Capitalize it and add it to 'result'
//       result += str[i].toUpperCase()
//     } else {
//       //Add it to 'result'
//       result += str[i]
//     }
//   }
//   console.log(`${str} result: `, result)
//   return result
// }
