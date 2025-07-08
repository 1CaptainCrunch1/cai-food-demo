document.addEventListener("DOMContentLoaded", () => {
    fetch('data/menu-data.json')
        .then(res => res.json())
        .then(data => {
            const grid = document.getElementById('menuGrid');
            grid.innerHTML = data.map(item => `
        <div class="menu-item">
          <img src="assets/img/${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <strong>${item.price}</strong>
        </div>
      `).join('');
        })
        .catch(err => console.error('❌ Failed to load menu-data.json:', err));
});
