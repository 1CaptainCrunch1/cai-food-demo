document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  fetch("menu-data.json")
    .then(res => res.json())
    .then(menu => {
      menuGrid.innerHTML = menu.map(dish => `
        <div class="menu-card">
          <img src="${dish.image}" alt="${dish.name}" />
          <h3>${dish.name}</h3>
          <span>${dish.price}</span>
          <p>${dish.description}</p>
        </div>
      `).join('');
    })
    .catch(err => {
      menuGrid.innerHTML = "<p style='color:red;'>Failed to load menu.</p>";
      console.error("Menu load error:", err);
    });
});
