let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\w|:)+/gi;
console.log(ip.match(ipRe));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /Os(\d+)?O/gi;
console.log(specialNames.match(specialNamesRe));
// Output
// ['Os10O', 'OsO', 'Os100O']

let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phoneRe));

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reDate = /\d+(\/|\s\-\s|\s)\d+(\/|\s\-\s|\s)\d+/gi; // Write Pattern Here
console.log(date1.match(reDate)); // "25/10/1982"
console.log(date2.match(reDate)); // "25 - 10 - 1982"
console.log(date3.match(reDate)); // "25 10 1982"
console.log(date4.match(reDate)); // "25 10 82"

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(https?:\/\/)?(www.)?\w+.\w+(:\d+\/\w+.\w+\?\w+\=\d+\&\w+\=\w+)?/gi; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
