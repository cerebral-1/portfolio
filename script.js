document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  const status = document.getElementById("form-status");
  status.textContent = "Sending...";
  status.style.color = "black";
});
