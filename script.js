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
  // don't fully clear canvas
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(canvas.width, canvas.height) / 45;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.beginPath();

  for (let a = 0; a <= Math.PI * 2; a += 0.02) {
    const h = heart(a + t);

    const x = cx + h.x * scale;
    const y = cy - h.y * scale;

    if (a === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.lineWidth = 18;
  ctx.strokeStyle = "#ff9acb";
  ctx.shadowBlur = 40;
  ctx.shadowColor = "#ff9acb";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();

  t += 0.003;

  requestAnimationFrame(draw);
}

draw();
