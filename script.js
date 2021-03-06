clickBtn = document.querySelector("button");
clickBtn.addEventListener("click", changeColor);
hexColor = document.querySelector('h1');
colors = ["#a5c5d9", "#c7d9a5", '#942942', '#a15f5f', '#451c3d', '#d1d1d1', '#e6b8d2', '#d6223d', '#ad5100'];

function changeColor() {
  randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
  hexColor.innerHTML = `The HEX ID is ${colors[randomColor]}`;
}

