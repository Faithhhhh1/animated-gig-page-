// Animate the text moving around the heart path
const textPath = document.querySelector("textPath");

let offset = 0;

function animateHeart() {
  offset += 0.15;

  if (offset >= 100) {
    offset = 0;
  }

  textPath.setAttribute("startOffset", `${offset}%`);
  requestAnimationFrame(animateHeart);
}

animateHeart();


// Optional: Add a subtle floating effect to the SVG
const heart = document.querySelector(".heart-svg");

let angle = 0;

function floatHeart() {
  angle += 0.02;

  const y = Math.sin(angle) * 10;
  const rotate = Math.sin(angle * 0.5) * 2;

  heart.style.transform = `
    translateY(${y}px)
    rotate(${rotate}deg)
  `;

  requestAnimationFrame(floatHeart);
}

floatHeart();


// Optional: Mouse glow effect
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
});
