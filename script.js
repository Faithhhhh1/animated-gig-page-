const svg = document.querySelector(".heart");

// Number of text layers
const layers = 30;

for (let i = 0; i < layers; i++) {
  // Create <text>
  const text = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );

  text.setAttribute("class", "love horizontal");

  // Used by CSS animation-delay
  text.style.setProperty("--i", i);

  // Create <textPath>
  const textPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "textPath"
  );

  // Attach text to the heart path
  textPath.setAttribute("href", "#heartPath");

  // Slightly offset each line
  textPath.setAttribute(
    "startOffset",
    `${i * 0.35}%`
  );

  // Repeat text around the heart
  textPath.textContent =
    " I love you  I love you  I love you  I love you  I love you  I love you ";

  text.appendChild(textPath);
  svg.appendChild(text);
}
