// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// I got confused with the invocation process by saying firsindex = color1.
// I've been stuck on removing the first index and shuffling. I've created a variable within the function array2 that uses .shift() which removes the first element. I've also created a variable called shuffled array which randomizes the values within the array. In my return statement I am calling on the firstIndex and shuffled array which should return the first index of the array removed and shuffle the remaining values. Instead I'm just getting the array randomized. 

const colors1 = ["purple", "blue", "green", "yellow", "pink"];


// const array2 = (array) => {
//   const firstIndex = array.shift();
//   const shuffledArray = array.sort((a , b) => Math.random() - 0.5);
//   return [firstIndex, ...shuffledArray];
// };

// console.log(array2(colors1));
  

// // a) Create a test with an expect statement using the variable provided.
// // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe('arrayContaining', () => {
  
//   const expected = ["purple", "blue", "green", "yellow", "pink"];
//   it('matches even if received contains additional elements', () => {
//     expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(["blue", "green", "yellow", "pink"]).not.toEqual(expect.arrayContaining(expected));
//   });
// });




// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
describe("expectedVotes", () => {
  it("should take in an object that contains up votes and down votes and returns the end tally", () => {
expect(expectedVotes(votes1)).toEqual(11);
expect[expectedVotes(votes2)].toEqual(-31)
  })
})
const expectedVotes = (votes) => {
  return votes.upVotes = votes.downvotes
}
console.log(expectedVotes(votes1));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
