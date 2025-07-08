function renderAdminPanel() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }
  const userList = [
    { email: "admin@grabgo.vn", role: "owner" },
    { email: "employee@grabgo.vn", role: "staff" }
  ];
  const container = document.getElementById("tabContent");
  let html = "<h2>👤 User Access Control</h2><table class='user-table'>";
  html += "<tr><th>Email</th><th>Role</th><th>Actions</th></tr>";
  for (let u of userList) {
    html += `<tr><td>${u.email}</td><td>${u.role}</td><td><button onclick="resetUser('${u.email}')">Reset</button></td></tr>`;
  }
  html += "</table><p>(Future: Add/remove users, roles)</p>";
  container.innerHTML = html;
}
function resetUser(email) {
  alert("Reset for " + email + " coming soon.");
}
