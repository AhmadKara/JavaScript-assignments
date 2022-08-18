let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

// // Needed Output
// Set(3) {10, 20, 2}
// 2

//////////////////////////

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myFriendsSort = Array.from(new Set(myFriends.sort()));
console.log(myFriendsSort);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//////////////////////////

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

//////////////////////////

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().join(""));

// Needed Output
// 123

//////////////////////////

let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//////////////////////////

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") {
    chars.unshift(...chars.splice(i, 1));
  }
}
let fristIndexChar = chars.findIndex((e) => typeof e === "string");

chars.copyWithin(0, fristIndexChar);
console.log(chars);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//////////////////////////

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log(Array.from([...numsOne, ...numsTwo]));

// Needed Output
// [1, 2, 3, 4, 5, 6]

//////////////////////////

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n1)); // 210

// Needed Output
// 210
