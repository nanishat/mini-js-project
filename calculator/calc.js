const displayPanel = document.querySelector('.js-main-display');

let calculation = localStorage.getItem('calculation') || '';

if (calculation) {
    displayPanel.innerHTML = calculation;
}

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' + ', ' - ', ' * ', ' / ', ' . '];

buttons.forEach((char) => {
    document.getElementById(char).addEventListener("click", () => {
        calculation += char;
        displayPanel.innerHTML = calculation;
    });
});

document.getElementById("equal").addEventListener("click", () => {
    calculation = (eval(calculation));
    displayPanel.innerHTML = calculation;
    saveCalculation();
});

document.getElementById("clear").addEventListener("click", () => {
    calculation = '';
    localStorage.removeItem('calculation');
    displayPanel.innerHTML = 'Display cleared.';
});

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}; 