"use strict";

// UI variables
const opBtn = document.querySelectorAll(".calculator_opbutton");
const numBtn = document.querySelectorAll(".calculator_numbutton");
const calcDisplay = document.querySelector(".calculator_display");
const clearBtn = document.querySelector("#clear");

// gives undefined

// const numBtn = document
//   .querySelectorAll(".calculator_numbutton")
//   .forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.target.value;
//       calcDisplay.innerHTML = numBtn;
//       console.log(numBtn);
//     });
//   });

numBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    calcDisplay.innerHTML = i.innerHTML;
    console.log(i);
  });
});

opBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    calcDisplay.innerHTML = i.innerHTML;
  });
});

// gives object nodelist
// const numBtn = document.querySelectorAll(".calculator_numbutton");
// for (var i = 0; i < numBtn.length; i++) {
//   numBtn[i].addEventListener("click", function () {
//     event.target.value;
//     calcDisplay.innerHTML = numBtn;
//     console.log(numBtn);
//   });
// }

// outputs

clearBtn.addEventListener("click", () => {
  calcDisplay.innerHTML = "0";
});
