import anime from "animejs/lib/anime.es.js";
anime({
  targets: "ul li",
  translateY: (el, i) => (i % 2 === 0 ? 100 : -100),
  easing: "linear",
  duration: 1500,
  opacity: 0.5,
  delay: anime.stagger(300),
});
