let cartQuantity = 0;

function updateCartQuantity(changes) {
    if (cartQuantity + changes > 10) {
        alert('The cart is full');
        return;
    } else if (cartQuantity + changes < 0) {
        alert('Not enough items in the cart');
        return;
    } else {
        cartQuantity += changes;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

document.getElementById("add-to-cart").addEventListener("click", function () {
    updateCartQuantity(1);
});

document.getElementById("add-five").addEventListener("click", function () {
    updateCartQuantity(5);
});

document.getElementById("remove").addEventListener("click", function () {
    updateCartQuantity(-1);
});

document.getElementById("show-quantity").addEventListener("click", function () {
    console.log(`Cart quantity: ${cartQuantity}`);
});

document.getElementById("reset-cart").addEventListener("click", function () {
    cartQuantity = 0;
    console.log("Cart has been reset.");
    console.log(`Cart quantity: ${cartQuantity}`);
});
