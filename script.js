// script.js

let display = document.getElementById("display");
let displayValue = "";

function appendCharacter(character) {
    if (displayValue === "0") {
        displayValue = character;
    } else {
        displayValue += character;
    }
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    display.innerText = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayValue = "0";
    }
    display.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        display.innerText = displayValue;
    } catch (e) {
        display.innerText = "Error";
        displayValue = "";
    }
}

function calculateLog() {
    try {
        let value = parseFloat(displayValue);
        if (value > 0) {
            displayValue = Math.log10(value).toString();
            display.innerText = displayValue;
        } else {
            display.innerText = "Error";
            displayValue = "";
        }
    } catch (e) {
        display.innerText = "Error";
        displayValue = "";
    }
}
