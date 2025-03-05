document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
