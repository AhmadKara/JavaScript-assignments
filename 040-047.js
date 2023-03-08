// 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = 3;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.length = 3;
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

//5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack[1] === needle) {
  console.log("Found");
}

if (haystack.indexOf(needle)) {
  console.log("Found");
}

//6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2)
allArrs = allArrs.sort().join("").toLowerCase();
console.log(allArrs.slice(4)); // fxy


// The Challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.reverse().slice(--counter);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

console.log(`${my[zero].slice(--zero, --counter)}${my[counter].slice(counter)}`); // "Elzero"

console.log(`${my[counter].slice(--zero - --counter, zero)}${my[++counter].slice(zero).toUpperCase()}`); // "rO"
