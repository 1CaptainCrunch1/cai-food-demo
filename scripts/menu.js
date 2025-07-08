document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  fetch("data/menu-data.json")
    .then(res => res.json())
    .then(menu => {
      menuGrid.innerHTML = menu.map((dish, i) => `
        <div class="menu-card">
          <img src="${dish.image || 'assets/dish-' + ((i % 6) + 1) + '.jpg'}" alt="${dish.name}" />
          <h3>${dish.name}</h3>
          <span>${dish.price}</span>
          <p>${dish.description}</p>
        </div>
      `).join('');
    })
    .catch(err => {
      console.error("Failed to load menu JSON:", err);
      menuGrid.innerHTML = "<p style='color: red'>⚠️ Failed to load menu. Try again later.</p>";
    });
});
