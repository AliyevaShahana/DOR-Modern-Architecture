$(".owl-carousel").owlCarousel({
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
// console.log(prev);

let next = owlNav.children[1].children[0];
next.innerHTML = `<i class="fa-solid fa-arrow-right-long"></i>`;
console.log(next);
