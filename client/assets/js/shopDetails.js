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

const id = new URLSearchParams(window.location.search).get("id");
console.log(window.location);

const headCategory = document.querySelector(".head-category");
const headBrand = document.querySelector(".head-brand");
const title = document.querySelector(".name-product");
const brand = document.querySelector(".brand-name");
const price = document.querySelector(".price");
const imageMain = document.querySelector(".img-main");
const video = document.querySelector("#video");
const imageOne = document.querySelector(".image-one");
const imagetwo = document.querySelector(".image-two");
const imgWrap = document.querySelector(".img-wrap-one");
// ---------
const tdBrand = document.querySelector("#brand");
const tdCollection = document.querySelector("#collection");
const tdColor = document.querySelector("#color");
const tdMaterials = document.querySelector("#materials");
const descriptionImage = document.querySelector("#description-image");

async function getData() {
  const res = await axios(`${BASE_URL}/products/${id}`);
  console.log(res.data);
  HeadCategory(res.data);
  HeadBrand(res.data);
  Title(res.data);
  Brand(res.data);
  Price(res.data);
  ImageMain(res.data);
  // Video(res.data);
  ImageTwo(res.data);
  ImageOne(res.data);
  ImageWrap(res.data);
  //   --------
  TdBrand(res.data);
  TdCollection(res.data);
  TdColor(res.data);
  TdMaterials(res.data);
  DescriptionImage(res.data);
}
getData();

function TdBrand(data) {
  tdBrand.innerText = `${data.details.brand}`;
}
function TdCollection(data) {
  tdCollection.innerText = `${data.details.collection}`;
}
function TdColor(data) {
  tdColor.innerText = `${data.details.color}`;
}
function TdMaterials(data) {
  tdMaterials.innerText = `${data.details.materials}`;
}
function DescriptionImage(data) {
  descriptionImage.src = `${data.description}`;
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
// function Video(data) {
//   video.innerHTML = `<source class="src-one" src="${data.media.video}" type="video/mp4" />
//   <source class="src-two" src="${data.media.video}" type="video/ogg" />`;
// }
function ImageOne(data) {
  imageOne.src = data.media.imageOne;
}
function ImageTwo(data) {
  imagetwo.src = data.media.imageTwo;
}
function ImageWrap(data) {
  imgWrap.innerHTML = data.media.videoPhoto
    ? `<img src="${data.media.videoPhoto}"/>`
    : `<video autoplay loop><source class="src-one" src="${data.media.video}" type="video/mp4" />
    <source class="src-two" src="${data.media.video}" type="video/ogg" /></video>`;
}
