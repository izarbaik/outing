const music = document.getElementById("bgMusic");

document.body.addEventListener(
  "pointerdown",
  () => {
    music.play().catch(() => {});
  },
  { once: true }
);