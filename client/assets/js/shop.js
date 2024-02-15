let allProducts = document.querySelector(".products");
let allCategories = document.querySelectorAll(".allCategories");
let pageCategory = document.querySelectorAll(".category");
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

    let heartIcon = document.createElement("i");
    heartIcon.className = "fa-regular fa-heart";
    // <!-- <i class="fa-solid fa-check"></i> -->
    let detailIcon = document.createElement("i");
    detailIcon.className = "fa-solid fa-arrow-up-long";
    detailIcon.addEventListener("click", function () {
      window.location.href = `shopDetails.html?id=${element._id}`;
    });

    let aHrefAddBasket = document.createElement("a");

    let spanPattern = document.createElement("span");
    spanPattern.className = "pattern";

    let spanText = document.createElement("span");
    spanText.className = "text";
    spanText.innerHTML = "ADD TO CART";

    let content = document.createElement("div");
    content.className = "content";

    let h3Elem = document.createElement("h3");
    h3Elem.innerHTML = element.title;

    let parag = document.createElement("p");
    parag.innerHTML = `$ ${element.price}`;

    let para = document.createElement("h6");
    para.innerHTML = ` ${element.category}`;

    content.append(h3Elem, para, parag);
    imgWrap.append(img, addBasket);
    addBasket.append(aHrefAddBasket, heartIcon, detailIcon);
    aHrefAddBasket.append(spanText, spanPattern);
    card.append(imgWrap, content);
    allProducts.append(card);
    // -----------------------------------------------------------------
    // WISHLIST

    let favoritesProduct = getDataFromLocale();

    let favObj = favoritesProduct.find((item) => item.id === element._id);
    heartIcon.className = favObj ? "fa-solid fa-check" : "fa-regular fa-heart";

    // wishlistCount.innerText = favoritesProduct.length;

    heartIcon.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-check")
        : (this.className = "fa-regular fa-heart");

      let favorites = getDataFromLocale();
      let index = favorites.findIndex((item) => item._id === element._id);
      console.log(favorites);

      if (index === -1) {
        console.log(index);
        favorites.push(element);
      } else {
        favorites = favorites.filter((item) => item.id !== element._id);
      }

      // wishlistCount.innerText = favorites.length;
      setDataToLocale(favorites);
    });

    function setDataToLocale(favorites) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    function getDataFromLocale() {
      return JSON.parse(localStorage.getItem("favorites")) ?? [];
    }

    // -----------------------------------------------------------------
    // BASKET
    let basketCount = document.querySelector(".basket-count");
    let basketProduct = getDataFromLocaleBasket();

    function bsktCount() {
      basketCount.innerText = basketProduct.reduce(
        (sum, item) => sum + item.count,
        0
      );
      setDataToLocaleBasket(basketProduct);
    }
    bsktCount();

    aHrefAddBasket.addEventListener("click", function () {
      let basket = getDataFromLocaleBasket();

      let index = basket.findIndex((item) => item.product._id === element._id);
      if (index > -1) {
        basket[index].count = basket[index].count + 1;
      } else {
        basket.push({ count: 1, product: element });
      }
      function bsktCount() {
        basketCount.innerText = basket.reduce(
          (sum, item) => sum + item.count,
          0
        );
      }
      bsktCount();
      setDataToLocaleBasket(basket);
    });
    function setDataToLocaleBasket(basket) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
    function getDataFromLocaleBasket() {
      return JSON.parse(localStorage.getItem("basket")) ?? [];
    }
  });
}

// -----------------------------------------------------------------

// -----------------------------------------------------------------
allCategories.forEach((btn) => {
  btn.addEventListener("click", function () {
    let filtered = categoriesCopy.filter(
      (item) =>
        item.category.toLocaleLowerCase() ===
        this.textContent.toLocaleLowerCase()
    );
    drawCard(filtered);
  });
});

const brandsSelectorH3 = document.querySelectorAll(".brands-selector-h3");
let brandsSelectorCount = document.querySelectorAll(".brands-selector-count");
brandsSelectorH3.forEach((btn) => {
  btn.addEventListener("click", function () {
    let filtered = categoriesCopy.filter(
      (item) =>
        item.details?.brand.toLocaleLowerCase() ===
        this.textContent.toLocaleLowerCase()
    );

    brandsSelectorCount.innerText = filtered.length;
    drawCard(filtered);
  });
});
