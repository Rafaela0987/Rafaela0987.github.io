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
  