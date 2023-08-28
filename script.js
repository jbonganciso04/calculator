let numbers = {
    firstNum: null,
    secondNum: null
}

let operator = "";
let temp = "";


const operandTwo = document.getElementById("calculator__screen__firstNum");
const operandOne = document.getElementById("calculator__screen__secondNum");
const clearBtn = document.getElementById("clear__btn");
const numbersCollection = document.getElementsByClassName("number");
const operationCollection = document.getElementsByClassName("operation__symbol");

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
    return num1 + num2;
}

function operate(operation) {
    switch(operation) {
        case "add":
            add(numbers.firstNum, numbers.secondNum);
            break;
        case "subtract":
            subtract(numbers.firstNum, numbers.secondNum);
            break;
        case "multiply":
            multiply(numbers.firstNum, numbers.secondNum);
            break;
        case "divide":
            divide(numbers.firstNum, numbers.secondNum);
    }
}

function getNumberValue(numbersCollection) {
    for(let i = 0; i < numbersCollection.length; i++) {
        numbersCollection[i].addEventListener("click", () => {
            console.log(numbersCollection[i].value);
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
            temp = temp.concat(` ${operationCollection[i].textContent.trim()}`)
            operandTwo.textContent = temp
            operandOne.textContent = ""
           } else {
            operator = operationCollection[i].value;
            replaceCharSymbolAtTemp(temp, operationCollection[i].textContent)
           }
        })
    }
}

function replaceCharSymbolAtTemp(temp, newSymbol) { 
    if(temp.includes("+") || temp.includes("-") || temp.includes("*") || temp.includes("÷")) {
        temp = temp.replace(temp.charAt(temp.length - 1), newSymbol.trim());
        console.log("New temp is "+temp);
        operandTwo.textContent = temp
    }
}

getNumberValue(numbersCollection)
getOperationSymbol(operationCollection);