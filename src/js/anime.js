import anime from "animejs/lib/anime.es.js";

const path = anime.path(".svg path");
anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 2000,
  loop: true,
});
