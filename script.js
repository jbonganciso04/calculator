let numbers = {
    firstNum: 0,
    secondNum: 0
}

let operator = "";
let temp = "";
let temp2 = "";
let result = 0;

const operandTwo = document.getElementById("calculator__screen__firstNum");
const operandOne = document.getElementById("calculator__screen__secondNum");
const clearBtn = document.getElementById("clear__btn");
const numbersCollection = document.getElementsByClassName("number");
const operationCollection = document.getElementsByClassName("operation__symbol");
const equalSign = document.getElementById("equals__sign");

clearBtn.addEventListener("click", () => {
    
})

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
           if(operator == "") {
            operator = operationCollection[i].value;
            numbers.firstNum = Number(temp);
            temp2 = temp.concat(` ${operationCollection[i].textContent.trim()}`)
            operandTwo.textContent = temp2
            temp = "";
            operandOne.textContent = temp;
           } else {
            operator = operationCollection[i].value;
            replaceCharSymbolAtTemp(temp2, operationCollection[i].textContent)
           }
        })
    }
}

function replaceCharSymbolAtTemp(temp2, newSymbol) { 
    if(temp2.includes("+") || temp2.includes("-") || temp2.includes("*") || temp2.includes("÷")) {
        temp2 = temp2.replace(temp2.charAt(temp2.length - 1), newSymbol.trim());
        operandTwo.textContent = temp2
    }
}

equalSign.addEventListener("click", () => {
    numbers.secondNum = Number(operandOne.textContent);
    let result = operate(numbers.firstNum, numbers.secondNum, operator);
    console.log(result)
    temp2 = result;
    operandTwo.textContent = temp2.toString();
    temp = "";
    operandOne.textContent = temp
})

getNumberValue(numbersCollection)
getOperationSymbol(operationCollection);