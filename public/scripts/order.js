let cart = [];
function openOrderForm() {
  const html = `
    <div class="order-overlay">
      <div class="order-popup">
        <h2>🛒 Quick Order</h2>
        <form onsubmit="submitOrder(event)">
          <label>Dish</label><input type="text" id="orderDish" required><br>
          <label>Qty</label><input type="number" id="orderQty" value="1" min="1" required><br>
          <label>Phone</label><input type="text" id="orderPhone" placeholder="e.g. 555-5555" required><br>
          <button type="submit">Place Order</button>
          <button type="button" onclick="closeOrderForm()">Cancel</button>
        </form>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", html);
}
function closeOrderForm() {
  const popup = document.querySelector(".order-overlay");
  if (popup) popup.remove();
}
function submitOrder(e) {
  e.preventDefault();
  const dish = document.getElementById("orderDish").value.trim();
  const qty = parseInt(document.getElementById("orderQty").value);
  const phone = document.getElementById("orderPhone").value.trim();
  if (!dish || !qty || !phone) return alert("Fill all fields");
  cart.push({ dish, qty, phone, time: new Date().toLocaleString() });
  localStorage.setItem("cai_orders", JSON.stringify(cart));
  alert("Order placed!");
  closeOrderForm();
}
