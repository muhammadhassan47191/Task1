let operation = '';
let typed = '0';

function appendToDisplay(value) {
    if (typed === '0' && value !== '.') {
        typed = '';
    }
    if (value === '.' && typed.includes('.')) return; // Prevent adding multiple decimal points
    typed += value;
    document.getElementById('calc-typed').innerText = typed;
}

function clearDisplay() {
    operation = '';
    typed = '0';
    document.getElementById('calc-operation').innerText = '';
    document.getElementById('calc-typed').innerText = typed;
}

function deleteLast() {
    typed = typed.slice(0, -1);
    if (!typed) typed = '0'; // Ensure typed is never empty
    document.getElementById('calc-typed').innerText = typed;
}

function calculate() {
    operation += typed;
    document.getElementById('calc-operation').innerText = operation;
    let result = eval(operation);
    document.getElementById('calc-typed').innerText = result;
    operation = '';
    typed = result.toString();
}
