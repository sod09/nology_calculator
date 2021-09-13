"use strict"; // UI variables

var opBtn = document.querySelectorAll(".calculator_opbutton");
var numBtn = document.querySelectorAll(".calculator_numbutton");
var calcDisplay = document.querySelector(".calculator_display");
var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function () {
  calcDisplay.innerHTML = "0";
});