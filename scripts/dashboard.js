const tabs = {
  inventory: '<h2>📦 Inventory</h2><div id=\"inventoryControls\"></div><div id=\"inventoryTable\"></div>',
  sales: '<h2>💰 Sales Logs</h2><p>Sales module coming soon.</p>',
  costing: '<h2>📋 Menu Costing</h2><p>Costing module coming soon.</p>',
  labor: '<h2>👷 Labor Tracker</h2><p>Labor log coming soon.</p>',
  fixed: '<h2>🧾 Fixed Costs</h2><p>Rent/utilities input coming soon.</p>',
  chat: '<h2>💬 Staff Chat</h2><p>Chat feed coming soon.</p>',
  schedule: '<h2>📅 Weekly Schedule</h2><p>Staff shift calendar coming soon.</p>',
  dashboard: '<h2>📊 Owner Dashboard</h2><p>Graphs + KPIs loading soon.</p>'
};

function showTab(tab) {
  const role = localStorage.getItem('userRole');
  if (!role) return window.location.href = 'login.html';

  const content = tabs[tab];
  if (!content) return;

  // Filter tabs for staff
  const staffRestricted = ['costing', 'labor', 'fixed', 'dashboard'];
  if (role === 'staff' && staffRestricted.includes(tab)) {
    document.getElementById('tabContent').innerHTML = '<p>❌ Access denied for staff.</p>';
  } else {
    document.getElementById('tabContent').innerHTML = content;
  }

  document.getElementById('roleDisplay').innerText = 'Logged in as: ' + role.toUpperCase();
}

document.querySelectorAll('nav button').forEach(b => {
  b.addEventListener('click', () => showTab(b.dataset.tab));
});

showTab('dashboard');
