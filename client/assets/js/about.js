$(".owl-carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

let owlNav = document.querySelector(".owl-nav");
let prev = owlNav.children[0].children[0];
prev.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i>`;
let next = owlNav.children[1].children[0];
next.innerHTML = `<i class="fa-solid fa-arrow-right-long"></i>`;

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

// ScrollReveal().reveal(".page-title", { delay: 300 });

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 442.6666564941406) {
    valueDisplays.forEach((valueDisplays) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplays.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
});

let register = document.querySelector(".register");
let aside = document.querySelector("aside");
let menuAside = document.querySelector("#menu-aside");
let xMark = document.querySelector(".fa-xmark");
let xmark = document.querySelector(".xmark");
let menu = document.querySelector("#menu");

register.addEventListener("click", function () {
  aside.style.transform = "translateX(0rem)";
});
menu.addEventListener("click", function () {
  menuAside.style.transform = "translateX(0rem)";
});

xMark.addEventListener("click", function () {
  // aside.style.transform = "translateX(28rem)";
  menuAside.style.transform = "translateX(28rem)";
});
xmark.addEventListener("click", function () {
  aside.style.transform = "translateX(28rem)";
});
