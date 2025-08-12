const inputElement = document.querySelector('.js-cost-input');
const calculateElement = document.querySelector('.js-calculate-cost');
const resultElement = document.querySelector('.js-total-cost');

function calculateTotal() {
    let cost = Number(inputElement.value);
    if (isNaN(cost) || cost < 0) {
        resultElement.innerHTML = 'Please enter a valid positive number.';
        return;
    } else if (cost < 40) {
        cost += 10;
    }
    resultElement.innerHTML = `$${cost}`;
}

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateTotal();
    }
});

calculateElement.addEventListener('click', calculateTotal);