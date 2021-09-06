const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("navToggle");

navToggle.onclick = () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
};
