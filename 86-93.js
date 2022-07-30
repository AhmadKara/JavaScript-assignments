console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("elemnt"));
console.log(document.getElementsByName("js"));
console.log(document.getElementsByTagName("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelector(".element"));
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);

///////////////////////////////////

let allImages = document.getElementsByTagName("img");

for (let i = 0; i < allImages.length; i++) {
  allImages[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  allImages[i].alt = "Elzero Logo";
  console.log(allImages);
}

///////////////////////////////////////

let dollarInput = document.querySelector("[name = 'dollar']");
let myDiv = document.querySelector("[class = 'result']");

dollarInput.oninput = function () {
  myDiv.innerHTML = `{${dollarInput.value}} USD Dollar = {${(
    dollarInput.value * 3.75
  ).toFixed(2)}} Saudi Riyal`;
};

//////////////////

let one = document.querySelector("[class = 'one']");
let two = document.querySelector("[class = 'two']");

one.title = one.className;
two.title = two.className;
one.textContent = one.title;
two.textContent = two.title + " " + two.attributes.length;

console.log(one);
console.log(two);

////////////////////////////////

// HTML Code:

/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS</title>
  <style>body{background-color: black; color: white;}</style>
</head>
<body>
  <div id="elzero" class="element" name="js">JavaScript</div>
  <hr>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <div>
    <img src="#" alt="" />
  </div>
  <hr>
  <form action="">
    <input type="number" name="dollar" placeholder="USD Dollar" />
    <div class="result">{0} USD Dollar = {0} Saudi Riyal</div>
  </form>
  <hr>
  <div class="one" title="two">Two</div>
  <div class="two" title="one">One</div>
  <hr>
  <img src="#" alt="One" />
  <img src="#" />
  <img src="#" alt="Three" />
  <img src="#" />
  <img src="#" />
  <script src="main.js"></script>
</body>
</html>




*/
