// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(100000.000); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(); // 16


let myVar = "100.56789 Views";

console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57



let num = 10;

console.log(true+(Number.isInteger(num))); // 2


let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10





let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Number.parseInt(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(Math.round(d)); // 2
console.log(+d.toFixed(0)); // 2

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number
