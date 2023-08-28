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
            temp = temp.concat(numbersCollection[i].value);
            operandOne.textContent = temp;
        })
    }
}

function getOperationSymbol(operationCollection) {
    for(let i = 0; i < operationCollection.length; i++) {
        operationCollection[i].addEventListener("click", () => {
            if (operands.firstNum == null) {
                operandTwoDisplay.textContent = temp;
                operands.firstNum = Number(operandTwoDisplay.textContent);
                temp = "";
            if(operandTwoDisplay.textContent.includes("+") || operandTwoDisplay.textContent.includes("-") || operandTwoDisplay.textContent.includes("*") || operandTwoDisplay.textContent.includes("÷")) {
                operandTwoDisplay.textContent = operandTwoDisplay.textContent.replace(operandTwoDisplay.textContent.charAt(operandTwoDisplay.textContent.length - 1), newSymbol.trim());
                operation = operationCollection[i].value;
            } else {
                temp = `${operationCollection[i].textContent}`
                temp = temp.trim();
                operandTwoDisplay.textContent = operandTwoDisplay.textContent.concat(" ", temp)
                temp = "";
                operandOne.textContent = temp;
                operation = operationCollection[i].value;
            }
            } else {
                temp = "";
            if(operandTwoDisplay.textContent.includes("+") || operandTwoDisplay.textContent.includes("-") || operandTwoDisplay.textContent.includes("*") || operandTwoDisplay.textContent.includes("÷")) {
                operandTwoDisplay.textContent = operandTwoDisplay.textContent.replace(operandTwoDisplay.textContent.charAt(operandTwoDisplay.textContent.length - 1), newSymbol.trim());
                operation = operationCollection[i].value;
            } else {
                temp = `${operationCollection[i].textContent}`
                temp = temp.trim();
                operandTwoDisplay.textContent = operandTwoDisplay.textContent.concat(" ", temp)
                temp = "";
                operandOne.textContent = temp;
                operation = operationCollection[i].value;
            }
            }
        })
    }
}

equalSign.addEventListener("click", () => {
    operands.secondNum = Number(operandOne.textContent);
    let result = operate(operands.firstNum, operands.secondNum, operation);
    operandTwoDisplay.textContent = (result.toString());
    operands.firstNum = result;
    temp = ""
    operandOne.textContent = temp
})

clearBtn.addEventListener("click", () => {
    operands.firstNum = null;
    operands.secondNum = 0;
    temp = 0;
    operandOne.textContent = temp;
    operandTwoDisplay.textContent = "";

})


getNumberValue(numbersCollection);
getOperationSymbol(operationCollection);
