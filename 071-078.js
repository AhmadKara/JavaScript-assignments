let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mix_Elzero = mix
  .map(function (ele, index, arr) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(mix_Elzero);
// Elzero

////////////////

let myString = "EElllzzzzzzzeroo";
let removeDublicate = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
  })
  .join("");
console.log(removeDublicate);

// Elzero

////////////////



let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let reversedNumbers = numsAndStrings.filter(function(ele){
  return ! isNaN(parseInt(ele));
}).map(function(ele){
  return ele * -1 ;
})

console.log(reversedNumbers)
// [-1, -10, 10, 20, -5, -3]

