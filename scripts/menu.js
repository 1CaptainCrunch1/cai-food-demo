const menuItems = [
  { vn: "Bánh mì chả", en: "Pork Sausage Baguette", price: 12.00, category: "Core" },
  { vn: "Bánh mì gà satay (halal)", en: "Halal Chicken Satay Baguette", price: 12.75, category: "Core" },
  { vn: "Bánh mì thịt nướng", en: "Chargrilled Pork Baguette", price: 12.75, category: "Core" },
  { vn: "Bánh mì bò lá lốt", en: "Betel Leaf Beef Baguette", price: 13.75, category: "Core" },
  { vn: "Xôi mặn", en: "Savory Sticky Rice with Egg & Sausage", price: 11.00, category: "Core" },
  { vn: "Xôi thịt nướng", en: "Grilled Pork Sticky Rice", price: 12.00, category: "Core" },
  { vn: "Xôi chiên", en: "Fried Sticky Rice with Pork Floss", price: 11.50, category: "Core" },
  { vn: "Bánh gối (2 pcs)", en: "Fried Dumplings with Pork & Veg", price: 11.00, category: "Core" },
  { vn: "Gỏi cuốn thịt nướng (2)", en: "Grilled Pork Fresh Rolls", price: 12.00, category: "Core" },
  { vn: "Gỏi cuốn bò lá lốt (2)", en: "Beef Betel Leaf Fresh Rolls", price: 12.75, category: "Core" },
  { vn: "Gỏi xoài", en: "Mango Salad with Herbs & Peanuts", price: 10.75, category: "Core" },
  { vn: "Gỏi gà", en: "Poached Chicken Salad", price: 11.50, category: "Core" },
  { vn: "Gỏi heo", en: "Pork Cabbage Salad", price: 11.50, category: "Core" },
  { vn: "Cà phê sữa đá", en: "Vietnamese Iced Coffee", price: 7.00, category: "Core" },
  { vn: "Trà đào", en: "Peach Black Tea", price: 6.50, category: "Core" },
  { vn: "Kem bơ", en: "Avocado Ice Cream", price: 9.00, category: "Core" },

  { vn: "Bún thịt nướng", en: "Grilled Pork Vermicelli Bowl", price: 13.25, category: "Expanded" },
  { vn: "Bún chả giò", en: "Noodle Bowl with Fried Rolls", price: 13.25, category: "Expanded" },
  { vn: "Cơm tấm", en: "Broken Rice with Pork & Egg", price: 13.75, category: "Expanded" },
  { vn: "Chả giò (2 pcs)", en: "Fried Spring Rolls", price: 11.00, category: "Expanded" },
  { vn: "Gỏi cuốn chay", en: "Veggie Fresh Spring Rolls", price: 10.75, category: "Expanded" },
  { vn: "Xôi gà", en: "Sticky Rice with Poached Chicken", price: 12.00, category: "Expanded" },
  { vn: "Gỏi cuốn tôm (2)", en: "Shrimp Fresh Rolls", price: 12.75, category: "Expanded" },
  { vn: "Bánh mì chay", en: "Vegetarian Banh Mi with Tofu", price: 11.00, category: "Expanded" },
  { vn: "Chè ba màu", en: "Three-Color Coconut Dessert", price: 8.50, category: "Expanded" },
  { vn: "Nước mía", en: "Sugarcane Juice", price: 7.00, category: "Expanded" },

  { vn: "Combo Bánh mì + Gỏi cuốn + Drink", en: "Vietnamese Sandwich + Rolls + Drink", price: 20.00, category: "Combo" },
  { vn: "Combo Xôi mặn + Gỏi xoài + Drink", en: "Sticky Rice + Mango Salad + Drink", price: 18.00, category: "Combo" },
  { vn: "Combo Bún + Chả giò + Drink", en: "Vermicelli Bowl + Fried Rolls + Drink", price: 22.00, category: "Combo" },
  { vn: "Combo Gia Đình", en: "Family Combo — 4 Mains, 4 Rolls, 4 Drinks", price: 75.00, category: "Combo" }
];

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const categories = {
    Core: "🔥 Core Dishes",
    Expanded: "✨ Expanded Menu",
    Combo: "🥢 Combos & Upsells"
  };

  Object.keys(categories).forEach(cat => {
    const section = document.createElement("div");
    section.innerHTML = `<h3 style="color:gold;margin-top:2rem;">${categories[cat]}</h3>`;
    grid.appendChild(section);

    menuItems.filter(i => i.category === cat).forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card";
      if (cat === "Combo") card.style.background = "#333822";

      card.innerHTML = \`
        <div class="card-inner">
          <img src="assets/placeholder.png" alt="\${item.vn}" />
          <h4>\${item.vn}</h4>
          <p>\${item.en}</p>
          <span>CA$\${item.price.toFixed(2)}</span>
        </div>
      \`;
      grid.appendChild(card);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderMenu);