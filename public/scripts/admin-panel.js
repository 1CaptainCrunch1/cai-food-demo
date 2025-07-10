function renderAdminPanel() {
  const role = localStorage.getItem("userRole");
  if (role !== "owner") {
    document.getElementById("tabContent").innerHTML = "<p>❌ Access denied.</p>";
    return;
  }
  const users = [
    { email: "admin@grabgo.vn", role: "owner" },
    { email: "employee@grabgo.vn", role: "staff" }
  ];
  let html = `
    <div style="background:rgba(0,0,0,0.6);padding:25px;border-radius:12px;text-align:center">
      <h2 style="font-size:22px;color:#fff;margin-bottom:20px">👤 User Access Control</h2>
      <table style="width:100%;text-align:left;border-spacing:0 10px;color:#fff">
        <tr style="font-weight:bold;"><td>Email</td><td>Role</td><td>Actions</td></tr>
        ${users.map(u => `
          <tr>
            <td>${u.email}</td>
            <td>${u.role}</td>
            <td><button onclick="resetUser('${u.email}')">Reset</button></td>
          </tr>`).join("")}
      </table>
      <p style="margin-top:15px;color:#ccc">(Future: Add/remove users, roles)</p>
    </div>`;
  document.getElementById("tabContent").innerHTML = html;
}
function resetUser(email) {
  alert("Reset user: " + email + " coming soon.");
}
