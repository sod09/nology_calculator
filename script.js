"use strict";

// UI variables
const opBtn = document.querySelectorAll(".calculator_opbutton");
let numBtn = document.querySelectorAll(".calculator_numbutton");
const calcDisplay = document.querySelector(".calculator_display");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");


// outputs 

let firstClickNum;
let secondClickNum;
let equalsOutput;
let operator;


// display

clearBtn.addEventListener("click", () => {
  calcDisplay.innerHTML = "0";
});

numBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    calcDisplay.innerHTML = i.innerHTML;
  });
});

// how do we get multiple numbers?


opBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    operator = i.innerHTML;
    firstClickNum = calcDisplay.innerHTML;
    calcDisplay.innerHTML = i.innerHTML;
  });
});

// decimal function 

decimal.addEventListener("click", () => {
  calcDisplay.innerHTML= ".";
  if (!firstClickNum.includes(".")) {
    firstClickNum += ".";
    calcDisplay.innerHTML;
  }
  
})




// calculator function 

equalsBtn.addEventListener("click", calculator);

function calculator() {
  console.log(operator);
  if (operator === "+") {
    calcDisplay.innerHTML =
    parseFloat(firstClickNum) + parseFloat(calcDisplay.innerHTML);
  } else if (operator === "-") {
    calcDisplay.innerHTML =
    parseFloat(firstClickNum) - parseFloat(calcDisplay.innerHTML);
  } else if (operator === "/") {
    calcDisplay.innerHTML =
    parseFloat(firstClickNum) / parseFloat(calcDisplay.innerHTML);
  } else if (operator === "*") {
    calcDisplay.innerHTML =
    parseFloat(firstClickNum) * parseFloat(calcDisplay.innerHTML);
  }
}

