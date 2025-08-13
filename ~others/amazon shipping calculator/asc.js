const inputElement = document.querySelector('.js-cost-input');
const calculateElement = document.querySelector('.js-calculate-cost');
const resultElement = document.querySelector('.js-total-cost');

function calculateTotal() {
    let cost = Number(inputElement.value) * 100;
    if (isNaN(cost) || cost < 0) {
        resultElement.innerHTML = 'Please enter a valid positive number.';
        return;
    } else if (cost < 4000) {
        cost += 1000;
    }
    resultElement.innerHTML = `$${cost / 100}`;
}

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateTotal();
    }
});

calculateElement.addEventListener('click', calculateTotal);