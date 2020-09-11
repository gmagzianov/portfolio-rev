window.addEventListener("load", function () {
  const navBar = document.getElementById("navBar");
  const navBarBtn = document.querySelector("#navBar .navBar-btn");
  navBarBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
});
