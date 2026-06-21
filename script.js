const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

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

const particles = [];
const COUNT = 60;

for (let i = 0; i < COUNT; i++) {
  particles.push({
    t: (Math.PI * 2 * i) / COUNT,
    speed: 0.01
  });
}

function draw() {
  // Creates a fading trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(canvas.width, canvas.height) / 45;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  particles.forEach((p) => {
    const h = heart(p.t);

    const x = cx + h.x * scale;
    const y = cy - h.y * scale;

    ctx.save();

    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#ea80b0";
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#ea80b0";

    ctx.fillText("I love you", x, y);

    ctx.restore();

    p.t += p.speed;

    if (p.t >= Math.PI * 2) {
      p.t = 0;
    }
  });

  requestAnimationFrame(draw);
}

draw();
