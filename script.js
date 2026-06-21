const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Heart equation
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

// Create lots of glowing texts
const particles = [];
const COUNT = 80;

for (let i = 0; i < COUNT; i++) {
  particles.push({
    t: (Math.PI * 2 * i) / COUNT
  });
}

function draw() {
  // Creates the fading trail
  ctx.fillStyle = "rgba(0,0,0,0.06)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale = Math.min(canvas.width, canvas.height) / 45;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  particles.forEach((p, i) => {
    const h = heart(p.t);

    const x = cx + h.x * scale;
    const y = cy - h.y * scale;

    ctx.save();

    // Rotate text along the curve
    const h2 = heart(p.t + 0.02);
    const x2 = cx + h2.x * scale;
    const y2 = cy - h2.y * scale;

    const angle = Math.atan2(y2 - y, x2 - x);

    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#ff8fc7";
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#ff8fc7";

    ctx.fillText("I love you", 0, 0);

    ctx.restore();
  });

  // Move everything together around the heart
  particles.forEach((p) => {
    p.t += 0.02;

    if (p.t > Math.PI * 2) {
      p.t -= Math.PI * 2;
    }
  });

  requestAnimationFrame(draw);
}

draw();
