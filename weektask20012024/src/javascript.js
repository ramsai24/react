import "./components/card/card.css";
import "./components/paginationButton/pagination.css";

export let dataArrObj = [];

export let dateList = ["Mueller-Turner", "Skiles Group"];

export let btn = [[]];

export let newArray = [];

console.log(dateList);

let paginationBtnContainer = document.querySelector(".pagination-btns");

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
  // let cardsContainer = document.querySelector("#cardsContainer");
  // cardsContainer.textContent = "";
  //   console.log(event.target.value);
  // let onsearchValue = event.target.value;
  //   console.log(dateList);
  // for (let each of dateList) {
  // console.log(each);
  // if (each.toUpperCase().includes(onsearchValue.toUpperCase())) {
  // createAndAppend(each);
  // }
  // }
};

export let newValuesDataList = (dataList) => {
  return dataList;
};

export let newed;

let count = 0;

export const onAdd = (event) => {
  let paginationBtnContainer = document.querySelector(".pagination-btns");
  //   console.log(event.target);
  count += 1;

  let inputEl = document.getElementById("inputEl");
  console.log(inputEl.value);
  // dateList.push(inputEl.value);
  let valueSearch = inputEl.value;
  // console.log(dateList);

  if (newArray.length === 0) {
    console.log("datelist triggerd");
    if (dateList.length >= 9) {
      console.log("if excute");
      newArray = [[...dateList]];
      //  console.log(array[array.length - 1])
      // if (array.length <= 9) {
      //     array.push(valueSearch)

      // } else {
      //     newArray.push(...array, valueSearch)
      // }

      // console.log(array)
      // console.log(newArray)

      // if (array[array.length - 1].length >= 9) {
      //     array.push([valueSearch])
      // } else {
      //     array[array.length - 1].push(valueSearch)
      // }
    } else {
      console.log("else excute");
      dateList.push(valueSearch);
      console.log(dateList);
    }
    // dateList = [...newArray];
  } else {
    console.log("newArray Triggered");
    if (newArray[newArray.length - 1].length >= 9) {
      newArray.push([valueSearch]);
    } else {
      newArray[newArray.length - 1].push(valueSearch);
    }
    dateList = [...newArray];
  }

  // console.log(array)
  console.log(newArray);
  // console.log(dateList);

  // if (type(dateList[0] === Array)) {
  // }

  if (newArray.length > 0) {
    paginationBtnContainer.textContent = "";

    // dateList.map((each) => {
    //   newButton.setAttribute("key", `button${count}`);
    //   newButton.id = `button${count}`;
    //   newButton.setAttribute("type", "button");
    //   newButton.textContent = newArray.length;
    //   paginationBtnContainer.appendChild(newButton);
    // });
  }
  let cnt = 0;
  if (newArray.length >= 1) {
    for (let each of newArray) {
      cnt += 1;
      console.log(each);
      let newButton = document.createElement("button");
      newButton.setAttribute("key", `button${count}`);
      newButton.id = `button${count}`;
      newButton.setAttribute("type", "button");
      newButton.textContent = cnt;
      newButton.classList.add("page-btn");
      newButton.onclick = function () {
        for (let eachCard of dateList[cnt - 1]) {
          console.log(eachCard);
          createAndAppend(eachCard);
        }
      };
      paginationBtnContainer.appendChild(newButton);
    }
  }

  // let allPageBtn = document.querySelectorAll(".page-btn");
  // // console.log(allPageBtn);
  // for (let eachBtn of allPageBtn) {
  //   // console.log(eachBtn.id);
  //   let eventPageBtn = document.querySelector(`#${eachBtn.id}`);
  //   console.log(eventPageBtn);
  // }

  //   //--------------before pagination------------

  //   if (dateList.length >= 9) {
  //     dateList.push([...dateList]);
  //   } else {
  //     dateList.push(inputEl.value);
  //   }
  //   //   addObject(inputEl.value);
  //   //   let inputValue = inputEl.value;
  //   let cardsContainer = document.querySelector("#cardsContainer");

  //   cardsContainer.textContent = "";

  //   let newDataArrObj = [];

  //   for (let each of dateList) {
  //     // console.log(each);
  //     let addObjNew = {};
  //     addObjNew["id"] = each;
  //     addObjNew["title"] = each;
  //     addObjNew["name"] = each;
  //     newDataArrObj.push(addObjNew);
  //   }
  //   //   console.log(newDataArrObj);

  //   for (let obj of newDataArrObj) {
  //     // console.log(obj);
  //     createAndAppend(obj.name);
  //   }
  // };

  // //   "Parisian and Sons",
  // //   "Dach-Longash",
  // //   "Mueller- Turner",
  // //   "Skiles  Group",
  // //   "Crooks- Volkman",
  // //   "Parisian  and Sons",
  // //   "Dach- Longash",
  // //   "Mueller-  Turner",
  // //   "Skiles   Group",
  // //   "Crooks-  Volkman",
  // //   "Parisian   and Sons",
  // //   "Dach-Longash",
  // //   "Mueller-Turner",
  // //   "Skiles Group",
  // //   "Crooks-Volkman",
  // //   "Parisian and Sons",
  // //   "Dach-Longash",

  // // let cardContainer = document.getElementById("cardsContainer");
  // // console.log(cardContainer);
  // export const cl = (event) => {
  //   console.log(event.target.children);
  //   let childArray = [];

  //   for (let each of event.target.children) {
  //     // console.log(each);
  //     // console.log(each.id);
  //     childArray.push(each.id);
  //   }

  //   console.log(childArray);

  //     //--------------before pagination------------
};

// cl();
