let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True






let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(0, 6).charAt(2).toUpperCase()); // Zero

// 8 H
console.log(a.slice(13, 14).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
