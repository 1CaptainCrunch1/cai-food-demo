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
    case "admin": return renderAdminPanel();
    default: document.getElementById("tabContent").innerHTML = "<p>âŒ Unknown tab</p>";
  }
}

document.querySelectorAll("nav button").forEach(b => {
  b.addEventListener("click", () => showTab(b.dataset.tab));
});

showTab("dashboard");`r`nenableAutoSync();

