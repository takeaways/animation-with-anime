import anime from "animejs/lib/anime.es.js";

export function logo() {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
}

export function sectionZeroAnime() {
  anime({
    targets: "#sec0 .section0-svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 3000,
    delay: function (el, i) {
      return i * 400;
    },
    direction: "alternate",
    loop: true,
  });
}

export function sectionOneAnime() {
  const tl = anime.timeline({
    duration: 500,
    easing: "linear",
  });

  tl.add({
    targets: "#sec1 h1",
    opacity: 1,
    translateY: 50,
  }).add({
    targets: ".slider_wrap",
    opacity: 1,
    translateY: 50,
  });
}

//section2
export function sectionTwoAnime() {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "20%",
  })
    .add({
      targets: ".g02",
      height: "44%",
    })
    .add({
      targets: ".g03",
      height: "90%",
    })
    .add({
      targets: ".g04",
      height: "88%",
    });
}

export function resetSectionTwoAnime() {
  anime({
    targets: ".gage_in",
    height: "0%",
  });
}

//section3
export function sectionThreeAnime() {
  const d0 =
    "M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z";

  const d1 =
    "M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z";

  const d2 =
    "M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z";

  anime({
    targets: ".sec3_svg path",
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    fill: [{ value: "#667eea" }, { value: "#764ba2" }, { value: "#66a6ff" }],
    duration: 3000,
    easing: "easeInOutQuart",
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: "#sec3 h1 span",
    delay: anime.stagger(100),
    opacity: 1,
    translateX: 100,
  });
}

//section4
const staggerWrap = document.querySelector("#sec4 .img_wrap");
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];
const allEl = col * row;
for (let i = 0; i < allEl; i++) {
  const div = document.createElement("div");
  fragment.appendChild(div);
  div.setAttribute("class", "tail");
}
staggerWrap.appendChild(fragment);
export function sectionFourAnime() {
  const tl = anime.timeline({
    targets: ".tail",
    easing: "easeInBack",
    delay: anime.stagger(10, { from: "last" }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });

  tl.add({
    targets: "#sec4 h1 img",
    opacity: 0,
    duration: 1000,
  })
    .add({
      translateX: () => anime.random(-500, 500),
      translateY: () => anime.random(-500, 500),
      delay: anime.stagger(200, { grid, from: "last" }),
      scale: 0.1,
      backgroundColor: "#fff",
      borderRadius: "50%",
    })
    .add({
      targets: staggerWrap,
      rotate: 360,
      easing: "linear",
      duration: 1000,
      scale: 0.5,
    })
    .add({
      targets: staggerWrap,
      scale: 1,
      duration: 1000,
    })
    .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid, from: "center" }),
      duration: 1000,
      scale: 0.8,
      backgroundColor: "#2af598",
    })
    .add({
      scale: 0.5,
      duration: 500,
      rotate: 60,
      borderRadius: "0%",
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      scale: 0.8,
      duration: 500,
      rotate: -60,
      borderRadius: "50%",
      backgroundColor: "#fff",
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      scaleX: 0.1,
      scaleY: 1,
      duration: 500,
      rotate: 120,
      borderRadius: "0%",
      backgroundColor: "#2af598",
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      rotate: 0,
      duration: 500,
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      scaleX: 1,
      duration: 500,
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      scale: 1,
      duration: 800,
      backgroundColor: "#7028e4",
      delay: anime.stagger(100, { grid, from: "center" }),
    })
    .add({
      targets: "#sec4 h1 img",
      opacity: 1,
      duration: 400,
    });

  staggerWrap.addEventListener("click", () => {
    tl.play();
  });
}

sectionFourAnime();
