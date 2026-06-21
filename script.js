const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function heart(a) {
  return {
    x: 16 * Math.pow(Math.sin(a), 3),
    y:
      13 * Math.cos(a) -
      5 * Math.cos(2 * a) -
      2 * Math.cos(3 * a) -
      Math.cos(4 * a)
  };
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale =
    Math.min(canvas.width, canvas.height) / 45;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ea80b0";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#ea80b0";

  for (let i = 0; i < 80; i++) {
    const a = t + i * 0.08;
    const p = heart(a);

    const x = cx + p.x * scale;
    const y = cy - p.y * scale;

    ctx.fillText("I love you", x, y);
  }

  t += 0.03;
  requestAnimationFrame(draw);
}

draw();
