const colorBtn = document.querySelector(".btn");
const bodyBcg = document.querySelector("body");

const colors = [
  "yellow",
  "red",
  "green",
  "#3b5998",
  "#FAEBD7",
  "#00FFFF",
  "#F0F8FF",
  "#7FFF00",
  "#D2691E",
  "#6495ED",
  "#B8860B",
  "#DC143C",
];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  // bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
