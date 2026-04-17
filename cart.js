// cart.js

// Sample cart items
let cart = [];

// Load cart from localStorage
function loadCart() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Add item to cart
function addItem(item) {
    cart.push(item);
    saveCart();
}

// Remove item from cart
function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
}

// Calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Display cart items
function displayCart() {
    cart.forEach(item => {
        console.log(`Item: ${item.name}, Price: $${item.price}`);
    });
}

// Load the cart on page load
loadCart();

// Example usage
// addItem({ id: 1, name: 'School Uniform', price: 29.99 });
// removeItem(1);
// console.log(`Total: $${calculateTotal()}`);
// displayCart();
