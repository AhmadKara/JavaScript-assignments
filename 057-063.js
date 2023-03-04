function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//////////////////////////

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined || operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//////////////////////////////////////

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Your Age In Months => ${theAge * 12} Momths`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

////////////////////////////////////

function checkStatus(a, b, c) {
  if (c === true) {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
  } else if (c === false) {
    console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
  } else {
    console.log("Unknown");
  }
}

// Needed Output
checkStatus("Ahmad", 38, true); // "Hello Ahmad, Your Age Is 38, You Are Available For Hire"
checkStatus("Ahmad", 17, false); // "Hello Ahmad, Your Age Is 38, You Are Not Available For Hire"


////////////////////////////

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
