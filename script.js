const svg = document.querySelector(".heart");

if (!svg) {
  console.log("SVG not found");
} else {
  for (let i = 0; i < 30; i++) {
    const text = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    text.setAttribute("class", "love");

    const textPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "textPath"
    );

    textPath.setAttribute("href", "#heartPath");
    textPath.setAttribute("startOffset", `${i}%`);

    textPath.textContent =
      " I love you I love you I love you I love you ";

    text.appendChild(textPath);
    svg.appendChild(text);
  }
}
