const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();
