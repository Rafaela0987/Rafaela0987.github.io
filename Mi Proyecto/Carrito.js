let cart = [];

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.toggle("hidden");
}

function addToCart(button) {
  const productElement = button.parentElement;
  const id = productElement.getAttribute("data-id");
  const name = productElement.getAttribute("data-name");
  const price = parseFloat(productElement.getAttribute("data-price"));

  const existingProduct = cart.find(item => item.id === id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(listItem);
    total += item.price * item.quantity;
  });

  document.getElementById("cart-count").textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function checkout() {
  alert("Gracias por tu compra!");
  cart = [];
  updateCart();
  toggleCart();


  function checkout() {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    
    // Guardamos el carrito en el almacenamiento local para que persista entre páginas
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Redirigimos al formulario de compra
    window.location.href = "checkout.html";
  }

  
  function checkout() {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    
    // Guardamos el carrito en el almacenamiento local para que persista entre páginas
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Redirigimos al formulario de compra
    window.location.href = "checkout.html";
  }
  
}
