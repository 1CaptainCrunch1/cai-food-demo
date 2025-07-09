document.addEventListener("DOMContentLoaded", () => {
  fetch("menu-data.json")
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(text);
      renderMenu(json);
    });
});

function renderMenu(items) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = items.map(item => \
    <div class="menuItem">
      <img src="assets/\"
           alt="Image of \"
           onerror="this.onerror=null;this.src='assets/placeholder.jpg';" />
      <h3>\</h3>
      <p>\</p>
      <p><strong>\</strong></p>
    </div>
  \).join("");
}
