let showQuantity = 0;
const maxQuantity = 10;

document.getElementById("add-to-cart").addEventListener("click", function () {

    if (showQuantity + 1 > 10) {
        console.log('The cart is full');
    } else {
        showQuantity++;
        console.log(`Cart quantity: ${showQuantity}`);
    }
});

document.getElementById("add-five").addEventListener("click", function () {
    if (showQuantity + 5 < maxQuantity) {
        showQuantity += 5;
    } else {
        showQuantity = maxQuantity;
        console.log(`Partially added. Cart is now full`);
    }
    console.log(`Cart quantity: ${showQuantity}`);
});

document.getElementById("remove").addEventListener("click", function () {
    if (showQuantity < 1) {
        console.log('Not enough items in the cart')
    } else {
        showQuantity--;
        console.log(`Cart quantity: ${showQuantity}`);
    }
});

document.getElementById("show-quantity").addEventListener("click", function () {
    console.log(`Cart quantity: ${showQuantity}`);
});

document.getElementById("reset-cart").addEventListener("click", function () {
    showQuantity = 0;
    console.log("Cart has been reset.");
    console.log(`Cart quantity: ${showQuantity}`);
});
