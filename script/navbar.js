document.getElementById("menuToggle").addEventListener("click", function () {
  // Toggle menu icon and close icon
  document.querySelector(".menu-icon").classList.toggle("hidden");
  document.querySelector(".close-icon").classList.toggle("hidden");

  // Toggle the visibility of the menu
  const navbarSticky = document.getElementById("navbar-sticky");
  if (navbarSticky) {
    navbarSticky.classList.toggle("hidden");
  }
});

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (nav) {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - (nav ? nav.offsetHeight : 0),
          behavior: "smooth",
        });
      }
    });
  });

  function handleCurrentClass() {
    const scrollPosition = window.scrollY;

    links.forEach((link) => {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section && isElementInView(section, scrollPosition)) {
        links.forEach((link) => link.classList.remove("current"));
        link.classList.add("current");
      }
    });
  }

  function isElementInView(el, scrollPos) {
    if (el) {
      const rect = el.getBoundingClientRect();
      // Adjust the threshold value to fit your layout
      return (
        rect.top <= scrollPos &&
        rect.bottom > scrollPos + window.innerHeight / 2
      );
    }
    return false;
  }

  document.addEventListener("DOMContentLoaded", handleCurrentClass);
  window.addEventListener("scroll", handleCurrentClass);
});
