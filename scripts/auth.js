function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  if (email === "owner@grabgo.vn" && password === "admin123") {
    localStorage.setItem("userRole", "owner");
    window.location.href = "dashboard.html";
  } else if (email === "staff@grabgo.vn" && password === "staff123") {
    localStorage.setItem("userRole", "staff");
    window.location.href = "dashboard.html";
  } else {
    errorBox.textContent = "Invalid login. Please try again.";
  }
}

function requireLogin() {
  const role = localStorage.getItem("userRole");
  if (!role) window.location.href = "login.html";
}

function getUserRole() {
  return localStorage.getItem("userRole");
}
