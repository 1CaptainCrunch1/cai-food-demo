let db;
document.addEventListener("DOMContentLoaded", () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      localStorage.setItem("userEmail", user.email);
      const role = user.email === "admin@grabgo.vn" ? "owner" : "staff";
      localStorage.setItem("userRole", role);
      window.location.href = "dashboard.html";
    }
  });
});

function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .catch(e => document.getElementById("error").innerText = "? " + e.message);
}
