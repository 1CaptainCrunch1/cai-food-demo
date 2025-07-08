const dishes = [
  { vn: "Bánh mì chả", en: "Pork Sausage", price: "$12.00", img: "banh-mi-cha.jpg" },
  { vn: "Bánh mì gà satay", en: "Halal Chicken Satay", price: "$12.75", img: "banh-mi-ga.jpg" },
  { vn: "Bánh mì thịt nướng", en: "Grilled Pork", price: "$12.75", img: "banh-mi-thit.jpg" },
  { vn: "Bánh mì bò lá lốt", en: "Betel Leaf Beef", price: "$13.75", img: "banh-mi-bo.jpg" },
  { vn: "Xôi mặn", en: "Savory Sticky Rice", price: "$11.00", img: "xoi-man.jpg" },
  { vn: "Xôi thịt nướng", en: "Sticky Rice w/ Pork", price: "$12.00", img: "xoi-thit.jpg" },
  { vn: "Xôi chiên", en: "Fried Sticky Rice", price: "$11.50", img: "xoi-chien.jpg" },
  { vn: "Bánh gối (2 pcs)", en: "Fried Dumplings", price: "$11.00", img: "banh-goi.jpg" },
  { vn: "Gỏi cuốn thịt nướng (2)", en: "Grilled Pork Rolls", price: "$12.00", img: "goi-thit.jpg" },
  { vn: "Gỏi cuốn bò lá lốt (2)", en: "Beef Rolls", price: "$12.75", img: "goi-bo.jpg" },
  { vn: "Gỏi xoài", en: "Mango Salad", price: "$10.75", img: "goi-xoai.jpg" },
  { vn: "Gỏi gà", en: "Chicken Salad", price: "$11.50", img: "goi-ga.jpg" },
  { vn: "Gỏi heo", en: "Pork Salad", price: "$11.50", img: "goi-heo.jpg" },
  { vn: "Cà phê", en: "Vietnamese Coffee", price: "$7.00", img: "ca-phe.jpg" },
  { vn: "Trà đào", en: "Peach Tea", price: "$6.50", img: "tra-dao.jpg" },
  { vn: "Kem bơ", en: "Avocado Ice Cream", price: "$9.00", img: "kem-bo.jpg" },
  { vn: "Bún thịt nướng", en: "Pork Noodles", price: "$13.25", img: "bun-thit.jpg" },
  { vn: "Bún chả giò", en: "Noodle w/ Spring Roll", price: "$13.25", img: "bun-cha-gio.jpg" },
  { vn: "Cơm tấm", en: "Broken Rice w/ Pork", price: "$13.75", img: "com-tam.jpg" },
  { vn: "Chả giò (2 pcs)", en: "Spring Rolls", price: "$11.00", img: "cha-gio.jpg" },
  { vn: "Gỏi cuốn chay", en: "Veggie Spring Rolls", price: "$10.75", img: "goi-chay.jpg" },
  { vn: "Xôi gà", en: "Sticky Rice w/ Chicken", price: "$12.00", img: "xoi-ga.jpg" },
  { vn: "Gỏi cuốn tôm", en: "Shrimp Rolls", price: "$12.75", img: "goi-tom.jpg" },
  { vn: "Bánh mì chay", en: "Veggie Banh Mi", price: "$11.00", img: "banh-mi-chay.jpg" },
  { vn: "Chè ba màu", en: "3-Color Dessert", price: "$8.50", img: "che-ba-mau.jpg" },
  { vn: "Nước mía", en: "Sugarcane Juice", price: "$7.00", img: "nuoc-mia.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = dishes.map(d => `
    <div class="menu-card" title="${d.en}">
      <img src="img/${d.img}" alt="${d.vn}">
      <h3>${d.vn}</h3>
      <span>${d.price}</span>
    </div>
  `).join('');
});
