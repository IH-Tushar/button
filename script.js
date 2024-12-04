// Select elements
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const quantityText = document.querySelector('.quantity-text');
const priceDisplay = document.querySelector('.price');

let quantity = 1; // Default quantity
const price_per_item = 35; // Price per item

// Update price display function
function update_price() {
    priceDisplay.textContent = `$${quantity * price_per_item}`;
}

// Decrement button logic
decrementButton.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityText.textContent = quantity;
        update_price();
    }
});

// Increment button logic
incrementButton.addEventListener("click", () => {
    quantity++;
    quantityText.textContent = quantity;
    quantityText.classList.add('animate-slide');
    update_price();
    setTimeout(() => {
        quantityText.classList.remove('animate-slide');
    }, 300); // Match CSS animation duration
});
