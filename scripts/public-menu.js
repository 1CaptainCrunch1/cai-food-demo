document.addEventListener('DOMContentLoaded', () => {
  fetch("menu-data.json")
    .then(res => res.json())
    .then(data => renderMenu(data));

  function renderMenu(items) {
    const grid = document.getElementById("menuGrid");
    if (!grid) return;

    grid.innerHTML = items.map(item => `
      <div class="menuItem">
        <img src="assets/${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p><strong>${item.price}</strong></p>
      </div>
    `).join('');
  }
});

/* PHASE 2F: Filter Logic */
function filterCategory(keyword) {
  const cards = document.querySelectorAll(".menu-card");
  cards.forEach(card => {
    const tag = card.dataset.category || "";
    const show = keyword === "all" || new RegExp(keyword, "i").test(tag);
    card.style.display = show ? "flex" : "none";
  });
}

