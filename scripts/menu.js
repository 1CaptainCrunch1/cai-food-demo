document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  const menu = [
    { name: "Phở Bò", price: "$13.99", description: "Beef rice noodle soup" },
    { name: "Phở Gà", price: "$12.99", description: "Chicken rice noodle soup" },
    { name: "Bánh Mì Đặc Biệt", price: "$8.50", description: "Special Vietnamese baguette" },
    { name: "Gỏi Cuốn", price: "$6.00", description: "Fresh spring rolls" },
    { name: "Cà Phê Sữa Đá", price: "$4.50", description: "Vietnamese iced coffee" }
  ];

  menuGrid.innerHTML = menu.map(dish => `
    <div class="menu-card">
      <img src="assets/placeholder.png" alt="${dish.name}" />
      <h3>${dish.name}</h3>
      <span>${dish.price}</span>
      <p>${dish.description}</p>
    </div>
  `).join('');
});
