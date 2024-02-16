$(document).ready(function () {
  $("#my-carousel").on("initialized.owl.carousel", function () {
    $(".navigator").eq(0).addClass("active");
    console.log("initialized");
  });

  $("#my-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
    ],
    singleItem: true,
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

  $("#my-carousel").on("changed.owl.carousel", function (ev) {
    var item_index = ev.page.index;
    $(".navigator").removeClass("active").eq(item_index).addClass("active");
  });

  $(".navigator").on("click", function () {
    var item_no = $(this).data("item");
    $("#my-carousel").trigger("to.owl.carousel", [item_no, 1000, true]);
  });
});

const projects = document.querySelector(".project");
const imgDiv = document.querySelector(".img-div");
const id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080";

async function getAllData() {
  try {
    const res = await axios(`${BASE_URL}/projects/${id}`);
    drawCards(res.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();

function drawCards(element) {
  projects.innerHTML = `
    <div class="title">
    <div class="img-div">
      <img
        src="${element.photos.main}"
        alt=""
      />
    </div>
    <div class="info">
      <div class="table-info">
        <table>
          <thead>
            <tr>
              <th><h3>TYPE</h3></th>
              <th><h3>LOCATION</h3></th>
              <th><h3>AREA</h3></th>
              <th><h3>YEAR</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h6>${element.type}</h6></td>
              <td><h6>${element.location}</h6></td>
              <td><h6>${element.area}</h6></td>
              <td><h6>${element.year}</h6></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="description"> <h6>${element.description}</h6></div>
    </div>
  </div>

  <div class="top-img">    <img    src="${element.photos.one}"/>
    <img    src="${element.photos.two}"    />
    <img    src="${element.photos.three}"    />
    <img    src="${element.photos.four}"          />
    <img    src="${element.photos.five}"          />
    <img    src="${element.photos.six}"    />
  </div>
    `;
}

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
