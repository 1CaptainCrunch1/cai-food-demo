function setRole() {
  const role = document.getElementById('roleSelect').value;
  localStorage.setItem('userRole', role);
  window.location.href = 'app.html';
}
