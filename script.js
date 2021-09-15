"use strict";

// UI variables
const opBtn = document.querySelectorAll(".calculator_opbutton");
const numBtn = document.querySelectorAll(".calculator_numbutton");
const calcDisplay = document.querySelector(".calculator_display");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");


// outputs 

let firstClickNum = "";
let secondClickNum;
let equalsOutput;
let operator;
let displayValue = "";


// display

clearBtn.addEventListener("click", () => {
  calcDisplay.innerHTML = "0";
  firstClickNum = "";
  displayValue = "";
});

numBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    displayValue =  displayValue + i.innerHTML;
    calcDisplay.innerHTML = displayValue;
  });
});

opBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    operator = i.innerHTML;
    firstClickNum = calcDisplay.innerHTML;
    displayValue = "";
    calcDisplay.innerHTML = i.innerHTML;
  });
});




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

// how to get equals button to appear?

// decimal function 

decimal.addEventListener("click", () => {
  displayValue = displayValue + ".";
  calcDisplay.innerHTML = displayValue;
  // if (!firstClickNum.includes(".")) {
  //   firstClickNum += ".";
  //   calcDisplay(calculator);
  
});

