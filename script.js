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

let time = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale =
    Math.min(canvas.width, canvas.height) / 60;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.font = "16px Arial";
  ctx.fillStyle = "#ea80b0";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // only a few layers
  for (let line = 0; line < 6; line++) {
    for (let i = 0; i < 55; i++) {
      const t =
        (i / 55) * Math.PI * 2 +
        time +
        line * 0.12;

      const p = heart(t);

      const x =
        cx +
        p.x * scale +
        line * 5;

      const y =
        cy -
        p.y * scale +
        line * 5;

      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(-Math.PI / 6);

      ctx.shadowBlur = 6;
      ctx.shadowColor = "#ea80b0";

      ctx.fillText("I love you", 0, 0);

      ctx.restore();
    }
  }

  time += 0.015;
  requestAnimationFrame(draw);
}

draw();
