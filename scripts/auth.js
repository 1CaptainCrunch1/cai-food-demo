function login() {
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('error');

  const creds = {
    'admin@grabgo.vn': { pass: 'adminCai01', role: 'owner' },
    'employee@grabgo.vn': { pass: 'staffCai01', role: 'staff' }
  };

  if (creds[email] && creds[email].pass === password) {
    localStorage.setItem('userRole', creds[email].role);
    window.location.href = 'dashboard.html';
  } else {
    errorBox.textContent = '❌ Invalid credentials. Please try again.';
  }
}
