let isUserLoggedIn = localStorage.getItem("facebookLoggedIn");
console.log(isUserLoggedIn);

if (isUserLoggedIn == null) {
  console.log("Redirect to Login!");
  window.location = "../LoginForm/Login.html";
}
