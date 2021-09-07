const bodyEle = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  bodyEle.classList.toggle("nav_active");
});
