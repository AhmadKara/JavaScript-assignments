function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.slice(0, zName.indexOf(" "));
    let lname = zName.slice(zName.indexOf(" "), zName.length);
    return `${fName} ${lname[1].toUpperCase()}.`;
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    let age = zAge.slice(0, zAge.indexOf(" "));
    return `Your Age Is ${age}`;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${country}`;
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

///////////////////////////////////////

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

////////////////////////////////////////

function specialMix(...data) {
  let counter = 0;
  let stringCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      counter += parseInt(data[i]);
    } else {
      stringCount++;
    }
  }
  if (counter == 0 && stringCount == data.length) {
    counter = "All Is Strings";
  }
  return counter;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
