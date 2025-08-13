let cartQuantity = 0;

const addToCart = document.querySelector(".js-add-to-cart");
const addFive = document.querySelector(".js-add-five");
const removeFromCart = document.querySelector(".js-remove");
const showQuantity = document.querySelector(".js-show-quantity");
const display = document.querySelector('.js-display');
const resetCart = document.querySelector(".js-reset-cart");

addToCart.addEventListener("click", () => {
    updateCartQuantity(1);
});

addFive.addEventListener("click", () => {
    updateCartQuantity(5);
});

removeFromCart.addEventListener("click", () => {
    updateCartQuantity(-1);
});

showQuantity.addEventListener("click", function () {
    display.innerHTML = `Cart quantity: ${cartQuantity}`;
});

resetCart.addEventListener("click", function () {
    cartQuantity = 0;
    display.innerHTML = `Cart quantity: ${cartQuantity}`;
});


function updateCartQuantity(changes) {
    if (cartQuantity + changes > 10) {
        alert('The cart is full');
        return;
    } else if (cartQuantity + changes < 0) {
        alert('Not enough items in the cart');
        return;
    } else {
        cartQuantity += changes;
        display.innerHTML = `Cart quantity: ${cartQuantity}`;
    }
}
