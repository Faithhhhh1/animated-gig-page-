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

let offset = 0;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const scale =
    Math.min(canvas.width, canvas.height) / 55;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ea80b0";
  ctx.shadowBlur = 15;
  ctx.shadowColor = "#ea80b0";

  // draw many lines of text
  for (let row = 0; row < 5; row++) {
    for (let i = 0; i < 120; i++) {
      const t =
        (i / 120) * Math.PI * 2 +
        offset +
        row * 0.18;

      const p = heart(t);

      const x =
        cx +
        p.x * scale +
        row * 10;

      const y =
        cy -
        p.y * scale +
        row * 10;

      ctx.fillText("I love you", x, y);
    }
  }

  offset += 0.02;
  requestAnimationFrame(draw);
}

draw();
