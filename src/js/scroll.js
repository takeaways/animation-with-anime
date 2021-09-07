import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4"],
});
