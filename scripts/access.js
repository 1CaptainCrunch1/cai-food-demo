function renderAccessPanel() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }

  const sales = JSON.parse(localStorage.getItem("cai_sales")) || [];
  const labor = JSON.parse(localStorage.getItem("cai_labor")) || [];
  const costing = JSON.parse(localStorage.getItem("cai_costing")) || [];
  const fixed = JSON.parse(localStorage.getItem("cai_fixed")) || [];
  const inventory = JSON.parse(localStorage.getItem("cai_inventory")) || [];
  const schedule = JSON.parse(localStorage.getItem("cai_schedule")) || [];
  const tasks = JSON.parse(localStorage.getItem("cai_tasks")) || [];
  const chat = JSON.parse(localStorage.getItem("cai_chat")) || [];

  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>🔐 System Access Panel</h2>
    <p><b>Total Sales Records:</b> ${sales.length}</p>
    <p><b>Total Staff Entries:</b> ${labor.length}</p>
    <p><b>Total Menu Dishes:</b> ${costing.length}</p>
    <p><b>Total Fixed Costs:</b> ${fixed.length}</p>
    <p><b>Inventory Items:</b> ${inventory.length}</p>
    <p><b>Schedule Slots:</b> ${schedule.length}</p>
    <p><b>Tasks Assigned:</b> ${tasks.length}</p>
    <p><b>Messages Posted:</b> ${chat.length}</p>
    <hr>
    <div class="export-controls">
      <button onclick="exportJSON('cai_sales')">Export Sales</button>
      <button onclick="exportJSON('cai_labor')">Export Labor</button>
      <button onclick="exportJSON('cai_costing')">Export Costing</button>
      <button onclick="exportJSON('cai_fixed')">Export Fixed Costs</button>
      <button onclick="exportJSON('cai_inventory')">Export Inventory</button>
      <button onclick="exportJSON('cai_schedule')">Export Schedule</button>
      <button onclick="exportJSON('cai_tasks')">Export Tasks</button>
      <button onclick="exportJSON('cai_chat')">Export Chat Log</button>
    </div>
  `;
}

function exportJSON(key) {
  const data = localStorage.getItem(key);
  const blob = new Blob([data], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${key}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userRole") === "owner") renderAccessPanel();
});
