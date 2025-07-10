const tabs = [
  { id: "inventory", icon: "??" },
  { id: "costing", icon: "??" },
  { id: "sales", icon: "??" },
  { id: "labor", icon: "?????" },
  { id: "fixed", icon: "??" },
  { id: "dashboard", icon: "??" },
  { id: "admin", icon: "??" },
  { id: "access", icon: "??" },
];

const role = localStorage.getItem("userRole") || "";
const sidebar = document.getElementById("sidebar");
tabs.forEach(({ id, icon }) => {
  if (role !== "owner" && (id === "admin" || id === "access")) return;
  const btn = document.createElement("button");
  btn.innerText = icon;
  btn.className = "tab-button";
  btn.onclick = () => switchTab(id);
  sidebar.appendChild(btn);
});

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach(t => t.style.display = "none");
  document.getElementById(tabName).style.display = "block";
  document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active-tab"));
  const activeBtn = [...sidebar.children].find(b => b.onclick.toString().includes(tabName));
  if (activeBtn) activeBtn.classList.add("active-tab");
}
