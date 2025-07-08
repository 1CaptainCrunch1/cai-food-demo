document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  fetch('data/menu-data.json')
    .then(res => res.json())
    .then(menu => {
      menuGrid.innerHTML = menu.map(dish => `
        <div class="menu-card">
          <img src="${dish.img}" alt="${dish.name}" />
          <h3>${dish.name}</h3>
          <span>${dish.price}</span>
          <p>${dish.description}</p>
        </div>
      `).join('');
    });
});
