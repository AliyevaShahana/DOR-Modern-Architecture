let loginRegisterBtn = document.querySelector(".login-register-btn");
let login = document.querySelector("#login");
let register = document.querySelector("#register");

function click() {
  loginRegisterBtn.addEventListener("click", function () {
    if (login.style.display === "none") {
      register.style.display = "none";
      login.style.display = "block";
    } else {
      register.style.display = "block";
      login.style.display = "none ";
    }
  });
}
click();
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
// REGISTER
let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
const BASE_URL = "http://localhost:8080";
let users = [];

// async function getAllData() {
//   try {
//     const res = await axios(`${BASE_URL}/sign/`);
//     users = res.data;
//     // console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllData();

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   let bool = users.some(
//     (item) =>
//       item.userName === allInputs[0].value || item.email === allInputs[1].value
//   );

//   let userObj = {
//     userName: allInputs[0].value,
//     email: allInputs[1].value,
//     password: allInputs[2].value,
//     isAdmin: false,
//   };

//   if (!bool) {
//     let res = await axios.post(`${BASE_URL}/sign/signup`, userObj);
//     if (res.status === 201) {
//       allInputs.forEach((item) => (item.value = ""));

//       Toastify({
//         text: "Registration completed successfully!",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "right",
//         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//       }).showToast();

//       // window.location = "login.html";
//       click();
//       return;
//     } else {
//       Toastify({
//         text: "Email is used!",
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "right",
//         backgroundColor: "linear-gradient(to right, red, #96c93d)",
//       }).showToast();
//     }
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Please fill in all fields..",
//     });
//   }
// });

// =========================================================
// LOGIN

let formLogin = document.querySelector("#form-login");
let loginInputs = document.querySelector(".login-input");
let passwordInputs = document.querySelector(".password-input");

formLogin.addEventListener("submit", async function (e) {
  e.preventDefault();

  let newObj = {
    email: loginInputs.value,
    password: passwordInputs.value,
  };
  let boolSeconf;
  if (loginInputs.value || passwordInputs.value) {
    const res = await axios.post(`${BASE_URL}/signin`, newObj);

    if (res.status === 200) {
      if (!res.data.isAdmin) {
        window.location.href = "admin.html";
      } else {
        localStorage.setItem("isAdmin", true);
        console.log("index e get");
        window.location.href = "index.html";
      }
      loginInputs.value = "";
      passwordInputs.value = "";

      // Toastify({
      //   text: "Login completed successfully.",
      //   duration: 3000,
      //   close: true,
      //   gravity: "top",
      //   position: "right",
      //   backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      // }).showToast();

      // localStorage.setItem("login", true);
      return;
    } else {
      // Toastify({
      //   text: "Wrong email or password!",
      //   duration: 3000,
      //   close: true,
      //   gravity: "top",
      //   position: "right",
      //   backgroundColor: "x1linear-gradient(to right, red, #96c93d)",
      // }).showToast();
      // return;
    }
  } else {
    // Toastify({
    //   text: "fill in all fields",
    //   duration: 3000,
    //   close: true,
    //   gravity: "top",
    //   position: "right",
    //   backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
    // }).showToast();
  }
});
