import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4"],
  afterLoad: (old_el, new_el) => {
    if (new_el.index === 0) {
      sec2_reset();
    }
    if (new_el.index === 1) {
      sec2();
    }
    if (new_el.index === 2) {
      sec2_reset();
    }
  },
});

const slider_wrap = document.querySelector(".slider_wrap");
function sec2() {
  slider_wrap.classList.toggle("active");
}
function sec2_reset() {
  slider_wrap.classList.toggle("active");
}
