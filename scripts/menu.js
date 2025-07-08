document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menuGrid");
  const filterBar = document.createElement("div");
  const searchInput = document.createElement("input");

  filterBar.className = "filter-bar";
  searchInput.placeholder = "Search menu...";
  searchInput.className = "search-box";

  document.querySelector(".menu-section").prepend(searchInput, filterBar);

  const categories = ["All", "Core", "Dessert", "Drink"];
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.className = "filter-btn";
    btn.onclick = () => render(cat, searchInput.value);
    filterBar.appendChild(btn);
  });

  searchInput.addEventListener("input", () => {
    const active = document.querySelector(".filter-btn.active")?.innerText || "All";
    render(active, searchInput.value);
  });

  fetch("data/menu-data.json")
    .then(res => res.json())
    .then(data => {
      window._menu = data;
      render("All", "");
    });

  function render(category, query) {
    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.toggle("active", b.innerText === category);
    });

    const filtered = window._menu.filter(item =>
      (category === "All" || item.category === category) &&
      (item.name.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase()))
    );

    grid.innerHTML = "";
    for (const item of filtered) {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <img src="assets/img/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <strong>${item.price}</strong>
      `;
      grid.appendChild(card);
    }
  }
});
