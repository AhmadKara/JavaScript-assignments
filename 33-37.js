// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
  console.log(`00${num1}`);
} else if (num1 > 10 && num1 < 100) {
  console.log(`0${num1}`);
} else if ((num1) => 100) {
  console.log(num1);
}

// Test Case 2
let num2 = 20; // "020"
if (num2 < 10) {
  console.log(`00${num2}`);
} else if (num2 > 10 && num2 < 100) {
  console.log(`0${num2}`);
} else if ((num2) => 100) {
  console.log(num2);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 < 10) {
  console.log(`00${num3}`);
} else if (num3 > 10 && num3 < 100) {
  console.log(`0${num3}`);
} else if ((num3) => 100) {
  console.log(`${num3}`);
}

let number = 9;
let str = "9";
let str2 = "20";

// Output
if (number == str) {
  console.log("{number} Is The Same Value As {str}");
}
if (number == str && number !== str) {
  console.log("{number} Is The Same Value As {str} But Not The Same Type");
}
if (number !== str) {
  console.log("{number} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

let number1 = 10;
let number2 = 30;
let number3 = "30";

// Needed Output
if (number3 > number1 && typeof number2 != typeof number3) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}
if (number3 > number1 && number2 == number3) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
}
if (number3 !== number1 && typeof number3 != typeof number2) {
  console.log(
    "{number3} Value And Type Is Not The Same As {number1} And Type Is Not The Same As {number2}"
  );
}

// Edit What You Want Here

let nom1 = 15;
let nom2 = 6;
let nom3 = 15;
let nom4 = 45;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (nom1 > nom2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (nom1 > nom2 && nom1 < nom4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (nom1 > nom2 && nom1 === nom3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (nom1 + nom2 < nom4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (nom1 + nom3 < nom4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (nom1 + nom2 + nom3 < nom4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (nom4 - (nom1 + nom3) + nom2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
