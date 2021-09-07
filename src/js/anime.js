import anime from "animejs/lib/anime.es.js";

const tl = anime.timeline({
  easing: "linear",
  duration: 1000,
});

tl.add({
  targets: ".box1",
  translateX: 500,
})
  .add({
    targets: ".box1",
    translateY: 500,
  })
  .add({
    targets: ".box1",
    translateX: 0,
  })
  .add({
    targets: ".box1",
    translateY: 0,
  })
  .add({
    targets: ".box2",
    scale: 0.3,
    rotate: 360,
    borderRadius: "50%",
  });
