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

let t = 0;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const h = heart(t);

  const scale = Math.min(canvas.width, canvas.height) / 40;

  const x = canvas.width / 2 + h.x * scale;
  const y = canvas.height / 2 - h.y * scale;

  ctx.fillStyle = "#ea80b0";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#ea80b0";
  ctx.font = "18px Arial";
  ctx.textAlign = "center";

  ctx.fillText("I love you", x, y);

  t += 0.03;

  requestAnimationFrame(draw);
}

draw();
