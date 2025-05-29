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

// ============= DEADLINE =================
const deadline = new Date("2024-12-07T18:00:00").getTime();

var day = document.getElementById("day");
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = deadline - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    day.innerHTML = (days < 10 ? "0" : "") + days;
    hour.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  } else {
    clearInterval(timerInterval);
  }
}, 1000);

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

// =============== REGISTRATION ====================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const message = document.getElementById("message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/register',
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        message.textContent = response.data.message;
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = `${response.data.error}`;
        message.style.color = "red";
      }
    } catch (error) {
      message.textContent = `${error.response?.data?.error || error.message}`;
      message.style.color = "red";
    }
  });
});
