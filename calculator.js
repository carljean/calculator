function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return `Impossible`;

    return a / b;
}

let operand1 = '';
let operand2 = '';
let operator = '';

function operate(operator, a, b) {
    if(operator === '+') return add(a, b);

    if(operator === '-') return substract(a, b);

    if(operator === '*') return multiply(a, b);

    if(operator === '/') return divide(a, b);
}

// console.log(operate('/', 10, 0));