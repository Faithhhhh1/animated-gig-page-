const heart = document.getElementById("heart");

const total = 400;

for (let i = 0; i < total; i++) {
  const span = document.createElement("span");
  span.className = "word";
  span.innerText = "i love you";

  const t = (Math.PI * 2 * i) / total;

  // Heart equation
  const x =
    16 * Math.pow(Math.sin(t), 3);

  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  const scale = 12;

  const px = x * scale;
  const py = -y * scale;

  span.style.left = `${250 + px}px`;
  span.style.top = `${250 + py}px`;

  // Rotate text along curve
  const angle = Math.atan2(py, px);
  span.style.transform =
    `translate(-50%, -50%)
     rotate(${angle}rad)`;

  heart.appendChild(span);
}

// Slow rotation
let rot = 0;

function animate() {
  rot += 0.1;

  heart.style.transform =
    `rotate(${rot}deg)`;

  requestAnimationFrame(animate);
}

animate();
