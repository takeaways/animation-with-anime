import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

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
    if (old_el.index === 2) {
      sec2_reset();
    }
  },
});

function sec2() {
  console.log("s");
}
function sec2_reset() {
  console.log("r");
}
