let start = 10;
let end = 100;
let exclude = 40;

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

for (let i = start; i <= end; i += start) {
  if (i != exclude) {
    console.log(i);
  }
}

////////////////////

let start1 = 10;
let end1 = 0;
let stop1 = 3;

// Output
10;
09;
08;
07;
06;
05;
04;
03;

for (let i = start1; i >= stop1; i--) {
  if (i < start1) {
    console.log(`${end1}${i}`);
  } else {
    console.log(`${i}`);
  }
}

///////////////////////

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
  console.log(`${i}`);
  for (let j = breaker; j < end2; j += breaker) {
    console.log(`-- ${j}`);
  }
}

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

///////////////////////

let index = 10;
let jump = 2;
let endd = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump + jump) {
    break;
  }
}

// Output
10;
8;
6;
4;

//////////////////////////////

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let counter = letter.length;
for (i = counter - counter; i < friends.length; i++) {
  if (friends[i].charAt(0) === letter.toUpperCase()) {
    continue;
  } else {
    console.log(`("${counter} => ${friends[i]}")`);
    counter++;
  }
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

//////////////////////////

let start3 = 0;
let swappedName = "elZerO";
let swappedNameFinished = "";

for (i = start3; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedNameFinished += swappedName[i].toLowerCase();
  } else {
    swappedNameFinished += swappedName[i].toUpperCase();
  }
}
console.log(swappedNameFinished);

// Output
("ELzERo");

////////////////////////////

let start4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = ++start4; i <= 4; i++) {
  if (i === 1) {
    continue;
  }
  if (typeof i === "string") {
    continue;
  } else {
    console.log(i);
  }
}

// Output
2;
3;
4;
