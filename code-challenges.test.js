// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


//pseudocode: input - create a test using expect statements. Create a function that will pass
// Output: New arrays with the first indexes of the removed and the rest of the array randomized with the given values
// First create a variable called expected with an array of colors. Next create the test using expect statements. Now I'm going to use a new concept I learned from the given material provided to aide us in our assessment. expect.arrayContaining(expected)
// For my function I will be using the spread operator syntax that allows the iterable objects to be passed into a new array
// Next create new variables for the arrays that will be shuffled. using .sort and math.random
// return the shuffled arrays
// console.log so I can see outputted results of the function in terminal


// Where I got stuck for hours!!!!

// I got confused with the invocation process by saying firsindex = color1.
// I've been stuck on removing the first index and shuffling. I've created a variable within the function array2 that uses .shift() which removes the first element. I've also created a variable called shuffled array which randomizes the values within the array. In my return statement I am calling on the firstIndex and shuffled array which should return the first index of the array removed and shuffle the remaining values. Instead I'm just getting the array randomized. 



const colors1 = ["purple", "blue", "green", "yellow", "pink"];
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// // a) Create a test with an expect statement using the variable provided.
// // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrayContaining', () => {
  
  const expected = ["purple", "blue", "green", "yellow", "pink"];
  it('matches even if received contains additional elements', () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(["blue", "green", "yellow", "pink"]).not.toEqual(expect.arrayContaining(expected));
  });
});

// PASS  ./code-challenges.test.js
// arrayContaining
//   ✓ matches even if received contains additional elements (2 ms)
//   ✓ does not match if received does not contain expected elements

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const array2 = (array1, array2) => {
  const [value1, ...new1] = array1;
  const [value2, ...new2] = array2
  const shuffledArray1 = new1.sort(() => Math.random() - 0.5)
  const shuffledArray2 = new2.sort(() => Math.random() - 0.5)
  return [shuffledArray1, shuffledArray2]
};
console.log(array2(colors1, colors2));





// output: [
//   [ 'yellow', 'green', 'blue', 'pink' ],
//   [ 'indigo', 'periwinkle', 'aquamarine', 'saffron', 'ochre' ]
// ]
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Pseudocode: 
// input: create a test with expect statements. Next, create a function that will make it pass
// output: the function will give the final value of the counted votes
// First create a test with the variable "expectedVotes"
// In the expect statements call upon the expectedVotes variable and invoke them using the provided variables and pass in the final count of the votes
// Next create the function using the variable "expected votes" and pass a value into the parameter
// The method will be simple, no overthinking here. Definitely did not overthink this one at all for an hour.
// make a return for the upvotes and subtract the downvotes.
// console.log expected votes and provided variables to output the final numbers in terminal

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
// describe("expectedVotes", () => {
//   it("should take in an object that contains up votes and down votes and returns the end tally", () => {
// expect(expectedVotes(votes1)).toEqual(11);
// expect(expectedVotes(votes2)).toEqual(-31)
//   })
//})

// PASS  ./code-challenges.test.js
// expectedVotes
//   ✓ should take in an object that contains up votes and down votes and returns the end tally (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.
// const expectedVotes = (votes) => {
//   return votes.upVotes - votes.downVotes
// }
// console.log(expectedVotes(votes1));
// console.log(expectedVotes(votes2));

// output: 11 , -31
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


// Pseudocode:
// input - create a test with expect statements using the variables provided, create a function that will allow the test to pass
// output - the function will take in two arrays as arguments and return a single array with no duplicate values.

// create an expect statement with the variable "arrayOutPuts", and describe what it is doing with a string in the "it" portion. I can pass both arrays in a single expect statement and .toEqual the combined arrays with no duplicates
// next create a function with the stretch goals method
// the function will be created with the variable arrayOutputs and pass two values within the parameter
// next create a variable that combines the two arrays using spread operators
// next create a new variable that uses the spread operator that will create a new array and set the combined arrays. return the new array
// console.log arrayOutPuts by passing the two given variables into the ()


// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// // ReferenceError: arrayOutPuts is not defined
// describe("arrayOutPuts", () => {
//   it("takes in two arrays as arguments and returns one array with no duplicate values.", () => { 
//     expect(arrayOutPuts(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
//   });
// });

// PASS  ./code-challenges.test.js
// expectedVotes
//   ✓ should take in an object that contains up votes and down votes and returns the end tally (2 ms)
// arrayOutPuts
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// b) Create the function that makes the test pass.
// const arrayOutPuts = (array1, array2) => {
//   const combinedArray = [...array1, ...array2]
//   const newArray = [...new Set(combinedArray)]
//   return newArray
// }
// console.log(arrayOutPuts(dataArray1, dataArray2));

// output: [
//   'array',
//   'object',
//   'number',
//   'string',
//   'Boolean',
//   'null',
//   'undefined'
// ]