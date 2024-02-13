// ========================================================
// OPENING VIDEO
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// ========================================================
// OPENING OF SIZE GUIDE SECTION

let sizeGuide = document.querySelector(".size");
let sizeizeGuideSection = document.querySelector(".wrapper");
let xmarkSection = document.querySelector(".fa-xmark");

sizeGuide.addEventListener("click", function () {
  console.log("sallam");
  sizeizeGuideSection.style.transform = "translateX(0%)";
  //   sizeizeGuideSection.style.opacity = "1";
});
xmarkSection.addEventListener("click", function () {
  console.log("sallam");
  sizeizeGuideSection.style.transform = "translateX(100%)";
  //   sizeizeGuideSection.style.opacity = "0";
});

// ========================================================
// DINAMIC

const BASE_URL = "http://localhost:8080";

// const id=new URLSearchParams(window.location.search).get("id")
// console.log(id);

const headCategory = document.querySelector(".head-category");
const headBrand = document.querySelector(".head-brand");
const title = document.querySelector(".name-product");
const brand = document.querySelector(".brand-name");
const price = document.querySelector(".price");
const imageMain = document.querySelector(".img-main");
const videoOne = document.querySelector(".src-one");
const videoTwo = document.querySelector(".src-two");
const imageOne = document.querySelector(".image-one");
const imagetwo = document.querySelector(".image-two");
// ---------
const tdBrand = document.querySelector("#brand");

async function getData() {
  const res = await axios(`${BASE_URL}/products/65c741d306b17edb8713a8b4`);
  console.log(res.data);
  HeadCategory(res.data);
  HeadBrand(res.data);
  Title(res.data);
  Brand(res.data);
  Price(res.data);
  ImageMain(res.data);
  VideoOne(res.data);
  VideoTwo(res.data);
  ImageTwo(res.data);
  ImageOne(res.data);
  //   --------
  TdBrand(res.data);
}
getData();

function TdBrand(data) {
  tdBrand.innerText = `${data.details.brand}`;
}

// --------
function HeadBrand(data) {
  headBrand.innerText = data.details.brand;
}
function HeadCategory(data) {
  headCategory.innerText = data.category;
}
function Title(data) {
  title.innerText = data.title;
}
function Brand(data) {
  brand.innerHTML = `<h2>${data.details.brand}</h2> `;
}
function Price(data) {
  price.innerText = `$${data.price}`;
}
function ImageMain(data) {
  imageMain.src = data.media.imageMain;
}
function VideoOne(data) {
  videoOne.src = data.media.video;
}
function VideoTwo(data) {
  videoTwo.src = data.media.video;
}
function ImageOne(data) {
  imageOne.src = data.media.imageOne;
}
function ImageTwo(data) {
  imagetwo.src = data.media.imageTwo;
}
