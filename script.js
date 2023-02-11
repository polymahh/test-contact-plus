const menuBtn = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");
const menuNav = document.querySelector(".menu-nav");
const navLinks = document.querySelectorAll(".nav-link");

// toggle open and close menu
const togglemenu = () => {
  menuNav.classList.toggle("open-menu");
};
menuBtn.addEventListener("click", togglemenu);
closeMenu.addEventListener("click", togglemenu);

// mage nav link bold when active
const removeActive = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    link.classList.add("off-link");
  });
};

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    removeActive();
    menuNav.classList.remove("open-menu");
    link.classList.remove("off-link");
    link.classList.add("active-link");
  })
);
