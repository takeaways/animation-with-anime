import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

import {
  sectionZeroAnime,
  sectionOneAnime,
  sectionTwoAnime,
  resetSectionTwoAnime,
  sectionThreeAnime,
} from "./anime";

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4", "num5"],
  afterLoad: (old_el, new_el) => {
    if (new_el.index === 0) {
      sectionZeroAnime();
    }
    if (new_el.index === 1) {
      sectionOneAnime();
    }
    if (new_el.index === 2) {
      sectionTwoAnime();
    }
    if (old_el.index === 2) {
      resetSectionTwoAnime();
    }
    if (new_el.index === 3) {
      sectionThreeAnime();
    }
  },
});
