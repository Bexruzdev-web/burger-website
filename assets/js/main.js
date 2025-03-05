document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  let mouseX = 0,
    mouseY = 0;
  let dotX = 0,
    dotY = 0;
  let ringX = 0,
    ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // Smooth follow effect for dot (faster)
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;

    // Smooth follow effect for ring (slower)
    ringX += (mouseX - ringX) * 0.05;
    ringY += (mouseY - ringY) * 0.05;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
});
