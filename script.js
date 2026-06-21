const ui = document.getElementById("ui");

function heart(t) {
  return {
    x: 16 * Math.pow(Math.sin(t), 3),
    y:
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
  };
}

const layers = 7;
const count = 90;
const words = [];

for (let l = 0; l < layers; l++) {
  const row = [];

  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.className = "love_word";
    div.textContent = "I love you";

    ui.appendChild(div);
    row.push(div);
  }

  words.push(row);
}

let time = 0;

function animate() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const scale = Math.min(window.innerWidth, window.innerHeight) / 45;

  for (let l = 0; l < layers; l++) {
    for (let i = 0; i < count; i++) {
      const t =
        (i / count) * Math.PI * 2 +
        time +
        l * 0.12;

      const p = heart(t);

      const x =
        cx +
        p.x * scale +
        l * 12;

      const y =
        cy -
        p.y * scale;

      const el = words[l][i];

      el.style.left = x + "px";
      el.style.top = y + "px";
    }
  }

  time += 0.02;
  requestAnimationFrame(animate);
}

animate();
