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

function operate(operator, num1, num2) {
    if (operator === "add")
        return add(num1, num2);
    if (operator === "subtract")
        return subtract(num1, num2);
    if (operator === "multiply")
        return multiply(num1, num2);
    if (operator === "divide")
        return divide(num1, num2);
}

const botones = document.querySelectorAll(".number");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        alert(boton.textContent);
    });
});