// ========= SHOW MENU ===============
const menu = document.getElementById("nav-menu"),
  closeBtn = document.getElementById("nav-close"),
  toggleBtn = document.getElementById("nav-toggle");

// Menu show
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

// Menu hidden
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
}

// ========= REMOVE MENU MOBILE ===============

const navBtn = document.querySelector(".nav_menu a");

navBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});

// ========== CHANGE BACKGROUND HEADER ===========

const bgHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeader);
bgHeader();

// =========== SHOW SCROLL UP ===============
const scrollUp = () => {
  const scrollup = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

// =============== AOS =====================

AOS.init({
  offset: 100,
  easing: "ease",
});
