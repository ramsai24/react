import "./components/card/card.css";

export let dataArrObj = [];

export let dateList = ["Mueller-Turner", "Skiles Group"];

console.log(dateList);

function createAndAppend(inputValue) {
  let cardsContainer = document.querySelector("#cardsContainer");

  let newCard = document.createElement("li");
  newCard.classList.add("card-item");
  newCard.key = inputValue;
  cardsContainer.appendChild(newCard);
  let newCon = document.createElement("div");
  newCard.appendChild(newCon);
  let head = document.createElement("h1");
  head.textContent = inputValue;
  head.classList.add("card-heading");
  newCon.appendChild(head);
  let para = document.createElement("p");
  para.textContent = inputValue;
  para.classList.add("card-para");
  newCon.appendChild(para);
  console.log(cardsContainer);
  //   let liEl = document.querySelectorAll(".cardsContainer li");
  //   console.log(liEl);
}

// function addObject(r) {
//   //   if (r !== "") {
//   //     dateList.push(r);
//   //   }

for (let each of dateList) {
  let dateObj = {};
  //   console.log(each);
  dateObj["id"] = each;
  dateObj["title"] = each;
  dateObj["name"] = each;

  //   console.log(dateObj);

  dataArrObj.push(dateObj);
  //   console.log(dataArrObj);
}
// }

// addObject();

console.log(dataArrObj);

export const onSearch = (event) => {
  let cardsContainer = document.querySelector("#cardsContainer");
  cardsContainer.textContent = "";
  //   console.log(event.target.value);
  let onsearchValue = event.target.value;
  //   console.log(dateList);
  for (let each of dateList) {
    // console.log(each);
    if (each.toUpperCase().includes(onsearchValue.toUpperCase())) {
      createAndAppend(each);
    }
  }
};

export const onAdd = (event) => {
  //   console.log(event.target);

  let inputEl = document.getElementById("inputEl");
  console.log(inputEl.value);
  dateList.push(inputEl.value);
  console.log(dateList);

  if (dateList.length >= 9) {
    dateList.push([...dateList]);
  } else {
    dateList.push(inputEl.value);
  }
  //   addObject(inputEl.value);
  //   let inputValue = inputEl.value;
  let cardsContainer = document.querySelector("#cardsContainer");

  cardsContainer.textContent = "";

  let newDataArrObj = [];

  for (let each of dateList) {
    // console.log(each);
    let addObjNew = {};
    addObjNew["id"] = each;
    addObjNew["title"] = each;
    addObjNew["name"] = each;
    newDataArrObj.push(addObjNew);
  }
  //   console.log(newDataArrObj);

  for (let obj of newDataArrObj) {
    // console.log(obj);
    createAndAppend(obj.name);
  }
};

//   "Parisian and Sons",
//   "Dach-Longash",
//   "Mueller- Turner",
//   "Skiles  Group",
//   "Crooks- Volkman",
//   "Parisian  and Sons",
//   "Dach- Longash",
//   "Mueller-  Turner",
//   "Skiles   Group",
//   "Crooks-  Volkman",
//   "Parisian   and Sons",
//   "Dach-Longash",
//   "Mueller-Turner",
//   "Skiles Group",
//   "Crooks-Volkman",
//   "Parisian and Sons",
//   "Dach-Longash",

// let cardContainer = document.getElementById("cardsContainer");
// console.log(cardContainer);
export const cl = (event) => {
  console.log(event.target.children);
  let childArray = [];

  for (let each of event.target.children) {
    // console.log(each);
    // console.log(each.id);
    childArray.push(each.id);
  }

  console.log(childArray);
};

// cl();
