let allProducts = document.querySelector(".products");
let allCategories = document.querySelectorAll(".allCategories");
let categoriesCopy = [];
const BASE_URL = "http://localhost:8080";

async function getAllData() {
  try {
    const res = await axios(`${BASE_URL}/products`);
    console.log(res.data);
    categoriesCopy = res.data;

    drawCard(res.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();

function drawCard(data) {
  allProducts.innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let imgWrap = document.createElement("div");
    imgWrap.className = "img-wrap";

    let img = document.createElement("img");
    img.src = element.imgUrl;

    let addBasket = document.createElement("div");
    addBasket.className = "add-basket";

    let aHrefAddBasket = document.createElement("a");

    let spanText = document.createElement("span");
    spanText.className = "text";
    spanText.innerHTML = "ADD TO CART";

    let spanPattern = document.createElement("span");
    spanText.className = "pattern";

    let content = document.createElement("div");
    content.className = "content";

    let h3Elem = document.createElement("h3");
    h3Elem.innerHTML = element.title;

    let parag = document.createElement("p");
    parag.innerHTML = `$ ${element.price}`;

    let para = document.createElement("p");
    para.innerHTML = `$ ${element.category}`;

    content.append(h3Elem, parag, para);
    imgWrap.append(img, addBasket);
    addBasket.append(aHrefAddBasket);
    aHrefAddBasket.append(spanText, spanPattern);
    card.append(imgWrap, content);
    allProducts.append(card);
  });
}

allCategories.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log(this.textContent);
    console.log(this);
    let filtered = categoriesCopy.filter(
      (item) =>
        item.category.toLocaleLowerCase() ===
        this.textContent.toLocaleLowerCase()
    );

    console.log(filtered);
    drawCard(filtered);
  });
});
