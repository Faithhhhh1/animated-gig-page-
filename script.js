1const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let rotation = 0;

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

function drawHeart(offset, angle) {
  const scale = Math.min(canvas.width, canvas.height) / 45;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.beginPath();

  for (let t = 0; t <= Math.PI * 2; t += 0.02) {
    const h = heart(t);

    let x = h.x * scale;
    let y = -h.y * scale;

    // rotate
    const rx =
      x * Math.cos(angle) -
      y * Math.sin(angle);

    const ry =
      x * Math.sin(angle) +
      y * Math.cos(angle);

    const px = cx + rx + offset;
    const py = cy + ry;

    if (t === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.closePath();

  ctx.lineWidth = 4;
  ctx.strokeStyle = "#ff9acb";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#ff9acb";
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw many hearts
  for (let i = -25; i <= 25; i++) {
    drawHeart(i * 4, rotation);
  }

  rotation += 0.01;

  requestAnimationFrame(animate);
}

animate();
