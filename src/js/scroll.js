import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

const slider_wrap = document.querySelector(".slider_wrap");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4"],
  afterLoad: (old_el, new_el) => {
    if (new_el.index === 1) {
      sec2();
    }
    if (new_el.index === 2) {
      sec2_reset();
    }
  },
});

function sec2() {
  slider_wrap.classList.add("active");
}
function sec2_reset() {
  slider_wrap.classList.remove("active");
}
