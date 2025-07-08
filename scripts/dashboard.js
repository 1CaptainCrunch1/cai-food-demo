window.onload = function () {
  const user = localStorage.getItem("userEmail") || "";
  const role = user === "admin@grabgo.vn" ? "owner" : "staff";
  document.body.classList.add(role);
  switchTab("dashboard");
};

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
  const currentTab = document.getElementById(tabName);
  if (currentTab) {
    currentTab.style.display = "block";
  }
}
