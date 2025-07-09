document.addEventListener("DOMContentLoaded", () => {
  fetch("menu-data.json", { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
    .then(res => res.json())
    .then(data => renderMenu(data));
});

function renderMenu(items) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = items.map(item => `
    <div class="menuItem">
      <img src="assets/${item.image || 'placeholder.jpg'}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p><strong>${item.price}</strong></p>
    </div>
  `).join('');
}

