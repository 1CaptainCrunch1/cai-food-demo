let sales = JSON.parse(localStorage.getItem("cai_sales")) || [];

function saveSales() {
  localStorage.setItem("cai_sales", JSON.stringify(sales));
  renderSales();
}

function renderSales() {
  const role = localStorage.getItem("userRole");
  if (!["owner", "staff"].includes(role)) {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>💰 Sales Log</h2>
    <form onsubmit="submitSale(event)">
      <input type="text" id="dish" placeholder="Dish Name" required>
      <input type="number" id="qty" placeholder="Qty" required>
      <input type="number" id="total" placeholder="Total $" required step="0.01">
      <button type="submit">➕ Submit</button>
    </form>
    <table class="sales-table">
      <tr><th>Date</th><th>Dish</th><th>Qty</th><th>Total</th></tr>
      ${sales.map(s => `
        <tr>
          <td>${s.date}</td>
          <td>${s.dish}</td>
          <td>${s.qty}</td>
          <td>$${parseFloat(s.total).toFixed(2)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function submitSale(e) {
  e.preventDefault();
  const dish = document.getElementById("dish").value.trim();
  const qty = parseInt(document.getElementById("qty").value);
  const total = parseFloat(document.getElementById("total").value);
  if (!dish || !qty || !total) return alert("Fill all fields.");

  const now = new Date();
  const dateStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  sales.push({ dish, qty, total, date: dateStr });
  saveSales();
  e.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole")) renderSales();
});
