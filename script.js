alert("JS is loading!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "hotpink";
ctx.fillRect(100, 100, 200, 200);
