const projects = document.querySelector(".projects");
const BASE_URL = ""
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
    card.innerHTML = `
    <div class="card" onclick=detailsPage()>
    <div class="img-div">
      <img src="./photo/Featured-Image-1 (1).webp" alt="" />
    </div>
    
    <div class="text">
      <div class="title">
        <h3>DYVO HUT</h3>
        <h6>Private hause</h6>
      </div>
      <h6>Architecture</h6>
    </div>
  </div>
    `;
    projects.append(card);
  });
}

function detailsPage(){
    window.location.href = ""
}