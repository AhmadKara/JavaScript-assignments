let dateNow = new Date();
let birthday = new Date("12 Dec, 2005");
let dateDiff = dateNow - birthday;

console.log(`${Math.round(dateDiff / 1000)} Seconds`);
console.log(`${Math.round(dateDiff / 1000 / 60)} Minutes`);
console.log(`${Math.round(dateDiff / 1000 / 60 / 60)} Hours`);
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);

/////////////////////////////////

dateNow.setTime(1000);
dateNow.setHours(0);
dateNow.setFullYear(1980);
console.log(dateNow);

/////////////////////////////////

let datenow = new Date();
datenow.setDate(-1);
console.log(datenow);

let arrMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(`Previous Month Is ${arrMonths[datenow.getMonth()]} And Last Day Is ${datenow.getDate()}`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
