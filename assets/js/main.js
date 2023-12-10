// Show Menu
let navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Hide Menu Mobile
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// Scroll Header

let header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

// Testimonials Swiper
let testimonialSwiper = new Swiper('.testimonial-swiper', {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// New Swiper
let newSwiper = new Swiper('.new-swiper', {
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Scroll To Top
let scrollUp = document.getElementById("scroll-up");
let btn = document.querySelector(".scrollup-icon");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Active Link With Scroll
let sections = document.querySelectorAll("section[id]");
let navLink = document.querySelectorAll("header .nav-link");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let id = section.getAttribute("id");
    if (window.scrollY >= section.offsetTop - 150 && window.scrollY < section.offsetTop - 150 + section.offsetHeight) {
      navLink.forEach((nav) => {
        nav.classList.remove("active");
        document.querySelector(`header .nav-link[href*= "${id}"]`).classList.add("active");
      });
    }
  });
});

// Show Cart
let cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});