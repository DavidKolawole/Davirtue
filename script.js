// Get elements
const screen = document.getElementById('screen');
const clearButton = document.getElementById('cancel');
const equalsButton = document.getElementById('equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Variables
let currentNumber = '0';
let previousNumber = '';
let currentOperator = '';

// Event listeners
clearButton.addEventListener('click', clearCalculator);
equalsButton.addEventListener('click', calculate);
numberButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorButtons.forEach(button => button.addEventListener('click', () => setOperator(button.textContent)));

// Functions
function appendNumber(number) {
    currentNumber += number;
    screen.value = currentNumber;
}

function setOperator(operator) {
    // if (currentNumber==='') return
    previousNumber = currentNumber;
    currentNumber = '';
    currentOperator = operator;
}

function calculate() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Error';
    }

    screen.value = result;
    previousNumber = result.toString();
    currentNumber = '';
}

function clearCalculator() {
    screen.value = '';
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
}