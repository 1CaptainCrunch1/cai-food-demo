fetch('data/menu-data.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.innerHTML = \
        <img src="assets/img/\" alt="\" />
        <h4>\</h4>
        <p>\</p>
        <span>CA\$ \</span>
      \;
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading menu:', error);
  });
