document.addEventListener("DOMContentLoaded", () => {
  fetch("menu-data.json")
    .then(res => res.text())
    .then(text => {
      const items = JSON.parse(text);
      renderMenu(items);
    })
    .catch(err => {
      document.getElementById("menuGrid").innerHTML = "<p>Error loading menu data.</p>";
      console.error("Menu JSON parse failed:", err);
    });
});

function renderMenu(items) {
  const grid = document.getElementById("menuGrid");
  if (!grid || !items) return;

  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="img/${item.image || 'placeholder.jpg'}"
           alt="Image of ${item.name}"
           onerror="this.onerror=null;this.src='img/placeholder.jpg';" />
      <h3>${item.name || "Unnamed Item"}</h3>
      <p>${item.desc || "No description available."}</p>
      <span>${item.price || "N/A"}</span>
    </div>
  `).join("");
}
// FORCE COMMIT LINE: 07/09/2025 11:24:07
