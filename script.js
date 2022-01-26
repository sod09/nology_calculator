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
let operator;
let displayValue = "";

// display

clearBtn.addEventListener("click", () => {
  calcDisplay.innerHTML = "0";
  firstClickNum = "";
  displayValue = "";
});

// this resets firstClickNum & displayValue back to "" so that it ends the string

numBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    displayValue = displayValue + i.innerHTML;
    calcDisplay.innerHTML = displayValue;
  });
});

// the display value here gives you the display value plus the numbers selected after

opBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    operator = i.innerHTML;
    firstClickNum = calcDisplay.innerHTML;
    displayValue = "";
    calcDisplay.innerHTML = i.innerHTML;
  });
});

// display value resets back to "" when the operator button is clicked so that the numbers do not concatenate

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

// decimal function

decimal.addEventListener("click", () => {
  displayValue = displayValue + ".";
  calcDisplay.innerHTML = displayValue;
});

// display value adds a decimal point when the decimal point is clicked
// it shows the display value plus the decimal
