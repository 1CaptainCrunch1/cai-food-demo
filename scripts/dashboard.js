function renderSummary() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Dashboard only for owner.</p>";
    return;
  }

  const sales = JSON.parse(localStorage.getItem("cai_sales")) || [];
  const labor = JSON.parse(localStorage.getItem("cai_labor")) || [];
  const fixed = JSON.parse(localStorage.getItem("cai_fixed")) || [];
  const inventory = JSON.parse(localStorage.getItem("cai_inventory")) || [];

  const totalRevenue = sales.reduce((acc, s) => acc + parseFloat(s.total || 0), 0);
  const totalLabor = labor.reduce((acc, l) => acc + (l.hours * l.rate), 0);
  const totalFixed = fixed.reduce((acc, f) => acc + parseFloat(f.amount || 0), 0);
  const totalInventory = inventory.reduce((acc, i) => acc + (i.qty * i.cost), 0);
  const netProfit = totalRevenue - totalLabor - totalFixed;
  const laborPct = totalRevenue > 0 ? ((totalLabor / totalRevenue) * 100).toFixed(1) : "-";

  const topDish = sales.reduce((acc, s) => {
    acc[s.dish] = (acc[s.dish] || 0) + s.qty;
    return acc;
  }, {});

  let topName = "-";
  let topQty = 0;
  for (const dish in topDish) {
    if (topDish[dish] > topQty) {
      topQty = topDish[dish];
      topName = dish;
    }
  }

  document.getElementById("tabContent").innerHTML = `
    <h2>📊 Executive Dashboard</h2>
    <div class="summary-card"><b>Total Revenue:</b> $${totalRevenue.toFixed(2)}</div>
    <div class="summary-card"><b>Labor Cost:</b> $${totalLabor.toFixed(2)} (${laborPct}%)</div>
    <div class="summary-card"><b>Fixed Costs:</b> $${totalFixed.toFixed(2)}</div>
    <div class="summary-card"><b>Inventory Value:</b> $${totalInventory.toFixed(2)}</div>
    <div class="summary-card"><b>Net Profit:</b> $${netProfit.toFixed(2)}</div>
    <div class="summary-card"><b>Top Dish:</b> ${topName} (${topQty} sold)</div>
  `;
}

// Tab controller + default load
document.querySelectorAll("nav button").forEach(b => {
  b.addEventListener("click", () => showTab(b.dataset.tab));
});

function showTab(tab) {
  const role = localStorage.getItem("userRole");
  if (!role) return window.location.href = "login.html";

  document.getElementById("roleDisplay").innerText = "Logged in as: " + role.toUpperCase();

  switch (tab) {
    case "inventory": return renderInventory();
    case "sales": return renderSales();
    case "costing": return renderCosting();
    case "labor": return renderLabor();
    case "fixed": return renderFixed();
    case "chat": return renderChat();
    case "schedule": return renderSchedule();
    case "tasks": return renderTasks();
    case "access": return renderAccessPanel();
    case "dashboard": return renderSummary();
    default: document.getElementById("tabContent").innerHTML = "<p>❌ Unknown tab</p>";
  }
}

showTab("dashboard");
