let costing = JSON.parse(localStorage.getItem("cai_costing")) || [];

function saveCosting() {
  localStorage.setItem("cai_costing", JSON.stringify(costing));
  renderCosting();
}

function renderCosting() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Staff access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>📋 Menu Costing</h2>
    <button onclick="addDish()">+ Add Dish</button>
    <table class="cost-table">
      <tr>
        <th>Dish</th><th>Ingredients</th><th>Cost/Unit</th><th>Selling Price</th><th>Profit</th><th>Margin %</th><th>Actions</th>
      </tr>
      ${costing.map((dish, i) => `
        <tr>
          <td contenteditable onblur="editDish(${i}, 'name', this.innerText)">${dish.name}</td>
          <td contenteditable onblur="editDish(${i}, 'ingredients', this.innerText)">${dish.ingredients}</td>
          <td contenteditable onblur="editDish(${i}, 'cost', this.innerText)">${dish.cost}</td>
          <td contenteditable onblur="editDish(${i}, 'price', this.innerText)">${dish.price}</td>
          <td>$${(dish.price - dish.cost).toFixed(2)}</td>
          <td>${((1 - dish.cost / dish.price) * 100).toFixed(1)}%</td>
          <td><button onclick="deleteDish(${i})">🗑️</button></td>
        </tr>
      `).join("")}
    </table>
  `;
}

function addDish() {
  costing.push({ name: "New Dish", ingredients: "", cost: 0, price: 0 });
  saveCosting();
}

function deleteDish(i) {
  if (confirm("Delete this dish?")) {
    costing.splice(i, 1);
    saveCosting();
  }
}

function editDish(i, key, value) {
  if (key === "cost" || key === "price") {
    costing[i][key] = parseFloat(value) || 0;
  } else {
    costing[i][key] = value;
  }
  saveCosting();
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole") === "owner") {
    renderCosting();
  }
});
