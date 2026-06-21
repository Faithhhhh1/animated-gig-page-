const ui = document.getElementById("ui");

for (let i = 0; i < 28; i++) {
  const row = document.createElement("div");

  row.className = "love_horizontal";
  row.style.setProperty("--i", i);

  const text = document.createElement("div");
  text.className = "love_word";

  text.textContent =
    "I love you I love you I love you I love you I love you I love you";

  row.appendChild(text);
  ui.appendChild(row);
}
