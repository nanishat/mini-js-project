const displayPanel = document.querySelector('.js-main-display');

let calculation = localStorage.getItem('calculation') || '';

if (calculation) {
    displayPanel.innerHTML = calculation;
}

//updated version of code, which selecting all those button.
//got ridden of all those button ids

document.querySelectorAll('.calc-btn')
    .forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            calculation = calculation + value;
            displayPanel.innerHTML = calculation;
        });
    });

document.querySelector(".equal").addEventListener("click", () => {
    calculation = eval(calculation);
    displayPanel.innerHTML = calculation;
    saveCalculation();
});

document.querySelector(".clear").addEventListener("click", () => {
    calculation = '';
    localStorage.removeItem('calculation');
    displayPanel.innerHTML = '...';
});

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}; 