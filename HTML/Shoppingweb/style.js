/* script.js */
document.querySelectorAll(".add").forEach(button => {
  button.addEventListener("click", e => {
    const product = e.target.parentElement;
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  });
});

document.querySelectorAll(".buy").forEach(button => {
  button.addEventListener("click", e => {
    const product = e.target.parentElement;
    const name = product.dataset.name;
    const price = product.dataset.price;
    alert(`Buying ${name} for ₹${price}`);
  });
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}
e.target.textContent = "Added ✅";
setTimeout(() => (e.target.textContent = "Add to Cart"), 1000);

e.target.textContent = "Processing...";
setTimeout(() => {
  alert(`🛒 Buying ${name} for ₹${price}`);
  e.target.textContent = "Buy Now";
}, 500);


updateCartCount();
