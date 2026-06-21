const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

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

let rot = 0;

function drawHeart(angleOffset) {
  const scale = Math.min(canvas.width, canvas.height) / 55;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.beginPath();

  for (let t = 0; t <= Math.PI * 2; t += 0.02) {
    const p = heart(t);

    let x = p.x * scale;
    let y = -p.y * scale;

    // fake 3D rotation
    const z = Math.sin(angleOffset) * 180;

    x += z;

    const px = cx + x;
    const py = cy + y;

    if (t === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }

  ctx.strokeStyle = "#ff9acb";
  ctx.lineWidth = 3;
  ctx.shadowBlur = 18;
  ctx.shadowColor = "#ff9acb";
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw many copies
  for (let i = 0; i < 40; i++) {
    const a = rot + i * 0.15;
    drawHeart(a);
  }

  rot += 0.03;

  requestAnimationFrame(animate);
}

animate();
