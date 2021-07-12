// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: Number of characters in the string - 12
// b) Verify and explain:


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: "l" - pulling a value from the string based on the index
// b) Verify and explain:


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])


// a) Your answer: "Ruby" - using the square bracket to access a value by passing an index, languages[1]
// b) Verify and explain:


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: toUpperCase is a string method, the vaiable weekendDays is an array
// TypeError: weekendDays.toUpperCase is not a function - super great error message, the thing the method is being called on is either the wrong data type or undefined


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: string, number, [6, 7, 7]
// b) Verify and explain: "number", dataTypes.length --> 3, typeof 3 --> "number"
