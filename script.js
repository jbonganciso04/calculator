let numbers = {
    firstNum: 0,
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