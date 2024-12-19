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
// ============= VARIABLES =================
let operand1 = '';
let operand2 = '';
let operator = '';
const numKeys = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const equalBtn = document.querySelector('#equal');
let screen_display = document.querySelector('.screen div');
let screen_result = document.querySelector('.screen div + div');
// =========================================

function operate(operator, a, b) {
    if(operator === '+') return add(a, b);

    if(operator === '-') return substract(a, b);

    if(operator === '*') return multiply(a, b);

    if(operator === '/') return divide(a, b);
}

function write() {
    for(let i = 0; i < numKeys.length; i++) {
        numKeys[i].addEventListener('click', function() {
            if(screen_result.textContent == '0') {
                screen_result.textContent = '';
            }

            if(!(screen_result.textContent.includes('.') && numKeys[i].textContent === '.'))
                screen_result.textContent += numKeys[i].textContent;
        });
    }

    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            screen_display.textContent = screen_result.textContent;
            screen_display.textContent += operators[i].textContent;
            screen_result.textContent = '';
        });
    }
}

function erase() {
    // remove screen content one by one
    const arr = screen_result.textContent.split("");
    arr.pop();
    screen_result.textContent = arr.join("");
}

function clear() {
    screen_display.textContent = '';
    screen_result.textContent = 0;
}

write();

clearBtn.addEventListener('click', function() {
    clear();
});

deleteBtn.addEventListener('click', function() {
    erase();
});