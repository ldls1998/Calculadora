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
var numeroDisplay = document.querySelector(".display");
numeroDisplay.textContent = 0;
var numeroAOperar = "";

// Capturamos cada número clickeado
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        numeroAOperar += boton.textContent;
        numeroDisplay.textContent = numeroAOperar;
    });
});