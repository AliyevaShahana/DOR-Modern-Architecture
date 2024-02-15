let loginRegisterBtn = document.querySelector(".login-register-btn");
let login = document.querySelector("#login");
let register = document.querySelector("#register");

loginRegisterBtn.addEventListener("click", function () {
  if (login.style.display === "none") {
    register.style.display = "none";
    login.style.display = "block";
  } else {
    register.style.display = "block";
    login.style.display = "none ";
  }
});
// =========================================================
// EYE ICON

let eyeIcon = document.querySelector(".fa-eye-slash");
let passwordInput = document.querySelector(".password");

eyeIcon.addEventListener("click", function () {
  if (this.className === "fa-regular fa-eye-slash") {
    this.className = "fa-regular fa-eye";
    passwordInput.type = "text";
  } else {
    this.className = "fa-regular fa-eye-slash";
    passwordInput.type = "password";
  }
});

let eyeIconLogin = document.querySelector(".icon");
let passwordInputLogin = document.querySelector(".password-input");

eyeIconLogin.addEventListener("click", function () {
  if (this.className === "fa-regular fa-eye-slash") {
    this.className = "fa-regular fa-eye";
    passwordInputLogin.type = "text";
  } else {
    this.className = "fa-regular fa-eye-slash";
    passwordInputLogin.type = "password";
  }
});

// =========================================================

let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
const BASE_URL = "http://localhost:8080";
let users = [];

async function getAllData() {
  try {
    const res = await axios(`${BASE_URL}/sign`);
    users = res.data;
  } catch (error) {
    console.log(error);
  }
}
getAllData();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // let bool = users.some(
  //   (item) =>
  //     item.userName === allInputs[0].value || item.email === allInputs[1].value
  // );
  // if (!bool) {
  //   let userObj = {
  //     userName: allInputs[0].value,
  //     email: allInputs[1].value,
  //     password: allInputs[2].value,
  //     isAdmin: false,
  //     //   id: Date.now(),
  //   };
  //   console.log(users);
  //   async function addToData(obj) {
  //     await axios.post(`${BASE_URL}/sign`, obj);
  //   }
  //   addToData(userObj);
  // if(  ){

  // } else {
  //   window.alert("username or email already used");
  // }

  allInputs.forEach((item) => {
    item.value = "";
  });

  //   window.location = "login.html";
});

// =========================================================

let formLogin = document.querySelector("#form-login");
let loginInputs = document.querySelector(".login-input");
let passwordInputs = document.querySelector(".password-input");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = users.find(
    (item) =>
      item.userName === loginInputs.value &&
      item.password === passwordInputs.value
  );
  if (user) {
    console.log(user);

    // localStorage.setItem("userName", user.userName);
    //   window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }

  allInputs.forEach((item) => {
    item.value = "";
  });
});
