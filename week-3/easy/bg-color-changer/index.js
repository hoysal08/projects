const colors = [
  { name: "Red", hexCode: "#FF0000" },
  { name: "Green", hexCode: "#00FF00" },
  { name: "Blue", hexCode: "#0000FF" },
  { name: "Yellow", hexCode: "#FFFF00" },
  { name: "Cyan", hexCode: "#00FFFF" },
  { name: "Magenta", hexCode: "#FF00FF" },
  { name: "Black", hexCode: "#000000" },
  { name: "Gray", hexCode: "#808080" },
  { name: "Orange", hexCode: "#FFA500" },
  { name: "Clear", hexCode: "#FFFFFF" },
];

const BLACK_COLOR = "#000000";
const WHITE_COLOR = "#FFFFFF";

const footer = document.querySelector(".footer");
const bodyWrapper = document.querySelector(".body-wrapper");
colors.forEach((ele, index) => {
  const button = document.createElement("button");
  button.innerHTML = ele.name;
  button.style.backgroundColor = ele.hexCode;
  button.value = ele.hexCode;
  button.className = "btn";
  if (ele.hexCode == BLACK_COLOR) {
    button.style.color = WHITE_COLOR;
  }
  button.addEventListener("click", changeBackgroundColor);
  footer.appendChild(button);
});

function changeBackgroundColor(event) {
  const hexCode = event.target.value;
  bodyWrapper.style.backgroundColor = hexCode;
}
