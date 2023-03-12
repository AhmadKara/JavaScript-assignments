let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix
  .map(function (element) {
    return typeof element == "string" ? element : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

// Elzero
console.log(word);

let myString = "EElllzzzzzzzeroo";
let myString2 = myString
  .split("")
  .filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  })
  .join("");

// Elzero
console.log(myString2);

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numbers = numsAndStrings
  .filter(function (element) {
    return !isNaN(parseInt(element));
  })
  .map(function (element) {
    return -element;
  });

// [-1, -10, 10, 20, -5, -3]
console.log(numbers);

/*



*/

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, [])
  .join("");

// Elzero
console.log(newArray);

let nums = [2, 12, 11, 5, 10, 1, 99];
let fiveH = nums.reduce(function (acc, current) {
  return current % 2 == 0 ? acc * current : acc + current;
});

// 500
console.log(fiveH);
