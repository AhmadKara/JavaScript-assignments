let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

// // Needed Output
// Set(3) {10, 20, 2}
// 2

//////////////////////

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
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
