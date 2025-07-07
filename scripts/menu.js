document.addEventListener('DOMContentLoaded', () => {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  const menu = [
    { name: 'Phở Bò', price: '.99', description: 'Beef rice noodle soup' },
    { name: 'Phở Gà', price: '.99', description: 'Chicken rice noodle soup' },
    { name: 'Bánh Mì Đặc Biệt', price: '.50', description: 'Special Vietnamese baguette' },
    { name: 'Gỏi Cuốn', price: '.00', description: 'Fresh spring rolls' },
    { name: 'Cà Phê Sữa Đá', price: '.50', description: 'Vietnamese iced coffee' }
  ];

  menuGrid.innerHTML = menu.map(dish => \
    <div class="menu-card">
      <img src="assets/placeholder.png" alt="\" />
      <h3>\</h3>
      <span>\</span>
      <p>\</p>
    </div>
  \).join('');
});
