//elements
const startBTN = document.getElementById("startBtn");
const switchBTN = document.getElementById("checkbox");


startBTN.addEventListener("click", () => {
  startBTN.style.display = "none";
  switchBTN.setAttribute("checked", "false")
})