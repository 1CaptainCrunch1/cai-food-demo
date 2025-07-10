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

  grid.innerHTML = items.map((item, index) => {
    try {
      return `
        <div class="menu-card">
          <img src="assets/imgs/${item.image || 'placeholder.jpg'}"
               alt="Image of ${item.name || 'Unnamed'}"
               loading="lazy"
               onerror="this.onerror=null;this.src='assets/imgs/placeholder.jpg';" />
          <h3>${item.name || "Unnamed Item"}</h3>
          <p>${item.desc || "No description available."}</p>
          <span>${item.price || "N/A"}</span>
        </div>
      `;
    } catch (e) {
      console.error("Render error at item index:", index, e);
      return "";
    }
  }).filter(Boolean).join("");
}
