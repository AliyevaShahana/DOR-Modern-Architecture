const tBody = document.querySelector("tbody");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const mainImage = document.querySelector("#main-image");
const desImage = document.querySelector("#description");
const loadingOverlay = document.querySelector("#loading-overlay");
editId = null;

const BASE_URL = "http://localhost:8080";
let categoriesCopy = [];
let base64;

async function getAllData() {
  try {
    loadingOverlay.classList.add("open");
    const res = await axios(`${BASE_URL}/projects`);
    loadingOverlay.classList.remove("open");
    console.log(res.data);
    categoriesCopy = res.data;

    drawTable(res.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="td-img"><img src="${
      element.media ? element.media.imageMain : element.imgUrl
    } "></td>
    <td><h6> ${element.title}</h6></td>
    <td><h6>${element.year} </h6></td>
    <td><h6>${element.category} </h6></td>
    <td><h6>${element.type} </h6></td>
    <td><h6>${element.location} </h6></td>
    <td><h6>${element.area} </h6></td>
    <td><i onclick=deleteData("${
      element._id
    }",this) class="fa-regular fa-trash-can"></i>
    <i onclick=updateData("${
      element._id
    }")  class="fa-regular fa-pen-to-square"></i></td>
    `;
    tBody.append(tr);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: allInputs[0].value,
    year: allInputs[1].value,
    category: allInputs[2].value,
    type: allInputs[3].value,
    location: allInputs[4].value,
    area: allInputs[5].value,
    description: allInputs[6].value,
    imgUrl: base64,
 
    // media: { imageMain: allInputs[2].value },
  };
    if (!editId) {
  addToData(obj);
    } else {
      async function update(obj) {
        await axios.patch(`${BASE_URL}/projects/${editId}`, obj);
      }
      update(obj);
    }
});
async function addToData(obj) {
  await axios.post(`${BASE_URL}/projects`, obj);
}

async function updateData(id) {
  editId = id;
  let res = await axios(`${BASE_URL}/projects/${id}`);
  allInputs[0].value = res.data.title;
  allInputs[2].value = res.data.category;
  allInputs[1].value = res.data.year;
  //   select.value = res.data.categories;
  //   console.log(select.value);
  //   drwaTable(res.data)
}
async function deleteData(id, btn) {
  btn.closest("tr").remove();
  await axios.delete(`${BASE_URL}/projects/${id}`);
  //   setDataToLocale(favsProducts);
}

// mainImage.addEventListener("change", function (e) {
//   console.log(e.target.files[0]);
//   uploadImageUrl(e);
// });
// // desImage.addEventListener("change", function (e) {
// //   console.log(e.target.files[0]);
// //   uploadImageUrl(e);
// // });

// const uploadImageUrl = async (e) => {
//   try {
//     const file = e.target.files[0];
//     base64 = await convertBase64(file);
//     // console.log(base64);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const convertBase64 = async (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);

//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = () => {
//       reject(error);
//     };
//   });
// };
