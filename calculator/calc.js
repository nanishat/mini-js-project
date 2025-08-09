let calculation = localStorage.getItem('calculation') || '';

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' + ', ' - ', ' * ', ' / ', ' . '];

buttons.forEach((char) => {
    document.getElementById(char).addEventListener("click", function () {
        calculation += char;
        console.log(calculation);
    });
});

document.getElementById("equal").addEventListener("click", function () {
    console.log(eval(calculation));
    saveCalculation();
});

document.getElementById("clear").addEventListener("click", function () {
    calculation = '';
    console.clear();
});

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}; 