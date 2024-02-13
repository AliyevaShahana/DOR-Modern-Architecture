$(".owl-carousel").owlCarousel({
  loop: false,
  rewind: true,

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
// ================================================
//SLIDER ARROW

// let owlNav = document.querySelector(".owl-nav");
// let prev = owlNav.children[0].children[0];
// prev.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i>`;
// let next = owlNav.children[1].children[0];
// next.innerHTML = `<i class="fa-solid fa-arrow-right-long"></i>`;

// ================================================
// VIDEO

let videoPlayer = document.querySelector(".video-player");
let myVideo = document.querySelector(".my-video");
function stopVideo() {}
function playVideo() {
  videoPlayer.style.display = "block";
}

ScrollReveal({
  reset: true,
  distance: `60px`,
  duration: 2500,
  delay: 400,
});
// ScrollReveal().reveal(".icon-card", { delay: 100 });

// next.addEventListener("click", function () {
//   this.closest(".owl-carousel")
//     .children[0].querySelector(".active")
//     .nextElementSibling.querySelector(".building").style.transform =
//     "translateX(0px)";
// });

let register = document.querySelector(".register");
let aside = document.querySelector("aside");
let xMark = document.querySelector(".fa-xmark");

register.addEventListener("click", function () {
  // aside.style.display = "block";
  aside.style.transform = "translateX(0rem)";
});

xMark.addEventListener("click", function () {
  // aside.style.display = "none";
  aside.style.transform = "translateX(28rem)";
});
