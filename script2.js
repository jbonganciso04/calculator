const operandTwoDisplay = document.getElementById("calculator__screen__firstNum");
const operandOne = document.getElementById("calculator__screen__secondNum");
const numbersCollection = document.getElementsByClassName("number");
const operationCollection = document.getElementsByClassName("operation__symbol");
const equalSign = document.getElementById("equals__sign");

let temp = "";
let operation = "";
let operands = {
    firstNum: null,
    secondNum: 0
};
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    switch(operation){
        case "add": {
            result = add(num1, num2);
            return result;
        }

        case "divide": {
            result = divide(num1, num2);
            return result
        }

        case "multiply": {
            result = multiply(num1, num2);
            return result
        }

        case "subtract": {
            result = subtract(num1, num2);
            return result
        }
    }
}

function getNumberValue(numbersCollection) {
    for(let i = 0; i < numbersCollection.length; i++) {
        numbersCollection[i].addEventListener("click", () => {
            temp = temp.concat(numbersCollection[i].value);
            operandOne.textContent = temp;
        })
    }
}

function updateOperandDisplay(value) {
    operandTwoDisplay.textContent += value;
}

function handleOperationClick(event) {
    const clickedOperation = event.target;
    const newSymbol = clickedOperation.textContent.trim();
    const currentDisplayText = operandTwoDisplay.textContent;

    if (operands.firstNum == null) {
        updateOperandDisplay(temp);
        operands.firstNum = Number(operandTwoDisplay.textContent);
        temp = "";

        if (currentDisplayText.includes("+") || currentDisplayText.includes("-") || currentDisplayText.includes("*") || currentDisplayText.includes("÷")) {
            updateOperandDisplay(currentDisplayText.replace(currentDisplayText.charAt(currentDisplayText.length - 1), newSymbol));
        } else {
            temp = newSymbol;
            updateOperandDisplay(currentDisplayText.concat(" ", temp));
            temp = "";
            operandOne.textContent = temp;
        }

        operation = clickedOperation.value;
    } else {
        temp = "";

        if (currentDisplayText.includes("+") || currentDisplayText.includes("-") || currentDisplayText.includes("*") || currentDisplayText.includes("÷")) {
            updateOperandDisplay(currentDisplayText.replace(currentDisplayText.charAt(currentDisplayText.length - 1), newSymbol));
        } else {
            temp = newSymbol;
            updateOperandDisplay(currentDisplayText.concat(" ", temp));
            temp = "";
            operandOne.textContent = temp;
        }

        operation = clickedOperation.value;
    }
}

for (let i = 0; i < operationCollection.length; i++) {
    operationCollection[i].addEventListener("click", handleOperationClick);
}

equalSign.addEventListener("click", () => {
    operands.secondNum = Number(operandOne.textContent);
    let result = operate(operands.firstNum, operands.secondNum, operation);
    operandTwoDisplay.textContent = (result.toString());
    temp = ""
    operandOne.textContent = temp
})


getNumberValue(numbersCollection);
getOperationSymbol(operationCollection);