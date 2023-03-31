let dateNow = new Date();
let birthday = new Date("Dec 12, 2005");
let me = dateNow - birthday;

console.log(`${Math.floor(me / 1000)} Seconds`);
console.log(`${Math.floor(me / 1000 / 60)} Minutes`);
console.log(`${Math.floor(me / 1000 / 60 / 60)} Hours`);
console.log(`${Math.floor(me / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.floor(me / 1000 / 60 / 60 / 24 / 31)} Months`);
console.log(`${Math.floor(me / 1000 / 60 / 60 / 24 / 365)} Years`);
// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// Needed Output
dateNow.setFullYear(1980, 0, 1);
dateNow.setHours(0, 0, 1);
console.log(dateNow);

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

dateNow = new Date();
dateNow.setDate(0);
console.log(dateNow);
let arrMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  `Previous Month Is ${
    arrMonths[dateNow.getMonth()]
  } And Last Day Is ${dateNow.getDate()}`
);
// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

let start = performance.now();

for (let i = 0; i < 99; i++) {
  console.log(i);
}

let end = performance.now();
console.log(`Loop Took ${Math.trunc(end - start)} Milliseconds.`);

// Write Your Generator Function Here
function* gen() {
  let index = 14;
  let num = 140;
  let sum = num + index;
  yield index;
  while (true) {
    yield sum;
    sum += num += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-one.js File
// export default function (num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// mod-two.js File
// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names

// export { a as numOne, b as numTwo, c as numThree };

// HTML File
// <script src="main.js" type="module"></script>
// <script src="mod-one.js" type="module"></script>
// <script src="mod-two.js" type="module"></script>
