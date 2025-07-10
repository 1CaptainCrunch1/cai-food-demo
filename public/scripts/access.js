function renderAccessPanel() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }
  const keys = [
    "cai_sales", "cai_labor", "cai_costing", "cai_fixed",
    "cai_inventory", "cai_schedule", "cai_tasks", "cai_chat", "cai_orders"
  ];
  const stats = keys.map(k => {
    const data = JSON.parse(localStorage.getItem(k) || "[]");
    return `<p><b>${k.replace("cai_", "")}</b>: ${data.length}</p>`;
  }).join("");
  const container = document.getElementById("tabContent");
  container.innerHTML = `
    <h2>🔐 System Access Tools</h2>
    ${stats}
    <hr>
    <button onclick="exportAllToZip()">📦 Export All to ZIP</button>
    <input type="file" onchange="importJSONFile(event)" accept=".json" />
  `;
}
function exportAllToZip() {
  const zip = {};
  const keys = Object.keys(localStorage).filter(k => k.startsWith("cai_"));
  keys.forEach(k => zip[k + ".json"] = JSON.parse(localStorage.getItem(k)));
  const blob = new Blob([JSON.stringify(zip, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cai_backup_all.json";
  link.click();
}
function importJSONFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      Object.keys(data).forEach(k => {
        const cleanKey = k.replace(".json", "");
        localStorage.setItem(cleanKey, JSON.stringify(data[k]));
      });
      alert("Data imported. Reload page.");
    } catch {
      alert("Invalid JSON");
    }
  };
  reader.readAsText(file);
}
