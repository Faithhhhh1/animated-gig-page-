const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const trails = [];

for (let i = 0; i < 25; i++) {
  trails.push({
    t: i * 0.1,
    speed: 0.01
  });
}

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

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(canvas.width, canvas.height) / 40;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.font = "14px Arial";
  ctx.textAlign = "center";

  trails.forEach((p, i) => {
    const h = heart(p.t);

    const x = cx + h.x * scale;
    const y = cy - h.y * scale;

    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ea80b0";
    ctx.fillStyle = "#ea80b0";
    ctx.fillText("I love you", x, y);

    p.t += p.speed;

    if (p.t > Math.PI * 2) {
      p.t = 0;
    }
  });

  requestAnimationFrame(draw);
}

draw();
