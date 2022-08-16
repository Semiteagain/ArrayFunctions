var numbers = [3, 56, 2, 48, 5];

// forEach
// var newNumberEach = [];

// function doubleEach(x) {
//   newNumberEach.push(x * 3)
// }
// numbers.forEach(doubleEach);
// console.log(newNumberEach);

//Map -Create a new array by doing something with each item in an array.

function doubleMap(x) {
  return x * 3;
}

const newNumberMap = numbers.map(doubleMap);

console.log(newNumberMap);
//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
