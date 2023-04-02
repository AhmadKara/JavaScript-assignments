let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function () {
  console.log(req.responseText);
  if (this.readyState === 4 && this.status === 200) {
    console.log("Data Loaded");
  }
  let mainData = JSON.parse(req.responseText);
  for (let i = 0; i < mainData.length; i++) {
    mainData[i].section = "All";
    console.log(mainData[i]);
  }
  let updatedData = JSON.stringify(mainData);
  console.log(updatedData);
};

// JSON File
/* 

[
  {
    "id": 100,
    "name": "Ahmad",
    "title": "titleOne",
    "section": "sectionOne",
    "content": "contentOne"
  },
  {
    "id": 101,
    "name": "nameTwo",
    "title": "titleTwo",
    "section": "sectionTwo",
    "content": "contentTwo"
  },
  {
    "id": 102,
    "name": "nameThree",
    "title": "titleThree",
    "section": "sectionThree",
    "content": "contentThree"
  },
  {
    "id": 103,
    "name": "nameFour",
    "title": "titleFour",
    "section": "sectionFour",
    "content": "contentFour"
  },
  {
    "id": 104,
    "name": "nameFive",
    "title": "titleFive",
    "section": "sectionFive",
    "content": "contentFive"
  }
]

*/
