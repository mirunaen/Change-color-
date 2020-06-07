const colorBtn = document.querySelector(".btn");
const bodyBcg = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  bodyBcg.style.backgroundColor = colors[2];
}
