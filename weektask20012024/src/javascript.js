import "./components/card/card.css";
import "./components/paginationButton/pagination.css";

export let dataArrObj = [];

export let dateList = ["Mueller-Turner", "Skiles Group"];

export let btn = [[]];

export let newArray = [];

// console.log(dateList);

let paginationBtnContainer = document.querySelector(".pagination-btns");

function createAndAppend(inputValue) {
  let cardsContainer = document.querySelector("#cardsContainer");
  // cardsContainer.textContent = "";

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
  // console.log(cardsContainer);
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

// console.log(dataArrObj);

export const onSearch = (event) => {
  // console.log("event trigggerd");
  let cardsContainer = document.querySelector("#cardsContainer");
  cardsContainer.textContent = "";
  // console.log(event.target.value);
  let onsearchValue = event.target.value;
  // console.log(dateList);
  for (let each of dateList) {
    // console.log(each);
    if (each.toUpperCase().includes(onsearchValue.toUpperCase())) {
      createAndAppend(each);
    }
  }
};

export const onSearchBtn = (event) => {
  // console.log("event trigggerd");
  let cardsContainer = document.querySelector("#cardsContainer");
  cardsContainer.textContent = "";
  // console.log(event.target.value);
  let onsearchBtnValue = document.getElementById("inputEl").value;
  // console.log(onsearchBtnValue);
  // console.log(dateList);
  for (let each of dateList) {
    // console.log(each);
    if (each.toUpperCase().includes(onsearchBtnValue.toUpperCase())) {
      // console.log(each);
      createAndAppend(each);
    }
  }
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
  // console.log(inputEl.value);
  // dateList.push(inputEl.value);
  let valueSearch = inputEl.value;
  // console.log(dateList);

  if (newArray.length === 0) {
    // console.log("datelist triggerd");
    if (dateList.length >= 9) {
      // console.log("if excute");
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
      // paginationBtnContainer.textContent = "";
      let cardsContainer = document.querySelector("#cardsContainer");
      cardsContainer.textContent = "";
      // console.log("else excute");
      dateList.push(valueSearch);
      // console.log(dateList);
      for (let el of dateList) {
        createAndAppend(el);
      }
    }
    // dateList = [...newArray];
  } else {
    // console.log("newArray Triggered");
    if (newArray[newArray.length - 1].length >= 9) {
      newArray.push([valueSearch]);
    } else {
      newArray[newArray.length - 1].push(valueSearch);
    }
    dateList = [...newArray];
  }

  // console.log(array)
  // console.log(newArray);
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
    let cardsContainer = document.querySelector("#cardsContainer");

    for (let each of newArray) {
      cnt += 1;
      // console.log(cnt - 1);
      // console.log(each);
      let newButton = document.createElement("button");
      newButton.setAttribute("key", `button${count}`);
      newButton.id = cnt + "button";
      newButton.setAttribute("type", "button");
      newButton.textContent = cnt;
      newButton.classList.add("page-btn");
      newButton.onclick = function () {
        // cardsContainer.textContent = "";
        for (let eachCard of newArray[cnt - 1]) {
          // console.log(eachCard);
          createAndAppend(eachCard);
        }
      };
      paginationBtnContainer.appendChild(newButton);
    }
  }

  let allPageBtn = document.querySelectorAll(".page-btn");
  // console.log(allPageBtn);
  // console.log(allPageBtn.length);

  for (let eachBtn of allPageBtn) {
    // console.log(eachBtn);
  }
  if (newArray.length > 0) {
    for (let c = 1; c <= allPageBtn.length - 2; c++) {
      // console.log(c);
      let paginationEvent = document.getElementById(`${c}button`);

      // console.log(paginationEvent);
      paginationEvent.onclick = function () {
        let cardsContainer = document.querySelector("#cardsContainer");
        paginationEvent.classList.add("color-red");
        let allPageBtn = document.querySelectorAll(".page-btn");
        console.log(allPageBtn);
        for (let remove of allPageBtn) {
          // console.log(remove.id);
          if (remove.id !== `${c}button`) {
            console.log(remove.id);
            let removeColor = document.getElementById(remove.id);
            console.log(removeColor);
            // removeColor.classList.remove("color-red");
          }
        }
        cardsContainer.textContent = "";
        // console.log(newArray[c - 1]);
        for (let element of newArray[c - 1]) {
          // console.log(element);

          createAndAppend(element);
        }
      };
    }
  }

  // for (let eachBtn of allPageBtn) {
  //   // console.log(eachBtn.id);
  //   console.log(eachBtn);

  //   // let eventPageBtn = document.querySelector(`#${eachBtn.id}`);
  //   // console.log(eventPageBtn);
  //   // eventPageBtn.onclick = function () {
  //   //   for (let eachCard of newArray[eachBtn.id]) {
  //   //     console.log(eachCard);
  //   //     createAndAppend(eachCard);
  //   //   }
  //   // };
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

// let allPageBtn = document.querySelectorAll(".page-btn");
// console.log(allPageBtn);

// for (let but of allPageBtn) {
//   but.onclick = function (event) {
//     console.log(but);
//   };
// }

let arrowCount = 0;

export const rightArrow = () => {
  if (newArray.length > 0) {
    arrowCount += 1;

    if (arrowCount >= newArray.length) {
      arrowCount = newArray.length - 1;
    }
    // if (arrowCount <= newArray.length){
    let cardsContainer = document.querySelector("#cardsContainer");

    cardsContainer.textContent = "";

    let presentArrow = newArray[arrowCount];

    for (let eachItem of presentArrow) {
      createAndAppend(eachItem);
    }

    // }
  }
};

export const leftArrow = () => {
  arrowCount -= 1;
  if (newArray.length > 0) {
    if (arrowCount <= 0) {
      arrowCount = 0;
    }
    let cardsContainer = document.querySelector("#cardsContainer");

    cardsContainer.textContent = "";

    let presentArrow = newArray[arrowCount];

    for (let eachItem of presentArrow) {
      createAndAppend(eachItem);
    }
  }
};
