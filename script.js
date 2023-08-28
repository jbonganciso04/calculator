const operandTwoDisplay = document.getElementById("calculator__screen__firstNum");
const operandOne = document.getElementById("calculator__screen__secondNum");
const numbersCollection = document.getElementsByClassName("number");
const operationCollection = document.getElementsByClassName("operation__symbol");
const equalSign = document.getElementById("equals__sign");
const clearBtn = document.getElementById("clear__btn");
let temp = "";
let operation = "";
let operands = {
    firstNum: null,
    secondNum: 0
}
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
            operandOne.textContent = operandOne.textContent.concat(numbersCollection[i].value);
            if(operation == null) {
                operands.firstNum = null;
            }
        })
    }
}

function getOperationSymbol(operationCollection) {
    for(let i = 0; i < operationCollection.length; i++) {
        operationCollection[i].addEventListener("click", () => {
            operation = operationCollection[i].value
            if(operands.firstNum == null) {
                operands.firstNum = Number(operandOne.textContent);
                operandTwoDisplay.textContent = handleChangeOfOperation(operandTwoDisplay.textContent, operationCollection[i].textContent);
                operandOne.textContent = "";
            } else {
                operands.secondNum = Number(operandOne.textContent);
                operandTwoDisplay.textContent = handleChangeOfOperation(operandTwoDisplay.textContent, operationCollection[i].textContent)
            }
        })
    }
}

function handleChangeOfOperation(textContent, operationText) {
    if(textContent.includes("+") ||
        textContent.includes("-") ||
        textContent.includes("*") ||
        textContent.includes("÷")
    ) {
        textContent = textContent.replace(textContent.charAt(textContent.length - 1), operationText.trim())
        
    } else {
        textContent = operands.firstNum.toString()
        textContent = textContent.concat(" ", operationText.trim());
    }
    return textContent;
}

function handleIfOperationIsNull() {

}

equalSign.addEventListener("click", () => {
    operands.secondNum = Number(operandOne.textContent)
    let result = operate(operands.firstNum, operands.secondNum, operation);
    operands.firstNum = result;
    operandTwoDisplay.textContent = operands.firstNum;
    operandOne.textContent = "";
    operation = null;
})

clearBtn.addEventListener("click", () => {
    operands.firstNum = null;
    operands.secondNum = "";
    temp = "";
    operandOne.textContent = temp;
    operandTwoDisplay.textContent = "";

})


getNumberValue(numbersCollection);
getOperationSymbol(operationCollection);
