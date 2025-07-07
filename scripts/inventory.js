let inventory = JSON.parse(localStorage.getItem("cai_inventory")) || [];

function saveInventory() {
  localStorage.setItem("cai_inventory", JSON.stringify(inventory));
  renderInventory();
}

function renderInventory() {
  const container = document.getElementById("inventoryTable");
  if (!container) return;

  container.innerHTML = `
    <table class='inv-table'>
      <tr>
        <th>Item</th><th>Unit</th><th>Qty</th><th>Par</th><th>Unit Cost</th><th>Total Value</th>${isOwner() ? "<th>Actions</th>" : ""}
      </tr>
      ${inventory.map((item, i) => `
        <tr>
          <td contenteditable onblur="editItem(${i}, 'name', this.innerText)">${item.name}</td>
          <td contenteditable onblur="editItem(${i}, 'unit', this.innerText)">${item.unit}</td>
          <td contenteditable onblur="editItem(${i}, 'qty', this.innerText)">${item.qty}</td>
          <td contenteditable onblur="editItem(${i}, 'par', this.innerText)">${item.par}</td>
          <td ${isOwner() ? 'contenteditable' : 'readonly'} onblur="editItem(${i}, 'cost', this.innerText)">${item.cost}</td>
          <td>$${(item.qty * item.cost).toFixed(2)}</td>
          ${isOwner() ? `<td><button onclick="deleteItem(${i})">🗑️</button></td>` : ""}
        </tr>
      `).join("")}
    </table>
  `;
}

function editItem(i, key, value) {
  if (key === "qty" || key === "cost" || key === "par") {
    inventory[i][key] = parseFloat(value) || 0;
  } else {
    inventory[i][key] = value;
  }
  saveInventory();
}

function deleteItem(i) {
  if (confirm("Delete this item?")) {
    inventory.splice(i, 1);
    saveInventory();
  }
}

function addItem() {
  inventory.push({ name: "New Item", unit: "pcs", qty: 0, par: 0, cost: 0 });
  saveInventory();
}

function isOwner() {
  return localStorage.getItem("userRole") === "owner";
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("inventoryTable")) return;
  renderInventory();
  if (isOwner()) {
    document.getElementById("inventoryControls").innerHTML = '<button onclick="addItem()">+ Add Item</button>';
  }
});
