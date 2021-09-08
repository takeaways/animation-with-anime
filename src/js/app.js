import "../css/styles.css";
import "./nav";
import "./scroll";
import { logo } from "./anime";

logo();

//section1
const s_icons = document.querySelectorAll(".slide_icons li");
const s_right = document.querySelector(".slide_btn.right");
const s_left = document.querySelector(".slide_btn.left");
const bg = document.querySelector("#sec1");
const s_slider = document.querySelectorAll(".sec1_slider li");

s_icons.forEach((li) => {
  li.addEventListener("click", (e) => {
    const {
      target: {
        dataset: { index },
      },
    } = e;

    reset_active();
    if (li.tagName === "LI") {
      for (let i = 0; i < s_icons.length; i++) {
        if (index == i) {
          active(i);
        }
      }
    }
  });
});

function reset_active() {
  s_slider.forEach((_, idx) => {
    s_slider[idx].classList.remove("on");
    s_icons[idx].classList.remove("active");
  });
}

function active(i) {
  s_slider[i].classList.add("on");
  s_icons[i].classList.add("active");
  bg.style.backgroundImage = `url(../image/bg_${i}.jpeg)`;
}

// event handlers
function handleNext(e) {
  e.preventDefault();
  const curr_slide = document.querySelector(".sec1_slider li.on");
  let i = Number(curr_slide.dataset.index) + 1;
  if (i >= s_slider.length) {
    i = 0;
  }
  reset_active();
  active(i);
}

function handlePrev(e) {
  e.preventDefault();
  const curr_slide = document.querySelector(".sec1_slider li.on");
  let i = Number(curr_slide.dataset.index) - 1;
  if (i < 0) {
    i = s_slider.length - 1;
  }
  reset_active();
  active(i);
}

// event bindings
s_right.addEventListener("click", handleNext);
s_left.addEventListener("click", handlePrev);
