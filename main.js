document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let expression = "";

    function updateDisplay() {
        display.value = expression;
    }

    function animateButton(button) {
        if (button) {
            button.classList.add("button-pressed");
            setTimeout(() => button.classList.remove("button-pressed"), 200);
        }
    }

    window.appendValue = function (value) {
        expression += value;
        updateDisplay();
    };

    window.appendOperator = function (operator) {
        expression += ` ${operator} `;
        updateDisplay();
    };

    window.appendFunction = function (func) {
        expression += `${func}(`;
        updateDisplay();
    };

    window.appendPower = function () {
        expression += "**";
        updateDisplay();
    };

    window.appendDecimal = function () {
        expression += ".";
        updateDisplay();
    };

    window.appendParentheses = function (parenthesis) {
        expression += parenthesis;
        updateDisplay();
    };

    window.clearDisplay = function () {
        expression = "";
        updateDisplay();
    };

    window.calculateResult = function () {
        try {
            let result = eval(expression.replace(/Math\.([a-zA-Z]+)/g, 'Math.$1'));
            expression = result.toString();
            updateDisplay();
        } catch (error) {
            alert("Invalid Expression");
            expression = "";
            updateDisplay();
        }
    };

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            animateButton(this);
        });
    });

    document.addEventListener("keydown", function (event) {
        const keyMap = {
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
            "+": "+", "-": "-", "*": "*", "/": "/", ".": ".",
            "Enter": "=", "Backspace": "C", "(": "(", ")": ")"
        };

        if (keyMap[event.key]) {
            let key = keyMap[event.key];
            if (key === "=") {
                calculateResult();
            } else if (key === "C") {
                clearDisplay();
            } else {
                expression += key;
                updateDisplay();
            }
            
            let button = document.querySelector(`button:contains('${key}')`);
            animateButton(button);
        }
    });
});