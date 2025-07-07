let fixedCosts = JSON.parse(localStorage.getItem("cai_fixed")) || [];

function saveFixed() {
  localStorage.setItem("cai_fixed", JSON.stringify(fixedCosts));
  renderFixed();
}

function renderFixed() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Staff access denied.</p>";
    return;
  }

  const totalFixed = fixedCosts.reduce((acc, c) => acc + parseFloat(c.amount || 0), 0);

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>🧾 Fixed Monthly Costs</h2>
    <button onclick="addFixed()">+ Add Cost</button>
    <table class="fixed-table">
      <tr><th>Label</th><th>Amount</th><th>Actions</th></tr>
      ${fixedCosts.map((c, i) => `
        <tr>
          <td contenteditable onblur="editFixed(${i}, 'label', this.innerText)">${c.label}</td>
          <td contenteditable onblur="editFixed(${i}, 'amount', this.innerText)">$${parseFloat(c.amount).toFixed(2)}</td>
          <td><button onclick="deleteFixed(${i})">🗑️</button></td>
        </tr>
      `).join("")}
    </table>
    <p><b>Total Monthly Fixed Cost:</b> $${totalFixed.toFixed(2)}</p>
  `;
}

function addFixed() {
  fixedCosts.push({ label: "New Cost", amount: 0 });
  saveFixed();
}

function editFixed(i, key, value) {
  fixedCosts[i][key] = key === "amount" ? parseFloat(value) || 0 : value;
  saveFixed();
}

function deleteFixed(i) {
  if (confirm("Delete this cost?")) {
    fixedCosts.splice(i, 1);
    saveFixed();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole") === "owner") renderFixed();
});
