let numbers = {
    firstNum: 0,
    secondNum: 0
}

let operationSymbol = "";


const firstNumber = document.getElementById("calculator__screen__firstNum");
const secondNumber = document.getElementById("calculator__screen__secondNum");
const clearBtn = document.getElementById("clear__btn");
const numbersCollection = document.getElementsByClassName("number");
firstNumber.textContent = numbers.firstNum
secondNumber.textContent = numbers.secondNum

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
        })
    }
}

getNumberValue(numbersCollection)