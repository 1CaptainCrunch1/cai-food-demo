window.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  if (role === "owner") {
    document.getElementById("dashBody").style.background = "url(\'assets/bd-mg.jpg\') center center / cover no-repeat fixed";
  } else {
    document.getElementById("dashBody").style.background = "#fff";
  }
});
