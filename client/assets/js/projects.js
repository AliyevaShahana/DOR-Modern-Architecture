const projects = document.querySelector(".projects");
const BASE_URL = "http://localhost:8080";
async function getData() {
  let res = await axios(`${BASE_URL}/projects`);
  drawList(res.data);
}
getData();

function drawList(data) {
  projects.innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", function () {
      window.location.href = `projectsDetails.html?id=${element._id}`;
    });
    card.innerHTML = `
      <div class="img-div">
        <img src="${element.imgUrl}" alt="" />
      </div>
      <div class="text">
      <div class="title">
        <h3>DYVO HUT</h3>
        <h6>Private hause</h6>
      </div>
      <h6>Architecture</h6>
      </div>
    `;
    projects.append(card);
  });
}

// function detailsPage(){
//     window.location.href = ""
// }





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