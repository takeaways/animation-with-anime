const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector("#sec5 .inner");
const coin = document.getElementById("coin");
const backgroundImage = new Image();
backgroundImage.src = "image/back.png";

const width = 300;
const height = 200;
const maxDeg = 15;
const coinSize = 50 / 2;
const coinPosition = { x: 0, y: 0 };

// event handlers

function handleLoad() {
  container.style.width = width + "px";
  container.style.height = height + "px";
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(backgroundImage, 0, 0, width, height);
}
function handleMouseMove(e) {
  const { clientX, clientY } = e;
  const { width, height, x, y } = container.getBoundingClientRect();

  const centerPosition = {
    x: x + width / 2,
    y: y + height / 2,
  };

  const moveRate = {
    x: (centerPosition.x - clientX) / 150,
    y: (centerPosition.y - clientY) / 100,
  };

  coinPosition["x"] = clientX - x - coinSize;
  coinPosition["y"] = clientY - y - coinSize;

  container.style.transform = `
    rotateX(${moveRate.y * maxDeg}deg) rotateY(${moveRate.x * maxDeg}deg)
  `;
  coin.style.transform = `
    translate(${coinPosition.x}px, ${coinPosition.y}px)
  `;
}

function handleScratch(e) {
  e.stopPropagation();
  if (e.touches) {
    e = e.touches[0];
  }

  const { clientX, clientY } = e;
  const { x, y } = container.getBoundingClientRect();

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(clientX - x, clientY - y, 15, 0, Math.PI * 2, true);
  ctx.fill();

  coinPosition["x"] = clientX - x - coinSize;
  coinPosition["y"] = clientY - y - coinSize;

  coin.style.transform = `
    translate(${coinPosition.x}px, ${coinPosition.y}px)
  `;
}

// binding event

// 1 mouse
container.addEventListener("mousemove", handleMouseMove);
container.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  container.removeEventListener("mousemove", handleMouseMove);
  container.addEventListener("mousemove", handleScratch);
});
container.addEventListener("mouseup", (e) => {
  e.stopPropagation();
  container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  container.addEventListener("mousemove", handleMouseMove);
  container.removeEventListener("mousemove", handleScratch);
});
container.addEventListener("mouseover", () => {
  container.style.transition = `transform .1s ease-in-out`;
});
container.addEventListener("mouseleave", () => {
  container.style.transition = `transform 1s ease-in-out`;
  container.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

container.addEventListener("touchmove", handleScratch);

window.addEventListener("load", handleLoad);
