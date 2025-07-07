let labor = JSON.parse(localStorage.getItem("cai_labor")) || [];

function saveLabor() {
  localStorage.setItem("cai_labor", JSON.stringify(labor));
  renderLabor();
}

function renderLabor() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Staff access denied.</p>";
    return;
  }

  const container = document.getElementById("tabContent");
  const totalSales = getTotalSales();
  const totalLaborCost = labor.reduce((acc, e) => acc + (e.hours * e.rate), 0);
  const laborPercent = totalSales > 0 ? ((totalLaborCost / totalSales) * 100).toFixed(1) : "-";

  container.innerHTML = `
    <h2>👷 Labor Log</h2>
    <button onclick="addLabor()">+ Add Staff Entry</button>
    <table class="labor-table">
      <tr><th>Name</th><th>Hours</th><th>Rate/hr</th><th>Total</th><th>Actions</th></tr>
      ${labor.map((e, i) => `
        <tr>
          <td contenteditable onblur="editLabor(${i}, 'name', this.innerText)">${e.name}</td>
          <td contenteditable onblur="editLabor(${i}, 'hours', this.innerText)">${e.hours}</td>
          <td contenteditable onblur="editLabor(${i}, 'rate', this.innerText)">${e.rate}</td>
          <td>$${(e.hours * e.rate).toFixed(2)}</td>
          <td><button onclick="deleteLabor(${i})">🗑️</button></td>
        </tr>
      `).join("")}
    </table>
    <p><b>Total Payroll:</b> $${totalLaborCost.toFixed(2)} — <b>Labor %:</b> ${laborPercent}% of sales</p>
  `;
}

function editLabor(i, key, value) {
  if (key === "hours" || key === "rate") {
    labor[i][key] = parseFloat(value) || 0;
  } else {
    labor[i][key] = value;
  }
  saveLabor();
}

function deleteLabor(i) {
  if (confirm("Delete staff entry?")) {
    labor.splice(i, 1);
    saveLabor();
  }
}

function addLabor() {
  labor.push({ name: "New Staff", hours: 0, rate: 0 });
  saveLabor();
}

function getTotalSales() {
  const sales = JSON.parse(localStorage.getItem("cai_sales")) || [];
  return sales.reduce((acc, s) => acc + parseFloat(s.total), 0);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole") === "owner") renderLabor();
});
