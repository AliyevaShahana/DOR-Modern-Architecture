let tBody = document.querySelector("tbody");
let removed = document.querySelector(".removed");
let totalGeneral = document.querySelector(".total");
let basket = getDataFromLocaleBasket();
console.log(basket);
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");

    let tdPhoto = document.createElement("td");
    let img = document.createElement("img");
    img.src = element.product.imgUrl;
    tdPhoto.className = "td-photo";

    let tdName = document.createElement("td");
    tdName.innerText = element.product.title;

    let tdPrice = document.createElement("td");
    tdPrice.innerText = ` ${element.product.price} $`;

    let tdTotal = document.createElement("td");
    function subTotal() {
      tdTotal.innerText = `${element.count * element.product.price} $`;
    }
    subTotal();

    let tdIncDec = document.createElement("td");
    tdIncDec.className = "inc-dec";
    let Incbtn = document.createElement("h1");
    Incbtn.innerText = "+";
    Incbtn.className = "inc";
    let productCount = document.createElement("h2");
    productCount.innerText = element.count;
    let Decbtn = document.createElement("h1");
    Decbtn.innerText = "-";

    Incbtn.addEventListener("click", function () {
      let index = basket.findIndex(
        (item) => item.product._id === element.product._id
      );
      basket[index].count++;
      productCount.innerText = element.count;
      subTotal();
      getTotalSpice();
      setDataToLocaleBasket(basket);
    });

    Decbtn.addEventListener("click", function () {
      let index = basket.findIndex(
        (item) => item.product._id === element.product._id
      );
      basket[index].count--;
      productCount.innerText = element.count;
      if (element.count === 0) {
        trElem.remove();
        basket = basket.filter(
          (item) => item.product._id !== element.product._id
        );
      }
      subTotal();
      getTotalSpice();
      setDataToLocaleBasket(basket);
    });

    let tdDelete = document.createElement("td");
    let btnDelete = document.createElement("i");
    btnDelete.className = "fa-solid fa-xmark";
    btnDelete.style.cursor = "pointer";

    btnDelete.addEventListener("click", function () {
      trElem.remove();
      basket = basket.filter(
        (item) => item.product._id !== element.product._id
      );
      getTotalSpice();
      removed.innerHTML = `"${element.product.category}" removed. Undo?`;
      removed.style.opacity = 1;
      setDataToLocaleBasket(basket);
    });

    tBody.append(trElem);
    trElem.append(
      tdDelete,
      tdPhoto,
      tdName,
      tdPrice,

      tdIncDec,
      tdTotal
    );
    tdPhoto.append(img);
    tdDelete.append(btnDelete);
    tdIncDec.append(Decbtn, productCount, Incbtn);
  });
}
drawTable(basket);
function setDataToLocaleBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}
function getDataFromLocaleBasket() {
  return JSON.parse(localStorage.getItem("basket")) ?? [];
}

function getTotalSpice() {
  totalGeneral.innerText = `${basket.reduce(
    (sum, item) => sum + item.count * item.product.price,
    0
  )} $`;
}
getTotalSpice();


